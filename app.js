/* =========================================================
   行笺 · Travel Book
   All itinerary content lives in DESTINATIONS below.
   Swap the sample trips for your own — no build step needed.
   ========================================================= */

const DESTINATIONS = {
  kyoto: {
    id: "kyoto",
    name: "京都",
    en: "KYOTO",
    country: "JAPAN",
    region: "关西",
    season: "红叶季",
    coords: "35.0116° N / 135.7681° E",
    coverQuote: "把日子，过成一首俳句。",
    coverRoman: "HIGASHIYAMA · ARASHIYAMA · KITAYAMA · FUSHIMI",
    titleHtml: "把京都，<em>走成四天</em>。",
    manifesto:
      "不赶路，也不赶景点。四天只绕着东山、岚山、北山与伏见慢慢走，把清晨留给寺院，把傍晚留给鸭川，把胃留给町屋里的汤豆腐和一杯手冲。",
    oneThing: "在鸭川边，等一次完整的日落。",
    why:
      "四个区域各留一天，减少跨城移动；每天只安排三站，午后留出一段可以反悔的空白。红叶季的京都适合早起，也适合早睡。",
    weather: "11月 · 8–17°C",
    access: "关西机场 → 京都站 · 75 min",
    bestFor: "第一次去京都 / 红叶季",
    pact: [
      { title: "早起", text: "七点前进寺院，把最好的光留给自己。" },
      { title: "留白", text: "每天留一个没有安排的下午，允许自己走丢。" },
      { title: "跟着季节吃", text: "红叶季吃栗子、柿子和新米，别只吃攻略。" }
    ],
    bookings: [
      "寺院夜间拜观 · 提前 1 周",
      "汤豆腐 / 怀石料理 · 提前 3 天",
      "岚山小火车 · 提前 1 个月"
    ],
    budget: {
      total: 8600,
      items: [
        { label: "住宿", value: 3200 },
        { label: "餐饮", value: 1800 },
        { label: "交通", value: 1200 },
        { label: "门票", value: 900 },
        { label: "其他", value: 1500 }
      ]
    },
    packing: [
      "舒适的步行鞋",
      "薄羽绒 / 防风外套",
      "一双好走的袜子",
      "交通 IC 卡",
      "预约确认单",
      "折叠伞",
      "相机与备用电池",
      "一本小书"
    ],
    closingQuote: "旅行不是把地图走满，而是让某一个下午，慢到可以记住。",
    closingCite: "行笺 · 京都手记",
    days: [
      {
        area: "东山 · 祇园",
        en: "HIGASHIYAMA",
        title: "初见东山",
        sub: "在千年石阶上，把时间走慢一点。",
        note: "今天只做一件事：把脚步放慢到和石板路一样的速度。",
        food: "汤豆腐 · 出町ふたば",
        stay: "东山 · 町家旅馆",
        walk: "12,000 步",
        slowNote: "把下午交给鸭川边的长椅，什么都不做也算行程。",
        extra: "高台寺夜间特别拜观，红叶季限定，20:30 前入场。",
        blocks: [
          {
            time: "08:00",
            name: "清水寺",
            desc: "从仁王门沿石阶上行，赶在旅行团之前听一次晨钟。站在舞台上，看整座京都从薄雾里醒过来。",
            tags: ["建筑", "摄影"],
            cost: "¥500"
          },
          {
            time: "12:30",
            name: "二年坂 · 三年坂",
            desc: "在町家屋檐下吃一碗汤豆腐，顺手拐进八坂塔旁的小巷。不要看地图，迷路才是这一带的正确打开方式。",
            tags: ["美食", "人文"],
            cost: "¥2,400"
          },
          {
            time: "18:30",
            name: "鸭川",
            desc: "从四条大桥走到三条，看等距坐着的人与暮色。风从河面吹上来，京都突然变得很轻。",
            tags: ["自然", "散步"],
            cost: "免费"
          }
        ]
      },
      {
        area: "岚山 · 桂川",
        en: "ARASHIYAMA",
        title: "沿川慢行",
        sub: "竹林、山门与一杯不赶时间的手冲。",
        note: "岚山的好，不在打卡清单里，在桂川边那阵没有来由的风里。",
        food: "汤豆腐 · 抹茶芭菲",
        stay: "岚山 · 川边民宿",
        walk: "9,800 步",
        slowNote: "取消下午的第二个景点，把时间留给一家只有六个座位的喫茶店。",
        extra: "搭岚电到北野白梅町，在商店街吃一份刚出锅的可乐饼。",
        blocks: [
          {
            time: "07:30",
            name: "竹林小径",
            desc: "在人群抵达前穿过竹林，听风从竹梢落下来。光线被切成一条一条，落在肩上。",
            tags: ["自然", "摄影"],
            cost: "免费"
          },
          {
            time: "11:30",
            name: "常寂光寺",
            desc: "登上小仓山，红叶从脚边一直烧到远处的比叡山。石阶不长，但每一步都值得停。",
            tags: ["建筑", "自然"],
            cost: "¥500"
          },
          {
            time: "16:00",
            name: "渡月桥 · 桂川",
            desc: "坐在桥下的石阶上喝一杯手冲，等山影变蓝。回程不必原路，沿川走一段再搭车。",
            tags: ["咖啡", "散步"],
            cost: "¥900"
          }
        ]
      },
      {
        area: "北山 · 一乘寺",
        en: "KITAYAMA",
        title: "北山一隅",
        sub: "书店、苔藓和一条走不到头的哲学之道。",
        note: "京都的日常，藏在游客路线转弯后的那条小巷里。",
        food: "一乘寺拉面 · 豆饼",
        stay: "北山 · 公寓",
        walk: "10,500 步",
        slowNote: "在哲学之道中途拐进一家喫茶店，点一份厚蛋三明治，坐到日落。",
        extra: "去出町柳三角洲，看鸭川与高野川汇流，等一场晚霞。",
        blocks: [
          {
            time: "09:00",
            name: "银阁寺",
            desc: "看苔藓与枯山水在晨光里分出层次，再走一遍哲学之道。早晨的北山，连乌鸦都很安静。",
            tags: ["建筑", "自然"],
            cost: "¥500"
          },
          {
            time: "13:00",
            name: "惠文社一乘寺店",
            desc: "在旧书店里翻一本昭和时代的旅行杂志，买一张手绘地图。隔壁的喫茶店有很好的布丁。",
            tags: ["人文", "咖啡"],
            cost: "¥1,200"
          },
          {
            time: "17:30",
            name: "下鸭神社",
            desc: "穿过糺之森的原始林，在河合神社画一枚镜绘马。森林比神社更像目的地。",
            tags: ["建筑", "自然"],
            cost: "免费"
          }
        ]
      },
      {
        area: "伏见 · 宇治",
        en: "FUSHIMI",
        title: "伏见余韵",
        sub: "千本鸟居、通天桥，以及最后一碗抹茶。",
        note: "最后一天不赶路，把没去成的地方留给下一次。",
        food: "宇治抹茶 · 稻荷寿司",
        stay: "—",
        walk: "8,600 步",
        slowNote: "放弃宇治，留在京都站地下街买伴手礼，准时去机场。",
        extra: "京都站大阶段夜景，再从伊势丹顶楼看一次城市灯火。",
        blocks: [
          {
            time: "07:00",
            name: "伏见稻荷大社",
            desc: "千本鸟居在清晨几乎无人，走到四辻再折返。越往上，红色越安静。",
            tags: ["建筑", "摄影"],
            cost: "免费"
          },
          {
            time: "11:00",
            name: "东福寺",
            desc: "通天桥下的红叶像一片沉默的火。建议错峰入园，把正午留给附近的面馆。",
            tags: ["建筑", "自然"],
            cost: "¥600"
          },
          {
            time: "15:30",
            name: "宇治 · 平等院",
            desc: "在凤凰堂对岸喝一杯宇治抹茶，给旅程收尾。回程搭 JR，半小时就到京都站。",
            tags: ["美食", "建筑"],
            cost: "¥700"
          }
        ]
      }
    ]
  },

  dali: {
    id: "dali",
    name: "大理",
    en: "DALI",
    country: "CHINA",
    region: "云南",
    season: "风季",
    coords: "25.6065° N / 100.2676° E",
    coverQuote: "风从苍山来，日子在洱海里。",
    coverRoman: "CANGCHAN · ERHAI · XIZHOU · SHAXI",
    titleHtml: "把大理，<em>过成四天</em>。",
    manifesto:
      "把行程表上的空格留得比字多。一天绕湖，一天上山，一天去沙溪，剩下的时间交给古城的风、咖啡馆的狗和菜市场里刚出锅的乳扇。",
    oneThing: "在洱海边，什么也不做地坐一个下午。",
    why:
      "以古城为圆心，环湖与上山各占一天，最后一天去沙溪。每天只排三站，把日落留给同一个湖面，不必追着光跑。",
    weather: "11月 · 6–18°C",
    access: "大理机场 → 古城 · 40 min",
    bestFor: "想慢下来 / 第一次去大理",
    pact: [
      { title: "慢", text: "一天只去一个方向，风会带路。" },
      { title: "晒太阳", text: "下午三点后，把行程交给咖啡馆。" },
      { title: "少看攻略", text: "跟着本地人去菜市场吃一顿早饭。" }
    ],
    bookings: [
      "环湖包车 / 电动车 · 提前 1 天",
      "双廊海景房 · 提前 2 周",
      "沙溪往返车票 · 提前 1 天"
    ],
    budget: {
      total: 3200,
      items: [
        { label: "住宿", value: 1200 },
        { label: "餐饮", value: 700 },
        { label: "交通", value: 800 },
        { label: "门票", value: 200 },
        { label: "其他", value: 300 }
      ]
    },
    packing: [
      "防晒霜与墨镜",
      "薄外套 / 防风衣",
      "舒适的步行鞋",
      "保湿面霜",
      "相机",
      "充电宝",
      "环保杯",
      "一本想读的书"
    ],
    closingQuote: "大理不需要攻略，只需要把手机调成静音，把下午还给自己。",
    closingCite: "行笺 · 大理手记",
    days: [
      {
        area: "大理古城 · 才村",
        en: "OLD TOWN",
        title: "风从苍山来",
        sub: "从人民路走到洱海边，先把步子放慢。",
        note: "大理不需要攻略，只需要把手机调成静音。",
        food: "破酥粑粑 · 酸辣鱼",
        stay: "古城 · 白族院落",
        walk: "7,000 步",
        slowNote: "在才村找一家临海咖啡馆，坐到天完全黑。",
        extra: "古城人民路的小酒馆，听一场不知名的民谣。",
        blocks: [
          {
            time: "09:30",
            name: "大理古城",
            desc: "从南门走到人民路，避开主街，拐进床单厂艺术区。旧厂房里藏着书店、陶艺和一只很懒的猫。",
            tags: ["人文", "建筑"],
            cost: "免费"
          },
          {
            time: "13:00",
            name: "喜洲古镇",
            desc: "在四方街吃破酥粑粑，看白族照壁上的水墨。往巷子深处走，稻田会突然出现在墙外。",
            tags: ["美食", "建筑"],
            cost: "¥60"
          },
          {
            time: "18:00",
            name: "才村码头",
            desc: "洱海边的晚风把云吹成一条长带。找一块石头坐下，等天色从金到紫。",
            tags: ["自然", "摄影"],
            cost: "免费"
          }
        ]
      },
      {
        area: "洱海 · 环湖",
        en: "ERHAI LAKE",
        title: "环湖半圈",
        sub: "骑行、湖景与一场风大到说不出话的日落。",
        note: "环湖不必一圈，风大的时候就停下来。",
        food: "洱海鱼 · 乳扇",
        stay: "双廊 · 海景房",
        walk: "5,000 步 · 骑行 35km",
        slowNote: "骑到蟠溪就回头，把剩下的环湖路留给下次。",
        extra: "去挖色镇的小渔村，看归船的灯一盏盏亮起来。",
        blocks: [
          {
            time: "08:30",
            name: "龙龛码头",
            desc: "租一辆自行车，沿生态廊道向北，水杉在左手边。清晨的湖面像一块没有打磨完的镜子。",
            tags: ["自然", "摄影"],
            cost: "¥80"
          },
          {
            time: "12:30",
            name: "双廊",
            desc: "在玉几岛吃午饭，看太阳宫外的三角梅。午后的光很硬，适合躲进咖啡馆。",
            tags: ["美食", "自然"],
            cost: "¥180"
          },
          {
            time: "17:00",
            name: "鹿卧山",
            desc: "等一场苍山洱海的日落，风大到说不出话。回程叫车，别在夜里骑车。",
            tags: ["摄影", "自然"],
            cost: "免费"
          }
        ]
      },
      {
        area: "苍山 · 寂照庵",
        en: "CANGCHAN",
        title: "上山吃茶",
        sub: "松针、素斋与一条被云遮住的山路。",
        note: "苍山不说话，但它把云卷云舒都安排好了。",
        food: "寂照庵素斋 · 烤乳扇",
        stay: "古城 · 白族院落",
        walk: "11,000 步",
        slowNote: "不去寂照庵排队，改在感通寺喝茶，听僧人扫地。",
        extra: "晚上去古城床单厂，看一场独立电影。",
        blocks: [
          {
            time: "09:00",
            name: "苍山感通索道",
            desc: "上到清碧溪，沿玉带路走一段，松针铺满石阶。山里的空气有松脂和湿土的味道。",
            tags: ["自然", "摄影"],
            cost: "¥110"
          },
          {
            time: "12:00",
            name: "寂照庵",
            desc: "吃一顿素斋，在多肉植物和绣球花之间发呆。这里不烧香，只种花。",
            tags: ["美食", "建筑"],
            cost: "¥20"
          },
          {
            time: "16:30",
            name: "大理大学",
            desc: "在校园坡上看洱海，等下课的学生从身边经过。年轻和湖面一起发亮。",
            tags: ["人文", "摄影"],
            cost: "免费"
          }
        ]
      },
      {
        area: "沙溪 · 黑潓江",
        en: "SHAXI",
        title: "时间之外",
        sub: "茶马古道上的最后一个集市。",
        note: "沙溪的好，是它还没学会如何讨好游客。",
        food: "土八碗 · 石榴",
        stay: "—",
        walk: "6,500 步",
        slowNote: "在沙溪住一晚，第二天再回大理，行程留出弹性。",
        extra: "周五的沙溪集市，买一篮刚摘的石榴。",
        blocks: [
          {
            time: "07:30",
            name: "沙溪古镇",
            desc: "车程两小时，玉津桥上的晨雾还没散。古镇很小，半小时就能走完，但值得走三遍。",
            tags: ["人文", "摄影"],
            cost: "免费"
          },
          {
            time: "12:00",
            name: "寺登街",
            desc: "在古戏台旁吃一顿土八碗，下午去先锋书局。书店由粮仓改造，光从高处落下来。",
            tags: ["美食", "人文"],
            cost: "¥80"
          },
          {
            time: "16:00",
            name: "黑潓江",
            desc: "沿江走一段茶马古道，赶在日落前回大理。水声很轻，像有人在远处翻书。",
            tags: ["自然", "散步"],
            cost: "免费"
          }
        ]
      }
    ]
  },

  quanzhou: {
    id: "quanzhou",
    name: "泉州",
    en: "QUANZHOU",
    country: "CHINA",
    region: "福建",
    season: "海风季",
    coords: "24.8741° N / 118.6757° E",
    coverQuote: "半城烟火，半城仙。",
    coverRoman: "KAIYUAN · XUNPU · LUOYANG · ANXI",
    titleHtml: "把泉州，<em>吃成四天</em>。",
    manifesto:
      "泉州的好，不在景区大门里。它在开元寺的榕树下，在西街的面线糊摊前，在关岳庙的香火和菜市场的海腥味之间。四天，沿着老城、海岸和茶山，慢慢吃过去。",
    oneThing: "在开元寺的榕树下，听完一段南音。",
    why:
      "老城两天全靠走，一天去蟳埔与洛阳桥看海，一天上安溪喝茶。景点之间不超过半小时车程，把时间留给胃和巷子。",
    weather: "11月 · 18–26°C",
    access: "晋江机场 → 西街 · 30 min",
    bestFor: "吃货 / 人文漫游",
    pact: [
      { title: "先吃", text: "到一座城，先去菜市场，再去景点。" },
      { title: "走巷子", text: "主街给游客，巷子给本地人。" },
      { title: "喝茶", text: "每天留一泡茶的时间，泉州急不得。" }
    ],
    bookings: [
      "蟳埔簪花 · 可现场排队",
      "安溪茶园体验 · 提前 1 天",
      "崇武古城门票 · 现场购买"
    ],
    budget: {
      total: 2400,
      items: [
        { label: "住宿", value: 800 },
        { label: "餐饮", value: 600 },
        { label: "交通", value: 500 },
        { label: "门票", value: 200 },
        { label: "其他", value: 300 }
      ]
    },
    packing: [
      "轻便步行鞋",
      "防晒霜 / 帽子",
      "薄外套",
      "肠胃药",
      "湿巾",
      "相机",
      "环保袋",
      "一个好胃口"
    ],
    closingQuote: "茶要慢慢泡，城要慢慢走，泉州急不得。",
    closingCite: "行笺 · 泉州手记",
    days: [
      {
        area: "鲤城 · 西街",
        en: "LICHENG",
        title: "半城烟火",
        sub: "寺庙、菜市场与一条走到脚软的老街。",
        note: "泉州的神明和菜市场住得很近，这就是它的可爱。",
        food: "面线糊 · 姜母鸭",
        stay: "西街 · 闽南古厝",
        walk: "8,000 步",
        slowNote: "在开元寺古船陈列馆坐一下午，读一遍刺桐港的历史。",
        extra: "中山路骑楼下的老字号，来一碗四果汤。",
        blocks: [
          {
            time: "09:00",
            name: "开元寺",
            desc: "东西塔下的榕树遮住半个天空，听一段南音。大殿后面的古船馆，藏着这座港口的野心。",
            tags: ["建筑", "人文"],
            cost: "免费"
          },
          {
            time: "12:30",
            name: "西街",
            desc: "面线糊配油条，再从钟楼拐进裴巷。不要只走主街，巷子里才有真正的午饭。",
            tags: ["美食", "人文"],
            cost: "¥35"
          },
          {
            time: "18:00",
            name: "关岳庙",
            desc: "香火把夜色染成金色，看本地人掷筊。门口的石埕上，电动车和神明共享同一块地。",
            tags: ["人文", "摄影"],
            cost: "免费"
          }
        ]
      },
      {
        area: "蟳埔 · 东海",
        en: "XUNPU",
        title: "簪花与海",
        sub: "把春天戴在头上，把海蛎吃进肚子里。",
        note: "泉州的女性把春天戴在头上，也把日子过在手上。",
        food: "海蛎煎 · 石花膏",
        stay: "西街 · 闽南古厝",
        walk: "9,000 步",
        slowNote: "不拍簪花照，只去菜市场看海蛎怎么开。",
        extra: "晚上去领 SHOW 天地，看一场闽南语脱口秀。",
        blocks: [
          {
            time: "08:30",
            name: "蟳埔村",
            desc: "盘一个簪花围，穿一次大裾衫，在蚵壳厝前拍一张照片。花是假的，快乐是真的。",
            tags: ["人文", "摄影"],
            cost: "¥168"
          },
          {
            time: "13:00",
            name: "东海湾",
            desc: "吃刚上岸的海蛎，看惠安女在滩涂上挖蛏。海风里有一点点腥，也有一点点甜。",
            tags: ["美食", "自然"],
            cost: "¥120"
          },
          {
            time: "17:30",
            name: "真武庙",
            desc: "在石头山上等晋江入海口的日落。船从金光里穿过，像一封很慢的信。",
            tags: ["摄影", "人文"],
            cost: "免费"
          }
        ]
      },
      {
        area: "洛阳桥 · 崇武",
        en: "LUOYANG BRIDGE",
        title: "海风一千年",
        sub: "宋代石桥、牛肉羹与一座抗倭古城。",
        note: "一座桥站了一千年，海风还是当年的味道。",
        food: "牛肉羹 · 崇武鱼卷",
        stay: "西街 · 闽南古厝",
        walk: "7,500 步",
        slowNote: "不去崇武，改去蟳埔海边看日落，省下两小时车程。",
        extra: "晚上回西街，吃一碗热腾腾的牛肉面。",
        blocks: [
          {
            time: "09:00",
            name: "洛阳桥",
            desc: "走在宋代石桥上，看洛阳江的潮水涨落。桥墩上长满牡蛎，时间在这里有了壳。",
            tags: ["建筑", "摄影"],
            cost: "免费"
          },
          {
            time: "12:30",
            name: "桥南古街",
            desc: "在蔡襄祠旁吃一碗牛肉羹，听老人讲古。街很短，故事很长。",
            tags: ["美食", "人文"],
            cost: "¥40"
          },
          {
            time: "16:00",
            name: "崇武古城",
            desc: "沿城墙走一段，看惠安女从海门深处走来。石头城被海风磨得发亮。",
            tags: ["建筑", "自然"],
            cost: "¥45"
          }
        ]
      },
      {
        area: "安溪 · 茶山",
        en: "ANXI",
        title: "一山茶香",
        sub: "采一筐铁观音，学一次摇青。",
        note: "茶要慢慢泡，城要慢慢走，泉州急不得。",
        food: "茶油鸡 · 铁观音",
        stay: "—",
        walk: "5,000 步",
        slowNote: "不去安溪，留在泉州老城再走一遍巷子，把没吃的店补上。",
        extra: "西街天台看东西塔夜景，喝一瓶冰镇啤酒。",
        blocks: [
          {
            time: "08:00",
            name: "安溪茶园",
            desc: "车程一小时，在茶山上跟着茶农采一筐铁观音。露水打湿裤脚，空气里全是兰花香。",
            tags: ["自然", "人文"],
            cost: "¥80"
          },
          {
            time: "12:00",
            name: "茶农家",
            desc: "吃一顿茶油鸡，学一遍摇青和焙火。茶农说，好茶不急，急了就苦。",
            tags: ["美食", "人文"],
            cost: "¥150"
          },
          {
            time: "16:00",
            name: "清水岩",
            desc: "在千年古刹的檐下喝一杯新茶，然后回泉州。下山的路，比上山时慢。",
            tags: ["建筑", "人文"],
            cost: "¥20"
          }
        ]
      }
    ]
  }
};

