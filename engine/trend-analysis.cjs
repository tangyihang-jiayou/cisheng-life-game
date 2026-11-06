'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');

// These weights describe an authored narrative angle, not a classical scoring
// canon or an empirically calibrated forecast. Fix weights before reading peaks.
const RULES = {
  version: '1.0.0',
  layer: { natal: 0.30, decadal: 0.75, yearly: 1, childhood: 0.40 },
  opportunityTransform: { 禄: 9, 权: 7, 科: 6, 忌: 0 },
  pressureTransform: { 禄: 0, 权: 2, 科: 0, 忌: 16 },
  opportunityPalace: { 命宫: 1.15, 官禄: 1.25, 财帛: 1.15, 迁移: 1.05, 田宅: 0.75, 福德: 0.75, 子女: 0.65, 仆役: 0.65, 兄弟: 0.60, 父母: 0.55, 夫妻: 0.50, 疾厄: 0.35 },
  pressurePalace: { 命宫: 1.20, 福德: 1.20, 财帛: 1.15, 夫妻: 1.10, 官禄: 1, 疾厄: 1, 迁移: 0.90, 田宅: 0.80, 仆役: 0.80, 兄弟: 0.70, 父母: 0.70, 子女: 0.65 },
  contextMix: { yearly: { annualPalace: 0.60, decadalPalace: 0.25, natalPalace: 0.15 }, decadal: { decadalPalace: 0.70, natalPalace: 0.30 }, natal: { natalPalace: 1 } },
  pairLayer: { 'natal+decadal': 0.60, 'natal+yearly': 0.90, 'decadal+yearly': 1.10 },
  pairPoints: {
    禄禄: [5, 0], 禄权: [6, 2], 禄科: [5, 0.5], 禄忌: [1.5, 6],
    权权: [4, 2.5], 权科: [4, 1], 权忌: [1, 7],
    科科: [3, 0.5], 科忌: [0.5, 5], 忌忌: [0, 8],
  },
  majorProfile: {
    太阳: [3.2, 0.8, '公开表达与承担'], 太阴: [2.5, 1.0, '观察与品质'],
    天机: [3.0, 1.6, '设计与改进'], 巨门: [2.6, 1.8, '辨析与解释'],
    紫微: [3.2, 1.0, '统筹'], 天相: [2.8, 0.6, '协调把关'],
    天梁: [2.8, 1.0, '原则与经验'], 武曲: [3.2, 1.2, '执行与资源纪律'],
    天府: [3.0, 0.5, '承载与储备'], 破军: [3.0, 2.0, '更新与试错'],
    七杀: [2.9, 2.0, '取舍与执行'], 贪狼: [2.8, 1.5, '体验与连接'],
    天同: [2.2, 0.6, '回应与协调'], 廉贞: [2.6, 1.6, '投入与边界'],
  },
  majorAnnualRole: { 命宫: [1, 0.50], 官禄: [0.80, 0.35], 财帛: [0.65, 0.25], 迁移: [0.50, 0.20] },
  majorDecadalSoul: [0.50, 0.45],
  majorNatalSoul: [0.35, 0.20],
  activationRole: { 命宫: 1, 福德: 0.80, 官禄: 0.65, 财帛: 0.65, 夫妻: 0.60, 迁移: 0.40, 田宅: 0.30, 子女: 0.25, 仆役: 0.25, 兄弟: 0.25, 父母: 0.25, 疾厄: 0.50 },
  natalAuxOpportunity: { 文昌: 0.8, 文曲: 0.8, 左辅: 0.8, 右弼: 0.8, 天魁: 0.8, 天钺: 0.8, 禄存: 1.1 },
  natalAuxPressure: { 擎羊: 2.2, 陀罗: 1.8, 火星: 1.8, 铃星: 1.8, 地空: 1, 地劫: 1 },
  natalAuxDecadalFactor: 0.45,
  transit: { yearly: 0.65, decadal: 0.30 },
  transitType: { soft: [0.6, 0], lucun: [0.9, 0], tough: [0, 1] },
  rawSharedBounds: [25, 75],
  displayGain: 3,
};
const LABEL = { natal: '生年', decadal: '大限', yearly: '流年', childhood: '童限' };
const TYPE_ORDER = ['禄', '权', '科', '忌'];
const round = n => Math.round((n + Number.EPSILON) * 1000) / 1000;
const ledgerRound = n => Math.round((n + Number.EPSILON) * 1000000) / 1000000;
const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
const sourceFiles = ['dist/life-data.json', 'engine/facts.json'];
const project = path.resolve(__dirname, '..');
const sourceText = Object.fromEntries(sourceFiles.map(p => [p, fs.readFileSync(path.join(project, p), 'utf8')]));
const data = JSON.parse(sourceText[sourceFiles[0]]);
const facts = JSON.parse(sourceText[sourceFiles[1]]);
const palaces = new Map(data.palaces.map(p => [p.name, p]));
const factYears = new Map(facts.years.map(y => [y.year, y]));
assert.equal(data.years.length, 101);
assert.deepEqual(data.years.map(y => y.year), Array.from({ length: 101 }, (_, i) => i + 2000));
for (const y of data.years) {
  const f = factYears.get(y.year);
  for (const k of ['annualPalace', 'decadalPalace', 'annualMutations', 'decadalMutations']) assert.deepEqual(y[k], f[k], `${y.year}.${k}: sources disagree`);
}

