(function(root){
'use strict';
// 只读展示层：不参与事件筛选、数值计算或存档。
const D=root.LIFE_DATA,Z=root.TANG_ZIWEI;
if(!D||!Z)throw new Error('请先载入 LIFE_DATA 与 TANG_ZIWEI。');
const clone=x=>JSON.parse(JSON.stringify(x));
const rows=new Map(D.years.map(y=>[y.year,y]));
const palaces=new Map(D.palaces.map(p=>[p.name,p]));
const decades=new Map(D.decades.map(d=>[d.id,d]));
const cache=new Map();
const huaIds={禄:'lu',权:'quan',科:'ke',忌:'ji'};
const role={
 命宫:'自我定位与回应外界',兄弟:'同辈之间的分工与互助',夫妻:'一对一关系中的需求与约定',子女:'作品、培养与交接',财帛:'资源分配与交换条件',疾厄:'投入强度与日常节律',迁移:'环境变化与外部接触',仆役:'同行者、团队与合作方式',官禄:'公开责任与交付标准',田宅:'生活基地与长期维护',福德:'内在感受、思考与休息',父母:'学习来源、师长与既有规则'
};
// 宫名先按传统人事范围说明，再给现代生活中的观察窗口。
const annualPalace={
 命宫:{reading:'年命回到本命命宫，观察中心是“我怎样做自己，以及别人怎样认识我”。这里的太阳侧重对外表达、承担与被看见，太阴侧重细节、品质和内在感受。两者同宫，可以把认可与自我要求放在一起读；得到肯定与感到满足，仍是两件需要分别体会的事。',example:'例如：介绍自己、回应评价、决定一项工作做到什么程度。'},
 兄弟:{reading:'传统兄弟宫先指手足与同辈，延伸到平辈合作时，重点在彼此如何出力。武曲重可核对的资源与执行，天府重储备与持续承接。年命落这里，可把“我能做多少”与“大家各负责多少”放到同一张桌上，避免有能力的人自然接下所有缺口。',example:'例如：和同伴约定工时、费用、决策权与最后由谁收尾。'},
 夫妻:{reading:'夫妻宫是传统一对一关系的位置，也可以观察亲近相处和明确的合作约定。天同重舒适、照顾与情感回应；年命落这里，适合分辨体谅是不是也容纳了自己的偏好。它提出的是怎样相处的问题，不能单凭这一步推定婚恋或关系结局。',example:'例如：说出一个具体需要，或把“都可以”改成双方听得懂的安排。'},
 子女:{reading:'子女宫传统涉及后辈与培养，也可用来观察作品及由自己交出去的东西。破军的象义是拆改旧结构、接受新用法。年命落这里，可把创造理解成“做出一版、接受反馈、舍弃一部分”；更新有代价，不能只看新版本的吸引力。',example:'例如：重做一个作品、教别人使用方法，或决定哪些旧做法不再保留。'},
 财帛:{reading:'财帛宫观察可用资源及其分配，这里的年命是空宫，不能说天机巨门坐守。只参对宫机巨时，可把资源问题看成需要设计、核算和说明的安排；本宫文昌也提供文字、记录的辅助线索。钱、时间和精力可以一起谈，不能据此预报收入、资产或投资结果。',example:'例如：把一项长期投入的工时、费用、退出条件写清楚。'},
 疾厄:{reading:'疾厄宫传统涉及身体承载，现代生活可先观察投入强度、活动和休息如何安排。廉贞强调投入、边界与自我约束；年命落这里，可问自己“答应这件事以后，普通一天还容得下什么”。这是节律与承载的阅读入口，不能据单宫推断病症、事故或寿命。',example:'例如：在日程里保留吃饭、运动和休息的真实位置，再决定承诺。'},
 迁移:{reading:'迁移宫观察离开熟悉环境后怎样接触外界。这里没有十四主星，只借对宫太阳太阴作参照：换环境也给自我表达和内在需要提供比较。它可以落到跨环境生活、短暂外出或接触不同观点，不等于这一年必然搬迁、远行或离开某段关系。',example:'例如：试住一种日常、比较两种工作环境，或在陌生场合说明自己的需要。'},
 仆役:{reading:'仆役宫在传统上涉及部属、朋友及交往对象，这里取团队和同行关系的观察范围。七杀重独立判断、取舍与行动边界；年命落这里，可读成“和谁继续、谁决定哪一部分”比维持表面整齐更值得商量。取舍不意味着必然冲突，更不能据此断人会背叛。',example:'例如：重新分工、缩小合作范围，或让合适的人独立决定一段工作。'},
 官禄:{reading:'官禄宫观察承担什么公开角色，以及成果怎样接受检验。天梁重原则、照护、经验与把关，既可能提供判断，也可能让责任难以放下。年命落这里，可把有道理的意见变成明确的交付与权限；原盘天梁亮度为“陷”，不把它自动读成名位顺遂。',example:'例如：接下一项责任时，同时谈清能决定什么、何时交付、谁来复核。'},
 田宅:{reading:'田宅宫传统观察家宅和承载环境，也可延伸到长期使用的基地与共同空间。紫微重整体安排，天相重协调、公允和把关；年命落这里，可读成“把一个地方或系统经营得能继续”。宏观安排还要有人维护，不能由此跳到买房或资产增加的结论。',example:'例如：经营住处、共同空间或长期项目时，把维护成本与使用规则谈明白。'},
 福德:{reading:'福德宫观察内在感受、精神活动与休息方式，天机巨门把方法、疑问和语言放在同一处；这里又是原盘身宫。天机善于拆解、调整，巨门重辨析、追问。年命落这里，可把想明白与做得出来并列检验，留意解释越来越完整时，是否还留得出停止思考的空间。',example:'例如：让一个方法先被使用一次，再决定哪些疑问值得继续追。'},
 父母:{reading:'父母宫传统涉及长辈、庇护与承接来的规范，也可观察师长、知识来源和外界评价。贪狼重兴趣、交往与多种体验；年命落这里，可读成借不同的人和材料拓宽眼界，同时筛选哪些规则适合自己。它不等同于对真实父母关系的判断。',example:'例如：听取一位师友的建议、进入新圈子，再给自己的下一步设一个范围。'}
};
const childhoodPalace={
 命宫:'年命回到本命命宫，太阳太阴提供对外回应与细腻感受两个传统角度。放回成长阶段，可以用来比较表达自己的方式、接受评价的感受与日常偏好，只有已有记录才能说明当时实际怎样回应。',
 兄弟:'年命叠本命兄弟，传统上观察手足与同辈；武曲天府强调分配、规则和承接。放回成长阶段，可以把观察范围缩到同伴相处、分享与分工，宫名本身并不能证明是否有手足、是否发生过争执。',
 夫妻:'年命叠本命夫妻，天同庙的传统象义偏向舒适、照顾与回应。幼年只保留一对一互动中“需要怎样被听见”的观察窗口，不把夫妻宫套成婴幼儿的婚恋经历，也不据此推定照顾关系的好坏。',
 子女:'年命叠本命子女，破军旺在传统上提供变化、更新的象义。对于出生及成长阶段，可把它缩成熟悉事物与新刺激之间如何调整的观察角度；不能因宫名就说婴幼儿有了自己的作品、后辈或成人责任。',
 财帛:'年命叠本命财帛为空宫，只参对宫天机巨门，本宫另有文昌。成长阶段可以从分享、使用物品、理解约定这些日常角度读“资源与说明”，不能据此替儿童编造金钱事件或家庭经济情况。',
 疾厄:'年命叠本命疾厄，廉贞庙提供活动、投入与边界的传统角度。成长阶段可以观察玩耍、休息和日常节奏的安排；这里没有记录实际身体状况，不能由宫名或星曜倒推出病症、事故。',
 迁移:'年命叠本命迁移为空宫，只参对宫日月。成长阶段可以从接触陌生地方、不同的人和新规则理解“外部环境”，是否曾经搬家、外出或改变生活环境，只能由已有经历说明。',
 仆役:'年命叠本命仆役，七杀旺的传统象义侧重取舍、独立判断和行动边界。成长阶段可把范围放在同伴活动中怎样参与、怎样给彼此留空间，不把它写成成人职场关系或预定的朋友聚散。',
 官禄:'年命叠本命官禄，天梁陷提供原则、照护和责任的传统角度。成长阶段可以从学习任务、规则与评价去理解这层宫名，不把官禄直接套成职业成就，也不因天梁陷而反推学业结果。',
 田宅:'年命叠本命田宅，紫微天相强调安排、秩序与协调。成长阶段可把它读成生活空间、日常规则和共同维护的观察窗口，真实居所与家庭发生了什么仍须依据记录，不能由田宅宫补写。',
 福德:'年命叠本命福德，也是本命身宫，天机旺、巨门庙提供好奇、追问与辨析的传统角度。成长阶段可以比较学习、表达与安静下来的方式；这是一组观察问题，不代表已经知道儿童当时的内心。',
 父母:'年命叠本命父母，贪狼平的传统象义偏向兴趣、交往和体验。成长阶段可以把它放回向周围人学习、接触规则与新事物的情境，不能由此评价真实父母或断定某段师长经历。'
};
const stars={
 太阳:'太阳把注意力引向表达、承担与对外回应',太阴:'太阴把注意力引向细节、积累、品质与内在安定',武曲:'武曲强调可核对的资源、执行与分工',天府:'天府强调储备、承接与持续运营',天机:'天机强调思路、调整和把复杂事拆成方法',巨门:'巨门强调疑问、辨析与把话说清',紫微:'紫微强调统筹和承担整体责任',天相:'天相强调协调、公允与把关',天梁:'天梁强调原则、经验和照护责任',七杀:'七杀强调独立判断、取舍和行动边界',破军:'破军强调更新、拆改与承受试错成本',贪狼:'贪狼强调兴趣、交往和体验欲',天同:'天同强调舒适、照顾与情感回应',廉贞:'廉贞强调投入、界限与自我约束'
};
const decadeReading={
 d3:'癸未大限叠本命命宫，太阳太阴同宫，把对外回应与细腻感受放在成长背景中。癸干破军禄、巨门权、太阴科、贪狼忌分别提示试新、表达、评价与兴趣筛选。对于童年，这些只提供观察成长环境与学习节奏的词汇，不能倒推出发生过的家庭事件。',
 d13:'甲申大限叠父母，贪狼与本宫禄存使兴趣、外界入口和承接来的资源成为长期线索。甲干廉贞禄、破军权、武曲科，与太阳忌同时保留：可以学习更多做法，也需要区分自己愿意承担的目标和别人期待的样子。这不是对真实长辈的性格判断。',
 d23:'乙酉大限叠福德，也是本命身宫。天机旺、巨门庙把方法、辨析和反复推敲放到十年中心；机禄提供尝试方法的入口，梁权关联责任，紫微科关联可被理解的整体安排，太阴忌则把品质与内在满意度留作一道难题。能想、能做与能安心，适合分开练习。',
 d33:'丙戌大限叠田宅，紫微天相强调统筹、协调与承载。天同禄、天机权、文昌科可读作照顾、设计和说明的支持；廉贞忌提醒投入强度仍有边界。十年题目可以是一套能长期运转的生活或协作结构，不能据此指定房产、家庭构成或经营结果。',
 d43:'丁亥大限叠官禄，天梁与本宫文曲使经验、原则及表达成为长期题目。丁干太阴禄、天同权、天机科，与巨门忌并见：方法越能说清，越要辨别哪些责任值得接、哪些争论可以停。天梁原盘为陷，不能把承担原则直接等同顺利获得权威。',
 d53:'戊子大限叠仆役，七杀旺把同行者的选择、独立判断与重新分工带到长期视野。戊干贪狼禄、太阴权、右弼科提供兴趣、偏好和协作的线索，天机忌则提出复杂安排该如何简化。这里关注合作方式，不据此预告朋友聚散或背叛。',
 d63:'己丑大限叠迁移为空宫，仅参对宫日月，十年题目是如何在不同环境中保有自己的表达与安定。己干武曲禄、贪狼权、天梁科及文曲忌，把资源安排、兴趣选择、经验交流和表达边界放在一起。远方也可以是不同观点与生活方式，并不指定必须迁居。',
 d73:'戊寅大限叠疾厄，廉贞庙与本宫天马提供活动方式、投入边界的观察入口。戊干贪狼禄、太阴权、右弼科与天机忌，可读成保留体验、自主与协助，同时减少过度推演。长期重点是怎样过普通一天，不能把传统疾厄宫改写成健康结局。',
 d83:'己卯大限叠财帛为空宫，仅参对宫天机巨门，本宫文昌辅助记录与说明。己干武曲禄、贪狼权、天梁科及文曲忌，使可用余地、偏好和说明责任成为十年题目。简化资源安排、保留选择，比追求一套事事完美的账目更值得检验；不据此判断财富增减。',
 d93:'庚辰大限叠子女，破军旺与本宫左辅、地空可作为更新、协助和放下旧版本的线索。庚干太阳禄、武曲权、太阴科、天同忌，又与本命庚干四化重复。十年阅读关心作品、经验如何交给别人使用，交接仍需尊重亲近关系中的偏好，不默认婚育或预设人生终点。'
};
// 四化随星解释，避免把所有禄写成发财、所有忌写成灾祸。
const hua={
 '太阳禄':'太阳的对外回应带上禄的接纳与流入意味，可读成愿意贡献、也练习收下反馈；不需要把每份认可都换成下一份责任。',
 '太阳权':'太阳的承担与可见度带上权的主导意味，可读成需要明确自己代表谁、能决定什么；站到前面也要给责任设范围。',
 '太阳忌':'太阳的承担与被看见带上忌的牵挂意味，可读成较难放下“我有没有尽责、别人怎样看”；适合区分真实职责和为了避免失望而多接的部分。',
 '武曲禄':'武曲重执行与资源，化禄可读成可用办法、交换条件与积累的入口；资源来到哪里，仍须核对投入和取得它的条件。',
 '武曲权':'武曲的执行和分配带上权的决断意味，可读成要把预算、分工及规则说定；有效率也需要容纳别人的实际能力。',
 '武曲科':'武曲化科把可核对的成果、专业尺度与信誉放到台前；比起证明自己强，更适合拿出别人能检查的过程和结果。',
 '武曲忌':'武曲化忌把资源与承诺中的卡点放大为注意对象；可先查清谁付出多少、哪些条件难以承受，不把它直译成破财。',
 '太阴禄':'太阴的细节、积累和内在安定带上禄的接纳意味，可读成品质较容易得到回应，也更值得收下已经拥有的支持；被肯定并不自动消除心里的要求。',
 '太阴权':'太阴化权把内在偏好带到需要决定和维护的位置；可练习把“我希望怎样”说成明确选择，而不是默默等待别人猜中。',
 '太阴科':'太阴化科把细致、品质及表达的可信度放到评价之中；可让判断过程和审美标准被理解，仍要给自己保留不受评价支配的感受。',
 '太阴忌':'太阴化忌把安全感、品质和被理解的需要变成较难放下的课题；外界说够好了，内在可能仍想再修一次，可以先辨认自己的停止条件。',
 '天同禄':'天同化禄让舒服的互动、照顾和可接受的日常成为支持入口；享受回应时，也可核对这种舒适由谁持续维护。',
 '天同权':'天同化权把原本随和的需要变成要自己作决定的事；可温和地提出偏好和安排，避免用“都可以”隐藏真实需要。',
 '天同忌':'天同化忌可读成舒适、照顾与依赖之间有难以放下的期待；适合把愿望说清，并给彼此选择空间，不能直断关系失和。',
 '巨门禄':'巨门化禄使追问、解释和交流成为理解问题的入口；说得清可以帮助合作，也适合留一段时间听别人怎样理解。',
 '巨门权':'巨门化权把辨析和语言带到主张、说服与界定规则的位置；可明确证据与边界，避免把每次交流都变成必须分出高下的辩论。',
 '巨门忌':'巨门化忌把疑问、误解和内心辩论变成较难停下的注意；更有用的可能是确定问题何时算说清，而不是不断补充解释。',
 '天梁禄':'天梁化禄可把经验、照护和提供判断读成支持入口；愿意帮助别人时，仍可以分清帮一把与长期代为承担。',
 '天梁权':'天梁化权强调原则背后的责任与决定权；可把经验转成可执行的规则，也要说明哪些事仍由当事人选择。',
 '天梁科':'天梁化科强调经验怎样被验证、解释和信任；可用清楚的方法传递判断，名声或资格本身不能替代真实检验。',
 '紫微权':'紫微化权把统筹、安排和整体责任带到决策中心；可明确谁作最终决定、怎样接受反馈，避免所有环节都回到一个人身上。',
 '紫微科':'紫微化科强调整体安排被理解与认可的方式；可把结构、标准及责任边界讲清楚，不必把体面等同于没有缺口。',
 '左辅科':'左辅化科把协助、互相补位和共同成果带到可被看见的位置；可明确支持者的贡献，让合作不依赖没有说出口的人情。',
 '右弼科':'右弼化科可读成协助、协调与不同意见有机会被认真接住；请人帮忙时说清所需范围，也给对方保留自己的做法。',
 '破军禄':'破军化禄把更新和尝试读成资源入口；新做法可能打开空间，也需要为拆旧、适应和未完成的部分留出成本。',
 '破军权':'破军化权强调由谁决定改变、哪些旧安排需要结束；可将重做的范围与受影响的人说清，避免不断推倒重来。',
 '贪狼禄':'贪狼化禄把兴趣、交往和体验读成接触资源的入口；多种可能值得探索，也需要选出真正想继续的一两项。',
 '贪狼权':'贪狼化权把兴趣与社交变成需要主动取舍的安排；可自己决定加入什么、投入多久，而不只跟随场合的热闹。',
 '贪狼忌':'贪狼化忌把想体验、想连接的愿望留作牵挂；可能性越多，越值得明确放弃什么，不把它直译成人际或感情祸端。',
 '廉贞禄':'廉贞化禄把投入、规则与关系中的吸引力读成入口；热心或喜欢仍须和时间、资源及个人边界一起衡量。',
 '廉贞忌':'廉贞化忌把投入与边界中的纠结推到注意中心；可先核对已经承担的代价和还愿意追加多少，不据此断疾病或事故。',
 '天机禄':'天机化禄使方法、改进和尝试成为打开局面的入口；有办法以后，可先让一版真正使用，再决定下一轮怎样变。',
 '天机权':'天机化权把想办法推进为安排、调度与决定；可明确由谁执行、何时停止修改，别让想得快的人承担全部后续。',
 '天机科':'天机化科强调方法被整理、说明和复用；适合把已经试过的过程变成别人能理解的步骤，解释完整以后仍要接受使用检验。',
 '天机忌':'天机化忌可读成分支、变动和反复推演较难收束；适合缩小一次要决定的范围，给一个可用版本设停止修改的时点。',
 '文昌科':'文昌化科把文字、结构和可核对的学习成果放在台前；可用清楚的记录减少猜测，文字完备仍要和实际交付对照。',
 '文昌忌':'文昌化忌把文字、程序与说过的承诺留作反复核对的对象；可检查范围、版本与细节，不将一个符号直接说成合同或考试出错。',
 '文曲科':'文曲化科强调表达、感受与呈现如何被接住；可以让经验说得有层次，也适合听听别人听到了什么。',
 '文曲忌':'文曲化忌把表达和实际被理解之间的距离推到注意中心；可用具体事例核对意思，少用一段更漂亮的话替代尚未谈清的条件。'
};
const actions={
 命宫:{禄:'收下已经得到的反馈',权:'说明自己的决定与范围',科:'让别人看见判断过程',忌:'写下自己何时算满意'},
 兄弟:{禄:'确认互助的实际条件',权:'明确平辈间的分工',科:'让彼此贡献可被看见',忌:'重谈没有说清的责任'},
 夫妻:{禄:'承认并回应双方需要',权:'提出一个具体偏好',科:'把约定说明给对方听',忌:'核对期待而不代替对方猜测'},
 子女:{禄:'让一个作品先被使用',权:'定下更新与交接范围',科:'把经验整理成可传递步骤',忌:'区分作品标准与使用者选择'},
 财帛:{禄:'盘点可用余地与取得条件',权:'明确预算和交换规则',科:'留下可核对的资源记录',忌:'核算投入与继续的上限'},
 疾厄:{禄:'给舒服的日常留位置',权:'主动安排投入与活动',科:'记录哪种节奏更能持续',忌:'为追加承诺设实际边界'},
 迁移:{禄:'试一个可承受的新入口',权:'自己决定去留与接触范围',科:'比较不同环境中的经验',忌:'核对改变环境的真实成本'},
 仆役:{禄:'寻找具体可互补的协助',权:'把决定权与执行分开',科:'让合作经验被共同检验',忌:'简化彼此无法持续的协作'},
 官禄:{禄:'辨认愿意承接的责任',权:'同时谈权限与交付',科:'让成果接受清楚的检验',忌:'把没谈清的承诺逐项核对'},
 田宅:{禄:'保留能持续维护的支持',权:'明确空间或系统由谁管理',科:'把共同规则写得易懂',忌:'核对长期维护由谁承担'},
 福德:{禄:'给有用的方法一次实践',权:'为思考与休息各留范围',科:'把反复想的事整理成步骤',忌:'给无尽推演设停止条件'},
 父母:{禄:'向合适的人请教具体问题',权:'筛选哪些规则值得沿用',科:'将学到的东西拿来验证',忌:'分辨自己的需要与外界评价'}
};
const overlapPairs={
 '忌禄':'禄提供接触、支持或愿意投入的入口，忌保留在意与难放下的部分；得到更多与仍不满足可以同时存在。',
 '忌权':'权要求主张和决定，忌保留牵挂；可以把需要说得更明确，但承担更多不一定解开原本的纠结。',
 '忌科':'科关注可被理解和认可的标准，忌保留反复检视；呈现得清楚与内心已经放下，需要分别检验。',
 '权禄':'禄给出资源与愿意尝试的入口，权要求决定怎样使用；可用的东西变多以后，责任范围也值得一起谈清。',
 '禄科':'禄提供接纳和支持，科使方法或品质进入评价；既可以接受回应，也可以把经验整理成别人能理解的东西。',
 '权科':'权强调作决定，科强调解释与检验；既要说清为什么这样做，也要保留实际可执行的权限。'
};
function section(id,title,basis,reading,examples,evidenceIds,sourcePaths){return{id,title,basis,reading,examples:examples||[],evidenceIds:evidenceIds||[],sourcePaths:sourcePaths||[]};}
function starText(p){return p.stars.map(s=>s.name+(s.brightness?'（'+s.brightness+'）':'')).join('、')||'无十四主星';}
function atText(p,ctx){return p.branch+'：本命'+p.natal+'／'+ctx.frames.decadal.label+p.decadal+'／流年'+p.annual;}
function ownText(p,ctx){return atText(p,ctx)+'；原宫主星：'+starText(p)+'。';}
function frameBasis(f,ctx){const b=[ownText(f.center,ctx)],p=palaces.get(f.center.natal);if(p.minor.length)b.push('原宫辅曜：'+p.minor.map(s=>s.name+(s.brightness?'（'+s.brightness+'）':'')).join('、')+'。');if(p.isBody)b.push('本命身宫也在'+p.branch+'·'+p.name+'。');if(f.empty)b.push('本宫为空宫；对宫'+ownText(f.opposite,ctx)+'仅作参照，不移入本宫。');return b;}
function frameSources(f,base){return[base+'.annualPalaces',...['major','minor','isBody'].map(key=>`LIFE_DATA.palaces[${f.center.index}].${key}`),...(f.empty?[`LIFE_DATA.palaces[${f.opposite.index}].major`]:[])];}
function mutationSources(m){return[m.sourcePath,...['major','minor'].map(key=>`LIFE_DATA.palaces[${m.placements.index}].${key}`)];}
function frameMeaning(f){if(f.empty)return'本宫无十四主星，只参对宫'+f.opposite.stars.map(s=>s.name).join('、')+'：'+f.opposite.stars.map(s=>stars[s.name]).join('；')+'。参照提供比较角度，不把对宫的星当成本宫坐守。';return f.center.stars.map(s=>stars[s.name]+'。').join('');}
function physicalStar(star,natal){const p=palaces.get(natal);return [...p.major,...p.minor].find(s=>s.name===star);}
function mutationBasis(m,ctx){const s=physicalStar(m.star,m.placements.natal);return`${m.label}${m.star}化${m.type}；${atText(m.placements,ctx)}。`+(s?.brightness?`该星原盘亮度：${s.brightness}。`:'');}
function relation(a,b){const n=(a-b+12)%12;return n===0?'同宫':n===6?'对宫':n===4||n===8?'三合':'不同宫';}
function relationReading(kind){return{同宫:'两层命宫同落一处，长期练习与年度自我定位集中在同一个观察窗口，适合检验平日的方法是否真的服务于今年的选择。',对宫:'两层命宫互为对宫，可以用彼此作比较：今年最想回应的事，与十年正在经营的事，需要来回核对，而非只选一端。',三合:'两层命宫在三合关系中，可把年度焦点放进长期题目理解；这里说的是宫位会照关系，不是同一颗星重复化禄、化权或化忌。',不同宫:'两层命宫各有位置，可以把今年看作从另一个生活窗口检验十年题目；长期背景给出问题，年度位置帮助缩小这一回具体从哪里入手。'}[kind];}
function overlapReading(o,ctx){
 const types=[...new Set(o.mutations.map(m=>m.type))],byType=t=>o.mutations.filter(m=>m.type===t).map(m=>m.label).join('与');
 const signature=types.slice().sort().join('');
 let text;
 if(o.star==='太阴'&&o.mutations.some(m=>m.layer==='annual'&&m.type==='禄')&&o.mutations.some(m=>m.layer==='natal'&&m.type==='科')&&o.mutations.some(m=>m.layer==='decadal'&&m.type==='忌'))text='太阴的年禄可读为品质与细腻得到回应，生年科是原本就带着的评价、可信度线索，大限忌则把满意与安全感留作十年里反复要面对的问题。放在一起，是外界认可与内在不满意可能并存；再多一次肯定，也未必能替自己决定何时算够。';
 else if(o.star==='天机'&&o.mutations.some(m=>m.layer==='annual'&&m.type==='科')&&o.mutations.some(m=>m.layer==='decadal'&&m.type==='禄'))text='大限天机禄把想办法、试做法放在长期入口，流年天机科再把这些办法推向整理、说明和复用。可以把“我想明白了”推进为“别人也能照着做”，再用真实使用检验；它不等于方法已经完美。';
 else if(o.star==='天机'&&o.mutations.some(m=>m.layer==='annual'&&m.type==='权')&&o.mutations.some(m=>m.layer==='decadal'&&m.type==='禄'))text='大限天机禄提供方法与尝试的长期入口，流年天机权把问题推进到调度和决定。办法多了以后，今年更适合谈由谁做、先做哪版、何时收束，避免会想办法的人继续一个人包办。';
 else if(o.star==='太阴'&&o.mutations.length===2&&o.mutations.some(m=>m.layer==='annual'&&m.type==='禄')&&o.mutations.some(m=>m.layer==='natal'&&m.type==='科')&&!types.includes('忌'))text='太阴年禄与生年科同星，适合把收到的支持、对品质的回应和原有的细致标准放在一起理解。本年这颗星没有化忌叠入，不能借其他十年的太阴限忌，硬加成“外界认同、内心必定不满”。';
 else if(types.length===1)text=`${byType(types[0])}都使${o.star}化${types[0]}，是同一种象义在不同时间层反复出现。${hua[o.star+types[0]]}重复只表示阅读时值得多留意，不表示效果翻倍、必然发生或有更高的现实概率。`;
 else if(types.length>2)text=types.map(t=>`${byType(t)}化${t}：${hua[o.star+t]}`).join('')+'这些层次同时存在，尤其要把支持、决定或评价与忌的牵挂分开理解，不消掉其中一项，也不相加成单一吉凶。';
 else{const pair=overlapPairs[signature];text=(stars[o.star]?stars[o.star]+'。':'这颗辅曜的解释仍保留其协助、记录或表达的性质。')+(pair||'不同四化各自保留支持、决定、评价与牵挂的意味。');}
 const p=o.placements;
 return text+`落在本命${p.natal}，本年可从“${role[p.annual]}”观察，并放回${ctx.frames.decadal.label}的“${role[p.decadal]}”题目中。`;
}
function build(year){
 const y=rows.get(year),ctx=Z.getYearContext(year),af=ctx.frames.annual,df=ctx.frames.decadal;
 const child=y.scopeName==='童限',young=y.nominalAge<13;
 const d=decades.get(y.decadeId),base=`LIFE_DATA.years[${year-2000}]`;
 const reading=root.TANG_ZIWEI_READINGS?.years?.[year]||root.TANG_ZIWEI_READINGS?.[year];
 const headline=reading?.title||y.title;
 const sections=[];
 const dateBasis=[`${y.stem}${y.branch}流年：${y.startDate}起，至${y.endBefore}前。`,`对应原记录${year}年；周岁栏${y.age}岁，农历虚岁${y.nominalAge}岁。`];
 let dateReading=year===2000?'这是出生后至下一农历新年前的首段，不从公历元旦倒算。日期说明这一份流年盘适用哪一段时间，不是现实事件发生日期的预报。':'本项目按农历正月初一切换流年与虚岁，不在公历元旦切换；所以公历同一年较早的一段，可能仍属上一农历流年。回顾真实经历时，按原公历记录对照，不把整年的经历强行归到这张盘。';
 if(young)dateReading+=' 本年在成长早期，后面的财帛、夫妻、官禄等是传统宫名；相应语义不能当作儿童已经具有成人的财务、婚恋或职业经历。';
 sections.push(section('boundary','这一年的起讫与干支',dateBasis,dateReading,[],[],[base+'.startDate',base+'.endBefore',base+'.stem',base+'.branch']));
 const annualText=young?childhoodPalace[af.center.natal]:annualPalace[af.center.natal].reading;
 sections.push(section('annual-palace','年命叠本命'+af.center.natal+'：今年从哪里观察自己',frameBasis(af,ctx),annualText,young?['回顾时可只对照已有的成长记录；没有材料的部分保持未知。']:[annualPalace[af.center.natal].example],['frame-annual'],frameSources(af,base)));
 const decadeBasis=[`${child?'尚未起首步大限；本年童限参照':d.startYear+'—'+d.endYear+'，虚岁'+d.start+'—'+d.end+'，'+y.decadalStem+y.decadalBranch+'大限'}。`,...frameBasis(df,ctx),...ctx.mutations.filter(m=>m.layer==='decadal').map(m=>mutationBasis(m,ctx))];
 const decadeText=child?`本盘木三局虚岁三岁才起第一步十年大限。本年虚岁${y.nominalAge}，按引擎童限规则暂取本命${df.center.natal}，下一虚岁会重新取位；不能把这一宫说成持续十年的底色。${frameMeaning(df)}童限四化只作为本年参照层展示，不能据此补写婴幼年的心理或家庭遭遇。`:decadeReading[y.decadeId];
 sections.push(section('decade',child?'童限参照：此时尚未进入十年大限':'十年大限：'+role[df.center.natal],decadeBasis,decadeText,child?[]:[`把“${role[df.center.natal]}”当作反复练习的长期问题，再看今年从哪个具体窗口触及它。`],['frame-decadal',...ctx.mutations.filter(m=>m.layer==='decadal').map(m=>m.id)],[base+'.decadeId',base+'.decadalMutations',...frameSources(df,base)]));
 const rel=relation(af.center.index,df.center.index);
 const layerBasis=[`流年命宫：${atText(af.center,ctx)}；主星${starText(af.center)}。`,`${child?'童限参照':'大限'}命宫：${atText(df.center,ctx)}；主星${starText(df.center)}。`,`两层命宫${rel}。`];
 let layerText=child?`本年流年焦点在“${role[af.center.natal]}”，童限暂参“${role[df.center.natal]}”。两者只帮助读懂盘面定位，不建立十年因果，也不把宫名直接当作已发生的成长经历。`:`${relationReading(rel)}本年年命在大限${af.center.decadal}，可把“${role[af.center.natal]}”与“${role[af.center.decadal]}”一起考虑；大限命宫又叠流年${df.center.annual}，长期的“${role[df.center.natal]}”题目，在今年可借“${role[df.center.annual]}”来检验。`;
 if(year===2027)layerText+=' 具体到这一年，年命日月讲自我与认可，乙酉限机巨讲方法与内在辩论；太阴年禄、生科、限忌和巨门年忌，才使“收到了肯定，却仍难停止审稿”成为一种值得观察的张力。';
 if(year===2087)layerText+=' 虽与2027同为丁未、年命也回日月，这一步已是己卯财帛大限：重点转到资源安排与表达边界，太阴不带限忌、天机也不带限禄，不能沿用当年的心理结论。';
 if(ctx.decade.changed&&!child)layerText+=' 本年是原盘换大限的节点，旧题目可以保留为经验，但新的十年位置与四化必须另读，不能沿用上一限。';
 sections.push(section('layers','把年度焦点放回这一步背景',layerBasis,layerText,young?[]:[`可把问题缩成一句：在“${role[df.center.natal]}”这个背景里，今年怎样处理“${role[af.center.natal]}”？`],['frame-annual','frame-decadal'],[base+'.annualPalaces',base+'.decadeId']));
 const networkBasis=[`年命本宫：${ownText(af.center,ctx)}`,...af.trines.map(p=>'三合会照：'+ownText(p,ctx)),'对宫参照：'+ownText(af.opposite,ctx)];
 const networkText=`年命之外，三合${af.trines.map(p=>'本命'+p.natal).join('、')}提供“${af.trines.map(p=>role[p.annual]).join('”与“')}”两个联系窗口；对宫本命${af.opposite.natal}提供“${role[af.opposite.annual]}”的比较。${af.empty?'本宫没有十四主星，参对宫'+af.opposite.stars.map(s=>s.name).join('、')+'来帮助定调，仍保留星在对宫的事实。':'这些星仍各在自己的宫位，会照不是全部坐进年命。'}三方四正讲宫位之间的联系，同星叠化则须另查同一颗星是否真的在不同层化禄、权、科、忌。`;
 sections.push(section('annual-network','三方四正：年度焦点与哪些位置相连',networkBasis,networkText,[],['frame-annual'],[base+'.annualPalaces']));
 for(const m of ctx.mutations.filter(m=>m.layer==='annual')){
  const p=m.placements,overlap=ctx.overlaps.find(o=>o.star===m.star);
  const linked=overlap?`本年还有${overlap.mutations.filter(n=>n.layer!=='annual').map(n=>n.label+'化'+n.type).join('、')}落在同一颗${m.star}，应与下面的同星叠化合读。`:'本年这颗星未与生年、当前参照层形成同星叠化；同宫别的星有四化，也不能冒充这颗星的叠化。';
  const text=`${hua[m.star+m.type]}落本命${p.natal}，保留“${role[p.natal]}”的原本范围；在流年${p.annual}，今年可具体从“${role[p.annual]}”着手，${child?'童限参照':'大限'}${p.decadal}则补充“${role[p.decadal]}”的背景。${linked}`;
  const examples=young?[]:[`可尝试：${actions[p.annual][m.type]}。`];
  sections.push(section('annual-hua-'+huaIds[m.type],`流年${m.star}化${m.type}：${role[p.annual]}`,[mutationBasis(m,ctx),...(overlap?overlap.mutations.filter(n=>n.layer!=='annual').map(n=>mutationBasis(n,ctx)):[])],text,examples,[m.id,...(overlap?[overlap.id]:[])],[...new Set((overlap?overlap.mutations:[m]).flatMap(mutationSources))]));
 }
 // 包含未与流年四化重合的生年／大限叠化，避免遗漏长期背景。
 for(const o of ctx.overlaps){
  const basis=o.mutations.map(m=>mutationBasis(m,ctx));
  basis.push(`核对：同为${o.star}，同在${o.placements.branch}宫；不是仅因三合会照或不同星同宫而称叠化。`);
  sections.push(section(o.id,`${o.star}同星叠化：${o.mutations.map(m=>m.label+'化'+m.type).join('＋')}`,basis,overlapReading(o,ctx),young?[]:[`在“${role[o.placements.annual]}”中，同时辨认支持、责任、评价或牵挂各是哪一部分，不急着归成一个好坏结论。`],[o.id,...o.mutations.map(m=>m.id)],[...new Set(o.mutations.flatMap(mutationSources))]));
 }
 const focus=reading?.conflict||`${year}年年命叠本命${af.center.natal}，${child?'童限参照暂取':y.decadalStem+y.decadalBranch+'大限叠'}本命${df.center.natal}。${young?'这是成长阶段的盘面观察入口，已发生的事只以已有记录为准。':annualPalace[af.center.natal].reading.split('。')[0]+'。'}`;
 return{version:1,year,startDate:y.startDate,endBefore:y.endBefore,headline,summary:focus,sections,methodNote:'以下依据原盘作传统象义推演，生活例子供观察与选择，不是史实记录、确定预言或游戏事件概率。',references:[{title:'iztro 运限与童限规则',url:'https://docs.iztro.com/posts/horoscope'},{title:'iztro 四化说明',url:'https://docs.iztro.com/learn/mutagen'},{title:'项目固定 iztro 2.6.4',url:'https://github.com/SylarLong/iztro/tree/v2.6.4'}]};
}
function get(year){if(!Number.isInteger(year)||!rows.has(year))throw new Error('解读年份必须为2000—2100的整数。');if(!cache.has(year))cache.set(year,build(year));return clone(cache.get(year));}
root.TANG_ZIWEI_EXPLANATIONS=Object.freeze({version:1,years:Object.freeze(Array.from(rows.keys())),get,getAll:()=>Array.from(rows.keys(),get)});
})(typeof window!=='undefined'?window:globalThis);