const PARTIES = {
  solo: { label: "一个人", cover: "独自出发", count: 1 },
  couple: { label: "两个人", cover: "两人同行", count: 2 },
  friends: { label: "三五好友", cover: "三人成行", count: 3 },
  family: { label: "带上家人", cover: "家人同行", count: 3 }
};

const PACES = {
  slow: {
    label: "慢游",
    hint: "每天 3 站，但留出一段完整的空白。",
    desc: "慢游"
  },
  balanced: {
    label: "均衡",
    hint: "每天 3 站，留一点空白给偶遇。",
    desc: "均衡"
  },
  packed: {
    label: "紧凑",
    hint: "每天 3 站，再加一处顺路的小目的地。",
    desc: "紧凑"
  }
};

const INTERESTS = ["建筑", "咖啡", "自然", "美食", "摄影", "人文"];
const WD_CN = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const WD_EN = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const STORAGE_KEY = "xingjian-travel-book-v1";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const book = $("#book");
const stage = $("#stage");
const nav = $("#pageNav");
const counter = $("#pageCounter");
const form = $("#planner");
const dateInput = $("#startDate");
const partySelect = $("#party");
const paceHint = $("#paceHint");
const formNote = $("#formNote");
const generateButton = $("#generate");
const toastEl = $("#toast");

