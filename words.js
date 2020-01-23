var words = [
  "公主",
  "規",
  "暴龍",
  "油畫",
  "空氣",
  "俠盜",
  "時鐘",
  "牙線",
  "橘子",
  "推",
  "貨櫃",
  "溪",
  "面紙",
  "衣櫥",
  "鼠",
  "丟",
  "法條",
  "手錶",
  "鉛筆",
  "書",
  "丘",
  "珠寶",
  "滑雪",
  "紐西蘭",
  "富",
  "豎笛",
  "大河",
  "腦下腺",
  "換",
  "木星",
  "火",
  "首都",
  "柬埔寨",
  "鼓",
  "血",
  "船",
  "心臟",
  "鋸",
  "拍",
  "波斯",
  "歌劇院",
  "號角",
  "紅毛丹",
  "噴射",
  "銀",
  "水缸",
  "棒",
  "牙科",
  "戰士",
  "海盜",
  "蜜餞",
  "公園",
  "漫畫",
  "大樓",
  "火柴",
  "北京",
  "堅果",
  "院",
  "槍",
  "度",
  "副",
  "日",
  "礦",
  "網",
  "椅",
  "騎",
  "查",
  "頭",
  "魚",
  "尼斯湖",
  "外來者",
  "大使館",
  "體育館",
  "巧克力",
  "台灣",
  "瓶",
  "刷",
  "熊",
  "法庭",
  "人馬",
  "甲板",
  "薄荷",
  "捷運",
  "象牙",
  "射擊",
  "走私者",
  "度",
  "賊",
  "頂",
  "結",
  "老鼠",
  "警察",
  "首長",
  "手掌",
  "刀",
  "鬼",
  "領袖",
  "實驗室",
  "器官",
  "直升機",
  "拖鞋",
  "襪子",
  "內衣",
  "精靈",
  "魔法",
  "希臘",
  "森林",
  "沙漠",
  "女巫",
  "荒野",
  "公主",
  "輪盤",
  "機槍",
  "衛星",
  "猩",
  "檸檬",
  "企鵝",
  "觸角",
  "潛水",
  "美國",
  "滑",
  "滴",
  "波",
  "炬",
  "雪",
  "冰",
  "鈴",
  "雅",
  "沙",
  "英雄",
  "大富翁",
  "獨角獸",
  "日誌",
  "賭場",
  "電池",
  "體重",
  "空氣",
  "檔案",
  "瓷",
  "磁碟",
  "長笛",
  "吉他",
  "探員",
  "草圖",
  "澳洲",
  "十字",
  "稻草",
  "德國",
  "奶",
  "塑膠",
  "毒",
  "戲院",
  "亞馬遜",
  "土星",
  "音",
  "騎士",
  "床",
  "柱",
  "搖",
  "獅",
  "師",
  "濕",
  "洗衣機",
  "唱",
  "肥皂",
  "脂肪",
  "花萼",
  "軟顎",
  "神經",
  "天堂",
  "芭樂",
  "倉庫",
  "貨櫃",
  "鋼",
  "項鍊",
  "髮簪",
  "攪",
  "亮",
  "鄉",
  "診",
  "刮",
  "光碟",
  "聲",
  "吃",
  "蛋白質",
  "描",
  "廟",
  "古老",
  "聖殿",
  "教堂",
  "吻",
  "棚",
  "桌子",
  "晃",
  "飛機",
  "頭蝨",
  "蝙蝠",
  "夜",
  "硫酸",
  "蝕",
  "雨傘",
  "套",
  "狼人",
  "偵探",
  "龍捲風",
  "平原",
  "火山",
  "沉",
  "鑽石",
  "地層",
  "符咒",
  "橄欖",
  "地中海",
  "競技場",
  "公投",
  "民主",
  "法律",
  "花生",
  "地瓜",
  "板凳",
  "羽球",
  "孔雀",
  "劣",
  "蝸牛",
  "藻",
  "鹽",
  "膠",
  "礁",
  "澆",
  "椒",
  "壓",
  "窒息",
  "浪",
  "漲潮",
  "麥克風",
  "樹酯",
  "映",
  "硬",
  "手機",
  "報告",
  "阿根廷",
  "丹麥",
  "乳牛",
  "草",
  "養分",
  "蛋白",
  "土",
  "礦",
  "九份",
  "豚",
  "龜",
  "象",
  "塔",
  "枯",
  "窟",
  "骨",
  "谷",
  "泰國",
  "馬鈴薯",
  "汗",
  "尿",
  "臭",
  "耳",
  "迷宮",
  "淋巴",
  "平衡",
  "獨木橋",
  "輪胎",
  "泛舟",
  "峽谷",
  "公路",
  "駕照",
  "鐵",
  "金",
  "護照",
  "火箭",
  "銀河",
  "宇宙",
  "蠟燭",
  "胸花",
  "地震",
  "板塊",
  "枕頭",
  "棉花",
  "絲",
  "碳酸",
  "石膏",
  "瓷",
  "熔",
  "沸騰",
  "蒸氣",
  "牛排",
  "叉",
  "冰淇淋",
  "酪",
  "駱駝",
  "仙人掌",
  "挪威",
  "勇者",
  "投手",
  "槍手",
  "棍",
  "俄羅斯",
  "螺絲",
  "鎖",
  "鑰",
  "酵素",
  "鼻",
  "黏膜",
  "纖維",
  "鬍",
  "瞳孔",
  "顯微鏡",
  "電子",
  "魂",
  "死",
  "店",
  "墊",
  "電",
  "吸",
  "熟",
  "殼",
  "螢光",
  "抹",
  "擦拭",
  "行政",
  "插座",
  "族譜",
  "翅膀",
  "危樓",
  "遊客",
  "初吻",
  "姨",
  "玉鐲",
  "資本主義",
  "蒸籠",
  "城堡",
  "澳門",
  "遺棄",
  "水平線",
  "花心",
  "汽油",
  "思想",
  "生存",
  "亞洲",
  "紙箱",
  "手汗",
  "皮靴",
  "浮誇",
  "鄧麗君",
  "壽司",
  "潤滑劑",
  "緊張",
  "手指",
  "物理",
  "無禮",
  "小說",
  "成吉思汗",
  "嚴峻",
  "化學",
  "拜金",
  "嫉妒",
  "選舉",
  "梯子",
  "美味",
  "重金屬",
  "發財",
  "實驗室",
  "畫廊",
  "雞湯",
  "網球",
  "閨密",
  "藥局",
  "柔軟",
  "後座",
  "業餘",
  "刺青",
  "劉邦",
  "大腦",
  "死海",
  "撒謊",
  "小黃瓜",
  "漫畫",
  "合約",
  "縱火",
  "火雞",
  "吸塵器",
  "更衣室",
  "止咳",
  "囚犯",
  "無辜",
  "東京",
  "龍舟",
  "相親",
  "天文",
  "羽毛球",
  "免費",
  "保密",
  "冰糖",
  "站立",
  "簽證",
  "補習",
  "血腥",
  "接龍",
  "歐元",
  "鸚鵡",
  "咖啡",
  "斜坡",
  "夏威夷",
  "冷凍",
  "基因",
  "封印",
  "枕頭",
  "三角戀",
  "關節",
  "威士忌",
  "豪宅",
  "自閉症",
  "皇室",
  "詩經",
  "詩意",
  "蒸餾水",
  "郊外",
  "精緻",
  "肚皮舞",
  "犯罪",
  "蘋果",
  "潑婦",
  "偷渡",
  "軍隊",
  "遮蓋",
  "別墅",
  "秦始皇",
  "郵差",
  "保齡球",
  "蚯蚓",
  "雪糕",
  "筆記本",
  "節約",
  "野餐",
  "智慧",
  "哈密瓜",
  "沙拉",
  "惡夢",
  "虛弱",
  "椰子",
  "籃球",
  "裝潢",
  "火星",
  "兒科",
  "寶藏",
  "風箏",
  "導彈",
  "寓言",
  "拖把",
  "預言",
  "咒語",
  "毛孔",
  "冷血",
  "絕種",
  "茶杯",
  "恐龍",
  "泥土",
  "墨水",
  "滿意",
  "維生素",
  "喇叭",
  "變壓器",
  "膽囊",
  "身分證",
  "芝麻",
  "粉圓",
  "股市",
  "梵諦岡",
  "樂譜",
  "食譜",
  "海豹",
  "秘書",
  "噪音",
  "哲學",
  "愛因斯坦",
  "病毒",
  "畸形",
  "腫瘤",
  "葡萄柚",
  "玉山",
  "桌遊",
  "學測",
  "國考",
  "分化",
  "釘書機",
  "鏡子",
  "悠遊卡",
  "日本",
  "真菌",
  "和弦",
  "噁心",
  "蛋塔",
  "細菌",
  "海馬",
  "拿破崙",
  "諾貝爾",
  "暢銷",
  "入圍",
  "掙扎",
  "吝嗇",
  "挽留",
  "巔峰",
  "律師",
  "工程師",
  "繼母",
  "魔杖",
  "法師",
  "祭壇",
  "屍首",
  "監牢",
  "蟑螂",
  "跳蚤",
  "蚊子",
  "蒼蠅",
  "痕跡",
  "柵欄",
  "寺廟",
  "三合院",
  "指揮",
  "龍貓",
  "指紋",
  "化糞池",
  "牛奶",
  "防曬乳",
  "象棋",
  "西洋棋",
  "圍棋",
  "法醫",
  "竊賊",
  "後照鏡",
  "擂台",
  "銀杏",
  "靈芝",
  "救護車",
  "郵局",
  "銀行",
  "消防車",
  "交響曲",
  "奏鳴曲",
  "即興",
  "偽裝",
  "年輪",
  "基底核",
  "海馬迴",
  "下視丘",
  "麻醉",
  "中古",
  "柔道",
  "跆拳道",
  "算盤",
  "梅花",
  "黑桃",
  "戒指",
  "快餐",
  "素食",
  "塞子",
  "浴缸",
  "鯨魚",
  "海豚",
  "水手",
  "聖人",
  "孔明",
  "魯智深",
  "滷味",
  "鋼筆",
  "鋼琴",
  "鍵盤",
  "滑鼠",
  "螢幕",
  "插管",
  "貝果",
  "咖哩",
  "教授",
  "征服",
  "肌腱",
  "發票",
  "姪子",
  "涉獵",
  "鼻甲",
  "視網膜",
  "意識",
  "抽屜",
  "潮汐",
  "彈弓",
  "雕刻",
  "蠟",
  "失憶",
  "瘀青",
  "血栓",
  "剝離",
  "硬化",
  "傲嬌",
  "刁鑽",
  "悠哉",
  "肖像",
  "微積分",
  "戰略",
  "便條紙",
  "磁鐵",
  "鎖匠",
  "瓶頸",
  "靈異",
  "殭屍",
  "骰子",
  "魔術方塊",
  "橋墩",
  "玲瓏",
  "歸有光",
  "儒家",
  "墨家",
  "埃及",
  "墓碑",
  "蘇軾",
  "泥鰍",
  "棗子",
  "驚異",
  "萼片",
  "癩蛤蟆",
  "袈裟",
  "僧人",
  "種族",
  "動漫",
  "皮卡丘",
  "胡桃鉗",
  "天鵝",
  "空靈",
  "腐朽",
  "文藝復興",
  "科學革命",
  "電影",
  "拼圖",
  "矛盾",
  "惡魔",
  "肺臟",
  "肝臟",
  "胰臟",
  "脾臟",
  "腎臟",
  "氣胸",
  "漩渦",
  "宙斯",
  "波塞頓",
  "賭博",
  "陣列",
  "變數",
  "方程式",
  "靈魂",
  "脊髓",
  "骨盆",
  "鞋匠",
  "胚胎",
  "組織",
  "解剖",
  "憲法",
  "民法",
  "刑法",
  "污漬",
  "垃圾",
  "鯊魚",
  "絞刑",
  "上吊",
  "燒炭",
  "瀑布",
  "肺炎",
  "乾旱",
  "甘霖",
  "紀律",
  "戲劇",
  "京劇",
  "國樂",
  "管樂",
  "弦樂",
  "二胡",
  "古箏",
  "口琴",
  "直笛",
  "法國號",
  "瑞士",
  "芬蘭",
  "菲律賓",
  "大提琴",
  "松香",
  "窗簾",
  "博士",
  "蹂躪",
  "海嘯",
  "瘧疾",
  "菩薩",
  "佛祖",
  "金字塔",
  "花園",
  "鞭刑",
  "耕耘",
  "播種",
  "脈絡",
  "精義",
  "建築",
  "宮殿",
  "電梯",
  "望遠鏡",
  "光電效應",
  "折射",
  "向心力",
  "重心",
  "力矩",
  "彈性碰撞",
  "秤",
  "公共財",
  "稅",
  "摩天輪",
  "道耳頓",
  "鴨嘴獸",
  "阿里山",
  "安地斯山",
  "海峽",
  "運河",
  "獵豹",
  "馬戲團",
  "奴隸",
  "黑海",
  "羅馬",
  "馬德里",
  "伊拉克",
  "軟骨",
  "支票",
  "彈夾",
  "噴泉",
  "幻覺",
  "蓮霧",
  "蓮藕",
  "香蕉",
  "絲瓜",
  "膠囊",
  "藥丸",
  "貞操",
  "君子",
  "肽聚醣",
  "祖靈",
  "菜脯",
  "肉圓",
  "珍珠奶茶",
  "蚵仔煎",
  "淡水",
  "係數",
  "地質",
  "蜥蜴",
  "彈塗魚",
  "鮭魚",
  "旗魚",
  "老鷹",
  "禿鷹",
  "達爾文",
  "達文西",
  "拾穗",
  "貝多芬",
  "莫札特",
  "巴哈",
  "安培",
  "瓦特",
  "樹脂",
  "胚珠",
  "胎盤",
  "碳酸",
  "鹽酸",
  "檢體",
  "疫苗",
  "慈禧太后",
  "甲午戰爭",
  "砒霜",
  "將軍",
  "蠻荒",
  "哆啦A夢",
  "核酸",
  "肝醣",
  "黏土",
  "素描",
  "水彩",
  "玄機",
  "救贖",
  "管家",
  "齒輪",
  "橡皮筋",
  "硬幣",
  "公寓",
  "校閱",
  "枷鎖",
  "鴉片",
  "古柯鹼",
  "松鼠",
  "獵人",
  "聯合",
  "悖論",
  "詭辯",
  "神話",
  "草書",
  "彩券",
  "紅綠燈",
  "蘭亭集序",
  "平板",
  "牙膏",
  "行書",
  "道家",
  "神鵰俠侶",
  "羅密歐",
  "熊貓",
  "鱷魚",
  "楷書",
  "三層肉",
  "粉腸",
  "輸卵管",
  "雞皮疙瘩",
  "石墨",
  "瀏覽器",
  "碩士",
  "吊飾",
  "吊燈",
  "水晶",
  "薩克",
  "長號",
  "小號",
  "密室",
  "平滑肌",
  "軸突",
  "鬧鐘",
  "倒立",
  "弩",
  "十字架",
  "鄭成功",
  "柯文哲",
  "蔡英文",
  "韓國瑜",
  "衛生紙",
  "保險桿",
  "假牙",
  "矯正",
  "手術",
  "雙胞胎",
  "臺北",
  "臺灣",
  "臺中",
  "桃園",
  "中壢",
  "臺南",
  "墾丁",
  "彰化",
  "舌頭",
  "指甲",
  "痣",
  "痔瘡",
  "疝氣",
  "扇子",
  "杜鵑",
  "麻雀",
  "鴿子",
  "毛筆",
  "藝術",
  "雕像",
  "凱薩",
  "宜家家居",
  "抓耙子",
  "臥底",
  "間諜",
  "政治",
  "證照",
  "蒼白球",
  "突觸",
  "機率",
  "票",
  "傳票",
  "搜索票",
  "滿月",
  "月蝕",
  "日蝕",
  "防空洞",
  "隧道",
  "羊駝",
  "便祕",
  "肛門",
  "胃",
  "食道",
  "小腸",
  "絨毛",
  "纖毛",
  "鞭毛",
  "氣管",
  "股骨",
  "儀式",
  "典禮",
  "手風琴",
  "管風琴",
  "書籤",
  "隕石",
  "半衰期",
  "腎虛",
  "爵士",
  "巴洛克",
  "古典",
  "浪漫",
  "雅致",
  "啞鈴",
  "生日",
  "忌日",
  "羅浮宮",
  "翠玉白菜",
  "故宮",
  "博物館",
  "圖書館",
  "地獄",
  "地窖",
  "油條",
  "豆漿",
  "小籠包",
  "鼎泰豐",
  "家樂福",
  "賓士",
  "保時捷",
  "牛肉麵",
  "披薩",
  "火圈",
  "項圈",
  "剝削",
  "輪迴",
  "冰箱",
  "電暖器",
  "熱水器",
  "二氧化碳",
  "笑氣",
  "乙醚",
  "氧氣",
  "氮氣",
  "義氣",
  "使命",
  "隔閡",
  "竊聽器",
  "草履蟲",
  "音癡",
  "送行",
  "變態",
  "蛋糕",
  "中國結",
  "童軍繩",
  "放大鏡",
  "雷射",
  "槍戰",
  "雷達",
  "衛冕",
  "拓荒者",
  "勇士",
  "菊石",
  "同位素",
  "蕨類",
  "珊瑚",
  "裸子",
  "三葉蟲",
  "蜻蜓",
  "海獺",
  "海星",
  "懸念",
  "牽掛",
  "掠食者",
  "海藻",
  "滅絕",
  "康熙",
  "失眠",
  "中毒",
  "過濾",
  "分泌",
  "晨曦",
  "結晶",
  "疤痕",
  "虱目魚",
  "吳郭魚",
  "龜山島",
  "琉球",
  "釣魚",
  "蘭嶼",
  "綠島",
  "烏龍",
  "包子",
  "粒線體",
  "葉綠體",
  "細胞",
  "原子",
  "園林",
  "飛魚",
  "魚翅",
  "棍",
  "主機板",
  "火車",
  "普悠瑪",
  "電聯車",
  "太魯閣",
  "陽明山",
  "勒索",
  "恐嚇",
  "詐欺",
  "通姦",
  "編輯",
  "存取",
  "期貨",
  "類固醇",
  "刺客",
  "刺繡",
  "備審資料",
  "備胎",
  "備註",
  "企業",
  "企畫書",
  "祭祀",
  "課綱",
  "課金",
  "暱稱",
  "目擊者",
  "募資",
  "目錄",
  "墓誌銘",
  "幕僚",
  "鹿港",
  "欲擒故縱",
  "欲拒還迎",
  "餘裕",
  "鶴",
  "皮蛋",
  "琵琶",
  "貿易",
  "順差",
  "牡丹",
  "牡羊",
  "天蠍",
  "獅子",
  "處女",
  "觸鬚",
  "牡犡",
  "默契",
  "泡沫",
  "漆彈",
  "棲息",
  "鍬形蟲",
  "麵包蟲",
  "甲狀腺",
  "電解質",
  "攝護腺",
  "變異數",
  "指數",
  "胺基酸",
  "腓腸肌",
  "匪諜",
  "潟湖",
  "徽章",
  "薰衣草",
  "特偵組",
  "特斯拉",
  "精油",
  "機器學習",
  "風水",
  "跑步機",
  "重訓",
  "耳機",
  "太空",
  "草莓",
  "武漢",
  "移植",
  "導盲犬",
  "迪士尼",
  "柯南",
  "板橋",
  "夜市",
  "渠道",
  "菜鳥",
  "序曲",
  "協奏曲",
  "共鳴",
  "音叉",
  "桌球",
  "足球",
  "高爾夫",
  "排球",
  "撞球",
  "開心果",
  "腰果",
  "春聯",
  "艾草",
  "鞭炮",
  "爆竹",
  "煙火",
  "世貿",
  "野柳",
  "潛艇",
  "航空母艦",
  "調性",
  "節奏",
  "蓮花",
  "菊花",
  "輻射",
  "地基",
  "纜車",
  "辛巴威",
  "長頸鹿",
  "袋鼠",
  "玳瑁",
  "甲骨文",
  "小鼓",
  "鈴鼓",
  "木琴",
  "鐵琴",
  "定音鼓",
  "管鐘",
  "雙簧管",
  "伴奏",
  "菜瓜布",
  "宮崎駿",
  "國會",
  "閣揆",
  "內閣",
  "憲兵",
  "總理",
  "首相",
  "摩斯",
  "密碼",
  "帳號",
  "網址",
  "阻尼器",
  "瓣膜",
  "外甥",
  "癡漢",
  "畜牲",
  "禽獸",
  "神奇寶貝",
  "比薩斜塔",
  "杜拜",
  "保險",
  "口風",
  "迴紋針",
  "立委",
  "參謀總長",
  "國防部",
  "外交部",
  "衛福部",
  "首腦",
  "首級",
  "素養",
  "倫理",
  "孝",
  "請安",
  "網購",
  "杏仁",
  "核桃",
  "傳記",
  "散文",
  "唐詩",
  "宋詞",
  "元曲",
  "東漢",
  "曹操",
  "墨鏡",
  "安全帽",
  "小七",
  "全聯",
  "全家",
  "頂好",
  "佛洛伊德",
  "平民",
  "天子",
  "庶民",
  "陶冶",
  "試驗",
  "滴定",
  "酒鬼",
  "搗蛋鬼",
  "預言家",
  "爪牙",
  "守夜者",
  "強盜",
  "節操",
  "新加坡",
  "餐具",
  "兇手",
  "嫌犯",
  "車手",
  "一丘之貉",
  "離合器",
  "指考",
  "路燈",
  "雪橇",
  "磁磚",
  "時尚",
  "望春風",
  "四季",
  "啤酒",
  "藍領階級",
  "公務員",
  "領教",
  "醬油",
  "秋葵",
  "李斯特",
  "蕭邦",
  "多瑙河",
  "訴訟",
  "訴願",
  "子宮",
  "爆米花",
  "泉",
  "跳傘",
  "懶骨頭",
  "滑翔",
  "空轉",
  "燈籠",
  "尿遁",
  "王品",
  "嘻哈",
  "饒舌",
  "彈舌",
  "搶孤",
  "疊羅漢",
  "康乃馨",
  "普渡",
  "粽子",
  "月餅",
  "柚子",
  "米粉",
  "蔥油餅",
  "薑絲",
  "菱角",
  "百香果",
  "仙草",
  "拿鐵",
  "卡布奇諾",
  "香草",
  "肉桂",
  "紅棗",
  "蜂蜜",
  "鞋墊",
  "真空",
  "印章",
  "紀念品",
  "地毯",
  "繃帶",
  "棉花棒",
  "碘酒",
  "雙氧水",
  "膠帶",
  "油漆",
  "引擎",
  "刨冰",
  "黑糖",
  "芋圓",
  "刮鬍泡",
  "漁網",
  "石滬",
  "電鋸",
  "果汁機",
  "砝碼",
  "籌碼",
  "梳子",
  "彈珠",
  "普拿疼",
  "阿斯匹靈",
  "核彈",
  "氫",
  "鈣",
  "鈉",
  "鉀",
  "鋁",
  "鈦",
  "口罩",
  "統一",
  "光纖",
  "網路",
  "香水",
  "煤炭",
  "陶淵明",
  "紗布",
  "沙拉脫",
  "消毒",
  "聚合物",
  "小蘇打",
  "保鮮膜",
  "免洗筷",
  "吸盤",
  "章魚",
  "海綿",
  "帝王蟹",
  "龍蝦",
  "生魚片",
  "海蝕洞",
  "棒球",
  "對聯",
  "絕句",
  "律詩",
  "小篆",
  "平假名",
  "元宵",
  "彈劾",
  "核銷",
  "政變",
  "荊棘",
  "罩門",
  "片假名",
  "視窗",
  "誠品",
  "八方雲集",
  "護城河",
  "罷免",
  "痘",
  "靜脈竇",
  "血清",
  "離心",
  "雞胇",
  "牛蛙",
  "蟾蜍",
  "抗體",
  "陀螺",
  "燈塔",
  "沙雕",
  "空壓機",
  "空拍機",
  "偵查",
  "批發",
  "草莓族",
  "議會",
  "參議院",
  "教官",
  "國軍",
  "貸款",
  "金融",
  "池塘",
  "壓克力",
  "貓頭鷹",
  "拼盤",
  "吳哥窟",
  "萬里長城",
  "巴西",
  "紫禁城",
  "紅檜",
  "翻筋斗",
  "翹翹板",
  "酒吧",
  "酒駕",
  "酪梨",
  "簡報",
  "投影",
  "對稱",
  "焦距",
  "瓦斯",
  "潮流",
  "橋牌",
  "麻將",
  "仙女棒",
  "週期表",
  "溶解",
  "沉澱",
  "萃取",
  "暈車",
  "腹瀉",
  "嘔吐",
  "肝炎",
  "業配",
  "旁白",
  "快門",
  "主任",
  "書記",
  "助理",
  "畚箕",
  "立法院",
  "收納",
  "眼影",
  "魚尾紋",
  "香港",
  "反送中",
  "跑酷",
  "格鬥",
  "蜘蛛人",
  "浴巾",
  "手帕",
  "隱形",
  "瘖啞",
  "日月潭",
  "韓國",
  "分機",
  "學餐",
  "曝光",
  "蒲公英",
  "鯛魚",
  "紅豆餅",
  "茶餐廳",
  "概論",
  "麻糬",
  "馬桶",
  "茅廁",
  "玉米",
  "米腸",
  "臭豆腐",
  "烏魚子",
  "盎司",
  "露天",
  "露營",
  "敞篷車",
  "圓周率",
  "利率",
  "麻疹",
  "匯率",
  "外匯",
  "芝加哥",
  "倫敦",
  "基金",
  "鮑魚",
  "干貝",
  "薏仁",
  "麥片",
  "洋芋片",
  "地瓜球",
  "燕麥",
  "愛玉",
  "出軌",
  "群組",
  "私訊",
  "占卜",
  "西裝",
  "皮帶",
  "領帶",
  "皮鞋",
  "鞋油",
  "禁令",
  "禁忌",
  "晉級",
  "古早味",
  "鍋燒意麵",
  "鼎",
  "測速照相",
  "日晷",
  "刑具",
  "一帶一路",
  "壽星",
  "受洗",
  "字體",
  "微軟",
  "南京",
  "愛迪達",
  "潰瘍",
  "停車場",
  "夾娃娃機",
  "匝道",
  "交流道",
  "國道",
  "省道",
  "雪山",
  "鐵道",
  "地下鐵",
  "車廂",
  "車站",
  "羽絨",
  "財神",
  "月老",
  "土地公",
  "關公",
  "哺乳",
  "齧齒",
  "爬蟲",
  "兩棲",
  "促銷",
  "跳樓",
  "洋蔥",
  "花椰菜",
  "優酪乳",
  "味精",
  "味蕾",
  "奶精",
  "茄子",
  "蔥",
  "蒜",
  "壽喜燒",
  "火鍋",
  "卡式爐",
  "甲烷",
  "尼龍",
  "普洱茶",
  "芹菜",
  "紅蘿蔔",
  "牛蒡",
  "杏鮑菇",
  "青椒",
  "花枝",
  "魷魚",
  "小卷",
  "豬血糕",
  "海參",
  "石斑",
  "沙朗",
  "菲力",
  "肋眼",
  "窯烤",
  "涮涮鍋",
  "焗烤",
  "醃漬",
  "發酵",
  "酵母菌",
  "砧板",
  "石鍋拌飯",
  "部隊鍋",
  "年糕",
  "泡菜",
  "鹿茸",
  "烏骨雞",
  "人參",
  "龜苓膏",
  "枸杞",
  "當歸",
  "山藥",
  "鎮定",
  "過動",
  "亞斯伯格",
  "押韻",
  "罐頭",
  "芬多精",
  "肉乾",
  "肉羹",
  "碼頭",
  "八寶粥",
  "雲吞",
  "餛飩",
  "抄手",
  "蕎麥麵",
  "糙米",
  "什錦",
  "煉乳",
  "蔓越莓",
  "華佗",
  "代謝",
  "麻花捲",
  "山葵",
  "煎餅",
  "提拉米蘇",
  "千層派",
  "可樂果",
  "楓糖",
  "烘焙",
  "麻油",
  "釋迦",
  "榴槤",
  "柿子",
  "公式",
  "魚酥",
  "蝦仁",
  "蠶豆",
  "竹炭",
  "芥末",
  "蒜蓉",
  "金莎",
  "沖繩",
  "樂事",
  "模範生",
  "市長獎",
  "牛腩",
  "匈牙利",
  "泡麵",
  "奧斯卡獎",
  "馬鈴薯",
  "昆布",
  "銀絲卷",
  "機關",
  "基改",
  "露珠",
  "霧",
  "雨刷",
  "方向燈",
  "松露",
  "柴魚",
  "鬆餅",
  "西米露",
  "太白粉",
  "麵粉",
  "勾芡",
  "棕櫚油",
  "塑化劑",
  "長庚",
  "北醫",
  "臺大",
  "代言",
  "杯葛",
  "海關",
  "入境",
  "軌道",
  "雲霄飛車",
  "番薯",
  "鋁箔包",
  "爵位",
  "壓力鍋",
  "布鞋",
  "手槍",
  "財團法人",
  "大麻",
  "南方公園",
  "帳單",
  "條碼",
  "信用卡",
  "喉結",
  "闌尾",
  "會員",
  "化妝室",
  "支架",
  "荒野",
  "光合作用",
  "酮體",
  "蘆筍",
  "文創",
  "蘚苔",
  "護目鏡",
  "護膝",
  "羅生門",
  "象牙塔",
  "布朗尼",
  "檸檬塔",
  "車牌",
  "盾牌",
  "計程車",
  "繼承",
  "公車",
  "司機",
  "站牌",
  "急診室",
  "證券",
  "債券",
  "公債",
  "跑馬燈",
  "匕首",
  "卡比獸",
  "寶可夢",
  "光年",
  "世紀",
  "奧運",
  "耶穌",
  "聖經",
  "論語",
  "孟子",
  "禮記",
  "春秋",
  "中庸",
  "戰國",
  "阿茲海默",
  "隱私",
  "演算法",
  "遜咖",
  "紀念冊",
  "成語",
  "俚語",
  "成發",
  "檢定",
  "鑑定",
  "簧片",
  "襯衫",
  "關稅",
  "進口",
  "旗艦",
  "物流",
  "海南雞",
  "模型",
  "牛頓",
  "伽利略",
  "主教",
  "託運",
  "行動電源",
  "鮪魚",
  "生肖",
  "星座",
  "駭客",
  "論文",
  "吸血鬼",
  "蛤蜊",
  "維基",
  "股票",
  "健身",
  "全壘打",
  "基金會",
  "農夫",
  "礦工",
  "漁夫",
  "屁孩",
  "中二",
  "武術",
  "氣功"
];
