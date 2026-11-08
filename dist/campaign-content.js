(function(root){
'use strict';
// All scenes after 2026 are authored game fiction. Costs are game units, not forecasts.
const O=(id,label,text,outcome,resources,extra)=>({id,label,text,detail:text,outcome,resources:resources||{},...(extra||{})});
const S=(id,title,text,options,extra)=>({id,title,text,options,...(extra||{})});
const A=(id,title,dimension,themes,minAge,maxAge,stages,extra)=>({id,title,dimension,themes,minAge,maxAge,stages,...(extra||{})});
const V=(flag,text)=>({when:{flagsAll:[flag]},text});
const arcs=[];
arcs.push(A('useful-ai','有人每天真的在用','craft',['craft-iteration','knowledge','money-boundaries'],27,35,[
S('ai-visit','先坐在用户身边','一位小团队负责人愿意让你旁听工作。他需要把零散客户记录整理成可执行清单。小岑提醒：他想买的是少漏一件事，未必是你想展示的AI。你们还没有收钱，也没有承诺永久维护。',[
O('observe','跟完三次真实工作','每周留6小时，花1个月储备做两周可删除的试用品；先不接公开演示。','你看见记录里有不能出错的名字和日期。负责人答应试用；公开演示窗口关闭一年，你保留继续独立验证的路。',{cashMonths:-1,freeHours:-6},{flagsAdd:['ai_observed'],stats:{craft:4},opportunity:{id:'ai-demo',label:'公开演示邀请',status:'closed'},relation:{npcId:'cen',trust:1,memory:'你愿意先看真实使用'}}),
O('show','先做一场可见的演示','每周投8小时、花2个月储备，把最亮眼的流程做成演示；真实业务暂时只看样本。','演示招来五位询问者，也把你推到必须解释准确率的位置。负责人还没得到能每天用的东西，下一年会追问。',{cashMonths:-2,freeHours:-8},{flagsAdd:['ai_demo_first'],stats:{craft:2,connection:3},delay:[{after:1,text:'当初演示的负责人寄来一份真实错漏清单：这些问题修好之前，他不会把它交给同事。',stats:{craft:1},relation:{npcId:'cen',trust:-1,memory:'演示先于交付'}}],opportunity:{id:'ai-demo',label:'公开演示后的试点名单',status:'open',expiresAfter:2}}),
O('manual','先用人工代办换问题清单','每周接4小时人工整理，获得1个月储备；不宣传AI能力，暂缓自己的技术方案。','负责人为一份清楚的清单按约付了款。你知道哪些步骤值得自动化，但别人暂时把你当代办；转成软件要另谈。',{cashMonths:1,freeHours:-4},{flagsAdd:['ai_manual_service'],stats:{reserve:2},relation:{npcId:'cen',trust:2,memory:'第一笔收入来自按时交付'}})
]),
S('ai-first-week','第一周，不是第一天','试用者开始把产品放进自己的日程。一个错误会让他多核对十分钟；一个没回复的晚上会让他怀疑下周还能不能用。小岑愿意帮忙，但要求明确自己只负责哪两天。',[
O('narrow','只保留一种可靠的清单','每周花6小时修关键步骤，付1个月储备；删去演示里最漂亮的自动推断。','少了一半功能，试用者却第一次连续使用。小岑接受固定两天支持；你失去短期上台讲完整愿景的材料。',{cashMonths:-1,freeHours:-6},{flagsAdd:['ai_narrow'],flagsRemove:['ai_broad'],stats:{craft:4},relation:{npcId:'cen',trust:2,memory:'你主动砍掉无法维护的功能'}}),
O('broad','答应三位试用者都能改','每周投12小时、花2个月储备；把三种不同流程一起接下来。','三方都很兴奋，小岑却只肯接原定的两天。两个版本会在明年争同一段维护时间，能否兑现取决于你是否还留得出周6小时。',{cashMonths:-2,freeHours:-12},{flagsAdd:['ai_broad'],stats:{connection:3,energy:-4},commitment:{label:'三套试点的第二轮维护',after:1,requires:{resource:'freeHours',min:6},success:{text:'你留出了维护时间，三套试点各修一轮；它们仍不共享大半代码。',stats:{craft:3},resources:{freeHours:-6}},failure:{text:'两位试用者等不到第二轮修复，其中一位导出资料离开。小岑拒绝替你作永久客服。',stats:{connection:-4},resources:{cashMonths:-1}}}}),
O('stop','退还试用费用并整理导出','每周用3小时收尾，付1个月储备退款；今年结束软件试点。','负责人拿走自己的资料。你保住了正常告别的信用，也承认这轮问题不值得用自己的每个晚上来解；软件收入的路本轮关闭。',{cashMonths:-1,freeHours:-3},{next:'end',flagsAdd:['ai_closed_clean'],relation:{npcId:'cen',trust:2,memory:'没做成也处理了退出'},opportunity:{id:'ai-demo',label:'本轮AI试点',status:'closed'}})
],{variants:[V('ai_demo_first','演示名单还在，小岑已经收到两封催问：台上展示的功能什么时候能用？这周要先修真实错漏，还是继续接住热度，已经是两条不同的路。'),V('ai_manual_service','人工整理的人开始问：下周还找你吗？他愿意为结果付款，却不愿为了你的软件实验承担更多核对。你要决定何时改变服务方式。')]}),
S('ai-price','一笔钱会买走哪些晚上','负责人愿意签一年的小额维护约定，希望出错当天有人回应。小岑说可以合作，但收入必须能覆盖支持时间。你终于有机会收费，价目表旁边也出现了真实的值班表。',[
O('bounded','收维护费，写明两天响应','每周留4小时，获得3个月储备；只服务已有工作流，额外功能另报价。','客户嫌响应慢，仍接受了范围。小岑能据此排自己的工作；你保留独立产品路线，关掉随叫随到的大单机会。',{cashMonths:3,freeHours:-4},{flagsAdd:['ai_paid_bounded'],relation:{npcId:'cen',trust:3,memory:'维护收入和时间边界写在一起'},opportunity:{id:'ai-enterprise',label:'全天候定制大单',status:'closed'},delay:[{after:2,text:'两年前签下的范围条款第一次派上用场：客户的新部门需求单独计价，你没有把整个周末送出去。',resources:{cashMonths:1},stats:{reserve:2}}]}),
O('custom','接定制年单，先赚缓冲','每周留10小时，获得5个月储备；本年暂停大部分通用产品开发。','客户买下优先响应，小岑愿意拿明确报酬负责一部分。账上缓了过来，独立产品的下一版却开始延期。',{cashMonths:5,freeHours:-10},{flagsAdd:['ai_custom'],stats:{reserve:4,freedom:-3},relation:{npcId:'cen',trust:1,memory:'你们先做能付钱的定制'},commitment:{label:'定制客户的优先支持',after:1,requires:{resource:'freeHours',min:5},success:{text:'你兑现优先支持，客户愿意继续；通用产品又少了一个开发季。',resources:{cashMonths:2,freeHours:-5}},failure:{text:'一次关键求助没接住，客户不续下一期；此前赚到的缓冲还在，独立产品也没有因此自动成形。',stats:{connection:-3},resources:{cashMonths:-1}}}}),
O('free','继续免费，换取公开使用记录','每周投入6小时、花1个月储备；不接值班，客户可随时停止使用。','你得到可核对的使用反馈，收入问题仍由自己承担。客户不能要求你全天候支持，小岑则去接自己的收费项目。',{cashMonths:-1,freeHours:-6},{flagsAdd:['ai_public_trial'],relation:{npcId:'cen',closeness:-1,memory:'本轮收入节奏不同，暂时各做各的'},opportunity:{id:'ai-public-story',label:'获许可的公开使用记录',status:'open',expiresAfter:2}})
]),
S('ai-handoff','你不在的那两周','你想离开工作桌两周。客户问谁来接问题，小岑只愿意接已经写清、已经计价的支持。产品有没有成为一份工作，现在要用一次离开来验证。',[
O('handoff','付钱交接，让小岑试接两周','每周用5小时写操作和回退步骤，付2个月储备作为交接报酬。','小岑接住大部分请求，并删掉两个只有你会维护的功能。你得到能离开的两周，也接受别人会改产品的路。',{cashMonths:-2,freeHours:-5},{flagsAdd:['ai_handoff'],relation:{npcId:'cen',trust:3,memory:'交接有报酬，也有修改权限'},stats:{freedom:4}}),
O('carry','带电脑走，继续自己接','每周仍留8小时支持，获得1个月储备；旅程按有网络的地点排。','客户几乎没发现你离开。你保住控制和回款，旅途中有两次饭局因为工单取消；产品还没有脱离你。',{cashMonths:1,freeHours:-8},{flagsAdd:['ai_owner_bound'],stats:{reserve:2,joy:-3},relation:{npcId:'cen',closeness:-1,memory:'你仍偏好自己兜底'}}),
O('sunset','约定最后维护日和完整导出','每周用4小时收尾，付1个月储备做导出与通知；停止争取续费。','客户有时间寻找替代品。你从一份自己造出的工作里退出来，保留代码与经验；本轮续费和扩大团队的路一起关闭。',{cashMonths:-1,freeHours:-4},{flagsAdd:['ai_sunset'],next:'end',opportunity:{id:'ai-demo',label:'AI清单产品续费',status:'closed'},relation:{npcId:'cen',trust:1,memory:'提前给出了结束日期'}})
],{variants:[V('ai_custom','定制客户把你计划离开的两周标成旺季，希望仍当天响应。小岑愿意有偿接一部分，但不愿对一套只有你理解的代码负责。'),V('ai_broad','几套试点的支持步骤彼此不同。你想离开两周，小岑把三张不兼容的清单推到桌上：先选保哪一套，再谈交接。')]}),
S('ai-finish','它会变成公司，还是一件小东西','使用已经不再新鲜。客户要稳定，小岑要能提前排班，你也要决定未来一年愿意把多少日子交给它。这轮不是只有做大才算结局。',[
O('studio','保留小工作室，接受少数客户','每周固定8小时，获得3个月储备；拒绝另外两家要大改的客户。','结局｜窄而可续。客户不多，产品需要的支持有人分担。你留下的是一份有限但真实的工作；下一次想扩大，必须重新筹钱和谈分工。',{cashMonths:3,freeHours:-8},{next:'end',flagsAdd:['ai_ending_studio'],stats:{craft:3,reserve:2},relation:{npcId:'cen',trust:2,memory:'你们选择规模有限的长期维护'}}),
O('independent','收缩成自己可维护的工具','每周只留3小时，付1个月储备迁移；放弃定制合同和部分功能。','结局｜自己能拿得动。一个客户离开，留下的人接受了更简单的版本。你没建立公司，却保住独立做下一件东西的时间。',{cashMonths:-1,freeHours:-3},{next:'end',flagsAdd:['ai_ending_indie'],stats:{freedom:4},relation:{npcId:'cen',trust:1,closeness:-1,memory:'体面结束共同值班'}}),
O('archive','停止更新，把可带走的交给用户','每周用4小时做最终导出，付1个月储备；明确不再承诺可用性。','结局｜作品没有继续，使用者没有被困住。小岑拿走自己负责的文档，客户找了替代方案。你失去续费，也留下一个以后敢再联系人的结束。',{cashMonths:-1,freeHours:-4},{next:'end',flagsAdd:['ai_ending_archive'],stats:{freedom:3,joy:-2},relation:{npcId:'cen',trust:2,memory:'失败的项目也完成了归档'}})
])
],{npcId:'cen',preferredYears:[2027,2028,2029,2030,2031],readingFocus:'福德限：将反复推演变为可用产品；收费后承担当年的具体支持，不以热情免除成本。'}));
arcs.push(A('cofounder','小岑不是你的备份','connection',['peer-negotiation','shared-work','money-boundaries'],29,43,[
S('co-invite','同一个原型，两种生活计划','小岑提出合做一个收费工具。你想留时间探索，他希望半年后能按月领到报酬。桌上没有投资承诺，只有你们各自还能投入的时间。',[
O('paid-pilot','先签八周有偿试合作','每周投6小时，付1个月储备给小岑的交付；只试一个付费问题。','你们暂时不谈永久股权。小岑接受八周观察期，也保留接其他客户的权利；你少了一笔现金，多了一次可退出的合作。',{cashMonths:-1,freeHours:-6},{flagsAdd:['co_pilot'],relation:{npcId:'cen',trust:2,memory:'从有报酬的短合作开始'}}),
O('equal','直接各出一半，留半年试','每周投10小时、各自拿出够生活两个月的一笔钱；关键决定必须两人同意。','小岑认真推掉了别的活。你们获得集中做事的窗口，也把一次方向分歧变成两个人都能否决的停顿。',{cashMonths:-2,freeHours:-10},{flagsAdd:['co_equal'],stats:{craft:3,freedom:-2},relation:{npcId:'cen',trust:3,memory:'双方为合伙推掉了机会'},opportunity:{id:'co-solo',label:'本季独立探索时间',status:'closed'}}),
O('separate','这次不合伙，互相转介绍','每周用2小时说明不同目标，获得1个月储备去做自己的小单。','小岑失望，但接回一个稳定客户。结局｜暂不成伙。你保留自由，也失去一个愿意陪你承担早期不确定性的人；以后联系需要新的条件。',{cashMonths:1,freeHours:-2},{next:'end',flagsAdd:['co_declined'],relation:{npcId:'cen',trust:1,closeness:-2,memory:'你没有把探索承诺成合伙'}})
]),
S('co-rules','第一笔回款之前先分钱','一个客户愿意预付，但需求大半会落在小岑身上。你负责产品判断和获客，难以按小时证明价值。对方没有等你先讲愿景，直接问：这次钱怎么分，超出的部分谁决定？',[
O('hours','本单先付交付费，剩余再分','每周用4小时核对账目，获得1个月储备；小岑先按范围领交付报酬。','你拿到的比预想少，交付的人却敢说下周能做多少。收入和股权暂时分开，下一单仍需要重谈价格。',{cashMonths:1,freeHours:-4},{flagsAdd:['co_paid_work'],relation:{npcId:'cen',trust:3,memory:'交付报酬不再藏在合伙情分里'}}),
O('share','全部按五五分，彼此不记工时','每周投8小时，获得2个月储备；维持简单分账，但你承诺补上售后。','眼前的钱分得快。小岑同意试一次，提醒下次若交付仍倾斜就必须调整；你明年需要拿出时间补兑现。',{cashMonths:2,freeHours:-8},{flagsAdd:['co_flat_share'],relation:{npcId:'cen',trust:-1,memory:'五五分账留下一次补位承诺'},commitment:{label:'合伙分账后的售后补位',after:1,requires:{resource:'freeHours',min:6},success:{text:'你接走了约定的售后，小岑重新愿意讨论共同下一单。',resources:{freeHours:-6},stats:{connection:3}},failure:{text:'售后又落到小岑身上。对方把新客户留给自己的业务，不再默认转给合伙项目。',stats:{connection:-4},resources:{cashMonths:-1}}}}),
O('decline','不接这单，先找更匹配的需求','每周投5小时，花1个月储备找客户；退回预付款。','你保住产品方向，小岑则错过一笔本能支撑日常的收入。对方不再推掉自己的外单，项目只能按更慢的节奏走。',{cashMonths:-1,freeHours:-5},{flagsAdd:['co_product_first'],relation:{npcId:'cen',trust:-1,closeness:-1,memory:'你优先保方向，对方保自己的收入'},opportunity:{id:'co-anchor-client',label:'第一家预付客户',status:'closed'}})
]),
S('co-turn','现在赚钱的东西，与你想做的不同','稳定回款来自一个不起眼的流程，小岑想继续卖；你更想重写核心，让它成为通用产品。两条路会争同一笔三个月储备。小岑已经安排了自己的生活，并不把你的新想法视为天然优先。',[
O('cash','先保客户，另留一晚实验','每周投入9小时，获得3个月储备；只给新方案每周一个晚上。','业务有了可预期的排期。你的重写速度慢，小岑终于敢提前答应下月的交付；通用产品错过这一轮热点。',{cashMonths:3,freeHours:-9},{flagsAdd:['co_cash_path'],relation:{npcId:'cen',trust:2,memory:'共同客户优先于个人重写'},stats:{reserve:3,freedom:-2},opportunity:{id:'co-launch-wave',label:'本轮通用产品发布窗口',status:'closed'}}),
O('rewrite','暂停销售，给重写一个期限','每周投12小时，花3个月储备；约定一年后拿不出付费使用就停止。','小岑只同意把自己的投入降到一半，并保留原客户收入。你获得改产品的路，也承担比对方更大的现金风险。',{cashMonths:-3,freeHours:-12},{flagsAdd:['co_rewrite'],stats:{craft:4,energy:-3},relation:{npcId:'cen',trust:1,closeness:-1,memory:'对方只承担同意过的风险'},commitment:{label:'重写方案的一年验收',after:1,requires:{resource:'cashMonths',min:3},success:{text:'你还有三个月缓冲，可再承受一次小范围验证；期限没有被无限延长。',resources:{freeHours:-4},stats:{craft:2}},failure:{text:'重写尚未形成可付费使用，缓冲已不够原定门槛。你们按约停掉扩张，而不是让小岑无薪补齐。',resources:{freeHours:3},stats:{joy:-3}}}}),
O('split','把客户和代码拆开，各做一条','每周花6小时交接，付1个月储备核清费用；小岑保客户，你拿通用代码。','第一次分开谈得很生硬。结局｜各自继续。你得到代码和自由，失去现成收入；小岑不再替你的技术实验买单，仍愿意在合适时介绍人。',{cashMonths:-1,freeHours:-6},{next:'end',flagsAdd:['co_split_early'],relation:{npcId:'cen',trust:2,closeness:-2,memory:'把各自真正想要的部分分开了'}})
],{variants:[V('co_flat_share','上次五五分账的补位是否兑现，已经影响小岑愿意再投多少。对方拿来两份安排：继续现有收入，或者把实验拆给你独自承担。对方不愿再靠口头补偿谈下一轮。'),V('co_product_first','因为上次拒绝预付客户，缓冲少了一截，小岑已经开始接自己的单。你想重写核心，对方先问的不是技术，而是接下来三个月谁付出什么。')]}),
S('co-absence','有一周，关键的人来不了','小岑要处理自己的事情，这次不能守着发布。对方提前给了日期。你已经向外约了交付，眼前最省事的办法是请对方再破一次例，但对方没有答应。',[
O('delay','亲自通知客户，延期并减范围','每周用5小时沟通与重新排期，付1个月储备补偿；承担对外解释。','客户取消一项扩展，却接受新的日期。小岑不用为自己的离开道歉；你们的合作少了一个默认有人随时能顶上的幻想。',{cashMonths:-1,freeHours:-5},{flagsAdd:['co_respected_absence'],relation:{npcId:'cen',trust:3,memory:'对方的私人安排被当成真实约束'}}),
O('cover','自己加班，照原日发一版','每周投入14小时，获得2个月储备；把别的个人安排全部推后。','客户按时收到版本，小岑感谢但没有承诺以后也这样补位。你保住一次交付，下一年留下的是需要偿还的时间缺口。',{cashMonths:2,freeHours:-14},{flagsAdd:['co_self_cover'],stats:{energy:-6,joy:-3},delay:[{after:1,text:'去年为发布推掉的两次私人安排没有自动回来。你得重新联系，而非从“终于忙完了”继续。',stats:{connection:-2,joy:-2}}]}),
O('pressure','要求对方完成最后一轮再走','每周用3小时争执和交接，获得1个月储备完成最低交付；把项目优先写成要求。','小岑交出已有资料后离开，没有留下你期待的最后一晚。版本勉强上线，对方明确表示以后只接受逐单付费，不再共同承担。',{cashMonths:1,freeHours:-3},{flagsAdd:['co_trust_broken'],relation:{npcId:'cen',trust:-6,closeness:-3,memory:'你把对方已说明的离开当成可推迟'},stats:{connection:-4},opportunity:{id:'co-partner',label:'小岑继续共同经营',status:'closed'}})
]),
S('co-ending','续约之前，不再靠默契','你们把这一轮共同做过的东西摆出来：有回款，有延期，也有各自没说完的不满。小岑可以合作，但不愿继续一份没有退出条款的长期关系。',[
O('renew','签一年明确分工与退出条件','每周留8小时，付1个月储备做账户和资料整理；每季度重谈投入。','结局｜有边界的合伙。小岑按可交付范围继续，你也承认对方有权不跟下一次转向。你们保留共同经营的路，放弃凭一个热情永久绑定彼此。',{cashMonths:-1,freeHours:-8},{next:'end',flagsAdd:['co_ending_renew'],requires:{flagsNone:['co_trust_broken']},relation:{npcId:'cen',trust:3,memory:'合作终于有可执行的退出条款'}}),
O('repair','停止合伙，支付欠下的交付再邀请合作','每周用4小时清账，付2个月储备；只约未来一单有偿合作，不要求立刻答应。','结局｜分开后试着修复。小岑收下结算，没马上接新邀请。你失去共同公司的想象，却把重新联系的门留在一个对方能拒绝的位置。',{cashMonths:-2,freeHours:-4},{next:'end',flagsAdd:['co_ending_repair'],relation:{npcId:'cen',trust:2,closeness:-1,memory:'迟到的结算先于修复请求'},delay:[{after:2,text:'小岑转来一个范围很小的询价，没有再谈共同公司。修复停在可以认真做一单的位置。',resources:{cashMonths:1},relation:{npcId:'cen',trust:1,memory:'分开后有过一次范围清楚的再合作'}}]}),
O('retain','买断这一版，独自承担后续','每周用5小时交接，付3个月储备买断约定范围；后续客户由你负责。','结局｜得到控制，也得到值班表。小岑退出，收入和故障都归你。你可以按自己的判断改，但失去那个会在你过早重写时提出反对的人。',{cashMonths:-3,freeHours:-5},{next:'end',flagsAdd:['co_ending_solo'],stats:{freedom:3,connection:-3},relation:{npcId:'cen',trust:1,closeness:-3,memory:'项目完成买断，关系转为普通同行'}})
],{variants:[V('co_trust_broken','小岑没有来谈共同续约。对方发来最后一份结算表：以后可以是客户、同行，也可以不再合作，但对方不会再以合伙人身份守发布。')]} )
],{npcId:'cen',preferredYears:[2030,2035,2036,2038,2050],readingFocus:'同辈、钱与合作：分工改变实际机会，关系不能用“大家都对”消解。'}));
arcs.push(A('cash-contract','储备不会自己续上','reserve',['money-boundaries','public-role','craft-iteration'],27,100,[
S('cash-ledger','把下次收款写到日历上','你看了现金缓冲：{cashMonths}个月。一个熟人客户想请你做AI流程评估，报价可以撑过一段时间，但开始前要先停掉自己的一项探索。对方不是来资助理想，他有自己的交付日。',[
O('audit','只卖两周诊断，不包上线','每周用6小时，获得2个月储备；交一份可以决定做不做的清单。','客户少买一层承诺，你也少收一层钱。独立探索放慢两周，后续上线可以另谈；你没有把未知成本藏进总价。',{cashMonths:2,freeHours:-6},{flagsAdd:['cash_audit'],flagsRemove:['cash_full','cash_no_client'],opportunity:{id:'cash-build',label:'诊断后的实施报价',status:'open',expiresAfter:2}}),
O('package','签整包，先收一半预款','每周用12小时，获得4个月储备；暂停探索，承诺本轮上线和培训。','储备立刻变厚，对方也把你写进了排期。你保住短期现金，接下了一个以后不能用“还在探索”解释的期限。',{cashMonths:4,freeHours:-12},{flagsAdd:['cash_full'],flagsRemove:['cash_audit','cash_no_client'],stats:{reserve:3,freedom:-3},commitment:{label:'整包客户上线及培训',after:1,requires:{resource:'freeHours',min:8},success:{text:'你按约完成培训，拿到尾款；这段时间的独立探索仍是空白。',resources:{cashMonths:2,freeHours:-8}},failure:{text:'上线推迟，预款的一部分用于补偿，客户的下一期预算给了别人。',resources:{cashMonths:-2},stats:{connection:-4}}}}),
O('decline','谢绝客户，缩小日常预算','每周花2小时整理支出，本年消耗2个月储备继续自己的实验。','你保住完整的探索时间，客户改找了别人。缓冲会继续下降，明年需要面对结果还没成熟也要收钱的可能。',{cashMonths:-2,freeHours:-2},{flagsAdd:['cash_no_client'],flagsRemove:['cash_audit','cash_full'],stats:{freedom:3},opportunity:{id:'cash-build',label:'本轮熟人客户预算',status:'closed'}})
]),
S('cash-scope','顺手加上去的三件事','客户发来新要求：再接一套资料、给另一部门培训、下周做个演示。每件听起来都不大，合在一起会吃掉原本留给自己的两个晚上。对方说希望长期合作，没有先提钱。',[
O('change','列变更单，把两个需求另报价','每周花4小时确认，获得2个月储备；一个需求因预算被删。','客户接受两个，删掉一个。气氛没有此前亲热，交付边界却能落到日历；你保住有偿扩展的路，失去“什么都能帮”的评价。',{cashMonths:2,freeHours:-4},{flagsAdd:['cash_change_order'],stats:{reserve:2},relation:{npcId:'cen',trust:1,memory:'你把追加需求算进了真实排期'}}),
O('gift','这次都送，争取下一轮续约','每周多做9小时，获得1个月储备尾款；不把追加时间另计价。','客户很满意，把这套范围当成以后报价的起点。续约机会仍在，但明年你要么涨价，要么继续付出相同的晚上。',{cashMonths:1,freeHours:-9},{flagsAdd:['cash_free_scope'],stats:{connection:2,energy:-3},delay:[{after:1,text:'客户的新询价照抄了上次免费加上的三项。你得重新解释价格，过去的额外付出没有自动变成溢价。',stats:{reserve:-2},resources:{freeHours:-2}}]}),
O('hold','只交原合同，拒绝全部追加','每周用3小时说明原范围，获得1个月储备；交付后不预留新档期。','合同完成，客户失望地把新部门交给别人。你保住原来的两个晚上，也失去一条本来可能扩大的客户线。',{cashMonths:1,freeHours:-3},{flagsAdd:['cash_strict'],opportunity:{id:'cash-build',label:'客户新部门扩单',status:'closed'},stats:{freedom:2}})
],{variants:[V('cash_no_client','你拒绝过上一轮整包，如今客户只愿意买一份小诊断，且想顺手加上三项。现金更紧时，说范围也更难；这次仍有权选择，但不能假装每条路代价相同。')]}),
S('cash-late','回款迟了，约定没迟','付款流程推迟六周，客户仍希望照原日期交下一版。你能拿自己的缓冲垫上，但那笔钱原本留给接下来的一段空档。小岑愿意做一部分，只接受按时付费。',[
O('milestone','把下一版移到到账之后','每周花3小时重新排里程碑，本年少收1个月储备；暂停新增工作。','客户内部有人不高兴，却推动财务处理了首笔款。你保住小岑不被欠费，也承担扩单被另一家先接走的损失。',{cashMonths:-1,freeHours:-3},{flagsAdd:['cash_pay_gate'],relation:{npcId:'cen',trust:2,memory:'没让协作者垫客户回款'},opportunity:{id:'cash-expansion',label:'抢先接扩单',status:'closed'}}),
O('bridge','自己垫协作费，继续交付','每周留7小时，付2个月储备垫给小岑；赌客户能完成付款。','小岑按约收到钱，客户按时拿到版本。你保住关系和项目，也把付款风险留在自己账上；延迟一年才知道能收回多少。',{cashMonths:-2,freeHours:-7},{flagsAdd:['cash_bridge'],relation:{npcId:'cen',trust:3,memory:'你按时付协作费'},delay:[{after:1,text:'那笔垫款终于大部分到账，仍有一项没有合同依据的追加费没收回。等待占住的缓冲不会补发利息。',resources:{cashMonths:1},stats:{reserve:1}}]}),
O('exit','按合同结清已做部分，停止后续','每周花5小时对账交接，获得1个月储备已完成部分；放弃剩余尾款。','结局｜收得不满，离得清楚。客户另请实施方，你带走能确认的收入和一段空档。长期合作的门关上，你不再等它给探索续命。',{cashMonths:1,freeHours:-5},{next:'end',flagsAdd:['cash_early_exit'],stats:{freedom:3,joy:-2},opportunity:{id:'cash-build',label:'客户长期实施合作',status:'closed'}})
]),
S('cash-next','有了喘息，是续单还是停下来','这轮工作接近结束。客户想用同一价格锁你下一年；你也想回去做那件一直被挪后的产品。空档不是免费时间，它会重新消耗缓冲。',[
O('retainer','提价做固定两天的顾问','每周留8小时，获得3个月储备；承诺固定两天，其余时间不响应。','客户接受范围缩小的续约。你得到部分稳定，也让产品只能慢慢推进；这一年无法同时过完整自由和完整收入两种生活。',{cashMonths:3,freeHours:-8},{flagsAdd:['cash_retainer'],stats:{reserve:2,freedom:-2}}),
O('sabbatical','停止续单，给产品一个季度','每周投入8小时，消耗2个月储备；把旧客户资料整理后关掉值班。','你终于能连续打开自己的项目。客户取消下一期预算，季度结束后不会自动等你回来；机会换成了一个必须自己验收的期限。',{cashMonths:-2,freeHours:-8},{flagsAdd:['cash_product_quarter'],opportunity:{id:'cash-retainer',label:'下一年顾问续约',status:'closed'},commitment:{label:'腾出季度后的真实使用验收',after:1,requires:{resource:'freeHours',min:6},success:{text:'你确实拿一个版本见了使用者，得到继续或停止的具体理由；没有因此保证收入。',stats:{craft:4},resources:{freeHours:-6}},failure:{text:'空档被零散事务吃掉，旧客户的预算也已经给别人。你保住了选择权，但这一季没有换来可用版本。',stats:{joy:-3}}}}),
O('refer','把续单介绍给同行，收尾退出','每周花4小时交接，获得1个月储备介绍与文档费用；不继续抽成。','客户有了接手的人。你少了一条稳定收入，换来无需长期盯人的退出；以后能否再接单，要凭新档期重新报价。',{cashMonths:1,freeHours:-4},{flagsAdd:['cash_referred'],relation:{npcId:'cen',trust:2,memory:'把退出做成了可接手的交付'}})
]),
S('cash-close','下一轮如何接钱','你把实际工时和到账日期并排看：有些钱来得慢，有些便宜承诺花得久。下一轮不是保证赚更多，而是决定愿意怎样用工作给生活补缓冲。',[
O('limited','只开放一个范围清楚的档期','每周留6小时，获得2个月储备；拒绝两个紧急询价。','结局｜少接一单的生意。你保住一位知道如何合作的客户，也承受收入增长有限的结果。新的探索只能从剩下的真实时间开始。',{cashMonths:2,freeHours:-6},{next:'end',flagsAdd:['cash_ending_bounded'],stats:{reserve:2,energy:2}}),
O('more','把下一年主要时间卖给交付','每周留12小时，获得4个月储备；明确把个人产品暂缓一年。','结局｜用一年换缓冲。储备增加，个人产品没有被同时完成。你可以之后转身，但那时的市场和同行不会停在今天。',{cashMonths:4,freeHours:-12},{next:'end',flagsAdd:['cash_ending_contract'],stats:{reserve:4,freedom:-4},delay:[{after:2,text:'你曾想进入的产品细分已有新团队在做。过去用交付换来的缓冲还在，原先的空白市场已经不在。',stats:{craft:-1}}]}),
O('pause','本轮不再接，接受缓冲变薄','每周用2小时关闭值班、消耗1个月储备；把可拒绝客户的时间真正留出来。','结局｜停在还可以说不时。没有新回款替你兜底，探索也没有保证。你把一轮买卖做完，带着实际余额继续下一段。',{cashMonths:-1,freeHours:-2},{next:'end',flagsAdd:['cash_ending_pause'],stats:{freedom:4}})
])
],{repeatable:true,preferredYears:[2029,2035,2047,2050,2067,2079],readingFocus:'财帛与边界年度：收入、回款、售后各有不同代价，不以忙碌或自律替代交易条件。'}));
arcs.push(A('three-cities','三个城市，一张普通周历','freedom',['home-base','outer-change','peer-negotiation'],31,48,[
S('city-plan','别先挑最好看的街','你想比较上海、新加坡、岘港怎样容纳真实生活。住宿、网络、可合法停留及工作安排都要逐项核实；先核对这一轮能停留到哪天，再付不可退的费用。阿远能在其中一段见面，日期已经定了。',[
O('slow','只选一城住六周','每周用4小时安排，花2个月储备；取消另外两段移动。','你能重复买菜、通勤和找球场。阿远按约来一次，另外两城仍是未验证的想象；你保留深入比较的路，暂失横向样本。',{cashMonths:-2,freeHours:-4},{flagsAdd:['city_slow'],travel:{city:'岘港',years:1},relation:{npcId:'yuan',trust:2,memory:'你按提前说好的日期到场'}}),
O('compare','三城各试两周，记录真实一周','每周用7小时规划，花3个月储备；按可行入境与住宿条件走，不锁长期计划。','你得到可比较的样本，也花更多时间搬行李。阿远那场比赛被你的改期挤掉，他不会为下一站再改自己的假期。',{cashMonths:-3,freeHours:-7},{flagsAdd:['city_compare'],travel:{city:'新加坡',years:1},relation:{npcId:'yuan',trust:-2,memory:'你的跨城改期挤掉了一场已约的球'},delay:[{after:1,text:'阿远的新一季赛程已经定下。他仍愿意见你，但只有两个明确周末，不再把整段假期留作待定。',relation:{npcId:'yuan',closeness:-1,memory:'他的假期不再围着你的路线调整'}}]}),
O('stay','先留上海，做一轮家中试住','每周花3小时重排工作与生活，花1个月储备调整住处；这一轮不移动。','你把出门的期待换成对现有日常的测试。阿远来吃了一顿饭，城市选项没有被证伪；你先知道自己究竟想逃开什么。',{cashMonths:-1,freeHours:-3},{flagsAdd:['city_stay'],travel:{city:'上海',years:1},stats:{reserve:1},relation:{npcId:'yuan',closeness:2,memory:'一次没有赶路的晚饭'}})
]),
S('city-week','没有景点的星期三','这座城的新鲜感退了。你要买菜、找稳定网络、处理一次租住问题，晚上还有工作和运动。便宜的住处离日常远；方便的住处会多吃掉现金缓冲。',[
O('near','多付钱，住在日常能步行的地方','每周花2小时核对条件，付2个月储备；把租期保持在已确认可行的范围。','你少了通勤摩擦，饭和运动更容易发生。缓冲薄了，下一年不容易再说走就走；保留的是日常质量。',{cashMonths:-2,freeHours:-2},{flagsAdd:['city_walkable'],stats:{energy:3,joy:2}}),
O('cheap','选远一点的房，把预算留给项目','每周多花5小时交通，付1个月储备；把省下的预算留作开发。','账上轻一些，晚间约球先少了一次。你保留作品的投入空间，也发现地图上的距离会直接进入一周。',{cashMonths:-1,freeHours:-5},{flagsAdd:['city_commute'],stats:{reserve:2,energy:-2},relation:{npcId:'yuan',closeness:-1,memory:'路程让见面变得不再顺路'}}),
O('leave','确认不合适，提前结束这一站','每周用5小时退租和迁移，付2个月储备；不为证明选择正确硬住。','你得到一个清楚的否定样本，也损失提前退掉的费用。结局｜这站没有留下。下一座城仍可探索，但短住没有自动成为基地。',{cashMonths:-2,freeHours:-5},{next:'end',flagsAdd:['city_trial_exit'],stats:{freedom:2}})
]),
S('city-anchor','选一个能回来放钥匙的地方','短住结束，有人愿意和你保持固定的球局或共做一顿饭。你要么留下重复日常，要么回到已有关系较多的地方，也可以继续流动；任何一条都不是单靠喜欢就能永久成立。',[
O('shanghai','把上海设为本轮基地','每周用4小时办妥住处，付2个月储备；之后旅行从上海出发。','旧关系不必每次重新约起，想去别处时要承担空置和往返成本。你保留熟悉网络，放弃这轮在海外长期试住。',{cashMonths:-2,freeHours:-4},{flagsAdd:['city_base_sh'],travel:{city:'上海',years:2},stats:{connection:3},opportunity:{id:'city-overseas',label:'本轮连续海外试住',status:'closed'}}),
O('singapore','以新加坡做有期限的基地','每周用6小时核实合法安排与住房，付3个月储备；无法成立就按期离开，不把愿望当资格。','你得到一个有截止日的日常计划，成本更高，下一轮需要重新核实条件。熟人的饭局少了一些，你保留跨环境工作和生活的试验。',{cashMonths:-3,freeHours:-6},{flagsAdd:['city_base_sg'],travel:{city:'新加坡',years:2},stats:{freedom:3},commitment:{label:'下一期基地条件复核',after:2,requires:{resource:'cashMonths',min:5},success:{text:'游戏预算还能支撑下一轮安排；你仍需按现实适用规则核实停留、住房与工作，不能自动视作续居成功。',resources:{freeHours:-3}},failure:{text:'预算不足以继续原住法，你结束本轮租期，把物品缩成能带走的份量。',stats:{joy:-2},resources:{freeHours:-3}}}}),
O('danang','以岘港做一季一季的生活试验','每周用5小时安排，付2个月储备；先只锁已核实可行的一季。','球场和买菜路线开始熟悉，跨地工作和下一期停留仍要重新安排。你得到轻一些的日常，放弃随时能当面见上海同行的便利。',{cashMonths:-2,freeHours:-5},{flagsAdd:['city_base_dn'],travel:{city:'岘港',years:2},stats:{joy:3,connection:-1}})
],{variants:[V('city_stay','你没有跨城，却已经记录了普通周历：哪些不满来自工作，哪些来自住处，哪些真的需要换环境。现在再选基地，比当初的城市想象少了一层滤镜。'),V('city_compare','三城的记录放在一起。最便宜的两周不等于全年最容易过，阿远错过的那场球也没补回来。你要选一处重复日常，不能把每个地方的最好一天拼成一个家。')]}),
S('city-key','钥匙多了，谁替你看门','你想再出去一段时间，基地里却有租约、物品和已经约下的日常。阿远愿意帮一次收件，但明确不能每周来。你第一次发现“有地方可回”也会生成看不见的劳动。',[
O('paid','付费托管，保留完整的住处','每周用2小时协调，花2个月储备；不把维护默认交给朋友。','你可以带更少行李离开，回来仍有原来的桌子。钱继续被占住，长期流动的成本高于只买一张机票。',{cashMonths:-2,freeHours:-2},{flagsAdd:['city_paid_base'],relation:{npcId:'yuan',trust:2,memory:'你没有把朋友变成免费物业'}}),
O('sublet','按可行合同转租，缩小自己的空间','每周花6小时筛选与清点，获得1个月储备；只在租约与规则允许时安排。','有人替你分担费用，你也不再能随时无通知回来。家变得不完全属于自己，流动多了一点可持续余地。',{cashMonths:1,freeHours:-6},{flagsAdd:['city_shared_base'],stats:{reserve:2,freedom:-1}}),
O('release','退掉基地，只保留寄存和联系人','每周用7小时清物，付1个月储备；把固定球局和饭局逐一告别。','你轻下来，随时可回的床和门钥匙也一起消失。阿远愿意再见，但提醒下次先订自己的住处；关系保留，基地结束。',{cashMonths:-1,freeHours:-7},{flagsAdd:['city_release_base'],relation:{npcId:'yuan',trust:1,memory:'告别说清楚，没有默认借住'},stats:{freedom:4,connection:-2}})
]),
S('city-return','回去以后，算不算已经安顿','你回到这一轮选的地方，发现店会关、朋友会改日程、租金也会变。基地不是一次正确选择，而是愿不愿意继续支付它平凡的部分。',[
O('root','再住一轮，给日常固定位置','每周用4小时维护住处和固定活动，花2个月储备；减少这一年的远行。','结局｜有代价的基地。你不再每月比较哪座城更好，换来重复见同一批人的机会。别处仍令人向往，这一年你确实少去了几站。',{cashMonths:-2,freeHours:-4},{next:'end',flagsAdd:['city_ending_root'],stats:{connection:4,freedom:-2}}),
O('seasonal','保留季节性返回，不追求全年','每周用3小时提前订可行短住，花2个月储备；接受回来的房间每次可能不同。','结局｜有锚点的流动。你留住部分关系和路线，也失去永久摆放东西的方便。每轮停留仍要核实条件，熟悉感没有兑换成身份特权。',{cashMonths:-2,freeHours:-3},{next:'end',flagsAdd:['city_ending_seasonal'],stats:{freedom:3,connection:1}}),
O('close','承认这轮结束，卖掉不带走的东西','每周用6小时清理，获得1个月储备；通知固定活动不再占位。','结局｜搬走也算完成。一些东西卖不出原价，几段关系改成偶尔联系。你没有找到永久答案，却知道下一站不能只靠新鲜开始。',{cashMonths:1,freeHours:-6},{next:'end',flagsAdd:['city_ending_close'],stats:{freedom:3,joy:-2},relation:{npcId:'yuan',closeness:-1,memory:'这一轮同城日常告一段落'}})
])
],{npcId:'yuan',preferredYears:[2032,2033,2038,2045],readingFocus:'2032田宅换限：基地进入主线；迁移不能只写到达，还要处理成本、朋友边界、返回和撤离。'}));
arcs.push(A('rhythm','这顿饭不能无限往后热','energy',['body-rhythm','inner-standards','home-base'],27,100,[
S('rh-start','先停掉一个晚上的承诺','你又把饭热了一次。工作、运动、做饭都想保留，一周却只有这么多晚上。这轮重新排日常，不把某种生活方式当成永远有效的答案。你需要真取消一件事。',[
O('cook','每周两晚做饭，停一个临时会','每周留4小时买菜做饭，花1个月储备调整排期；拒绝本轮临时夜间支持。','饭有了固定位置，客户或同事少了一个随时找你的窗口。你保住独立日常，下一次紧急任务会先考虑别人。',{cashMonths:-1,freeHours:-4},{flagsAdd:['rh_cook'],flagsRemove:['rh_sprint','rh_outsource'],stats:{energy:4,joy:2},opportunity:{id:'rh-night-work',label:'本轮夜间紧急任务',status:'closed'}}),
O('sprint','先做完这一季，再恢复生活','每周投入12小时，获得3个月储备；暂停两次运动和认真做饭。','工作进度变快，现金有了缓冲。你设下一季再恢复的日期，也真的让眼前生活变窄；不是写进提醒就会自动归还。',{cashMonths:3,freeHours:-12},{flagsAdd:['rh_sprint'],flagsRemove:['rh_cook','rh_outsource'],stats:{reserve:3,energy:-5,joy:-3},delay:[{after:1,text:'你说过只冲一季。新的任务已经排到后面，恢复运动必须拒绝一个有报酬的档期，原生活不会自动回来。',stats:{energy:-2}}]}),
O('outsource','花钱解决吃饭，把一晚留给运动','每周留3小时固定运动，花2个月储备购买可靠餐食；暂不把做饭变成新目标。','你得到更容易守住的安排，失去一些下厨的乐趣和现金。运动能继续，工作也没因此少一个截止日。',{cashMonths:-2,freeHours:-3},{flagsAdd:['rh_outsource'],flagsRemove:['rh_cook','rh_sprint'],stats:{energy:3,joy:1,reserve:-2}})
],{variants:[V('rh_ending_protect','上一轮你守住过晚饭，也因此错过过工作。新一轮日程又开始挤，你要重新选择；一次成功的边界不会替以后每一季自动生效。'),V('rh_ending_work','你上次用一段密集工作换过缓冲。这次晚饭再次被推后，眼前并不缺“以后恢复”的计划，缺的是愿意现在放弃的一个档期。')]}),
S('rh-conflict','临时发布撞上已经约好的晚上','本周有个临时发布。一起运动的人已订好场，饭也买了食材。负责人能接受你缺席，但会重新安排下一次关键任务；双方都真的会记住这次选择。',[
O('protect','按原计划去运动，提前交清工作','每周用4小时做好交接，花1个月储备请人替一段支持；不参加这次发布。','约好的晚上发生了。负责人把下一轮主发布交给别人，你不能既保住这个晚上，又保留每一次被看见的位置。',{cashMonths:-1,freeHours:-4},{flagsAdd:['rh_protected_evening'],stats:{energy:3,connection:2},opportunity:{id:'rh-release-lead',label:'下一轮主发布负责人',status:'closed'}}),
O('cancel','取消约定，把原因当面说清','每周用9小时发布，获得2个月储备；自己付掉不可退的场地或食材。','发布接住了。同行者仍愿意约下次，但不再替你提前预留整季；你得到一项成绩，也让相处回到需要重新邀请的位置。',{cashMonths:2,freeHours:-9},{flagsAdd:['rh_cancelled'],stats:{craft:3,energy:-3},relation:{npcId:'yuan',trust:-2,closeness:-1,memory:'一次已排好的晚上被临时工作取消'}}),
O('both','两边都答应，发布间隙远程加入','每周挤出12小时，获得1个月储备；不退场地，也不撤工作承诺。','你在球场边接了大半晚电话，工作也有一段没跟上。别人没有得到一个完整在场的人；两边的下一次邀请都不再默认给你。',{cashMonths:1,freeHours:-12},{flagsAdd:['rh_double_booked'],stats:{energy:-5,connection:-3},relation:{npcId:'yuan',trust:-4,memory:'你到场了，却没有真正参与'},delay:[{after:1,text:'阿远这一轮只在场地还有空位时才问你，没有再为你改人数。你若想回到固定名单，需要连续兑现，而非再解释一次。',relation:{npcId:'yuan',closeness:-2,memory:'需要重新赢回固定席位'}}]})
]),
S('rh-review','记录不是成绩单','你翻开六问记录，看到同一种拖延反复出现。它可能是日程太满，也可能是你真的不想继续某件事。阿远能留一个短练习时段，但只保留三次，不会无限等你恢复。',[
O('small','连续三次短练习，不追加目标','每周留3小时，花1个月储备购买确定时段；这一季不报更远的比赛。','你少了一个外出的机会，换来三次确实发生的练习。阿远重新敢把你算进人数，日常恢复在小范围内成立。',{cashMonths:-1,freeHours:-3},{flagsAdd:['rh_rebuilt'],relation:{npcId:'yuan',trust:3,memory:'连续三次说到做到'},stats:{energy:3},opportunity:{id:'rh-away-event',label:'本季外地大活动',status:'closed'}}),
O('coach','付费找人帮忙重排，不给朋友加任务','每周留4小时，花2个月储备做有限次数的训练或生活安排；不承诺任何健康结果。','外部安排降低了开始的难度，钱和时间都真实花出。你没有恢复原来的固定球局，而是找到一套较独立的节奏。',{cashMonths:-2,freeHours:-4},{flagsAdd:['rh_paid_structure'],stats:{energy:3,reserve:-2},relation:{npcId:'yuan',trust:1,memory:'你自己承担重新开始的安排'}}),
O('stop','取消本季运动目标，承认暂时不做','每周用1小时通知和退款，获得1个月储备可退费用；不占固定名额。','结局｜先结束悬着的承诺。你仍能散步和吃饭，但这一季队伍的位置给了别人。少了内疚，也少了别人带你回场的入口。',{cashMonths:1,freeHours:-1},{next:'end',flagsAdd:['rh_ending_stop'],relation:{npcId:'yuan',trust:1,closeness:-2,memory:'你明确退了固定名额'},opportunity:{id:'rh-fixed-slot',label:'本季固定训练位置',status:'closed'}})
]),
S('rh-end','下个忙季，会删哪一格','这轮尝试有了结果：有些晚上守住了，有些没有。新的工作周期又来了，你要决定什么能作为日常继续，什么只适合这一段。运动不会替你完成工作，工作也不会因为你安排得好就不再来。',[
O('protect','把两晚列为不可临时改动','每周固定4小时，花1个月储备分担事务；少接一个急单。','结局｜守住普通日子。晚饭和运动有了位置，收入与曝光少了一块。下一轮若想改，你需要主动重谈，而非让别人发现你又不在。',{cashMonths:-1,freeHours:-4},{next:'end',flagsAdd:['rh_ending_protect'],flagsRemove:['rh_ending_work'],stats:{energy:4,joy:2,reserve:-2}}),
O('season','按季度伸缩，每次提前公布缺席','每周留3小时，获得1个月储备接有限工作；每季只承诺自己能来的场次。','结局｜不完整的节律。你不能和同一队一起走完整季，但少了失约。生活有时紧，有时松，需要不断付沟通的代价。',{cashMonths:1,freeHours:-3},{next:'end',flagsAdd:['rh_ending_flexible'],relation:{npcId:'yuan',trust:1,memory:'能来多少，先说多少'},stats:{energy:2,connection:-1}}),
O('work','接受再忙一年，主动退出固定活动','每周投入10小时，获得3个月储备；先退出而非等下次临时取消。','结局｜选择工作的一年。缓冲更厚，队友的下一季名单没有你。你仍可重新开始，但重新成为熟人需要真实出场。',{cashMonths:3,freeHours:-10},{next:'end',flagsAdd:['rh_ending_work'],flagsRemove:['rh_ending_protect'],stats:{reserve:3,energy:-3,connection:-3},relation:{npcId:'yuan',closeness:-2,memory:'你明确把这一年留给了工作'}})
])
],{repeatable:true,npcId:'yuan',preferredYears:[2034,2046,2058,2066,2074,2086],readingFocus:'疾厄主轴落到吃饭、工作时段和出场，不生成疾病断言；重复一轮也要承认上轮错失。'}));
arcs.push(A('partnership','要不要开始一段具体关系','connection',['partnership','home-base','outer-change'],36,70,[
S('pa-start','别把同行自动叫成伴侣','一位成年同行者与你约过几次饭，明确提出想认真相处，也愿意听见不同答案。对方有自己的城市与工作安排。此刻没有既定婚育，也没有默认亲密关系。',[
O('start','明确答应试着建立伴侣关系','每周留4小时见面，花1个月储备安排双方方便的时间；先约三个月再谈后续。','你们明确成为伴侣。对方取消一项别的安排，你也关掉继续以“只是同行”回避回应的路；新的关系不附送共同城市。',{cashMonths:-1,freeHours:-4},{partner:'start',flagsAdd:['pa_started'],stats:{connection:4,freedom:-2},relation:{npcId:'partner',trust:2,closeness:3,memory:'双方明确选择开始关系'}}),
O('slow','说还没准备好，只约一次再谈','每周留2小时认真谈话，花1个月储备见面；不建立伴侣关系，也不要求对方等候。','对方同意这次谈话，但表示不会暂停自己的选择。下一年是否还能开始，不由你单方面保留；你有时间，也承担机会走开的风险。',{cashMonths:-1,freeHours:-2},{flagsAdd:['pa_not_started'],delay:[{after:1,text:'那位同行者决定把生活放回自己的城市，不再等待一个未开始的关系。本轮机会结束，彼此仍可以普通同行相待。',opportunity:{id:'pa-start-window',label:'与这位同行者开始关系',status:'closed'},stats:{joy:-2}}],next:'end'}),
O('friend','明确只愿普通朋友相处','每周用2小时当面说清，不新增现金支出；不继续模糊的约会。','结局｜没有开始。对方减少联系，保留自己的日程。你没有伴侣，也不用把一次拒绝包装成更高级的生活选择；那条关系的可能性确实结束。',{freeHours:-2},{next:'end',flagsAdd:['pa_declined'],opportunity:{id:'pa-start-window',label:'与这位同行者开始关系',status:'closed'},stats:{freedom:2,joy:-1}})
],{requires:{partner:false}}),
S('pa-calendar','两个完整日历，不能拼成一个空隙','你们已经是伴侣。对方希望每周有一个不被临时工作取消的晚上；你想保留跨城机会。两人都说过珍惜关系，眼前却要从真实日历里删一格。',[
O('fixed','固定一晚，拒绝一项外地机会','每周留5小时，花1个月储备减少临时移动；推掉本轮跨城项目。','对方终于能提前安排自己的星期几。你获得共同日常，错过一项本来很想做的工作；这份不甘也需要由你自己承担。',{cashMonths:-1,freeHours:-5},{flagsAdd:['pa_fixed'],relation:{npcId:'partner',trust:3,closeness:2,memory:'你为共同日常真的删去一个机会'},opportunity:{id:'pa-travel-project',label:'本轮跨城项目',status:'closed'},stats:{freedom:-2}}),
O('distance','谈有期限的异地，每月认真见面','每周留3小时联系，花3个月储备往返；约定一年后重谈城市，不保证永远能延续。','对方同意一年，但保留届时不再异地的权利。你保住跨城路线，钱和日程开始被往返占用；关系不能只靠旅途中的好日子。',{cashMonths:-3,freeHours:-3},{flagsAdd:['pa_distance'],relation:{npcId:'partner',trust:1,closeness:1,memory:'异地有明确重谈日而非无限延期'},commitment:{label:'异地一年后的城市谈话',after:1,requires:{resource:'freeHours',min:4},success:{text:'你们如期完整谈了一次城市，各自需要什么终于列了出来；谈话本身不保证答案一致。',resources:{freeHours:-4},stats:{connection:2}},failure:{text:'原定谈话又被工作挪走，对方停止为下一次团聚买票，要求先决定是否继续。',stats:{connection:-4},resources:{cashMonths:-1}}}}),
O('vague','先不定期，谁有空谁联系','每周只留1小时，获得1个月储备接原工作；不削减跨城机会。','你保住了最宽的个人日程，对方却需要一再发起。几次失约后，对方会停止默认保留周末；省下的时间也在改变关系。',{cashMonths:1,freeHours:-1},{flagsAdd:['pa_vague'],relation:{npcId:'partner',trust:-4,closeness:-2,memory:'联系总要等工作留下空隙'},delay:[{after:1,text:'伴侣已经把两个周末安排给自己的朋友和兴趣，不再每次等你确定。若想继续，需要重新邀请和兑现。',relation:{npcId:'partner',trust:-2,closeness:-2,memory:'不再把周末留作待定'}}]})
]),
S('pa-city','同一座城，要由谁先放下什么','对方的一份重要工作在另一座城，且并不想让它只成为你的生活配套。你也有自己刚建立的基地。继续相处开始触到钱、住处和谁先改日程。',[
O('move','你迁过去，先给自己一年试住','每周花6小时迁移安排，花3个月储备；暂停原基地的固定活动，只在条件核实后搬。','你承担搬动，对方继续自己的工作；你需要重新核实适用条件，也要自己安排工作。共同日常多了，原城市的朋友不会为你保留每个位置。',{cashMonths:-3,freeHours:-6},{flagsAdd:['pa_you_move'],relation:{npcId:'partner',trust:3,closeness:3,memory:'你承担了一次真实迁移'},stats:{freedom:-2,connection:2}}),
O('invite','请对方考虑迁来，同时出搬动成本','每周花5小时讨论，付3个月储备承担迁移和试住；明确对方可以拒绝。','对方只答应有期限试住，并保留回去工作的空间。你保住基地，却有责任让新日常不只是便利自己；那笔钱换不到永久答应。',{cashMonths:-3,freeHours:-5},{flagsAdd:['pa_partner_trial'],relation:{npcId:'partner',trust:1,closeness:2,memory:'迁来的试验有返回的权利'},delay:[{after:2,text:'伴侣拿到回原城市发展的机会。曾经承担搬家费用，不等于买断了对方重新选择的权利。',stats:{connection:-1},resources:{freeHours:-2}}]}),
O('separate','不迁、不再续异地，认真分开','每周用4小时交还物品并通知共同安排，花1个月储备收尾；结束伴侣关系。','结局｜两人的城市都被保住，关系没有保住。你们各自继续，不把不合适说成任何一方不够认真；一些共同路线需要重新走成一个人的。',{cashMonths:-1,freeHours:-4},{next:'end',partner:'end',flagsAdd:['pa_ended_city'],relation:{npcId:'partner',trust:1,closeness:-5,memory:'在城市无法相容处清楚分开'},stats:{joy:-4,freedom:3}})
],{variants:[V('pa_vague','先前几次待定已让对方收回一些信任。现在又面临城市分歧，对方不再接受“以后会安排”，只愿意讨论谁具体做什么，或是否结束。'),V('pa_distance','约定的异地期限到了。往返曾让团聚像假期，但此刻要决定的是星期三谁下班、谁买菜、谁能不为见面请假。')]}),
S('pa-home','家庭要靠明确答应才会出现','你们在同一处或有确定见面的日常里，开始讨论什么算共同生活。可以是伴侣各有住处，可以同住共同分账，也可以明确讨论家庭计划；没有哪一项被自动附送。',[
O('two-doors','各留住处，固定见面和共同预算','每周留4小时，花2个月储备承担两处生活；不把关系升级为共同家庭。','两人保留独立空间，钱更紧，临时见面不方便。你们选择了可以持续但较分开的伴侣日常，不因此推定婚姻或育儿。',{cashMonths:-2,freeHours:-4},{flagsAdd:['pa_two_homes'],relation:{npcId:'partner',trust:2,closeness:1,memory:'独立空间是双方明确选择'}}),
O('shared-home','明确同住，先试半年共同分工','每周留6小时家务和共处，花2个月储备置办；每人保留独立可用的钱和退出安排。','桌边多了一个人的习惯。你不能再随时不说明就改路线，对方也承担同样约束；共同家务成为关系的一部分，尚不默认育儿。',{cashMonths:-2,freeHours:-6},{flagsAdd:['pa_shared_home'],relation:{npcId:'partner',trust:3,closeness:3,memory:'同住有真实分工与独立余地'},stats:{freedom:-2,connection:3}}),
O('family-talk','明确共同讨论家庭可能，不先答应育儿','每周留7小时核对愿望、照护和预算，花2个月储备咨询与试排；任何后续家庭决定仍须双方明确同意。','你们把过去避开的议题摊开，发现有些愿望并不一致。讨论让未来更具体，也可能缩小共同路线；你们把尚未达成一致的部分留空，没有先替对方答应。',{cashMonths:-2,freeHours:-7},{flagsAdd:['pa_family_discussed'],relation:{npcId:'partner',trust:2,closeness:2,memory:'家庭议题被明确提出，没有默认答案'},stats:{connection:2,freedom:-3}})
]),
S('pa-ending','继续，不等于锁定永远','生活进入重复，分歧没有全消失。对方愿意再谈下一年，也保留自己的工作、朋友和不想做的事。你要决定继续承诺到哪里，或者把这一段结束。',[
O('renew','再约一年，保留每季重谈的时间','每周留5小时共处，花1个月储备维持双方的安排；不把以后意见一致当成条件。','结局｜有期限地认真继续。你们留下共同日常，也留下两个人能改变的权利。你少了一些随时出发，换来有人确实参与普通一天。',{cashMonths:-1,freeHours:-5},{next:'end',flagsAdd:['pa_ending_continue'],relation:{npcId:'partner',trust:3,closeness:3,memory:'继续通过具体日常而非永久保证'},stats:{connection:4,freedom:-2}}),
O('apart-together','退回各自住处，仍明确保持伴侣','每周留3小时见面，花2个月储备分开生活；暂停共同家庭讨论。','结局｜收缩后的关系。亲密保留，一些共同计划撤回，对方需要时间适应。你们没有自动分手，也没把降低承诺说成毫无损失。',{cashMonths:-2,freeHours:-3},{next:'end',flagsAdd:['pa_ending_separate_home'],flagsRemove:['pa_shared_home'],relation:{npcId:'partner',trust:1,closeness:-1,memory:'双方同意降低共同生活强度'},stats:{freedom:2,connection:-1}}),
O('end','结束伴侣关系，清楚分开钱和物品','每周用5小时收尾，花2个月储备完成搬动；不承诺立刻成为朋友。','结局｜共同生活到这里。曾经认真不使分开轻松，独立也不消除失落。你们退回各自日程，往后是否联系要重新得到回应。',{cashMonths:-2,freeHours:-5},{next:'end',partner:'end',flagsAdd:['pa_ending_end'],relation:{npcId:'partner',trust:1,closeness:-6,memory:'没有用继续模糊来拖延结束'},stats:{joy:-4,freedom:3}})
])
],{npcId:'partner',requires:{partner:false},preferredYears:[2037,2040,2049,2061],readingFocus:'夫妻主轴仅提供关系回应议题；必须明确选择才创建伴侣，同住、家庭讨论、育儿均不能自动生成。'}));
arcs.push(A('one-season','阿远这一季只等三次','connection',['shared-work','peer-negotiation','body-rhythm'],36,68,[
S('fr-sign','不是随时想来就有人给你留位','阿远正在排一季飞盘活动。队里有新人，也有人需要早点回家。你可以认真参加一季、只在有空时来，或帮他们做点场外的事。名单在月底定，不会一直空着。',[
O('roster','报一整季，先把缺席日期写出来','每周留6小时，花2个月储备场地与出行；取消两次可能撞期的外出。','阿远把你放进固定轮换，新人会以你的出场排练。你得到一队人的信任，也失去随时改旅程的余地。',{cashMonths:-2,freeHours:-6},{flagsAdd:['fr_roster'],flagsRemove:['fr_dropin','fr_support'],relation:{npcId:'yuan',trust:3,closeness:2,memory:'报名时先写明出场与缺席'},stats:{connection:3,freedom:-2}}),
O('dropin','只买零散场次，不占固定轮换','每周留3小时，花1个月储备；接受比赛名单可能没有你。','你能保留跨城和工作的灵活，也无法要求关键场次优先上场。阿远把稳定位置留给出勤更确定的人。',{cashMonths:-1,freeHours:-3},{flagsAdd:['fr_dropin'],flagsRemove:['fr_roster','fr_support'],relation:{npcId:'yuan',trust:1,memory:'不稳定出勤没有占用固定位置'},opportunity:{id:'fr-finals-slot',label:'本季固定比赛轮换',status:'closed'}}),
O('support','不报上场，接三次场地与饭局','每周留4小时，花1个月储备组织；保留别的运动节奏。','你不是队里的主力，活动却有人能准时找到地方、结束后坐下吃饭。阿远欢迎，但明确组织工作不会兑换成场上资格。',{cashMonths:-1,freeHours:-4},{flagsAdd:['fr_support'],flagsRemove:['fr_roster','fr_dropin'],relation:{npcId:'yuan',trust:2,memory:'场外支持没有被当作换上场的筹码'},stats:{connection:2}})
]),
S('fr-first-miss','第一次缺席，第二个人就要补位','一场工作邀请撞上已定训练。新人已按你会来准备人数。阿远可以找替补，但要提前四天确定；临时缺席的成本会落到另一个人身上。',[
O('show','推掉工作邀请，照常到场','每周留6小时，少得1个月储备的机会收入；不让人临时补位。','训练完整发生。你错过一个有用的同行聚会，阿远却能继续按你的名字排下一次；两种联系无法同时保住。',{cashMonths:-1,freeHours:-6},{flagsAdd:['fr_kept'],relation:{npcId:'yuan',trust:3,memory:'一次有机会成本的准时到场'},opportunity:{id:'fr-work-meet',label:'本轮工作同行聚会',status:'closed'}}),
O('early','提前退出本场，自己找好替补','每周用3小时联系替补，花1个月储备支付差额；照常去工作邀请。','活动没有少人，替补因此得到更多场次。阿远理解，仍把你的固定上场比例下调；没有失约，也有错失。',{cashMonths:-1,freeHours:-3},{flagsAdd:['fr_replaced'],relation:{npcId:'yuan',trust:1,closeness:-1,memory:'提前找替补，出场比例随之调整'},stats:{freedom:2,connection:-1}}),
O('late','先接邀请，临开场再看能否赶到','每周只留2小时，获得1个月储备机会收入；不提前退出名单。','你没有赶上。阿远临时找人，新人少练了一段；下一次名单双方不再先问你。你保住工作机会，失去别人替你留位的信任。',{cashMonths:1,freeHours:-2},{flagsAdd:['fr_no_show'],relation:{npcId:'yuan',trust:-5,closeness:-3,memory:'没有提前确认，临开场缺席'},stats:{connection:-4},opportunity:{id:'fr-finals-slot',label:'本季稳定轮换资格',status:'closed'}})
]),
S('fr-newcomer','更好打的一队，还是已经答应的一队','另一队邀请你参加强度更高的活动，日期撞上原队的新人成长赛。阿远自己也想认真打，但不能把每个不熟练的人都移走。他不会替你把两边的日期变开。',[
O('original','留原队，承担一段新人配合','每周留7小时，花1个月储备训练；放弃本季另一队机会。','比赛不一定更好看，你需要重复讲基础。阿远不再独自补所有位置，你也失去一次只做更强队员的体验。',{cashMonths:-1,freeHours:-7},{flagsAdd:['fr_old_team'],relation:{npcId:'yuan',trust:3,memory:'你愿意和不熟练的人完成承诺'},opportunity:{id:'fr-strong-team',label:'本季更高强度队伍',status:'closed'},stats:{connection:3,craft:1}}),
O('transfer','正式转队，提前完成交接','每周留7小时，花2个月储备训练出行；明确退出原队本季比赛。','你得到更高强度，原队把你的角色交给新人。阿远仍是朋友，却不再在战术里给你留位置；下季回来要重新竞争。',{cashMonths:-2,freeHours:-7},{flagsAdd:['fr_new_team'],relation:{npcId:'yuan',trust:1,closeness:-2,memory:'提前说明转队，没有两头占位'},stats:{joy:3,connection:-2},opportunity:{id:'fr-original-roster',label:'原队本季轮换位置',status:'closed'}}),
O('double','两边都报名，冲突时再挑','每周投10小时，花2个月储备；先保留两张名单，不说明优先级。','两场最终同日，两边都问你为什么现在才说。你得到过更多练习，重要比赛却没人愿意把关键安排押在你身上。',{cashMonths:-2,freeHours:-10},{flagsAdd:['fr_double_roster'],relation:{npcId:'yuan',trust:-5,memory:'两边报名却不说明冲突'},stats:{energy:-4,connection:-4},delay:[{after:1,text:'另一队下一季只发来零散活动邀请，原队也已补齐轮换。你保留了球场，丢掉的是两边的固定信任。',opportunity:{id:'fr-strong-team',label:'另一队固定名额',status:'closed'},stats:{connection:-2}}]})
],{variants:[V('fr_no_show','上次临场缺席后，阿远把固定位置交给了新人。现在另一队来邀请你，但原队还需要你完成已经答应的场外或替补安排；换队不能抹掉旧承诺。')]}),
S('fr-repair','修复要占用自己的周末','季末前有一次不显眼的筹备：登记新人、确认场地、把欠的物品送回来。阿远自己另有安排，只能交接半小时。你可以接回一些具体责任，也可以把本季在这里结束。',[
O('three-times','接下三次确定的小任务，连续到场','每周用4小时，花1个月储备；不申请立刻恢复原上场位置。','你把器材和名单做完。阿远重新相信你能承担一小段，但新人已经站住的位置不会因你补做而撤回。',{cashMonths:-1,freeHours:-4},{flagsAdd:['fr_repaired'],relation:{npcId:'yuan',trust:4,closeness:1,memory:'连续完成了不显眼的三次任务'},stats:{connection:2}}),
O('pay','承担欠下的场地费，退出本季安排','每周用2小时清账，付2个月储备；不要求别人认可你已完全补偿。','钱的缺口填上，时间造成的麻烦无法退回。阿远收下费用，说下次想来提前问；关系不至于断，信任还需要以后再建。',{cashMonths:-2,freeHours:-2},{flagsAdd:['fr_paid_exit'],relation:{npcId:'yuan',trust:2,closeness:-1,memory:'结清费用后退出，未要求立刻恢复信任'},next:'end'}),
O('quiet','不再回复筹备群，只去公开活动','每周只留1小时，现金不变；把本季当作自然结束。','结局｜群还在，位置没有了。阿远停止为你解释缺席，只在偶遇时寒暄。你仍可玩飞盘，但这一队的共同记忆会继续长，而你不在场。',{freeHours:-1},{next:'end',flagsAdd:['fr_ghosted'],relation:{npcId:'yuan',trust:-4,closeness:-4,memory:'没有收尾就退出共同安排'},stats:{freedom:2,connection:-4}})
]),
S('fr-final','一季以后，留下哪种位置','比赛和活动结束，下一季报名又来。阿远也有自己的新安排，不能保证仍负责原队。你要留下的不是“热爱运动”四个字，而是一种别人能预期的出场方式。',[
O('steady','只报自己能完整参加的小赛季','每周留5小时，花1个月储备；拒绝不确定的外地赛事。','结局｜成为可预计的队友。你没有把所有比赛都打满，固定的一群人却知道什么时候能见到你。换来的代价是少了一些随时移动。',{cashMonths:-1,freeHours:-5},{next:'end',flagsAdd:['fr_ending_teammate'],relation:{npcId:'yuan',trust:3,closeness:2,memory:'稳定出场比保证每次精彩更可靠'},stats:{connection:4,freedom:-2}}),
O('community','转为组织一场低门槛活动','每周留4小时，花2个月储备场地；不把活动参加者当自己的比赛队。','结局｜从队员到一段社区。你花更多时间等第一次来的人，少了一些高强度比赛。活动可能人不多，却开始有不靠输赢相认的面孔。',{cashMonths:-2,freeHours:-4},{next:'end',flagsAdd:['fr_ending_host'],relation:{npcId:'yuan',trust:2,memory:'你接起一段他不必永远负责的活动'},stats:{connection:3,joy:1}}),
O('roam','不报固定队，做路过的参与者','每周留2小时，花1个月储备零散参加；清楚告别原名单。','结局｜球还在，队伍远了。你保住旅行和随兴，关键比赛的合照里不再一定有你。阿远可以是朋友，不必一直做你的入场入口。',{cashMonths:-1,freeHours:-2},{next:'end',flagsAdd:['fr_ending_roamer'],relation:{npcId:'yuan',trust:1,closeness:-2,memory:'朋友关系不再绑定固定队位置'},stats:{freedom:3,connection:-2}})
])
],{npcId:'yuan',preferredYears:[2038,2044,2050,2056],readingFocus:'群体不是无限承接的背景；出现、缺席、转队和修复会改变席位，不保证运动成绩。'}));
arcs.push(A('public-seat','你可以定方向，也要受规则约束','craft',['public-role','shared-work','self-recognition'],42,58,[
S('org-offer','一份有权力的职位也有看不见的值班','一个成熟组织邀请你负责产品方向。团队已经有自己的客户、旧系统和曾被改过几次的路线。你能影响一批人，也要为他们按你的判断投入的时间负责。',[
O('lead','接负责人，先承诺一个年度范围','每周留12小时，获得4个月储备；暂停独立项目，只选一个能验收的目标。','团队知道今年要保什么，你也进入公开解释结果的位置。个人创作被挪后，别人不再只听你提出好点子。',{cashMonths:4,freeHours:-12},{flagsAdd:['org_lead'],flagsRemove:['org_advisor'],stats:{craft:4,freedom:-4},opportunity:{id:'org-solo-year',label:'本年度完整独立创作',status:'closed'}}),
O('advisor','只做有期限的产品顾问','每周留6小时，获得2个月储备；只给判断，不接受人员与全天候结果责任。','组织接受有限影响，也不给你最终决定权。你保住独立时间，看到一项不喜欢的决定时不能再假定自己能推翻它。',{cashMonths:2,freeHours:-6},{flagsAdd:['org_advisor'],flagsRemove:['org_lead'],stats:{freedom:2,craft:1}}),
O('decline','谢绝职位，只协助一次交接访谈','每周用3小时访谈，获得1个月储备咨询费用；不进入长期组织。','结局｜没有坐进那把椅子。你保住自己的方向，失去一批人愿意给你放大影响的窗口。那支团队会在别人的带领下继续。',{cashMonths:1,freeHours:-3},{next:'end',flagsAdd:['org_declined'],stats:{freedom:3},opportunity:{id:'org-lead-seat',label:'本轮产品负责人职位',status:'closed'}})
]),
S('org-first-choice','旧系统里住着别人的工作','你提出的新方案更清楚，负责旧系统的同事指出两个你没见过的用法。完全重做会让客户迁移，也会让这位同事过去的判断被公开否定。你要在真实期限前决定。',[
O('two-tracks','保旧接口，先做小范围迁移','每周投入9小时，花1个月储备测试；新方案减少一半首发功能。','同事愿意一起验证，客户少受一次强制切换。你不能拿一张干净的新图解释全部成果，公开发布也比原想慢。',{cashMonths:-1,freeHours:-9},{flagsAdd:['org_gradual'],stats:{craft:3,connection:2},relation:{npcId:'cen',trust:1,memory:'你愿意听旧用法而非只通知重做'}}),
O('rewrite','按新方向替换，承担迁移成本','每周投入13小时，花3个月储备补迁移支持；按原日期发布。','系统更统一，维护旧用法的人需要重排职责。部分客户欢迎，部分客户会离开；你选了速度，就要接住不按新图运行的结果。',{cashMonths:-3,freeHours:-13},{flagsAdd:['org_big_rewrite'],stats:{craft:4,connection:-3,energy:-3},delay:[{after:1,text:'新系统减少了一类维护，旧客户中的一个重要工作流却无法迁入。你需要承认这项损失，而不是把离开全说成用户保守。',stats:{connection:-2},risk:{chance:.35,text:'迁移流失超出本轮预留，组织冻结了一项扩招预算。',resources:{cashMonths:-2},stats:{craft:-2},elseText:'迁移损失停在预留范围内，组织保留后续预算；仍有一批用户没跟过来。'}}]}),
O('shelve','撤回这轮重做，继续补旧系统','每周留7小时，获得2个月储备完成保守交付；新方向不在本年推进。','同事与客户松一口气，你更像维护者而非改变者。组织保住本期收入，也开始质疑请你来是否需要这份角色。',{cashMonths:2,freeHours:-7},{flagsAdd:['org_maintain'],stats:{reserve:2,craft:-2},opportunity:{id:'org-transform-budget',label:'本年系统重做预算',status:'closed'}})
]),
S('org-delegate','别人做出的结果，不完全像你','你授权一位同事负责一个模块，对方做出不同取舍。它能用，但不符合你的审美。距离汇报只有两周，接回来最快，也会教会团队以后先等你最后改一遍。',[
O('accept','保留对方方案，只验收约定指标','每周用5小时完整复盘，获得1个月储备交付；允许公开署名属于对方。','汇报没有你熟悉的整齐，团队第一次知道授权不只是帮你执行。你失去一些控制，换来下次不必从头兜底的可能。',{cashMonths:1,freeHours:-5},{flagsAdd:['org_shared_authority'],stats:{connection:4,freedom:2},delay:[{after:2,text:'当年被保留的那位负责人如今能自己解释一个模块，也会拒绝你临时插入的改动。你少了值班，也少了随手改一切的权力。',resources:{freeHours:3},stats:{connection:2}}]}),
O('takeback','亲自接回，汇报前改成你的版本','每周用14小时，获得2个月储备交付；取消一次私人安排。','汇报更像你，负责人不再愿意独立作下一轮判断。你得到可见的质量，团队又多了一个必须等你点头的环节。',{cashMonths:2,freeHours:-14},{flagsAdd:['org_bottleneck'],stats:{craft:3,energy:-5,connection:-3},delay:[{after:1,text:'团队的三份小决定都排在你的回复后面。你曾接回一次方案，现在要持续为“最后还是你改”买单。',resources:{freeHours:-4},stats:{energy:-2}}]}),
O('cut','砍掉该模块，先交其余部分','每周用4小时重谈范围，少得1个月储备；承担该同事已投入时间暂时没被使用。','主要交付准时，模块负责人失望。你保住期限，也失去这一轮展示完整系统的机会；下次邀请对方承担风险会更难。',{cashMonths:-1,freeHours:-4},{flagsAdd:['org_cut_module'],stats:{freedom:1,connection:-2},opportunity:{id:'org-module',label:'本年度模块上线',status:'closed'}})
],{variants:[V('org_advisor','你只是顾问，模块负责人未必接受你的判断。你能提出建议、协助验证或建议砍掉，却没有天然接管权；想亲自改需要多一次明确授权。')]}),
S('org-ownership','成绩与失误都要有人署名','年度结果公布：一项重要指标达标，一类用户却比以前更难完成工作。上级希望你先讲成绩，团队想知道失误会不会都落在执行者身上。你说的话会改变以后谁敢报坏消息。',[
O('own','公开写出取舍，承担自己定过的边界','每周用5小时核对事实与复盘，少得1个月储备奖励；不公开私人信息。','你保住团队报问题的通道，公开评价却没那么漂亮。有人认可诚实，也有人只记住了没做好的部分；责任不能只换称赞。',{cashMonths:-1,freeHours:-5},{flagsAdd:['org_owned'],stats:{connection:3,joy:-2},relation:{npcId:'cen',trust:2,memory:'你没有把路线代价留给执行者解释'}}),
O('shine','先讲成果，把困难留内部处理','每周用5小时准备展示，获得3个月储备奖励；暂不主动公开失去的用户场景。','机会和认可更多，内部同事开始谨慎地给你坏消息。你得到一轮向上空间，也承担未来被追问完整事实的风险。',{cashMonths:3,freeHours:-5},{flagsAdd:['org_polished'],stats:{craft:3,connection:-2},delay:[{after:2,text:'旧用户在公开问答提到那项失去的场景。你仍要回应它，只是解释发生在更不由你控制的场合。',stats:{connection:-3,joy:-2},risk:{chance:.3,text:'展示中过度简化的一句话被单独传播，组织要求重新说明。',resources:{freeHours:-4},elseText:'问题没有广泛传播，但团队保留了完整复盘，不会把它当作没有发生。'}}]}),
O('blame','把失误归给执行偏差，守住自己的评价','每周用3小时准备汇报，获得2个月储备；避免讨论自己当初设定的期限。','你暂时保住表面评价，承担模块的人不再主动找你试新方向。以后更少坏消息也更少真判断，位置还在，合作开始变薄。',{cashMonths:2,freeHours:-3},{flagsAdd:['org_blame'],stats:{connection:-5},relation:{npcId:'cen',trust:-5,memory:'你用执行偏差掩盖自己定过的边界'},opportunity:{id:'org-volunteer-leads',label:'同事主动承担新方向',status:'closed'}})
]),
S('org-end','权力最后要变成什么','组织愿意继续给位置，也有人已经能接走一部分。你可以扩大责任、留一个有限角色，或者离开。每一种结束都把某些影响留给别人，不会同时保留全部控制。',[
O('institution','留下，建立能反对你的决策程序','每周留10小时，获得3个月储备；把部分审批权和公开署名交给团队。','结局｜位置成为制度的一部分。你影响更多人，也必须听见自己不喜欢的决定。独立作品更慢，组织不再只等你一个人来证明正确。',{cashMonths:3,freeHours:-10},{next:'end',flagsAdd:['org_ending_institution'],stats:{craft:3,freedom:-3,connection:2}}),
O('limited','退为半年顾问，让接任者真决定','每周留4小时，获得1个月储备；只回答约定问题，不在私下另发指令。','结局｜少一点权力的延续。接任者改了一部分方向，你不再能随时纠正。时间回来了，原来的成绩也开始被别人接着写。',{cashMonths:1,freeHours:-4},{next:'end',flagsAdd:['org_ending_advisor'],stats:{freedom:3,craft:-1},delay:[{after:2,text:'接任者停掉你最喜欢的一项旧功能，替换成更适合当前用户的做法。你若想继续影响，需要提出证据，不能只引用当年身份。',stats:{joy:-1,connection:1}}]}),
O('leave','完成交接后离职，接受名字淡下去','每周用7小时交接，付1个月储备留空档；不保留影子审批。','结局｜一段任职真正结束。团队有些人继续联系，有些人只偶尔想起你。你得到下一段生活，也失去站在组织里自然获得的放大器。',{cashMonths:-1,freeHours:-7},{next:'end',flagsAdd:['org_ending_leave'],stats:{freedom:4,connection:-2},opportunity:{id:'org-lead-seat',label:'原组织现任负责人权力',status:'closed'}})
])
],{preferredYears:[2042,2043,2044,2048,2051],readingFocus:'2042官禄换限：公共角色落实为预算、授权、公开归因和接任；成功会减少自由并增加被反对的义务。'}));
arcs.push(A('six-questions','写给自己以后，被别人读到','joy',['inner-standards','knowledge','self-recognition'],46,100,[
S('wr-start','本子里有别人不该替你解释的一天','这一轮六问记录里，有几个反复出现的问题，你想整理给别人看。文字里也有只属于自己的生活，以及别人未同意公开的细节。写完和发布，不是同一个动作。',[
O('private','先只整理给未来的自己','每周留3小时，花1个月储备做可检索归档；不公开具体生活。','本子变得能回看，没人因此认识你的方法。你保留不被评论的空间，也关掉本轮通过文字结识读者的窗口。',{cashMonths:-1,freeHours:-3},{flagsAdd:['wr_private'],flagsRemove:['wr_public','wr_circle'],stats:{joy:3},opportunity:{id:'wr-public',label:'本轮公开发布',status:'closed'}}),
O('public','删去他人细节，发一组可验证的记录','每周留6小时，花1个月储备编辑；只写自己愿意承担解释的部分。','读者开始回应，有人真试了一次，也有人只截一句。你保住交流入口，失去完全决定文字被怎样读的权力。',{cashMonths:-1,freeHours:-6},{flagsAdd:['wr_public'],flagsRemove:['wr_private','wr_circle'],stats:{connection:3},opportunity:{id:'wr-public',label:'公开写作与读者交流',status:'open',expiresAfter:4}}),
O('circle','给三位熟人读，约一次真实反馈','每周留4小时，花1个月储备见面；明说不得转发，并允许对方不读。','两人认真读，一人说最近没时间。你得到较慢但具体的回应，不会因此自然拥有公开影响力。',{cashMonths:-1,freeHours:-4},{flagsAdd:['wr_circle'],flagsRemove:['wr_private','wr_public'],relation:{npcId:'yuan',closeness:2,memory:'一次不强求阅读和认同的分享'},opportunity:{id:'wr-circle',label:'熟人小范围共读',status:'open',expiresAfter:4}})
],{variants:[V('wr_ending_public','你曾公开写过，也承担过被截取的结果。新一轮记录出现了不同的生活问题，旧读者仍记得上次的说法；这次发布会和过去放在一起读。'),V('wr_ending_private','上轮你把记录留给自己。如今再翻，发现有些问题已经不在，有些仍在；你可以重新决定是否让别人进入，而不是把私密当永久身份。')]}),
S('wr-response','一句话到了不属于它的场景','有人读到你的记录，问能不能照做。你也发现同一句话在不同日程里含义完全不同。下一步可以解释适用范围、一起试一次，也可以把记录收回自己用。',[
O('clarify','写清适用边界，公开保留一次修改','每周花5小时核对原意，付1个月储备编辑；不删掉过去不成熟的版本。','读者能看到你改变过判断，传播速度却慢下来。你留下可检验的交流，也接受部分人认为你不够果断。',{cashMonths:-1,freeHours:-5},{requires:{opportunitiesAll:['wr-public']},flagsAdd:['wr_context'],stats:{craft:2,connection:1},delay:[{after:1,text:'一位读者拿着你的旧版问新问题。公开修改没有消除误读，却给你一处能指向具体差异的地方。',stats:{connection:1}}]}),
O('workshop','只邀原读者做一次小范围共试','每周留6小时，花2个月储备场地与准备；不接新的公开演讲邀请。','几个人在各自生活里试一周，结果不一样。你听见方法不能解决的部分，失去的是这一轮扩大传播的速度。',{cashMonths:-2,freeHours:-6},{flagsAdd:['wr_tested'],stats:{craft:3},opportunity:{id:'wr-speaking',label:'本轮公开演讲档期',status:'closed'}}),
O('withdraw','停止本轮分享，留一页版本说明','每周用2小时说明与归档，不新增现金；不再回应所有追问。','你拿回一段时间，已经被别人记住的话不会自动消失。本轮交流收缩，原来的问题仍可留给自己继续写。',{freeHours:-2},{flagsAdd:['wr_withdrawn'],flagsRemove:['wr_public'],opportunity:{id:'wr-public',label:'本轮公开写作',status:'closed'},stats:{freedom:2,connection:-1}})
],{variants:[V('wr_private','你没有公开记录，只是未来的自己再次读到了同一句话。它曾适合那一年的日程，现在未必。你可以邀请原本没参与的人一起试，也可以继续只给自己留说明。'),V('wr_circle','熟人反馈到了：一位照做后觉得更累，一位喜欢，一位仍没空读。你没有大众读者可回应，只有几段具体的关系；不该把这次反馈包装成方法被普遍验证。')]}),
S('wr-misread','被需要的说法，可能并不是你的原意','有人愿意付费请你讲一套简单结论，希望标题说“只要坚持就会改变”。对方需要清楚卖点，你的记录却有反例。如果不接受，还可以做一次小范围复盘。',[
O('nuance','只接受能保留反例的公开邀请','每周花7小时准备，获得2个月储备；拒绝删去失败与条件。','主办方缩小了场次，你得到的报酬和听众都少了一些。你保留公开说复杂话的路，也失去这次最响亮的标题。',{cashMonths:2,freeHours:-7},{requires:{opportunitiesAll:['wr-public'],flagsNone:['wr_withdrawn']},flagsAdd:['wr_nuance'],stats:{craft:2},opportunity:{id:'wr-big-title',label:'高传播的单一成功标题',status:'closed'}}),
O('slogan','接受简化标题，争取接触更多人','每周花8小时，获得4个月储备；把反例放到很少有人点开的附录。','听众和回款明显增加，有人把你的个人记录当成统一标准。你得到影响，也得面对下一次别人拿结果来向你追责。',{cashMonths:4,freeHours:-8},{requires:{opportunitiesAll:['wr-public']},flagsAdd:['wr_slogan'],stats:{reserve:3,connection:-2},delay:[{after:2,text:'一位读者公开说照着标题做并没有得到改变。附录确实存在，但你当时选择了最容易被转述的简化句。',stats:{joy:-3,connection:-2},risk:{chance:.35,text:'片段被进一步剪短，你要花几次晚上重新解释。',resources:{freeHours:-4},elseText:'这次没有扩大传播，原来的读者仍在等一个具体回应。'}}]}),
O('decline','不接付费讲述，和几位熟人复盘','每周用4小时，花1个月储备见面；关掉这轮商业讲述。','你失去一笔可观回款，换来能把反例说完的场合。没有因此证明不商业更高尚，只是这轮内容没变成那种产品。',{cashMonths:-1,freeHours:-4},{flagsAdd:['wr_no_sale'],relation:{npcId:'yuan',trust:1,memory:'你愿意听到方法没有帮上忙'},opportunity:{id:'wr-speaking',label:'本轮付费方法讲述',status:'closed'}})
]),
S('wr-end','下一轮要对谁负责','这轮文字留下一些读者，也留下一些没有解释完的地方。你可以持续发布、只写给自己，或把方法交给别人共同改。任何一条路都不会让生活停止变化。',[
O('public','固定低频发布，给读者留反馈入口','每周留4小时，获得1个月储备订阅或稿酬；承诺两年低频更新，不再追每个热点。','结局｜有人等待的文字。收入很小，反馈也会占用晚上。你得到延续的讨论，失去随时消失而不说明的自由；两年到期再决定续不续。',{cashMonths:1,freeHours:-4},{requires:{flagsNone:['wr_private','wr_withdrawn']},next:'end',flagsAdd:['wr_ending_public'],recurring:{id:'writing-letter',label:'低频记录与读者反馈',hours:4,cashMonths:.4,years:2,exitCost:.5},stats:{connection:2,freedom:-1}}),
O('private','把记录收回自己，完整导出保存','每周用2小时归档，花1个月储备保存；通知已等更新的人本轮结束。','结局｜本子不需要观众。你拿回安静，也承认公开交流暂时断了。过去写过的东西没有消失，下一轮仍可能被自己推翻。',{cashMonths:-1,freeHours:-2},{next:'end',flagsAdd:['wr_ending_private'],flagsRemove:['wr_ending_public'],stats:{joy:3,connection:-1}}),
O('coedit','把一份有限方法交给共读者改','每周留5小时，花2个月储备整理与授权；接受别人保留与你不同的答案。','结局｜不再只有一个作者。方法变得不整齐，你也不能要求每次修改都先征求自己。它可能比你的记录走得远，也可能只停在几个人手里。',{cashMonths:-2,freeHours:-5},{next:'end',flagsAdd:['wr_ending_coedit'],stats:{connection:3,craft:1,freedom:1},delay:[{after:3,text:'共读者给你寄来一个改过的版本，删掉了你曾最在意的一问。它更适合他们，不再完全像你。',stats:{joy:1,connection:1}}]})
])
],{repeatable:true,npcId:'yuan',preferredYears:[2041,2051,2053,2065,2077,2089],readingFocus:'表达、内在标准与学习：把误读、传播和个人记录区分，不把六问写成万能方法。'}));
arcs.push(A('new-table','五十二岁以后的新一桌人','connection',['shared-work','peer-negotiation','home-base'],52,100,[
S('cm-first','这次你不是最熟悉场面的人','有人邀你参加一个定期做饭、修东西和交换技能的小组。里面有人有照护责任，有人只想轻松待着，也有人想把活动办成收费服务。没人认识你过去所有的项目。',[
O('learner','先做三次普通参与者','每周留3小时，花1个月储备材料；不急着提出整套改进。','你第一次只是按约带来一份食物。活动不总有效率，也不围着你展开；你保留认识新人的入口，暂不争取组织权。',{cashMonths:-1,freeHours:-3},{flagsAdd:['cm_learner'],flagsRemove:['cm_host','cm_sponsor'],stats:{connection:3,joy:2}}),
O('host','自荐组织一个有期限的小项目','每周留7小时，花2个月储备场地材料；先只负责四次。','大家让出一段组织空间，也开始把提醒和缺席通知发给你。你得到位置，失去“只是路过”的轻松；项目是否继续要重新问人。',{cashMonths:-2,freeHours:-7},{flagsAdd:['cm_host'],flagsRemove:['cm_learner','cm_sponsor'],stats:{connection:4,freedom:-2},commitment:{label:'新小组的四次活动收尾',after:1,requires:{resource:'freeHours',min:5},success:{text:'你完成了四次，参与者拿到后续安排，可以决定是否继续。',resources:{freeHours:-5},stats:{connection:3}},failure:{text:'后两次筹备没有完成，一位成员接走通知，下一轮不再默认由你带头。',stats:{connection:-4}}}}),
O('sponsor','只提供一笔材料费，不介入规则','每周留1小时，花3个月储备支持；不以资助换决定权。','小组买到了原本买不起的工具，你仍是偶尔来的人。钱没有替你建立熟悉，也没有使别人欠你一个主位。',{cashMonths:-3,freeHours:-1},{flagsAdd:['cm_sponsor'],flagsRemove:['cm_learner','cm_host'],stats:{connection:1,reserve:-2}})
],{variants:[V('cm_ending_shared','上一轮的活动已经留下规矩，也有人记得你当初说过会轮值。新一桌人加入，不会自动接受旧安排；这次得把谁能拒绝重新谈一次。'),V('cm_ending_exit','你曾有过一轮清楚退出。新小组听说你做过组织，仍要看看这次实际能来多少；过去的经验不会替现在的出勤作保证。')]}),
S('cm-rules','收费以后，谁还进得来','场地要涨价，有成员建议收费提高材料质量，另一位担心每月开销，有人只愿参加不愿轮值。继续热闹要靠一种规则，不能每次都由同一个人补差。',[
O('sliding','设两档费用，公开每次预算','每周用5小时记账沟通，花1个月储备填第一轮差额；每季复核能否继续。','一些人留下，你承担了更多不显眼的组织工作。两档收费没有消除不平衡，却给了大家说付不起或不想付的地方。',{cashMonths:-1,freeHours:-5},{flagsAdd:['cm_accessible'],stats:{connection:3},opportunity:{id:'cm-open-table',label:'低门槛开放活动',status:'open',expiresAfter:5}}),
O('paid','按成本收费，做小一点但稳定的班','每周用6小时运营，获得2个月储备；免费活动停止，提前通知旧成员。','物料和场地稳定了，两位原成员不再来。你得到可续的小服务，也要接受这不再是原来那张谁都能坐下的桌子。',{cashMonths:2,freeHours:-6},{flagsAdd:['cm_paid'],stats:{reserve:2,connection:-2},opportunity:{id:'cm-open-table',label:'低门槛开放活动',status:'closed'}}),
O('shrink','换免费场地，不提供完整工具和餐食','每周用4小时协调，现金不变；取消最受欢迎的设备项目。','大家还能见面，想认真制作的人去了别处。你保住便宜与简单，失去那条越做越完整的服务路线。',{freeHours:-4},{flagsAdd:['cm_small'],stats:{freedom:2,craft:-1},opportunity:{id:'cm-workshop',label:'设备齐全的长期工坊',status:'closed'}})
]),
S('cm-conflict','那位总是迟到的人，这次真的有事','一位成员屡次最后才取消，因为要照顾家里的人；另一位已独自布场三次，开始不满。你不能替他们判断谁的生活更正当，必须改变活动的具体承担方式。',[
O('rotate','把值班拆短，允许有偿换班','每周用5小时改流程，付1个月储备试运行；缺席者不再默认有人免费顶。','有照护责任的人还能参与，常补位的人也能明确拒绝。活动需要更多协调，你少了一点效率，换来责任不再藏在好人身上。',{cashMonths:-1,freeHours:-5},{flagsAdd:['cm_rotation'],stats:{connection:3},relation:{npcId:'cen',trust:1,memory:'你没有要求一人永远免费补位'}}),
O('strict','执行原规则，三次缺席就退固定名额','每周用3小时通知，获得1个月储备减少损耗；允许之后按零散名额来。','布场的人得到公平感，有照护责任的成员失去固定位置。你保住秩序，也失去一部分需要不稳定参与方式的人。',{cashMonths:1,freeHours:-3},{flagsAdd:['cm_strict'],stats:{reserve:1,connection:-2},opportunity:{id:'cm-flex-seat',label:'不稳定出勤者的固定位置',status:'closed'}}),
O('cover','先由你补齐，等以后再谈','每周用11小时，花2个月储备替缺席者准备；不改规则。','两边暂时都不生气，联系与缺口逐渐集中到你身上。活动继续得很顺，却越来越需要你不能有自己的别的安排。',{cashMonths:-2,freeHours:-11},{flagsAdd:['cm_you_cover'],stats:{connection:2,energy:-5,freedom:-3},delay:[{after:1,text:'你缺席一次，活动发现没人有完整名单和钥匙。此前替大家补齐的熟练，变成了大家等你回来的理由。',resources:{freeHours:-3},stats:{energy:-2}}]})
]),
S('cm-transfer','你想去一段时间，桌子还开不开','你有一段别的安排，需要离开。小组有人愿意接钥匙，但想改成不同的时间和主题。接手不是替你原样看守，也不能只把最麻烦的部分交出去。',[
O('give','交出排期和部分预算，让接手者真改','每周用5小时交接，花1个月储备把账结清；不保留最后审批。','新负责人把两次活动换了主题，一位老成员不喜欢。你能离开，活动也能继续，但它不再完全表达你的趣味。',{cashMonths:-1,freeHours:-5},{flagsAdd:['cm_transferred'],stats:{freedom:3,connection:2},opportunity:{id:'cm-your-control',label:'你对小组的唯一排期权',status:'closed'}}),
O('hire','请一位有偿协调者，保留活动形式','每周用3小时对接，付3个月储备；先试一年，不假设免费劳动力。','你保住更多原样，钱需要持续从某处来。成员仍把你视作最终负责人；离开不再要求一直在线，却也没有完全卸任。',{cashMonths:-3,freeHours:-3},{flagsAdd:['cm_hired'],stats:{reserve:-3,freedom:1},recurring:{id:'community-coordinator',label:'活动协调与支持',hours:3,cashMonths:-.5,years:2,exitCost:1,npcId:'cen'}}),
O('stop','宣布这轮停止，把余款和物品分清','每周用5小时收尾，获得1个月储备退回自己垫款；不要求成员继续在群里活跃。','结局｜桌子合上。有人自己约了下次饭，有人就此淡出。你没有守住完整小组，却没让别人继续等一个不会发生的活动。',{cashMonths:1,freeHours:-5},{next:'end',flagsAdd:['cm_ending_exit'],stats:{freedom:3,connection:-2}})
]),
S('cm-end','这是你的事业，还是大家的一段地方','这轮活动有了自己的人和习惯。继续需要预算与排期，退出需要让人知道以后找谁。你可以留下一个有限角色，也可以真的把它交出去。',[
O('shared','轮值继续，两年后重谈','每周留4小时，花1个月储备建立共同账；你只承担明确一班。','结局｜一张不是只靠你的桌。活动有时不够整齐，也有你不在的合照。你保留长期参与的路，失去把每场都安排成自己喜欢的权力。',{cashMonths:-1,freeHours:-4},{next:'end',flagsAdd:['cm_ending_shared'],recurring:{id:'community-rota',label:'小组轮值与公开账目',hours:4,cashMonths:-.3,years:2,exitCost:.5},stats:{connection:4,freedom:1}}),
O('business','只保留收费小班，按服务经营','每周留8小时，获得3个月储备；给旧成员留一次清楚告别。','结局｜从社群到小服务。收入能负担材料与部分时间，一些旧朋友不再来。你得到生意，也必须为退费、排期和不满意的人负责。',{cashMonths:3,freeHours:-8},{requires:{flagsAll:['cm_paid']},next:'end',flagsAdd:['cm_ending_business'],recurring:{id:'community-workshop',label:'有偿小班交付',hours:8,cashMonths:1,years:3,exitCost:2},stats:{reserve:3,freedom:-3}}),
O('guest','完全交出去，只按邀请参加','每周用2小时最终交接，不新增现金；不再持钥匙或收款。','结局｜成为客人。你以后可能排不上自己曾主持的场次，也能坐下吃别人做的饭。小组有没有继续，不再靠你证明自己值得被需要。',{freeHours:-2},{next:'end',flagsAdd:['cm_ending_guest'],stats:{freedom:4,connection:1},delay:[{after:2,text:'新小组邀请你带一道菜，没请你主持。你可以只去吃饭，也可以拒绝；那张桌子确实已不需要你一直站着。',stats:{joy:2}}]})
])
],{repeatable:true,preferredYears:[2052,2054,2056,2060,2072,2084,2096],readingFocus:'2052仆役换限：新人际关系有自己的规则、照护负担和经济分歧，熟人不等于无限支持。'}));
arcs.push(A('second-departure','六十二岁以后，再做一次外来者','freedom',['outer-change','knowledge','home-base'],62,82,[
S('tr-leave','这次出发，不需要证明仍然年轻','你想在另一种环境里住一段时间。现有住处、固定活动和需要回应的人都还在。可停留期限、工作与日常安排仍须核实，留出返程预算，再决定愿意承担多少陌生。',[
O('detailed','去岘港试一个有返回日的阶段','每周用5小时安排，花3个月储备；先给原活动交接，带上明确返回日。','你得到重复过普通日子的时间，旧基地仍有成本。朋友能约一顿饭，不承诺陪完整段；你要自己建立新的星期三。',{cashMonths:-3,freeHours:-5},{flagsAdd:['tr_dn'],flagsRemove:['tr_sg'],travel:{city:'岘港',years:1},stats:{freedom:3}}),
O('new','去新加坡做有限期的学习短住','每周用7小时核实和准备，花4个月储备；仅在条件可行时成行，保留返程预算。','你把更多预算换成不同的课程、街区与人。没有熟人替你排好日常，下一期是否继续仍需重做安排。',{cashMonths:-4,freeHours:-7},{flagsAdd:['tr_sg'],flagsRemove:['tr_dn'],travel:{city:'新加坡',years:1},stats:{freedom:4,reserve:-2}}),
O('local','暂不离城，做一次陌生街区学徒','每周留4小时，花1个月储备学习与交通；把长途预算留下。','结局｜第二次出发从家门内开始。你没有多一个地名，却真的成了不会做某件事的人。远方的路线保留为未完成，不冒充已经到达。',{cashMonths:-1,freeHours:-4},{next:'end',flagsAdd:['tr_local'],stats:{craft:2,joy:2}})
]),
S('tr-outside','回来看，最难的不是到达','上一段短住已经结束，你在{location}摊开记录：陌生人没有整天聊人生，普通办事也没因你有经验变简单。若再出发，需要为下一轮具体安排买单。',[
O('return','回到那座城，再做一轮有限短住','每周用5小时准备，花3个月储备；这次只参加一个固定活动。','你再次来到{arcCity}，不再追求认识所有人。一段可重复活动出现，也让下一站旅行失去位置。',{cashMonths:-3,freeHours:-5},{flagsAdd:['tr_return'],travel:{city:'{arcCity}',years:1},opportunity:{id:'tr-multi-stop',label:'本轮多站远行',status:'closed'}}),
O('one-off','只做一次短拜访，不再重建日常','每周用3小时安排，花2个月储备；接受这更像探访而非移居。','你见到想见的人，没有拿到深入参与的感觉。下次还可以再来，但不能把一次受欢迎的晚饭当成已有新基地。',{cashMonths:-2,freeHours:-3},{flagsAdd:['tr_visit'],travel:{city:'{arcCity}',years:1},stats:{joy:2,connection:1}}),
O('home','结束海外试验，回原基地认真安顿','每周用4小时归档退租，花1个月储备；不续下一轮住宿。','结局｜返回不是倒退。你带回一种比较，也确认这阶段愿意把关系放在熟悉地方。海外日常没有继续，那群人会在你不在时继续熟悉彼此。',{cashMonths:-1,freeHours:-4},{next:'end',flagsAdd:['tr_returned_home'],stats:{connection:2,freedom:-1}})
]),
S('tr-friend','老朋友只有一个晚上','一位老朋友在你们约好的短聚里，带来自己的难题和接下来几个月的计划。对方欢迎你再访，但不想把整段假期都用来接待。你也可以自己去看没去过的地方。',[
O('one-night','只约那顿饭，其余行程自己安排','每周用3小时联系，花1个月储备自己住宿；不要求借住。','你们认真做了一顿饭，吃完各自收回自己的时间。关系没有因少待几天变薄，你失去的是把旧亲密完整重演的幻想。',{cashMonths:-1,freeHours:-3},{flagsAdd:['tr_respected_friend'],relation:{npcId:'yuan',trust:2,closeness:2,memory:'一顿饭不必扩成整段接待'}}),
O('push','继续问能否多留几晚，先不订住处','每周用4小时反复协调，花2个月储备临时住宿；把更多期待压给对方。','朋友最后只留原来那个晚上，你临时订得更贵。晚饭依然发生，话里多了一点谨慎；熟悉不能替代清楚邀请。',{cashMonths:-2,freeHours:-4},{flagsAdd:['tr_pushed'],relation:{npcId:'yuan',trust:-12,closeness:-3,memory:'你把一次晚饭当成了更多接待的起点'},stats:{joy:-2}}),
O('solo','这次不凑时间，自己走下一段','每周用2小时改行程，花2个月储备；承认遗憾，不把没见成解释为关系不在。','你见到新地方，没有吃到那顿想念的饭。朋友继续原计划，你也拥有一段无人接待的旅途；错过不会被自动补回。',{cashMonths:-2,freeHours:-2},{flagsAdd:['tr_missed_meal'],relation:{npcId:'yuan',closeness:-1,memory:'这次路线没有相交'},stats:{freedom:2,connection:-1}})
]),
S('tr-next','学会的一点东西，要在哪儿继续','这一轮你学到一点新手艺，也认识几个不会一直追着联系的人。固定学习需要再留一段时间，回原基地则能把它变成自己的普通兴趣。跨城不是唯一能继续的方式。',[
O('apprentice','再投一轮有限学习，不求变专家','每周留6小时，花3个月储备学费与短住；给旧活动再做一次交接。','你在{arcCity}继续练习，旧基地的聚会少参加几次。老师只按当前进度教，不因你的过往经历跳过基础。',{cashMonths:-3,freeHours:-6},{flagsAdd:['tr_apprentice'],travel:{city:'{arcCity}',years:1},stats:{craft:3,connection:-1}}),
O('bring-home','带一套小工具回基地，自己练','每周留4小时，花2个月储备材料；不再续原课程。','你保住熟悉日常，技术进步慢下来。没人每周催你，兴趣能否留下开始取决于自己是否愿意反复做无聊的那一步。',{cashMonths:-2,freeHours:-4},{flagsAdd:['tr_practice_home'],stats:{joy:2,craft:1}}),
O('share-trip','把旅行整理成公开分享，暂缓练习','每周用7小时，获得2个月储备讲述收入；获得老师和朋友同意才用他人材料。','更多人知道这段旅程，你自己练习的时间变少。你得到回款和交流，却可能更像讲过某种生活的人，而不是正在过的人。',{cashMonths:2,freeHours:-7},{flagsAdd:['tr_story'],stats:{connection:3,craft:-1},delay:[{after:2,text:'有人请你再讲那段异地学习。你发现最顺口的仍是当初的故事，而手上的技能只前进了一小步。',stats:{joy:-1}}]})
]),
S('tr-end','留下一条可返回的路，或让它结束','第二次出发没有替你解决所有问题，也留下了几处确实陌生又熟悉的地方。下一段可以定期返回、只带兴趣回来，或承认某些关系到这一次为止。',[
O('returning','约一年后再访，先预留预算','每周用2小时维护联系，花2个月储备作可退安排；不要求别人保持原样。','结局｜一条可重谈的返程。你有了再来的方向，也承担预留钱和放弃别处的成本。下次成行仍要看条件与对方安排，地点不欠你同样的一天。',{cashMonths:-2,freeHours:-2},{next:'end',flagsAdd:['tr_ending_return'],recurring:{id:'returning-route',label:'有限期返访与异地联系',hours:2,cashMonths:-.5,years:2,exitCost:.5},stats:{freedom:2,connection:1}}),
O('interest','回家只留兴趣，不续旅行身份','每周留3小时，花1个月储备练习；向课程和临时活动清楚告别。','结局｜远方变成手边的一点习惯。你的生活没有换成另一座城，却多了一个可以慢慢不会的东西。下一次想走，不必先证明这次仍在继续。',{cashMonths:-1,freeHours:-3},{next:'end',flagsAdd:['tr_ending_interest'],stats:{joy:3,craft:1}}),
O('close','把未用预算退回，结束这条路线','每周用2小时退订与道别，获得1个月储备退款；不保留空的下次约定。','结局｜这一站足够了。你放掉一种未来，也让曾经相处的人不用等。记忆不因结束变假，新生活不会替你永远留门。',{cashMonths:1,freeHours:-2},{next:'end',flagsAdd:['tr_ending_closed'],stats:{freedom:2,connection:-1},opportunity:{id:'tr-return-route',label:'已预留的下一轮返访',status:'closed'}})
])
],{npcId:'yuan',preferredYears:[2062,2063,2065,2069,2073],readingFocus:'2062迁移换限：再成为外来者、返回和学习有不同代价，不拿远方或年龄充当自由保证。'}));
arcs.push(A('work-relay','作品以后不必一直像你','craft',['legacy','craft-iteration','knowledge'],72,94,[
S('le-drawer','有人问的是怎么用，不是你当年多难','一位后来者想接着用你曾做过的一套工具或方法。旧版本里有只有你记得的判断，说明也已跟不上。对方希望能改，未承诺原样保存你的想法。',[
O('prepare','挑一个仍有用的部分，写交接样例','每周留5小时，花2个月储备整理；先不整理全部人生作品。','后来者终于能跑通一小段，你放下了把所有东西都留住的期待。交接从可用开始，不从被感谢开始。',{cashMonths:-2,freeHours:-5},{flagsAdd:['le_small'],flagsRemove:['le_control','le_archive'],opportunity:{id:'le-edit',label:'后来者继续修改作品',status:'open',expiresAfter:5},stats:{craft:3}}),
O('control','提供使用，但每次改动先经你同意','每周留7小时，获得1个月储备支持费；保留审批权。','对方能先用起来，也必须等你。你保住完整样子，作品继续依赖你的时间；后来者会比较是否值得自己另做。',{cashMonths:1,freeHours:-7},{flagsAdd:['le_control'],flagsRemove:['le_small','le_archive'],opportunity:{id:'le-edit',label:'后来者自由修改作品',status:'closed'},stats:{craft:2,freedom:-2}}),
O('archive','只做静态归档，不承诺继续可用','每周留3小时，花1个月储备导出；明说不能把它当有维护的服务。','结局｜留下证据而非任务。对方可能选别的工具，你的旧作品保存了一个版本。你失去被接着用的机会，也不用让下一代替你完成未完成。',{cashMonths:-1,freeHours:-3},{next:'end',flagsAdd:['le_archive'],stats:{freedom:3},opportunity:{id:'le-edit',label:'本轮作品维护接力',status:'closed'}})
]),
S('le-first-use','他卡住的地方，你早已不觉得是问题','后来者运行样例，在你当年默认大家都会的一步停下。你可以陪着完整走一次、直接替他做好，也可以承认旧工具不值得继续补。对方有自己的期限。',[
O('watch','让对方操作，你只记录卡点','每周留6小时，花1个月储备测试；少修两项自己想优化的细节。','说明变粗糙却更能跟着做。后来者第一次没有你也完成一遍，你的熟练不再是唯一入口。',{cashMonths:-1,freeHours:-6},{flagsAdd:['le_independent'],stats:{craft:3,connection:2}}),
O('do-for','亲自修到可用，别耽误对方的期限','每周留11小时，获得2个月储备支持费；暂不做交接练习。','作品按时被用上，关键判断仍留在你手里。下次有问题，对方先找你而不是自己动手；回款也延长了你的值班。',{cashMonths:2,freeHours:-11},{flagsAdd:['le_do_for'],stats:{reserve:2,energy:-3},delay:[{after:1,text:'后来者再次遇到类似问题，直接把文件寄给你。上次你替他做完的速度，教会的也是下一次继续找你。',resources:{freeHours:-3}}]}),
O('replace','建议对方换新工具，帮迁移不帮续命','每周用4小时导出，花1个月储备迁移；停止这件旧物的继续开发。','结局｜没有被接力的作品。后来者少走一段弯路，你失去继续讲它的场合。东西被放下，也是一种确实完成的帮助。',{cashMonths:-1,freeHours:-4},{next:'end',flagsAdd:['le_replaced'],stats:{freedom:3,joy:-2},opportunity:{id:'le-edit',label:'旧作品继续使用',status:'closed'}})
]),
S('le-change','最先被删掉的，是你最喜欢的部分','后来者做出新版本，去掉了你当初最在意的功能。他说当前使用者不需要，维护它太费时间。你可以要求保留，也可以让新版本承担自己的判断。',[
O('allow','允许分叉，把旧版单独保存','每周用4小时整理说明，花1个月储备归档；不再把你的名字当最后审批。','新版本变得不像你，却更像对方正在解决的问题。你保住了旧版记忆，也真的放掉一部分作品归属感。',{cashMonths:-1,freeHours:-4},{requires:{opportunitiesAll:['le-edit']},flagsAdd:['le_fork'],stats:{connection:3,freedom:2}}),
O('insist','坚持保留原功能，自己负责额外维护','每周留8小时，获得1个月储备支持；要求继续用原来的完整版本。','对方暂时接受你的支持，没有接下原功能的维护。你守住作品的样子，也让接力再次变成你在场才能继续。',{cashMonths:1,freeHours:-8},{flagsAdd:['le_insist'],stats:{craft:2,freedom:-3},recurring:{id:'legacy-original',label:'保留旧功能的维护',hours:8,cashMonths:.5,years:2,exitCost:1}}),
O('license','把修改权一次交清，结束你的支持','每周用5小时核对授权，获得2个月储备转让费；明确后续不提供兜底。','对方拥有自己的分支，你拿到一次回款，也不能再要求每次改动都获同意。两版从这里走向不同用途。',{cashMonths:2,freeHours:-5},{flagsAdd:['le_transferred'],flagsRemove:['le_control'],opportunity:{id:'le-edit',label:'后来者独立修改权',status:'open',expiresAfter:5},stats:{freedom:3,joy:-1}})
],{variants:[V('le_control','后来者想删功能，但你当初保留了审批权。他明确表示：若无法改，会另找替代。自由分叉的路尚未打开，你得先决定是否真正交出修改权。')]}),
S('le-credit','你想留下名字，还是留下可继续的东西','新版本准备公开，后来者愿意致谢，不愿把它一直叫作你的项目。你可以要求共同作者位置，也可以只保留来源说明，或完全撤下名字。每种署名都意味着不同的后续责任。',[
O('source','只保留来源，具体改动由新作者负责','每周用3小时核对出处，现金不变；不以致谢换日常审批权。','新作者拿到自己的位置，你保留被追溯的来源。别人可能很少再点开旧版，你留下的是一段来处，而非永远站在前面的名字。',{freeHours:-3},{flagsAdd:['le_source_credit'],stats:{connection:3,freedom:2}}),
O('coauthor','保留共同作者，继续参与关键维护','每周留6小时，获得1个月储备维护费；承认后续问题也会来找你。','名字继续在前排，你也继续出现在问题单里。作品获得两代人的判断，少了一些独立生活的余地；不是免费继承荣誉。',{cashMonths:1,freeHours:-6},{flagsAdd:['le_coauthor'],recurring:{id:'relay-coauthor',label:'共同作者的版本维护',hours:6,cashMonths:.5,years:3,exitCost:1},stats:{craft:2,freedom:-2}}),
O('unname','撤下自己的名字，只保留许可记录','每周用2小时确认，现金不变；不要求后来版本继续代表自己。','新版本不再自然给你带来认可，也更自由地走开。你可能被忘记一部分，留下的东西仍可能被用。',{freeHours:-2},{flagsAdd:['le_uncredited'],stats:{freedom:3,joy:-1}})
]),
S('le-end','轮到你不必来的一次发布','后来者准备自己主持下一次发布，没有先问你要不要讲开场。你可以去做普通参与者，保留一个有限支持角色，或把这轮接力结束在这里。',[
O('guest','去现场，只回答被问到的一个问题','每周用2小时，花1个月储备出行；不临时接过讲台。','结局｜东西走下去了。你听到一些和当年不同的用法，也有没被提到的旧努力。失去中心位置后的参与，安静但真实。',{cashMonths:-1,freeHours:-2},{next:'end',flagsAdd:['le_ending_guest'],stats:{joy:3,connection:2}}),
O('office-hours','每月一次答疑，其余时间由新作者决定','每周平均留3小时，获得1个月储备支持费；两年后必须重新约定。','结局｜一段有限的后援。你仍能帮上一点，也不再是随时可问的旧入口。后来者有权不采用建议，你必须容许它继续变。',{cashMonths:1,freeHours:-3},{next:'end',flagsAdd:['le_ending_support'],recurring:{id:'relay-office-hours',label:'作品接力的有限答疑',hours:3,cashMonths:.3,years:2,exitCost:.5},stats:{craft:1,connection:2}}),
O('close','完成最终资料交付，停止参与','每周用3小时交清账户和说明，花1个月储备收尾；不要求固定回报进度。','结局｜交接完成，关系未被保证。后来者也许再寄消息，也许很久没有。你拿回以后日子的空白，不再让旧作品替你决定下一天做什么。',{cashMonths:-1,freeHours:-3},{next:'end',flagsAdd:['le_ending_closed'],stats:{freedom:4,joy:-1}})
])
],{preferredYears:[2072,2076,2080,2084,2088],readingFocus:'作品与后续使用：传承是修改权、维护责任、署名和停止参与，避免将晚年写成被感谢的固定结局。'}));
arcs.push(A('late-apprentice','八十六岁，重新不会一件事','joy',['knowledge','inner-standards','body-rhythm'],86,100,[
S('la-start','老师没有问你以前做过什么','你在一间小工作室看到手工器皿、简单机械和旧工具。带课的人只问你想试什么、一次愿意待多久。能力和节奏按当前实际来，不用年龄推断，也不需要把每个兴趣变成作品。',[
O('class','报四次初学课，从最慢的一步做','每周留3小时，花2个月储备课程材料；不先买整套工具。','你有了一个固定的初学位置，暂时交出熟练者的身份。老师不会因为你过去做过产品就跳过手上那一步。',{cashMonths:-2,freeHours:-3},{flagsAdd:['la_class'],flagsRemove:['la_tools','la_watch'],stats:{joy:3,craft:1}}),
O('tools','买一小套工具，在家按自己的速度试','每周留4小时，花3个月储备；不承诺公开展示或开班。','你得到随时停下的自由，也少了有人当场指出错误。桌上出现一件还不知道会不会留下的东西，现金也真的少了一块。',{cashMonths:-3,freeHours:-4},{flagsAdd:['la_tools'],flagsRemove:['la_class','la_watch'],stats:{freedom:2,joy:2}}),
O('watch','先只旁观，不给自己立新目标','每周留1小时，花1个月储备交通和小材料；允许这一轮只好奇。','你没有新作品，也没有新的责任。几次谈话让一天有了变化，但熟练不会因为喜欢就自己长出来。',{cashMonths:-1,freeHours:-1},{flagsAdd:['la_watch'],flagsRemove:['la_class','la_tools'],stats:{joy:2}})
]),
S('la-stuck','新手做坏的一件东西','你做的一件小物出了差错。带课的人说还能修，也可以重新做，或者就停在这里。别人没有期待你一次成功，最急着证明没白花钱的反而是自己。',[
O('repair','只修这一件，向老师问一个具体问题','每周留3小时，花1个月储备补材料；不赶下次展示。','它留下一个明显补丁，仍然能用。你学会一点修补，也失去一个看起来完整漂亮的成品；兴趣有了可不完美的形状。',{cashMonths:-1,freeHours:-3},{flagsAdd:['la_repaired'],stats:{joy:3,craft:2}}),
O('restart','推倒重做，争取做出想要的样子','每周留6小时，花2个月储备新材料；这段时间少一次别的活动。','第二件更接近想法，时间也投得更多。你得到一次进步，不能同时声称完全不在意结果；另一个约会本轮错过了。',{cashMonths:-2,freeHours:-6},{flagsAdd:['la_restarted'],stats:{craft:3,connection:-1},opportunity:{id:'la-other-club',label:'本轮另一项固定活动',status:'closed'}}),
O('stop','不再补做，把工具转给想用的人','每周用2小时收拾，获得1个月储备转让回款；明确结束这轮兴趣。','结局｜试过以后没有继续。材料没有全部回本，你也没有欠它一件终身作品。下一次好奇还可以从别处开始。',{cashMonths:1,freeHours:-2},{next:'end',flagsAdd:['la_ending_stop'],stats:{freedom:3,joy:1}})
]),
S('la-show','有人想看，不等于你必须开课','工作室想办一个小展示。你可以带来做过的东西、只来帮忙，也可以让它留在家里。有人问你是否愿意以后讲经验，那会把兴趣变成别人等待的日程。',[
O('show','只带一件东西和一页失败记录','每周用4小时准备，花1个月储备出行；不接受长期开课。','有人喜欢，有人直接路过。你把一次尝试交到公共场合，没有因此重新变成负责人；兴趣还保留不被持续生产的空间。',{cashMonths:-1,freeHours:-4},{flagsAdd:['la_shared'],stats:{connection:2,joy:2}}),
O('teach','接两次有偿分享，只讲自己试过的部分','每周留5小时，获得2个月储备；明确不是专家课程，先只两次。','你能补回一部分花费，也要准备、确认问题和准时到场。兴趣再次有了责任，讲完两次才可以真正停。',{cashMonths:2,freeHours:-5},{flagsAdd:['la_teaching'],stats:{connection:3,freedom:-2},commitment:{label:'两次初学经历分享',after:1,requires:{resource:'freeHours',min:4},success:{text:'两次分享完成，有人第一次动了手。你也按约不再无限延长答疑。',resources:{freeHours:-4},stats:{connection:2}},failure:{text:'你没有留出准备和到场的时间，退回一部分费用。喜欢被需要又一次比自己能做的走得快。',resources:{cashMonths:-1},stats:{connection:-3}}}}),
O('private','不参加展示，做一件只在家用的东西','每周留3小时，花1个月储备材料；谢绝公开署名。','作品只留在你的桌边，没人替它作评价。你少一次认识新人的机会，多一个不需要解释为什么做的下午。',{cashMonths:-1,freeHours:-3},{flagsAdd:['la_private'],stats:{joy:3,connection:-1},opportunity:{id:'la-exhibition',label:'本轮公开展示与结识同好',status:'closed'}})
]),
S('la-end','明天不必继续证明这一生','一轮兴趣到了可以暂停的地方。工具还在，别人的活动也会继续。你没有要为整个人生交出的最后报告，今天只决定下一段日常。',[
O('practice','每周留一个慢慢练习的下午','每周留3小时，花1个月储备材料；只承诺接下来两年，不设成果数。','结局｜仍有不会的东西。你留下一个可继续的习惯，也放掉同一时段的别的邀请。它不替整个人生作总结，只是让下一周多一件愿意做的小事。',{cashMonths:-1,freeHours:-3},{next:'end',flagsAdd:['la_ending_practice'],recurring:{id:'late-practice',label:'不以成果计数的初学练习',hours:3,cashMonths:-.2,years:2,exitCost:0},stats:{joy:4}}),
O('visit','不再自己做，偶尔回工作室喝茶帮忙','每周留2小时，花1个月储备交通；放掉做出更熟练作品的目标。','结局｜从学徒变成常来的客人。技术停在这轮水平，有人仍记得你喜欢坐哪边。你留下关系，没有假装每一种热爱都必须越做越好。',{cashMonths:-1,freeHours:-2},{next:'end',flagsAdd:['la_ending_visitor'],stats:{connection:3,joy:2}}),
O('clear','收好这一轮，给下一种好奇腾桌面','每周用2小时整理，获得1个月储备转让闲置；不先决定下一个兴趣。','结局｜桌面再次空了。你没有必须交出的最终作品，也没有必须延续的身份。下一天仍要吃饭、回应人和安排时间，空白暂时就是空白。',{cashMonths:1,freeHours:-2},{next:'end',flagsAdd:['la_ending_clear'],stats:{freedom:3,joy:1}})
])
],{repeatable:true,preferredYears:[2086,2090,2094,2098],readingFocus:'晚段保留学徒、兴趣、拒绝和空白；展示边界不写成生命终点，也不自动给出疾病或健康判断。'}));
// Branches retain their original choice and meet again only through explicit work.
const arcBy=id=>arcs.find(a=>a.id===id);
const stageBy=(arc,stage)=>arcBy(arc).stages.find(s=>s.id===stage);
const optionBy=(arc,stage,id)=>stageBy(arc,stage).options.find(o=>o.id===id);
const tune=(arc,stage,id,patch)=>Object.assign(optionBy(arc,stage,id),patch);
const duty=(arc,stage,id,recurring)=>tune(arc,stage,id,{recurring});
arcBy('cash-contract').cooldownYears=0;
arcBy('new-table').title='新一桌人的规矩';
arcBy('late-apprentice').title='重新不会一件事';
// Refusing the original client does not leave a fictional contract in force.
tune('cash-contract','cash-ledger','decline',{next:'cash-new-customer'});
for(const id of ['audit','package']){
 const o=optionBy('cash-contract','cash-ledger',id);
 o.flagsAdd.push('cash_has_client');
 o.opportunity={id:'cash-build',label:'已接客户的实施与追加报价',status:'open',expiresAfter:5};
}
for(const id of ['change','gift'])tune('cash-contract','cash-scope',id,{requires:{flagsAll:['cash_has_client'],opportunitiesAll:['cash-build']}});
stageBy('cash-contract','cash-scope').variants=[];
arcBy('cash-contract').stages.push(S('cash-new-customer','旧客户的预算已经给了别人','上轮你谢绝了整包，原客户已经找人开工，没有新的回款或追加需求在等你。现在要找另一个范围更小的客户、出售能独立交付的东西，或继续承担探索没有收入的阶段。',[
O('new-audit','另找一家，只报价一份小诊断','每周花6小时访谈与交付，获得2个月储备；这次不再向旧客户暗示有空。','一位新客户买下诊断，尚未买上线。你重新有了可谈的交易，从小范围开始，不继承上一位客户的任何预算。',{cashMonths:2,freeHours:-6},{next:'cash-scope',flagsAdd:['cash_audit','cash_has_client'],flagsRemove:['cash_no_client'],opportunity:{id:'cash-build',label:'新客户诊断后的实施报价',status:'open',expiresAfter:5}}),
O('template','卖一份可直接交付的模板，结束本轮接单','每周用5小时整理与答疑，获得1个月储备；明确只有一轮答疑，不接定制。','结局｜卖了一件有限的东西。钱不多，也没有长期客户承诺。你保住下一轮探索时间，没把一次售卖说成已经形成稳定收入。',{cashMonths:1,freeHours:-5},{next:'end',flagsAdd:['cash_ending_template'],stats:{craft:2},opportunity:{id:'cash-build',label:'本轮实施客户',status:'closed'}}),
O('self-funded','继续自己的实验，承认这轮不再找钱','每周投入8小时，消耗2个月储备；取消一项原想报名的付费活动。','结局｜带着更薄的缓冲继续。没有人欠你下一笔预算，实验也尚未保证值得。你保住方向，失去这一段原本可以收回的现金。',{cashMonths:-2,freeHours:-8},{next:'end',flagsAdd:['cash_ending_self_funded'],stats:{freedom:3,reserve:-2},opportunity:{id:'cash-build',label:'本轮客户实施报价',status:'closed'}})
]));
// Revenue, consent and trust change which later routes actually exist.
for(const id of ['bounded','custom'])optionBy('useful-ai','ai-price',id).flagsAdd.push('ai_has_income');
tune('useful-ai','ai-finish','studio',{requires:{flagsAll:['ai_has_income'],minTrust:{cen:42}}});
tune('useful-ai','ai-handoff','handoff',{requires:{minTrust:{cen:40}}});
for(const id of ['paid-pilot','equal'])optionBy('cofounder','co-invite',id).opportunity=[...(Array.isArray(optionBy('cofounder','co-invite',id).opportunity)?optionBy('cofounder','co-invite',id).opportunity:optionBy('cofounder','co-invite',id).opportunity?[optionBy('cofounder','co-invite',id).opportunity]:[]),{id:'co-launch-wave',label:'本轮共同投入重写的窗口',status:'open',expiresAfter:7}];
tune('cofounder','co-turn','rewrite',{requires:{opportunitiesAll:['co-launch-wave'],minTrust:{cen:42}}});
tune('cofounder','co-ending','renew',{requires:{flagsNone:['co_trust_broken'],minTrust:{cen:45}}});
optionBy('cofounder','co-absence','pressure').relation.trust=-22;
optionBy('rhythm','rh-conflict','both').relation.trust=-15;
optionBy('one-season','fr-first-miss','late').relation.trust=-18;
optionBy('one-season','fr-newcomer','double').relation.trust=-20;
tune('one-season','fr-final','steady',{requires:{minTrust:{yuan:45}}});
tune('one-season','fr-newcomer','transfer',{requires:{flagsNone:['fr_no_show','fr_double_roster']}});
tune('public-seat','org-end','institution',{requires:{flagsNone:['org_blame']}});
optionBy('public-seat','org-ownership','blame').relation.trust=-20;
// A missed whole-project promise ends that client's next contract and routes only this arc.
Object.assign(optionBy('cash-contract','cash-ledger','package').commitment.failure,{
 flagsRemove:['cash_has_client','cash_full'],flagsAdd:['cash_client_lost','cash_no_client'],
 opportunity:{id:'cash-build',label:'失约客户的下一期实施预算',status:'closed'},
 route:{stageId:'cash-new-customer'}
});
stageBy('cash-contract','cash-new-customer').variants=[V('cash_client_lost','整包项目的上线承诺没有按期兑现，客户把下一期预算给了别人。原合同的已做部分还要清楚收尾，但没有新的实施单在等你。现在可以找另一位范围更小的新客户、出售可独立交付的东西，或继续承担探索没有收入的阶段。')];
optionBy('cash-contract','cash-new-customer','new-audit').flagsRemove.push('cash_client_lost','cash_full');
for(const o of stageBy('cash-contract','cash-ledger').options)o.flagsRemove=[...(o.flagsRemove||[]),'cash_client_lost'];
Object.assign(optionBy('cash-contract','cash-scope','gift').delay[0],{requires:{flagsAll:['cash_has_client'],flagsNone:['cash_client_lost']},missingText:'上轮整包的上线承诺没有兑现，客户把下一期预算给了别人，没有再来询价。免费加上的三项花掉了那些晚上，也没有换来续约。'});
// Losing this custom renewal does not erase the other trial users or revive paid maintenance.
Object.assign(optionBy('useful-ai','ai-price','custom').commitment.failure,{
 flagsRemove:['ai_has_income'],flagsAdd:['ai_custom_lost'],
 opportunity:{id:'ai-custom-renewal',label:'这位定制客户的下一期续约',status:'closed'}
});
stageBy('useful-ai','ai-handoff').variants.unshift(V('ai_custom_lost','定制客户已经确认不续下一期，本期已做的资料和支持仍要收尾。你想离开工作桌两周，得决定付费交接这段剩余工作、亲自完成，还是给出最后维护日；这里没有下一年收入替你兜底。'));
// New paid opportunities have genuinely uncertain second-order costs.
optionBy('useful-ai','ai-price','custom').delay=[{after:2,text:'定制客户希望把一项新流程纳入原价，你需要再决定它值不值得做。',risk:{chance:.4,text:'定制客户把一项小改用于更复杂的场景，支持量超出预留；一段本来留给自己的晚上被占走。',resources:{freeHours:-4,cashMonths:-1},stats:{energy:-2},elseText:'定制的复杂度暂时停在预留范围，你能按原来的支持时段处理，没有因此多出通用产品的完整开发季。'}}];
optionBy('three-cities','city-anchor','singapore').delay=[{after:1,text:'这轮住处按预期续到约定日期，下一期仍需另谈。',risk:{chance:.3,text:'原房源下一期不再出租，你额外花了一轮找房与搬动的费用，仍按原定期限安排停留。',resources:{cashMonths:-2,freeHours:-3},elseText:'房源留到了原定结束日，你不必提前搬动，但原先确认的期限没有因此延长。'}}];
// A short trial ends on its real date; the next card decides a new trial.
stageBy('three-cities','city-week').text='上一轮在{arcCity}的短住记录摊在桌上。你现在在{location}，重新看那几次买菜、找网络和租住问题：下一轮若再去，要选更方便的住处，还是继续用路程换预算？不是把六周试住当成一直没有结束。';
stageBy('three-cities','city-week').variants=[];
tune('three-cities','city-week','near',{label:'下一轮再去，住在日常能步行的地方',travel:{city:'{arcCity}',years:1},text:'每周用2小时重新确认住处与停留安排，付2个月储备；只订这一轮能确定的期限。',detail:'每周用2小时重新确认住处与停留安排，付2个月储备；只订这一轮能确定的期限。',outcome:'你再次来到{arcCity}，少了通勤摩擦，饭和运动更容易发生。缓冲薄了，下一年不容易再说走就走；这轮买的是日常质量。'});
tune('three-cities','city-week','cheap',{label:'下一轮选远一点的房，保项目预算',travel:{city:'{arcCity}',years:1},text:'每周多用5小时交通，付1个月储备；重新核实期限后再去{arcCity}，不自动续原房。',detail:'每周多用5小时交通，付1个月储备；重新核实期限后再去{arcCity}，不自动续原房。',outcome:'这一轮你又住到{arcCity}，账上轻一些，晚间约球先少了一次。项目预算保住，地图上的距离仍直接进入一周。'});
tune('three-cities','city-week','leave',{label:'不再开启下一轮，结束这站试住',outcome:'结局｜这站没有留下。你确认了一个否定样本，付出最后的清理和寄送费用；下一座城仍可探索，这次不会继续占着一间房和别人的待定日程。'});
stageBy('three-cities','city-key').text='你把这一轮基地的钥匙、租约和离开日期摆在一起核对。有些房期已经结束，需要清理寄存；仍在租期里的住处，则要决定下一次离开后由谁维护。阿远只答应一次收件，不能每周替你来。';
stageBy('three-cities','city-return').text='你在{location}整理这一轮{arcCity}的住处记录。店会关，朋友会改日程，房源也不保证还在。接下来是重新确认一轮可行安排、做季节性返回，还是彻底关掉这条基地路线？';
optionBy('three-cities','city-anchor','singapore').commitment.success.text='你留够了预算，能支付下一轮安排的前期成本。查完新的房源和适用期限后，你仍按已确认日期结束本轮，下一次另订。';
tune('three-cities','city-return','root',{travel:{city:'{arcCity}',permanent:true},text:'每周用4小时维护住处和固定活动，花2个月储备；核实新一轮可行条件后，把{arcCity}设为日常重心，租住安排两年后另谈。',detail:'每周用4小时维护住处和固定活动，花2个月储备；核实新一轮可行条件后，把{arcCity}设为日常重心，租住安排两年后另谈。'});
// The partner has a concrete city; choosing to move moves the player too.
stageBy('partnership','pa-city').text='林舟的重要工作在新加坡，且不想让它只成为你的生活配套。你也有自己在{homeCity}建立的日常。若搬动，需要先核实自己这一轮可行的停留和工作安排；若留下，关系也得给出具体过法。';
tune('partnership','pa-city','move',{travel:{city:'新加坡',years:1},text:'每周花6小时迁移安排，花3个月储备；核实本轮条件后，去新加坡试住一年，暂停原基地固定活动。',detail:'每周花6小时迁移安排，花3个月储备；核实本轮条件后，去新加坡试住一年，暂停原基地固定活动。',outcome:'你到了新加坡，对方继续自己的工作，你要重新找自己的白天。共同日常多了，原城市的朋友没有为你保留每个位置；这一轮到期仍须重谈去留。'});
stageBy('partnership','pa-start').text='成年同行者林舟与你约过几次饭，明确提出想认真相处，也愿意听见不同答案。林舟有自己的城市与工作安排。此刻你们还没有建立伴侣关系。';
stageBy('second-departure','tr-friend').text='你现在在{location}，收到一位老朋友的回复：下次再到{arcCity}，只有一个晚上能一起做饭，其余时间已有自己的安排。上一段旅程已经结束；要见这次面，需要重新订住处与行程，不能沿用一次过去的邀请。';
for(const id of ['one-night','push','solo'])optionBy('second-departure','tr-friend',id).travel={city:'{arcCity}',years:1};
tune('second-departure','tr-friend','one-night',{text:'每周用3小时联系，花1个月储备安排这一轮到{arcCity}的短访和自己的住处；只接受那一个晚上的邀请。',detail:'每周用3小时联系，花1个月储备安排这一轮到{arcCity}的短访和自己的住处；只接受那一个晚上的邀请。',outcome:'你重新来到{arcCity}，一起认真做了一顿饭，吃完各自收回自己的时间。你失去把旧亲密完整重演的幻想，留住了一次没有过度要求的见面。'});
tune('second-departure','tr-friend','push',{text:'每周用4小时反复协调，花2个月储备再去{arcCity}和临时住宿；先不订住处，继续问能否多借住几晚。',detail:'每周用4小时反复协调，花2个月储备再去{arcCity}和临时住宿；先不订住处，继续问能否多借住几晚。',outcome:'你再到{arcCity}，朋友最后只留原来那个晚上，你临时订得更贵。晚饭依然发生，话里多了一点谨慎；熟悉没有替代清楚邀请。'});
tune('second-departure','tr-friend','solo',{text:'每周用2小时安排，花2个月储备再访{arcCity}；不凑那顿饭，独自住一处没走过的街区。',detail:'每周用2小时安排，花2个月储备再访{arcCity}；不凑那顿饭，独自住一处没走过的街区。',outcome:'你再次来到{arcCity}，独自认识一段新街区，没有吃到那顿想念的饭。朋友继续原计划，你也拥有一段无人接待的短访；这次错过没有被补回。'});
// Continuing endings create obligations that can later be paid off and released.
duty('useful-ai','ai-finish','studio',{id:'ai-studio',label:'小工作室客户维护',hours:8,cashMonths:1,years:3,exitCost:2,npcId:'cen'});
duty('useful-ai','ai-finish','independent',{id:'ai-independent',label:'独立工具的有限维护',hours:3,cashMonths:.3,years:2,exitCost:.5});
duty('cofounder','co-ending','renew',{id:'cofounder-contract',label:'合伙项目的季度交付',hours:8,cashMonths:.8,years:1,exitCost:2,npcId:'cen'});
duty('cofounder','co-ending','retain',{id:'solo-acquired-product',label:'买断后的客户支持',hours:8,cashMonths:1,years:2,exitCost:2});
duty('cash-contract','cash-next','retainer',{id:'cash-retainer',label:'固定两天的顾问续约',hours:8,cashMonths:1,years:2,exitCost:1});
duty('cash-contract','cash-close','limited',{id:'cash-limited',label:'一个范围清楚的交付档期',hours:6,cashMonths:.8,years:2,exitCost:1});
duty('cash-contract','cash-close','more',{id:'cash-main-job',label:'这一年以客户交付为主',hours:12,cashMonths:2,years:1,exitCost:1});
for(const o of stageBy('cash-contract','cash-close').options)o.releaseDuty=['cash-retainer'];
duty('three-cities','city-return','root',{id:'home-base-care',label:'基地租住复核与日常维护',hours:3,cashMonths:-.5,years:2,exitCost:1});
duty('rhythm','rh-end','protect',{id:'protected-evenings',label:'固定晚饭与运动时段',hours:4,cashMonths:-.2,years:2,exitCost:0,npcId:'yuan'});
duty('rhythm','rh-end','work',{id:'work-heavy-season',label:'退出固定活动后的一年交付',hours:10,cashMonths:1,years:1,exitCost:1});
duty('partnership','pa-ending','renew',{id:'partner-evenings',label:'共同日常与固定相处',hours:5,cashMonths:-.3,years:1,exitCost:1,npcId:'partner'});
duty('one-season','fr-final','steady',{id:'team-season',label:'下一小赛季固定出场',hours:5,cashMonths:-.4,years:1,exitCost:1,npcId:'yuan'});
duty('one-season','fr-final','community',{id:'frisbee-community',label:'低门槛活动的组织与收尾',hours:4,cashMonths:-.5,years:2,exitCost:1,npcId:'yuan'});
duty('public-seat','org-end','institution',{id:'public-role',label:'组织决策与团队责任',hours:10,cashMonths:1.5,years:3,exitCost:2});
duty('public-seat','org-end','limited',{id:'public-advisor',label:'半年顾问后的有限答疑',hours:4,cashMonths:.5,years:1,exitCost:.5});
for(const s of arcBy('work-relay').stages)if(s.id==='le-credit'||s.id==='le-end')for(const o of s.options)o.releaseDuty=['legacy-original',...(s.id==='le-end'?['relay-coauthor']:[])];
// Repeated cycles remember endings, but do not inherit an old cycle's unfinished route.
const names={cen:'小岑',yuan:'阿远',partner:'林舟'};
for(const arc of arcs){
 const localFlags=[...new Set(arc.stages.flatMap(s=>s.options.flatMap(o=>o.flagsAdd||[])))];
 const endingFlags=localFlags.filter(f=>f.includes('_ending_'));
 if(arc.repeatable)for(const o of arc.stages[0].options){const fresh=new Set(o.flagsAdd||[]);o.flagsRemove=[...new Set([...(o.flagsRemove||[]),...localFlags.filter(f=>!endingFlags.includes(f)&&!fresh.has(f))])];}
 for(const stage of arc.stages)for(const o of stage.options){
  if(o.next==='end'&&(o.flagsAdd||[]).some(f=>endingFlags.includes(f)))o.flagsRemove=[...new Set([...(o.flagsRemove||[]),...endingFlags.filter(f=>!o.flagsAdd.includes(f))])];
  const relations=Array.isArray(o.relation)?o.relation:o.relation?[o.relation]:[];
  const impacted=relations.map(r=>(names[r.npcId]||r.npcId)+'：'+(r.memory||'会根据这次答复重新安排自己的时间'));
  o.action=o.action||o.text;
  o.time=o.time||(o.resources.freeHours<0?'这一阶段每周投入'+(-o.resources.freeHours)+'小时':'这一阶段不新增固定周时段');
  const sentences=(o.outcome.match(/[^。！？]+[。！？]?/g)||[]).map(t=>t.replace(/^结局｜/,''));
  const humanSentence=sentences.find(t=>/(小岑|阿远|林舟|伴侣|负责人|老师|客户|后来者|新作者|参与者|成员|对方|同行者|读者|队友|新人|朋友|组织|团队)/.test(t));
  o.people=impacted.length?impacted.join('；'):humanSentence||sentences[0]||o.outcome;
  o.cost=o.cost||[o.resources.cashMonths<0?'使用'+(-o.resources.cashMonths)+'个月生活缓冲':o.resources.cashMonths>0?'本阶段回款增加'+o.resources.cashMonths+'个月缓冲':'不新增现金支出',o.resources.freeHours<0?'每周占用'+(-o.resources.freeHours)+'小时':''].filter(Boolean).join('；');
  const future=[];
  if(o.commitment){const p=o.commitment,n=p.requires?.resource==='freeHours'?'，到期须留出每周'+p.requires.min+'小时':p.requires?.resource==='cashMonths'?'，到期至少剩'+p.requires.min+'个月缓冲':'';future.push(p.after+'年后要验收“'+p.label+'”'+n+'。');}
  if(o.recurring){const p=o.recurring;future.push('后续'+p.years+'年每周固定'+p.hours+'小时处理“'+p.label+'”'+(p.cashMonths>0?'，每年预计回款折合'+p.cashMonths+'个月缓冲':p.cashMonths<0?'，每年继续花'+(-p.cashMonths)+'个月缓冲':'')+'；提前结束需交接'+(p.exitCost?'并付'+p.exitCost+'个月缓冲':'')+'。');}
  if(o.delay?.length)future.push(...o.delay.map(e=>e.after+'年后：'+(e.risk?'这次安排可能带来额外成本或他人的新要求，当前先保留相应余地。':e.text)));
  o.futureType=future.length?'later':'present';
  o.futureCost=future.length?future.join(''):'当下的结果：'+o.outcome;
  const opportunities=Array.isArray(o.opportunity)?o.opportunity:o.opportunity?[o.opportunity]:[];
  o.opens=opportunities.filter(p=>p.status==='open').map(p=>p.label||p.id);
  o.closes=opportunities.filter(p=>p.status==='closed').map(p=>p.label||p.id);
  o.delayedText=(o.delay||[]).map(d=>d.after+'年后：'+(d.risk?'支持需求、成本或他人的回应仍有不确定性。':'前面的投入与约定会收到回音。')).join('');
 }
}
root.TANG_CAMPAIGN_CONTENT={version:1,fictionFrom:2027,resourceUnits:{cashMonths:'按游戏生活预算折算的缓冲月数',freeHours:'本年每周可支配小时'},arcs};
})(typeof window!=='undefined'?window:globalThis);
