
(function(){
  'use strict';

  /* ═══ 种子数据（构建时内嵌） ═══ */
  var SEED_SNAP = [];   /* ★种子已外置至 snap.json（2026-11-02），此处仅作无网兜底 */
  var SEED_LIVE = [{"企业机构":"上海朋熙半导体股份有限公司","营销阶段":"授信申报中","优先级":"中","重点标记":"","拜访时间":"","当前情况":"集成电路CIM系统；营销中5000万已批，已递交科创板上市；联系人彭海荣/杨云/严珊明（实控人）","下一步动作":"解除实控人高风险管控","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海复矽源半导体科技有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"集成电路特种光源；营销中，进不去；联系人魏雅华/王巧巧（总经理）","下一步动作":"主动联系拜访","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海智与芯行技术有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"汽车零部件/汽车芯片；营销中，进不去；联系人王军/王宏超（总经理）","下一步动作":"主动联系拜访","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海御微半导体技术有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"集成电路光学量检；营销中，进不去；联系人段立峰/吴静（总经理）、行政总监","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海左麟阀门有限公司","营销阶段":"授信申报中","优先级":"中","重点标记":"","拜访时间":"","当前情况":"高端装备阀门；授信申报中5000万；联系人厉萍（财务总监）；且与爱浦迈相关","下一步动作":"授信申报","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海慕帆动力科技有限公司","营销阶段":"授信申报中","优先级":"中","重点标记":"","拜访时间":"","当前情况":"燃气轮机/轻型轮机；授信申报中5000万；联系人戴军（合伙人）","下一步动作":"授信申报","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海仁度生物科技股份有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"生物医药RNA分子诊断；营销中，科创板上市企业；联系人曹若华/居金良（股东、实控人）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海联合赛尔生物工程有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"生物医药制药；营销中，进不去；联系人韦勇夫/刘宏薇（总经理）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海海拉电子有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"汽车零部件电子产品；营销中，外资，进不去；联系人焦永辉（总经理）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"星际荣耀航天科技集团股份有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"航空航天火箭；营销上海子公司中；联系人贺添（融资总监）","下一步动作":"对接北京总部","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"太一量生（上海）量子科技有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"量子科技；营销中；联系人方正浩（CEO）","下一步动作":"杨浦已开户，推进量子业务","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"格雷博智能动力科技股份有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"汽车零部件电机电控；营销中，进不去，已递交港股上市；联系人管博/龙佳欣（实控人）","下一步动作":"营销公司各项业务，但约不上","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海新诤信知识产权服务股份有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"服务知识产权；营销中，计划2000万授信；联系人陈总（财务总监）","下一步动作":"工行并购遇阻，找切入点","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海闽龙实业有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"农业食品；营销中，进不去；联系人任长艳（实控人）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海日东光学有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"光学设备；营销中，进不去，日资企业；联系人周鸣（工会主席）","下一步动作":"约拜访，上门营销代发工资以及工会账户","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"璨仓投资、浙江三和集团","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"投资；营销中，计划金桥新建科研办公楼项目，项目贷款6-7亿；联系人魏菊（财务总监）","下一步动作":"跟进土地出让金1.5亿营销，以及授信方案制定，计划四季度申报","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"赛印信息、赛印智能、用九网络","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"软件开发系统；营销中，计划三家公司各500万贷款；联系人吴凤霞（实控人）","下一步动作":"盯客户提供资料","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"协爱中医药医院","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"中医院；营销中，计划给企业做贷款；联系人吴昊天（财务总监）；有风险","下一步动作":"风险排查后推进","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海联迅智控技术有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"汽车零部件车载制氧机；营销中，计划给企业做1000万贷款；联系人余晓毅","下一步动作":"申报500-1000万贷款","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海希夕智能科技有限责任公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"食品加工机器人；营销中，计划1000万贷款；联系人刘栩/易方舟/陈瑞平","下一步动作":"集团授信推进","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海芯畀科技有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"集成电路湿法工艺设备、封装化镀设备；营销中，进不去；联系人戴国中/高翔鹰（实控人）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海夺畅网络技术有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"支付跨境清算；营销中，进不去；联系人邓先亮/孙霄谷（创始人）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"弈人（上海）科技有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"汽车通信服务；营销中；联系人马成辉（实控人）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海元方科技股份有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"软件开发政务系统；营销中，300万贷款；联系人卢铁男（实控人）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海奇克氟硅材料有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"化工抗氧剂和有机硅；营销中，计划1000万贷款；联系人吉向阳","下一步动作":"申报贷款","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海贝美医药科技有限公司","营销阶段":"其他","优先级":"中","重点标记":"","拜访时间":"","当前情况":"生物医药原料药、医药中间体；营销中，不缺资金；联系人郑云满、曹飞（夫妇、实控人）","下一步动作":"目前无资金需求，跟踪后续提款","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"全爱科技（上海）有限公司","营销阶段":"其他","优先级":"中","重点标记":"","拜访时间":"","当前情况":"软件开发嵌入式智能计算；营销中，进不去，短期不缺资金；联系人王中山（实控人）","下一步动作":"目前无资金需求，跟踪后续提款","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"新智认知数据服务有限公司","营销阶段":"其他","优先级":"中","重点标记":"","拜访时间":"","当前情况":"数字化服务智能服务；营销中，有风险；联系人费翔莺（财务总监）","下一步动作":"公司是否有风险（协助查询）","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海迅铂科技有限公司","营销阶段":"其他","优先级":"中","重点标记":"","拜访时间":"","当前情况":"汽车零部件智能悬架；营销中，实控人贷款不肯签字；联系人朱心放（实控人）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海歌尔泰克机器人有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"机器人无人机；营销中，进不去，实控人外籍；联系人蔡娜娜（财务总监）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海科驾技术有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"汽车零部件驾驶系统；营销中，进不去；联系人崔永进（实控人）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海图双精密装备有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"集成电路光刻机、涂胶显影；营销中，进不去；联系人丛艳丽（财务总监）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"座头鲸（上海）信息技术有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"物联网数据服务；营销中，进不去；联系人秦娜（财务总监）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海聚克流体控制有限公司","营销阶段":"其他","优先级":"中","重点标记":"","拜访时间":"","当前情况":"智能制造气压动力；营销中，尚无联系人","下一步动作":"寻找营销机会，先建立联系","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海时链节能科技有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"绿色节能；营销中；联系人郑艳梅（财务总监）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海海尼药业有限公司","营销阶段":"其他","优先级":"中","重点标记":"","拜访时间":"","当前情况":"生物医药；营销中，有难度；联系人朱守梅（财务总监）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海艾柯检测科技有限公司","营销阶段":"其他","优先级":"中","重点标记":"","拜访时间":"","当前情况":"检测设备；营销中，不缺资金；联系人周小华（实控人）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"江苏天易合芯电子有限公司","营销阶段":"其他","优先级":"中","重点标记":"","拜访时间":"","当前情况":"集成电路芯片；营销中，无需求点；联系人赵爱霞（上海财务经理）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海文依电气股份有限公司","营销阶段":"其他","优先级":"中","重点标记":"","拜访时间":"","当前情况":"电缆防水接头；营销中，客户无需求，上市辅导中；联系人王文平（财务总监）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"迈富时网络技术（上海）有限公司","营销阶段":"其他","优先级":"中","重点标记":"","拜访时间":"","当前情况":"软件开发流量；营销中，进不去，短期其他支行在报授信，港股上市；联系人方璐（财务总监）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"中集船舶海洋设计研究院","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"船舶设计；营销中，进不去；联系人尹逊滨/李小东（总经理）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海芯问科技有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"集成电路IC设计；营销中，进不去；联系人程瑾（财务总监）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海乐橘科技有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"绿色再回收；营销中；联系人魏超（技术人员）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海霍普建筑设计事务所","营销阶段":"其他","优先级":"中","重点标记":"","拜访时间":"","当前情况":"建筑；观望中，风险未知，上市公司；联系人曾小英（财务总监）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"泰铂（上海）环保科技股份有限公司","营销阶段":"其他","优先级":"中","重点标记":"","拜访时间":"","当前情况":"绿色环保；营销中，有风险；联系人周大许","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"亿凯（上海）工程机械制造有限公司","营销阶段":"其他","优先级":"中","重点标记":"","拜访时间":"","当前情况":"工业设备；营销中，有风险；联系人朱云松（实控人）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海驰助汽车零部件有限公司","营销阶段":"其他","优先级":"中","重点标记":"","拜访时间":"","当前情况":"电动尾门系统；营销中，有风险；联系人顾勘（实控人）","下一步动作":"寻找营销机会","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海励兆科技有限公司","营销阶段":"其他","优先级":"中","重点标记":"","拜访时间":"","当前情况":"集成电路BMC芯片；营销中，其他交行已建立联系，比较被动；联系人宋伟（创始人）","下一步动作":"约见拜访，寻找切入点","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"语核（上海）科技有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"AI Agent教学；营销中；联系人廖灿（创始人）","下一步动作":"约见拜访","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海方宜万强微电子有限公司","营销阶段":"其他","优先级":"中","重点标记":"","拜访时间":"","当前情况":"集成电路等离子；营销中，其他交行已建立联系，比较被动，客户表示不缺资金；联系人陈卫荣（创始人）","下一步动作":"约见拜访，寻找切入点","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海原子启智半导体设备有限公司","营销阶段":"授信申报中","优先级":"中","重点标记":"","拜访时间":"","当前情况":"集成电路ALE刻蚀；已批5000万授信，尚未提用、无贷款余额记录；联系人PAN YANG（实控人）；且与爱浦迈相关","下一步动作":"开户、投资款、代发；关注提用进度","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海元咏科技有限公司","营销阶段":"授信申报中","优先级":"中","重点标记":"","拜访时间":"","当前情况":"集成电路ATE检测；已批5000万授信，尚未提用、无贷款余额记录；联系人朱学良（董秘）","下一步动作":"开户中，推进授信提用","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"天纳克（中国）有限公司","营销阶段":"授信申报中","优先级":"中","重点标记":"","拜访时间":"","当前情况":"汽车零部件发动机排放；已合作1亿授信（存量），另有外地子公司授信在申报；联系人刘文瑾（财务总监）","下一步动作":"为外地子公司申报授信","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海摩恩电气股份有限公司","营销阶段":"授信申报中","优先级":"中","重点标记":"","拜访时间":"","当前情况":"特种电缆；已合作2.3亿授信（存量），异地子公司授信在推进；上市企业；联系人问泽鸿、问泽鑫（实控人）","下一步动作":"异地子公司授信","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海力合融资租赁股份有限公司","营销阶段":"授信申报中","优先级":"中","重点标记":"","拜访时间":"","当前情况":"融资租赁；已合作1亿授信（存量），新增5000万授信在跟进；联系人刘涛（总经理）","下一步动作":"跟进新增5000万授信提用","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"宣城品宙洁净科技有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"超高纯度不锈钢管道/管件/接头；已合作开户、尚未贷款、无授信余额记录；联系人陶然（实控人）；科技白名单","下一步动作":"营销授信空白需求","最近更新":"2026-10-03T00:00:00Z"},{"企业机构":"上海银商资讯有限公司","营销阶段":"争取上门","优先级":"中","重点标记":"","拜访时间":"","当前情况":"数字化服务消费/商超；已合作存款2000万，授信方案商议中；联系人施红（财务总监）","下一步动作":"商议授信方案","最近更新":"2026-10-03T00:00:00Z"}];
  var KB = {'信息库':'ima_kb_XvhGatxQ','营销库':'ima_kb_9YJfdfDk'};   /* 新格式库ID（API 用） */
  var KB_NUM = {'信息库':'7508554642630317','营销库':'7509069657045974'};  /* 旧数字库ID（官方客户端 URL 实测用） */
  var KB_SHARE = {'信息库':'','营销库':''};  /* 保留位：若日后拿到 IMA「分享知识库」的 shareId，
        可走 ima.qq.com/wiki/?shareId= 访客态直达（非主路径，md 分享无链接故通常为空） */
  /* ★免登录全文阅读页（2026-10-26 第七次修订·终局）：
     md 类条目在 IMA 内只能「存文件」分享、无链接，故改走 OpenAPI 直取的 COS 直链
     （https://skb.ima.myqcloud.com/.../x.md，CORS 头 Access-Control-Allow-Origin: *，
       裸取 200、无需任何登录），由 reader.html 跨域 fetch 后本地渲染 Markdown。
     手机版部署在 GitHub Pages 同目录，故用相对路径 reader.html。 */
  var READER_HREF = 'reader.html';
  var LS_SNAP = 'wb_mbb_desk_snap_v1', LS_LIVE = 'wb_mbb_desk_live_v1', LS_FORM = 'wb_mbb_desk_live_form_v1';
  var LS_OK = true;
  /* 窗口锚点：以「数据最新日」为基准（而非打开文件的真实今天），使静态快照隔日打开仍稳定呈现近三日 */
  var DATA_TODAY = '';

  var SUB_LABEL = {'群-融资日报':'微信营销群融资日报',
    '群-群内文稿':'群内文稿（原始汇总稿）',
    '公众号文章':'公众号文章','半导体-日报':'半导体日报','半导体-手动资讯':'手动资讯','科技金融周报':'科技金融周报'};
  var P2 = [{id:'mod-p21',type:'前瞻-科技活动',name:'科技活动前瞻周报',src:'营销库 / 活动',prefer:'科技活动前瞻周报'},
            {id:'mod-p22',type:'目标-企业报告',name:'营销目标企业 · 最新一期',src:'营销库 / 营销目标 / 企业',prefer:'营销目标客户清单'},
            {id:'mod-p23',type:'目标-机构报告',name:'营销目标机构 · 最新一期',src:'营销库 / 营销目标 / 机构',prefer:'归一待营销机构'}];

  function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function d10(v){ return v?String(v).slice(0,10):''; }
  function pad2(x){ return String(x).length<2 ? '0'+x : ''+x; }
  function fmtDate(d){ return d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate()); }
  function todayStr(){ return fmtDate(new Date()); }
  function addDays(dstr,n){ var d=new Date(dstr+'T00:00:00'); d.setDate(d.getDate()+n); return fmtDate(d); }
  var WEEKDAY=['周日','周一','周二','周三','周四','周五','周六'];
  function wdOf(dstr){ var d=new Date(dstr+'T00:00:00'); return isNaN(d.getDay())?'':WEEKDAY[d.getDay()]; }
  /* 下周（周一~周日）起止日：以「打开页面的今天」为基准（拜访时间是用户手排的计划，须随真实今天滚动） */
  function weekRange(){ var n=new Date();
    var monday=new Date(n.getFullYear(),n.getMonth(),n.getDate()+((n.getDay()===0?-6:1-n.getDay())+7));
    var sunday=new Date(monday.getFullYear(),monday.getMonth(),monday.getDate()+6);
    return {s:fmtDate(monday),e:fmtDate(sunday),ms:monday,es:sunday};
  }
  /* 拜访时间取值：兼容纯日期（2026-10-28）与日期+时刻（2026-10-28T14:30，datetime-local 原生格式，陛下旨意 2026-10-20） */
  function visitFull(r){ return String(r['拜访时间']==null?'':r['拜访时间']); }
  function visitOf(r){ return d10(visitFull(r)); }  /* 日期部分：窗口过滤/按天归组/过期判定 */
  function visitTime(r){ var m=/T(\d{2}:\d{2})/.exec(visitFull(r)); return (m&&m[1]!=='00:00')?m[1]:''; }  /* 时刻部分：00:00 视为未定 */
  function normVisit(v){  /* 存库前归一：容错 T00:00(:00)Z 尾巴 → 回落纯日期 */
    v=String(v==null?'':v).trim(); if(!v) return '';
    var m=/^(\d{4}-\d{2}-\d{2})(?:T(\d{2}:\d{2}))?/.exec(v);
    return m ? ((m[2]&&m[2]!=='00:00') ? m[1]+'T'+m[2] : m[1]) : v.slice(0,16);
  }
  function visitFillVal(r){  /* 编辑回填：datetime-local 须完整值；旧纯日期补 T00:00 占位（00:00=当天未定时刻） */
    var v=visitFull(r); if(!v) return '';
    return /T\d{2}:\d{2}/.test(v) ? v.slice(0,16) : v.slice(0,10)+'T00:00';
  }
  function byDateDesc(a,b){ return (d10(b['日期'])||'').localeCompare(d10(a['日期'])||''); }
  /* 第三部排序：优先级（高→中→低）→ 重点节奏（本周→下周→下月→下季→未标）→ 最近更新倒序 */
  var PRIO_ORDER={'高':0,'中':1,'低':2};
  function prioOf(r){ var p=r['优先级']; return (p==='高'||p==='中'||p==='低')?p:'中'; }
  function byLiveDesc(a,b){
    var pa=PRIO_ORDER[prioOf(a)], pb=PRIO_ORDER[prioOf(b)];
    if(pa!==pb) return pa-pb;
    var ta=TAG_ORDER[tagOf(a)], tb=TAG_ORDER[tagOf(b)];
    if(ta===undefined) ta=9; if(tb===undefined) tb=9;
    if(ta!==tb) return ta-tb;
    return (d10(b['最近更新'])||'').localeCompare(d10(a['最近更新'])||'');
  }

  /* ═══ 本机存储层 ═══ */
  function lsGet(k){ try{ return localStorage.getItem(k); }catch(e){ LS_OK=false; return null; } }
  function lsSet(k,v){ try{ localStorage.setItem(k,v); }catch(e){ LS_OK=false; } }
  function lsDel(k){ try{ localStorage.removeItem(k); }catch(e){} }
  function probeStorage(){ /* 加载即探针：存储不可用时徽标立即降级，而非等到首次保存 */
    try{ localStorage.setItem('wb_mbb_desk_probe','1'); localStorage.removeItem('wb_mbb_desk_probe'); }
    catch(e){ LS_OK=false; }
  }
  /* 行对象深拷贝（行为扁平字符串表，逐行浅拷即够）：★防种子被编辑污染——
     此前 SEED.slice() 为数组浅拷，行对象与种子别名，改一行即改「初始」数据，恢复初始名存实亡（2026-10-20 修） */
  function cloneRows(arr){ return arr.map(function(r){ var o={}; for(var k in r){
    if(Object.prototype.hasOwnProperty.call(r,k)) o[k]=r[k]; } return o; }); }
  function loadRows(key,seed){
    var raw=lsGet(key);
    if(raw){ try{ var d=JSON.parse(raw); if(Object.prototype.toString.call(d)==='[object Array]') return d; }catch(e){} }
    return cloneRows(seed);
  }
  var snapRows=[], liveRows=[];
  function saveSnap(){ lsSet(LS_SNAP, JSON.stringify(snapRows)); }
  function saveLive(){ lsSet(LS_LIVE, JSON.stringify(liveRows)); scheduleMDExport(); }

  /* ═══ IMA 深链：官方 getImaScheme 完整格式（自客户端前端 bundle 挖出）：
        imacopilot://open?url=<enc>&opentab=<enc>&launchChannel=10000162&target=viewer
        url 装客户端内部知识库页（chrome-extension://nkohmbngmopdajidckglcoehlaeepeoi/index.html）。
        ★2026-10-19 考证（wikis bundle index-6yFXjoIu.js 逆向）：
        ① 直达钥匙＝action=autoOpenMedia（Js 枚举 AutoOpenMedia="autoOpenMedia"）；
           消费逻辑：ry()===Js.AutoOpenMedia && mediaId(xnt) && knowledgeBaseId(B2) 三者齐备才触发，
           且当前库 id 须与 URL 一致（E!==A 则 return）→ 旧深链缺 action 参数故落库层；
        ② 官方构造器 jumpToImaMedia(kbId,{action:Js.AutoOpenMedia,mediaId})：
           hf("chrome-extension://"+xs.KnowledgeBase+"/index.html",{knowledgeBaseId,...s})
           xs.KnowledgeBase="nkohmbngmopdajidckglcoehlaeepeoi"（扩展 ID 枚举表已挖全）；
        ③ 参数值经 nS() 逐项 encodeURIComponent；外层 imacopilot://open?url= 直接拼接。
        ★target=viewer（chrome.dll 协议解析器 ima_protocol_parser.cc 实证）：
           协议参数全表 opentabV2/opentab/channel/target/viewer/url(legacy)/param mode；
           日志 "[LaunchChannel] target=viewer + SYNCHRONOUS_RESTORE -> clearing tabs
           to avoid extra home tab in viewer" → viewer 模式清空多余 tab 只留查看器，
           用于跳过「内容摘要」弹窗直达文件（待陛下实测验证）。
        ★仅冷启动生效：客户端已开时深链参数被无视（async restore 机制），先退出 ima 再点。 ═══ */
  function imaUrl(r){
    /* ★★第八次修订（2026-10-26 17:50）—— 根因修复。
       陛下实机反馈：桌面端点任意条目 → IMA 弹「参数错误」+「服务器繁忙」，无任何内容。
       逆向官方 wikis bundle（函数 jumpToImaMedia）实证官方写法：
         const o = hf("chrome-extension://" + xs.KnowledgeBase + "/index.html",
                      {knowledgeBaseId:r, ...s});
         const i = "imacopilot://open?url=".concat(o);
         hf(base, params) = base + "?" + params（**参数值逐项 encodeURIComponent，但 base 本身不编码**）
       臣此前错在**把整条 inner URL 做了 encodeURIComponent**：
         chrome-extension%3A%2F%2F…  → 客户端拿到的 url 参数无法解析 → 「参数错误」→「服务器繁忙」。
       ★实测（_probe_ima_deeplink4.py C 协议）：不编码形态**成功直达条目正文**
         （「浦东新区科技企业优质客户名单_2026W42.md」完整渲染 + 表格正常）。
       ★另注：官方用**旧数字库 ID**（7508554642630317），非 ima_kb_ 新格式。 */
    var kb = (r.imaKbNum)||KB_NUM['信息库'];
    var inner = 'chrome-extension://nkohmbngmopdajidckglcoehlaeepeoi/index.html?knowledgeBaseId='+encodeURIComponent(kb);
    if(r.imaMid) inner += '&action=autoOpenMedia&mediaId='+encodeURIComponent(r.imaMid);
    /* ★整条 inner 不编码（官方 hf 形态），仅参数值各自编码（上方已做） */
    return 'imacopilot://open?url='+inner+'&launchChannel=10000162&target=viewer';
  }
  /* ═══ IMA 移动端（2026-10-26 第六次·官方 URL 形态全量对齐）═══
     ★铁证（逆向 IMA 官方前端 bundle + 客户端实测抓地址栏，非猜测）：
       ① 官方 URL 取参契约（wikis bundle 50840 行）：
          shareId / knowledgeBaseId / mediaId / folderId / sessionId / isPremium / knowledgeBaseType / action
       ② 官方「跳知识库」URL 构造（getKnowledgeBaseUrl）：
          `{base}/?knowledgeBaseId=<ID>&subSceneId=<sceneId>&mediaId=<MID>&action=<ACTION>`
          sceneId 取值表 a0：SourceOverall="6005" / SourceInside="6006"
       ③ action 字面值（chat bundle yu 枚举）：AutoOpenMedia="autoOpenMedia"
       ④ ★客户端实测抓地址栏（点条目后）：
          `ima://allknowledge/?knowledgeBaseId=7508554642630317&action=autoOpenMedia&mediaId=markdown_…`
          → 官方用**旧数字库 ID**，且 mediaId 完整带库后缀。
       ⑤ 官方分享枚举（chat bundle _c）：KnowledgeBaseShare=5 存在；
          分享方式枚举 Qd = {Download:"download", SaveAsFile:"saveAsFile"} ——
          md 文件只能 SaveAsFile（存文件）、公众号文章才有 Download（复制链接），与陛下所言完全吻合。
       ⑥ 页面自动开条目的前置条件（wikis bundle 4228584）：
          `action==="autoOpenMedia" && mediaId && knowledgeBaseId` 且 `knowledgeBaseId===store.knowledgeBase.id`
          → 库必须先加载成功（需登录态）；未登录时只渲染工作台骨架，故「能打开但没跳条目」。
     处置：URL 同时携带【旧数字库ID】+【新格式库ID】+mediaId+action+subSceneId，双保险命中后端解析；
          另配「读原文 ↗」（mp.weixin 直开，公众号类免登录真·直达）。 */
  function isMobile(){
    return /Android|iPhone|iPod|iPad|Mobile|Windows Phone|HarmonyOS/i.test(navigator.userAgent||'');
  }
  function imaMobileHref(r){
    r=r||{};
    var kbNum=r.imaKbNum||KB_NUM['信息库'];   /* 旧数字库ID（官方客户端实测用） */
    var kbNew=r.imaKb||KB['信息库'];           /* 新格式库ID（API 用） */
    /* ★★★ 2026-10-29 实测实证（陛下反馈「手机端 IMA 直接跳转还是不行」后的根因）：
       手机端原用 https://ima.qq.com/wikis/?...&mediaId=...&action=autoOpenMedia（网页版路由），
       但 IMA 网页版在**手机浏览器**会直接拦下并提示：
         「当前链接手机端无法打开，请复制链接到桌面浏览器打开」
         「该链接为ima网页版，请在桌面端浏览器打开」  → 页面根本到不了目标条目。
       ⇒ 手机端若要「直达指定条目」，必须走**唤起客户端**的 imacopilot:// 协议
         （客户端内部路由 chrome-extension://…/index.html?knowledgeBaseId=…&action=autoOpenMedia&mediaId=…，
           官方 jumpToImaMedia 形态；客户端已装即唤起并直达该条目）。
       故：手机端「IMA 直达」一律改用 imacopilot://（桌面端原本就是它，无需改）。 */
    if(r.imaMid){
      var inner='chrome-extension://nkohmbngmopdajidckglcoehlaeepeoi/index.html?knowledgeBaseId='+encodeURIComponent(kbNum)
        +'&action=autoOpenMedia&mediaId='+encodeURIComponent(r.imaMid);
      return 'imacopilot://open?url='+inner+'&launchChannel=10000162&target=viewer';
    }
    var base='https://ima.qq.com/wikis/?knowledgeBaseId='+encodeURIComponent(kbNum);
    return base+'&subSceneId=6005';
  }
  /* 网页版直达（降级用）：带 mediaId + action=autoOpenMedia，
     IMA 网页版在桌面端浏览器可直达目标条目（手机端会提示「请在桌面端打开」，故仅作兜底）。 */
  function imaWebHref(r){
    r=r||{};
    var kbNum=r.imaKbNum||KB_NUM['信息库'];
    if(r.imaMid) return 'https://ima.qq.com/wikis/?knowledgeBaseId='+encodeURIComponent(kbNum)
      +'&subSceneId=6005&mediaId='+encodeURIComponent(r.imaMid)+'&action=autoOpenMedia';
    return 'https://ima.qq.com/wikis/?knowledgeBaseId='+encodeURIComponent(kbNum)+'&subSceneId=6005';
  }
  /* ★免登录直读（2026-10-26 第七次修订·扫码方案作废）：
     旧版曾把手机端所有 IMA 链接强制改写成扫码登录页（第六次修订的临时对策）。
     陛下实测反馈：「手机上只能截图再进微信扫，微信报错，必须直接扫、不能截图」→
     二维码登录在手机上**物理不可行**，该方案作废。
     终局：IMA OpenAPI get_media_info 直取免登录直链：
       markdown      → https://skb.ima.myqcloud.com/.../x.md（CORS:*，裸取 200）
       wechatarticle → https://mp.weixin.qq.com/s/xxx
       weburl        → 原始站点 URL
     手机端优先走「读原文 / 读全文」，完全无需登录 IMA。
     imaLoginHref 保留仅作兜底（万一个别条目无直链）。 */
  function imaLoginHref(){
    return 'https://ima.qq.com/login/#/universal-login-qr-only/';
  }
  function fixImaOpenLinks(){
    /* 终局：不再改写任何链接（直链已在前端渲染时按类型分流）。
       仅确保手机端全部外链新标签打开 + noopener，规避返回键失灵。 */
    if(!isMobile()) return;
    document.querySelectorAll('a.a-link').forEach(function(a){
      if(a.getAttribute('href')){
        a.setAttribute('target','_blank');
        a.setAttribute('rel','noopener');
      }
    });
  }
  /* ═══ 窗口规则（渲染函数内，禁入 query 回调——DSDK015） ═══ */
  /* 双口径（均以「数据最新日」为锚，静态快照隔日打开仍稳定）：
     ① 日更类（融资日报/半导体日报/公众号）走「近三日」——窗口＝锚点N-2~N 三天骨架，即便某天无文也保留三天结构；
     ② 周期类（手动资讯/周报）走「近三期」——取该类型按日期倒序最近三条。
     ★2026-11-01：群内文章块已砍除（内容全部含于日报正文），两营销群卡片只剩日报 + 群内文稿两块。 */
  function computeDataToday(){
    var mx='';
    snapRows.forEach(function(r){ var d=d10(r['日期']); if(d&&d>mx) mx=d; });
    return mx || todayStr();
  }
  var DAY_TYPES={'群-融资日报':1,'半导体-日报':1,'公众号文章':1};
  var PERIOD_TYPES={'半导体-手动资讯':1,'科技金融周报':1};
  var FIXED_TYPES={'群-群内文稿':1};   /* 全量常驻（不随窗口滚动）：群内原始汇总稿 */
  function pickWindow(rows,type){ /* rows 已按日期倒序 */
    if(FIXED_TYPES[type]){              /* 全量：群内文稿（数量少、常驻可查） */
      return {rows:rows,chip:'常驻 '+rows.length+' 篇',cls:'period'};
    }
    if(PERIOD_TYPES[type]){            /* 近三期 */
      var top=rows.slice(0,3);
      if(!top.length) return {rows:[],chip:'暂无数据',cls:''};
      return {rows:top,chip:'近三期 '+d10(top[top.length-1]['日期'])+' ~ '+d10(top[0]['日期']),cls:'period'};
    }
    var t=DATA_TODAY || todayStr(), lo=addDays(t,-2);  /* 近三日：锚数据最新日 */
    var w=rows.filter(function(r){ var d=d10(r['日期']); return d>=lo&&d<=t; });
    return {rows:w,chip:'近三日 '+lo+' ~ '+t,cls:'',skeleton:[lo,addDays(t,-1),t]};
  }

  /* ═══ 文章条目（第一部与第二部共用） ═══ */
  var TAG_CLS={'机构':'','属地':'teal','已合作':'amber','目标':'ok','群':'teal'};
  function tagChips(tagsStr){
    if(!tagsStr) return '';
    return String(tagsStr).split('｜').map(function(seg){
      seg=seg.trim(); if(!seg) return '';
      var cat=seg.split('·')[0];
      var cls=TAG_CLS[cat]||'mute';
      return '<span class="chip '+cls+'">'+esc(seg)+'</span>';
    }).join('');
  }
  function artItem(r){
    /* ★陛下旨意（2026-10-19 立，2026-10-26 终局修订·第七次）：手机端**彻底免登录直达**。
       扫码方案作废（微信禁止相册识别 + 同屏无法扫，物理不可行）。
       终局路线（OpenAPI get_media_info 直取免登录直链）：
         ① 公众号文章 / 政府网页 → 直链即 mp.weixin.qq.com 或原站 URL → 「读原文 ↗」真·直达；
         ② md 类 → COS 直链 skb.ima.myqcloud.com（CORS:*）→ 「读全文 ↗」走 reader.html 跨域直读并渲染；
         ③ 无直链 → 退回「开 IMA ↗」（需登录，仅作兜底）。
       桌面：imacopilot:// 深链（有 imaMid 直达条目，无则落知识库层）。 */
    var hasMid=!!r.imaMid, main;
    if(isMobile()){
      var ou=r['原文URL']||'';
      var direct=r['imaDirect']||'';
      var dtype=r['imaDirectType']||'';
      var doc=r['imaDoc']||'';         /* ★本地文档相对路径（docs/xxx.md）——同源、无签名过期 */
      var doct=r['imaDocType']||'';
      var imaHref=imaMobileHref(r);
      var btns=[];
      /* ① 本地文档优先（★主路径）：
            markdown        → reader.html?f=docs/xxx.md（同源 fetch，无 CORS、无过期）
            pdf/excel/word  → docs/xxx.pdf 等，浏览器直接预览/下载 */
      if(doc){
        if(doct==='markdown'){
          btns.push('<a class="a-link" data-doc="1" target="_blank" rel="noopener" href="'
            +esc(READER_HREF+'?f='+encodeURIComponent(doc)+'&t='+encodeURIComponent(r['标题']||''))
            +'" title="新标签打开全文阅读页（★文档本体已随本站发布，免登录直读、自动渲染排版，永不过期）">读全文 ↗</a>');
        }else{
          btns.push('<a class="a-link" data-doc="1" target="_blank" rel="noopener" href="'+esc(doc)+'" '
            +'title="新标签打开原始文件（★文件本体已随本站发布，由浏览器直接预览或下载）">原文件 ↗</a>');
        }
      }
      /* ② 公众号文章 / 政府网页 → 直链即 mp.weixin.qq.com 或原站 URL（永久有效，浏览器直开） */
      if(direct && (dtype==='wechatarticle'||dtype==='weburl')){
        btns.push('<a class="a-link" data-direct="1" target="_blank" rel="noopener" href="'+esc(direct)+'" '
          +'title="新标签打开原文（免登录，真·直达该篇原文；返回作战板不受影响）">读原文 ↗</a>');
      }
      /* ②b 超大文件（>4MB 未随站发布，如 11MB docx / 大 PDF）→ 走 COS 直链兜底
            （直链带时效签名，可能过期；标题已注明） */
      if(!doc && direct && dtype!=='markdown' && dtype!=='wechatarticle' && dtype!=='weburl'){
        btns.push('<a class="a-link" data-direct="1" target="_blank" rel="noopener" href="'+esc(direct)+'" '
          +'title="新标签打开原始文件（★该文件体积较大未随本站发布，走 IMA 对象存储直链；直链有时效，过期后请改用「开 IMA」）">原文件 ↗</a>');
      }
      /* ③ 无直链但有微信原文 URL（本地扫库所得） */
      if(!direct && ou){
        btns.push('<a class="a-link" data-orig="1" target="_blank" rel="noopener" href="'+esc(ou)+'" '
          +'title="新标签打开微信原文（免登录，直达该篇原文；返回作战板不受影响）">读原文 ↗</a>');
      }
      /* ④ 有微信原页可再给一条（看原版排版），避免与已加的重复 */
      if(direct && ou && dtype!=='markdown' && ou!==direct){
        btns.push('<a class="a-link" data-orig="1" target="_blank" rel="noopener" href="'+esc(ou)+'" '
          +'title="新标签打开微信原文原版（免登录；返回作战板不受影响）">微信原页 ↗</a>');
      }
      /* ⑤ 兜底：开 IMA —— 仅在**完全没有免登录方案**时才显示（避免满屏冗余按钮） */
      if(!btns.length){
        btns.push('<a class="a-link" data-ima="1" data-mobile="1" data-web-fallback="'+esc(imaWebHref(r))+'" '
          +'target="_blank" rel="noopener" href="'+esc(imaHref)+'" '
          +'title="'+(hasMid?'唤起 ima 客户端并直达该条目（★需先在手机浏览器登录一次 IMA；未响应会自动转网页版）'
                           :'唤起 ima 客户端打开该知识库（★需先登录一次 IMA）')+'">开 IMA ↗</a>');
      }
      /* ⑤b 群内文章块已于 2026-11-01 砍除（内容全部含于日报正文），此处不再给专属按钮 */
      main=btns.join(' ');
    } else {
      /* ★桌面端（第八次修订）：深链改为官方 hf() 形态（不编码整条）→ 已实测可直达正文；
         同时补「读本地正文」，指向**本地副本**（离线可读，不依赖客户端）。
         公众号文章另有 mp.weixin 永久链接，一并给出。
         ★桌面版文件在项目根，docs/ 在 _mobile_site/docs/ → 相对路径需带 _mobile_site/ 前缀。 */
      var dbtns=[];
      var doc=r['imaDoc']||'', doct=r['imaDocType']||'';
      var ou2=r['原文URL']||'';
      var dir2=r['imaDirect']||'', dt2=r['imaDirectType']||'';
      if(doc && doct==='markdown'){
        dbtns.push('<a class="a-link" data-doc="1" href="'+esc(doc)+'" '
          +'title="打开本地正文副本（离线可读，Markdown 源码）">读本地正文</a>');
      }
      if(doc && doct!=='markdown'){
        dbtns.push('<a class="a-link" data-doc="1" href="'+esc(doc)+'" '
          +'title="打开本地原始文件（离线可读，由浏览器预览或下载）">本地原文件</a>');
      }
      if(dir2 && (dt2==='wechatarticle'||dt2==='weburl')){
        dbtns.push('<a class="a-link" data-direct="1" target="_blank" rel="noopener" href="'+esc(dir2)+'" '
          +'title="新标签打开原文（免登录，永久有效）">读原文 ↗</a>');
      }
      /* 群内文章块已于 2026-11-01 砍除（内容全部含于日报正文），此分支不再需要 */
      dbtns.push('<a class="a-link" data-ima="1" href="'+imaUrl(r)+'" title="'+(hasMid?'在 ima 客户端直达该条目':'在 ima 客户端打开对应知识库')+'（若 ima 已开着，请先退出再点）">'+(hasMid?'IMA 直达 ↗':'打开 ima ↗')+'</a>');
      main=dbtns.join(' ');
    }
    var rk=readKeyOf(r), rcls=isRead(rk)?' read':'', rflag=rcls?'<span class="read-flag">已读</span>':'';
    return '<details class="art'+rcls+'" data-key="'+esc(rk)+'">'+
      '<summary class="a-top"><span class="a-date">'+esc(d10(r['日期'])||'—')+'</span>'+
      '<span class="a-title">'+esc(r['标题'])+'</span>'+tagChips(r['命中标签'])+rflag+
      '<span class="a-arrow">展开 ▾</span></summary>'+
      '<div class="a-body"><div class="a-sum">'+esc(r['摘要']||'（无摘要）')+'</div>'+
      '<div class="a-path">IMA 路径：'+esc(r['IMA路径']||'—')+' ｜ '+main+'</div></div></details>';
  }
  /* ═══ 已读标记（2026-10-21）：展开条目停留≥3秒自动标记已读，呈现颜色/阴影变化 ═══ */
  var READ_KEY='mkt_read_v1', _readSet=null, _readTimers={};
  function readSet(){ if(_readSet) return _readSet; var a=[]; try{ a=JSON.parse(localStorage.getItem(READ_KEY)||'[]'); }catch(e){ a=[]; } _readSet=new Set(a); return _readSet; }
  function isRead(k){ return !!k && readSet().has(k); }
  function markRead(k){ if(!k||readSet().has(k)) return; readSet().add(k); try{ localStorage.setItem(READ_KEY, JSON.stringify(Array.from(readSet()))); }catch(e){} updateReadStat(); }
  function readKeyOf(r){
    /* 群内文稿按标题+日期；其余按 IMA 路径。 */
    if(r['类型']==='群-群内文稿') return 'D:'+(d10(r['日期'])||'')+'|'+(r['标题']||'');
    var p=(r['IMA路径']||'').trim(); if(p && p!=='—') return 'P:'+p;
    return 'T:'+(d10(r['日期'])||'—')+'|'+(r['标题']||'');
  }
  function clearRead(){ _readSet=new Set(); try{ localStorage.removeItem(READ_KEY); }catch(e){} document.querySelectorAll('details.art.read').forEach(function(d){ d.classList.remove('read'); var f=d.querySelector('.read-flag'); if(f) f.remove(); }); updateReadStat(); refreshReadCascade(); }
  function updateReadStat(){ var n=readSet().size; var el=document.getElementById('readN'); if(el) el.textContent=n; }
  function startReadTimer(el){ var k=el.getAttribute('data-key'); if(!k||isRead(k)) return; cancelReadTimer(el); _readTimers[k]=setTimeout(function(){ markRead(k); el.classList.add('read'); var top=el.querySelector('.a-top'); if(top && !el.querySelector('.read-flag')){ var s=document.createElement('span'); s.className='read-flag'; s.textContent='已读'; top.appendChild(s); } refreshReadCascade(el); }, 3000); }
  /* ═══ 已读级联（2026-10-21圣意）：条目已读向上传导到「日期组头」与「栏目头」 ═══ */
  function allReadIn(box){ var a=box.querySelectorAll('details.art'); if(!a.length) return false; for(var i=0;i<a.length;i++){ if(!a[i].classList.contains('read')) return false; } return true; }
  function flagInto(head,on,label){
    if(!head) return;
    var f=head.querySelector('.read-flag');
    if(on && !f){ var s=document.createElement('span'); s.className='read-flag'; s.textContent=label||'已读'; head.appendChild(s); }
    else if(!on && f){ f.remove(); }
  }
  function setGroupRead(g,on){
    if(!g) return;
    g.classList.toggle('allread', !!on);
    var head=g.querySelector('.day-head'); if(!head) return;
    var f=head.querySelector('.read-flag');
    if(on && !f){
      var s=document.createElement('span'); s.className='read-flag'; s.textContent='已读';
      var arrow=head.querySelector('.d-arrow');
      if(arrow) head.insertBefore(s,arrow); else head.appendChild(s);
    } else if(!on && f){ f.remove(); }
  }
  function setHeadRead(head,on){
    if(!head) return;
    head.classList.toggle('read', !!on);
    flagInto(head,on,'已读');
  }
  /* target=刚变已读的条目；不传则全量重算（首渲染/清除已读时用） */
  function refreshReadCascade(target){
    var g = (target && target.closest) ? target.closest('.art-day') : null;
    if(g) setGroupRead(g, allReadIn(g));
    var scopes;
    if(target){
      var one=(target.closest && (target.closest('[data-sub]') || target.closest('.card')));
      scopes = one ? [one] : [];
    } else {
      scopes = Array.prototype.slice.call(document.querySelectorAll('[data-sub]'));
      ['mod-p21','mod-p22','mod-p23'].forEach(function(id){ var e=document.getElementById(id); if(e) scopes.push(e); });
      /* 全量模式下日期组也逐一重算（清除已读后需撤回组头已读态） */
      Array.prototype.slice.call(document.querySelectorAll('.art-day')).forEach(function(g2){ setGroupRead(g2, allReadIn(g2)); });
    }
    scopes.forEach(function(sc){
      if(!sc) return;
      var head = sc.classList.contains('card') ? sc.querySelector('h2') : sc.querySelector('.sub-head');
      if(!head) return;
      setHeadRead(head, allReadIn(sc));
    });
  }
  function cancelReadTimer(el){ var k=el.getAttribute('data-key'); if(k&&_readTimers[k]){ clearTimeout(_readTimers[k]); delete _readTimers[k]; } }
  function bindReadMarkers(){ document.querySelectorAll('details.art').forEach(function(d){ d.addEventListener('toggle', function(){ if(this.open){ startReadTimer(this); } else { cancelReadTimer(this); } }); }); }

  var WEEK=['日','一','二','三','四','五','六'];
  /* 按日期分组呈现：同天归一组（组头=日期+星期+篇数），最新日期组默认展开，过往收起；
     单条（第二部三卡）不套组，保持一层折叠直达。
     skeleton＝日更类三天骨架 [lo,t-1,t]（升序），确保近三日三天结构始终可见；空天标注「当日暂无采集」。 */
  function artList(rows, skeleton){
    if(!skeleton && rows.length===1) return artItem(rows[0]);  /* 第二部三卡单条不套组，一层折叠直达 */
    if(!rows.length && !skeleton) return '<div class="empty">窗口内暂无文章</div>';
    var days={}, order=[];
    if(skeleton){ skeleton.forEach(function(d){ days[d]=[]; order.push(d); }); }  /* 先铺三天骨架（升序） */
    rows.forEach(function(r){ var d=d10(r['日期'])||'—'; if(!days[d]){ days[d]=[]; order.push(d); } days[d].push(r); });
    if(!skeleton) order.sort().reverse(); else order.reverse();  /* 非骨架按日期倒序；骨架由升序反转得 N,N-1,lo 倒序 */
    return order.map(function(d,idx){
      var gr=days[d]||[], wk='';
      if(d!=='—'){ try{ wk='<span class="d-week">星期'+WEEK[new Date(d+'T00:00:00').getDay()]+'</span>'; }catch(e){} }
      var isEmpty=gr.length===0, cntTxt=isEmpty?'当日暂无采集':(gr.length+' 篇');
      /* 自适应默认态：当天篇数≤8 直接展开（日常免点）；>8 收起为一行（长块收敛，点开再看）；空组不展开 */
      return '<details class="art-day'+((!isEmpty&&idx===0&&gr.length<=8)?' open':'')+(isEmpty?' grp-empty':'')+'">'+
        '<summary class="day-head"><span class="d-date">'+esc(d)+'</span>'+wk+
        '<span class="cnt">'+cntTxt+'</span><span class="d-arrow d-arrow-open">展开 ▾</span><span class="d-arrow d-arrow-shut">收起 ▴</span></summary>'+
        '<div class="day-body">'+gr.map(artItem).join('')+'</div></details>';
    }).join('');
  }

  /* ═══ 渲染：第一部子块 ═══ */
  function renderSnap(){
    document.querySelectorAll('[data-sub]').forEach(function(box){
      var tp=box.getAttribute('data-sub');
      var rows=snapRows.filter(function(r){ return r['类型']===tp; });
      var win=pickWindow(rows, tp);
      box.innerHTML='<div class="sub-head">'+esc(SUB_LABEL[tp]||tp)+
        ' <span class="cnt">'+win.rows.length+' 篇</span>'+
        '<span class="win-chip '+win.cls+'">'+esc(win.chip)+'</span></div>'+artList(win.rows, win.skeleton);
    });
    /* 第二部：三卡改用条目格式（与第一部一致） */
    P2.forEach(function(m){
      var box=document.getElementById(m.id); if(!box) return;
      /* 选记录：同类型多条时，优先标题含 prefer 关键词者（名单本体 > 同期补充报告，
         如企业流中「微信关键人校验报告」不得压过「营销目标客户清单」）；
         无 prefer 或无命中则回退首个同类型记录（旧行为，日期倒序下的最新一条） */
      var row=null, fallback=null;
      for(var i=0;i<snapRows.length;i++){
        if(snapRows[i]['类型']!==m.type) continue;
        if(!fallback) fallback=snapRows[i];
        if(m.prefer && String(snapRows[i]['标题']||'').indexOf(m.prefer)>=0){ row=snapRows[i]; break; }
      }
      if(!row) row=fallback;
      if(!row){
        box.innerHTML='<h2>'+esc(m.name)+' <span class="chip mute">'+esc(m.src)+'</span></h2>'+
          '<div class="empty">暂无登记（等待跑批入库）</div>';
        return;
      }
      box.innerHTML='<h2>'+esc(m.name)+' <span class="chip mute">'+esc(m.src)+'</span>'+
        ' <span class="chip">'+esc(d10(row['日期']))+'</span></h2>'+artList([row]);
    });
  }

  /* ═══ 快照徽标：数据截至 max(快照生成时间)，断更转 warn ═══ */
  function renderSnapBadge(){
    var el=document.getElementById('snapBadge'); if(!el) return;
    var mx='';
    snapRows.forEach(function(r){ var d=d10(r['快照生成时间']); if(d&&d>mx) mx=d; });
    if(!mx){ el.className='badge off'; el.innerHTML='<span class="dot"></span>暂无快照数据'; return; }
    if(mx===todayStr()){ el.className='badge snap'; el.innerHTML='<span class="dot"></span>快照截至今日 '+mx; }
    else { el.className='badge off'; el.innerHTML='<span class="dot"></span>快照截至 '+mx+'（断更）'; }
  }

  /* ═══ 第三部：正在营销（五分组：授信/拜访/活动/潜在机会/其他待办） ═══ */
  var liveFilter='all', liveTag='all', editingIdx=-1, planOpen=false;
  /* 分组定义（key=存库值，desc=组释义） */
  var GROUPS=[
    {key:'授信',desc:'授信申报 / 审批 / 放款'},
    {key:'拜访',desc:'约见 / 上门拜访 / 关系维护'},
    {key:'活动',desc:'路演 / 沙龙 / 外拓活动'},
    {key:'潜在机会',desc:'尚未接触 / 待挖掘目标'},
    {key:'其他待办',desc:'其他待办事项'}
  ];
  /* 旧四阶段值 → 新五组映射（本机存量数据平滑迁移，无需手工改数） */
  var STAGE2GROUP={'授信申报中':'授信','已上门拜访':'拜访','争取上门':'拜访','其他':'其他待办'};
  function groupOf(r){ var s=r['营销阶段']||''; return STAGE2GROUP[s]||s||'其他待办'; }
  var GROUP_CLS={'授信':'ok','拜访':'','活动':'teal','潜在机会':'warn','其他待办':'mute'};
  var PRIO_CLS={'高':'prio-h','中':'prio-m','低':'prio-l'};
  /* ═══ 重点节奏 · 滚动锚点（2026-10-26 陛下圣意·第九次修订）═══
     ★痛点：原「重点标记」存的是**绝对档位名**（"下周重点"），不随日期滚动。
       陛下上周填的"下周重点"，本周打开仍是"下周重点"——与真实节奏脱节。
     ★正解：改存**锚点周**（anchorWeek = 该条目标定落在哪一周的周一）。
       登记时选"下周重点" → anchorWeek = 下周一；
       到本周打开 → anchorWeek 落在本周 → **自动呈现为"本周重点"**。
       如此永续滚动，且天然满足陛下要求：
         「点本周重点时，显示上周我手动添加的 + 本周新添加的」
         ——上周填的（锚点=本周）+ 本周新填的（锚点=本周），都归到本周。
     ★滚动规则（以「今天」所在周为基准，按锚点与今周之差）：
        差 0 周 → 本周重点    差 1 周 → 下周重点
        差 ≥2 周 → 下月重点    差 ≥4 周 → 下季重点
        差 <0 周（已过期）→ 仍标为「本周重点」，并加"已过期"角标提示顺延
     ★存量数据回推：老记录无 anchorWeek，按「最近更新」日期所在周反推档位
       （最近更新落在本周 → 原"本周重点"；落在上周 → 原"下周重点"…），
       保证老数据平滑接入滚动，不丢条目。 */
  function mondayOf(dstr){
    var d=new Date(dstr+'T00:00:00');
    if(isNaN(d.getTime())) return '';
    var off=(d.getDay()===0?-6:1-d.getDay());      /* 周一为一周之始 */
    return addDays(dstr,off);
  }
  /* 锚点 → 当前应显示的档位（本周/下周/下月/下季）
     ★diff 以「周」为单位（锚点与今周均为周一，差值必为 7 的整数倍）：
       diff=0 周 → 本周重点   diff=1 周 → 下周重点
       diff 2~3 周 → 下月重点   diff≥4 周 → 下季重点
       diff=-1 周 → 本周重点（上周填的，顺延到本周推进）
       diff≤-2 周 → 沉降至「已过期」（不再占用本周重点计数，列表中仍可见并标红） */
  function anchorDiff(anchor){
    if(!anchor) return null;
    var cur=mondayOf(todayStr());
    var days=Math.round((new Date(anchor+'T00:00:00')-new Date(cur+'T00:00:00'))/86400000);
    return Math.round(days/7);        /* ★天数→周数（原按天比阈值，故错判） */
  }
  function anchorToTag(anchor){
    var diff=anchorDiff(anchor);
    if(diff===null) return '';
    if(diff<=0) return diff>=-1?'本周重点':'';   /* ≤-2 周 → 沉降至已过期 */
    if(diff===1) return '下周重点';
    if(diff<4)  return '下月重点';
    return '下季重点';
  }
  /* 登记时按当前档位反推锚点周（下月/下季按周数近似：下月=+2周，下季=+4周） */
  function tagToAnchor(tag){
    var cur=mondayOf(todayStr());
    if(tag==='本周重点') return cur;
    if(tag==='下周重点') return addDays(cur,7);
    if(tag==='下月重点') return addDays(cur,14);
    if(tag==='下季重点') return addDays(cur,28);
    return '';
  }
  /* 存量回推：老记录的档位名 → 锚点周（按最近更新日反推） */
  function backfillAnchor(r){
    if(r['重点标记']==null) return;
    var upd=d10(r['最近更新'])||todayStr();
    var wk=mondayOf(upd);
    if(r['重点标记']==='本周重点') r['anchorWeek']=wk;
    else if(r['重点标记']==='下周重点') r['anchorWeek']=addDays(wk,7);
    else if(r['重点标记']==='下月重点') r['anchorWeek']=addDays(wk,14);
    else if(r['重点标记']==='下季重点') r['anchorWeek']=addDays(wk,28);
  }
  /* 重点节奏四档（本周 / 下周 / 下月 / 下季）——空值表示未标重点 */
  var TAGS=[
    {key:'本周重点',short:'本周',cls:'tag-w',desc:'本周内必须推进'},
    {key:'下周重点',short:'下周',cls:'tag-n',desc:'下周内推进'},
    {key:'下月重点',short:'下月',cls:'tag-m',desc:'下月内推进'},
    {key:'下季重点',short:'下季',cls:'tag-q',desc:'下季度推进'}
  ];
  var TAG_CLS={}; TAGS.forEach(function(t){ TAG_CLS[t.key]=t.cls; });
  var TAG_ORDER={'本周重点':0,'下周重点':1,'下月重点':2,'下季重点':3};
  /* ★滚动后的实际档位：优先用 anchorWeek 动态算；无锚点则回落到原字段 */
  function tagOf(r){
    var t=r['重点标记']; if(!t) return '';
    if(r['anchorWeek']){ var d=anchorToTag(r['anchorWeek']); return d||''; }
    return TAG_CLS[t]!==undefined ? t : '';
  }
  /* 是否已过期/沉降：锚点周早于上周（diff ≤ -2 周）——不再计入本周重点，但列表仍可见 */
  function tagExpired(r){
    if(!r['anchorWeek']) return false;
    var d=anchorDiff(r['anchorWeek']);
    return d!==null && d<=-2;
  }
  function tagChip(r){
    var t=tagOf(r);
    if(!t){
      /* 沉降条目：只显示「已过期」角标 */
      if(tagExpired(r)) return '<span class="chip warn" title="锚定周已过（早于上周），已沉降至已过期；请更新拜访时间或重新标记重点节奏">已过期</span>';
      return '';
    }
    return '<span class="chip '+TAG_CLS[t]+'" title="重点节奏：'+esc(t)+'">'+esc(t)+'</span>';
  }
  /* 拜访时间徽章：有值才渲染（存量空白数据不显示）；已过期标灰；有具体时刻则缀上（00:00 视为未定不显示） */
  function visitChip(r){
    var d=visitOf(r); if(!d) return '';
    var late = d < todayStr();
    var tm=visitTime(r);
    return '<span class="chip visit'+(late?' late':'')+'" title="下次拜访时间'+(tm?' '+tm:'')+'">拜访 '+esc(d.slice(5))+' '+esc(wdOf(d))+(tm?' '+esc(tm):'')+(late?'（已过期）':'')+'</span>';
  }
  function groupChip(r){ var g=groupOf(r); return '<span class="chip '+(GROUP_CLS[g]||'mute')+'">'+esc(g)+'</span>'; }
  function prioChip(r){ var p=prioOf(r); return '<span class="chip '+(PRIO_CLS[p]||'prio-m')+'" title="优先级">'+esc(p)+'</span>'; }
  function recHtml(r,i){
    var g=groupOf(r);
    return '<div class="rec st-'+esc(g)+(i===editingIdx?' editing':'')+'">'+
      '<div class="r-top"><span class="r-name">'+esc(r['企业机构'])+'</span>'+
      groupChip(r)+
      prioChip(r)+
      tagChip(r)+
      visitChip(r)+
      '<span class="chip mute">更新 '+esc(d10(r['最近更新']))+'</span>'+
      '<button class="btn sm r-edit" type="button" data-i="'+i+'">修改</button>'+
      '<button class="btn sm r-del" type="button" data-i="'+i+'">删除</button></div>'+
      '<div class="r-act"><b>当前情况：</b>'+esc(r['当前情况']||'—')+'</div>'+
      '<div class="r-act"><b>下一步：</b>'+esc(r['下一步动作']||'—')+'</div></div>';
  }
  /* ★重点节奏筛选按钮实时计数（2026-10-26）：档位随日期滚动，
     按钮上的数字随之变化——点「本周重点」看到的条数 = 锚点落在本周的全部
     （上周手动填的 + 本周新填的），与陛下要求一致。 */
  function updateTagFilterCounts(){
    var box=document.getElementById('liveFilterTag'); if(!box) return;
    var c={'all':liveRows.length};
    liveRows.forEach(function(r){ var t=tagOf(r); if(t) c[t]=(c[t]||0)+1; });
    box.querySelectorAll('button[data-f]').forEach(function(b){
      var k=b.getAttribute('data-f');
      var n=c[k]||0;
      var old=b.getAttribute('data-n');
      if(old!==String(n)) b.setAttribute('data-n',String(n));
      var lab=b.getAttribute('data-label')||b.textContent.replace(/\s*\d+\s*$/,'').trim();
      b.setAttribute('data-label',lab);
      b.textContent = (k==='all'?'全部':lab)+' '+n;
      b.classList.toggle('empty-filter', n===0 && k!=='all');
    });
  }
  function renderLive(){
    var el=document.getElementById('liveList'); if(!el) return;
    var rows=liveRows.filter(function(r){
      if(liveFilter!=='all'&&groupOf(r)!==liveFilter) return false;
      if(liveTag!=='all'&&tagOf(r)!==liveTag) return false;
      return true;
    });
    updateTagFilterCounts();
    if(!rows.length){ el.innerHTML='<div class="empty">当前筛选下暂无企业</div>'; return; }
    var html='';
    GROUPS.forEach(function(g){
      var gr=[];
      rows.forEach(function(r){ if(groupOf(r)===g.key) gr.push(r); });
      if(liveFilter!=='all'&&liveFilter!==g.key) return;
      if(liveTag!=='all'&&!gr.length) return;  /* 重点筛选时，无命中的组不占位 */
      html+='<div class="grp'+(gr.length?'':' grp-empty')+'">'+
        '<div class="grp-head"><span class="g-name">'+esc(g.key)+'</span>'+
        '<span class="cnt">'+gr.length+' 家</span><span class="g-desc">'+esc(g.desc)+'</span></div>';
      if(gr.length){
        gr.forEach(function(r){ html+=recHtml(r,liveRows.indexOf(r)); });
      }else{
        html+='<div class="grp-none">暂无记录——登记时选择「'+esc(g.key)+'」分组即可归入</div>';
      }
      html+='</div>';
    });
    el.innerHTML=html;
  }

  /* ═══ 拜访行程表（2026-10-26 陛下圣意·第九次修订）═══
     陛下原话：「想本次填写完营销计划，在下面有个时间表之类的可以显示我的拜访行程，
                 同时也支持可以在行程表上手动添加行程」
     ① 窗口：本周 + 下周**双周**（原仅下周）——因重点节奏已随日期滚动，
        本周的关注度与下周同级，行程必须同屏可见。
     ② 数据源两路合流：
        · 自动路：从「正在营销」记录里填了「拜访时间」的条目，按日期归入各天；
        · 手动路：行程表里手动添加的独立行程条目（不绑定企业，可填时间/机构/事项）。
     ③ 手动行程存 LS_PLAN（独立 localStorage 键），随 JSON 导出/导入一起走。 */
  var LS_PLAN = 'wb_mbb_desk_plan_v1';
  var planRowsManual=[];   /* 手动行程：[{id,日期,时刻,机构,事项,备注}] */
  var planEditId=null;     /* ★第十次修订：正在修改的手动行程 id（null = 新增模式） */
  /* ★第十四次修订（2026-11-02）：表内就地录入 —— 当前展开的表内表单位置
     {day:'2026-11-03', half:'am'|'pm'|'auto'}；null = 未展开 */
  var planInline=null;

  function loadPlanManual(){
    var raw=lsGet(LS_PLAN);
    if(!raw) return [];
    try{ var a=JSON.parse(raw); return Array.isArray(a)?a:[]; }catch(e){ return []; }
  }
  function savePlanManual(){ lsSet(LS_PLAN, JSON.stringify(planRowsManual)); }

  /* 行程窗口：本周 + 下周 +（有远期行程时）继续往后延伸
     ★第十七次修订（2026-11-07）：原写死「本周+下周」双周，陛下 11-16 的行程落在
       第三周 → 落窗之外，只被计入「更晚 N 项」而看不见（陛下报「添加了16号但工作天没显示」）。
       改为：窗口自动延伸到「最后一条行程所在周」为止（封顶 8 周，防异常数据撑爆页面）。
       空周不渲染（避免第三周起满屏空行），但该周一旦有行程即整周列出。 */
  function planLastVisit(){
    var far='';
    liveRows.forEach(function(r){ var v=visitOf(r); if(v>far) far=v; });
    planRowsManual.forEach(function(p){ var d=d10(p['日期']); if(d>far) far=d; });
    return far;
  }
  function planWindows(){
    var cur=mondayOf(todayStr());       /* 本周周一 */
    var w=weekRange();                  /* w = 下周（周一~周日） */
    var wins=[
      {key:'cur', title:'本周', s:cur, e:addDays(cur,6), ws:cur, we:addDays(cur,4)},
      {key:'next',title:'下周', s:w.s,   e:w.e,       ws:w.s, we:addDays(w.s,4)}
    ];
    var far=planLastVisit();
    var lastEnd=w.e, idx=2;
    while(far && far>lastEnd && idx<8){
      var s=addDays(lastEnd,1);
      wins.push({key:'w'+idx, title:(idx===2?'下下周':('第'+(idx+1)+'周')),
                 s:s, e:addDays(s,6), ws:s, we:addDays(s,4)});
      lastEnd=addDays(s,6); idx++;
    }
    return wins;
  }
  /* 实际要渲染的周：本周、下周恒显示；更远的周仅在有行程时显示 */
  function planRenderWins(){
    return planWindows().filter(function(w){
      if(w.key==='cur'||w.key==='next') return true;
      return planRows(w).length+planManualRows(w).length>0;
    });
  }
  /* 日期显示：2026-10-26 → 2026.10.26 */
  function fmtDot(dstr){ return dstr?String(dstr).replace(/-/g,'.'):''; }
  /* 法定工作周区间文本：2026.10.26-2026.10.30 */
  function workRangeText(win){ return fmtDot(win.ws)+'-'+fmtDot(win.we); }
  /* 窗口内自动路：填了拜访时间且落在窗口内的营销记录 */
  function planRows(win){
    var w=win||planWindows()[1];
    return liveRows.filter(function(r){
      var v=visitOf(r); return v && v>=w.s && v<=w.e;
    }).sort(function(a,b){
      /* 先按日期正序；同日内按时刻（00:00 未定排最前）；再按 优先级→重点节奏→更新倒序 */
      var va=visitOf(a), vb=visitOf(b);
      if(va!==vb) return va<vb?-1:1;
      var fa=visitFull(a), fb=visitFull(b);
      if(fa!==fb) return fa<fb?-1:1;
      return byLiveDesc(a,b);
    });
  }
  /* 窗口内手动路 */
  function planManualRows(win){
    var w=win||planWindows()[1];
    return planRowsManual.filter(function(p){
      if(p['待定']=='1') return false;      /* ★时间待定：不占具体某天，单独区块 */
      var d=d10(p['日期']); return d && d>=w.s && d<=w.e;
    }).sort(function(a,b){
      var da=d10(a['日期']), db=d10(b['日期']);
      if(da!==db) return da<db?-1:1;
      var ta=a['时刻']||'99:99', tb=b['时刻']||'99:99';
      if(ta!==tb) return ta<tb?-1:1;
      return (a['id']||'')<(b['id']||'')?-1:1;
    });
  }
  function planOutCount(){
    /* 窗口外：早于窗口起点记为「已过期」，晚于窗口末端记为「更晚」
       ★窗口末端随延伸而变（不再固定为下周日） */
    var ws=planWindows(), lo=ws[0].s, hi=ws[ws.length-1].e, past=0, later=0;
    liveRows.forEach(function(r){ var v=visitOf(r); if(!v) return;
      if(v<lo) past++; else if(v>hi) later++; });
    return {past:past,later:later};
  }
  /* 自动路行程行：右侧加「改期」按钮（跳到「正在营销」改拜访时间） */
  function planRecLine(r){
    var tm=visitTime(r);
    var ix=liveRows.indexOf(r);
    return '<div class="plan-rec"><span class="r-name">'+esc(r['企业机构'])+'</span>'+
      (tm?'<span class="r-time" title="拜访时刻">'+esc(tm)+'</span>':'')+
      groupChip(r)+prioChip(r)+tagChip(r)+
      '<span class="plan-acts"><button class="plan-editbtn" type="button" data-edit-live="'+ix+'" title="到「正在营销」修改本条拜访时间">改期</button></span>'+
      '<span class="r-next">下一步：'+esc(r['下一步动作']||'—')+'</span></div>';
  }
  /* 手动行程行（右侧「修改」+「删除」） */
  function planManualLine(p){
    var tm=p['时刻']||'';
    return '<div class="plan-rec manual">'+
      '<span class="plan-chip-manual">手动</span>'+
      (p['待定']=='1'?'<span class="plan-chip-tbd" title="时间待定：尚未确定具体日期与时刻">时间待定</span>':'')+
      '<span class="r-name">'+esc(p['机构']||p['事项']||'（未命名行程）')+'</span>'+
      (tm?'<span class="r-time" title="行程时刻">'+esc(tm)+'</span>':'')+
      (p['事项']&&p['机构']?'<span class="r-next" style="width:auto">'+esc(p['事项'])+'</span>':'')+
      (p['备注']?'<span class="r-next">备注：'+esc(p['备注'])+'</span>':'')+
      '<span class="plan-acts">'+
        '<button class="plan-editbtn" type="button" data-edit-plan="'+esc(p['id'])+'" title="修改本条行程（日期/时刻/机构/事项/备注）">修改</button>'+
        '<button class="plan-del" type="button" data-del-plan="'+esc(p['id'])+'">删除</button>'+
      '</span>'+
      '</div>';
  }
  /* ★第十二次修订（2026-11-01）：时间待定的行程（手动添加时勾选）
     —— 不占具体某天，单独归入「时间待定」区块，便于日后随时定档 */
  function planTbdRows(){
    return planRowsManual.filter(function(p){ return p['待定']=='1'; });
  }
  function planTbdHtml(){
    var arr=planTbdRows();
    if(!arr.length) return '';
    return '<div class="plan-tbdbox"><div class="tb-h">⏳ 时间待定 · '+arr.length+' 项'+
      '<span class="tb-n">尚未确定具体日期与时刻</span></div>'+
      arr.map(function(p){ return planManualLine(p); }).join('')+'</div>';
  }
  /* 上午/下午分栏（时刻 <12:00 → 上午；≥12:00 → 下午；未定时刻归上午栏并标注）
     ★第十四次修订（2026-11-02）：分栏内加「＋ 在上午/下午添加」，可就地录入 */
  function halfOf(t){ return (!t || t<'12:00') ? 'am' : 'pm'; }
  function planHalfBox(cls,label,arr,day,halfKey,canAdd){
    var addBtn=(canAdd===false)?'':
      '<button class="plan-addinline" type="button" data-plan-add="'+esc(day)+'|'+halfKey+
      '" title="在 '+esc(day)+' '+esc(label)+' 直接添加一条行程（保存后即入本格）">＋ 在'+esc(label)+'添加</button>';
    var inlineHtml=(planInline && planInline.day===day && planInline.half===halfKey)
      ? planInlineForm(day,halfKey) : '';
    return '<div class="plan-half '+cls+'"><div class="hh">'+label+'<span class="hc">'+arr.length+' 项</span></div>'+
      (arr.length? arr.map(function(x){return x.html;}).join('') : '<div class="plan-empty-half">（空）</div>')+
      addBtn+inlineHtml+
      '</div>';
  }
  /* ★第十四次修订（2026-11-02）：表内就地录入表单
     —— 在指定日/时段直接敲「机构、事项、时刻、备注」，保存即入本格，不必跳到下方表单 */
  function planInlineForm(day,halfKey){
    var defT=(halfKey==='pm')?'14:00':'09:00';
    var halfSel=(halfKey==='auto')
      ? '<select class="pi-half" id="piHalf" title="时段"><option value="am">上午</option><option value="pm">下午</option></select>'
      : '';
    var labelTxt=(halfKey==='pm')?'下午':(halfKey==='am'?'上午':'当日');
    return '<div class="plan-inline" data-plan-inline="'+esc(day)+'|'+esc(halfKey)+'">'+
      halfSel+
      '<input type="time" class="pi-time" id="piTime" value="'+defT+'" title="行程时刻">'+
      '<input type="text" class="pi-org" id="piOrg" placeholder="机构/客户名称" maxlength="40">'+
      '<input type="text" class="pi-item" id="piItem" placeholder="事项，如 首次拜访 / 授信面谈" maxlength="40">'+
      '<input type="text" class="pi-note" id="piNote" placeholder="备注（可留空）" maxlength="60">'+
      '<button class="btn pri" type="button" data-plan-inline-save="'+esc(day)+'|'+esc(halfKey)+'">保存到'+esc(labelTxt)+'</button>'+
      '<button class="btn" type="button" data-plan-inline-cancel="1">取消</button>'+
      '<span class="pi-hint">保存后即排入 '+esc(fmtDot(day))+' '+esc(wdOf(day))+' '+esc(labelTxt)+' 格；本机保存。</span>'+
      '</div>';
  }
  /* 空白日（工作日、今日及以后）细条行：也可就地添加 */
  function planEmptyDayHtml(day,canAdd){
    var addBtn=(canAdd===false)?'':
      '<button class="plan-addinline" type="button" data-plan-add="'+esc(day)+'|auto" '+
      'title="在 '+esc(day)+' 添加行程">＋ 添加行程</button>';
    return '<div class="plan-day plan-day-empty"><div class="plan-day-head">'+
      '<span class="dd">'+day.slice(5)+'</span><span class="wd">'+wdOf(day)+'</span>'+
      '<span class="cnt">0 项</span>'+addBtn+
      '</div>'+
      ((planInline && planInline.day===day && planInline.half==='auto') ? planInlineForm(day,'auto') : '')+
      '</div>';
  }

  /* 单周渲染：周头按法定工作周（周一~周五）显示日期区间；每日内部再分上午/下午
     ★第十四次修订（2026-11-02）：空白工作日也整行渲染出来（带「＋ 添加行程」），
        陛下不必先在下方表单建一条再去找它落在哪天 */
  function planWeekHtml(win){
    var auto=planRows(win), man=planManualRows(win);
    var total=auto.length+man.length;
    var h='<div class="plan-week'+(win.key==='cur'?' cur':'')+'">'+
      '<div class="plan-week-head"><span class="ww-title">'+esc(win.title)+'</span>'+
      '<span class="ww-range" title="法定工作周（周一至周五）">'+esc(workRangeText(win))+'</span>'+
      '<span class="ww-cnt">'+total+' 项</span></div>';
    var today=todayStr();
    var pastH='', liveH='', pastDays=0, pastItems=0;
    for(var i=0;i<7;i++){
      var day=addDays(win.s,i);
      var items=[];
      auto.forEach(function(r){ if(visitOf(r)===day) items.push({t:visitTime(r),html:planRecLine(r)}); });
      man.forEach(function(p){ if(d10(p['日期'])===day) items.push({t:p['时刻']||'',html:planManualLine(p)}); });
      /* 同日按时刻升序（未定时刻排最后） */
      items.sort(function(a,b){ var x=a.t||'99:99', y=b.t||'99:99'; return x<y?-1:(x>y?1:0); });
      var am=items.filter(function(x){return halfOf(x.t)==='am';});
      var pm=items.filter(function(x){return halfOf(x.t)==='pm';});
      var dd=day.slice(5), n=items.length;
      var todayMark=(day===today)?' <span class="chip tag-w">今天</span>':'';
      var dayH='';
      if(!n){
        /* 空白日：整行渲染（保留「＋ 添加行程」入口）；过去的日子不显示；周末不显示 */
        if(day<today) continue;
        var wdy=new Date(day+'T00:00:00').getDay();
        if(wdy===0||wdy===6) continue;          /* 周六日不排行程 */
        dayH=planEmptyDayHtml(day,true);
      }else{
        dayH='<div class="plan-day"><div class="plan-day-head"><span class="dd">'+dd+'</span>'+
          '<span class="wd">'+wdOf(day)+'</span>'+todayMark+
          '<span class="cnt">'+n+' 项</span></div>'+
          '<div class="plan-day-body"><div class="plan-ampm">'+
            planHalfBox('am','上午',am,day,'am',day>=today)+
            planHalfBox('pm','下午',pm,day,'pm',day>=today)+
          '</div></div></div>';
      }
      /* ★第十二次修订：已过去的日期整块折进「已过去」折叠区（默认收起） */
      if(day<today){ pastH+=dayH; pastDays++; pastItems+=n; }
      else liveH+=dayH;
    }
    if(pastH){
      h+='<details class="plan-past"><summary>已过去 '+pastDays+' 天 · '+pastItems+' 项行程（点击展开回看）'+
         '<span class="pb-n">'+fmtDot(addDays(today,-pastDays))+' ~ '+fmtDot(addDays(today,-1))+'</span></summary>'+
         pastH+'</details>';
    }
    h+=liveH;
    if(!liveH && !pastH){
      h+='<div style="padding:10px 12px;font-size:.78rem;color:var(--mute)">'+esc(win.title)+'暂无行程。可点各日「＋ 添加行程」直接录入，或在下方「手动添加行程」新增。</div>';
    }
    h+='</div>';
    return h;
  }
  /* 手动添加入口（表单）——★第十次修订：兼作「修改」入口（planEditId 非空时回填原值） */
  function planAddHtml(){
    var today=todayStr();
    var ed=null;
    if(planEditId){
      for(var i=0;i<planRowsManual.length;i++){
        if(planRowsManual[i]['id']===planEditId){ ed=planRowsManual[i]; break; }
      }
    }
    var title=ed? '✎ 修改行程条目（保存后覆盖原条目）' : '＋ 手动添加行程（不绑定企业登记，随时可改可删）';
    var btnText=ed? '保存修改' : '添加到行程表';
    return '<div class="plan-add" id="planAddBox">'+
      '<div class="pa-title">'+title+'</div>'+
      '<div class="plan-add-grid">'+
        '<input type="date" id="paDate" value="'+esc(ed?d10(ed['日期']):today)+'" title="行程日期" style="flex:0 0 150px">'+
        '<input type="time" id="paTime" value="'+esc(ed?(ed['时刻']||''):'')+'" title="行程时刻（可留空）" style="flex:0 0 120px">'+
        '<input type="text" id="paOrg" value="'+esc(ed?(ed['机构']||''):'')+'" placeholder="机构/客户名称" maxlength="40">'+
        '<input type="text" id="paItem" value="'+esc(ed?(ed['事项']||''):'')+'" placeholder="事项，如 首次拜访 / 授信面谈" maxlength="40">'+
        '<input type="text" id="paNote" value="'+esc(ed?(ed['备注']||''):'')+'" placeholder="备注（可留空）" maxlength="60">'+
        '<label class="pa-tbd" title="勾选后本条行程不占具体某天，单独归入「时间待定」区块">'+
          '<input type="checkbox" id="paTbd"'+((ed&&ed['待定']=='1')?' checked':'')+'>时间待定</label>'+
      '</div>'+
      '<div class="plan-add-foot">'+
        '<button class="btn pri" id="btnAddPlan" type="button">'+btnText+'</button>'+
        (ed?'<button class="btn" id="btnCancelPlanEdit" type="button">取消修改</button>':'')+
        '<span class="plan-hint" id="paTbdHint">保存后即时排入对应日期；本机保存，换电脑请用「导出/导入」迁移。</span>'+
      '</div></div>';
  }
  /* ★第十次修订：行右侧「修改」按钮 → 回填表单进入编辑态 */
  function startPlanEdit(id){
    planEditId=id;
    renderPlan();
    var box=document.getElementById('planAddBox');
    if(box&&box.scrollIntoView) box.scrollIntoView({behavior:'smooth',block:'center'});
    var f=document.getElementById('paOrg');
    if(f&&f.focus) f.focus({preventScroll:true});
  }
  function cancelPlanEdit(){ planEditId=null; renderPlan(); }
  function renderPlan(){
    var panel=document.getElementById('planPanel'); if(!panel) return;
    if(!planOpen){ panel.style.display='none'; return; }
    panel.style.display='';
    var wins=planRenderWins(), out=planOutCount();
    var total=0;
    wins.forEach(function(w){ total+=planRows(w).length+planManualRows(w).length; });
    /* ★表头随窗口延伸而变：不再写死「本周…｜下周…」两段 */
    var rangeTxt=wins.map(function(w){ return esc(w.title)+' '+esc(workRangeText(w)); }).join('　｜　');
    var h='<div class="plan-head"><span class="pt">拜访行程表</span>'+
      '<span class="pr">'+rangeTxt+'（法定工作周）</span></div>';
    h+=wins.map(planWeekHtml).join('');
    h+=planTbdHtml();          /* ★时间待定区块（不占具体某天） */
    h+=planAddHtml();
    h+='<div class="plan-sum">窗口外：已过期 '+out.past+' 项（可更新拜访时间顺延）· 更晚 '+out.later+' 项 · 手动行程 '+planRowsManual.length+' 条'
      +(planTbdRows().length?' · 其中时间待定 '+planTbdRows().length+' 条':'')+'</div>';
    panel.innerHTML=h;
    bindPlanEvents();
  }
  /* 行程表交互绑定（渲染后执行，避免重复绑定） */
  function bindPlanEvents(){
    var panel=document.getElementById('planPanel'); if(!panel) return;
    var addBtn=document.getElementById('btnAddPlan');
    if(addBtn && !addBtn.getAttribute('data-bound')){
      addBtn.setAttribute('data-bound','1');
      addBtn.addEventListener('click',function(){
        var date=(document.getElementById('paDate')||{}).value||'';
        var time=(document.getElementById('paTime')||{}).value||'';
        var org=((document.getElementById('paOrg')||{}).value||'').trim();
        var item=((document.getElementById('paItem')||{}).value||'').trim();
        var note=((document.getElementById('paNote')||{}).value||'').trim();
        var tbd=(document.getElementById('paTbd')||{}).checked?'1':'';
        if(tbd){ date=''; time=''; }          /* 待定：不占具体日期与时刻 */
        else if(!date){ alert('请选择行程日期，或勾选「时间待定」'); return; }
        if(!org&&!item){ alert('请填写机构名称或事项'); return; }
        if(planEditId){
          /* ★修改模式：覆盖原条目，不新增 */
          for(var i=0;i<planRowsManual.length;i++){
            if(planRowsManual[i]['id']===planEditId){
              planRowsManual[i]['日期']=date; planRowsManual[i]['时刻']=time;
              planRowsManual[i]['机构']=org; planRowsManual[i]['事项']=item;
              planRowsManual[i]['备注']=note; planRowsManual[i]['待定']=tbd;
              break;
            }
          }
          planEditId=null;
        }else{
          planRowsManual.push({
            'id':'p'+(Date.now())+Math.floor(Math.random()*1000),
            '日期':date, '时刻':time, '机构':org, '事项':item, '备注':note, '待定':tbd
          });
        }
        savePlanManual(); renderPlan(); updatePlanTag();
      });
    }
    /* ★勾选「时间待定」→ 禁用日期/时刻输入（此时不占具体某天） */
    var tbdBox=document.getElementById('paTbd');
    if(tbdBox && !tbdBox.getAttribute('data-bound')){
      tbdBox.setAttribute('data-bound','1');
      var syncTbd=function(){
        var on=!!tbdBox.checked;
        var dEl=document.getElementById('paDate'), tEl=document.getElementById('paTime');
        if(dEl){
          dEl.disabled=on;
          /* ★勾选即清空日期：既然时间待定，就不能看着还固定在某一天 */
          if(on){ dEl.value=''; dEl.setAttribute('placeholder','日期待定'); }
          else { if(!dEl.value) dEl.value=todayStr(); dEl.removeAttribute('placeholder'); }
        }
        if(tEl){
          tEl.disabled=on;
          if(on) tEl.value='';
        }
        var hint=document.getElementById('paTbdHint');
        if(hint) hint.textContent=on?'已选「时间待定」：本条不固定日期与时刻，保存后归入「时间待定」区块'
                                       :'保存后即时排入对应日期；本机保存，换电脑请用「导出/导入」迁移。';
      };
      tbdBox.addEventListener('change',syncTbd);
      syncTbd();
    }
    var cancelBtn=document.getElementById('btnCancelPlanEdit');
    if(cancelBtn && !cancelBtn.getAttribute('data-bound')){
      cancelBtn.setAttribute('data-bound','1');
      cancelBtn.addEventListener('click',cancelPlanEdit);
    }
    /* ★手动行「修改」→ 回填表单 */
    panel.querySelectorAll('[data-edit-plan]').forEach(function(b){
      if(b.getAttribute('data-bound')) return;
      b.setAttribute('data-bound','1');
      b.addEventListener('click',function(){ startPlanEdit(b.getAttribute('data-edit-plan')); });
    });
    /* ★自动行「改期」→ 跳到「正在营销」该条的编辑态（改拜访时间） */
    panel.querySelectorAll('[data-edit-live]').forEach(function(b){
      if(b.getAttribute('data-bound')) return;
      b.setAttribute('data-bound','1');
      b.addEventListener('click',function(){
        var i=+b.getAttribute('data-edit-live');
        if(typeof jumpEditLive==='function') jumpEditLive(i);
      });
    });
    panel.querySelectorAll('[data-del-plan]').forEach(function(b){
      if(b.getAttribute('data-bound')) return;
      b.setAttribute('data-bound','1');
      b.addEventListener('click',function(){
        var id=b.getAttribute('data-del-plan');
        if(!confirm('确认删除该行程条目？')) return;
        planRowsManual=planRowsManual.filter(function(p){ return p['id']!==id; });
        if(planEditId===id) planEditId=null;
        savePlanManual(); renderPlan(); updatePlanTag();
      });
    });
    /* ═══ ★第十四次修订（2026-11-02）：表内就地录入 ═══
       —— 点各日/各时段「＋ 添加」→ 就地展开小表单 → 保存即入该格 */
    panel.querySelectorAll('[data-plan-add]').forEach(function(b){
      if(b.getAttribute('data-bound')) return;
      b.setAttribute('data-bound','1');
      b.addEventListener('click',function(){
        var v=b.getAttribute('data-plan-add')||'', p=v.split('|');
        var day=p[0], half=p[1]||'auto';
        if(planInline && planInline.day===day && planInline.half===half){
          planInline=null;                       /* 再点一次收起 */
        }else{
          planInline={day:day, half:half};
        }
        renderPlan();
        var f=document.getElementById('piOrg');
        if(f&&f.focus) f.focus({preventScroll:true});
      });
    });
    panel.querySelectorAll('[data-plan-inline-cancel]').forEach(function(b){
      if(b.getAttribute('data-bound')) return;
      b.setAttribute('data-bound','1');
      b.addEventListener('click',function(){ planInline=null; renderPlan(); });
    });
    panel.querySelectorAll('[data-plan-inline-save]').forEach(function(b){
      if(b.getAttribute('data-bound')) return;
      b.setAttribute('data-bound','1');
      b.addEventListener('click',function(){
        var v=b.getAttribute('data-plan-inline-save')||'', p=v.split('|');
        var day=p[0], half=p[1]||'auto';
        var org=((document.getElementById('piOrg')||{}).value||'').trim();
        var item=((document.getElementById('piItem')||{}).value||'').trim();
        var note=((document.getElementById('piNote')||{}).value||'').trim();
        var time=((document.getElementById('piTime')||{}).value||'').trim();
        var hs=document.getElementById('piHalf');
        if(hs && hs.value) half=hs.value;
        if(!org&&!item){ alert('请填写机构名称或事项'); return; }
        /* 表内录入不设「时间待定」——时刻留空则按该时段默认时刻落格 */
        if(!time) time=(half==='pm')?'14:00':'09:00';
        planRowsManual.push({
          'id':'p'+(Date.now())+Math.floor(Math.random()*1000),
          '日期':day, '时刻':time, '机构':org, '事项':item, '备注':note, '待定':''
        });
        planInline=null;
        savePlanManual(); renderPlan(); updatePlanTag();
      });
    });
  }
  function updatePlanTag(){
    var wins=planRenderWins(), total=0;
    wins.forEach(function(w){ total+=planRows(w).length+planManualRows(w).length; });
    var ct=document.getElementById('planCnt'); if(ct) ct.textContent='行程共 '+total+' 项';
    var rg=document.getElementById('planRange');
    if(rg) rg.textContent=wins.map(function(w){ return w.title+' '+workRangeText(w); }).join(' ~ ');
  }
  function togglePlan(){
    planOpen=!planOpen;
    var btn=document.getElementById('btnPlan');
    if(btn) btn.setAttribute('aria-expanded',planOpen?'true':'false');
    renderPlan();
    if(planOpen&&updatePlanTag) updatePlanTag();
  }

  /* ═══ 总览行 ═══ */
  function renderFocus(){
    var el=document.getElementById('focusTxt'); if(!el) return;
    var total=0;
    document.querySelectorAll('[data-sub]').forEach(function(box){
      var tp=box.getAttribute('data-sub');
      var rows=snapRows.filter(function(r){ return r['类型']===tp; });
      total+=pickWindow(rows, tp).rows.length;
    });
    var st={}; GROUPS.forEach(function(g){ st[g.key]=0; });
    liveRows.forEach(function(r){ var g=groupOf(r); st[g]=(st[g]||0)+1; });
    var weekN=liveRows.filter(function(r){ return tagOf(r)==='本周重点'; }).length;
    var planN=0; planRenderWins().forEach(function(w){ planN+=planRows(w).length+planManualRows(w).length; });
    el.innerHTML='信息来源：窗口内 <b>'+total+'</b> 篇 ｜ 营销匹配：前瞻 / 企业 / 机构 3 期 ｜ 正在营销：<b>'+liveRows.length+'</b> 家（授信 '+st['授信']+' · 拜访 '+st['拜访']+' · 活动 '+st['活动']+' · 潜在机会 '+st['潜在机会']+' · 其他待办 '+st['其他待办']+'）｜ 本周重点 <b>'+weekN+'</b> 家 ｜ 行程 <b>'+planN+'</b> 项';
  }

  function renderAll(){ renderSnap(); renderSnapBadge(); renderLive(); updatePlanTag(); renderPlan(); renderFocus(); bindReadMarkers(); updateReadStat(); refreshReadCascade(); }

  /* ═══ IMA 唤起检测守卫（2026-10-19，原理同官方 we 函数）═══
     点击 imacopilot:// 深链后 2 秒：若页面仍持有焦点 → ima 未被唤起
     （未安装 / 已开但暖启动吞参数）→ 弹引导 toast，6 秒自消。
     不阻止默认导航（scheme 由浏览器交付外部程序处理）。
     ★2026-10-29 补：条目级「IMA 直达」在手机端也走 imacopilot:// 唤起客户端，
        若 2 秒后页面仍有焦点（未装客户端/被浏览器拦），自动降级到网页版直达链接
        （https://ima.qq.com/wikis/?…&mediaId=…&action=autoOpenMedia），
        避免「点了完全没反应」。桌面端不降级（桌面浏览器弹确认框后仍可手动复制）。 */
  function imaLaunchGuard(){
    var toast=null, timer=null;
    function hide(){ if(toast){ toast.remove(); toast=null; } if(timer){ clearTimeout(timer); timer=null; } }
    function show(){
      hide();
      toast=document.createElement('div');
      toast.className='ima-toast';
      toast.innerHTML='<b>ima 未响应</b><span>若 ima 客户端已开着，请先退出 ima 再点此链接（暖启动会吞掉直达参数）。</span>';
      document.body.appendChild(toast);
      timer=setTimeout(hide, 6000);
    }
    document.addEventListener('click', function(e){
      var a=(e.target&&e.target.closest)?e.target.closest('a[data-ima]'):null;
      if(!a) return;
      /* ★2026-10-29 补（手机端条目级 IMA 直达）：
         手机端 imacopilot:// 唤起失败（未装客户端 / 被浏览器拦）时，
         2 秒后页面仍持有焦点 → 自动降级打开**网页版直达链接**（带 mediaId+action），
         避免「点了完全没反应」。网页版在手机上会提示用桌面打开，但至少给出可复制路径与提示。 */
      if(a.getAttribute('data-mobile')){
        var fb=a.getAttribute('data-web-fallback');
        if(!fb) return;
        setTimeout(function(){
          if(document.hasFocus&&document.hasFocus()){
            window.open(fb,'_blank','noopener');
            show();
          }
        }, 2000);
        return;
      }
      setTimeout(function(){ if(document.hasFocus&&document.hasFocus()) show(); }, 2000);
    }, true);
  }

  /* ═══ 表单缓存（DSDK008） ═══ */
  function bindFormCache(scope,key){
    var t=null;
    function save(){ try{
      var d={};
      scope.querySelectorAll('input[name],select[name]').forEach(function(el){
        if(el.type==='password'||el.hasAttribute('data-no-cache')) return;
        d[el.name]=el.value;
      });
      localStorage.setItem(key,JSON.stringify(d));
    }catch(e){} }
    scope.querySelectorAll('input[name],select[name]').forEach(function(el){
      el.addEventListener('input',function(){ clearTimeout(t); t=setTimeout(save,300); });
      el.addEventListener('change',function(){ clearTimeout(t); t=setTimeout(save,300); });
    });
    return {
      restore:function(){ try{ var raw=localStorage.getItem(key); if(!raw) return;
        var d=JSON.parse(raw);
        scope.querySelectorAll('input[name],select[name]').forEach(function(el){
          if(d[el.name]!=null&&d[el.name]!=='') el.value=d[el.name];
        });
      }catch(e){} },
      clear:function(){ try{ localStorage.removeItem(key); }catch(e){} },
      reset:function(){ scope.querySelectorAll('input[name],select[name]').forEach(function(el){
        if(el.type==='date') el.value=''; else if(el.tagName==='SELECT') el.selectedIndex=0; else el.value='';
      }); }
    };
  }
  function fillSelect(sel,options,ph){
    if(!sel) return;
    sel.innerHTML='<option value="">'+esc(ph)+'</option>';
    (options||[]).forEach(function(o){ var op=document.createElement('option'); op.value=o.text; op.textContent=o.text; sel.appendChild(op); });
  }

  /* ═══ 导出 / 导入 / 恢复初始 ═══ */
  function exportJSON(){
    var data={app:'营销作战板-桌面版',version:1,exportedAt:new Date().toISOString(),
      snap:snapRows,live:liveRows,plan:planRowsManual};  /* ★手动行程随备份走 */
    var blob=new Blob([JSON.stringify(data,null,1)],{type:'application/json'});
    var a=document.createElement('a');
    a.href=URL.createObjectURL(blob);
    a.download='营销作战板_数据_'+todayStr()+'.json';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function(){ try{URL.revokeObjectURL(a.href);}catch(e){} },1000);
  }

  /* ═══ 第三部 Markdown 自动备份（2026-10-19）═══
     ★陛下旨意（2026-10-19 22:35）：只在有改动时触发——saveLive 后 debounce 60 秒自动导出一份；
     打开页面绝不触发（此前「每天首次打开补一份」的逻辑只要点开就弹下载，电脑手机皆扰，已废）。
     文件落 Edge 下载目录（E:\WorkBuddy\三元归一\_第三部备份\），每周五 23:30 由定时任务上传 IMA 营销库。
     JSON 不在 IMA 的 MIME 对照表，故转 Markdown（人可读、IMA 里直接看）。 */
  var mdTimer=null;
  function mdCell(s){ return String(s==null?'':s).replace(/\|/g,'\\|').replace(/\s+/g,' ').trim()||'—'; }
  function buildLiveMD(){
    var wins=planRenderWins(), planN=0;
    wins.forEach(function(w){ planN+=planRows(w).length+planManualRows(w).length; });
    var winTxt=wins.map(function(w){ return w.title+' '+workRangeText(w); }).join(' ~ ');
    var L=['# 营销作战板 · 第三部登记备份','',
      '> 自动导出时间：'+new Date().toLocaleString('zh-CN')+' ｜ 正在营销共 '+liveRows.length+' 家',
      '> 拜访行程（'+winTxt+'）：'+planN+' 项（含手动 '+planRowsManual.length+' 条）',
      '> 重点节奏为**滚动档位**：随日期自动前进（上周填的「下周重点」本周即显示为「本周重点」）',''];
    GROUPS.forEach(function(g){
      var gr=liveRows.filter(function(r){ return groupOf(r)===g.key; });
      L.push('## '+g.key+'（'+gr.length+' 家）','','> '+g.desc,'');
      if(!gr.length){ L.push('暂无记录',''); return; }
      L.push('| 优先级 | 重点 | 拜访时间 | 企业机构 | 当前情况 | 下一步动作 | 最近更新 |','| --- | --- | --- | --- | --- | --- | --- |');
      gr.forEach(function(r){
        L.push('| '+mdCell(prioOf(r))+' | '+mdCell(tagOf(r))+' | '+mdCell(visitFull(r).replace('T',' '))+' | '+mdCell(r['企业机构'])+' | '+mdCell(r['当前情况'])+' | '+mdCell(r['下一步动作'])+' | '+mdCell(d10(r['最近更新']))+' |');
      });
      L.push('');
    });
    /* ★拜访行程表（含手动添加的行程） */
    L.push('## 拜访行程表（'+winTxt+'）','');
    var any=false;
    wins.forEach(function(w){
      L.push('### '+w.title+'（'+workRangeText(w)+' 法定工作周）','');
      var rows=[];
      for(var i=0;i<7;i++){
        var day=addDays(w.s,i);
        planRows(w).forEach(function(r){ if(visitOf(r)===day) rows.push([day,'自动',r]); });
        planManualRows(w).forEach(function(p){ if(d10(p['日期'])===day) rows.push([day,'手动',p]); });
      }
      if(!rows.length){ L.push('暂无行程',''); return; }
      any=true;
      L.push('| 日期 | 星期 | 时段 | 来源 | 时刻 | 机构/事项 | 备注/下一步 |','| --- | --- | --- | --- | --- | --- | --- |');
      rows.forEach(function(x){
        var r=x[2], isM=(x[1]==='手动');
        var tm=isM?(r['时刻']||''):visitTime(r);
        L.push('| '+mdCell(x[0])+' | '+mdCell(wdOf(x[0]))+' | '+(halfOf(tm)==='am'?'上午':'下午')+' | '+x[1]+' | '+
          mdCell(tm)+' | '+
          mdCell(isM?((r['机构']||'')+' '+(r['事项']||'')).trim():r['企业机构'])+' | '+
          mdCell(isM?(r['备注']||''):(r['下一步动作']||''))+' |');
      });
      L.push('');
    });
    /* ★时间待定的行程（不占具体某天） */
    var tbdArr=planTbdRows();
    if(tbdArr.length){
      any=true;
      L.push('### ⏳ 时间待定（尚未确定具体日期与时刻）','');
      L.push('| 来源 | 机构/事项 | 备注 |','| --- | --- | --- |');
      tbdArr.forEach(function(p){
        L.push('| 手动 | '+mdCell(((p['机构']||'')+' '+(p['事项']||'')).trim())+' | '+mdCell(p['备注']||'')+' |');
      });
      L.push('');
    }
    if(!any && !planRowsManual.length) L.push('（本周与下周均无行程）','');
    return L.join('\n');
  }
  function autoExportMD(){
    try{
      var blob=new Blob([buildLiveMD()],{type:'text/markdown;charset=utf-8'});
      var a=document.createElement('a');
      a.href=URL.createObjectURL(blob);
      var d=new Date();
      var stamp=d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate())+'_'+pad2(d.getHours())+pad2(d.getMinutes());
      a.download='作战板第三部备份_'+stamp+'.md';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function(){ try{URL.revokeObjectURL(a.href);}catch(e){} },1000);
    }catch(e){}
  }
  function scheduleMDExport(){ /* 手机只读版：禁用自动导出 */ }
  function bindDataTools(){
    document.getElementById('btnExport').addEventListener('click',exportJSON);
    document.getElementById('btnExportMD').addEventListener('click',autoExportMD);
    document.getElementById('btnImport').addEventListener('click',function(){
      document.getElementById('fileImport').click();
    });
    document.getElementById('fileImport').addEventListener('change',function(){
      var f=this.files&&this.files[0]; if(!f) return;
      var rd=new FileReader();
      rd.onload=function(){
        try{
          var d=JSON.parse(rd.result);
          if(!d||!Array.isArray(d.snap)||!Array.isArray(d.live)) throw new Error('bad format');
          var ok=d.snap.every(function(r){ return r&&typeof r['标题']==='string'&&typeof r['类型']==='string'; })
                &&d.live.every(function(r){ return r&&typeof r['企业机构']==='string'&&r['企业机构']; });
          if(!ok) throw new Error('bad rows');
          if(!confirm('导入将覆盖本机现有数据（快照 '+d.snap.length+' 条 · 正在营销 '+d.live.length+' 家'+
                      (Array.isArray(d.plan)?' · 手动行程 '+d.plan.length+' 条':'')+'），确定继续？')) return;
          snapRows=d.snap.slice(); liveRows=d.live.slice();
          snapRows.sort(byDateDesc); liveRows.sort(byLiveDesc);
          /* ★手动行程随导入恢复（老备份无 plan 字段则清空） */
          planRowsManual=Array.isArray(d.plan)?d.plan.slice():[];
          saveSnap(); saveLive(); savePlanManual(); renderAll();
          alert('导入成功：快照 '+snapRows.length+' 条 · 正在营销 '+liveRows.length+' 家 · 手动行程 '+planRowsManual.length+' 条');
        }catch(e){
          alert('导入失败：文件格式不正确（需包含 snap 与 live 两个数组的 JSON）');
        }
        document.getElementById('fileImport').value='';
      };
      rd.readAsText(f,'utf-8');
    });
    document.getElementById('btnRestore').addEventListener('click',function(){
      if(!confirm('恢复初始数据？本机的新增/修改将被清除（建议先「导出数据」备份）。')) return;
      snapRows=cloneRows(SEED_SNAP); liveRows=cloneRows(SEED_LIVE);
      snapRows.sort(byDateDesc); liveRows.sort(byLiveDesc);
      planRowsManual=[];           /* ★手动行程一并清空 */
      saveSnap(); saveLive(); savePlanManual(); renderAll();
    });
    var bcr=document.getElementById('btnClearRead');
    if(bcr) bcr.addEventListener('click',function(){
      if(!confirm('清除本机所有「已读」标记？此操作仅去掉颜色标识，不会影响作战板任何数据。')) return;
      clearRead();
    });
  }

  /* ═══ 初始化 ═══ */
  function init(){
    probeStorage();
    snapRows=loadRows(LS_SNAP,SEED_SNAP).sort(byDateDesc);
    liveRows=loadRows(LS_LIVE,SEED_LIVE).sort(byLiveDesc);
    planRowsManual=loadPlanManual();   /* ★手动行程（独立于企业登记） */
    /* ★滚动锚点迁移（2026-10-26）：存量记录无 anchorWeek，按「最近更新」回推，
       缺失者（无最近更新）以「今天」所在周回推。老数据平滑接入滚动，不丢条目。 */
    var anchorDirty=false;
    liveRows.forEach(function(r){
      if(!r['anchorWeek'] && r['重点标记']){ backfillAnchor(r); anchorDirty=true; }
    });
    if(anchorDirty) saveLive();
    DATA_TODAY=computeDataToday();

    var liveCard=document.getElementById('btnAddLive').closest('.card');
    var liveCache=bindFormCache(liveCard,LS_FORM);
    function val(card,n){ var el=card.querySelector('[name="'+n+'"]'); return el?el.value.trim():''; }

    fillSelect(liveCard.querySelector('select[name="营销阶段"]'),
      GROUPS.map(function(g){ return {text:g.key}; }),'营销分组');
    fillSelect(liveCard.querySelector('select[name="优先级"]'),
      [{text:'高'},{text:'中'},{text:'低'}],'优先级');
    fillSelect(liveCard.querySelector('select[name="重点标记"]'),
      TAGS.map(function(t){ return {text:t.key}; }),'重点节奏');
    liveCache.restore();

    document.getElementById('liveFilter').addEventListener('click',function(e){
      var b=e.target.closest('button[data-f]'); if(!b) return;
      liveFilter=b.getAttribute('data-f');
      document.querySelectorAll('#liveFilter button').forEach(function(x){ x.classList.toggle('on',x===b); });
      renderLive();
    });

    /* 第二排筛选：重点节奏（本周/下周/下月/下季），与分组筛选为「与」关系 */
    document.getElementById('liveFilterTag').addEventListener('click',function(e){
      var b=e.target.closest('button[data-f]'); if(!b) return;
      liveTag=b.getAttribute('data-f');
      document.querySelectorAll('#liveFilterTag button').forEach(function(x){ x.classList.toggle('on',x===b); });
      renderLive();
    });

    /* 下周拜访计划：标签点击开合面板 */
    var planBtn=document.getElementById('btnPlan');
    if(planBtn) planBtn.addEventListener('click',togglePlan);

    /* 编辑态：退出（清表单+复位按钮+取消高亮） */
    function exitEdit(){
      editingIdx=-1;
      document.getElementById('btnAddLive').textContent='＋ 登记营销进展';
      document.getElementById('btnCancelEdit').style.display='none';
      liveCache.clear(); liveCache.reset(); renderLive();
    }
    /* 编辑态：进入（回填表单+切按钮+滚动到表单+高亮该行） */
    function startEdit(i){
      var r=liveRows[i]; if(!r) return;
      editingIdx=i;
      liveCache.clear();
      liveCard.querySelector('[name="企业机构"]').value=r['企业机构']||'';
      liveCard.querySelector('[name="营销阶段"]').value=r['营销阶段']||'';
      liveCard.querySelector('[name="优先级"]').value=prioOf(r);
      /* ★回填「重点标记」：用原始档位（用户当初填的），不用滚动后的显示值——
         否则编辑保存会二次漂移（上周填的"下周重点"回填成"本周重点"，保存后又锚到本周） */
      liveCard.querySelector('[name="重点标记"]').value=r['重点标记']||'';
      liveCard.querySelector('[name="拜访时间"]').value=visitFillVal(r);  /* 兼容旧纯日期：补 T00:00 占位 */
      liveCard.querySelector('[name="当前情况"]').value=r['当前情况']||'';
      liveCard.querySelector('[name="下一步动作"]').value=r['下一步动作']||'';
      document.getElementById('btnAddLive').textContent='保存修改';
      document.getElementById('btnCancelEdit').style.display='';
      renderLive();
      /* 跳转到文字录入位置：滚表单本体（勿滚 liveCard 巨型卡——表单+57条记录同卡，
         center 对齐会落在列表中段）；block:'start' + scroll-margin-top 避让 sticky 顶栏；
         再让企业名称输入框拿焦点，光标就位可直接改字 */
      var formBox=liveCard.querySelector('.form-grid');
      if(formBox&&formBox.scrollIntoView) formBox.scrollIntoView({behavior:'smooth',block:'start'});
      var firstInput=liveCard.querySelector('[name="企业机构"]');
      if(firstInput&&firstInput.focus) firstInput.focus({preventScroll:true});
    }

    /* ★第十次修订：行程表「改期」按钮 → 跳到「正在营销」该条的编辑态（改拜访时间） */
    window.jumpEditLive=function(i){
      if(typeof i!=='number' || i<0 || i>=liveRows.length) return;
      /* 若该条被当前筛选隐藏，先复位筛选，保证跳过去能看见 */
      if(liveFilter!=='all'||liveTag!=='all'){
        liveFilter='all'; liveTag='all';
        document.querySelectorAll('#liveFilter button').forEach(function(x){ x.classList.remove('on'); });
        document.querySelectorAll('#liveFilterTag button').forEach(function(x){ x.classList.remove('on'); });
      }
      var first=document.querySelector('#liveFilter button[data-f="all"]');
      if(first) first.classList.add('on');
      var firstT=document.querySelector('#liveFilterTag button[data-f="all"]');
      if(firstT) firstT.classList.add('on');
      startEdit(i);
    };

    document.getElementById('liveList').addEventListener('click',function(e){
      var ed=e.target.closest('button.r-edit');
      if(ed){ startEdit(+ed.getAttribute('data-i')); return; }
      var b=e.target.closest('button.r-del'); if(!b) return;
      var i=+b.getAttribute('data-i'); var r=liveRows[i]; if(!r) return;
      if(!confirm('确认删除「'+r['企业机构']+'」的营销记录？')) return;
      liveRows.splice(i,1); saveLive();
      if(editingIdx>=0) exitEdit(); else renderLive();  /* 删任意行都退出编辑态，防索引错乱 */
      updatePlanTag(); renderPlan(); renderFocus();
    });

    document.getElementById('btnCancelEdit').addEventListener('click',function(){ exitEdit(); });

    document.getElementById('btnAddLive').addEventListener('click',function(){
      if(!val(liveCard,'企业机构')){ alert('请填写企业名称'); return; }
      if(editingIdx>=0){  /* 保存修改模式 */
        var r=liveRows[editingIdx];
        if(!r){ exitEdit(); return; }
        r['企业机构']=val(liveCard,'企业机构');
        r['营销阶段']=val(liveCard,'营销阶段')||'其他';
        r['优先级']=val(liveCard,'优先级')||'中';
        r['重点标记']=val(liveCard,'重点标记');
        /* ★锚点周：改档位即改锚点，滚动随之生效；
           若未选档位（空）→ 保留原锚点，不破坏既有滚动位置 */
        if(r['重点标记']) r['anchorWeek']=tagToAnchor(r['重点标记']);
        r['拜访时间']=normVisit(val(liveCard,'拜访时间'));  /* 00:00 未定时刻回落纯日期存储 */
        r['当前情况']=val(liveCard,'当前情况');
        r['下一步动作']=val(liveCard,'下一步动作');
        r['最近更新']=todayStr();  /* 陛下旨意 2026-10-20：最近更新撤出表单，保存即自动记当天 */
        liveRows.sort(byLiveDesc); saveLive();
        exitEdit(); updatePlanTag(); renderPlan(); renderFocus();
        return;
      }
      var row={
        '企业机构':val(liveCard,'企业机构'),
        '营销阶段':val(liveCard,'营销阶段')||'其他',
        '优先级':val(liveCard,'优先级')||'中',
        '重点标记':val(liveCard,'重点标记'),
        'anchorWeek':tagToAnchor(val(liveCard,'重点标记')),  /* ★锚点周：滚动档位的基准 */
        '拜访时间':normVisit(val(liveCard,'拜访时间')),  /* 00:00 未定时刻回落纯日期存储 */
        '当前情况':val(liveCard,'当前情况'),
        '下一步动作':val(liveCard,'下一步动作'),
        '最近更新':todayStr()  /* 陛下旨意 2026-10-20：登记即记当天，不手填 */
      };
      liveRows.unshift(row); liveRows.sort(byLiveDesc); saveLive();
      liveCache.clear(); liveCache.reset(); renderLive(); updatePlanTag(); renderPlan(); renderFocus();
    });

    bindDataTools();
    imaLaunchGuard();
    fixImaOpenLinks();
    renderAll();

    if(!LS_OK){
      var mb=document.getElementById('modeBadge');
      if(mb){ mb.className='badge off'; mb.innerHTML='<span class="dot"></span>本地模式 · 存储不可用（仅本次有效）'; }
    }
  }

  /* ═══ 状态快照钩子（IIFE 顶层，不在 init 内）═══════════════════════════
     ★第十五次修订（2026-11-02）：打通「电脑 → 手机」同步链路
     根因：桌面版的登记与行程存在电脑浏览器 localStorage；手机版是 GitHub Pages 静态站，
           二者无通道 → 手机端行程表恒为空（种子 57 家的「拜访时间」全空、手动行程 0 条）。
     方案：本机脚本用 Playwright 打开本页面 → 调 exportStateSnapshot() 得 {live, plan}
           → 上传至 GitHub Pages 根目录 state.json；手机版启动时 fetch 并合并。
     置于顶层的原因：手机版注入脚本需在任何时刻（DOMContentLoaded 前）就能取到这两个函数。 */
  window.exportStateSnapshot=function(){
    return {
      version: 1,
      exportedAt: new Date().toISOString(),
      live: cloneRows(liveRows),
      plan: cloneRows(planRowsManual)
    };
  };

  /* 合并远端状态快照（手机版主用；桌面版亦可调用以回灌）
     st = {version, exportedAt, live:[…], plan:[…]}
     opts.overwrite = true 时以远端为准整表替换（手机只读视图专用：电脑是唯一真源，
       电脑改了拜访时间 / 删了行，手机必须跟着变，不能只增不减）。
     默认（不传 opts 或 overwrite 非真）为「只增不覆盖」，供桌面回灌时保护本机数据。 */
  window.applyRemoteState=function(st, opts){
    if(!st || st.version!==1) return {ok:false, reason:'bad format'};
    opts = opts || {};
    var overwrite = !!opts.overwrite;
    var addedLive=0, updLive=0, addedPlan=0, updPlan=0;

    if(Array.isArray(st.live) && st.live.length){
      if(overwrite){
        /* ★手机只读视图同步规则（双轨）：
           ① 远端（电脑）有的同名条目 → 以电脑字段为准整体覆盖（拜访时间等必跟）；
           ② 电脑有而本机没有 → 新增，标记 _src='sync'；
           ③ 本机有而电脑没有 → 若标记 _src='sync'（此前从电脑同步来的）则删除，
              若是 IMA 种子基线（无标记或 _src='seed'）则保留，不误删基线。 */
        var rm={}; st.live.forEach(function(r){ if(r && r['企业机构']) rm[r['企业机构']]=1; });
        liveRows = liveRows.filter(function(r){
          if(!r || !r['企业机构']) return true;
          if(rm[r['企业机构']]) return true;
          if(r['_src']==='sync'){ updLive++; return false; }   /* 电脑已删除 → 同步删除 */
          r['_src']='seed'; return true;                        /* 种子基线 → 保留 */
        });
        st.live.forEach(function(r){
          if(!r || !r['企业机构']) return;
          var hit=null;
          for(var i=0;i<liveRows.length;i++){ if(liveRows[i]['企业机构']===r['企业机构']){ hit=liveRows[i]; break; } }
          if(hit){
            var isSeed = !hit['_src'];           /* 无标记 = IMA 种子基线 → 不受电脑删除牵连 */
            for(var k in r){ if(Object.prototype.hasOwnProperty.call(r,k)) hit[k]=r[k]; }
            hit['_src'] = isSeed ? 'seed' : 'sync';
            updLive++;
          } else {
            var nr=cloneRows([r])[0]; nr['_src']='sync';
            liveRows.push(nr); addedLive++;
          }
        });
        liveRows.sort(byLiveDesc);
      } else {
        var have={}; liveRows.forEach(function(r){ have[r['企业机构']]=1; });
        st.live.forEach(function(r){
          if(!r || !r['企业机构']) return;
          if(have[r['企业机构']]) return;      /* 本机已有同名 → 不覆盖 */
          liveRows.push(cloneRows([r])[0]); have[r['企业机构']]=1; addedLive++;
        });
        liveRows.sort(byLiveDesc);
      }
    }
    if(Array.isArray(st.plan)){
      if(overwrite){
        var rp={}; st.plan.forEach(function(p){ if(p && p['id']) rp[p['id']]=1; });
        planRowsManual.forEach(function(p){ if(p && p['id'] && !rp[p['id']]) updPlan++; });
        planRowsManual = st.plan.map(function(p){ return cloneRows([p])[0]; });
      } else {
        var haveId={}; planRowsManual.forEach(function(p){ haveId[p['id']]=1; });
        st.plan.forEach(function(p){
          if(!p || !p['id'] || haveId[p['id']]) return;
          planRowsManual.push(cloneRows([p])[0]); haveId[p['id']]=1; addedPlan++;
        });
      }
    }
    if(addedLive || updLive || addedPlan || updPlan || overwrite){
      saveLive(); savePlanManual();
      renderAll();
    }
    return {ok:true, addedLive:addedLive, updLive:updLive,
            addedPlan:addedPlan, updPlan:updPlan,
            overwrite:overwrite, exportedAt:st.exportedAt||''};
  };

  /* ★注入快照种子（手机版专用，2026-11-02）
     手机版 app.js 已瘦身至 88KB（SEED_SNAP 外置为 snap.json，1.55MB 走独立 fetch），
     首屏（第三部 + 行程表）得以秒出；快照抵达后由此钩子注入并重绘第一部。 */
  window.applySnapSeed=function(rows){
    if(!Array.isArray(rows) || !rows.length) return {ok:false};
    SEED_SNAP = rows;
    if(!snapRows.length){
      snapRows = loadRows(LS_SNAP, SEED_SNAP).sort(byDateDesc);
    }
    renderSnap(); renderSnapBadge();
    return {ok:true, n:snapRows.length};
  };

  if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();