const today = new Date();
const twoWeeks = addDays(today, 14);

const state = {
  dest: "kyoto",
  start: toISO(twoWeeks),
  party: "couple",
  pace: "balanced",
  interests: ["建筑", "咖啡"],
  packed: []
};

let toastTimer = null;
let scrollFrame = null;
let activePage = 0;

/* ---------------------------------------------------------
   Date & formatting helpers
   --------------------------------------------------------- */

function addDays(date, amount) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
}

function toISO(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}

function parseISO(value) {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return Number.isNaN(date.getTime()) ? null : date;
}

function dot(date) {
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
}

function monthDay(date) {
  return `${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
}

function rangeLabel(start, dayCount) {
  const end = addDays(start, dayCount - 1);
  const endPrefix = end.getFullYear() === start.getFullYear() ? "" : `${end.getFullYear()}.`;
  return `${dot(start)} — ${endPrefix}${monthDay(end)}`;
}

function getStartDate() {
  return parseISO(state.start) || twoWeeks;
}

function money(value) {
  return `¥${Number(value).toLocaleString("zh-CN")}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getParty() {
  return PARTIES[state.party] || PARTIES.couple;
}

function getPace() {
  return PACES[state.pace] || PACES.balanced;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ---------------------------------------------------------
   Boot
   --------------------------------------------------------- */

loadState();
applyUrlState();
syncForm();
renderDestinationCards();
renderInterestChips();
dateInput.value = state.start;
partySelect.value = state.party;
setPace(state.pace);
paceHint.textContent = getPace().hint;
render({ animate: false });
updateFormNote();
bindEvents();

/* ---------------------------------------------------------
   State
   --------------------------------------------------------- */

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved || typeof saved !== "object") return;
    if (DESTINATIONS[saved.dest]) state.dest = saved.dest;
    if (parseISO(saved.start)) state.start = saved.start;
    if (PARTIES[saved.party]) state.party = saved.party;
    if (PACES[saved.pace]) state.pace = saved.pace;
    if (Array.isArray(saved.interests)) {
      const valid = saved.interests.filter((item) => INTERESTS.includes(item)).slice(0, 3);
      if (valid.length) state.interests = valid;
    }
    if (Array.isArray(saved.packed)) {
      state.packed = saved.packed.filter((item) => typeof item === "string").slice(0, 50);
    }
  } catch {
    /* A demo should still open when storage is unavailable. */
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* Ignore private-mode storage errors. */
  }
}