function relevance(m, layer, axis) {
  const w = RULES[axis + 'Palace'];
  return Object.entries(RULES.contextMix[layer]).reduce((n, [field, weight]) => n + w[m[field]] * weight, 0);
}
function pairKey(a, b) { return [a, b].sort((x, y) => TYPE_ORDER.indexOf(x) - TYPE_ORDER.indexOf(y)).join(''); }
function soulPalace(y, scope) { return y.annualPalaces.find(p => p[scope] === '命宫'); }
function buildLedger(y) {
  const contributions = [], stackDrivers = [];
  const dLabel = y.scopeName === '童限' ? LABEL.childhood : LABEL.decadal;
  const dFactor = y.scopeName === '童限' ? RULES.layer.childhood : RULES.layer.decadal;
  function add(axis, layer, kind, points, label, focus) {
    if (points) contributions.push({ axis, layer, kind, points, label, focus: focus || '' });
  }
  const layers = [
    { key: 'natal', label: LABEL.natal, factor: RULES.layer.natal, ms: y.natalMutations },
    { key: 'decadal', label: dLabel, factor: dFactor, ms: y.decadalMutations },
    { key: 'yearly', label: LABEL.yearly, factor: RULES.layer.yearly, ms: y.annualMutations },
  ];
  for (const layer of layers) for (const m of layer.ms) {
    const where = layer.key === 'yearly' ? `流年${m.annualPalace}／${dLabel}${m.decadalPalace}／本命${m.natalPalace}` : layer.key === 'decadal' ? `${dLabel}${m.decadalPalace}／本命${m.natalPalace}` : `本命${m.natalPalace}`;
    for (const axis of ['opportunity', 'pressure']) {
      const pts = RULES[axis + 'Transform'][m.type] * layer.factor * relevance(m, layer.key, axis);
      add(axis, layer.key, '四化', pts, `${layer.label}${m.star}化${m.type}→${where}`, layer.key === 'yearly' ? m.annualPalace : layer.key === 'decadal' ? m.decadalPalace : m.natalPalace);
    }
  }
  // Cross-layer pairs are counted once per star and pair of layers. A positive
  // transformation meeting 忌 retains its opportunity and adds a separate cost.
  for (let i = 0; i < layers.length; i++) for (let j = i + 1; j < layers.length; j++) {
    const a = layers[i], b = layers[j], pairLayer = a.key + '+' + b.key;
    for (const am of a.ms) {
      const bm = b.ms.find(m => m.star === am.star); if (!bm) continue;
      const base = RULES.pairPoints[pairKey(am.type, bm.type)];
      const factor = RULES.pairLayer[pairLayer] * (a.key === 'decadal' || b.key === 'decadal' ? dFactor / RULES.layer.decadal : 1);
      const label = `${am.star}：${a.label}${am.type}＋${b.label}${bm.type}同星，本命${am.natalPalace}${palaces.get(am.natalPalace).isBody ? '（身宫）' : ''}`;
      const points = base.map((v, k) => v * factor * (relevance(am, a.key, k ? 'pressure' : 'opportunity') + relevance(bm, b.key, k ? 'pressure' : 'opportunity')) / 2);
      add('opportunity', pairLayer, '同星叠化', points[0], label, am.natalPalace);
      add('pressure', pairLayer, '同星叠化', points[1], label, am.natalPalace);
      stackDrivers.push({ label, opportunity: points[0], pressure: points[1], active: b.key === 'yearly' });
    }
  }
  function majorStructure(p, role, factors, layer, label) {
    const native = palaces.get(p.natal || p.name);
    const stars = native.major.filter(s => RULES.majorProfile[s.name]);
    // Empty palaces keep that identity. Borrowing uses half strength as an
    // explicitly labelled narrative reference, never copies stars into the palace.
    const borrowed = !stars.length;
    const used = borrowed ? data.palaces[(native.index + 6) % 12].major.filter(s => RULES.majorProfile[s.name]) : stars;
    if (!used.length) return;
    const suffix = borrowed ? '空宫，半权参照对宫' : '';
    const head = `${label}${role}叠本命${native.name}：${suffix}${used.map(s => s.name).join('／')}`;
    for (let k = 0; k < 2; k++) add(k ? 'pressure' : 'opportunity', layer, '主星叙事结构', used.reduce((n, s) => n + RULES.majorProfile[s.name][k], 0) * factors[k] * (borrowed ? 0.5 : 1), head, role);
  }
  for (const [role, factors] of Object.entries(RULES.majorAnnualRole)) majorStructure(y.annualPalaces.find(p => p.annual === role), role, factors, 'yearly', '流年');
  majorStructure(soulPalace(y, 'decadal'), '命宫', RULES.majorDecadalSoul.map(v => v * dFactor / RULES.layer.decadal), 'decadal', dLabel);
  majorStructure(palaces.get('命宫'), '命宫', RULES.majorNatalSoul, 'natal', '本命');
  for (const p of data.palaces) {
    const mapping = y.annualPalaces.find(m => m.index === p.index);
    for (const [layer, role, factor, label] of [['yearly', mapping.annual, 1, '流年'], ['decadal', mapping.decadal, RULES.natalAuxDecadalFactor * dFactor / RULES.layer.decadal, dLabel]]) {
      for (const s of p.minor) {
        for (const axis of ['opportunity', 'pressure']) {
          const base = RULES[axis === 'opportunity' ? 'natalAuxOpportunity' : 'natalAuxPressure'][s.name] || 0;
          add(axis, layer, '原局辅煞落运限宫', base * RULES.activationRole[role] * factor, `原局${s.name}在本命${p.name}，叠${label}${role}`, role);
        }
      }
    }
  }
  for (const [scope, lists, field, factor, label] of [['yearly', y.annualTransitStars, 'annual', RULES.transit.yearly, '流曜'], ['decadal', y.decadalTransitStars, 'decadal', RULES.transit.decadal * dFactor / RULES.layer.decadal, '运曜']]) {
    for (let i = 0; i < lists.length; i++) for (const s of lists[i]) {
      const profile = RULES.transitType[s.type]; if (!profile) continue;
      const mapping = y.annualPalaces.find(m => m.index === i), role = mapping[field];
      for (let k = 0; k < 2; k++) add(k ? 'pressure' : 'opportunity', scope, '运限辅煞', profile[k] * RULES.activationRole[role] * factor, `${label}${s.name}入${scope === 'yearly' ? '流年' : dLabel}${role}，叠本命${mapping.natal}`, role);
    }
  }
  const sum = axis => contributions.filter(c => c.axis === axis).reduce((n, c) => n + c.points, 0);
  const opportunitySum = sum('opportunity'), pressureSum = sum('pressure');
  return { y, contributions, stackDrivers, opportunitySum, pressureSum, difference: opportunitySum - pressureSum };
}

