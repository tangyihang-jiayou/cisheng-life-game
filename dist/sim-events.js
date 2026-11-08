(function(root){'use strict';root.SIM_EVENT_CATALOG = {
  "version": 2,
  "nature": "原创条件式人生模拟。权重是编辑模型，不是唐一航的实测事件概率；来源只提供过去母题，不证明未来发生。",
  "sourceNote": "S01–S31对应已去除私人链接的来源标题与日期。未调用或复制第三方人生模拟事件库。",
  "events": [
    {
      "id": "users-return",
      "title": "有人第二次打开你的作品",
      "dimension": "craft",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1.2,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ],
        "minStats": {
          "energy": 20
        }
      },
      "effects": {
        "craft": 4,
        "joy": 3,
        "energy": -2
      },
      "addFlags": [
        "repeat_users"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S07"
      ],
      "variants": [
        {
          "title": "没有提醒，他自己又来了",
          "text": "周二早上，你在{location}的早餐店等一碗面，手机上多出一条{project}的使用记录。昨天来问问题的人，今天没有等你提醒就又打开了。你忍不住截屏发给{colleague}，对方回：“先吃面，别又马上加功能。”你嘴上答应，还是把碗往旁边挪，仔细看他停在哪一步。面端来时已经有点坨，你却难得没嫌弃，吃完才给那个人发去一句简短的询问。"
        },
        {
          "title": "那个人记得上次的按钮",
          "text": "傍晚约着试用的人坐下，没等你介绍就打开{project}，说上回做过的那件事今天还想再用一次。你准备了十分钟的开场，一下没地方讲，只好端着水杯坐到旁边。他点错了一处，皱了皱眉，又自己找回来。你很想伸手帮，最后把手压在本子上。散场后{colleague}问顺不顺，你先说发现两个问题，过了一会儿才承认，其实挺高兴。"
        }
      ],
      "astroThemes": [
        "craft-iteration",
        "self-recognition"
      ]
    },
    {
      "id": "only-founder-uses",
      "title": "大家夸完以后就没再打开",
      "dimension": "craft",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ]
      },
      "effects": {
        "joy": -3,
        "craft": 3,
        "energy": -2
      },
      "addFlags": [
        "usability_gap"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S07",
        "S10"
      ],
      "variants": [
        {
          "title": "演示结束，后台还是很安静",
          "text": "周五你给三个人演示{project}，每个人都说看着不错。回到住处，你洗完碗又打开记录，新增使用仍只有自己那一次。{colleague}发来一个鼓掌表情，你没回，先把截图关了。第二天有人坦白：“那天没好意思问，我不知道平时拿它干什么。”你看着那句话有点发烫，把原本排好的宣传文案收起来，改约他找个下午，给你看看他本来怎么做。"
        },
        {
          "title": "最熟练的使用者只有你",
          "text": "咖啡店里，你把电脑转给第一次见{project}的人。他停在首页，问是不是要先听你解释。你差点顺着讲下去，突然想起自己已经为同一页讲过很多遍。他试了几分钟，说还不如用原来的笨办法，声音很轻。你笑着说没事，回家路上却越走越快。晚饭时{friend}问今天怎么样，你终于没说挺好，只说：“我可能一直在做一个只有自己会用的东西。”"
        }
      ],
      "astroThemes": [
        "craft-iteration",
        "inner-standards"
      ]
    },
    {
      "id": "small-paid-pilot",
      "title": "对方问能不能付钱试一个月",
      "dimension": "reserve",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ]
      },
      "effects": {
        "reserve": 4,
        "craft": 2,
        "freedom": -3,
        "energy": -2
      },
      "addFlags": [
        "pilot_offer"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S07",
        "S13"
      ],
      "variants": [
        {
          "title": "一句报价卡在喉咙里",
          "text": "周三视频快结束时，对方忽然问{project}能不能付钱试一个月。你之前准备过很多介绍，唯独没有准备怎么收钱，张口先说了句都好商量。通话挂掉，你在厨房站了一会儿，给{colleague}重讲这句话，越讲越觉得自己说得含糊。晚上你把能做的事、不能做的事和结束日期各写一行，准备第二天再打回去。那封带报价的邮件存了十分钟，你才点发送。"
        },
        {
          "title": "他愿意试，但先问出了问题找谁",
          "text": "你在{location}的小店见一位试用者，对方把笔放到桌上，说愿意为{project}试用付费，接着问晚上出问题能不能找你。听见前半句时你很高兴，后半句却让你停了一下。你本想说随时，最后改口说明自己能回复的时间。对方想了想，说那先写下来。回去路上你买了块平时舍不得顺手买的蛋糕，吃完又把承诺清单看了一遍。"
        }
      ],
      "astroThemes": [
        "money-boundaries",
        "craft-iteration"
      ]
    },
    {
      "id": "metric-disagrees",
      "title": "数字涨了，熟悉的那个人却不用了",
      "dimension": "craft",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ],
        "flagsAny": [
          "repeat_users",
          "pilot_offer"
        ]
      },
      "effects": {
        "joy": -3,
        "craft": 4,
        "energy": -3
      },
      "addFlags": [
        "metric_question"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S07",
        "S11"
      ],
      "variants": [
        {
          "title": "漂亮截图没让他留下",
          "text": "周一上午，{project}的打开次数比前一周高，你兴冲冲把截图贴给{colleague}。下午，一个常来反馈的人说最近又回到旧办法，因为那样不用等。你第一反应是想解释记录明明在变好，话到嘴边又咽下去。视频里他把真正做事的过程给你看了一遍，你才发现自己庆祝的那一步并没有帮他省多少事。晚上那张截图还在桌面，你没有删除，只在旁边记了他的原话。"
        },
        {
          "title": "他点了很多次，因为一直没做成",
          "text": "你在{location}对着{project}的记录看了半小时，觉得某个使用者特别活跃。约到电话后，对方有点不好意思：“我不是很喜欢点，是没找到怎么出去。”你跟着他的屏幕走，看到熟悉的按钮反复出现，耳朵渐渐热起来。通话结束你没有立刻改整套页面，只给那一步画了个更直白的出口。{colleague}问今天有什么发现，你把那句让人尴尬的原话发了过去。"
        }
      ],
      "astroThemes": [
        "craft-iteration",
        "inner-standards"
      ],
      "followsEventIds": [
        "users-return",
        "small-paid-pilot"
      ]
    },
    {
      "id": "unexpected-use",
      "title": "有人把你的东西拿去干了另一件事",
      "dimension": "craft",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ]
      },
      "effects": {
        "craft": 4,
        "freedom": 2,
        "energy": -3
      },
      "addFlags": [
        "adjacent_use"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S07",
        "S13"
      ],
      "variants": [
        {
          "title": "没被你演示过的用法",
          "text": "傍晚，一位使用者发来一段{project}的录屏。他拿它整理一件你从没设想过的小事，做法有点绕，却很认真。你先想纠正他，打了半行字又删掉，改问能不能再看一次他原来怎么做。{colleague}凑过来看，说这比你准备的演示有意思。你有点不服，还是把两张草图摊开，第一次在功能旁边写下一个具体人的名字，而不是一个听起来很大的目标。"
        },
        {
          "title": "被嫌丑的那一页反而有人收藏",
          "text": "你原打算删掉{project}里一张不起眼的页面，觉得它太粗糙。周末却有人问怎么找回来，说自己每天会看一眼。视频里，对方把那页放在另一项工作旁边，你才看见两者怎样接在一起。你笑着说原来如此，心里却为自己差点删掉它后怕了一下。晚上{friend}约你吃面，你没有带电脑，只拿手机给他看了那张被你嫌弃过的页面，越说越开心。"
        }
      ],
      "astroThemes": [
        "craft-iteration",
        "self-recognition"
      ]
    },
    {
      "id": "prototype-maintenance",
      "title": "昨晚还好好的，今天打不开了",
      "dimension": "craft",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ]
      },
      "effects": {
        "craft": 4,
        "energy": -4,
        "joy": -2
      },
      "addFlags": [
        "reliability_work"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S25",
        "S28"
      ],
      "variants": [
        {
          "title": "锅还没关，故障消息先来了",
          "text": "你正在{location}煎蛋，{project}弹出一串打不开的反馈。第一反应是带着锅铲去摸电脑，转身才发现火还开着。{colleague}已经发来出错位置，说先别加新东西。你把蛋盛进盘里，坐下来重现那几个步骤，午后的原计划一点点往后挪。修好后对方回了句能用了，没有别的赞美。晚上看着没动的新功能清单，你有些失落，却还是先把备份按钮找了出来。"
        },
        {
          "title": "更新之前，他先问会不会又坏",
          "text": "你准备介绍{project}的新功能，对面的人却先问上次的问题修好了没有。你握着鼠标的手停住，原本兴奋的语气低了一点。{colleague}把演示页换成一个很朴素的测试清单，逐项点给对方看。会议结束时没人鼓掌，但对方愿意再用几天。回到桌前，你把漂亮的新页面先收进文件夹，花了整个下午处理那个平时不想碰的报错，直到窗外天色变暗。"
        }
      ],
      "astroThemes": [
        "craft-iteration",
        "body-rhythm"
      ],
      "followsEventIds": [
        "users-return",
        "unexpected-use",
        "physical-result"
      ]
    },
    {
      "id": "large-org-gate",
      "title": "想改一个小按钮，要先过三个人",
      "dimension": "freedom",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ],
        "flagsNone": [
          "independent_path",
          "founder_path"
        ]
      },
      "effects": {
        "craft": 2,
        "freedom": -4,
        "energy": -3
      },
      "addFlags": [
        "org_gate"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S15",
        "S21"
      ],
      "variants": [
        {
          "title": "会开完了，按钮还没动",
          "text": "周三的会议室有点冷，你为{project}准备的修改只需几天，却被问要不要先对齐另外两组人。{colleague}在桌下给你发消息：“别急着说我全包。”你已经吸了一口气，又把那句话压回去，问清到底谁能同意。散场时你没有拿到最终答复，心里很烦，连午饭都不想选。后来你还是约到真正负责那一步的人，带着两张图，少讲了一遍宏大的介绍。"
        },
        {
          "title": "大家都同意，但没人签那一页",
          "text": "下午你把{project}的方案转了一圈，听到好几句方向不错，却始终没有人说可以开始。回到座位，{colleague}问是不是又要晚上先偷偷做了。你确实想过，嘴上却说没有。下班前你重新写了一封很短的邮件，只问哪位确认、何时能确认。发完你觉得自己显得不够能干，直到晚饭吃到一半收到一个明确名字，才把手机翻过去继续吃。"
        }
      ],
      "astroThemes": [
        "public-role",
        "peer-negotiation"
      ]
    },
    {
      "id": "accountable-no-authority",
      "title": "出了问题找你，做决定时却没叫你",
      "dimension": "freedom",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ]
      },
      "effects": {
        "energy": -4,
        "freedom": -3,
        "craft": 2
      },
      "addFlags": [
        "authority_gap"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S05",
        "S18"
      ],
      "variants": [
        {
          "title": "群里的最后一句又是你的名字",
          "text": "周五快下班，{project}的群里有人问谁来解释延期，最后一句写了你的名字。你点开前面的讨论，发现几项关键改动从没请你确认。{colleague}收电脑时看见你脸色，问要不要先去吃饭。你说等一下，手已经开始写一大段解释，又全部删掉。最后发出的消息只有三件事：哪一步由谁决定、你能改什么、今晚不再补什么。发完以后，你仍担心别人觉得你难合作。"
        },
        {
          "title": "你答了半小时，却改不了那个日期",
          "text": "视频会上，有人连续追问{project}为什么还没做好。你解释了半小时，对方提出的新日期却不是你能决定的。关掉摄像头后，你揉了揉脸，发现自己一直咬着牙。{colleague}把排期拉出来，说再这样下去只是把事情讲得越来越顺。你们一起圈出需要真正负责的人出面的那一项，重新约会。那天的工作没多做几页，晚上的电话却终于不是只有你一个人接。"
        }
      ],
      "astroThemes": [
        "public-role",
        "peer-negotiation"
      ]
    },
    {
      "id": "delegate-visible",
      "title": "小岑第一次没等你确认就交了",
      "dimension": "craft",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ],
        "minPeople": 1
      },
      "effects": {
        "energy": 3,
        "freedom": 3,
        "craft": 2,
        "joy": -1
      },
      "addFlags": [
        "delegation_tested"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S05",
        "S25"
      ],
      "variants": [
        {
          "title": "那张图不是你会画的样子",
          "text": "你回到{location}打开{project}，发现{colleague}已经把本轮修改交了出去。字体和顺序都不是你习惯的样子，你第一眼甚至有点烦。对方说试用者能顺利做完，语气带着一点防备。你把准备好的批注放到一边，先请他演示完整过程。看完仍有两处不喜欢，却也找不到必须重来的理由。晚上你第一次没带文件回家，吃饭时还总想拿手机确认一下。"
        },
        {
          "title": "没有你在场，事情也做完了",
          "text": "你下午要出门，{colleague}说那次{project}的讨论他可以先开。你一路上想发提醒，打开聊天框三次，最后只问是否还缺资料。傍晚回来，对方已经把决定和待办列好了，甚至删掉一项你一直不舍得删的功能。你盯着那行看了很久，问为什么，他给出一个你没想到的解释。你有点骄傲，也有一点说不出口的失落，回家路上没有再打开会议记录。"
        }
      ],
      "astroThemes": [
        "public-role",
        "peer-negotiation"
      ]
    },
    {
      "id": "junior-knows",
      "title": "你没弄懂的地方，他随手就做了",
      "dimension": "craft",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "minPeople": 1
      },
      "effects": {
        "craft": 3,
        "connection": 2,
        "joy": 1,
        "energy": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S05",
        "S19"
      ],
      "variants": [
        {
          "title": "那句其实可以更简单让你脸热",
          "text": "午后，{colleague}看你在{project}里重复点同一组步骤，问为什么不用旁边的小工具。你说自己当然知道，话说出口就后悔，因为你确实没试过。他没有拆穿，只把电脑推来演示。三分钟后，那件让你折腾了一上午的事已经做完。你端起杯子装作喝水，过了一会儿才说：“刚才那一步能再教我一次吗？”对方笑了笑，给你留了一个很短的说明。"
        },
        {
          "title": "这一次你负责问最基础的问题",
          "text": "晚上一起改{project}，{colleague}用了一个你没见过的方法。你怕耽误大家，先跟着点头，到第三步终于完全跟丢。电脑风扇一直响，你的背也坐得发僵，最后还是举手说能否从头讲一次。对方重新画了两笔，没有露出你想象中的不耐烦。散场后你把最初那句问题写进本子，字写得很小，第二天却真的照着它自己做通了一遍。"
        }
      ],
      "astroThemes": [
        "knowledge",
        "peer-negotiation"
      ]
    },
    {
      "id": "company-invitation",
      "title": "有人来问你愿不愿意加入团队",
      "dimension": "freedom",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 0.85,
      "cooldown": 7,
      "minAge": 27,
      "maxAge": 85,
      "prerequisites": {},
      "effects": {
        "freedom": 3,
        "joy": 2,
        "energy": -2
      },
      "addFlags": [
        "company_offer"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S04",
        "S06",
        "S15"
      ],
      "variants": [
        {
          "title": "旧联系人发来一个新职位",
          "text": "周一早上，一个认识你作品的人发来消息，说团队在找能把想法做出来的人，想约你聊聊。你在{location}等咖啡，先把消息转给{friend}，又怕自己太兴奋，补了一句只是看看。电话里对方讲了很多期待，直到你问到每周实际要做什么，语速才慢下来。挂断后你没有立刻查办公楼照片，先在纸上写了三个还没得到答复的问题，咖啡已经凉了一半。"
        },
        {
          "title": "听见那句我们正需要你",
          "text": "晚饭后，一通聊工作的电话拖了四十分钟。对方说团队正需要你这样的经历，你听得挺高兴，甚至开始想像新的同事。{friend}在旁边等你点菜，用筷子敲了敲空碗。你才注意到对方还没讲清谁做决定、你能带什么。结束通话时你约了一次面谈，没有先答应。菜上来后阿远问条件怎么样，你笑了一下，说好听的话不少，真正要问的还在后面。"
        }
      ],
      "astroThemes": [
        "public-role",
        "self-recognition"
      ]
    },
    {
      "id": "role-reorganization",
      "title": "组织调整以后，你的名字换了一栏",
      "dimension": "freedom",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 0.8,
      "cooldown": 9,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ],
        "flagsNone": [
          "independent_path",
          "founder_path"
        ]
      },
      "effects": {
        "joy": -4,
        "freedom": 2,
        "reserve": -2,
        "energy": -2
      },
      "addFlags": [
        "role_reorg"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S20",
        "S15"
      ],
      "variants": [
        {
          "title": "新表发下来，旧承诺还在",
          "text": "周二你打开新的组织表，发现自己的名字被挪到另一栏。{project}仍在，原来的承诺也没有人说取消，但接下来该找谁决定已经不清楚。{colleague}问你是不是早就知道，你摇头，心里有点难堪。下午大家开会介绍新安排，你没抢着说自己都能适应，只问眼前那项交付由谁确认。回到座位，你把桌上的便签重新分了两堆，有一张揉了很久也没扔。"
        },
        {
          "title": "新负责人想听你从头讲一遍",
          "text": "新负责人约你介绍{project}，开口说只有二十分钟。你为此把旧文档整理了一上午，讲到一半才发现他更关心另一件事。你有点气，觉得前面的工作又要被重新证明。{colleague}陪你吃午饭时问接下来要什么，你没有马上说做好产品，而是想了很久，才说想知道哪些事还值得自己继续负责。下午你重新约了一次更短的讨论，这回没有带那套厚厚的演示。"
        }
      ],
      "astroThemes": [
        "public-role",
        "outer-change"
      ]
    },
    {
      "id": "runway-question",
      "title": "日历翻到下个月，你开始算还够多久",
      "dimension": "reserve",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ],
        "flagsAny": [
          "founder_path",
          "independent_path"
        ],
        "maxStats": {
          "reserve": 45
        }
      },
      "effects": {
        "reserve": -4,
        "energy": -3,
        "joy": -2
      },
      "addFlags": [
        "runway_question"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S08",
        "S13",
        "S15"
      ],
      "variants": [
        {
          "title": "那一栏再也填不下乐观估计",
          "text": "晚上你在{location}核对{project}接下来的支出，一边改日期，一边发现同一句“下个月会好些”已经写过几次。{colleague}打电话来问是否继续试下一版，你先说当然，随后又停下来。你把房租、工具和已经答应别人的费用逐项列好，没有再把还没谈妥的合作算进去。饭凉在一旁，你看着那个比想象中短的期限，第一次把结束日期也写进了计划里。"
        },
        {
          "title": "你把那杯咖啡放回柜台",
          "text": "上午刚想再续一杯咖啡，手机提醒一项工具要扣费。你没有立刻付，而是走回桌边，把{project}每月用的东西一项项打开。原来许多订阅很久没碰，真正离不开的却只有几项。{colleague}问要不要继续约新试用，你说先让我今天算清楚。说出这句话有点丢脸，像承认自己没有一直准备好。晚上你还是给搭档打了电话，把不太好听的数字和日期一并讲完。"
        }
      ],
      "astroThemes": [
        "money-boundaries",
        "inner-standards"
      ]
    },
    {
      "id": "cofounder-rhythm",
      "title": "一个想继续改，一个只想先交出去",
      "dimension": "connection",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ],
        "minPeople": 1,
        "flagsAny": [
          "founder_path",
          "independent_path"
        ]
      },
      "effects": {
        "connection": -3,
        "energy": -4,
        "craft": 2
      },
      "addFlags": [
        "collaboration_gap"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S13",
        "S15"
      ],
      "variants": [
        {
          "title": "你说再一天，他说已经三次了",
          "text": "小工作间快关灯时，你又提议把{project}的一页重做。{colleague}把鼠标放下，说你上周也说只改一天。你想解释这次确实不一样，看到对方桌上没吃完的饭，声音又低了下来。两人都没马上继续做，窗外车声显得很响。后来你问他最怕什么，才知道他已经替你向试用者改过两次日期。回去的路上你没有想新功能，一直在想那句“你可以早一点告诉我”。"
        },
        {
          "title": "周末邀约成了谁更认真的争执",
          "text": "{colleague}说周六想按原计划休息，你却觉得{project}正到关键时候，忍不住问能否多留半天。对方反问为什么每个周末都关键，你听着刺耳，先沉下脸。过了一会儿，两人把接下来的事情写在纸上，才发现你们对完成的样子根本没想成同一件事。桌角的披萨已经硬了，你把其中一块推过去，没再用热不热爱来解释那半天为什么必须属于工作。"
        }
      ],
      "astroThemes": [
        "peer-negotiation",
        "craft-iteration"
      ],
      "followsEventIds": [
        "runway-question",
        "validation-failed"
      ]
    },
    {
      "id": "employment-compound",
      "title": "同事记得你上次怎么解决问题",
      "dimension": "craft",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ],
        "flagsNone": [
          "independent_path",
          "founder_path"
        ]
      },
      "effects": {
        "craft": 4,
        "reserve": 2,
        "freedom": -2
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S18",
        "S21"
      ],
      "variants": [
        {
          "title": "这回不用从自我介绍开始",
          "text": "你带着{project}的新问题走进会议室，还没翻到第二页，就有人说上次你处理过类似的，可以从那里接着做。你准备的背景介绍突然用不上，有点意外，也有点高兴。{colleague}把旧记录找出来，大家很快指认出这次真正不同的两处。会议比预计早结束，你没趁机再补十页想法，出门买了杯热饮。回到工位，看见新同事已按刚才的说法动起来，那种被认得的感觉让你坐直了一点。"
        },
        {
          "title": "一句这件事问他让你停了一下",
          "text": "午饭刚坐下，隔壁同事被问到{project}，顺口说这件事可以来问你。你本能地准备解释自己也不全懂，话到嘴边又收住。下午对方真的来了，你们只用一张纸就把问题说清，因为许多约定早已在前面的合作里讲过。{colleague}走过时笑你今天话少，你说对方自己明白得快。下班路上你才承认，这一次自己不用一遍遍证明，心里确实轻松了一些。"
        }
      ],
      "astroThemes": [
        "public-role",
        "craft-iteration"
      ]
    },
    {
      "id": "validation-failed",
      "title": "答应试用的人，后来都说再等等",
      "dimension": "craft",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 0.8,
      "cooldown": 8,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ],
        "flagsAny": [
          "pilot_offer",
          "repeat_users",
          "founder_path"
        ]
      },
      "effects": {
        "joy": -5,
        "craft": 3,
        "reserve": -3,
        "energy": -3
      },
      "addFlags": [
        "validation_failed"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S07",
        "S15"
      ],
      "variants": [
        {
          "title": "他客气地把电脑合上了",
          "text": "你和{colleague}带着{project}去见约好的试用者，对方先道谢，又说最近可能用不上。你追问具体哪一步不合适，他想了一会儿，最后说原来的办法虽然麻烦，但已经够了。电脑合上的声音很轻，你却听得格外清楚。回程两人没有像往常那样讨论新功能，到了路口才决定先吃点东西。点餐时你仍忍不住说也许是找错了人，对方没有反驳，只问还要试多久。"
        },
        {
          "title": "提醒发到第三遍，你不想再发了",
          "text": "这周你给{project}的试用者发了三次提醒。有人回了忙，有人没回，最后只有一位打开几分钟。你盯着聊天记录，越看越不想让{colleague}来问进展，索性先发去真实情况。对方没责怪，只说今晚一起看看还剩哪些证据。桌上的纸被你划满箭头，最后却回到最初那个问题：不靠你催，究竟有没有人需要。晚上回家时你没有带走那张大图，只拍了一张照片。"
        }
      ],
      "astroThemes": [
        "craft-iteration",
        "money-boundaries"
      ]
    },
    {
      "id": "physical-result",
      "title": "屏幕里的东西终于能拿在手上",
      "dimension": "craft",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active",
          "idea"
        ]
      },
      "effects": {
        "craft": 3,
        "joy": 4,
        "reserve": -2,
        "energy": -2
      },
      "addFlags": [
        "tangible_prototype"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S25",
        "S30"
      ],
      "variants": [
        {
          "title": "有一角翘起来，你还是一直摸",
          "text": "傍晚你在{location}拿到{project}的一份粗糙样品，边角有点歪，颜色也和想象中不同。你先挑了三处毛病，{colleague}却伸手接过去，说至少这回不是一张图。你没吭声，过一会儿又把它拿回来，放在灯下转了好几圈。回家路上怕它压坏，包一直抱在胸前。晚上给{friend}看时，你照例先说做得一般，对方碰了一下，问明天能不能带给别人试试。"
        },
        {
          "title": "别人真的伸手用了那一下",
          "text": "你把{project}的第一个可操作版本放到桌上，旁边的人没有听完介绍就伸手试了。那一秒你比做演示时还紧张，眼睛跟着每个动作跑。一个小部件不太顺，对方却没放下，换个角度又试了一遍。{colleague}拿手机记录，你差点叫他先别拍。结束后桌上留着一点划痕，你摸了摸，没有像以前那样马上想换成一件更体面的样品，先把它装回原来的纸盒。"
        }
      ],
      "astroThemes": [
        "craft-iteration",
        "self-recognition"
      ]
    },
    {
      "id": "scope-creep",
      "title": "原来说好的一页，又加了三件事",
      "dimension": "freedom",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ]
      },
      "effects": {
        "energy": -5,
        "freedom": -3,
        "connection": 1
      },
      "addFlags": [
        "scope_creep"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S05",
        "S25"
      ],
      "variants": [
        {
          "title": "最后再加一个的消息没有停",
          "text": "周四晚上，{project}的交付清单已经确认，对方又发来一句能不能顺便加一项。你回了可以，十分钟后再来一项。{colleague}把你最初写的清单贴回来，问这样周末还回不回家。你一瞬间觉得他在泼冷水，转头看见桌边没动的晚饭，才重新读那几个顺便。后来你约对方十分钟通话，把新增项排到下一轮，说完心跳得有点快，等着听他是不是不高兴。"
        },
        {
          "title": "你开了六个窗口，却没有多一双手",
          "text": "上午你同时处理{project}的几处修改，消息里又有人问一个从没约定过的附加工作。你习惯性把它放进待办，写到一半发现今晚原定和{friend}吃饭的格子又被挤掉。你有点烦，先怪所有人来得不巧。后来给{colleague}打电话时，还是承认这些事有一半是自己没问清就接了。那天下午你没多做页面，而是逐个说明哪些能做、哪些需要另排日期。"
        }
      ],
      "astroThemes": [
        "peer-negotiation",
        "body-rhythm"
      ]
    },
    {
      "id": "customer-constraint",
      "title": "对方只要你把最麻烦的一步省掉",
      "dimension": "craft",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ]
      },
      "effects": {
        "craft": 4,
        "joy": 2,
        "energy": -2,
        "freedom": -1
      },
      "addFlags": [
        "narrow_value"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S07",
        "S12"
      ],
      "variants": [
        {
          "title": "他不想听你讲完整路线图",
          "text": "午后你在{location}给人介绍{project}，讲到第三种可能，对方指着纸上最不起眼的一格说：“我就想少做这一步，别的先不要。”你准备很久的路线图一下没处放，脸上还挂着笑，心里有点不服。回去后{colleague}问他到底要什么，你试着只用一句话回答，发现比讲十分钟更难。晚上你把那一步单独拉出来做，才看到里面藏着几个以前被你一笔带过的小麻烦。"
        },
        {
          "title": "他把旧表格推到你面前",
          "text": "对方没先看{project}的演示，反而打开一张用了很久的旧表格，指着每次都要复制的几行说这里最烦。你差点告诉他那种做法已经过时，看到密密麻麻的日期又忍住。他做得不漂亮，却一直真的在做。你坐在旁边跟完一次，笔记写满了细节。结束后你给{colleague}发消息，没有再说要做个全新的东西，只说先试着把这几行省掉，看看他下周会不会回来。"
        }
      ],
      "astroThemes": [
        "craft-iteration",
        "knowledge"
      ]
    },
    {
      "id": "back-to-class",
      "title": "你坐回教室，第一题就不会",
      "dimension": "craft",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "craft": 3,
        "joy": 3,
        "reserve": -2,
        "energy": -2
      },
      "addFlags": [
        "learning_started"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S17",
        "S24"
      ],
      "variants": [
        {
          "title": "自我介绍完，还是得从第一步练",
          "text": "晚上的课在{location}一间普通教室，你坐在靠门的位置，想着没准可以先听听。老师发下练习，第一页你就卡住了。旁边的人已经开始做，你忍不住瞟过去，又假装在整理笔。过了十分钟，你终于问出那个很基础的问题，老师没有多看你一眼，只重新演示一遍。下课后走到路口，你给{friend}发消息说今天学得很慢，阿远回得很快：“那不是挺正常。”"
        },
        {
          "title": "保存一百篇文章也顶不了这次作业",
          "text": "你在{location}的桌前打开新课作业，先去找收藏里的参考，翻了半小时仍没动手。{friend}来问要不要散步，你说还差一点，其实第一题都没开始。后来你把网页全关掉，只照老师教的最笨办法做，错了一次又一次。午夜前终于交上去，成品有些难看，你也没附那段解释自己最近忙的长话。关灯前看到提交成功四个字，反而比收藏夹再多一篇好文更让人踏实。"
        }
      ],
      "astroThemes": [
        "knowledge",
        "inner-standards"
      ]
    },
    {
      "id": "move-cost",
      "title": "搬走之前，旧东西比你想的多",
      "dimension": "reserve",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "reserve": -3,
        "freedom": 2,
        "energy": -2
      },
      "addFlags": [
        "move_question"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S15"
      ],
      "variants": [
        {
          "title": "纸箱装到第五个还没结束",
          "text": "周末你在{location}试着整理行李，以为一个背包再加箱子就够。书、球鞋和那口舍不得扔的锅摆满地板，第五个纸箱封好，角落还有一堆充电线。{friend}来帮忙，拿起一件很旧的外套问真带走吗，你立刻说带，又开始嫌它占地方。搬运报价发来时，你在地板上坐了很久。阿远没有催，只从书堆下面抽出飞盘，在手里转了一圈，等你决定下一箱装什么。"
        },
        {
          "title": "那口锅比机票更难处理",
          "text": "你站在旧住处的水槽前，把一口用了很久的锅洗干净。本来只想查去另一座城的机票，后来发现退租、押金、寄存和新住处都还没谈。{friend}在电话里听你说完，问是不是今天必须订票。你说倒也不是，手还握着锅柄没松。下午你先去问邻居肯不肯暂存一箱书，回来时路过熟悉的水果店，老板顺手装了你常买的那种，你忽然没那么急着走了。"
        }
      ],
      "astroThemes": [
        "home-base",
        "outer-change",
        "money-boundaries"
      ]
    },
    {
      "id": "steady-contract",
      "title": "有份三个月的合作在等你答复",
      "dimension": "reserve",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "freedom": 2,
        "energy": -1
      },
      "addFlags": [
        "contract_offer"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S08",
        "S18"
      ],
      "variants": [
        {
          "title": "对方认真翻出了纸日历",
          "text": "周四你在{location}见一位想找你合作的人，对方没有先谈愿景，而是拿出日历，说三个月，每周两天，想把具体事情做完。你听着比面对宏大的邀请更踏实，却也发现那两天正好撞上自己最喜欢的安排。回去的车上，你试着给每个星期涂颜色，空白很快少了一半。{friend}问今晚来不来球局，你看着那张尚未确认的日历，先回了一句今天来，合作明天再答复。"
        },
        {
          "title": "稳定两个字让你心动了一下",
          "text": "电话里对方说可以连续合作三个月，任务和付款日期都能先写清。你站在阳台收衣服，听到这里不由停下，夹在指间的衣架晃了两下。最近总在自己安排一切，这种有人把日子讲明白的感觉很诱人。可对方接着问能否随时临时加班，你又把衣架挂回去，请他把常见情况具体说说。通话挂断，一件衬衣还搭在你手臂上，你给{colleague}发了句想听听你的看法。"
        }
      ],
      "astroThemes": [
        "money-boundaries",
        "public-role"
      ]
    },
    {
      "id": "delayed-payment",
      "title": "约好的结款日已经过了",
      "dimension": "reserve",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "flagsAny": [
          "steady_contract",
          "pilot_offer",
          "independent_path"
        ]
      },
      "effects": {
        "reserve": -4,
        "energy": -3,
        "joy": -2
      },
      "addFlags": [
        "exchange_unclear"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S05"
      ],
      "variants": [
        {
          "title": "你把催款消息改了四遍",
          "text": "约好的款项没来，对方也没解释。你在{location}的公交站打字，先写最近还好吗，再写方便看一下吗，删来删去都像在为自己的提醒道歉。车来了，你没上，终于把约定日期和已交内容直接发过去。{colleague}问要不要先垫下一笔费用，你回了等我确认。消息过了很久才得到一句在走流程，你看着路上第二辆车停下，这次把手机放进兜里，上车找了个靠窗的位置。"
        },
        {
          "title": "那句再等两天已经说过了",
          "text": "你翻到合作开始时对方发来的确认，日期写得清楚，眼下却已过了几天。{colleague}说先别继续加做，你还是怕显得不近人情。中午排队买饭时，对方发来新修改，却没提付款。你捏着取餐号码站了一会儿，回复会在上一阶段结清后确认下一轮。轮到你时店员叫了两遍，你才抬起头。那天后半个下午手机都很安静，你既松口气，又有点忍不住想去看它。"
        }
      ],
      "astroThemes": [
        "money-boundaries",
        "peer-negotiation"
      ]
    },
    {
      "id": "subscription-prune",
      "title": "有个订阅扣了半年，你一次没打开",
      "dimension": "reserve",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "reserve": 3,
        "energy": 2,
        "joy": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S14",
        "S28"
      ],
      "variants": [
        {
          "title": "取消按钮藏在最后一页",
          "text": "晚上你原想找一张旧照片，意外看到工具续费通知。点开账单，一串名字里有好几个已经想不起做什么。你窝在{location}的椅子上逐个登录，取消按钮藏得很深，有一项还跳出挽留页面。{friend}发来游戏邀请，你说等十分钟，结果弄了快一小时。最后只剩几项真在用的，你把电脑合上进游戏，阿远已经输完一局，第一句话是：“你退个订比我打一局还慢。”"
        },
        {
          "title": "你终于删了那个舍不得退的工具",
          "text": "你曾经觉得某个工具能让自己做出很多东西，每次续费都说下个月认真用。今天在{location}整理手机，发现它连通知都被关掉很久。手指放到取消上，你又去看了一眼当初收藏的教程，还是没看懂。楼下有人叫卖水果，声音吵得你有些烦，你索性先退订再下楼。回来时手里多了几个橘子，软件没了，本来担心会错过什么的那阵紧张，也没有一直跟上来。"
        }
      ],
      "astroThemes": [
        "money-boundaries",
        "home-base"
      ]
    },
    {
      "id": "reserve-breath",
      "title": "这次收到账单，你没有马上皱眉",
      "dimension": "reserve",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "reserve": 4,
        "energy": 2,
        "joy": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S03",
        "S18"
      ],
      "variants": [
        {
          "title": "可以先吃完，再打开那封邮件",
          "text": "午间一封续费提醒进来，你照例伸手拿手机，看到日期后却没有立刻打开。前阵子逐项整理过的日常开支还算按计划走，这件事今天可以稍后处理。{friend}坐在你对面剥花生，问周末去不去走一条没走过的路。你认真想了一下，答应先看天气。吃完起身时，手机仍旧放在桌角。你回头拿它，才注意到这顿饭没一边吃一边算下个月，还有点不习惯。"
        },
        {
          "title": "你没有为一张车票反复刷新",
          "text": "周末想去邻近的小镇，你打开车票页面，看见价格没在最低那一档。以前你会多刷几次，今天对照已经安排好的日常支出，觉得这趟能去，便直接买了。{friend}发来一句这么快，你回了张票的截图，又提醒他别迟到。出发那天你站在站台吃包子，袋子沾了点油，阿远还在找进站口。你一边笑他一边挥手，没拿这张票去证明什么，只是真的想出去一趟。"
        }
      ],
      "astroThemes": [
        "money-boundaries",
        "body-rhythm"
      ]
    },
    {
      "id": "declined-lucrative",
      "title": "你没接那件听起来很划算的事",
      "dimension": "freedom",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "freedom": 4,
        "reserve": -2,
        "joy": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S05",
        "S06"
      ],
      "variants": [
        {
          "title": "拒绝以后，你还是看了一眼报价",
          "text": "有人邀请你连续几晚帮忙做一件并不想做的工作，条件比平常好。你先答应考虑，接着把那几晚要放弃的安排翻出来，里面有和{friend}约很久的一场球。回完不接，你还是又看了一眼报价，心里酸了一小下。周五在{location}球场换鞋时，阿远问怎么来这么早，你说事情没接。对方没有夸你有原则，只把盘扔过来，你差点没接住，赶紧追了两步。"
        },
        {
          "title": "那晚你没有带电脑出门",
          "text": "邀请方说这件事不难，稍微赶几晚就能完成。你知道自己能做，也知道前几次所谓稍微后来都拖到了凌晨。电话里你还是结巴了一下才拒绝，对方很快说没事，反而让你有点失落。晚上去{location}一家小影院，你几次摸到包里才想起电脑没带。电影开场前，{friend}递来爆米花，说再看手机就归他全吃。你把包放到脚边，没有再打开那封报价邮件。"
        }
      ],
      "astroThemes": [
        "self-recognition",
        "money-boundaries"
      ]
    },
    {
      "id": "time-inventory",
      "title": "周末怎么没了，日历比你更记得",
      "dimension": "reserve",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "reserve": 2,
        "energy": 3,
        "craft": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S09"
      ],
      "variants": [
        {
          "title": "说十分钟的事占了三小时",
          "text": "周日你洗衣服时忽然想不起这一周自己做过什么，明明每天都很忙。你坐到{location}的桌边翻日历，发现几个写着聊一下的通话加起来占了三个晚上。{friend}来问下午去不去走走，你差点又说没空，随后把日历给他发去一张。他圈出一处问这个你一定得去吗，你盯着那一格，没有立刻找到理由。洗衣机响了第二遍，你先去晾衣服，把答案留在回来以后。"
        },
        {
          "title": "球鞋一个月没从包里拿出来",
          "text": "你在{location}收拾玄关，看见球鞋还装在上次的袋子里。鞋底的草屑已经干了，你蹲着擦了一会儿，才意识到嘴上说的下周去已经过了好几个下周。晚上你翻聊天记录，把答应过的短会和帮忙一项项写下。并没有谁逼你全部接，想到这里反而更烦。{friend}发来下一场的地点，你这次先在日历上占好，再去回复那几个还没有确认的邀约，鞋也从袋子里拿了出来。"
        }
      ],
      "astroThemes": [
        "inner-standards",
        "body-rhythm",
        "money-boundaries"
      ]
    },
    {
      "id": "shared-resource",
      "title": "小岑说那件工具可以一起用",
      "dimension": "connection",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "minPeople": 1
      },
      "effects": {
        "reserve": 3,
        "connection": 3,
        "freedom": -2,
        "energy": -1
      },
      "addFlags": [
        "shared_resource"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S13",
        "S24"
      ],
      "variants": [
        {
          "title": "不用各自再买一套了",
          "text": "你和{colleague}在{location}整理东西，发现两个人都想买同一种不常用的设备。对方说先共用自己的就好，你很快答应，又担心万一弄坏怎么办。你们当着面试了一次，约好谁用完清理、耗材怎么分，连收纳盒放哪里都争了几句。原本像白占便宜的紧张慢慢变成真正在用一件东西。回去时你没有背走设备，只拿了一小袋试料，路上还在想下次先做哪一件小玩意。"
        },
        {
          "title": "那张空桌子终于有了另一个使用者",
          "text": "{colleague}问你要不要固定来用一张空桌子，那里刚好有你偶尔才需要的工具。你到场时先拘谨地把包放在脚边，对方指指椅背说挂那儿就行。两人一起清掉桌角的杂物，谈好预约和耗材，没急着起个好听的名字。下午你第一次用那套工具做成一件很小的东西，收工时把碎屑扫进袋子。门口对方问下次什么时候来，你翻了日历，给出一个真正能来的周几。"
        }
      ],
      "astroThemes": [
        "shared-work",
        "peer-negotiation"
      ]
    },
    {
      "id": "generous-overcommit",
      "title": "帮到晚上十点，没人知道你还没吃",
      "dimension": "connection",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "energy": -4,
        "freedom": -2,
        "connection": 1
      },
      "addFlags": [
        "uneven_exchange"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S05",
        "S18"
      ],
      "variants": [
        {
          "title": "你那句顺手把自己留到了最后",
          "text": "{friend}组织活动，你原只答应去看一下。搬桌子、改一页说明、替人联系场地，每件事都不大，你也一直说顺手。到晚上十点大家开始告别，你还蹲着卷延长线，才想起自己没吃晚饭。阿远问你怎么还在，你一瞬间有点委屈，又不好意思说从来没讲过的期待。回家路上他发来谢谢，你回了不客气，手机塞进兜以后，脸上却没那么轻松。"
        },
        {
          "title": "你听见自己又说了一句我来吧",
          "text": "活动群里一件小事没人认领，你等了半分钟，还是敲出我来吧。发出去以后，一串相关问题都跟着找来，你原定去{location}散步的下午又留在屋里。{friend}打电话时听出你不高兴，问是不是太多了。你嘴硬说还好，过一会儿却问能不能帮你收尾。他说可以，语气自然得让你有点尴尬。那天出门已经晚了，路边店快关门，你们只买到最后两串烤菜。"
        }
      ],
      "astroThemes": [
        "peer-negotiation",
        "body-rhythm"
      ]
    },
    {
      "id": "portable-work-offer",
      "title": "有份合作不要求你每天到场",
      "dimension": "freedom",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 0.85,
      "cooldown": 7,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "freedom": 4,
        "energy": -2
      },
      "addFlags": [
        "portable_offer"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S08",
        "S15"
      ],
      "variants": [
        {
          "title": "地图又被你打开了",
          "text": "对方在电话里说，事情只需每周固定两次讨论，平日不必到场。你在{location}的桌边听着，手已经不自觉去开地图，想到海边、陌生街道和可以自己买菜的早晨。{colleague}听完先问网络和时差怎么处理，你觉得他很扫兴，又知道问得对。下午你去楼下小店坐了一小时，试着完成同样的讨论，结果插座不好找，声音也太吵。离开时你仍然想走，只是把要先确认的事多写了几项。"
        },
        {
          "title": "你先问清周三下午是否必须在线",
          "text": "一份远程合作邀请发来，写着地点不限。你读到这四个字先笑了一下，接着把附件往下翻，发现仍有几次固定会议。{friend}约你查旅行路线，你没有立刻买票，而是先问对方这些时间能不能提前确定。等回复时你在{location}超市排队，把手机拿出来又放回去。轮到结账，阿远才回了一句你现在倒挺谨慎。你看着购物袋里的鸡蛋，回他小心总比到了地方半夜开会强。"
        }
      ],
      "astroThemes": [
        "outer-change",
        "money-boundaries"
      ]
    },
    {
      "id": "attention-exchange",
      "title": "有人看了你的记录，想请你做内容",
      "dimension": "reserve",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "reserve": 3,
        "freedom": -3,
        "joy": -2
      },
      "addFlags": [
        "sponsor_offer"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S12",
        "S16"
      ],
      "variants": [
        {
          "title": "那封合作邮件先夸了你三段",
          "text": "周二有人读过你之前写的记录，发来一封很长的合作邮件。前面三段都在夸你，后面才说希望按他们安排的主题连续更新。你在{location}的公交上读完，心里其实挺受用，差点当场答应。回去给{colleague}看，对方只问哪些话得先给他们看。你往下翻才发现附件还有一页要求。车开过一处水面，手机反光看不清，你靠到窗边又重读了一遍，笑意慢慢收了一点。"
        },
        {
          "title": "他说你的普通日子很适合拍出来",
          "text": "一位合作方听你讲过旅行和做饭，说喜欢这些普通日子，想请你做一组内容。你有些高兴，随后听见对方要你每次先讲好用，再展示东西，心里又卡了一下。视频结束后你在{location}把菜从袋子里拿出来，一根黄瓜已经被压弯了。你想像自己对着镜头夸它，又觉得好笑。{colleague}问谈得怎样，你回了一句可以再谈，没把那张拍摄日历先填满。"
        }
      ],
      "astroThemes": [
        "public-role",
        "money-boundaries",
        "self-recognition"
      ]
    },
    {
      "id": "travel-change-cost",
      "title": "改票时你才发现，便宜票没那么便宜",
      "dimension": "reserve",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "reserve": -3,
        "energy": -2,
        "freedom": 1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S17",
        "S29"
      ],
      "variants": [
        {
          "title": "雨还在下，车已经开走了",
          "text": "在{location}出门的早晨，你把车站看成另一个入口，多绕一段路，到了站台只看见车尾。手机上的改票费用比你预想高，刚好又开始下雨。你站在屋檐下有点狼狈，先怪地图，后来还是给等着见面的人发去会晚到的消息。{friend}回你别急着一路赶，你却还是去看更快的路线。最后买好新票坐下，鞋袜湿了一半，你把包抱在腿上，没再安排抵达后的第二场见面。"
        },
        {
          "title": "你拿着两张不能同时赶上的票",
          "text": "你在{location}临时答应一个见面，回头才发现它和已订好的离开时间撞上。退改页面跳出来时，你忍不住小声说怎么这么贵，旁边排队的人看了你一眼。{friend}问你更想保留哪一件，你没马上答，把两张票并排截在手机里。最后改掉其中一张，接下来几天少订一项活动。晚上回住处收东西，那份没用上的行程还压在桌面，你撕掉一角当作书签，心里仍然觉得可惜。"
        }
      ],
      "astroThemes": [
        "outer-change",
        "money-boundaries"
      ]
    },
    {
      "id": "city-trial",
      "title": "试住的第三天，海景不再是全部",
      "dimension": "freedom",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "freedom": 3,
        "craft": 1,
        "energy": -2
      },
      "addFlags": [
        "city_tested"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S08",
        "S17"
      ],
      "variants": [
        {
          "title": "你开始认真找洗衣服的地方",
          "text": "在{location}试着过几天日常，头两天你拍了很多街景，第三天却被一袋没干的衣服难住。楼下洗衣店关门，另一家要走很远，你提着袋子边走边觉得自己太把这里当旅行。{friend}问城市怎么样，你先发了张阳台照片，随后又把潮湿的袜子拍给他。阿远笑了半天。傍晚终于找到能晾衣服的地方，你站在窄小的走廊里夹衣架，旁边有人炒菜，蒜味很香，你忽然想知道附近哪家卖菜。"
        },
        {
          "title": "早餐店记不住你的长介绍",
          "text": "你想试试{location}适不适合日常住，特意按普通工作日过了一天。买早餐时把点单说错两次，店员没有不耐烦，只指着柜子让你选。上午办事慢得出乎意料，中午却在街角吃到一碗很合口味的汤。回去的车上，{friend}来问值不值得搬，你想了很久，没发夜景照片，而是发了公交路线和附近菜场的位置。晚上雨又下起来，你在窗边坐着，仍没有急着下结论。"
        }
      ],
      "astroThemes": [
        "outer-change",
        "home-base"
      ]
    },
    {
      "id": "neighborhood-familiar",
      "title": "楼下的人已经知道你要买什么",
      "dimension": "joy",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "joy": 4,
        "connection": 1,
        "freedom": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S16"
      ],
      "variants": [
        {
          "title": "他没问，就先替你装好了",
          "text": "你在{location}楼下买常吃的早餐，店员看见你就伸手拿了那个袋子，问今天还是不要多放酱吗。你愣了一下，说对，然后发现自己居然很高兴。前面还有两个人排队，你没有急着走，站到旁边等。{friend}发来新路线，说有家店很值得去，你回他说改天，今天已经买好了。上楼时袋子暖着手，电梯慢了很久，你居然也没怎么烦，只在进门前先咬了一口。"
        },
        {
          "title": "绕一条路只是想再看那只猫",
          "text": "最近走回{location}住处，你总会多绕半条街，看看修车店门口那只猫。今天椅子被它占着，店主蹲在旁边整理工具，抬头和你打了声招呼。你们还没聊过什么正经话，彼此却知道谁常在这个时间经过。{friend}来电话问你在哪，你说快到了，手却又伸出去摸了一下猫背。猫嫌烦地转过头，你笑着退开，买菜袋子里一根葱露在外面，叶子被你碰折了一点。"
        }
      ],
      "astroThemes": [
        "home-base",
        "self-recognition"
      ]
    },
    {
      "id": "paperwork-wait",
      "title": "手续卡在一句还在处理",
      "dimension": "freedom",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "freedom": -2,
        "energy": -2,
        "craft": 2
      },
      "addFlags": [
        "move_question"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S08",
        "S15"
      ],
      "variants": [
        {
          "title": "你带齐文件，还是少了一份复印件",
          "text": "为了下一段住处安排，你一早到{location}的办事点排队，文件按顺序放得很齐。轮到时对方说还少一份副本，你解释手机里有，对方仍然摇头。你深吸一口气，出去找复印店，路上觉得自己像白准备一场。{friend}发来球局合照，你看一眼又关掉。等第二次叫到号码已经过了午饭，对方只说会再通知。你把文件收回袋子，出门先找了家不排队的小店，坐下很久才想点什么。"
        },
        {
          "title": "你不能靠多刷一次就让它更快",
          "text": "住处相关的申请页面又显示处理中，你在{location}刷新了好几次，状态一点没变。原计划的出行还没敢订，行李箱半开着挡在门边。{friend}来问周末能否见面，你说可能要等消息，对方停了停，问那你今天就一直等吗。你有点不高兴，挂断后却把手机留在充电处，先出去买了菜。回来没有新通知，袋子里一盒蛋压碎了一颗，你叹口气，先拿出来做了。"
        }
      ],
      "astroThemes": [
        "outer-change",
        "home-base"
      ]
    },
    {
      "id": "language-small-win",
      "title": "那句话你这次没靠翻译说完",
      "dimension": "craft",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "craft": 3,
        "freedom": 2,
        "joy": 2,
        "energy": -2
      },
      "addFlags": [
        "language_practice"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S17",
        "S29"
      ],
      "variants": [
        {
          "title": "店员真的听懂了你的意思",
          "text": "在{location}买东西，你想问一种以前说不清的食材。翻译页面都已打开，最后还是抬头用新学的说法讲了一遍。店员停了半秒，伸手拿出你要的那袋，你差点笑得太明显。走出店门才发现自己忘记问价格，只好又回去说一次。{friend}收到你的语音，听见后半段全是风声，问到底买到了什么。你把照片发过去，说不重要，今天主要是自己讲出来了。"
        },
        {
          "title": "轮到你接话时，没有冷场",
          "text": "在{location}一次普通聚餐上，旁边的人问起你怎么做一道简单的菜。你平时会先把想说的话在手机里翻译一遍，今天手里正拿着碗，索性用有限的词慢慢比划。讲到煎蛋的那一步，大家笑起来，有个人把你的词改正，你也跟着重复了一遍。回去时{friend}问累不累，你说很累，却没觉得自己整晚都坐在话外。走到路口才想起有一句说错了，笑了笑，没有再回去补解释。"
        }
      ],
      "astroThemes": [
        "knowledge",
        "outer-change",
        "self-recognition"
      ]
    },
    {
      "id": "course-demand",
      "title": "老师的作业，比招生页写得难",
      "dimension": "craft",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "craft": 3,
        "energy": -3,
        "reserve": -2
      },
      "addFlags": [
        "course_question"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S03",
        "S24"
      ],
      "variants": [
        {
          "title": "第一周还没过，你已经欠两题",
          "text": "你在{location}报了一门很想学的课，报名时觉得每周几小时完全放得下。第一周作业发来，光弄懂题目就耗掉一个晚上。{friend}邀请你去球场，你回复作业没做完，接着又花半小时看别人交得多好。到了周末，第二份练习已经来了，你对着电脑越坐越烦。老师在群里问有没有卡住的地方，你几次打字又删掉，最后只发了第一题的截图，后面跟一句我从这里就没明白。"
        },
        {
          "title": "你把进度条拖回了第一节",
          "text": "新课讲到后半段，老师用的几个词你都听过，放在一起却完全跟不上。你在{location}反复回看视频，越想赶进度越烦，手边的练习一点没做。{friend}路过来借东西，看见你皱着脸，说不懂就慢一点。你本想回不是这么简单，最后却把进度条拖回第一节，从头照做。那天只完成一小题，作业群已经热闹到下一章，你关了通知，坐了一会儿才起身去开窗。"
        }
      ],
      "astroThemes": [
        "knowledge",
        "body-rhythm"
      ]
    },
    {
      "id": "weather-route",
      "title": "那场雨把整天计划都打乱了",
      "dimension": "joy",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "joy": 3,
        "energy": 2,
        "craft": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S17",
        "S29"
      ],
      "variants": [
        {
          "title": "你们在陌生屋檐下分一包饼干",
          "text": "原本想在{location}走很长一段路，才出门不久，雨就密得看不见远处。{friend}举着一把太小的伞，你们挤进杂货店屋檐，鞋尖都湿了。你先抱怨天气预报，阿远从包里找出半包饼干，问现在算不算野餐。你忍了两秒还是笑出来。等雨没有马上停，两人就沿着有遮挡的街道乱走，原来的目的地没到，倒在一家空店里喝到一杯很甜的热饮，谁也没再提步数。"
        },
        {
          "title": "临时走的小路，没有照片里漂亮",
          "text": "你在{location}准备骑一条看了很久的路线，出门发现风太大，只好改走街区里的短路。心里有点不甘，见到每个拐角都觉得不如原来那条。后来一阵香味从窗边飘来，你停下车，买到刚出炉的小点心。{friend}问怎么没到约好的看景处，你拍给他路边一张很普通的长椅。坐下来吃时糖掉在外套上，你拍了两下没拍干净，也懒得再管，慢慢等那阵风小一点。"
        }
      ],
      "astroThemes": [
        "outer-change",
        "body-rhythm"
      ]
    },
    {
      "id": "hometown-taste",
      "title": "一口熟悉的味道，让你话突然多了",
      "dimension": "joy",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "joy": 4,
        "energy": 1,
        "reserve": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S29"
      ],
      "variants": [
        {
          "title": "辣椒下锅，你想起家乡那条街",
          "text": "你在{location}买到一把很像家乡常吃的调料，回去试着做一碗面。油热时那股味道窜起来，你忽然想起小时候走过的一段路，却说不清是哪一年。{friend}来蹭饭，听你一边煮一边讲门口的小摊，笑说今天话怎么这么多。你尝了一口，发现还是差一点，又加了一小撮盐。阿远已经开始吃，你还站着想那一口到底差在哪，后来索性一起坐下，没再追着它调。"
        },
        {
          "title": "你买的不是最正宗的那一种",
          "text": "在{location}的市场，你看见一包熟悉名字的食材，明知道味道可能不同，还是拿了。回家做出来果然不完全像记忆里那样，你先嫌了一句不对，吃到一半却舍不得停。{friend}在视频里问哪家更好，你突然讲起小时候某次吃得很急的情形，日期已经模糊，碗的样子倒记得。说完两个人都安静了一会儿，你低头又夹一口，没有要求这顿饭把那时的味道完整还给你。"
        }
      ],
      "astroThemes": [
        "home-base",
        "self-recognition"
      ]
    },
    {
      "id": "long-trip-needs-base",
      "title": "你不想再从箱子里翻那件衣服了",
      "dimension": "energy",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "flagsAny": [
          "long_travel",
          "mobile_life"
        ]
      },
      "effects": {
        "energy": -4,
        "joy": -2,
        "freedom": 1
      },
      "addFlags": [
        "need_anchor"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S08",
        "S29",
        "S31"
      ],
      "variants": [
        {
          "title": "每个抽屉都还空着",
          "text": "又一处短住的屋子里，你在箱子最下面找一件衣服，翻到一半碰掉充电器，蹲下捡时忽然很烦。外面景色很好，楼下也有新店，但你今天一点不想出去探路。{friend}问那边怎么样，你说挺好，接着停了很久才补一句有点想在同一个地方多住几天。晚上洗完衣服，仍没有足够的衣架，你把衬衣搭在椅背上，坐到床边，看着旁边一直空着的抽屉。"
        },
        {
          "title": "你想念一条不用看地图的路",
          "text": "旅途中你本来最喜欢换地方，这周却在买早餐时第三次走错街口。拎着袋子回住处，你才发现昨晚想洗的衣服还闷在包里。{friend}发来他照常去的球场，照片很普通，你看了很久，羡慕的却是他知道结束以后去哪吃饭。下午原计划看下一站，你开了页面又关掉，先问房东能不能多住两周。等回复时你把衣服洗了，窗外很热闹，你没急着加入。"
        }
      ],
      "astroThemes": [
        "home-base",
        "body-rhythm",
        "outer-change"
      ]
    },
    {
      "id": "time-zone-friend",
      "title": "你刚想睡，阿远才说现在有空",
      "dimension": "connection",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "minPeople": 1
      },
      "effects": {
        "connection": 3,
        "joy": 2,
        "freedom": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S17"
      ],
      "variants": [
        {
          "title": "那段语音从白天等到了晚上",
          "text": "{friend}发来一段语音时，你正在{location}赶一段路，想着坐下再听。等到晚上终于安静，对方已经睡了，聊天框里只剩不同时间的几个问候。你把语音听完，发现他前面讲了一件挺难受的事，自己却只回过一个哈哈。手指放在通话键上很久，你还是没拨，认真录了一段回复。第二天醒来阿远只回了句听到了，你躺在床上读了一遍，才起身去开窗，没有再追问他怎么只说这几个字。"
        },
        {
          "title": "你们终于同时站在路边说了十分钟",
          "text": "你和{friend}约好通话，还是各自拖晚了一点。接通时你在{location}街角，他那边有球场的声音，两人都说不忙，其实都在往下一处走。你差点又聊工作，阿远却问你最近睡醒会先想什么。这个问题把你问住了，旁边的绿灯亮了又灭，你没有过街。最后没讲什么重要结论，只听他抱怨一双磨脚的鞋。挂断时路已经有点绕远，你把手机揣起来，慢慢走了回去。"
        }
      ],
      "astroThemes": [
        "peer-negotiation",
        "partnership"
      ]
    },
    {
      "id": "train-conversation",
      "title": "邻座的人先问你的包重不重",
      "dimension": "connection",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 7,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "connection": 3,
        "joy": 3,
        "energy": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S17"
      ],
      "peopleDelta": 1,
      "variants": [
        {
          "title": "聊了一路，临下车才问名字",
          "text": "车快开时，你费力把包往行李架推，旁边一位成年人伸手托了一下。坐稳以后你们从行李聊到各自走过的街，再聊到这趟为什么出门。你本来只想戴耳机，后来却把耳机一直攥在手里。经过一段没有信号的地方，对方讲的笑话刚好少半句，你们都笑了。临到站才想起互问称呼，又商量若以后经过{location}可以吃顿饭。下车后你站在站牌前找路，包还是很重，心情却不太一样。"
        },
        {
          "title": "他把那扇窗留给了你",
          "text": "去下一处地方的路上，邻座的人发现你总在看窗外，主动问要不要换座。你说不用，身体却已经往那边偏，最后两个人有点尴尬地挪了包。坐到窗边以后你们慢慢聊起来，对方并不关心你做什么大项目，只认真听你说一顿做坏的饭。到了{location}附近，车窗开始反光，你们交换了一个联系方式，没有约定一定再见。走出车站时手机亮起，是对方补发的那家小店地址，你回了一个谢谢。"
        }
      ],
      "astroThemes": [
        "outer-change",
        "peer-negotiation"
      ]
    },
    {
      "id": "housing-preference",
      "title": "看完房，你最记得的却是水槽",
      "dimension": "freedom",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "freedom": 3,
        "energy": 1,
        "reserve": -2
      },
      "addFlags": [
        "home_preferences"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S08"
      ],
      "variants": [
        {
          "title": "那间漂亮房子没有地方晾球衣",
          "text": "你在{location}看一间照片很漂亮的住处，窗外和客厅都让你心动。走到里面才发现厨房窄得转不开身，洗完的运动衣也不知道晾哪。带看的人很热情，说一个人住完全够，你笑着点头，心里却想起上次湿衣服一直不干的那几天。回去给{friend}看照片，阿远先夸景色，你只发了水槽和阳台。对方回你现在看房怎么像查设备，你没否认，继续把附近菜场的位置放大。"
        },
        {
          "title": "你开始在意楼下有没有普通饭吃",
          "text": "到了{location}一处备选住处，带看的人一直介绍装修，你的注意却落在门外：走回来的坡陡不陡，楼下晚上还开不开店，提菜回家要上几层楼。看完你没有马上说好，沿街走了二十分钟，在一家很小的店坐下。{friend}问房子如何，你说还想看看早晨是什么样。回去路上顺手记了公交站名，手机里那张最漂亮的客厅照反而没有再打开，你更惦记刚才那家店的汤。"
        }
      ],
      "astroThemes": [
        "home-base",
        "self-recognition"
      ]
    },
    {
      "id": "unplanned-afternoon",
      "title": "这个下午，你没有安排下一件事",
      "dimension": "joy",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1.15,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "joy": 4,
        "energy": 4,
        "craft": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S26",
        "S29"
      ],
      "variants": [
        {
          "title": "那家旧店里没有值得打卡的东西",
          "text": "你在{location}空出一个下午，出门时原想顺便看几处地方，走到一半却懒得再查路线。路边一家旧杂货店开着，你进去翻了翻杯子和很普通的明信片，什么也没买。{friend}问你在干什么，你拍了张难看的小摆件发过去，对方回了三个问号。你坐到门外长椅上，鞋带松了也先没系。天色慢慢变了，周围的人走了一轮，你才起身去找晚饭，没有觉得必须补一张更像旅行的照片。"
        },
        {
          "title": "你坐在河边把一杯水喝了很久",
          "text": "周末的{location}有点闷，你带着书出门，到了河边只翻两页就合上。旁边有人练一首总吹错的曲子，错到第三遍你已经记住，等他再错时忍不住笑了一下。手机上有新活动的邀请，你看过，没有立刻回。过了很久，{friend}打来问要不要找你，你说今天想自己待着。话说完有一点不安，阿远却只问那晚饭呢。你看一眼天色，说晚饭再说，水杯里还剩一半。"
        }
      ],
      "astroThemes": [
        "body-rhythm",
        "self-recognition"
      ]
    },
    {
      "id": "leaving-city",
      "title": "走之前，想再吃那碗普通的面",
      "dimension": "connection",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "flagsAny": [
          "moved_once",
          "long_travel",
          "mobile_life"
        ]
      },
      "effects": {
        "connection": -3,
        "joy": -2,
        "freedom": 2
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S15"
      ],
      "variants": [
        {
          "title": "这次告别没有把所有人约齐",
          "text": "准备离开{location}前，你想把认识的人都见一遍，最后却总有人时间对不上。{friend}说别把告别弄成赶场，你还是在一天里塞了好几顿饭。最后一晚只剩你们两个，在常去的小店随便点了两碗面。老板并不知道你快走了，照常问要不要加辣。你忽然说不出准备好的感慨，只和阿远一起埋头吃。散场时对方帮你把背包拉链拉好，问那本借你的书是不是还在里面，你这才想起没还。"
        },
        {
          "title": "路走熟了，你偏偏快要走了",
          "text": "离开{location}前两天，你沿常走的路买东西，终于不用看地图就找到那家小店。店员记得你的口味，笑着把袋子递过来，你差点顺口说周末再来。回去的路上{friend}问要不要一起去远一点看日落，你说算了，想就在附近走走。两人在几条普通街巷里绕了一圈，没拍多少照片。到路口该分开时你们聊起下次去哪见，谁也没有说准，绿灯亮起，两个人还多站了一会儿。"
        }
      ],
      "astroThemes": [
        "outer-change",
        "partnership",
        "home-base"
      ]
    },
    {
      "id": "team-newcomer",
      "title": "新来的队友把盘传到了你身后",
      "dimension": "connection",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "connection": 4,
        "joy": 2,
        "energy": -3
      },
      "addFlags": [
        "community_contact"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S23"
      ],
      "peopleDelta": 1,
      "variants": [
        {
          "title": "你本想接住，结果也摔了个空",
          "text": "{location}的草地上来了一位成年新队友，开场就把飞盘扔到你身后。你回头追了两步没接住，对方连声道歉，你摆手说没事，自己下一次却也传歪了。{friend}在旁边笑得很响，你假装要拿盘砸他。休息时大家坐在包旁边换鞋，才聊起新队友最近搬来，还不知道附近哪里能吃晚饭。你把常去那家店的位置发过去，对方说下次一起，语气还带着第一次入群的客气。"
        },
        {
          "title": "轮到你给不认识的人递一瓶水",
          "text": "球局刚结束，一个新面孔站在{location}球场边，不太知道该坐哪。你本来已经背包想走，看到他犹豫，又从袋里拿出一瓶没开的水递过去。聊了几句才知道对方也刚开始玩，最担心拖累别人。{friend}插话说你当年也没少扔丢，你立刻反驳没那么夸张，三个人都笑了。后来新队友问能否进群，你帮忙介绍了名字，阿远还在旁边讲你不愿承认的那次失误，越讲越离谱。"
        }
      ],
      "astroThemes": [
        "peer-negotiation",
        "body-rhythm"
      ]
    },
    {
      "id": "friend-misread",
      "title": "你以为他生气了，他以为你很忙",
      "dimension": "connection",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "minPeople": 1
      },
      "effects": {
        "connection": -2,
        "energy": -2,
        "craft": 1
      },
      "addFlags": [
        "communication_question"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S06",
        "S18"
      ],
      "variants": [
        {
          "title": "一个好字让你猜了一整天",
          "text": "你给{friend}发了一长段活动安排，对方只回一个好。你在{location}刷了几次聊天框，越看越觉得那一个字很冷，下午索性也不再找他。傍晚碰面，阿远却照常递来一瓶水，问你怎么今天不说话。你把手机亮给他，语气比想象中硬，对方愣了一下，说当时正拎着东西上车。空气尴尬了几秒，你们都笑得有点勉强，后来你问了一句那下次来不来，这回他认真答了完整一句。"
        },
        {
          "title": "你说改天，对方真的不再约了",
          "text": "连续两次邀约，你都给{friend}回改天。今天翻到一张他和别人出去玩的照片，你先有点酸，接着才发现所谓改天从来没被自己写成日期。你在{location}地铁上想发一句怎么不叫我，手指停住，换成问下周二能否吃饭。对方隔了很久才回可以，还说以为你最近不想见人。列车到站时，你差点坐过站，下车后站在旁边打完一段很短的解释，没有再用忙当作全部回答。"
        }
      ],
      "astroThemes": [
        "peer-negotiation",
        "partnership"
      ]
    },
    {
      "id": "friend-unavailable",
      "title": "阿远今晚不来，你已经买好了菜",
      "dimension": "connection",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "minPeople": 1
      },
      "effects": {
        "joy": -1,
        "freedom": 2,
        "connection": 1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S06"
      ],
      "variants": [
        {
          "title": "两个人的饭，最后装了两个盒子",
          "text": "你在{location}把菜都洗好了，{friend}忽然说今晚来不了。你回复没事，手机放下时却比平常用力一点。锅已经热了，你还是照原计划做完，盛饭才发现不必拿第二个碗。阿远后来打来电话解释，你听着听着有点不想装大方，承认自己确实挺失望。他道了歉，约了下次。挂断后你把多出来的饭装盒，尝了一口锅里的菜，居然刚好是这阵子做得最好的一回。"
        },
        {
          "title": "到门口才知道，他今天提前走了",
          "text": "你临时经过{location}常去的地方，想叫{friend}出来吃点东西，发消息才知道他已经去办自己的事。你有点扫兴，站在路边翻其他人的名字，谁也没拨。最后走进那家两个人常来的小店，老板问还是两份吗，你说今天一份。吃到一半阿远发来个很长的语音，你没急着听，先把面吃完。回去时晚风很舒服，你给他发了一张空碗，顺便抱怨今天那盘小菜比上次少了。"
        }
      ],
      "astroThemes": [
        "partnership",
        "body-rhythm"
      ]
    },
    {
      "id": "partner-honest-request",
      "title": "对方说，今晚能不能不要顺便工作",
      "dimension": "connection",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "flagsAll": [
          "partner_active"
        ]
      },
      "effects": {
        "connection": 3,
        "freedom": 1,
        "energy": -2
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S06",
        "S08"
      ],
      "variants": [
        {
          "title": "你把电脑合上，对方才开始讲",
          "text": "晚饭刚端上桌，{partnerName}看见你还在回复消息，说今晚能不能只吃饭。你差点说马上就好，抬头才发现对方已经等着没动筷子。合上电脑以后，饭桌一下很安静，你不太习惯，先问今天怎么样。对方讲的不是大事，只是一段有点烦的白天，你却有几次想插入解决办法。后来你忍住了，只把对方够不到的菜夹近一些。饭吃完，屏幕已经熄掉，你们还坐了一会儿。"
        },
        {
          "title": "被问到喜欢什么，你却答了都行",
          "text": "周末要怎么过，{partnerName}问了几次，你都说都行。今天对方把手机放下，说每次猜你想做什么其实很累。你先觉得委屈，明明自己一直配合，后来才发现对方想要的不是你勉强跟着。你在{location}楼下走了一圈，回来承认自己想有半天独处，晚上又想一起吃一顿好饭。说得这么具体让你有点难为情，对方却拿起日历开始找餐厅，问你到底想吃哪一种，不准再答随便。"
        }
      ],
      "astroThemes": [
        "partnership",
        "body-rhythm"
      ]
    },
    {
      "id": "partner-messages",
      "title": "一条没回的消息拖到了夜里",
      "dimension": "connection",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "flagsAll": [
          "partner_active"
        ]
      },
      "effects": {
        "energy": -3,
        "connection": 1,
        "freedom": -1
      },
      "addFlags": [
        "partner_communication"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S06",
        "S08"
      ],
      "variants": [
        {
          "title": "你说没看见，对方说这周第三次了",
          "text": "你在{location}忙完，才看到{partnerName}下午发来的消息。内容不紧急，你想明天再说，紧接着却看见一句是不是又不想理我。你先烦了，打出一长段自己今天多忙，读到一半又删掉。电话接通后，对方说等的不是长聊，只想知道你有看到。你听着有点羞，也有点不服，还是把明天能说话的时间讲清。挂断时问题没全解决，你们各自安静了一会儿，才补上一句晚安。"
        },
        {
          "title": "两个人都在等对方先问",
          "text": "晚饭时你和{partnerName}都没怎么说话。你觉得对方这几天有点冷，对方却说你每次回家都先看手机。筷子碰到碗沿的声音很明显，你想反驳自己并不是故意，后来改问哪一晚让人最难受。听见那个具体日期时，你想起自己当时确实只顾着赶一个回复。你道了歉，又说明有时不说话是在累，不是不想见。菜已经吃得差不多，两个人没有立刻和好，后来却一起把碗洗了。"
        }
      ],
      "astroThemes": [
        "partnership",
        "peer-negotiation"
      ],
      "followsEventIds": [
        "partner-honest-request"
      ]
    },
    {
      "id": "partner-two-cities",
      "title": "这一次见面，又只剩两天",
      "dimension": "connection",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "flagsAll": [
          "partner_active"
        ],
        "flagsAny": [
          "move_question",
          "portable_offer",
          "long_travel"
        ]
      },
      "effects": {
        "connection": -2,
        "energy": -3,
        "freedom": 1
      },
      "addFlags": [
        "partner_location"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S08",
        "S15"
      ],
      "variants": [
        {
          "title": "你们对着日历找不到同一个周末",
          "text": "你在{location}与{partnerName}视频，两边把日历举到镜头前，想找下一次见面的时间。你指的一周对方不行，对方空出来的那周你又想去别处。说到最后两人都有点烦，谁也不愿先说自己可以改。你瞥见对方身后晾着的衣服，忽然想起上次见面也只一起过了两顿饭。那晚没有订成票，屏幕暗下去以后，你还把自己的日历留在桌上，没像往常一样马上去看下一处目的地。"
        },
        {
          "title": "行李刚收好，对方问下次呢",
          "text": "这次见面快结束，{partnerName}替你把忘在椅背的衣服递过来，忽然问下次还是这样来两天就走吗。你说以后会好一点，自己也听出这句话已经说过。房间里有半开的箱子，大家都知道时间快到了，却没有人想先拉上拉链。你在{location}窗边坐下，认真问如果继续这样，对方最受不了什么。回答不是要你立刻搬来，只是想知道哪一天不再需要一遍遍猜。"
        }
      ],
      "astroThemes": [
        "partnership",
        "outer-change"
      ]
    },
    {
      "id": "relationship-invitation",
      "title": "一顿普通晚饭，聊到了下次约会",
      "dimension": "connection",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 0.7,
      "cooldown": 10,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "flagsNone": [
          "partner_active"
        ]
      },
      "effects": {
        "joy": 2,
        "connection": 1,
        "energy": -1
      },
      "addFlags": [
        "relationship_invitation"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S06",
        "S08"
      ],
      "variants": [
        {
          "title": "对方说这次不是想聊项目",
          "text": "最近常碰见的一位成年人约你在{location}吃晚饭。你以为还是聊各自忙的事，带上了本子，坐下却发现对方没有拿出电脑。吃到一半，那人说下次想只约你去散步，不谈工作。你听懂了，手里的杯子转了半圈，不知该先笑还是先认真回答。回去路上{friend}问饭吃得怎样，你打了很久字，最后只说有点意外。到家后那条问周末是否有空的消息还在等着，你看了两遍。"
        },
        {
          "title": "雨停了，你们还没叫车",
          "text": "活动结束后，原本同路的一位成年人陪你在{location}街边等雨停。话从一件小笑话聊到各自周末，对方忽然说和你单独待着挺舒服，想试着更认真地认识你。屋檐滴水的声音很清楚，你刚准备说自己最近很忙，又发现并不想马上把这扇门关上。雨早已小了，两人却都没有叫车。后来你说需要想一想，对方点头，把伞递过来一些，你们又站了一会儿。"
        }
      ],
      "astroThemes": [
        "partnership",
        "self-recognition"
      ]
    },
    {
      "id": "shared-home-friction",
      "title": "你们为一口没洗的锅说重了话",
      "dimension": "connection",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "flagsAll": [
          "partner_active",
          "cohabitation_chosen"
        ]
      },
      "effects": {
        "connection": -2,
        "energy": -2,
        "freedom": 1
      },
      "addFlags": [
        "home_coordination"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S06"
      ],
      "variants": [
        {
          "title": "你以为自己已经收拾过了",
          "text": "早上在{location}赶着出门，{partnerName}指着水槽里的锅问昨晚不是说你洗吗。你记得自己已经擦过桌子，第一句便说你怎么只看没做的。话出口，两个人都停了一下。门口鞋穿到一半，你站直又走回去，对方也说昨晚确实太累，不想再替你补一次。你们没在十分钟里讲清所有家务，先把锅泡上，约晚上一起重新排。出门时还带着一点别扭，对方仍提醒你钥匙在桌角。"
        },
        {
          "title": "另一双袜子又搭在了椅背上",
          "text": "你想在{location}安静坐一会儿，椅背却挂着{partnerName}刚洗的衣服。你搬开时语气很冲，对方说屋里能晾的地方本来就少。两个人为几件衣服争起来，你后来都记不清谁先提到上周的碗。安静下来以后，看到那张椅子其实被自己堆了好几天东西，你有点不好意思。晚些时候一起去买一个小架子，排队时谁都没说话，出门却不约而同拎住同一头，又松开其中一只手。"
        }
      ],
      "astroThemes": [
        "partnership",
        "home-base"
      ],
      "followsEventIds": [
        "partner-honest-request",
        "partner-messages"
      ]
    },
    {
      "id": "meal-for-friend",
      "title": "你只做了两道菜，他说正好",
      "dimension": "connection",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "minPeople": 1
      },
      "effects": {
        "connection": 3,
        "joy": 3,
        "energy": -2,
        "reserve": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S29"
      ],
      "variants": [
        {
          "title": "不摆盘也可以把人请上楼",
          "text": "{friend}临时来{location}办事，问能不能见一面。你打开冰箱，只有蛋、黄瓜和一点剩饭，差点说家里没准备。阿远却说这就够，你只好把桌上的杂物移到一边，炒了份很普通的饭。锅铲有点粘，饭粒蹦到灶台外，两个人一边清理一边笑。吃到一半他讲起近来的烦心事，你没有急着开电脑找办法，只把水倒满。最后那盘黄瓜没吃完，阿远坚持装一小盒带走。"
        },
        {
          "title": "他记得你上次那锅面太咸",
          "text": "你叫{friend}来{location}吃饭，开门第一句先警告今天不知道好不好吃。阿远进来就闻到香味，说只要别像上次那么咸。你立刻否认，边尝边偷偷少放一勺酱。两个人坐下时没什么特别话题，聊了球鞋、附近哪条路在修，还有谁总在群里发错表情。洗碗时你嫌他水开太大，他说你刚才盐放太少，你拿毛巾甩了他一下。门关上后厨房还乱着，你慢慢把最后两个碗洗完。"
        }
      ],
      "astroThemes": [
        "partnership",
        "home-base",
        "body-rhythm"
      ]
    },
    {
      "id": "specific-apology",
      "title": "那句没什么意思，还是伤到朋友了",
      "dimension": "connection",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "minPeople": 1
      },
      "effects": {
        "connection": 2,
        "energy": -2,
        "joy": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S05",
        "S06"
      ],
      "variants": [
        {
          "title": "你没在道歉后面再加但是",
          "text": "上次见面你当众拿{friend}的失误开玩笑，大家笑了，他却没接话。今天在{location}碰见，你本想装作什么也没有，看到阿远还是有点冷，便在散场后叫住他。你说那句话不该当别人面讲，说完差点补上自己原来没有恶意，最后把后半句咽了回去。他没马上说没事，只点了点头。两人走到路口，还是各自去坐车，你站在那里挥了下手，晚上没有再追问原谅了没有。"
        },
        {
          "title": "你终于说出自己刚才在嫉妒",
          "text": "{friend}讲一件最近很顺的事，你嘴上说恭喜，却紧跟一句哪有这么简单，把气氛弄凉了。回到{location}住处你越想越不舒服，先觉得自己只是在提醒，后来承认其实有点羡慕。第二天你打电话，不解释人生有多复杂，只说昨天自己说酸话了。阿远先笑，过一会儿又讲起顺利背后的烦心事。你听着没再急着找漏洞，通话结束时那句恭喜总算说得像真的。"
        }
      ],
      "astroThemes": [
        "peer-negotiation",
        "partnership"
      ]
    },
    {
      "id": "not-everyones-mentor",
      "title": "对方只想吃饭，你却讲了半小时",
      "dimension": "connection",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "minPeople": 1
      },
      "effects": {
        "connection": 3,
        "joy": 2,
        "craft": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S06",
        "S12"
      ],
      "variants": [
        {
          "title": "他把菜夹完了，你还在讲办法",
          "text": "你在{location}和{friend}吃饭，阿远随口提到最近有点犹豫，你立刻从头帮他分析。等你讲完第二种办法，他已经把碗里的菜吃光，表情有些无奈。你停下来问是不是不想听，对方说今晚其实只想抱怨两句。你脸热了一下，赶紧端杯水装作没事。后来他又讲同一件小烦恼，你几次想接话都忍住，最后只说听着确实烦。阿远笑了，说对，就是想听这句。"
        },
        {
          "title": "那张写满建议的纸没人拿走",
          "text": "活动后有人向你问个小问题，你在{location}的长椅旁讲得兴起，拿纸画了一整页。对方起初点头，后来一边看时间一边说要赶车，你还想补最后一点。{colleague}走来提醒，人才终于离开，那页纸却留在你手里。你有点失落，觉得自己的认真没被领情，又不好意思承认。回去时小岑问刚才有没有先问对方想听多久，你没说话，把纸对折，塞回包里，没再拍照发给那个人。"
        }
      ],
      "astroThemes": [
        "knowledge",
        "peer-negotiation"
      ]
    },
    {
      "id": "family-plan-details",
      "title": "真正谈起家庭，先遇到的是日历",
      "dimension": "connection",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "flagsAll": [
          "partner_active",
          "family_plan"
        ]
      },
      "effects": {
        "connection": 2,
        "energy": -3,
        "freedom": -1
      },
      "addFlags": [
        "family_conditions_seen"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S08",
        "S06"
      ],
      "variants": [
        {
          "title": "这一项没有谁可以顺便做完",
          "text": "你和{partnerName}已经说好认真了解另一种家庭可能，周末便约在{location}把日常写下来。起初都是听起来温暖的画面，写到时间、住处和各自愿意放下什么时，两人都慢了。你说可以再安排，对方问具体哪几个晚上，你一下没答出来。窗外有人带孩子经过，你们没有把那一幕当作答案。最后把还不知道的事圈起来，约定继续了解。出门买菜时两个人话不多，手里各拿着一份清单。"
        },
        {
          "title": "听完别人的一天，你们没马上表态",
          "text": "为了之前说过的家庭打算，你们向愿意分享的成年人询问普通一天怎么过。回到{location}，{partnerName}先问你听完是什么感觉，你说比想象中具体，也比想象中累，随即担心自己显得不够认真。对方也没有立刻说想或不想，两人坐在楼下慢慢谈了很久。最后并未做新决定，只把各自仍不确定的部分说出来。上楼时你提议今晚少做一道菜，对方说好，冰箱里现有的就够。"
        }
      ],
      "astroThemes": [
        "partnership",
        "home-base"
      ]
    },
    {
      "id": "frisbee-basic",
      "title": "那只盘飞过来，你晚了一步",
      "dimension": "energy",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 80,
      "prerequisites": {
        "minStats": {
          "energy": 25
        }
      },
      "effects": {
        "energy": -2,
        "joy": 4,
        "connection": 2
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S23"
      ],
      "variants": [
        {
          "title": "你还在嘴硬说风太大",
          "text": "{location}草地上，{friend}把盘传来，你起跑晚半拍，伸手只擦到边。阿远问要不要再来，你先说刚才风变了，对方笑着没拆穿。下一次你提前两步，还是接得有点狼狈，却终于把盘捧住。旁边有人鼓掌，你假装嫌他们夸张，脸上已经藏不住笑。散场换鞋时你发现袜子进了细碎草屑，一边往外抖一边重讲刚才那个接盘，阿远说知道了，今天已经听第三遍，你还想再补一句。"
        },
        {
          "title": "这局没赢，最后一传你们都记得",
          "text": "打到傍晚，你在{location}的球局里仍漏接好几次，越想补回来越紧张。最后一轮{friend}喊你名字，你没再急着冲，停一下，看清方向才出手。盘落进队友手里，对方回头向你举了下手，你整个人都轻快一点。比分最后没赢，你却在回去路上一直比划那一传。阿远故意问是不是这辈子最好一次，你笑着推了他一下，拎着球鞋跟在后面，外套拉链一路都没拉好。"
        }
      ],
      "astroThemes": [
        "body-rhythm",
        "self-recognition"
      ]
    },
    {
      "id": "training-overfull",
      "title": "球鞋穿上了，你却坐着不想动",
      "dimension": "energy",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 80,
      "prerequisites": {
        "maxStats": {
          "energy": 48
        }
      },
      "effects": {
        "energy": -3,
        "joy": -2
      },
      "addFlags": [
        "training_question"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S25"
      ],
      "variants": [
        {
          "title": "热身还没完，你就想回去睡一觉",
          "text": "晚上到了{location}球场，你坐在边上绑鞋带，比平时慢了很多。{friend}来叫你热身，你站起来跟了几步，腿很沉，心里却怕大家觉得自己找借口。前一晚睡得晚，白天又塞了很多事，你本想靠这一场让状态回来，结果连说话都不太有精神。阿远把水递给你，问要不要今天先少打。你嘴上说再看看，坐回包旁边时却长出一口气，听着场上的叫喊，半天没有重新站起来。"
        },
        {
          "title": "又给自己加练了一组，动作却更乱",
          "text": "你在{location}结束运动后，仍不满意今天的表现，决定再练一组。做到一半，动作已经比前面更乱，你有点恼，想再补一次证明不是做不到。{friend}收拾好东西等在门口，问到底几点走，你才发现自己连晚饭都往后拖了。水瓶空了，你拿起来又放下，最后和阿远一起去找吃的。路上你仍在讲刚才哪里没做好，对方听了几句，说先看路，前面红灯，你这才停住脚。"
        }
      ],
      "astroThemes": [
        "body-rhythm",
        "inner-standards"
      ],
      "followsEventIds": [
        "frisbee-basic",
        "climb-one-move"
      ]
    },
    {
      "id": "swim-ordinary",
      "title": "游完这几趟，今天就到这里",
      "dimension": "energy",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1.15,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "energy": 4,
        "joy": 3,
        "craft": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S21",
        "S23",
        "S29"
      ],
      "variants": [
        {
          "title": "你忘了数到第几趟",
          "text": "在{location}的泳池里，你原本想记清每一趟，游到一半却被旁边不齐的水花打断，怎么也想不起刚才算到几。你有点烦，停在边上扶住池壁，耳边只剩呼吸和水声。后来没重新从头数，照自己舒服的速度又游了一会儿。上岸后头发还在滴水，{friend}问今天多少米，你说不知道。阿远一脸惊讶，你倒先笑了，坐在长椅上慢慢擦头，之后的晚饭没有因为没数清就变难吃。"
        },
        {
          "title": "那天泳道里没有你要赢的人",
          "text": "你在{location}去游泳，旁边一位成年人比你快很多，每次从身边经过都让你忍不住加速。第二趟还勉强跟，第三趟已经只想停。你靠着池壁喘匀，看到对方也停下来调整泳镜，并没有看你一眼。再下水时你没追，慢慢游到另一端。更衣室里有人把拖鞋穿反，自己笑出声，你跟着笑了一下。回去的公交很空，头发半干，你给{friend}回了今晚不加局，想早点吃饭。"
        }
      ],
      "astroThemes": [
        "body-rhythm",
        "self-recognition"
      ]
    },
    {
      "id": "climb-one-move",
      "title": "那一步你试了五次，终于过去了",
      "dimension": "joy",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 80,
      "prerequisites": {
        "minStats": {
          "energy": 25
        }
      },
      "effects": {
        "joy": 4,
        "craft": 1,
        "energy": -2,
        "reserve": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S25"
      ],
      "variants": [
        {
          "title": "你还没下来，就先叫朋友看",
          "text": "你和{friend}到{location}的攀岩馆，在一条短线上卡在同一个动作。前几次你总急着往上够，手一滑就落回软垫，落地后嘴硬说刚才没准备好。阿远示范把脚挪一点，你不服，试了才发现真有差。第五次终于越过去，你还没下来就喊他看，对方举手说早看到了。坐在垫子边脱鞋时，脚趾被挤得有点酸，你仍在用手比划刚才那一下，直到旁边的人也忍不住笑。"
        },
        {
          "title": "别人轻松做到，你偏偏不服气",
          "text": "{location}的攀岩馆里，一位成年人轻松做过你刚失败的动作，你表面说厉害，心里却不太服。又试两次没成，你坐到垫边喝水，偷偷看对方把脚放在哪里。{friend}问要不要换条线，你说再一次。这回没有急着把自己拽上去，脚慢慢顶稳，手居然够到了。阿远在下面喊好，你落地后故意装得很平静，走到更衣处才露出笑，鞋还没穿好又把经过讲了一遍。"
        }
      ],
      "astroThemes": [
        "body-rhythm",
        "self-recognition"
      ]
    },
    {
      "id": "egg-morning",
      "title": "今天这个蛋，一半焦脆一半流心",
      "dimension": "joy",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1.2,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "joy": 4,
        "energy": 3,
        "reserve": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S28"
      ],
      "variants": [
        {
          "title": "胡椒撒多了一点，你还是很满意",
          "text": "在{location}的一个普通早晨，你热锅时没急着看手机，先等油面微微晃动，再把蛋打进去。边缘很快卷出一点焦色，蛋黄还软着，你夹两片黄瓜，撒盐时手抖了一下，胡椒也下得多。第一口有点呛，你自己笑了，还是拍给{friend}看。阿远回你这次终于没糊，你立刻纠正边缘就是要这样。吃完盘底剩一点流动的蛋黄，你拿最后一口面包抹干净，手机还靠在调料罐旁边。"
        },
        {
          "title": "这次你没为拍照再煎第二个",
          "text": "早上你在{location}想煎一个漂亮的蛋，打下去时蛋白却偏到锅边，形状像歪掉的小岛。以前你可能会重来，今天冰箱只剩两颗，手已经去拿第二颗，又放回去。边上慢慢变脆，蛋黄正好还流动，你趁热盛出来配黄瓜吃。{friend}发来消息问醒没醒，你拍下吃到一半的盘子，对方说看着不错。你本想解释原本不是这个形状，最后只回了一句是挺好吃，又去添了一小撮胡椒。"
        }
      ],
      "astroThemes": [
        "body-rhythm",
        "home-base",
        "self-recognition"
      ]
    },
    {
      "id": "cooking-too-much",
      "title": "菜端齐了，你累得不想坐下吃",
      "dimension": "joy",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "minPeople": 1
      },
      "effects": {
        "energy": -3,
        "joy": 2,
        "connection": 1
      },
      "addFlags": [
        "ordinary_day_question"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S29"
      ],
      "variants": [
        {
          "title": "第五道菜炒好，第一道已经凉了",
          "text": "你叫{friend}来{location}吃饭，本来只想做两道，买菜时却越买越多，最后同时开了几个锅。阿远到时你还在找漏掉的调料，听他在客厅说不用急，反而更想快一点。第五道菜上桌，最早那盘已经凉了，你坐下才发觉背上全是汗。对方夸好吃，你却只想先喝水。吃完阿远要洗碗，你照例说不用，话说半截又改成那你洗锅吧，自己搬把椅子坐在旁边。"
        },
        {
          "title": "他问能不能点个外卖，你差点生气",
          "text": "周末你在{location}准备试一道步骤很多的菜，{friend}来了以后等了很久，小心问要不要先点点吃的。你先觉得自己忙半天不被领情，语气有点硬。阿远看出不对，说只是饿了，不是不喜欢你做饭。你尝了一口才发现火候还要很久，最后两个人先分了一份楼下买的东西。新菜做好已经很晚，味道倒不错，你吃两口就饱了，余下装盒时心里又好笑又有点不甘。"
        }
      ],
      "astroThemes": [
        "body-rhythm",
        "partnership",
        "home-base"
      ]
    },
    {
      "id": "game-has-ending",
      "title": "你把游戏打完了，没急着开始下一局",
      "dimension": "joy",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "joy": 4,
        "energy": 2,
        "craft": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S26"
      ],
      "variants": [
        {
          "title": "片尾字幕走完，你还坐在那里",
          "text": "在{location}一个没出门的晚上，你终于打完那款拖了很久的游戏。最后一段音乐响起，你把手柄放到腿上，没有马上跳过字幕。{friend}在群里问学到了什么，你打出一段认真解释，想想又删了，只说好玩。阿远回了个笑脸。电视暗下来以后你才发现窗外已经没多少灯，伸了个懒腰，去厨房倒水。睡前把手柄放回原处，没有为今晚没有完成别的事再补一个新的待办。"
        },
        {
          "title": "输了那一关，你们笑了很久",
          "text": "你和{friend}在{location}联机，本来想很认真地过一关，结果两个人配合得乱七八糟。阿远冲错方向，你还在抱怨，下一秒自己先掉下去，耳机里笑声几乎盖住游戏。重来几次总算过去，谁也不记得原先说好只玩半小时。结束前你看了眼时间，虽然晚了点，心情却很好。阿远说再来一关，你很想答应，最后说下次，退出来后耳边还像留着那阵笑，倒没有立刻点开工作消息。"
        }
      ],
      "astroThemes": [
        "self-recognition",
        "body-rhythm"
      ]
    },
    {
      "id": "book-beyond-feed",
      "title": "那本借来的书，你终于翻过了第一页",
      "dimension": "craft",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "craft": 2,
        "joy": 3,
        "energy": 2,
        "freedom": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S12",
        "S24"
      ],
      "variants": [
        {
          "title": "页角那行话让你停了很久",
          "text": "你在{location}找个不太吵的地方读一本借来的书，开头几页很慢，手已经想摸手机。翻到一个与你习惯不同的说法，你先在心里反驳，又回去把前文重读一遍。旁边有人拉椅子，声音很响，你却没像刚来时那样被每个动静带走。{friend}问书怎么样，你只发去一行自己的笔记，没有把没读完的部分也装作懂。回去前夹好书签，才发现一个下午只读了十几页，包合上时倒舍不得离开。"
        },
        {
          "title": "这次没有把目录拍完就算读过",
          "text": "在{location}的图书馆，你拿起一本一直想读的书，先拍了封面，正想顺手发给{friend}，又把手机塞回包。第一章并没有期待中好读，有几处看不懂，你用一张小纸条记下，没急着再搜别人的总结。坐到旁边的人换了一轮，你才读完一段。阿远后来问今天去哪了，你说读了会儿书，没讲自己准备从此养成什么习惯。出门时台阶有点滑，你扶着栏杆慢慢走，书签还夹在那道没弄明白的问题旁。"
        }
      ],
      "astroThemes": [
        "knowledge",
        "inner-standards"
      ]
    },
    {
      "id": "cycling-neighborhood",
      "title": "绕了两条街，风把脸吹清醒了",
      "dimension": "energy",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "energy": 3,
        "joy": 3,
        "craft": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S13",
        "S26"
      ],
      "variants": [
        {
          "title": "你今天没打开计速页面",
          "text": "晚饭前你在{location}借辆车，只打算沿附近街道骑一小段。到了熟悉路口，习惯性想开计速，又觉得只是出来透气，便把手机留在兜里。路边小店飘出烤东西的味道，你停下买了一份，站在车旁慢慢吃。{friend}问骑到哪了，你拍了张旁边修路的围挡，阿远笑说真会选景。回去时有一段缓坡，踩得有点累，你下车推了一会儿，鞋底擦过地面，手里的点心袋还热着。"
        },
        {
          "title": "你们为买哪家小吃偏离了路线",
          "text": "你和{friend}在{location}骑街区短路，原本说好不吃东西，经过一家小摊两个人却都放慢。阿远先说停一下，你假装是陪他，把车推到路边，点的反而更多。吃完又沿另一条街走，路线早和出门时不一样，遇到台阶还得拎一下车。回到起点，谁也没算骑了多远，只在比较哪份更好吃。阿远准备拍你手上的油渍，你赶紧躲了一下，车铃被碰响，引来旁边一个人的回头。"
        }
      ],
      "astroThemes": [
        "body-rhythm",
        "home-base"
      ]
    },
    {
      "id": "alone-without-audience",
      "title": "你一个人坐着，没有告诉任何人",
      "dimension": "freedom",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "freedom": 3,
        "energy": 3,
        "joy": 2,
        "connection": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S09",
        "S31"
      ],
      "variants": [
        {
          "title": "照片拍好了，你没有发出去",
          "text": "下午在{location}遇见一片很好看的光，你拿手机拍下，已经点开分享，又突然不想写那段配文。周围没人认识你，一张长椅刚好空着，你坐下看了会儿来往的人。有人抱着花走过，有人鞋跟卡了一下，你忍不住笑，又怕对方看见。{friend}发来消息问晚上在哪，你回住处再说，没附刚拍的图。天色暗一点以后你才起身，照片仍存在相册，不配文也没觉得它少了什么。"
        },
        {
          "title": "你没有把今天讲成一个好故事",
          "text": "你在{location}闲逛半天，碰到的都是小事：店没开，拐错路，买了一份不太好吃的点心。{friend}来电话问过得怎样，你说还行，没有为了显得丰富编出一连串见闻。阿远讲他今天也没什么特别，你们便安静走了几分钟，只听到各自那边的街声。挂断以后你进一家小超市买水，排队时看前面的人慢慢找零钱，没有再去查附近还有什么非看不可。出门点心还剩一半，你又吃了一口。"
        }
      ],
      "astroThemes": [
        "self-recognition",
        "inner-standards"
      ]
    },
    {
      "id": "portable-routine",
      "title": "新住处的早晨，你终于知道先做什么",
      "dimension": "energy",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "flagsAny": [
          "moved_once",
          "long_travel",
          "mobile_life"
        ]
      },
      "effects": {
        "energy": 3,
        "joy": 3,
        "reserve": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S02",
        "S08",
        "S29"
      ],
      "variants": [
        {
          "title": "那把小刀又放回惯用的位置",
          "text": "在{location}换过住处以后，你终于把常用的几样东西摆顺手：水杯在桌边，做饭的小刀不再藏在箱底，球鞋留在门旁。早晨醒来没有先找充电器，伸手就拿到，心里很舒服。{friend}视频时笑你背景看着跟上个地方差不多，你指给他看窗外完全不同的街。挂断后你切黄瓜，第一片有点厚，没再调整第二遍。出门买早餐时你已经知道过哪一个路口，还顺手替后面的人扶住了门。"
        },
        {
          "title": "衣服洗完，这回有地方晾",
          "text": "搬到{location}一阵以后，你第一次在同一天把菜买好、衣服洗完，还按时出门走了走。事情小得没什么值得宣布，晚上{friend}问你最近怎样，你却忍不住从洗衣架开始讲。阿远听得笑，说这有什么好得意，你也笑，但那种不用不断翻箱找东西的舒服是真的。夜里你把第二天要用的小本放到门口，开着的箱子终于合上，不再横在床边。窗外有人说话，你没去分辨，关灯躺下了。"
        }
      ],
      "astroThemes": [
        "home-base",
        "body-rhythm",
        "outer-change"
      ]
    },
    {
      "id": "leisure-guilt",
      "title": "你人坐在球场边，心还在待办里",
      "dimension": "joy",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "minStats": {
          "craft": 35
        }
      },
      "effects": {
        "joy": -2,
        "energy": 2,
        "freedom": 2
      },
      "addFlags": [
        "ordinary_day_question"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S09",
        "S26"
      ],
      "variants": [
        {
          "title": "笑到一半，你又伸手看消息",
          "text": "周末在{location}和{friend}看别人打球，你明明觉得很有意思，还是隔几分钟就摸手机。阿远问等什么急事，你说没有，手机却没放下。那几条没做完的事在脑里轮着出现，连笑一声都像偷来的。后来有人一记好传，大家站起来喊，你跟着拍手，忘了看屏幕好一会儿。坐回去时消息还是原来的几条，你没立刻补回那十几分钟，只把手机翻了面，等下一轮开场。"
        },
        {
          "title": "游戏开了，你却不肯开始玩",
          "text": "晚上你在{location}打开游戏，手柄已经握住，又想到还有一项小事没做完。于是退出去处理，处理一半又想起另一项，等抬头已经过了一个多小时。{friend}在语音里等得不耐烦，问到底玩不玩。你有点恼，说别催，随即也听见自己很像在找借口。后来你把电脑盖上，终于进了房间，第一局紧张得操作失误，阿远笑你手生，你没辩解，先认真打完这一局。"
        }
      ],
      "astroThemes": [
        "inner-standards",
        "body-rhythm",
        "self-recognition"
      ]
    },
    {
      "id": "two-accounts",
      "title": "旧本上的那个你，话说得太满了",
      "dimension": "craft",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 45,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "craft": 3,
        "joy": 1,
        "energy": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S12",
        "S16",
        "S02"
      ],
      "variants": [
        {
          "title": "你看着当年的豪言笑了一下",
          "text": "在{location}整理旧本子，{age}岁的你读到年轻时一段写得很满的话，几乎把所有不确定都说成很快能解决。你先笑了，又有点想替那时的自己辩护。{friend}在旁边问读到什么，你只念了一句，阿远立刻说这很像你。你作势把本子合上，过一会儿又翻回那页，在空白处写下后来真正发生的细节，没有把旧话涂掉。晚饭前两个人还为其中一个日期争了一阵，谁也不记得特别准。"
        },
        {
          "title": "同一件事，后来记得已经不同",
          "text": "你在{location}翻到两次写同一件往事的记录，隔了几年，语气和重点像两个人。年轻时那份一直在证明自己做得对，后来那份却记着一个当时没在意的朋友。你坐在地板上读了很久，顺手给{friend}发去一处不涉及别人的节选。阿远回你以前真啰嗦，你有点不服，还是笑了。收起本子时你没把两份合成一个最准确的版本，夹了一张小纸条，提醒自己以后再看哪几行。"
        }
      ],
      "astroThemes": [
        "self-recognition",
        "legacy"
      ]
    },
    {
      "id": "work-new-reader",
      "title": "一个没见过你的人，真的用了旧作品",
      "dimension": "craft",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 40,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active",
          "completed"
        ]
      },
      "effects": {
        "craft": 4,
        "joy": 2,
        "energy": -1
      },
      "addFlags": [
        "work_travels"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S07",
        "S10"
      ],
      "variants": [
        {
          "title": "对方并不知道你当年有多费劲",
          "text": "一位没见过你的使用者写来，说在用{project}时解决了一件很小的事，还附了操作截图。你在{location}把消息放大，看见其中一处已经和自己当年设想的不同。你很想讲那时怎么反复改，打了一段又删掉，最后只问现在用着哪里不顺。对方回得很具体，完全没有打听作者经历的意思。你先有一点失落，后来又把截图发给{colleague}，两个人为那个早就争过的按钮重新笑了一次。"
        },
        {
          "title": "那句谢谢来得比你想的晚",
          "text": "在{location}一个寻常下午，你收到关于{project}的简短来信。对方说已经用了些时日，今天刚好想到应该道声谢。没有夸你聪明，也没提影响多大，只讲一个原本麻烦的小步骤现在省了。你看完默默坐了一会儿，才去找当时的版本，文件名乱得自己都费劲。{colleague}收到转发，回了一句还在用啊。你点头似的对着屏幕笑，后来下楼买菜，走过熟悉路口才想起自己还没给来信的人回复。"
        }
      ],
      "astroThemes": [
        "craft-iteration",
        "legacy",
        "self-recognition"
      ]
    },
    {
      "id": "author-legend",
      "title": "别人介绍你时，讲成了另一个人",
      "dimension": "freedom",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 45,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "freedom": 3,
        "energy": -2,
        "connection": -1
      },
      "addFlags": [
        "author_boundary"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S12",
        "S16"
      ],
      "variants": [
        {
          "title": "那段励志介绍听得你想挠头",
          "text": "在{location}一个小活动上，主持人用很漂亮的话介绍你，把几段经历串成一路很坚定的样子。你在旁边听着，想起当时明明犹豫得很厉害，鞋里的脚趾不由蜷了一下。轮到你说话，你没有逐句纠正，只先讲那次自己没做成的部分。场面安静几秒，随后有人笑了，说这倒更听得懂。散场后{friend}发消息说介绍写得真威风，你回他别笑，自己都差点认不出来。"
        },
        {
          "title": "你没有接下那个总能想清楚的称呼",
          "text": "有人把一段记录转给你，说大家都觉得你是那种很知道自己想要什么的人。你在{location}等车，看到这句话先有点受用，接着想起前晚还为一件小事翻来覆去。回信写到一半，你把那段体面的解释删了，只说也常不知道，下次可以讲具体哪回。车来了，你上去站在门边，手机里又多一条追问。你没有急着扮演那个永远有答案的人，先把包带从肩上换到另一边。"
        }
      ],
      "astroThemes": [
        "public-role",
        "self-recognition"
      ]
    },
    {
      "id": "missing-original",
      "title": "那份旧文件，你怎么也找不到了",
      "dimension": "craft",
      "type": "friction",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 50,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "craft": 3,
        "energy": -3,
        "joy": -1
      },
      "addFlags": [
        "archive_gap"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S12",
        "S02"
      ],
      "variants": [
        {
          "title": "备份文件夹里又套了五层备份",
          "text": "你在{location}想找一份多年前的原稿，先后打开几个叫最终版的文件夹，里面还套着新的旧备份。照片能预览，真正想看的文字却不见了。你越找越烦，把抽屉也翻开，最后连自己找什么都差点忘掉。{friend}打电话来时，你正坐在地板上对着一堆旧线，语气很冲。阿远听完说先别扔，你把那只空盒踢回脚边，又一根根把线理好。那天没找着，地上倒终于能走路了。"
        },
        {
          "title": "他记得的那句话，你已经想不起来",
          "text": "{friend}说起你以前写过的一句话，想让你把原文找给他。你在{location}翻了一晚上，只找到几张模糊照片，其中一页刚好折住关键几行。你起初很确定记得是什么，重写一遍又觉得不对，只好给阿远发去找不到的实话。对方说没关系，自己也可能记错了。你没有因此把一份新文字说成原稿，先把找到的日期和照片放到一起。睡前抽屉还开着，你又瞥了一眼，没有再伸手翻。"
        }
      ],
      "astroThemes": [
        "legacy",
        "inner-standards"
      ]
    },
    {
      "id": "another-method",
      "title": "对方没用你的办法，也做成了",
      "dimension": "craft",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 45,
      "maxAge": 100,
      "prerequisites": {
        "minPeople": 1
      },
      "effects": {
        "craft": 3,
        "freedom": 2,
        "joy": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S07",
        "S06"
      ],
      "variants": [
        {
          "title": "你写的批注，后来一条也没发",
          "text": "{colleague}拿来一件新做的东西，你在{location}看了一会儿，心里已经列出不少和自己习惯不同的地方。刚想开口，对方先演示给你看，实际用起来居然顺得很。你仍觉得某处可以更漂亮，打好一条批注，迟迟没有发送。小岑问是不是哪里不对，你说没什么，后来又补一句想听听为什么这样安排。对方讲得很起劲，你一边听一边把那条批注删了，手指在触控板上停了一下。"
        },
        {
          "title": "这回你没说当年不是这么做的",
          "text": "在{location}一起做一件小事时，{colleague}用了一个你从前不会选的办法。你开口差点就是当年，忍住以后才发现对方现在遇到的问题确实不同。做完两人试一遍，有一处甚至比你想的省事。你先不太情愿地承认还行，看到小岑憋着笑，又改口说确实挺好。收工后你把那个新办法记进本子，字写歪了，旁边还是旧方法留下的几行。小岑问要不要换一页，你说不用，就在这里。"
        }
      ],
      "astroThemes": [
        "knowledge",
        "peer-negotiation",
        "legacy"
      ]
    },
    {
      "id": "teach-concrete",
      "title": "来请教的人，把坏掉的那一步拿来了",
      "dimension": "connection",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 50,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "connection": 4,
        "craft": 2,
        "energy": -3
      },
      "addFlags": [
        "teaching_offer"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S06",
        "S12"
      ],
      "variants": [
        {
          "title": "他不想先听一个大方向",
          "text": "一位成年学习者在{location}活动结束后留下，打开自己的作品，让你看一处总做不好的地方。你照例想先问目标和计划，对方小声说今晚只想知道这里怎么改。你有点尴尬，往旁边挪了把椅子，一起看那几个具体动作。对方试过一次，仍没成，你也得停下来重新想。最后只解决一小半，离开前那人问能不能再约一次，你没有马上答应，先问下一次准备自己试到哪一步。"
        },
        {
          "title": "你终于看见他到底卡在哪",
          "text": "有人带着一份写得很整齐的问题来找你，你在{location}读完，几乎想直接给建议。可对方真的打开东西做了一遍，你才发现困难根本不在提问写的那处。你们趴在屏幕边一起试了好几次，旁边的人都慢慢走空，保洁推着车经过。最后那一步做通，对方高兴得拍了一下桌子，吓得你也笑起来。收拾时他又问以后能否常来，你摸出日历，先找自己确实能空出的那一天。"
        }
      ],
      "astroThemes": [
        "knowledge",
        "legacy"
      ]
    },
    {
      "id": "later-new-street",
      "title": "你在新街口，误把陶艺店当成餐馆",
      "dimension": "joy",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 55,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "joy": 4,
        "craft": 2,
        "energy": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S17",
        "S26",
        "S29"
      ],
      "variants": [
        {
          "title": "门推开了，你也不好意思马上走",
          "text": "在{location}散步，你看见一扇暖亮的门，以为里面能吃点东西，推开才发现大家都在捏陶土。你有点尴尬，连声说走错了，老师却让你先坐着看看。旁边一位成年学员的碗塌了一边，大家笑起来，你也忍不住凑近。{friend}打来电话问还走不走，你说等十分钟。后来出门时没带吃的，倒带走一张无图案的课程时间表，阿远看见便笑你出门找饭怎么又找到一门课。"
        },
        {
          "title": "你在橱窗前看了好几次那个歪杯子",
          "text": "走到{location}一条不熟的街，你被橱窗里一只歪杯子逗笑，以为是店家故意做的。进去问才知道那是学员的第一次作品，旁边每只都各有一点毛病。老师说可以来试一堂，你先摆手说自己手不巧，又没立刻离开。{friend}在门外等你，隔着玻璃朝那杯子指了指，问哪个像你。你瞪了他一眼，出来以后却把体验时间记进手机，晚上喝水时还想起那条歪斜的杯沿。"
        }
      ],
      "astroThemes": [
        "outer-change",
        "knowledge",
        "body-rhythm"
      ]
    },
    {
      "id": "later-beginner",
      "title": "第一只杯子歪了，你却有点舍不得扔",
      "dimension": "joy",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 55,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "joy": 4,
        "craft": 2,
        "reserve": -2,
        "energy": -1
      },
      "addFlags": [
        "late_new_interest"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S24",
        "S25",
        "S26"
      ],
      "variants": [
        {
          "title": "旁边的人已经会了，你还在揉泥",
          "text": "你在{location}试一堂陶艺课，老师说先把泥揉匀，你照做很久，旁边的人已经开始塑形。你有些急，手上加劲反而把泥甩到袖口，刚想说可能不适合，旁边一位成年学员递来毛巾，说自己上周也这样。你看了眼对方整齐的作品，又看手里这一团，最后坐回去慢慢揉。下课时只做出一个歪杯，{friend}看照片笑了半天，你嘴上嫌弃，还是认真问老师烧出来会不会再歪一点。"
        },
        {
          "title": "老师叫你从头再来，你没站起来走",
          "text": "陶艺体验课上，你做的杯壁一边厚一边薄，放到桌面上就歪。老师没有夸有个性，而是让你先拆开重来。你在{location}的教室里盯着那团泥，有一点不服，也舍不得刚花掉的时间。过一会儿你还是把它揉回去，第二次做得更小，却终于站稳。下课时有人问要不要报名新一轮，你擦着手没有马上回答，先把杯子轻轻转了半圈，那个小小的缺口正好朝向自己。"
        }
      ],
      "astroThemes": [
        "knowledge",
        "self-recognition",
        "body-rhythm"
      ]
    },
    {
      "id": "new-editor",
      "title": "小岑想把旧作品里那一页重做",
      "dimension": "craft",
      "type": "opportunity",
      "kind": "simulation",
      "baseWeight": 1,
      "cooldown": 5,
      "minAge": 55,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active",
          "completed"
        ],
        "minPeople": 1
      },
      "effects": {
        "craft": 3,
        "freedom": 3,
        "energy": 1,
        "joy": -1
      },
      "addFlags": [
        "continuation_offer"
      ],
      "removeFlags": [],
      "sourceIds": [
        "S07",
        "S12"
      ],
      "variants": [
        {
          "title": "你最喜欢的那段，被他画了圈",
          "text": "{colleague}拿着{project}来{location}找你，说想接着改一改。你原本高兴，看到他圈出的正是自己最喜欢的一段，笑容又停了。小岑没有说旧版不好，只把现在的人怎么用演示一遍。你听着仍不甘心，指着一处讲当年为什么这么做，对方认真听完，又问那今天呢。窗外有人收摊，你们说话声音慢下来。离开前你没有承诺马上交出去，只请他把想改的几处留下，那份文件晚上一直开在桌面。"
        },
        {
          "title": "他问能不能不按你的顺序来",
          "text": "在{location}一次见面中，{colleague}提出愿意接着维护{project}，但想用自己的顺序重新整理。你嘴上说当然可以，听到具体改法又忍不住一句句补充，直到小岑笑着问那到底能不能真改。你也笑了，有点被戳穿的难堪。后来两人各拿一支笔，把必须保留和可以重做的地方分别记下。散场时对方说不急，等你想清楚，你把笔收好，却特意把那张写着新顺序的纸留在了手边。"
        }
      ],
      "astroThemes": [
        "legacy",
        "craft-iteration",
        "peer-negotiation"
      ]
    },
    {
      "id": "ordinary-day-late",
      "title": "今天的汤做咸了，朋友倒喝得很认真",
      "dimension": "joy",
      "type": "daily",
      "kind": "simulation",
      "baseWeight": 1.1,
      "cooldown": 5,
      "minAge": 65,
      "maxAge": 100,
      "prerequisites": {},
      "effects": {
        "joy": 4,
        "energy": 3,
        "craft": -1
      },
      "addFlags": [],
      "removeFlags": [],
      "sourceIds": [
        "S26",
        "S02"
      ],
      "variants": [
        {
          "title": "他临时来不了，你还是把汤煮完了",
          "text": "在{location}一个平常下午，你想试着煮点汤，给{friend}发消息要不要过来。阿远临时有事，你说好，还是照原计划把锅架上。尝味道时盐多了，添水又淡，只好边小声嫌自己边继续弄。最后盛出来卖相一般，你拍给他，写别羡慕，今天做坏了。对方回你看着挺好，还问明天能不能留一点。你把余下装盒，贴上自己认得的记号，吃完慢慢洗锅，水声把窗外的话音盖住了。"
        },
        {
          "title": "你为一只杯子换了半天位置",
          "text": "今天在{location}没什么特别安排，你把书架旁一只旧杯子拿出来，想找个更顺手的位置。移开两本书，看见夹在里面的一张旧票，日期很久远，那趟路倒突然想起来。{friend}来电时你讲起其中一件糗事，阿远记得的版本与你不同，两人争了一会儿都笑了。挂断以后杯子还在手里，你最后放回原处，觉得也没那么不顺手。晚些时候出门买菜，临到楼下才发现清单忘在桌上，便按记得的买了几样。"
        }
      ],
      "astroThemes": [
        "body-rhythm",
        "home-base",
        "self-recognition"
      ]
    }
  ],
  "decisions": [
    {
      "id": "choose-work-container",
      "title": "那封入职邀请要在周五前回复",
      "prompt": "周二晚上，你在{location}把邀请邮件看了三遍。对方愿意让你带一个新产品，但要求每周四天到岗。{friend}发来球局时间，你还没回；另一边，自己的作品也等着修。",
      "dimension": "freedom",
      "kind": "simulation",
      "cooldown": 9,
      "minAge": 27,
      "maxAge": 85,
      "prerequisites": {
        "flagsAny": [
          "company_offer",
          "role_reorg"
        ]
      },
      "sourceIds": [
        "S04",
        "S06",
        "S15"
      ],
      "triggerEventIds": [
        "company-invitation",
        "role-reorganization"
      ],
      "options": [
        {
          "id": "join",
          "label": "去见团队，谈定后入职",
          "description": "约负责人面谈，把负责事项写进录用约定。 未来三个月，每周四天到岗。 自己的产品只能放到晚间，周中飞盘会少去。",
          "effects": {
            "reserve": 6,
            "craft": 3,
            "freedom": -6,
            "energy": -3
          },
          "outcome": "你把录用约定夹进本子。第一天有人领你找座位，电脑开机时，你忽然有点想念独自安排上午的日子。",
          "set": {
            "vocation": "组织中的产品角色",
            "projectName": "新团队的AI助手",
            "projectStatus": "active"
          },
          "addFlags": [
            "employee_path"
          ],
          "removeFlags": [
            "company_offer",
            "role_reorg",
            "independent_path",
            "founder_path",
            "company_formed"
          ],
          "action": "约负责人面谈，把负责事项写进录用约定。",
          "time": "未来三个月，每周四天到岗。",
          "people": "你要和新同事重新磨合；小岑不再随时等你回复。",
          "cost": "自己的产品只能放到晚间，周中飞盘会少去。"
        },
        {
          "id": "stay",
          "label": "先不换，照现在的节奏过两个月",
          "description": "回邮件婉拒这轮邀约，把接下来两个月想做的事重新排好。 两个月后再检查去留。 这次职位不会一直留着，眼下的不满还得自己处理。",
          "effects": {
            "craft": 5,
            "reserve": 2,
            "freedom": -2,
            "joy": -2
          },
          "outcome": "邮件发出后，你没有立刻轻松。第二天早上日程仍由自己排，你把想了很久却没去做的一件小事写在最前面。",
          "removeFlags": [
            "company_offer",
            "role_reorg"
          ],
          "action": "回邮件婉拒这轮邀约，把接下来两个月想做的事重新排好。",
          "time": "两个月后再检查去留。",
          "people": "给邀请人明确答复，不让对方一直留着位置。",
          "cost": "这次职位不会一直留着，眼下的不满还得自己处理。"
        },
        {
          "id": "independent",
          "label": "暂不入职，专做自己的产品",
          "description": "谢绝录用，把一个能独立完成的小功能定为下一次发布。 先做八周，每周五检查使用记录。 暂时少一份稳定进账，遇到难题也没有现成团队接手。",
          "effects": {
            "freedom": 8,
            "craft": 2,
            "reserve": -7,
            "energy": -5
          },
          "outcome": "你关掉招聘页面，把自己的产品图标拖到桌面中间。第二天没人催你起床，反而是你先坐到了桌前。",
          "set": {
            "vocation": "独立产品探索",
            "projectName": "生活小助手",
            "projectStatus": "active"
          },
          "addFlags": [
            "independent_path"
          ],
          "removeFlags": [
            "company_offer",
            "role_reorg",
            "employee_path",
            "founder_path",
            "company_formed"
          ],
          "action": "谢绝录用，把一个能独立完成的小功能定为下一次发布。",
          "time": "先做八周，每周五检查使用记录。",
          "people": "告诉阿远这两个月周末也会留半天工作。",
          "cost": "暂时少一份稳定进账，遇到难题也没有现成团队接手。"
        }
      ],
      "astroThemes": [
        "public-role",
        "self-recognition"
      ]
    },
    {
      "id": "start-own-product",
      "title": "用过原型的人问：下个月还能用吗",
      "prompt": "有人连续几周来问{project}什么时候能稳定用。你在咖啡店向{colleague}展示消息，对方没立刻庆祝，只问：“你想把它当周末项目，还是下个月真的靠它开工？”",
      "dimension": "craft",
      "kind": "simulation",
      "cooldown": 11,
      "minAge": 27,
      "maxAge": 85,
      "prerequisites": {
        "minStats": {
          "reserve": 22,
          "energy": 25
        },
        "flagsNone": [
          "company_formed"
        ]
      },
      "sourceIds": [
        "S07",
        "S13",
        "S10"
      ],
      "triggerEventIds": [
        "unexpected-use",
        "customer-constraint",
        "users-return"
      ],
      "options": [
        {
          "id": "found",
          "label": "约一位搭档，全职做三个月",
          "description": "请小岑一起列试用名单，分工做最小可用版本。 先投入三个月，每周见真实使用者。 先停其他合作邀约，支出照常发生，产品仍可能没人继续用。",
          "effects": {
            "craft": 5,
            "freedom": 4,
            "reserve": -8,
            "energy": -6,
            "connection": 2
          },
          "outcome": "小岑在纸上划掉一半功能。你嘴上说早该这样，还是把那张被划掉的草图折起来，塞进了包里。",
          "set": {
            "vocation": "小团队创业者",
            "projectName": "新的AI小工具",
            "projectStatus": "active"
          },
          "peopleDelta": 1,
          "addFlags": [
            "founder_path",
            "company_formed"
          ],
          "removeFlags": [
            "employee_path",
            "independent_path",
            "validation_failed"
          ],
          "action": "请小岑一起列试用名单，分工做最小可用版本。",
          "time": "先投入三个月，每周见真实使用者。",
          "people": "你要给搭档明确任务，也要接住对方的疑问。",
          "cost": "先停其他合作邀约，支出照常发生，产品仍可能没人继续用。"
        },
        {
          "id": "side",
          "label": "每周留两晚，只做一个功能",
          "description": "把产品只放在周二、周四晚上，不再占满白天，先修使用者反复提的那一步。 连续八周，每次两个小时。 晚上的游戏与临时聚餐少一些，产品进度也不会快。",
          "effects": {
            "reserve": 3,
            "craft": 3,
            "energy": -5,
            "freedom": -2
          },
          "outcome": "周四十点，阿远发来赛后照片。你看了一会儿，回复一个笑脸，然后给等更新的人发去新版本。",
          "set": {
            "projectName": "周二晚的小工具",
            "projectStatus": "active"
          },
          "addFlags": [
            "side_project"
          ],
          "removeFlags": [
            "validation_failed"
          ],
          "action": "把产品只放在周二、周四晚上，不再占满白天，先修使用者反复提的那一步。",
          "time": "连续八周，每次两个小时。",
          "people": "告诉试用者更新会慢，给合作者一个可等的日期。",
          "cost": "晚上的游戏与临时聚餐少一些，产品进度也不会快。"
        },
        {
          "id": "observe",
          "label": "先陪五个人完整用一遍",
          "description": "暂不招人、不做发布计划，约五次现场观察。 接下来两周，每次一小时。 得忍住马上开做的冲动，也可能发现原来的点子不值得继续。",
          "effects": {
            "craft": 4,
            "energy": 2,
            "joy": -2,
            "reserve": -2
          },
          "outcome": "第三个人又停在同一页。你伸手想指按钮，最后收回来，让他慢慢找；本子上的问号比功能清单还多。",
          "set": {
            "projectStatus": "idea"
          },
          "addFlags": [
            "user_observation"
          ],
          "removeFlags": [
            "validation_failed"
          ],
          "action": "暂不招人、不做发布计划，约五次现场观察。",
          "time": "接下来两周，每次一小时。",
          "people": "让使用者自己操作，你只记录卡住的地方。",
          "cost": "得忍住马上开做的冲动，也可能发现原来的点子不值得继续。"
        }
      ],
      "astroThemes": [
        "craft-iteration",
        "money-boundaries"
      ]
    },
    {
      "id": "failure-stop-or-pivot",
      "title": "最后一轮试用，还是没人回来",
      "prompt": "你和{colleague}在空会议室看完试用记录：大家肯来体验，却很少第二次打开。外卖已经凉了，对方问：“还改这一版吗？”你知道再回答“快好了”，连自己也不信。",
      "dimension": "reserve",
      "kind": "simulation",
      "cooldown": 7,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ],
        "flagsAny": [
          "validation_failed",
          "runway_question"
        ]
      },
      "sourceIds": [
        "S07",
        "S15",
        "S08"
      ],
      "triggerEventIds": [
        "validation-failed",
        "runway-question"
      ],
      "options": [
        {
          "id": "pivot",
          "label": "删掉大半功能，再试六周",
          "description": "只保留反复被问起的一项用途，逐一邀请愿意再试的人。 给新版本六周，到期按实际复用情况决定。 要承认前面不少工作白做了，也继续付出一轮时间和费用。",
          "effects": {
            "craft": 4,
            "reserve": -5,
            "energy": -4,
            "joy": -1
          },
          "outcome": "你们把白板擦到只剩一行。回家路上你仍想辩解原方案没错，第二天却先把删除按钮按了下去。",
          "set": {
            "projectName": "精简后的试用版",
            "projectStatus": "active"
          },
          "addFlags": [
            "pivot_attempt"
          ],
          "removeFlags": [
            "validation_failed",
            "runway_question",
            "repeat_users",
            "pilot_offer"
          ],
          "action": "只保留反复被问起的一项用途，逐一邀请愿意再试的人。",
          "time": "给新版本六周，到期按实际复用情况决定。",
          "people": "请小岑只协助这一次短测试，不再承诺无限延期。",
          "cost": "要承认前面不少工作白做了，也继续付出一轮时间和费用。"
        },
        {
          "id": "close",
          "label": "把项目关掉，逐一发告别消息",
          "description": "导出该保留的文件，通知试用者停止维护，结清合作事项。 这两周收尾，随后休息一周。 放下自己说过的豪言，也暂时没有下一份作品可介绍。",
          "effects": {
            "energy": 5,
            "freedom": 4,
            "reserve": 2,
            "joy": -5,
            "craft": -1
          },
          "outcome": "最后一条告别发出去，小岑回了“收到，辛苦”。你盯着那几个字半天，晚上终于把电脑留在了客厅。",
          "set": {
            "vocation": "阶段休整与重新选择",
            "projectStatus": "none"
          },
          "addFlags": [
            "project_closed"
          ],
          "removeFlags": [
            "validation_failed",
            "runway_question",
            "repeat_users",
            "pilot_offer",
            "founder_path",
            "company_formed"
          ],
          "action": "导出该保留的文件，通知试用者停止维护，结清合作事项。",
          "time": "这两周收尾，随后休息一周。",
          "people": "向搭档和使用者亲口说明结束，不让人继续等。",
          "cost": "放下自己说过的豪言，也暂时没有下一份作品可介绍。"
        },
        {
          "id": "pause",
          "label": "暂停开发，先接阶段合作",
          "description": "把原型封存，接一段已谈妥的小合作，约定两个月后再看。 两个月内不加新功能。 原项目可能在等待中变旧，重启时还得重新找回手感。",
          "effects": {
            "reserve": 6,
            "energy": 2,
            "freedom": -5,
            "craft": -2
          },
          "outcome": "你把原型文件夹改了名字，没有删除。新合作第一天晚上，你习惯性点开它，又关上，先去把饭热了。",
          "set": {
            "vocation": "阶段性合作工作",
            "projectStatus": "paused"
          },
          "addFlags": [
            "steady_contract"
          ],
          "removeFlags": [
            "validation_failed",
            "runway_question",
            "repeat_users",
            "pilot_offer"
          ],
          "action": "把原型封存，接一段已谈妥的小合作，约定两个月后再看。",
          "time": "两个月内不加新功能。",
          "people": "给搭档一个暂停日期，合作方会占去白天的大部分时间。",
          "cost": "原项目可能在等待中变旧，重启时还得重新找回手感。"
        }
      ],
      "astroThemes": [
        "craft-iteration",
        "money-boundaries"
      ]
    },
    {
      "id": "authority-and-delegation",
      "title": "小岑又在等你点最后一个确认",
      "prompt": "晚饭前，{colleague}把第三份方案发来。大家已经讨论过，却仍然说“等你看”。你一边回复一边发现锅里的水快干了：到底是他们不敢定，还是你每次都忍不住重做？",
      "dimension": "craft",
      "kind": "simulation",
      "cooldown": 9,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ],
        "minPeople": 1
      },
      "sourceIds": [
        "S05",
        "S25"
      ],
      "triggerEventIds": [
        "accountable-no-authority",
        "scope-creep",
        "delegate-visible"
      ],
      "options": [
        {
          "id": "authorize",
          "label": "让小岑独立定这一轮",
          "description": "当面说明哪些事由小岑直接决定，只约周五一起复盘。 这一轮两周，你不再逐页审批。 成品会带着别人的偏好，你得忍住临时拿回来改。",
          "effects": {
            "energy": 5,
            "freedom": 4,
            "connection": 2,
            "craft": -2
          },
          "outcome": "周三你打开文件，发现配色完全不是自己会选的。手停在评论框上很久，最后只问了一句：“用户试过了吗？”",
          "addFlags": [
            "delegated"
          ],
          "removeFlags": [
            "authority_gap",
            "scope_creep"
          ],
          "action": "当面说明哪些事由小岑直接决定，只约周五一起复盘。",
          "time": "这一轮两周，你不再逐页审批。",
          "people": "小岑会先做决定，也可能选与你不同的办法。",
          "cost": "成品会带着别人的偏好，你得忍住临时拿回来改。"
        },
        {
          "id": "expert",
          "label": "自己做关键部分，把杂事退回去",
          "description": "保留核心方案，由其他人负责排期、通知和收尾。 接下来一个月，每周两次集中讨论。 重要细节仍由你兜着，出门几天也没法彻底离线。",
          "effects": {
            "craft": 5,
            "reserve": 2,
            "energy": -6,
            "freedom": -4
          },
          "outcome": "你取消三个零散会议，却保留了周四那一小时。锅里的面这次没煮烂，手机仍在饭桌另一头亮着。",
          "addFlags": [
            "expert_path"
          ],
          "removeFlags": [
            "authority_gap",
            "scope_creep"
          ],
          "action": "保留核心方案，由其他人负责排期、通知和收尾。",
          "time": "接下来一个月，每周两次集中讨论。",
          "people": "你继续当主设计者，小岑负责把其他人组织起来。",
          "cost": "重要细节仍由你兜着，出门几天也没法彻底离线。"
        },
        {
          "id": "shrink",
          "label": "把本轮目标砍成一件事",
          "description": "取消两项次要交付，向所有人发出新的截止日期。 先用一个月做好一件小事。 短期少些显眼成果，也可能失去原本期待大版本的人。",
          "effects": {
            "energy": 5,
            "joy": 2,
            "reserve": -4,
            "craft": -1
          },
          "outcome": "小岑看着缩短的清单笑了一下，你却先觉得丢脸。第二周首次准时收工时，那点丢脸终于淡了一些。",
          "addFlags": [
            "small_scale"
          ],
          "removeFlags": [
            "authority_gap",
            "scope_creep"
          ],
          "action": "取消两项次要交付，向所有人发出新的截止日期。",
          "time": "先用一个月做好一件小事。",
          "people": "有人会失望，你要亲自解释这次为什么不做。",
          "cost": "短期少些显眼成果，也可能失去原本期待大版本的人。"
        }
      ],
      "astroThemes": [
        "public-role",
        "peer-negotiation"
      ]
    },
    {
      "id": "cofounder-agreement",
      "title": "你们为同一笔支出争了二十分钟",
      "prompt": "在{location}的小工作间，你想先修旧功能，{colleague}想把钱花在新推广上。话越说越快，直到对方说：“我们连谁能拍板都没讲过。”桌上的茶已经冷透。",
      "dimension": "connection",
      "kind": "simulation",
      "cooldown": 9,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ],
        "flagsAll": [
          "founder_path",
          "company_formed",
          "collaboration_gap"
        ],
        "minPeople": 1
      },
      "sourceIds": [
        "S13",
        "S15"
      ],
      "triggerEventIds": [
        "cofounder-rhythm"
      ],
      "options": [
        {
          "id": "divide",
          "label": "坐下来，把各自能定的事写清",
          "description": "拿出最近三次争论，逐项约定谁决定、多少钱必须两人同意。 用两次晚饭谈完，一个月后重看。 谈话不会好听，也得接受有些支出按对方的方法做。",
          "effects": {
            "connection": 4,
            "freedom": 2,
            "craft": -2,
            "energy": -3
          },
          "outcome": "第二次晚饭你差点又反驳，先把筷子放下。纸上的名字各占一列，那不是握手合影，却比那天有用。",
          "addFlags": [
            "roles_agreed"
          ],
          "removeFlags": [
            "collaboration_gap"
          ],
          "action": "拿出最近三次争论，逐项约定谁决定、多少钱必须两人同意。",
          "time": "用两次晚饭谈完，一个月后重看。",
          "people": "你和小岑都要交出一部分决定权。",
          "cost": "谈话不会好听，也得接受有些支出按对方的方法做。"
        },
        {
          "id": "separate",
          "label": "谈好交接，各自继续",
          "description": "列清作品、费用和未完承诺，分开处理剩余工作。 用一个月交接，不再一起开新项目。 失去随时商量的人，单独工作后很多小事也只能自己做。",
          "effects": {
            "freedom": 6,
            "connection": -5,
            "reserve": -4,
            "energy": -2
          },
          "outcome": "搬走那天你们一人拿一个纸箱。小岑问那盏台灯归谁，你说你拿吧，两个人忽然都笑了。",
          "set": {
            "vocation": "独立产品探索"
          },
          "addFlags": [
            "independent_path"
          ],
          "removeFlags": [
            "founder_path",
            "company_formed",
            "collaboration_gap"
          ],
          "action": "列清作品、费用和未完承诺，分开处理剩余工作。",
          "time": "用一个月交接，不再一起开新项目。",
          "people": "告诉小岑你想独立做，也让共同使用者知道该找谁。",
          "cost": "失去随时商量的人，单独工作后很多小事也只能自己做。"
        },
        {
          "id": "join-org",
          "label": "停止合伙经营，找组织岗位",
          "description": "完成必要收尾，各自找有现成团队的职位。 先用六周收尾与面谈。 自己的节奏会变少，也要面对别人问“怎么又回来了”。",
          "effects": {
            "reserve": 5,
            "energy": 2,
            "freedom": -6,
            "joy": -2
          },
          "outcome": "面谈时有人问起创业，你没有把它讲成胜利。回家后小岑发来最后一张结算表，你认真看完，回了谢谢。",
          "set": {
            "vocation": "组织中的产品角色"
          },
          "addFlags": [
            "employee_path"
          ],
          "removeFlags": [
            "founder_path",
            "company_formed",
            "independent_path",
            "collaboration_gap"
          ],
          "action": "完成必要收尾，各自找有现成团队的职位。",
          "time": "先用六周收尾与面谈。",
          "people": "向小岑说清你愿意回团队工作，不再继续拉人创业。",
          "cost": "自己的节奏会变少，也要面对别人问“怎么又回来了”。"
        }
      ],
      "astroThemes": [
        "peer-negotiation",
        "money-boundaries"
      ]
    },
    {
      "id": "contract-calendar",
      "title": "对方想包下你每周两天",
      "prompt": "电话里，对方把合作期限说得很清楚：三个月，每周到场两天。你在纸日历上涂了两列，突然发现自己的产品、飞盘和原本要去看的朋友，都挤在剩下的格子里。",
      "dimension": "reserve",
      "kind": "simulation",
      "cooldown": 9,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "flagsAny": [
          "contract_offer"
        ],
        "projectStatus": [
          "active",
          "idea",
          "paused"
        ]
      },
      "sourceIds": [
        "S08",
        "S18"
      ],
      "triggerEventIds": [
        "steady-contract"
      ],
      "options": [
        {
          "id": "full",
          "label": "接三个月，每周去两天",
          "description": "签清交付内容，固定周二、周四为合作工作。 三个月，每周两整天。 自己的产品推进变慢，临时远行也不方便。",
          "effects": {
            "reserve": 7,
            "energy": 1,
            "freedom": -6,
            "craft": -2
          },
          "outcome": "你把两天涂成蓝色。第一个周四收工回来很累，看到确认到账的通知又松了口气，晚饭吃得比平时早。",
          "addFlags": [
            "steady_contract"
          ],
          "removeFlags": [
            "contract_offer"
          ],
          "action": "签清交付内容，固定周二、周四为合作工作。",
          "time": "三个月，每周两整天。",
          "people": "合作方能稳定找到你，小岑需要绕开这两天约讨论。",
          "cost": "自己的产品推进变慢，临时远行也不方便。"
        },
        {
          "id": "limited",
          "label": "只谈周二半天的小合同",
          "description": "提出缩小任务，每周集中半天解决一个明确问题。 先试一个月，每周二下午。 进账少一些，有些自己想参与的事也会被排除。",
          "effects": {
            "reserve": 3,
            "craft": 2,
            "energy": -4,
            "freedom": -2
          },
          "outcome": "对方隔了一天才回“可以先试”。你把原来涂满的格子擦掉一半，周四早上仍然能打开自己的产品。",
          "addFlags": [
            "limited_contract"
          ],
          "removeFlags": [
            "contract_offer"
          ],
          "action": "提出缩小任务，每周集中半天解决一个明确问题。",
          "time": "先试一个月，每周二下午。",
          "people": "对方需要接受你不随叫随到，也可能因此不合作。",
          "cost": "进账少一些，有些自己想参与的事也会被排除。"
        },
        {
          "id": "decline",
          "label": "这份先不接，专心做八周",
          "description": "礼貌拒绝，把接下来的八周留给自己的作品和试用者。 八周后重新检查是否需要找合作。 少一份确定进账，日常花费需要更克制。",
          "effects": {
            "freedom": 5,
            "joy": 1,
            "reserve": -4,
            "connection": -1
          },
          "outcome": "发完拒绝消息，你马上有点后悔。第二天去咖啡店时少点了一份甜食，给试用者的邀约倒是先发了出去。",
          "removeFlags": [
            "contract_offer"
          ],
          "action": "礼貌拒绝，把接下来的八周留给自己的作品和试用者。",
          "time": "八周后重新检查是否需要找合作。",
          "people": "对方会找别人，你要独自向自己交代这八周做了什么。",
          "cost": "少一份确定进账，日常花费需要更克制。"
        }
      ],
      "astroThemes": [
        "money-boundaries",
        "body-rhythm"
      ]
    },
    {
      "id": "move-city",
      "title": "租约快到了，你摊开两座城的地图",
      "prompt": "房东来问续不续租。你在{location}的桌上摊开岘港和新加坡的地图，一张照片里有海，另一张有方便的航线。{friend}只问：“你搬过去以后，周三晚上打算干什么？”",
      "dimension": "freedom",
      "kind": "simulation",
      "cooldown": 9,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "minStats": {
          "reserve": 15
        }
      },
      "sourceIds": [
        "S08",
        "S02"
      ],
      "triggerEventIds": [
        "move-cost",
        "housing-preference",
        "paperwork-wait",
        "city-trial"
      ],
      "options": [
        {
          "id": "coast",
          "label": "在岘港住三个月",
          "description": "核对停留手续，在岘港安排一间能做饭的住处。 三个月试住，第二个月再决定续留。 搬家和试住花钱，熟悉的朋友不能随时约到。",
          "effects": {
            "freedom": 5,
            "joy": 4,
            "reserve": -5,
            "connection": -3,
            "energy": -2
          },
          "outcome": "你把接下来三个月的住处都写成岘港。买菜回来，海风从窗缝进来，你开始认真想明天早上走哪条路，而不是下一张机票。",
          "set": {
            "location": "岘港"
          },
          "addFlags": [
            "moved_once",
            "coastal_base"
          ],
          "removeFlags": [
            "move_question"
          ],
          "action": "核对停留手续，在岘港安排一间能做饭的住处。",
          "time": "三个月试住，第二个月再决定续留。",
          "people": "告诉阿远你会少来球局，也得在新地方重新认识人。",
          "cost": "搬家和试住花钱，熟悉的朋友不能随时约到。"
        },
        {
          "id": "metro",
          "label": "在新加坡住三个月",
          "description": "核对停留条件，在新加坡安排日常交通方便的住处。 先三个月，不一次押上长期计划。 房租压力更明显，不能把每顿饭都当旅行消费。",
          "effects": {
            "craft": 4,
            "connection": 3,
            "reserve": -6,
            "energy": -3
          },
          "outcome": "日历上连续三个月都写着新加坡。你提着菜坐地铁回去，第一次留意沿途哪家店适合平日吃饭，而不只是拍照好看。",
          "set": {
            "location": "新加坡"
          },
          "addFlags": [
            "moved_once",
            "metro_base"
          ],
          "removeFlags": [
            "move_question"
          ],
          "action": "核对停留条件，在新加坡安排日常交通方便的住处。",
          "time": "先三个月，不一次押上长期计划。",
          "people": "约新认识的人吃饭，也要接受朋友们仍有自己的忙碌。",
          "cost": "房租压力更明显，不能把每顿饭都当旅行消费。"
        },
        {
          "id": "stay",
          "label": "续住一年，先换一种日常",
          "description": "和房东确认续租，挑一项每周固定出门的活动。 先住一年，每月去一个没走过的街区。 这次先不追海边或新城市的兴奋，仍要面对旧日常的烦闷。",
          "effects": {
            "energy": 3,
            "reserve": 3,
            "joy": -2,
            "freedom": -1
          },
          "outcome": "续租消息发出后你有点泄气。周三却真的背包出了门，走进那家一直说想去、从没去过的小店。",
          "addFlags": [
            "local_experiment"
          ],
          "removeFlags": [
            "move_question"
          ],
          "action": "和房东确认续租，挑一项每周固定出门的活动。",
          "time": "先住一年，每月去一个没走过的街区。",
          "people": "你能继续见阿远，也要主动约新朋友。",
          "cost": "这次先不追海边或新城市的兴奋，仍要面对旧日常的烦闷。"
        }
      ],
      "astroThemes": [
        "home-base",
        "outer-change"
      ]
    },
    {
      "id": "travel-format",
      "title": "又换了一张机票，今晚住哪儿还没定",
      "prompt": "你刚改完行程，桌上摊着充电器和半开的背包。{friend}问什么时候能一起吃饭，你打了几个日期又删掉。远方仍让你兴奋，但每次重新找住处也确实累。",
      "dimension": "freedom",
      "kind": "simulation",
      "cooldown": 9,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "flagsAny": [
          "portable_offer",
          "independent_path",
          "need_anchor"
        ],
        "minStats": {
          "reserve": 20
        }
      },
      "sourceIds": [
        "S08",
        "S15",
        "S31"
      ],
      "triggerEventIds": [
        "portable-work-offer",
        "long-trip-needs-base",
        "travel-change-cost"
      ],
      "options": [
        {
          "id": "long",
          "label": "先去岘港长住，暂不排下一站",
          "description": "订好能做饭的一处住处，把短程工作安排压在固定几天。 先住三个月，每月再决定下一步。 少看几座城，长住期间也可能遇到无聊和思乡。",
          "effects": {
            "freedom": 7,
            "joy": 4,
            "reserve": -7,
            "energy": -4,
            "connection": -3
          },
          "outcome": "你从背包里拿出所有衣服，第一次全挂进衣柜。第二天没有赶车，醒来先想的是附近哪家早餐好吃。",
          "set": {
            "location": "岘港"
          },
          "addFlags": [
            "long_travel",
            "mobile_life",
            "moved_once"
          ],
          "removeFlags": [
            "need_anchor"
          ],
          "action": "订好能做饭的一处住处，把短程工作安排压在固定几天。",
          "time": "先住三个月，每月再决定下一步。",
          "people": "给常联系的人一个确定地址和可通话时段。",
          "cost": "少看几座城，长住期间也可能遇到无聊和思乡。"
        },
        {
          "id": "return",
          "label": "把长旅改成两周，然后回来",
          "description": "保留最想去的一段行程，买好回程票。 两周旅行，返程后至少住满两个月。 会错过沿途临时邀请，回程那天可能还没玩够。",
          "effects": {
            "joy": 4,
            "connection": 1,
            "reserve": -5,
            "energy": -2
          },
          "outcome": "你删掉三座城市，只留一张车票。阿远回了一个晚饭地址，你看着它，第一次没有急着点开更远的地图。",
          "addFlags": [
            "short_travel"
          ],
          "removeFlags": [
            "long_travel",
            "mobile_life",
            "need_anchor"
          ],
          "action": "保留最想去的一段行程，买好回程票。",
          "time": "两周旅行，返程后至少住满两个月。",
          "people": "提前约阿远回来吃饭，也告诉合作者恢复见面的日期。",
          "cost": "会错过沿途临时邀请，回程那天可能还没玩够。"
        },
        {
          "id": "anchor",
          "label": "先回上海住半年",
          "description": "整理长期行李，在上海找可行住处，把机票先放一边。 半年内不连续换住处，短途出门另算。 暂时不追新的远方，租住和搬回来的麻烦一样要处理。",
          "effects": {
            "energy": 6,
            "reserve": 3,
            "freedom": -4,
            "joy": -1
          },
          "outcome": "回到上海那晚下着雨，你在楼下买了鸡蛋和葱。屋子还空着，第一顿面却让你坐了很久。",
          "set": {
            "location": "上海"
          },
          "addFlags": [
            "anchored_period"
          ],
          "removeFlags": [
            "long_travel",
            "mobile_life",
            "need_anchor"
          ],
          "action": "整理长期行李，在上海找可行住处，把机票先放一边。",
          "time": "半年内不连续换住处，短途出门另算。",
          "people": "重新约老朋友，也得承认有些人已经换了生活节奏。",
          "cost": "暂时不追新的远方，租住和搬回来的麻烦一样要处理。"
        }
      ],
      "astroThemes": [
        "outer-change",
        "home-base"
      ]
    },
    {
      "id": "learning-period",
      "title": "新课的作业占掉了两个晚上",
      "prompt": "第一堂课结束，老师发来练习清单。你回到{location}打开文件，发现这次没法靠收藏几篇文章混过去。{friend}来问周末出不出来，你看着课表，有点想装作没看见。",
      "dimension": "craft",
      "kind": "simulation",
      "cooldown": 9,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "sourceIds": [
        "S03",
        "S24",
        "S29"
      ],
      "triggerEventIds": [
        "back-to-class",
        "course-demand",
        "language-small-win"
      ],
      "options": [
        {
          "id": "intensive",
          "label": "报完整课程，把周末上午交出去",
          "description": "按老师要求交作业，暂时少开一个项目。 十二周，每周两个晚上加周六上午。 周末自由时间减少，还要忍受自己做得很慢。",
          "effects": {
            "craft": 7,
            "joy": 2,
            "reserve": -5,
            "connection": -2,
            "energy": -2
          },
          "outcome": "第一次交作业你等了很久才敢点发送。老师只圈了一个基础错误，你脸有点热，晚上还是把它重新做了一遍。",
          "addFlags": [
            "intensive_learning"
          ],
          "removeFlags": [
            "course_question"
          ],
          "action": "按老师要求交作业，暂时少开一个项目。",
          "time": "十二周，每周两个晚上加周六上午。",
          "people": "提前告诉阿远这季少聚，也请老师直接指出不会的地方。",
          "cost": "周末自由时间减少，还要忍受自己做得很慢。"
        },
        {
          "id": "slow",
          "label": "只选一门，每周慢慢练",
          "description": "不追完整证书，只留最想学的一项，每周固定练习。 连续半年，每周三晚一小时。 进步不显眼，也可能羡慕同班人已经做得更远。",
          "effects": {
            "craft": 4,
            "reserve": 1,
            "energy": -4,
            "freedom": -2
          },
          "outcome": "你关掉课程群里密集的打卡，把本周练习放在桌边。下一个周三很累，最后还是坐了四十分钟。",
          "addFlags": [
            "slow_learning"
          ],
          "removeFlags": [
            "course_question"
          ],
          "action": "不追完整证书，只留最想学的一项，每周固定练习。",
          "time": "连续半年，每周三晚一小时。",
          "people": "请一位同学每月互看一次练习，不要求别人天天监督。",
          "cost": "进步不显眼，也可能羡慕同班人已经做得更远。"
        },
        {
          "id": "later",
          "label": "这轮退课，定下重新报名日期",
          "description": "按规则退掉能退的课时，把资料整理好，不假装仍在跟课。 先停三个月，到期再看时间。 这次学不到原计划的东西，也得承认自己没有那么多空闲。",
          "effects": {
            "energy": 4,
            "reserve": 3,
            "craft": -2,
            "joy": -1
          },
          "outcome": "退课按钮按下去，你先松了一口气，随后又难过了一阵。晚上终于把迟迟没回的那条朋友消息回了。",
          "removeFlags": [
            "course_question"
          ],
          "action": "按规则退掉能退的课时，把资料整理好，不假装仍在跟课。",
          "time": "先停三个月，到期再看时间。",
          "people": "向老师说明退出，不让同学继续为你补笔记。",
          "cost": "这次学不到原计划的东西，也得承认自己没有那么多空闲。"
        }
      ],
      "astroThemes": [
        "knowledge",
        "inner-standards"
      ]
    },
    {
      "id": "help-boundary",
      "title": "阿远问你能不能再帮他改一遍",
      "prompt": "{friend}把活动方案发来，说“你看一眼就好”。附件有十几页，明晚就要用。你记得上次那一眼耗到凌晨，但这回他声音确实着急，你也不想显得冷淡。",
      "dimension": "connection",
      "kind": "simulation",
      "cooldown": 9,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "minPeople": 1
      },
      "sourceIds": [
        "S05",
        "S06"
      ],
      "triggerEventIds": [
        "generous-overcommit",
        "friend-misread"
      ],
      "options": [
        {
          "id": "bounded",
          "label": "今晚帮四十分钟，只改开头",
          "description": "告诉阿远你能读哪两页，到点就把意见发回。 今晚四十分钟，不继续接后续修改。 看得出别处也有问题时，得忍住全部接过来改。",
          "effects": {
            "connection": 3,
            "freedom": 3,
            "energy": -2,
            "joy": -1
          },
          "outcome": "计时器响时你还有一句没润色。你把批注发过去，补了一句“剩下要你自己定”，手指停了一会儿才按发送。",
          "addFlags": [
            "help_bounded"
          ],
          "removeFlags": [
            "uneven_exchange",
            "communication_question"
          ],
          "action": "告诉阿远你能读哪两页，到点就把意见发回。",
          "time": "今晚四十分钟，不继续接后续修改。",
          "people": "阿远仍要自己完成剩下部分，你会把结束时间说清。",
          "cost": "看得出别处也有问题时，得忍住全部接过来改。"
        },
        {
          "id": "decline",
          "label": "这次说不，约好下周见面",
          "description": "今晚不看文件，解释已有安排，另约一个不带电脑的晚饭。 保住今晚，下周拿一顿饭补上见面。 不能靠帮忙证明自己够朋友，也可能错过参与这次活动。",
          "effects": {
            "energy": 5,
            "freedom": 4,
            "connection": -4,
            "joy": -2
          },
          "outcome": "电话那头安静了两秒，你差点改口。他最后说“行，那下周吃面”，你这才把紧绷的肩膀放下。",
          "removeFlags": [
            "uneven_exchange",
            "communication_question"
          ],
          "action": "今晚不看文件，解释已有安排，另约一个不带电脑的晚饭。",
          "time": "保住今晚，下周拿一顿饭补上见面。",
          "people": "阿远可能短暂失望，你需要直接回话而非消失。",
          "cost": "不能靠帮忙证明自己够朋友，也可能错过参与这次活动。"
        },
        {
          "id": "share",
          "label": "找一位懂行的人一起看",
          "description": "征求阿远同意，请合适的朋友分看不同部分，自己只负责串起来。 用一小时分工，第二天集中回一次。 你仍要花时间沟通，还欠了一次别人可以拒绝的邀请。",
          "effects": {
            "connection": 4,
            "energy": -4,
            "freedom": 1,
            "reserve": -1
          },
          "outcome": "三个人的群里一开始很客气。有人指出一个你也没看出的错误，你愣了半秒，随后真心发了个谢谢。",
          "peopleDelta": 1,
          "addFlags": [
            "shared_support"
          ],
          "removeFlags": [
            "uneven_exchange",
            "communication_question"
          ],
          "action": "征求阿远同意，请合适的朋友分看不同部分，自己只负责串起来。",
          "time": "用一小时分工，第二天集中回一次。",
          "people": "先问新朋友愿不愿帮，不把请求直接甩过去。",
          "cost": "你仍要花时间沟通，还欠了一次别人可以拒绝的邀请。"
        }
      ],
      "astroThemes": [
        "peer-negotiation",
        "body-rhythm"
      ]
    },
    {
      "id": "relationship-opt-in",
      "title": "常一起吃饭的人问你周末有没有空",
      "prompt": "晚饭结束，对面的人没有立刻叫车，而是问：“下次能不能只有我们两个，不再顺便谈项目？”你把杯子挪了一下，听懂了，也发现自己有点高兴，又有点怕给出太快的答案。",
      "dimension": "connection",
      "kind": "simulation",
      "cooldown": 10,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "flagsAll": [
          "relationship_invitation"
        ],
        "flagsNone": [
          "partner_active"
        ]
      },
      "sourceIds": [
        "S06",
        "S08"
      ],
      "triggerEventIds": [
        "relationship-invitation"
      ],
      "options": [
        {
          "id": "try",
          "label": "答应周末单独约会",
          "description": "直接说愿意认真相处，选一个双方都方便的地方见面。 先安排一次周末约会，之后再谈彼此期待。 不能再用“只是朋友”回避，也得接受靠近以后会有分歧。",
          "effects": {
            "connection": 8,
            "joy": 5,
            "freedom": -6,
            "energy": -3
          },
          "outcome": "你说完“我愿意”反而不知道手放哪儿。对方笑着把甜点菜单推过来，你们开始认真争论周末先吃什么。",
          "peopleDelta": 1,
          "addFlags": [
            "partner_active"
          ],
          "removeFlags": [
            "relationship_invitation",
            "relationship_declined"
          ],
          "action": "直接说愿意认真相处，选一个双方都方便的地方见面。",
          "time": "先安排一次周末约会，之后再谈彼此期待。",
          "people": "对方会知道这次是约会，你也需要更清楚地表达在意。",
          "cost": "不能再用“只是朋友”回避，也得接受靠近以后会有分歧。"
        },
        {
          "id": "friends",
          "label": "说清喜欢见面，但想做朋友",
          "description": "当面感谢这份坦诚，说明自己希望继续普通朋友来往。 这顿饭就说清，给对方几周自行决定是否见面。 以后可能少见面，你也会失去继续试试的可能。",
          "effects": {
            "connection": 2,
            "freedom": 3,
            "joy": -2
          },
          "outcome": "对方说需要想想，你点头，没有急着讲笑话。回程你少了一个聊天窗口，仍觉得把话说清是该做的。",
          "peopleDelta": 1,
          "addFlags": [
            "friendship_choice"
          ],
          "removeFlags": [
            "relationship_invitation"
          ],
          "action": "当面感谢这份坦诚，说明自己希望继续普通朋友来往。",
          "time": "这顿饭就说清，给对方几周自行决定是否见面。",
          "people": "不要求对方立刻轻松，也不拿暧昧换陪伴。",
          "cost": "以后可能少见面，你也会失去继续试试的可能。"
        },
        {
          "id": "no",
          "label": "坦白自己现在不想开始关系",
          "description": "不约下一次单独见面，说明这段时间希望独处。 当晚回复，不让邀请悬着。 热闹会少一点，周末可能比想象中安静。",
          "effects": {
            "freedom": 5,
            "connection": -3,
            "joy": -2
          },
          "outcome": "消息发出去后，对方回了“知道了”。周六你独自去买菜，在熟悉的餐位前站了一下，最后换了家小店。",
          "addFlags": [
            "relationship_declined"
          ],
          "removeFlags": [
            "relationship_invitation"
          ],
          "action": "不约下一次单独见面，说明这段时间希望独处。",
          "time": "当晚回复，不让邀请悬着。",
          "people": "让对方能安排自己的生活，也请自己接受短暂疏远。",
          "cost": "热闹会少一点，周末可能比想象中安静。"
        }
      ],
      "astroThemes": [
        "partnership",
        "self-recognition"
      ]
    },
    {
      "id": "shared-life-opt-in",
      "title": "两把牙刷在洗手台上挤到一起",
      "prompt": "你们最近常在一处过夜。今天早上，{partnerName}一边找杯子一边说：“我们到底怎么住，要不要好好讲一次？”你想到自己的安静早晨，也想到对方每次来回收拾的袋子。",
      "dimension": "connection",
      "kind": "simulation",
      "cooldown": 10,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "flagsAll": [
          "partner_active"
        ],
        "flagsNone": [
          "shared_life_agreed"
        ]
      },
      "sourceIds": [
        "S06",
        "S08"
      ],
      "triggerEventIds": [
        "partner-honest-request",
        "partner-messages"
      ],
      "options": [
        {
          "id": "together",
          "label": "试着同住三个月，先谈作息",
          "description": "一起列早晚习惯、家务和各自独处的时间，再试着住到一处。 试住三个月，每两周坐下来谈一次。 一个人待着的时间减少，小毛病也会被对方看见。",
          "effects": {
            "connection": 6,
            "joy": 3,
            "freedom": -5,
            "reserve": -4,
            "energy": -2
          },
          "outcome": "第一晚你们为锅放哪里争了几句。后来各让出一格柜子，牙刷终于不再倒下，你还是有点不习惯。",
          "addFlags": [
            "cohabitation_chosen",
            "shared_life_agreed"
          ],
          "action": "一起列早晚习惯、家务和各自独处的时间，再试着住到一处。",
          "time": "试住三个月，每两周坐下来谈一次。",
          "people": "你和伴侣都得调整日常，不再只在状态好时见面。",
          "cost": "一个人待着的时间减少，小毛病也会被对方看见。"
        },
        {
          "id": "apart",
          "label": "各自住，固定两晚好好见面",
          "description": "明确暂不搬到一起，把见面和独处都写进共同日历。 先试三个月，每周两晚见面。 两处住处都要维持，有时告别仍会让人失落。",
          "effects": {
            "connection": 3,
            "freedom": 4,
            "reserve": -4,
            "energy": -2
          },
          "outcome": "送对方到楼下时你们站了一会儿。回屋后安静得让你舒服，也有点空，你发去一句“到家告诉我”。",
          "addFlags": [
            "separate_homes"
          ],
          "removeFlags": [
            "cohabitation_chosen"
          ],
          "action": "明确暂不搬到一起，把见面和独处都写进共同日历。",
          "time": "先试三个月，每周两晚见面。",
          "people": "告诉伴侣这不是敷衍，也愿意听对方是否能接受。",
          "cost": "两处住处都要维持，有时告别仍会让人失落。"
        },
        {
          "id": "part",
          "label": "承认步调不同，结束亲密关系",
          "description": "选一个能慢慢说话的下午，谈清不再继续与物品交接。 用几周处理共同安排，之后少联系一阵。 少一个随时惦记你的人，也要接受自己会反复想起对方。",
          "effects": {
            "freedom": 7,
            "energy": 3,
            "connection": -7,
            "joy": -5
          },
          "outcome": "你们分好了各自的杯子。晚上刷牙时少了一把牙刷，你下意识望了一眼，又把自己的放回原处。",
          "removeFlags": [
            "partner_active",
            "cohabitation_chosen",
            "family_plan",
            "partner_location",
            "partner_communication"
          ],
          "action": "选一个能慢慢说话的下午，谈清不再继续与物品交接。",
          "time": "用几周处理共同安排，之后少联系一阵。",
          "people": "听完伴侣的感受，不用工作忙遮住真正的决定。",
          "cost": "少一个随时惦记你的人，也要接受自己会反复想起对方。"
        }
      ],
      "astroThemes": [
        "partnership",
        "home-base"
      ]
    },
    {
      "id": "partner-geography",
      "title": "两个人的行程表对不上了",
      "prompt": "你想在新加坡安排下一段日常，{partnerName}却说不想再靠临时订票过日子。你们在晚饭后摊开日历，红圈几乎没有重合。窗外车声不断，两个人都没有先收走碗。",
      "dimension": "connection",
      "kind": "simulation",
      "cooldown": 9,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "flagsAll": [
          "partner_active",
          "partner_location"
        ]
      },
      "sourceIds": [
        "S08",
        "S15"
      ],
      "triggerEventIds": [
        "partner-two-cities"
      ],
      "options": [
        {
          "id": "move-together",
          "label": "核对双方条件，在新加坡一起试住",
          "description": "确认双方能合法停留，也分别处理各自工作与住处，再一起试住。 用两个月准备，先一起试住三个月。 要为搬动花钱，也可能暂时放下原来的朋友和机会。",
          "effects": {
            "connection": 5,
            "freedom": 2,
            "reserve": -6,
            "energy": -4
          },
          "outcome": "看房那天你想马上定，对方坚持再走一趟附近街道。你有些烦，最后还是一起把那条路走完了。",
          "set": {
            "location": "新加坡"
          },
          "addFlags": [
            "moved_once"
          ],
          "removeFlags": [
            "partner_location",
            "move_question"
          ],
          "action": "确认双方能合法停留，也分别处理各自工作与住处，再一起试住。",
          "time": "用两个月准备，先一起试住三个月。",
          "people": "伴侣不是跟着你走，两个人各自要有可过的日常。",
          "cost": "要为搬动花钱，也可能暂时放下原来的朋友和机会。"
        },
        {
          "id": "distance",
          "label": "各自留在原地，约定见面日期",
          "description": "把未来三次见面和通话时间先定好，到期一起讨论能否继续。 先试六个月，不用每日在线证明在意。 旅行占去假期，身体不在一处时有些情绪很难接住。",
          "effects": {
            "freedom": 5,
            "craft": 2,
            "connection": -2,
            "reserve": -4,
            "energy": -3
          },
          "outcome": "第一晚视频时你正忙着找充电器，对方一句话没说完就断线。你重新拨过去，先把电脑合上。",
          "addFlags": [
            "distance_relationship"
          ],
          "removeFlags": [
            "partner_location",
            "cohabitation_chosen"
          ],
          "action": "把未来三次见面和通话时间先定好，到期一起讨论能否继续。",
          "time": "先试六个月，不用每日在线证明在意。",
          "people": "让伴侣参与安排，也接受临时错过通话需要补一句解释。",
          "cost": "旅行占去假期，身体不在一处时有些情绪很难接住。"
        },
        {
          "id": "separate",
          "label": "这次各走各的路，结束关系",
          "description": "坦白你想继续远行，不要求对方等一个没有日期的承诺。 这一月谈完共同安排和告别。 远行会更自由，也会少掉一个最先想分享照片的人。",
          "effects": {
            "freedom": 7,
            "connection": -8,
            "joy": -5,
            "energy": 2
          },
          "outcome": "那天你拍了一张窗外的雨，下意识想发给对方，停住了。最后把照片存进相册，自己下楼吃饭。",
          "removeFlags": [
            "partner_active",
            "cohabitation_chosen",
            "family_plan",
            "partner_location",
            "distance_relationship"
          ],
          "action": "坦白你想继续远行，不要求对方等一个没有日期的承诺。",
          "time": "这一月谈完共同安排和告别。",
          "people": "认真听伴侣说完，不把分开说成谁不够懂谁。",
          "cost": "远行会更自由，也会少掉一个最先想分享照片的人。"
        }
      ],
      "astroThemes": [
        "partnership",
        "outer-change"
      ]
    },
    {
      "id": "family-possibility",
      "title": "晚饭聊到孩子，你们都没马上接话",
      "prompt": "隔壁桌有人在哄孩子。回家路上，{partnerName}问你有没有想过另一种家庭生活。你没有现成答案，只想到自己舍不得的旅行、安静早晨，以及有时又很想照顾一个人的心情。",
      "dimension": "connection",
      "kind": "simulation",
      "cooldown": 12,
      "minAge": 27,
      "maxAge": 65,
      "prerequisites": {
        "flagsAll": [
          "partner_active"
        ]
      },
      "sourceIds": [
        "S08",
        "S06"
      ],
      "triggerEventIds": [
        "partner-honest-request",
        "shared-home-friction"
      ],
      "options": [
        {
          "id": "consider",
          "label": "认真了解养育所需，再决定",
          "description": "和伴侣分别写下期待，向愿意分享经验的成年人了解日常安排。 用三个月了解与讨论，不把谈过当作已经决定。 约会有时会变成严肃讨论，原本含糊的不同会更明显。",
          "effects": {
            "connection": 4,
            "energy": -4,
            "freedom": -3,
            "reserve": -3
          },
          "outcome": "你们把周末日历摊开，第一次按具体小时讨论。听到对方最担心的事时，你没有马上说“应该能解决”。",
          "addFlags": [
            "family_plan"
          ],
          "removeFlags": [
            "family_without_children"
          ],
          "action": "和伴侣分别写下期待，向愿意分享经验的成年人了解日常安排。",
          "time": "用三个月了解与讨论，不把谈过当作已经决定。",
          "people": "双方都能改口，也要听见对方真正不愿放弃的生活。",
          "cost": "约会有时会变成严肃讨论，原本含糊的不同会更明显。"
        },
        {
          "id": "childfree",
          "label": "把不要孩子的打算说清楚",
          "description": "向伴侣说明你希望两个人过怎样的日子，确认双方是否愿意。 留两次完整晚饭谈，不在赶路时仓促决定。 得面对不同期待带来的失望，也可能有人不理解你们。",
          "effects": {
            "freedom": 4,
            "joy": 3,
            "connection": 2,
            "craft": -1
          },
          "outcome": "说出口后你先紧张地看对方。那顿饭吃得慢了很多，但你们终于开始说各自真正想保留的早晨。",
          "addFlags": [
            "family_without_children"
          ],
          "removeFlags": [
            "family_plan"
          ],
          "action": "向伴侣说明你希望两个人过怎样的日子，确认双方是否愿意。",
          "time": "留两次完整晚饭谈，不在赶路时仓促决定。",
          "people": "伴侣可能与你不同，不能用一句“以后再说”拖住对方。",
          "cost": "得面对不同期待带来的失望，也可能有人不理解你们。"
        },
        {
          "id": "defer",
          "label": "先不决定，半年后再谈",
          "description": "约定一个重谈日期，这半年先把眼下住处与相处过好。 半年后专门留一个周末讨论。 问题不会自动消失，对方也可能不愿意等。",
          "effects": {
            "energy": 3,
            "craft": 2,
            "connection": -2,
            "joy": -1
          },
          "outcome": "你把日期记进共同日历。接下来买菜时你仍会想起这个话题，只是这次没有假装自己已经有答案。",
          "removeFlags": [
            "family_plan"
          ],
          "action": "约定一个重谈日期，这半年先把眼下住处与相处过好。",
          "time": "半年后专门留一个周末讨论。",
          "people": "告诉伴侣你还没想清，不把沉默当双方同意。",
          "cost": "问题不会自动消失，对方也可能不愿意等。"
        }
      ],
      "astroThemes": [
        "partnership",
        "home-base"
      ]
    },
    {
      "id": "training-season",
      "title": "阿远问：下个月比赛你上不上",
      "prompt": "球局散场，{friend}递来水，说队里准备认真练一季。你刚才一次接盘落空，还在懊恼；可日历里已经有几趟出行，回家时双腿也沉。你想赢，又不想把所有周末都排满。",
      "dimension": "energy",
      "kind": "simulation",
      "cooldown": 6,
      "minAge": 27,
      "maxAge": 80,
      "prerequisites": {},
      "sourceIds": [
        "S02",
        "S25"
      ],
      "triggerEventIds": [
        "frisbee-basic",
        "training-overfull",
        "climb-one-move"
      ],
      "options": [
        {
          "id": "train",
          "label": "报名训练，认真打一季",
          "description": "和队友确认位置与训练日，按当下体能逐步增加练习。 十二周，每周两次训练，另留恢复日。 少去几次聚餐和旅行，输了也不能说自己只是随便玩。",
          "effects": {
            "craft": 3,
            "joy": 5,
            "connection": 2,
            "energy": -5,
            "freedom": -3
          },
          "outcome": "第一周你练得满脸通红，最后一个传盘仍歪了。阿远没安慰，只把盘捡回来说“再来”，你点了点头。",
          "addFlags": [
            "training_cycle"
          ],
          "removeFlags": [
            "training_question"
          ],
          "action": "和队友确认位置与训练日，按当下体能逐步增加练习。",
          "time": "十二周，每周两次训练，另留恢复日。",
          "people": "队友会等你到场，阿远能直接指出你的失误。",
          "cost": "少去几次聚餐和旅行，输了也不能说自己只是随便玩。"
        },
        {
          "id": "play",
          "label": "只参加周末轻松局",
          "description": "告诉队友不进比赛名单，继续来接盘和聊天。 每周一次，不为排位加练。 看见比赛照片时可能羡慕，也得放下证明自己更强的念头。",
          "effects": {
            "energy": 3,
            "joy": 4,
            "connection": 2,
            "craft": -2
          },
          "outcome": "新名单没有你的名字，你先酸了一下。周末草地上有人传了个烂盘，你追了两步没接到，却笑出了声。",
          "addFlags": [
            "recreational_sport"
          ],
          "removeFlags": [
            "training_question"
          ],
          "action": "告诉队友不进比赛名单，继续来接盘和聊天。",
          "time": "每周一次，不为排位加练。",
          "people": "阿远会另找比赛队友，你仍能留下来一起玩。",
          "cost": "看见比赛照片时可能羡慕，也得放下证明自己更强的念头。"
        },
        {
          "id": "rest",
          "label": "暂停一季，改成散步和拉伸",
          "description": "跟队里请假，把晚上留给睡觉、散步和轻量活动。 先六周，再按身体感觉决定。 少些热闹与竞技兴奋，体能练习也会慢下来。",
          "effects": {
            "energy": 7,
            "freedom": 3,
            "connection": -2,
            "joy": -2
          },
          "outcome": "第一晚你差点又拿球鞋出门，最后穿了普通鞋。走到河边没有计时，看到群里合照还是有点惦记。",
          "removeFlags": [
            "training_question",
            "training_cycle"
          ],
          "action": "跟队里请假，把晚上留给睡觉、散步和轻量活动。",
          "time": "先六周，再按身体感觉决定。",
          "people": "提前告诉阿远别给你占名额，仍可约不带盘的晚饭。",
          "cost": "少些热闹与竞技兴奋，体能练习也会慢下来。"
        }
      ],
      "astroThemes": [
        "body-rhythm",
        "peer-negotiation"
      ]
    },
    {
      "id": "ordinary-day-design",
      "title": "又九点了，你还在想今晚吃什么",
      "prompt": "冰箱里有黄瓜、两颗蛋和一盒快忘掉的菜。你站在厨房门口刷外卖，越刷越烦。{friend}问下次能不能来吃饭，你想答应，又记得上一次做完只剩洗锅的力气。",
      "dimension": "joy",
      "kind": "simulation",
      "cooldown": 8,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "sourceIds": [
        "S02",
        "S29"
      ],
      "triggerEventIds": [
        "egg-morning",
        "cooking-too-much",
        "leisure-guilt"
      ],
      "options": [
        {
          "id": "kitchen",
          "label": "固定三道会做的菜，周日备好",
          "description": "买够几天的普通食材，把晚饭缩成不必查菜谱的组合。 每周日一小时，工作日晚饭半小时。 吃得会重复，周日得少睡一会儿懒觉。",
          "effects": {
            "joy": 5,
            "energy": 3,
            "freedom": -3,
            "reserve": -2
          },
          "outcome": "第三天你又煎蛋，边缘比前一天更脆。阿远说黄瓜好吃，你差点解释没什么，最后只问要不要再来点盐。",
          "addFlags": [
            "kitchen_routine"
          ],
          "action": "买够几天的普通食材，把晚饭缩成不必查菜谱的组合。",
          "time": "每周日一小时，工作日晚饭半小时。",
          "people": "阿远来时也吃这几道，不再为了招待做满一桌。",
          "cost": "吃得会重复，周日得少睡一会儿懒觉。"
        },
        {
          "id": "portable",
          "label": "只留一口小锅，走到哪都能做",
          "description": "挑两道少器具的饭，整理一个轻便厨房清单。 搬动时花半天准备，平日二十分钟做饭。 会少掉不少想尝试的大菜，买菜选择也更简单。",
          "effects": {
            "freedom": 4,
            "joy": 3,
            "energy": -3,
            "reserve": -1
          },
          "outcome": "新住处只有一口小锅，你仍煮出热腾腾的一碗。拍完照想发给阿远，发现这次没有先把桌上的杂物藏起来。",
          "addFlags": [
            "portable_kitchen"
          ],
          "action": "挑两道少器具的饭，整理一个轻便厨房清单。",
          "time": "搬动时花半天准备，平日二十分钟做饭。",
          "people": "不用要求合住的人配合复杂菜式，也能偶尔给朋友多做一份。",
          "cost": "会少掉不少想尝试的大菜，买菜选择也更简单。"
        },
        {
          "id": "buy-time",
          "label": "这阵子买简单熟食，把饭先吃上",
          "description": "选两家方便的日常店，忙的日子提前取餐，不再拖到深夜。 先用一个月，晚饭固定在七点左右。 多花一些餐费，也暂时放下做饭带来的成就感。",
          "effects": {
            "energy": 5,
            "craft": 3,
            "reserve": -5,
            "joy": -1
          },
          "outcome": "你提着一盒热饭上楼，电脑还在等回复。这次先坐下吃完才打开，饭没多惊艳，肚子却终于不空了。",
          "addFlags": [
            "simple_meal_period"
          ],
          "action": "选两家方便的日常店，忙的日子提前取餐，不再拖到深夜。",
          "time": "先用一个月，晚饭固定在七点左右。",
          "people": "告诉来做客的朋友这次一起在楼下吃，不硬撑主厨。",
          "cost": "多花一些餐费，也暂时放下做饭带来的成就感。"
        }
      ],
      "astroThemes": [
        "body-rhythm",
        "home-base"
      ]
    },
    {
      "id": "sponsor-or-voice",
      "title": "有人愿意出钱，但要先看稿",
      "prompt": "{project}被人看见后，一位合作方发来邀约：做三期内容，每期都要先审。你打开附件，有几句要求写得像已经替你说了话。{colleague}问你介不介意，你没立刻回答。",
      "dimension": "reserve",
      "kind": "simulation",
      "cooldown": 9,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "flagsAll": [
          "sponsor_offer"
        ]
      },
      "sourceIds": [
        "S12",
        "S16"
      ],
      "triggerEventIds": [
        "attention-exchange"
      ],
      "options": [
        {
          "id": "limited",
          "label": "只接一期，写清可改和不可改",
          "description": "提出单期合作，允许核实事实，不接受替你下结论。 两周完成一期，再决定是否继续。 对方可能嫌麻烦不合作，你也得花时间谈细节。",
          "effects": {
            "reserve": 5,
            "craft": 2,
            "freedom": -4,
            "energy": -3
          },
          "outcome": "对方删回一句很像广告的话，你把原句补了回去。邮件来回三轮才确认，你读完稿时终于不像在替别人念。",
          "addFlags": [
            "limited_sponsor"
          ],
          "removeFlags": [
            "sponsor_offer"
          ],
          "action": "提出单期合作，允许核实事实，不接受替你下结论。",
          "time": "两周完成一期，再决定是否继续。",
          "people": "让合作方提前知道你的要求，不把争执留到发布前。",
          "cost": "对方可能嫌麻烦不合作，你也得花时间谈细节。"
        },
        {
          "id": "no",
          "label": "谢绝这次合作，自己完成",
          "description": "回复不适合当前作品，把原计划按自己的节奏做完。 这个月少接一项收费合作。 少一笔进账，制作费用仍得自己安排。",
          "effects": {
            "freedom": 5,
            "joy": 2,
            "reserve": -4,
            "connection": -1
          },
          "outcome": "谢绝邮件发出，你又看了一眼报价。晚上录音时有句不顺，你重来四次，却不用再猜谁会不高兴。",
          "removeFlags": [
            "sponsor_offer"
          ],
          "action": "回复不适合当前作品，把原计划按自己的节奏做完。",
          "time": "这个月少接一项收费合作。",
          "people": "给对方明确答复，不一边拒绝一边等更好的价码。",
          "cost": "少一笔进账，制作费用仍得自己安排。"
        },
        {
          "id": "collab",
          "label": "改成共同创作，当面谈分工",
          "description": "请对方派一位真正参与制作的人，与小岑一起试一小段。 先合作三周，只完成一段样片。 你不再独占作品署名，沟通比一个人做更慢。",
          "effects": {
            "connection": 4,
            "reserve": 2,
            "freedom": -3,
            "energy": -2
          },
          "outcome": "第一次开会彼此都很客气。剪到一半你们为十秒争了起来，后来小岑放出第三种剪法，大家才一起安静看完。",
          "peopleDelta": 1,
          "addFlags": [
            "co_creation"
          ],
          "removeFlags": [
            "sponsor_offer"
          ],
          "action": "请对方派一位真正参与制作的人，与小岑一起试一小段。",
          "time": "先合作三周，只完成一段样片。",
          "people": "双方都要具体动手，也可能对说法意见不同。",
          "cost": "你不再独占作品署名，沟通比一个人做更慢。"
        }
      ],
      "astroThemes": [
        "public-role",
        "money-boundaries"
      ]
    },
    {
      "id": "record-audience",
      "title": "旧本子翻到一页，你忽然不想发了",
      "prompt": "你在{location}整理多年记录，原本想挑几页给人看。翻到一段写朋友的旧事，才发现当年的自己很肯定，也很不公平。光标停在发布按钮上，你把那个人的名字遮住了。",
      "dimension": "craft",
      "kind": "simulation",
      "cooldown": 9,
      "minAge": 40,
      "maxAge": 100,
      "prerequisites": {},
      "sourceIds": [
        "S12",
        "S16",
        "S02"
      ],
      "triggerEventIds": [
        "author-legend",
        "missing-original",
        "two-accounts"
      ],
      "options": [
        {
          "id": "excerpt",
          "label": "只发一段，先删掉他人的细节",
          "description": "挑一小段主要写自己的经历，请涉及的人同意后再保留必要内容。 本周花两个晚上整理，不急着连载。 故事没那么完整，也得删掉自己很喜欢的一些句子。",
          "effects": {
            "craft": 4,
            "connection": 3,
            "freedom": -3,
            "energy": -3
          },
          "outcome": "你把最漂亮的一段删了，页面短了很多。收到第一条“这一句我懂”时，你没有再把删掉的内容补回去。",
          "addFlags": [
            "public_excerpt"
          ],
          "action": "挑一小段主要写自己的经历，请涉及的人同意后再保留必要内容。",
          "time": "本周花两个晚上整理，不急着连载。",
          "people": "读者看到的是节选，朋友有权说不愿被写进去。",
          "cost": "故事没那么完整，也得删掉自己很喜欢的一些句子。"
        },
        {
          "id": "circle",
          "label": "约三位熟人，读完当面聊",
          "description": "打印少量节选，邀请愿意读的人来吃饭，不公开上传。 下个月用一个晚上见面。 传播很慢，也会听到不太好受的纠正。",
          "effects": {
            "connection": 4,
            "craft": 2,
            "energy": -3,
            "joy": -1
          },
          "outcome": "阿远指着一行说“那天不是这么回事”。你本想争辩，翻了翻照片，最后拿笔把日期划掉，重新写了。",
          "addFlags": [
            "small_reading_circle"
          ],
          "action": "打印少量节选，邀请愿意读的人来吃饭，不公开上传。",
          "time": "下个月用一个晚上见面。",
          "people": "允许朋友指出你记错的事，不把反馈当作夸奖环节。",
          "cost": "传播很慢，也会听到不太好受的纠正。"
        },
        {
          "id": "private",
          "label": "这部分自己收着，只整理日期",
          "description": "给记录编号和备份，暂时不邀请任何人阅读。 每周半小时，慢慢整理完一册。 少了被理解的机会，也不会马上有外面的回应。",
          "effects": {
            "freedom": 4,
            "energy": 3,
            "connection": -2,
            "craft": -1
          },
          "outcome": "文件夹整理好后没人来点赞。你合上电脑，把旧本放回抽屉，晚饭时忽然想起一件以前没记住的小事。",
          "addFlags": [
            "private_archive"
          ],
          "action": "给记录编号和备份，暂时不邀请任何人阅读。",
          "time": "每周半小时，慢慢整理完一册。",
          "people": "不用替读者解释，但不能擅自把他人私事交给别人。",
          "cost": "少了被理解的机会，也不会马上有外面的回应。"
        }
      ],
      "astroThemes": [
        "self-recognition",
        "legacy"
      ]
    },
    {
      "id": "mentoring-shape",
      "title": "有人带着真正卡住的作品来找你",
      "prompt": "一位成年新手在活动结束后留下来，打开电脑说：“我不是想听大方向，这里到底该怎么改？”你看了十分钟，发现自己很想帮，也怕从此每周都变成等你批作业。",
      "dimension": "connection",
      "kind": "simulation",
      "cooldown": 9,
      "minAge": 50,
      "maxAge": 100,
      "prerequisites": {
        "flagsAll": [
          "teaching_offer"
        ]
      },
      "sourceIds": [
        "S06",
        "S12",
        "S26"
      ],
      "triggerEventIds": [
        "teach-concrete"
      ],
      "options": [
        {
          "id": "regular",
          "label": "约六次小组课，每次看真作品",
          "description": "请参与者带实际问题，约定只陪这一轮，不代做。 三个月，每两周一次两小时。 少一些自己的空闲，准备课件比想象中花时间。",
          "effects": {
            "connection": 6,
            "craft": 3,
            "freedom": -4,
            "energy": -4
          },
          "outcome": "第一堂课没人按你准备的顺序问。你把幻灯片关掉，拉过一把椅子，先看对方卡住的那一页。",
          "peopleDelta": 1,
          "addFlags": [
            "community_started"
          ],
          "removeFlags": [
            "teaching_offer"
          ],
          "action": "请参与者带实际问题，约定只陪这一轮，不代做。",
          "time": "三个月，每两周一次两小时。",
          "people": "你要准时到场，也要允许别人不采纳你的意见。",
          "cost": "少一些自己的空闲，准备课件比想象中花时间。"
        },
        {
          "id": "office",
          "label": "每月开放一晚，只回答具体问题",
          "description": "发出固定时段，来之前先交一页问题，不建立长期指导承诺。 每月最后一个周三，两小时。 不一定看得到谁最终做成，也得拒绝课外追问。",
          "effects": {
            "connection": 3,
            "freedom": 3,
            "craft": -1,
            "energy": -2
          },
          "outcome": "有人散场后又追到门口，你指了指下次日期。走远几步你有点内疚，回家却终于吃到了热饭。",
          "addFlags": [
            "bounded_mentoring"
          ],
          "removeFlags": [
            "teaching_offer"
          ],
          "action": "发出固定时段，来之前先交一页问题，不建立长期指导承诺。",
          "time": "每月最后一个周三，两小时。",
          "people": "想继续找你的人需要等待，下课后各自完成。",
          "cost": "不一定看得到谁最终做成，也得拒绝课外追问。"
        },
        {
          "id": "learn",
          "label": "不接指导，和他一起报新课",
          "description": "坦白自己也有不会的，推荐合适老师，挑一门新课做同学。 接下来八周，每周一起上一次课。 放下被请教的满足感，课堂上可能比新人做得还慢。",
          "effects": {
            "joy": 4,
            "craft": 3,
            "connection": -3,
            "reserve": -2
          },
          "outcome": "老师让大家从最基础的一步做起，你的第一次也没成功。旁边的人递来工具，你们对视一下，都笑了。",
          "addFlags": [
            "late_new_interest"
          ],
          "removeFlags": [
            "teaching_offer"
          ],
          "action": "坦白自己也有不会的，推荐合适老师，挑一门新课做同学。",
          "time": "接下来八周，每周一起上一次课。",
          "people": "对方不再把你当随时给答案的人，你也要重新交作业。",
          "cost": "放下被请教的满足感，课堂上可能比新人做得还慢。"
        }
      ],
      "astroThemes": [
        "knowledge",
        "legacy"
      ]
    },
    {
      "id": "scale-of-success",
      "title": "好几个人催更新，你开始考虑招人",
      "prompt": "{project}终于有人反复使用，收件箱也多了支持和催促。{colleague}说再这样你会回不过来。你高兴了半天，晚上看到一条抱怨，又开始想是不是该把摊子做大。",
      "dimension": "craft",
      "kind": "simulation",
      "cooldown": 12,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "projectStatus": [
          "active"
        ],
        "flagsAll": [
          "repeat_users"
        ],
        "flagsAny": [
          "founder_path",
          "independent_path",
          "side_project"
        ]
      },
      "sourceIds": [
        "S07",
        "S13",
        "S15"
      ],
      "triggerEventIds": [
        "users-return",
        "small-paid-pilot"
      ],
      "options": [
        {
          "id": "grow",
          "label": "找一位搭档，试着做成小团队",
          "description": "先写清第一份工作与可支付周期，找人一起做三个月。 三个月试配合，每周留半天处理团队事务。 招聘和管理都花钱，也可能发现自己并不喜欢带人。",
          "effects": {
            "craft": 5,
            "connection": 3,
            "reserve": -7,
            "energy": -6,
            "freedom": -3
          },
          "outcome": "第一天新同事问了十几个你以为显然的问题。你答到下午有点烦，才发现自己的很多决定从没写清。",
          "peopleDelta": 1,
          "set": {
            "vocation": "小团队创业者"
          },
          "addFlags": [
            "founder_path",
            "company_formed"
          ],
          "removeFlags": [
            "independent_path",
            "employee_path"
          ],
          "action": "先写清第一份工作与可支付周期，找人一起做三个月。",
          "time": "三个月试配合，每周留半天处理团队事务。",
          "people": "新搭档需要稳定答复，你会少一些独自写产品的时间。",
          "cost": "招聘和管理都花钱，也可能发现自己并不喜欢带人。"
        },
        {
          "id": "small",
          "label": "不招人，只维护最常用的部分",
          "description": "明确更新频率，关掉暂时接不住的功能申请。 接下来半年，每月发布一次小更新。 会错过某些增长机会，也可能有人转去别的产品。",
          "effects": {
            "energy": 4,
            "freedom": 4,
            "joy": 2,
            "reserve": -2,
            "craft": -1
          },
          "outcome": "你发出缩短的路线图，收到一封失望的回信。隔天另一个人说“现在这样就够用”，你又反复读了两遍。",
          "addFlags": [
            "small_scale"
          ],
          "action": "明确更新频率，关掉暂时接不住的功能申请。",
          "time": "接下来半年，每月发布一次小更新。",
          "people": "向使用者说明不会什么都做，小岑不再为新承诺救火。",
          "cost": "会错过某些增长机会，也可能有人转去别的产品。"
        },
        {
          "id": "organization",
          "label": "找合适团队接着做，自己加入",
          "description": "谈清谁继续维护、你具体做什么，再处理转交。 用两个月试合作，不只谈一次发布。 独自定节奏的日子会少，也不再只有你的名字在前面。",
          "effects": {
            "reserve": 6,
            "craft": 3,
            "freedom": -6,
            "joy": -2
          },
          "outcome": "第一次新团队例会有人把功能排到了后面。你差点直接否决，后来拿出使用记录，重新解释了为什么它重要。",
          "set": {
            "vocation": "组织中的产品角色"
          },
          "addFlags": [
            "employee_path"
          ],
          "removeFlags": [
            "founder_path",
            "company_formed",
            "independent_path"
          ],
          "action": "谈清谁继续维护、你具体做什么，再处理转交。",
          "time": "用两个月试合作，不只谈一次发布。",
          "people": "使用者会面对新团队，你需要向对方说明原来的承诺。",
          "cost": "独自定节奏的日子会少，也不再只有你的名字在前面。"
        }
      ],
      "astroThemes": [
        "public-role",
        "craft-iteration"
      ]
    },
    {
      "id": "buffer-pressure",
      "title": "账单到了，合作款还没来",
      "prompt": "你在{location}核对下个月的房租和工具续费，发现原本等着的一笔合作款仍没到账。屏幕另一边的原型还开着，你想继续，又知道再说“应该快了”并不能让账单消失。",
      "dimension": "reserve",
      "kind": "simulation",
      "cooldown": 7,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {
        "maxStats": {
          "reserve": 40
        }
      },
      "sourceIds": [
        "S08",
        "S15"
      ],
      "triggerEventIds": [
        "runway-question",
        "delayed-payment",
        "travel-change-cost"
      ],
      "options": [
        {
          "id": "work",
          "label": "先接一段确定的合作工作",
          "description": "确认任务和结款时间，把白天固定几天交给短期合作。 先做两个月，每周三天。 自己的作品暂时慢下来，日历不再全由自己排。",
          "effects": {
            "reserve": 7,
            "energy": 1,
            "freedom": -5,
            "craft": -3
          },
          "outcome": "你把合作开始日期写好，给原型加了暂停更新说明。第二天早起赶车有点不甘心，心里却安静了一些。",
          "addFlags": [
            "steady_contract"
          ],
          "removeFlags": [
            "runway_question",
            "exchange_unclear"
          ],
          "action": "确认任务和结款时间，把白天固定几天交给短期合作。",
          "time": "先做两个月，每周三天。",
          "people": "告诉小岑自己的回复会慢，也主动确认合作方的付款节点。",
          "cost": "自己的作品暂时慢下来，日历不再全由自己排。",
          "set": {
            "projectStatus": "paused"
          }
        },
        {
          "id": "reduce",
          "label": "把住处和订阅都降一档",
          "description": "取消暂时不用的工具，找更便宜且可行的住处，暂停远行。 本月完成调整，三个月不加新订阅。 搬动很麻烦，也会失去一些顺手工具和舒适习惯。",
          "effects": {
            "reserve": 3,
            "energy": 4,
            "joy": -2,
            "connection": -2
          },
          "outcome": "退订到最后一项你还犹豫了一会儿。晚上阿远约饭，你说换楼下那家面馆吧，对方回“正好我也想吃”。",
          "addFlags": [
            "low_overhead"
          ],
          "removeFlags": [
            "runway_question",
            "exchange_unclear"
          ],
          "action": "取消暂时不用的工具，找更便宜且可行的住处，暂停远行。",
          "time": "本月完成调整，三个月不加新订阅。",
          "people": "请朋友理解你少出门，不为体面继续点贵的餐。",
          "cost": "搬动很麻烦，也会失去一些顺手工具和舒适习惯。"
        },
        {
          "id": "one-test",
          "label": "只做最后一次窄测试，到期就停",
          "description": "不添设备，只修一个最可能让人回来用的问题，设明确结束日。 给自己四周，之后按结果收尾。 这四周仍有支出，失败时必须真停，不能换个名义重来。",
          "effects": {
            "craft": 4,
            "reserve": -4,
            "energy": -3,
            "freedom": 1
          },
          "outcome": "你在纸日历最后一天画了一条粗线。写下日期时手很快，到了晚上又盯着它看了很久。",
          "set": {
            "projectStatus": "active"
          },
          "addFlags": [
            "bounded_last_test"
          ],
          "removeFlags": [
            "runway_question",
            "exchange_unclear"
          ],
          "action": "不添设备，只修一个最可能让人回来用的问题，设明确结束日。",
          "time": "给自己四周，之后按结果收尾。",
          "people": "先向小岑说明不会再延期，也不要求别人免费陪做。",
          "cost": "这四周仍有支出，失败时必须真停，不能换个名义重来。"
        }
      ],
      "astroThemes": [
        "money-boundaries",
        "inner-standards"
      ]
    },
    {
      "id": "connection-style",
      "title": "周末邀请来了，你却有点怕回消息",
      "prompt": "{friend}问要不要把几位新认识的人一起叫来吃饭。你想热闹，又想到前阵子群消息响个不停，真正想聊的话反而没有说。冰箱里只有两人份的菜，你站着算了一会儿。",
      "dimension": "connection",
      "kind": "simulation",
      "cooldown": 9,
      "minAge": 27,
      "maxAge": 100,
      "prerequisites": {},
      "sourceIds": [
        "S02",
        "S17",
        "S23"
      ],
      "triggerEventIds": [
        "team-newcomer",
        "time-zone-friend",
        "train-conversation",
        "leaving-city"
      ],
      "options": [
        {
          "id": "organize",
          "label": "约一次小聚，自己做东",
          "description": "请阿远一起邀请六位成年人，每人带一道简单吃的。 这周六一晚，提前半天准备。 周末会累，饭后碗筷和群里的后续消息也归你接一部分。",
          "effects": {
            "connection": 6,
            "joy": 3,
            "energy": -5,
            "freedom": -3
          },
          "outcome": "六点少来两人，菜却没少。大家挤在桌边争论哪道最咸，你原本怕冷场，最后反而忘了看手机。",
          "peopleDelta": 1,
          "addFlags": [
            "community_started"
          ],
          "action": "请阿远一起邀请六位成年人，每人带一道简单吃的。",
          "time": "这周六一晚，提前半天准备。",
          "people": "你负责让新人能说上话，也得处理临时取消的人。",
          "cost": "周末会累，饭后碗筷和群里的后续消息也归你接一部分。"
        },
        {
          "id": "few",
          "label": "只约阿远和一位老朋友",
          "description": "谢绝大聚会，选个能慢慢说话的小店吃饭。 这周留一个晚上，不再加第二场。 认识新人的机会少一点，旧关系也可能聊出不舒服的真话。",
          "effects": {
            "connection": 4,
            "energy": 1,
            "freedom": -2,
            "craft": -1
          },
          "outcome": "阿远迟到了十分钟，坐下先说最近不太顺。你本来准备的趣闻没讲，帮他把那碗快凉的面拌了拌。",
          "addFlags": [
            "few_deep_links"
          ],
          "action": "谢绝大聚会，选个能慢慢说话的小店吃饭。",
          "time": "这周留一个晚上，不再加第二场。",
          "people": "有人不会被邀请，你要接受自己没法每回照顾所有人。",
          "cost": "认识新人的机会少一点，旧关系也可能聊出不舒服的真话。"
        },
        {
          "id": "solo",
          "label": "这周不约人，一个人出门走走",
          "description": "回复今晚想独处，关掉群提示，给自己排一个不赶路的下午。 只留这一个周末，下周再联系。 会错过这次热闹，安静下来时也可能有些孤单。",
          "effects": {
            "freedom": 4,
            "energy": 3,
            "connection": -3,
            "joy": -1
          },
          "outcome": "下午你走进一家没去过的杂货店，摸了摸一只难看的杯子。想发给朋友时又停住，最后自己笑了一下。",
          "addFlags": [
            "solitude_period"
          ],
          "action": "回复今晚想独处，关掉群提示，给自己排一个不赶路的下午。",
          "time": "只留这一个周末，下周再联系。",
          "people": "让阿远知道不是在生气，也不要求朋友一直等你。",
          "cost": "会错过这次热闹，安静下来时也可能有些孤单。"
        }
      ],
      "astroThemes": [
        "peer-negotiation",
        "home-base"
      ]
    },
    {
      "id": "work-continuation",
      "title": "小岑想接着改你那份旧作品",
      "prompt": "{colleague}把{project}的旧文件打开，指着一处说：“这一段我想重做，能不能让我来？”你第一反应是怕被改坏，第二反应才是高兴它还有人惦记。你们把电脑转到了桌子中间。",
      "dimension": "craft",
      "kind": "simulation",
      "cooldown": 9,
      "minAge": 55,
      "maxAge": 100,
      "prerequisites": {
        "flagsAll": [
          "continuation_offer"
        ],
        "projectStatus": [
          "active",
          "completed"
        ]
      },
      "sourceIds": [
        "S07",
        "S12"
      ],
      "triggerEventIds": [
        "new-editor"
      ],
      "options": [
        {
          "id": "maintainer",
          "label": "交给小岑维护，约好每季看一次",
          "description": "整理必要文件，允许对方改动，先约定署名和答疑次数。 用一个月交接，以后每季讨论一次。 作品可能长成你不熟悉的样子，也得接受别人删掉旧段落。",
          "effects": {
            "freedom": 5,
            "craft": 2,
            "connection": 2,
            "joy": -2
          },
          "outcome": "新版本删了你最早写的一页。你盯了很久，后来收到小岑发来的使用反馈，才把想写的长评论缩成一句。",
          "addFlags": [
            "work_shared"
          ],
          "removeFlags": [
            "continuation_offer"
          ],
          "action": "整理必要文件，允许对方改动，先约定署名和答疑次数。",
          "time": "用一个月交接，以后每季讨论一次。",
          "people": "小岑能自己作决定，你会从每天被找变成偶尔被问。",
          "cost": "作品可能长成你不熟悉的样子，也得接受别人删掉旧段落。"
        },
        {
          "id": "edition",
          "label": "做成一份定稿，先不继续维护",
          "description": "修完明显问题，写明版本日期，把可读文件整理完整。 用六周完成这一次，此后不再承诺更新。 会有人失望，作品也可能慢慢不适合新的用法。",
          "effects": {
            "craft": 5,
            "energy": -4,
            "connection": -1,
            "reserve": -2
          },
          "outcome": "你在最后一个文件名后面写好日期。小岑问要不要再加一节，你笑着摇头，第一次没有随后补一句“其实也可以”。",
          "set": {
            "projectStatus": "completed"
          },
          "addFlags": [
            "finite_edition"
          ],
          "removeFlags": [
            "continuation_offer"
          ],
          "action": "修完明显问题，写明版本日期，把可读文件整理完整。",
          "time": "用六周完成这一次，此后不再承诺更新。",
          "people": "让读者知道这是定稿，也请小岑不再替你答应新增。",
          "cost": "会有人失望，作品也可能慢慢不适合新的用法。"
        },
        {
          "id": "practice",
          "label": "留给自己慢慢改，不接续用承诺",
          "description": "感谢小岑愿意接手，暂不交出去，只保留个人练习版本。 每周一个下午，不设对外交付日。 少了共同完成的可能，也不会一直有人帮忙找问题。",
          "effects": {
            "joy": 4,
            "freedom": 4,
            "connection": -3,
            "craft": -1
          },
          "outcome": "午后你又改了一小段，没发出去。做饭时忽然想到更好的说法，擦干手记在纸上，饭还是比平时咸了一点。",
          "addFlags": [
            "private_practice"
          ],
          "removeFlags": [
            "continuation_offer"
          ],
          "action": "感谢小岑愿意接手，暂不交出去，只保留个人练习版本。",
          "time": "每周一个下午，不设对外交付日。",
          "people": "对方可以另做自己的东西，你不要求他等你想清楚。",
          "cost": "少了共同完成的可能，也不会一直有人帮忙找问题。"
        }
      ],
      "astroThemes": [
        "legacy",
        "craft-iteration"
      ]
    },
    {
      "id": "new-interest-scale",
      "title": "陶艺店的新学期开始报名了",
      "prompt": "你在{location}散步，路过一家教陶艺的小店。上次试做的杯子歪得很可爱，老师问你要不要接着学。{friend}说可以一起报名，你既想去，又想到每周固定到场会不会又变成任务。",
      "dimension": "joy",
      "kind": "simulation",
      "cooldown": 9,
      "minAge": 55,
      "maxAge": 100,
      "prerequisites": {},
      "sourceIds": [
        "S24",
        "S25",
        "S26"
      ],
      "triggerEventIds": [
        "later-beginner",
        "later-new-street"
      ],
      "options": [
        {
          "id": "year",
          "label": "报一学期，每周三去练",
          "description": "报名基础班，从揉泥开始，允许自己一直做得很慢。 一学期十六周，每周三下午。 少一些临时出门的下午，还要付课时和材料费用。",
          "effects": {
            "craft": 6,
            "joy": 3,
            "reserve": -4,
            "energy": -3,
            "connection": -1
          },
          "outcome": "第二次杯沿又塌了，你差点说自己不适合。老师让你把泥揉回去，你看着旁边同样歪的碗，终于坐下来重来。",
          "addFlags": [
            "late_study_cycle"
          ],
          "action": "报名基础班，从揉泥开始，允许自己一直做得很慢。",
          "time": "一学期十六周，每周三下午。",
          "people": "向老师按时交作品，也会常见到几位新同学。",
          "cost": "少一些临时出门的下午，还要付课时和材料费用。"
        },
        {
          "id": "once",
          "label": "只再体验一次，不买整套课",
          "description": "约一堂单次课，把上次没完成的杯子做完。 下周一个下午，之后再说。 会错过连续练习的进步，也可能再见不到这批同学。",
          "effects": {
            "joy": 4,
            "energy": 3,
            "craft": -2
          },
          "outcome": "杯子烧出来仍旧一边高一边低。你把它带回家装笔，每次伸手都会碰到那块凸起，没有再把它藏进柜子。",
          "addFlags": [
            "light_interest"
          ],
          "action": "约一堂单次课，把上次没完成的杯子做完。",
          "time": "下周一个下午，之后再说。",
          "people": "告诉老师暂不续报，不为了客气一直点头。",
          "cost": "会错过连续练习的进步，也可能再见不到这批同学。"
        },
        {
          "id": "together",
          "label": "和阿远一起报四次试课",
          "description": "约好互相提醒出门，只买四次课，不替对方决定是否续学。 四周，每周约一个下午。 两个人协调比独自去更麻烦，聊天也可能耽误练习。",
          "effects": {
            "connection": 4,
            "joy": 4,
            "energy": -3,
            "freedom": -2
          },
          "outcome": "第一堂阿远就把泥甩到了袖口，你笑得差点做歪。散场买水时他问下次还来吗，你说来，别又迟到。",
          "peopleDelta": 1,
          "addFlags": [
            "shared_beginner"
          ],
          "action": "约好互相提醒出门，只买四次课，不替对方决定是否续学。",
          "time": "四周，每周约一个下午。",
          "people": "阿远也会有事缺席，你们各自对自己的报名负责。",
          "cost": "两个人协调比独自去更麻烦，聊天也可能耽误练习。"
        }
      ],
      "astroThemes": [
        "knowledge",
        "body-rhythm"
      ]
    }
  ]
};})(typeof window!=='undefined'?window:globalThis);