function applyUrlState() {
  try {
    const params = new URLSearchParams(window.location.search);
    if (DESTINATIONS[params.get("dest")]) state.dest = params.get("dest");
    if (parseISO(params.get("date"))) state.start = params.get("date");
    if (PARTIES[params.get("party")]) state.party = params.get("party");
    if (PACES[params.get("pace")]) state.pace = params.get("pace");
    const interests = (params.get("interests") || "")
      .split(",")
      .map((item) => item.trim())
      .filter((item) => INTERESTS.includes(item))
      .slice(0, 3);
    if (interests.length) state.interests = interests;
  } catch {
    /* URL parameters are a convenience, never a requirement. */
  }
}

function syncForm() {
  const destinationRadio = $(`input[name="destination"][value="${state.dest}"]`);
  if (destinationRadio) destinationRadio.checked = true;
  $$('input[name="pace"]').forEach((input) => {
    input.checked = input.value === state.pace;
  });
}

function setPace(pace) {
  state.pace = PACES[pace] ? pace : "balanced";
  $$('input[name="pace"]').forEach((input) => {
    input.checked = input.value === state.pace;
  });
  paceHint.textContent = getPace().hint;
}

/* ---------------------------------------------------------
   Controls
   --------------------------------------------------------- */

function renderDestinationCards() {
  const grid = $("#destGrid");
  grid.innerHTML = Object.values(DESTINATIONS)
    .map(
      (destination, index) => `
      <label class="dest-card">
        <input type="radio" name="destination" value="${destination.id}" ${destination.id === state.dest ? "checked" : ""}>
        <span class="dest-card-top">
          <span class="dest-index">0${index + 1}</span>
          <span class="dest-mark" aria-hidden="true"></span>
        </span>
        <span class="dest-name">${destination.name}</span>
        <span class="dest-meta">${destination.country} · ${destination.region}</span>
      </label>`
    )
    .join("");
}