const ledgers = data.years.map(buildLedger);
const pool = ledgers.flatMap(l => [l.opportunitySum, l.pressureSum]);
const sharedMin = Math.min(...pool), sharedMax = Math.max(...pool);
const slope = (RULES.rawSharedBounds[1] - RULES.rawSharedBounds[0]) / (sharedMax - sharedMin);
assert.ok(Number.isFinite(slope) && slope > 0);
const toRaw = n => RULES.rawSharedBounds[0] + (n - sharedMin) * slope;
const toDisplay = n => Math.round((50 + 50 * Math.tanh(RULES.displayGain * (n - 50) / 50)) * 10) / 10;
const sumContrib = (cs, axis) => cs.filter(c => c.axis === axis).reduce((n, c) => n + c.points, 0);
const points = n => '+' + round(n).toFixed(1);
const scene = { 命宫: '自主与定位', 官禄: '角色与交付', 财帛: '资源交换', 迁移: '环境探索', 福德: '思考与节律', 夫妻: '一对一协商', 田宅: '基地与承接', 子女: '作品试验', 兄弟: '同辈分工', 仆役: '协作接口', 父母: '外部标准', 疾厄: '日常承载' };
const childScene = { ...scene, 官禄: '练习与任务', 财帛: '时间与物品安排', 夫妻: '一对一回应', 子女: '小作品尝试', 兄弟: '同辈相处', 仆役: '共同游戏', 田宅: '日常环境' };
const years = {};
for (const l of ledgers) {
  const y = l.y, cs = l.contributions;
  const focusScene = y.age < 13 ? childScene : scene;
  const rawO = toRaw(l.opportunitySum), rawP = toRaw(l.pressureSum), rawB = clamp(50 + rawO - rawP, 0, 100);
  const yearO = cs.filter(c => c.axis === 'opportunity' && c.layer === 'yearly' && c.kind === '四化').sort((a, b) => b.points - a.points)[0];
  const yearP = cs.filter(c => c.axis === 'pressure' && c.layer === 'yearly' && c.kind === '四化').sort((a, b) => b.points - a.points)[0];
  const slow = cs.filter(c => ['natal', 'decadal', 'natal+decadal'].includes(c.layer));
  const sd = l.stackDrivers.filter(s => s.active).sort((a, b) => Math.max(b.opportunity, b.pressure) - Math.max(a.opportunity, a.pressure))[0] || l.stackDrivers[0];
  const structure = cs.filter(c => c.kind === '主星叙事结构' && c.layer === 'yearly');
  const yearSoul = soulPalace(y, 'annual'), yearCareer = y.annualPalaces.find(p => p.annual === '官禄');
  const drivers = [
    `机会底账${points(yearO.points)}｜${yearO.label}。`,
    `阻力底账${points(yearP.points)}｜${yearP.label}，重点落在${focusScene[yearP.focus]}。`,
    sd ? `叠化｜${sd.label}：机会${points(sd.opportunity)}／阻力${points(sd.pressure)}，两账分别保留。` : '',
    `慢基线｜${y.scopeName}${y.decadalStem}${y.decadalBranch}叠本命${y.decadalPalace}；生年＋${y.scopeName}及二者叠化合计机会${points(sumContrib(slow, 'opportunity'))}／阻力${points(sumContrib(slow, 'pressure'))}。`,
    `可用结构｜年命叠本命${yearSoul.natal}（${yearSoul.stars.join('／') || '空主星'}），年官叠本命${yearCareer.natal}（${yearCareer.stars.join('／') || '空主星'}）；命官财迁主星合计机会${points(sumContrib(structure, 'opportunity'))}／执行成本${points(sumContrib(structure, 'pressure'))}。`,
  ].filter(Boolean);
  const delta = rawO - rawP;
  const angle = rawO >= 55 && rawP >= 55 ? '机会与代价同强，带边界推进' : rawO < 45 && rawP < 45 ? '双低触发，小步观察' : delta >= 10 ? '机会占优，择一放大' : delta <= -10 ? '代价占优，先收束再推进' : rawP >= 55 ? '先定承载，再接责任' : delta > 0 ? '机会略占优，在约束内推进' : delta < 0 ? '代价略占优，先留余裕' : '两账持平，以小试验辨方向';
  const stance = `${angle}：主攻${focusScene[yearO.focus]}，把${focusScene[yearP.focus]}作为约束。`;
  years[y.year] = {
    opportunity: toDisplay(round(rawO)), pressure: toDisplay(round(rawP)), balance: toDisplay(round(rawB)),
    raw: { opportunity: round(rawO), pressure: round(rawP), balance: round(rawB) },
    ledger: { opportunitySum: ledgerRound(l.opportunitySum), pressureSum: ledgerRound(l.pressureSum), difference: ledgerRound(l.difference) },
    drivers, stance,
    contributions: cs.map(c => ({ ...c, points: ledgerRound(c.points) })),
  };
}
const range = key => ({ min: round(Math.min(...Object.values(years).map(y => y[key]))), max: round(Math.max(...Object.values(years).map(y => y[key]))) });
const rank = (key, dir) => Object.entries(years).sort((a, b) => dir * (a[1].raw[key] - b[1].raw[key]) || Number(a[0]) - Number(b[0])).slice(0, 5).map(([year, y]) => ({ year: Number(year), raw: y.raw[key], display: y[key], stance: y.stance }));
const metadata = {
  version: RULES.version,
  title: '机会、阻力与净势：双账本叙事信号',
  nature: '传统象义的自编可复算编辑模型，不是古籍规定分数、经验验证吉凶、现实记录、成功概率或财务／健康预测。机会是可用入口与行动资源；阻力是反复、责任和执行成本，越高不等于灾祸。',
  source: sourceFiles.map(file => ({ file, sha256: crypto.createHash('sha256').update(sourceText[file]).digest('hex') })),
  sourceEngine: { name: data.meta.engine, version: data.meta.engineVersion, rules: data.method.school, calendar: data.method.yearBoundary, links: data.sources.filter(s => /四化|运限计算/.test(s.title)).map(s => ({ title: s.title, url: s.url })) },
  sample: { startYear: 2000, endYear: 2100, count: 101, scope: '固定101个农历年度；不按年龄造峰、不随机、不为特定年份回调权重。样本内标尺使用全101年底账；缩放视窗不重新拟合。幼年信号解释为环境、学习与回应，不解释成人事业或收入。' },
  formula: {
    ledger: '机会与阻力均从0累加：四化点×层系数×宫位相关权重＋同星跨层叠化＋命官财迁主星可用结构及执行成本＋辅煞的运限落宫触发。两本账独立保留，不先把禄忌抵销。',
    context: '生年只用本命宫；大限相关权重=0.70×大限宫＋0.30×本命宫；流年=0.60×流年宫＋0.25×大限宫＋0.15×本命宫。相同地支的三层宫名分别读取，不把本命宫误称流年宫。起限前文中的大限宫位字段指童限宫位；四化层系数用childhood=0.40，正式大限用decadal=0.75，不把童限视作十年大限。',
    stack: '每个同星、每对不同时间层只计一次；禄权／禄科等加入口，权的责任成本另列；禄忌／权忌／科忌同时保留机会与代价；忌忌加反复成本。不额外发明三重叠化奖励；不同星仅同宫不冒称同星叠化。',
    major: '主星分数仅表该年的表达、统筹、执行、辨析、更新等叙事可用性与执行复杂度，不是主星自身吉凶等级。空宫仍为空宫，参照对宫仅半权计且逐项标注；未把庙旺硬换算成吉凶。主星结构、四化与辅煞是明确分项，不冒充独立统计证据。',
    raw: '将101年机会／阻力两本底账放入同一数值池：共同最小值→25、共同最大值→75，中间同一线性斜率。raw.opportunity与raw.pressure因此同原点同单位；raw.balance=clamp(50+raw.opportunity−raw.pressure,0,100)。50净势表示两本账相等；单条轴的50仅是样本共同范围中点，不是人群平均、及格线或五成概率。',
    displayTransform: 'display=round1(50+50×tanh(3×(raw−50)/50))，三条线统一处理；默认顶层字段即display。称“戏剧刻度”：中央斜率3×，极值平滑收束，不硬剪出0／100平台，不回改原始底账或raw；可切换原始刻度。',
    driverUnits: 'drivers中的+数字均为0基底账贡献，摘要保留一位小数；ledger和contributions保留六位小数。底账贡献×sharedScale.slope可换成raw增量；戏剧刻度非线性，只有中心附近的局部斜率约3×，不能把每项贡献直接乘3当全程显示增量。幼年的场景用学习、物品与回应解释；这种文案替换不改任何计算权重。',
  },
  sharedScale: { ledgerPoolMin: sharedMin, ledgerPoolMax: sharedMax, rawAtMin: 25, rawAtMax: 75, slope, intercept: 25 - sharedMin * slope },
  bounds: { ledger: '非负加权点，无统计单位；完整未归一化底账可查ledger', rawOpportunityPressure: [25, 75], rawBalance: [0, 100], display: [0, 100], displayCentralSlope: 3, displayCompression: 'tanh单调软压缩，保留一位小数；理论极限0／100不代表现实的绝对好坏' },
  displayCaution: '戏剧刻度只放大阅读对比，不代表现实程度或发生概率；峰谷排序按raw。压力高是成本显著，不等于坏事已发生。净势只覆盖所列符号因素，不是全人生总评。',
  rules: RULES,
  observed: { opportunity: range('opportunity'), pressure: range('pressure'), balance: range('balance'), raw: Object.fromEntries(['opportunity', 'pressure', 'balance'].map(k => [k, { min: round(Math.min(...Object.values(years).map(y => y.raw[k]))), max: round(Math.max(...Object.values(years).map(y => y.raw[k]))) }])) },
  rankings: Object.fromEntries(['opportunity', 'pressure', 'balance'].map(k => [k, { top: rank(k, -1), bottom: rank(k, 1) }])),
  diagnostics: { saturationCounts: Object.fromEntries(['opportunity', 'pressure', 'balance'].map(k => [k, { atZero: Object.values(years).filter(y => y[k] === 0).length, atHundred: Object.values(years).filter(y => y[k] === 100).length }])), highOpportunityAndPressureYears: Object.entries(years).filter(([, y]) => y.raw.opportunity >= 55 && y.raw.pressure >= 55).map(([y]) => Number(y)) },
  slowBaselines: data.decades.flatMap(d => {
    const examples = ledgers.filter(l => l.y.decadeId === d.id);
    return (d.id === 'child' ? examples : examples.slice(0, 1)).map(l => {
      const cs = l.contributions.filter(c => ['natal', 'decadal', 'natal+decadal'].includes(c.layer));
      return { id: d.id, startYear: d.id === 'child' ? l.y.year : d.startYear, endYear: d.id === 'child' ? l.y.year : Math.min(2100, d.endYear), palace: l.y.decadalPalace, scope: l.y.scopeName, stem: l.y.decadalStem, branch: l.y.decadalBranch, opportunitySum: ledgerRound(sumContrib(cs, 'opportunity')), pressureSum: ledgerRound(sumContrib(cs, 'pressure')) };
    });
  }),
};
for (const [year, s] of Object.entries(years)) {
  assert.equal(s.drivers.length, 5, year);
  for (const axis of ['opportunity', 'pressure', 'balance']) assert.ok(Number.isFinite(s[axis]) && s[axis] >= 0 && s[axis] <= 100);
  assert.ok(Math.abs(s.raw.balance - clamp(50 + s.raw.opportunity - s.raw.pressure, 0, 100)) < 0.003);
}
const result = { metadata, years };
fs.writeFileSync(path.join(__dirname, 'trend-signals.json'), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({ years: Object.keys(years).length, sharedScale: metadata.sharedScale, observed: metadata.observed, selected: Object.fromEntries([2026, 2027, 2029, 2032].map(y => { const s = years[y]; return [y, { opportunity: s.opportunity, pressure: s.pressure, balance: s.balance, raw: s.raw, ledger: s.ledger, drivers: s.drivers, stance: s.stance }]; })), rankings: metadata.rankings }, null, 2));