function renderInterestChips() {
  const wrap = $("#interestChips");
  wrap.innerHTML = INTERESTS.map(
    (interest) => `
      <button type="button" class="chip" data-interest="${interest}" aria-pressed="${state.interests.includes(interest)}">${interest}</button>`
  ).join("");
}

function toggleInterest(interest) {
  if (state.interests.includes(interest)) {
    state.interests = state.interests.filter((item) => item !== interest);
  } else {
    state.interests = [...state.interests, interest].slice(-3);
  }
  $$(".chip").forEach((chip) => {
    chip.setAttribute("aria-pressed", String(state.interests.includes(chip.dataset.interest)));
  });
  render({ animate: false });
  saveState();
}

function updateFormNote() {
  const destination = DESTINATIONS[state.dest];
  const party = getParty();
  const total = destination.budget.total * party.count;
  formNote.textContent = `4天3夜 · ${destination.name} · ${party.label} · 合计 ${money(total)}`;
}

/* ---------------------------------------------------------
   Cover artwork
   --------------------------------------------------------- */

function contourLines() {
  let paths = "";
  for (let index = 0; index < 10; index += 1) {
    const y = 130 + index * 92;
    paths += `<path class="art-faint" d="M-60 ${y} C 150 ${y - 70}, 300 ${y + 46}, 470 ${y - 12} S 760 ${y + 34}, 860 ${y - 44}"/>`;
  }
  return paths;
}

function coverArt(destination) {
  const contours = contourLines();
  let landmark = "";

  if (destination.id === "kyoto") {
    landmark = `
      <circle class="art-sun" cx="206" cy="258" r="108"/>
      <g class="art-line">
        <path d="M-40 860 C 160 790, 300 900, 470 840 S 740 800, 850 860"/>
        <path d="M-40 930 C 160 860, 300 970, 470 910 S 740 870, 850 930"/>
      </g>
      <g class="art-ink">
        <path d="M30 582 Q 208 542, 386 582"/>
        <path d="M62 622 H 354"/>
        <path d="M116 582 V 840"/>
        <path d="M300 582 V 840"/>
        <path d="M196 582 H 220 V 622 H 196 Z"/>
      </g>`;
  } else if (destination.id === "dali") {
    landmark = `
      <circle class="art-sun" cx="618" cy="252" r="92"/>
      <g class="art-ink">
        <path d="M-40 982 L 96 826 L 204 936 L 320 786 L 430 950 L 526 860 L 610 982"/>
        <path d="M-40 1024 L 92 884 L 214 972 L 336 842 L 452 984 L 558 906 L 650 1024"/>
      </g>
      <g class="art-faint">
        <path d="M20 1058 H 700"/>
        <path d="M20 1084 H 700"/>
      </g>`;
  } else {
    landmark = `
      <circle class="art-sun" cx="618" cy="252" r="100"/>
      <g class="art-ink">
        <path d="M92 560 H 346"/>
        <path d="M104 604 H 334"/>
        <path d="M120 648 H 318"/>
        <path d="M134 692 H 304"/>
        <path d="M148 736 H 290"/>
        <path d="M164 780 H 274"/>
        <path d="M194 560 V 846"/>
        <path d="M228 560 V 846"/>
        <path d="M140 846 H 296"/>
      </g>
      <g class="art-line">
        <path d="M-30 900 C 120 862, 230 930, 380 894 S 650 862, 830 906"/>
        <path d="M-30 952 C 120 914, 230 982, 380 946 S 650 914, 830 958"/>
      </g>`;
  }

  return `<svg viewBox="0 0 794 1123" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    ${contours}
    ${landmark}
  </svg>`;
}

/* ---------------------------------------------------------
   Page builders
   --------------------------------------------------------- */

function pageOpen({ type = "", id, label, index, extraClass = "" }) {
  return `<article class="page ${type} ${extraClass}" id="page-${id}" data-page="${id}" data-label="${label}" style="--i:${index}">`;
}

function coverPage(destination, start) {
  const party = getParty();
  const year = start.getFullYear();
  return `
    ${pageOpen({ type: "page--cover", id: "cover", label: "封面", index: 0 })}
      <div class="cover-art">${coverArt(destination)}</div>
      <div class="cover-border"></div>
      <div class="cover-inner">
        <div class="cover-top">
          <div>
            <strong>TRAVEL BOOK</strong>
            旅行计划书 / NO. 001
          </div>
          <div style="text-align:right">
            <strong>${destination.season}</strong>
            ${destination.coords}
          </div>
        </div>

        <div class="cover-center">
          <div class="cover-copy">
            <p class="cover-country">${destination.country} · ${destination.region}</p>
            <p class="cover-quote">${destination.coverQuote}</p>
          </div>
          <div class="cover-title-block">
            <h2 class="cover-title">${destination.name}</h2>
            <p class="cover-roman"><span>${destination.en}</span><span>04 DAYS / 03 NIGHTS</span></p>
            <span class="cover-seal">行<br>笺</span>
          </div>
        </div>

        <div class="cover-bottom">
          <div>
            <span>WHEN / 日期</span>
            <strong>${rangeLabel(start, 4)}</strong>
          </div>
          <div>
            <span>WITH / 同行</span>
            <strong>${party.cover}</strong>
          </div>
          <div>
            <span>MADE BY / 出品</span>
            <strong>行笺 · ${year}</strong>
          </div>
        </div>
      </div>
    </article>`;
}

function overviewPage(destination, start, index) {
  const party = getParty();
  const pace = getPace();
  const totalStops = destination.days.reduce((sum, day) => sum + day.blocks.length, 0);
  const keywords = state.interests.length ? state.interests.join(" · ") : "随性";
  const stats = [
    { value: "04", label: "DAYS / 天" },
    { value: String(totalStops).padStart(2, "0"), label: "STOPS / 站" },
    { value: String(destination.days.length).padStart(2, "0"), label: "AREAS / 区" },
    { value: money(destination.budget.total), label: "PER PERSON / 人均" }
  ];
  const route = destination.days
    .map(
      (day, dayIndex) => `
      <div class="route-stop">
        <strong>${day.area.split(" · ")[0]}</strong>
        <span>D${dayIndex + 1} · ${day.en}</span>
      </div>`
    )
    .join("");

  const contents = destination.days
    .map(
      (day, dayIndex) => `
      <div class="contents-row">
        <span class="no">D${String(dayIndex + 1).padStart(2, "0")}</span>
        <span class="ttl">${day.title}</span>
        <span class="area">${day.area}</span>
      </div>`
    )
    .join("");

  const pact = destination.pact
    .map(
      (item, pactIndex) => `
      <div class="pact-item">
        <span class="pact-no">0${pactIndex + 1}</span>
        <strong>${item.title}</strong>
        <p>${item.text}</p>
      </div>`
    )
    .join("");

  return `
    ${pageOpen({ type: "page--overview", id: "overview", label: "概览", index })}
      <header class="page-head">
        <span>THE BRIEF · 行程概览</span>
        <span class="folio">01</span>
      </header>

      <h3 class="overview-title">${destination.titleHtml}</h3>
      <p class="manifesto">${destination.manifesto}</p>

      <div class="stats">
        ${stats.map((stat) => `<div class="stat"><strong>${stat.value}</strong><span>${stat.label}</span></div>`).join("")}
      </div>

      <div class="route">${route}</div>

      <div class="brief-grid">
        <div class="brief-block">
          <h4>WHY THIS ROUTE / 为什么这样走</h4>
          <p>${destination.why}</p>
        </div>
        <div class="brief-block">
          <h4>BEFORE YOU GO / 行前</h4>
          <div class="meta-list">
            <div><dt>季节</dt><dd>${destination.season}</dd></div>
            <div><dt>天气</dt><dd>${destination.weather}</dd></div>
            <div><dt>到达</dt><dd>${destination.access}</dd></div>
            <div><dt>适合</dt><dd>${destination.bestFor}</dd></div>
            <div><dt>同行</dt><dd>${party.label}</dd></div>
            <div><dt>节奏</dt><dd>${pace.label} · ${pace.hint.replace(/。$/, "")}</dd></div>
          </div>
        </div>
      </div>

      <section class="pact">
        <h4 class="section-label">THE PACT / 三个约定</h4>
        <div class="pact-grid">${pact}</div>
      </section>

      <div class="contents">
        ${contents}
        <div class="contents-row">
          <span class="no">D05</span>
          <span class="ttl">账本与行囊</span>
          <span class="area">THE LEDGER</span>
        </div>
      </div>

      <div class="overview-outro">
        <span>ONE THING / 这趟旅行，只做一件事</span>
        <p>${destination.oneThing}</p>
      </div>
    </article>`;
}

function dayPage(destination, day, dayIndex, start, index) {
  const date = addDays(start, dayIndex);
  const pace = getPace();
  const visible = day.blocks;
  const matchCount = visible.filter((block) =>
    block.tags.some((tag) => state.interests.includes(tag))
  ).length;

  const stops = visible
    .map((block) => {
      const isMatch = block.tags.some((tag) => state.interests.includes(tag));
      const tags = block.tags
        .map(
          (tag) =>
            `<span class="tag ${state.interests.includes(tag) ? "is-active" : ""}">${tag}</span>`
        )
        .join("");
      return `
        <li class="stop ${isMatch ? "is-match" : ""}">
          <span class="stop-time">${block.time}</span>
          <span class="stop-rail"><span class="stop-dot"></span></span>
          <div class="stop-body">
            <div class="stop-title">
              <h4>${block.name}</h4>
              <span class="stop-cost">${block.cost}</span>
            </div>
            <p class="stop-desc">${block.desc}</p>
            <div class="tags">${tags}</div>
          </div>
        </li>`;
    })
    .join("");

  const pause =
    state.pace === "slow"
      ? `<div class="pause-card"><strong>留白 / PAUSE</strong>${day.slowNote}</div>`
      : "";

  const extra =
    state.pace === "packed"
      ? `<div class="extra-card"><strong>加游 / ONE MORE</strong>${day.extra}</div>`
      : "";

  const alternatives = [];
  if (state.pace !== "packed") {
    alternatives.push(`
      <div class="alt-card">
        <span>IF MORE TIME / 如果还有时间</span>
        <p>${day.extra}</p>
      </div>`);
  }
  if (state.pace !== "slow") {
    alternatives.push(`
      <div class="alt-card">
        <span>GO SLOWER / 如果走慢一点</span>
        <p>${day.slowNote}</p>
      </div>`);
  }

  const altBlock = alternatives.length
    ? `<div class="day-alt ${alternatives.length === 1 ? "is-single" : ""}">${alternatives.join("")}</div>`
    : "";

  return `
    ${pageOpen({ type: "page--day", id: `day-${dayIndex + 1}`, label: `D${dayIndex + 1}`, index })}
      <header class="page-head">
        <span>DAY ${String(dayIndex + 1).padStart(2, "0")} · ${monthDay(date)} ${WD_EN[date.getDay()]}</span>
        <span class="folio">${String(index).padStart(2, "0")}</span>
      </header>

      <div class="day-head">
        <div class="day-number">${String(dayIndex + 1).padStart(2, "0")}</div>
        <div>
          <p class="day-area">${day.en} · ${day.area}</p>
          <h3>${day.title}</h3>
          <p class="day-sub">${day.sub}</p>
        </div>
      </div>

      <ol class="timeline">${stops}</ol>
      ${pause}
      ${extra}

      <div class="day-note"><p>${day.note}</p></div>
      ${altBlock}

      <div class="day-journal">
        <div class="journal-head">
          <span>TONIGHT / 今晚写一句</span>
          <span>NO. ${String(dayIndex + 1).padStart(2, "0")}</span>
        </div>
        <div class="note-lines day-lines" aria-hidden="true">
          <span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span>
        </div>
      </div>

      <footer class="day-foot">
        <div><span>WALK / 步行</span><strong>${day.walk}</strong></div>
        <div><span>EAT / 今日味觉</span><strong>${day.food}</strong></div>
        <div><span>SLEEP / 住宿</span><strong>${day.stay}</strong></div>
      </footer>
    </article>`;
}

function closingPage(destination, index) {
  const party = getParty();
  const total = destination.budget.total * party.count;
  const maxItem = Math.max(...destination.budget.items.map((item) => item.value));

  const bars = destination.budget.items
    .map(
      (item, barIndex) => `
      <li class="budget-row">
        <span class="label">${item.label}</span>
        <span class="track"><span class="fill" style="width:${(item.value / maxItem) * 100}%;--i:${barIndex}"></span></span>
        <span class="amount">${money(item.value)}</span>
      </li>`
    )
    .join("");

  const packing = destination.packing
    .map((item) => {
      const key = `${destination.id}:${item}`;
      const checked = state.packed.includes(key);
      return `
        <label class="pack-item">
          <input type="checkbox" data-pack="${escapeHtml(key)}" ${checked ? "checked" : ""}>
          <span class="pack-box" aria-hidden="true"></span>
          <span class="pack-text">${item}</span>
        </label>`;
    })
    .join("");

  const bookings = destination.bookings
    .map((item) => {
      const key = `${destination.id}:book:${item}`;
      const checked = state.packed.includes(key);
      return `
        <label class="pack-item">
          <input type="checkbox" data-pack="${escapeHtml(key)}" ${checked ? "checked" : ""}>
          <span class="pack-box" aria-hidden="true"></span>
          <span class="pack-text">${item}</span>
        </label>`;
    })
    .join("");

  return `
    ${pageOpen({ type: "page--closing", id: "closing", label: "账本", index })}
      <header class="page-head">
        <span>THE LEDGER · 账本与行囊</span>
        <span class="folio">${String(index).padStart(2, "0")}</span>
      </header>

      <h3 class="closing-heading">把花费，<em>花在记忆上</em>。</h3>

      <div class="budget">
        <div class="budget-total">
          <span>PER PERSON / 人均预算</span>
          <strong>${money(destination.budget.total)}</strong>
          <small>${party.label}合计 ${money(total)}<br>不含往返大交通</small>
        </div>
        <ul class="budget-bars">${bars}</ul>
      </div>

      <div class="packing">
        <h4 class="section-label">PACKING LIST / 行囊</h4>
        <div class="pack-grid">${packing}</div>
      </div>

      <div class="booking">
        <h4 class="section-label">BEFORE DEPARTURE / 出发前订好</h4>
        <div class="booking-grid">${bookings}</div>
      </div>

      <div class="notes">
        <h4 class="section-label">NOTES / 留白</h4>
        <div class="note-lines" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>

      <blockquote class="closing-quote">
        “${destination.closingQuote}”
        <cite>${destination.closingCite}</cite>
      </blockquote>

      <span class="closing-seal">行<br>笺</span>
    </article>`;
}

/* ---------------------------------------------------------
   Render
   --------------------------------------------------------- */

function render({ animate = false } = {}) {
  const destination = DESTINATIONS[state.dest];
  const start = getStartDate();

  activePage = -1;
  book.dataset.dest = destination.id;
  book.innerHTML = [
    coverPage(destination, start),
    overviewPage(destination, start, 1),
    ...destination.days.map((day, dayIndex) => dayPage(destination, day, dayIndex, start, dayIndex + 2)),
    closingPage(destination, 6)
  ].join("");

  buildPageNav();

  if (animate && !prefersReducedMotion()) {
    book.classList.remove("is-turning");
    void book.offsetWidth;
    book.classList.add("is-turning");
    window.setTimeout(() => book.classList.remove("is-turning"), 1400);
  }

  requestAnimationFrame(updateActivePage);
}

function buildPageNav() {
  const pages = $$(".page", book);
  nav.innerHTML = pages
    .map(
      (page, index) => `
      <button type="button" data-target="${page.id}" aria-label="跳到${page.dataset.label}" class="${index === 0 ? "is-active" : ""}">
        <span class="nav-dot" aria-hidden="true"></span>
        <span class="nav-text">${page.dataset.label}</span>
      </button>`
    )
    .join("");

  $$("button", nav).forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.target);
      if (!target) return;
      target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
    });
  });
}

function updateActivePage() {
  const pages = $$(".page", book);
  if (!pages.length) return;

  const threshold = window.matchMedia("(max-width: 900px)").matches ? 180 : 150;
  let nextActive = 0;
  pages.forEach((page, index) => {
    const top = page.getBoundingClientRect().top;
    if (top <= threshold) nextActive = index;
  });

  if (nextActive !== activePage) {
    activePage = nextActive;
    $$("button", nav).forEach((button, index) => {
      const isActive = index === activePage;
      button.classList.toggle("is-active", isActive);
      if (isActive) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
  }

  counter.textContent = `${String(activePage + 1).padStart(2, "0")} / ${String(pages.length).padStart(2, "0")}`;
}

function onScroll() {
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = null;
    updateActivePage();
  });
}

/* ---------------------------------------------------------
   Actions
   --------------------------------------------------------- */

function regenerate({ scroll = true } = {}) {
  const start = getStartDate();
  state.start = toISO(start);
  dateInput.value = state.start;

  generateButton.classList.add("is-busy");
  generateButton.querySelector(".generate-label").textContent = "正在装订…";
  updateFormNote();
  saveState();

  window.setTimeout(() => {
    generateButton.classList.remove("is-busy");
    generateButton.querySelector(".generate-label").textContent = "生成我的旅行计划书";
    render({ animate: true });
    if (scroll) {
      stage.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
      if (window.matchMedia("(max-width: 900px)").matches) {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
      }
    }
    showToast("计划书已重新装订完成");
  }, 620);
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toastEl.classList.remove("is-visible"), 2400);
}

function printBook() {
  document.activeElement?.blur();
  window.print();
}

/* ---------------------------------------------------------
   Events
   --------------------------------------------------------- */

function bindEvents() {
  $("#destGrid").addEventListener("change", (event) => {
    if (event.target.name !== "destination") return;
    state.dest = event.target.value;
    renderDestinationCards();
    render({ animate: true });
    updateFormNote();
    saveState();
  });

  dateInput.addEventListener("change", () => {
    const parsed = parseISO(dateInput.value);
    if (!parsed) return;
    state.start = dateInput.value;
    render({ animate: false });
    updateFormNote();
    saveState();
  });

  partySelect.addEventListener("change", () => {
    state.party = partySelect.value;
    render({ animate: false });
    updateFormNote();
    saveState();
  });

  $("#paceGroup").addEventListener("change", (event) => {
    if (event.target.name !== "pace") return;
    setPace(event.target.value);
    render({ animate: false });
    saveState();
  });

  $("#interestChips").addEventListener("click", (event) => {
    const chip = event.target.closest(".chip");
    if (!chip) return;
    toggleInterest(chip.dataset.interest);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    regenerate();
  });

  book.addEventListener("change", (event) => {
    const input = event.target.closest("[data-pack]");
    if (!input) return;
    const key = input.dataset.pack;
    if (input.checked) {
      if (!state.packed.includes(key)) state.packed.push(key);
    } else {
      state.packed = state.packed.filter((item) => item !== key);
    }
    saveState();
  });

  $("#printTop").addEventListener("click", printBook);
  $("#printBottom").addEventListener("click", printBook);

  stage.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
}
