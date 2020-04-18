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
  "氣功",
  "上司",
  "正義",
  "灌溉",
  "榮譽",
  "副作用",
  "模特兒",
  "休旅車",
  "青年旅館",
  "酒店",
  "蛀牙",
  "牙周病",
  "糖尿病",
  "氣喘",
  "感染",
  "水痘",
  "色紙",
  "珍珠板",
  "殲滅",
  "灰燼",
  "金紙",
  "瑪利歐",
  "偶像",
  "海報",
  "觸控",
  "聲控",
  "交易",
  "奸商",
  "碎紙機",
  "發燒",
  "流感",
  "委員會",
  "佣金",
  "手續費",
  "委託",
  "報酬",
  "代價",
  "仲介",
  "循環",
  "蚊香",
  "優格",
  "螯",
  "鉗子",
  "春捲",
  "獅子頭",
  "三溫暖",
  "舒跑",
  "雪茄",
  "丘陵",
  "希特勒",
  "福袋",
  "燒賣",
  "郵筒",
  "猶太",
  "郵票",
  "橋梁",
  "阻力",
  "波妞",
  "波霸奶茶",
  "潔癖",
  "寄居蟹",
  "諾亞方舟",
  "麵疙瘩",
  "布丁",
  "蒟蒻",
  "京戲",
  "布袋戲",
  "八點檔",
  "韓劇",
  "後裔",
  "后羿",
  "舒酸定",
  "海苔",
  "粉絲",
  "粉條",
  "糞",
  "海膽",
  "吊帶褲",
  "絲襪",
  "網美",
  "顧問",
  "介面",
  "家聚",
  "社辦",
  "家俱",
  "廣告",
  "講稿",
  "颱風",
  "哄抬",
  "建設",
  "碼錶",
  "版本",
  "診斷",
  "硬碟",
  "軟體",
  "記憶體",
  "虹膜",
  "角膜",
  "汞",
  "節目",
  "睫毛",
  "肋骨",
  "鼓棒",
  "牙籤",
  "劍",
  "收音機",
  "糖葫蘆",
  "指南針",
  "鈴鐺",
  "新聞",
  "報紙",
  "心經",
  "獎盃",
  "通靈",
  "通關密語",
  "最後通牒",
  "水塔",
  "水庫",
  "翡翠",
  "璞玉",
  "頭條",
  "展覽館",
  "檳榔",
  "部落",
  "貴族",
  "殖民",
  "焦點",
  "電報",
  "消波塊",
  "堤防",
  "頭獎",
  "靈骨塔",
  "殯葬業",
  "護身符",
  "棺材",
  "乩童",
  "附身",
  "八卦",
  "曆法",
  "五行",
  "大理石",
  "騷包",
  "紙鶴",
  "尼泊爾",
  "福馬林",
  "甲醛",
  "復古",
  "昇華",
  "業績",
  "黑道",
  "開箱",
  "母語",
  "首領",
  "皇宮",
  "元首",
  "小熊維尼",
  "共和",
  "外送",
  "光復",
  "微波爐",
  "電鍋",
  "雜誌",
  "周刊",
  "勘誤",
  "酸蝕",
  "保險箱",
  "存錢筒",
  "藥水",
  "螺帽",
  "駕崩",
  "登基",
  "朝廷",
  "後宮",
  "宰相",
  "武士",
  "宦官",
  "杜甫",
  "李白",
  "徒弟",
  "姻親",
  "弔唁",
  "傳真",
  "快遞",
  "掛號",
  "郵遞區號",
  "蒸汽機",
  "衰變",
  "歐盟",
  "放射",
  "溫室",
  "文獻",
  "部落格",
  "計算機",
  "數位",
  "液晶",
  "電漿",
  "溯溪",
  "鰓",
  "聯邦",
  "渦輪",
  "時差",
  "頭等艙",
  "音速",
  "經濟艙",
  "狒狒",
  "高鐵",
  "高雄",
  "公司",
  "吊橋",
  "吊床",
  "單槓",
  "田徑",
  "體操",
  "賽馬",
  "博弈",
  "跳馬",
  "標靶",
  "橡皮擦",
  "乳膠",
  "佩佩豬",
  "哈利波特",
  "噴嚏",
  "奶嘴",
  "樂章",
  "音符",
  "大調",
  "活塞",
  "火腿",
  "培根",
  "系統",
  "系列",
  "電動車",
  "閏年",
  "比特幣",
  "法拉利",
  "薑母鴨",
  "羊肉爐",
  "穿山甲",
  "石虎",
  "水獺",
  "羌",
  "梅花鹿",
  "蟋蟀",
  "螳螂",
  "竹節蟲",
  "天竺鼠",
  "浣熊",
  "河馬",
  "鴕鳥",
  "犀牛",
  "鴛鴦",
  "條例",
  "儀表板",
  "里程",
  "安全氣囊",
  "愛買",
  "三星",
  "麥當勞",
  "肯德基",
  "星巴克",
  "卡農",
  "高露潔",
  "海尼根",
  "日立",
  "體面",
  "光年之外",
  "倒數",
  "告白",
  "演員",
  "漂向北方",
  "周杰倫",
  "候選人",
  "科舉",
  "圓規",
  "三角板",
  "藍芽",
  "截圖",
  "基地台",
  "行動數據",
  "省電",
  "溫度計",
  "大滿貫",
  "犯規",
  "種子",
  "聲明",
  "時髦",
  "行政院",
  "司法院",
  "監察院",
  "閣樓",
  "地下室",
  "任務",
  "豬瘟",
  "國旗",
  "國歌",
  "舉重",
  "拔河",
  "水墨",
  "傀儡",
  "沙龍",
  "古蹟",
  "安平",
  "遺址",
  "考古",
  "出版",
  "廣播",
  "行銷",
  "輔導",
  "針灸",
  "把脈",
  "拔罐",
  "刮痧",
  "論壇",
  "蒙古",
  "澎湖",
  "金門",
  "馬祖",
  "邦交",
  "國民年金",
  "遺囑",
  "遺產",
  "學雜費",
  "災區",
  "災難",
  "賑災",
  "屍骨",
  "施主",
  "化緣",
  "糧食",
  "永續",
  "週期",
  "國庫",
  "工會",
  "序幕",
  "畜牧",
  "鳳梨",
  "荔枝",
  "芒果",
  "西瓜",
  "甘蔗",
  "甜菜",
  "茼蒿",
  "萵苣",
  "木瓜",
  "柳丁",
  "鴨賞",
  "焦糖",
  "意麵",
  "家常菜",
  "合唱",
  "蝦味先",
  "涼鞋",
  "高跟鞋",
  "耳環",
  "口紅",
  "手銬",
  "馬尾",
  "道館",
  "導管",
  "色違",
  "進化",
  "癲癇",
  "腦波",
  "屠夫",
  "捷徑",
  "木馬",
  "木乃伊",
  "迴力鏢",
  "紐約",
  "舊金山",
  "溫帶",
  "季風",
  "寒流",
  "冷氣團",
  "工作坊",
  "道地",
  "墨西哥",
  "西班牙",
  "義大利",
  "智利",
  "群島",
  "霍金",
  "加勒比海",
  "里約",
  "奧林匹克",
  "奧林匹亞",
  "菁英",
  "川普",
  "歐巴馬",
  "名古屋",
  "札幌",
  "北海道",
  "首爾",
  "平壤",
  "整形",
  "內視鏡",
  "滅菌",
  "山東",
  "冰島",
  "以色列",
  "肯亞",
  "鴻海",
  "紅海",
  "台積電",
  "郭台銘",
  "太鼓達人",
  "福利社",
  "學務處",
  "螃蟹",
  "蝦子",
  "海鮮",
  "烏賊",
  "豆干",
  "海帶",
  "荷包蛋",
  "瘦肉精",
  "餡",
  "蒸餃",
  "聾",
  "脫臼",
  "骨折",
  "卵巢",
  "樟腦丸",
  "酸菜",
  "燴飯",
  "海洛因",
  "約會",
  "涼亭",
  "車庫",
  "騎樓",
  "花雕雞",
  "肉醬",
  "劍橋",
  "哈佛",
  "僕人",
  "浮萍",
  "紅樓夢",
  "三國演義",
  "水滸傳",
  "山海經",
  "金瓶梅",
  "聊齋誌異",
  "驚悚片",
  "迷思",
  "神隱少女",
  "風之谷",
  "天空之城",
  "卷軸",
  "廚師",
  "濾泡",
  "水母",
  "眼鏡",
  "近視",
  "狀元",
  "榜眼",
  "探花",
  "儒林",
  "成大",
  "建中",
  "北一女",
  "中山",
  "楔形文字",
  "退學",
  "註冊",
  "登入",
  "過期",
  "霉",
  "灌木",
  "木本",
  "草本",
  "蘇格蘭",
  "脫歐",
  "東南亞",
  "遠東",
  "街友",
  "流浪",
  "亞運",
  "比爾蓋茲",
  "子嗣",
  "回饋",
  "獨木舟",
  "徐志摩",
  "魔鬼氈",
  "日光燈",
  "愛迪生",
  "童話",
  "終端機",
  "保溫杯",
  "手搖飲料",
  "五十嵐",
  "迷克夏",
  "清心福全",
  "康青龍",
  "可不可",
  "珍煮丹",
  "味全",
  "黑松",
  "愛之味",
  "大西洋",
  "朝鮮",
  "微笑單車",
  "喜餅",
  "辦桌",
  "檢舉",
  "健保卡",
  "超速",
  "罰單",
  "插銷",
  "手榴彈",
  "拘役",
  "拘留",
  "地政士",
  "蠟筆小新",
  "華碩",
  "宏碁",
  "牙刷",
  "牙材",
  "牙間刷",
  "生化",
  "牙概",
  "藥理",
  "生理",
  "反轉錄",
  "轉譯",
  "大胃王",
  "醋",
  "胡椒",
  "蘑菇",
  "大蒜",
  "波蜜",
  "美粒果",
  "筆芯",
  "人工智慧",
  "智商",
  "抽象",
  "贋復",
  "彩蛋",
  "屈臣氏",
  "康是美",
  "眼罩",
  "針眼",
  "開學",
  "暑假",
  "寒假",
  "留學",
  "遊學",
  "轉學",
  "萬聖節",
  "聖誕節",
  "復活節",
  "端午節",
  "中秋節",
  "春假",
  "愚人節",
  "紀念日",
  "吐司",
  "葡萄糖",
  "蔗糖",
  "果糖",
  "麥芽糖",
  "乳糖",
  "半乳糖",
  "澱粉",
  "雙糖",
  "碘液",
  "葡萄乾",
  "金棗",
  "黑棗",
  "加州",
  "培養基",
  "青蛙",
  "洋菜",
  "寒天",
  "燕窩",
  "木耳",
  "白木耳",
  "藻膠",
  "石花菜",
  "果凍",
  "調味料",
  "迷迭香",
  "衝浪",
  "海灘",
  "貝殼",
  "藍眼淚",
  "眼屎",
  "鼻屎",
  "耳屎",
  "頭皮屑",
  "肉屑",
  "眼球",
  "半規管",
  "耳蝸",
  "聽小骨",
  "鼓膜",
  "大腦鐮",
  "硬腦膜",
  "蜘蛛膜",
  "中風",
  "偏頭痛",
  "直播",
  "擲筊",
  "信仰",
  "基督教",
  "天主教",
  "伊斯蘭教",
  "佛教",
  "同胞",
  "澳網",
  "法網",
  "美網",
  "溫網",
  "英吉利海峽",
  "歐洲之星",
  "奇葩",
  "蘋果日報",
  "央視",
  "紅十字",
  "土耳其",
  "史瓦帝尼",
  "雪碧",
  "芬達",
  "氣泡水",
  "氣球",
  "熱氣球",
  "諷刺",
  "搞笑",
  "養老院",
  "太平間",
  "飛彈",
  "調查局",
  "法務部",
  "首頁",
  "馬路",
  "高架道路",
  "深圳",
  "宜蘭",
  "花蓮",
  "台東",
  "地鐵",
  "辛亥革命",
  "宣統",
  "光緒",
  "華僑",
  "上海",
  "廣東",
  "新疆",
  "長榮",
  "華航",
  "袁世凱",
  "錦衣衛",
  "魏忠賢",
  "編年體",
  "紀傳體",
  "史記",
  "項羽",
  "背黑鍋",
  "炒魷魚",
  "熱門",
  "小氣鬼",
  "投石機",
  "弱視",
  "散光",
  "擋箭牌",
  "通識課",
  "暑修",
  "墊板",
  "電路板",
  "馬達",
  "廢物",
  "除濕機",
  "脫水",
  "銀寶善存",
  "安全帶",
  "頭盔",
  "箭靶",
  "成人",
  "銀髮族",
  "比目魚",
  "自營",
  "異營",
  "脈搏",
  "休克",
  "痙攣",
  "訊號",
  "粉底",
  "真皮層",
  "情人節",
  "元旦",
  "湯圓",
  "湯匙",
  "筷子",
  "音準",
  "絕對音感",
  "馬林巴",
  "切球",
  "安全島",
  "檯燈",
  "閃光燈",
  "鎂光燈",
  "絕食",
  "抗議",
  "革命",
  "台大",
  "天龍國",
  "危機",
  "泰迪熊",
  "斑馬",
  "斑馬線",
  "車道",
  "車窗",
  "必修",
  "腦死",
  "衰竭",
  "肺泡",
  "絲球體",
  "化療",
  "電擊",
  "湖北",
  "阿拉斯加",
  "北極",
  "地磁",
  "眉毛",
  "人中",
  "鬢角",
  "瀏海",
  "髮箍",
  "髮夾",
  "乳液",
  "潤髮乳",
  "酸民",
  "網友",
  "網軍",
  "沙漏",
  "門鈴",
  "紗窗",
  "百葉窗",
  "百褶裙",
  "千層蛋糕",
  "藥膳",
  "王子麵",
  "金針菇",
  "木質部",
  "韌皮部",
  "高麗菜",
  "鑫鑫腸",
  "冬粉",
  "面膜",
  "沙包",
  "湯底",
  "水晶餃",
  "冷藏",
  "豆皮",
  "蛋餃",
  "肩胛骨",
  "橫紋肌",
  "骨骼肌",
  "保護膜",
  "報銷",
  "報廢",
  "束圈",
  "垃圾桶",
  "金魚",
  "腋毛",
  "當鋪",
  "複製",
  "貼上",
  "共筆",
  "跳棋",
  "五子棋",
  "元帥",
  "皇后",
  "堡壘",
  "要塞",
  "邊疆",
  "攻略",
  "濾網",
  "桑葚",
  "視奏",
  "五線譜",
  "踏板",
  "琴鍵",
  "速度",
  "大氣",
  "土木",
  "牙醫",
  "根管",
  "牙釉質",
  "琺瑯質",
  "象牙質",
  "鑷子",
  "慈濟",
  "耳塞",
  "隱形眼鏡",
  "暫停",
  "卡拉OK",
  "西門町",
  "斗篷",
  "水銀",
  "網站",
  "伺服器",
  "爵士鼓",
  "木魚",
  "指揮棒",
  "迷信",
  "迷因",
  "工廠",
  "教練",
  "手環",
  "鎖鏈",
  "逮捕",
  "公民",
  "歷史",
  "地理",
  "生物",
  "地科",
  "國文",
  "英文",
  "數學",
  "矩陣",
  "矩形",
  "向量",
  "點陣圖",
  "像素",
  "索引",
  "畫質",
  "三原色",
  "印表機",
  "印泥",
  "文具",
  "美術",
  "家政",
  "音樂",
  "磅",
  "磅秤",
  "度量衡",
  "容量",
  "重量",
  "質量",
  "單位",
  "公斤",
  "台斤",
  "公分",
  "公尺",
  "公里",
  "英吋",
  "英里",
  "毫米",
  "英尺",
  "設定",
  "弓箭",
  "江湖",
  "神魔",
  "笑傲江湖",
  "狙擊",
  "散彈槍",
  "農場",
  "牧場",
  "莊園",
  "沼澤",
  "流沙",
  "電競",
  "狩獵",
  "藍鯨",
  "擱淺",
  "原住民",
  "外省人",
  "咖啡廳",
  "學院",
  "馬來西亞",
  "天安門",
  "獅子王",
  "冰雪奇緣",
  "傻瓜",
  "小丑",
  "天龍八部",
  "單身",
  "初戀",
  "焚風",
  "台地",
  "盆地",
  "泥火山",
  "梅雨",
  "對流",
  "鋒面",
  "封面",
  "氣壓",
  "水災",
  "土石流",
  "山崩",
  "黃河",
  "長江",
  "珠江",
  "三角洲",
  "黑龍江",
  "西藏",
  "自治區",
  "海南島",
  "濁水溪",
  "蘇花公路",
  "雪隧",
  "氣溫",
  "連結",
  "午夜",
  "凌晨",
  "鈔票",
  "零錢",
  "瀉藥",
  "問號",
  "逗號",
  "驚嘆號",
  "句號",
  "傻眼",
  "白眼",
  "質數",
  "餘數",
  "正弦",
  "直角",
  "死角",
  "靜電",
  "半導體",
  "晶片",
  "宿醉",
  "消費者",
  "裁縫",
  "五星級",
  "飯店",
  "莎士比亞",
  "悲劇",
  "私立",
  "公立",
  "機構",
  "嗎啡",
  "切分音",
  "火影忍者",
  "鳴人",
  "幽靈",
  "魔仗",
  "貼圖",
  "貼紙",
  "龍鳳胎",
  "值日生",
  "北極熊",
  "巫婆",
  "網襪",
  "緊身褲",
  "僧侶",
  "教室",
  "教會",
  "套房",
  "天然氣",
  "太陽系",
  "人造衛星",
  "黃道十二宮",
  "大氣層",
  "對流層",
  "平流層",
  "黑洞",
  "蟲洞",
  "流星雨",
  "單眼相機",
  "光圈",
  "感光度",
  "波長",
  "電磁波",
  "銀河系",
  "珍珠港事變",
  "原子彈",
  "世界大戰",
  "軸心國",
  "同盟國",
  "波蘭",
  "帝國",
  "太平洋高壓",
  "閃電",
  "直流電",
  "交流電",
  "電椅",
  "氰化物",
  "槍斃",
  "凌遲",
  "車裂",
  "商鞅",
  "王羲之",
  "書法",
  "朝代",
  "臣妾",
  "午後雷陣雨",
  "洩洪",
  "莫拉克",
  "九二一",
  "洋流",
  "熱帶氣旋",
  "東北季風",
  "公轉",
  "萬有引力",
  "彗星",
  "哈雷",
  "凶兆",
  "胸罩",
  "塔羅牌",
  "美索不達米亞",
  "兩河流域",
  "冰雹",
  "雪花",
  "克卜勒",
  "行星",
  "學說",
  "定律",
  "假說",
  "大霹靂",
  "北斗七星",
  "印刷",
  "彩虹",
  "同志",
  "積雨雲",
  "晚霞",
  "肺結核",
  "妊娠紋",
  "酒窩",
  "撐竿跳",
  "水球",
  "滑板",
  "溜冰",
  "韻律",
  "甩尾",
  "跳遠",
  "躲避球",
  "壘球",
  "太極",
  "詠春",
  "葉問",
  "楊過",
  "小龍女",
  "蛙式",
  "游泳",
  "自由式",
  "蝶式",
  "仰式",
  "水母漂",
  "密度",
  "天線",
  "導電",
  "絕緣",
  "電阻",
  "電壓",
  "電流",
  "歐姆定律",
  "正比",
  "反比",
  "常數",
  "座標",
  "象限",
  "順時針",
  "大老二",
  "搖桿",
  "亂碼",
  "嬸嬸",
  "叔叔",
  "阿姨",
  "伯父",
  "稱謂",
  "姑姑",
  "舅舅",
  "透天厝",
  "鐵塔",
  "明信片",
  "海綿寶寶",
  "行人",
  "點滴",
  "痰",
  "貧血",
  "菸灰缸",
  "河童",
  "虎姑婆", //
  "心肌梗塞",
  "紳士",
  "刮刮樂",
  "生態",
  "炭疽",
  "鏈球菌",
  "梅毒",
  "鶯歌",
  "三峽",
  "聲門",
  "齒槽骨",
  "乳糜",
  "新店",
  "時區",
  "海底撈",
  "永和豆漿",
  "奧客",
  "亞歷山大",
  "遠傳",
  "中國信託",
  "業務",
  "任天堂",
  "試衣間",
  "福特",
  "福爾摩沙",
  "佛地魔",
  "蠶豆症",
  "唐氏症",
  "侏儒",
  "狼人殺",
  "阿瓦隆",
  "水星",
  "金星",
  "海王星",
  "天王星",
  "左傳",
  "戰國策",
  "拜占庭",
  "滑鐵盧",
  "伊斯坦堡",
  "四庫全書",
  "世說新語",
  "呂氏春秋",
  "西遊記",
  "通訊",
  "納粹",
  "屠殺",
  "耶路撒冷",
  "幻燈片",
  "象山",
  "信義",
  "皇帝殿",
  "械鬥",
  "羅漢腳",
  "七星潭",
  "法拍",
  "法警",
  "監理所",
  "決明子",
  "神農氏",
  "傷寒",
  "文革",
  "無薪假",
  "毛澤東",
  "鄧小平",
  "習近平",
  "肄業",
  "中輟生",
  "痞客邦",
  "師傅",
  "學徒",
  "福爾摩斯",
  "心臟病",
  "美宣",
  "公關",
  "文宣",
  "葷食",
  "羅東",
  "南宋",
  "元朝",
  "文字獄",
  "縣道",
  "眼藥水",
  "青光眼",
  "拮抗劑",
  "落款",
  "柯林頓",
  "哥倫布",
  "華盛頓",
  "必勝客",
  "拿坡里",
  "印地安",
  "標準差",
  "巴拿馬",
  "好望角",
  "鐵達尼號",
  "風聲",
  "古琴",
  "溥儀",
  "乾隆",
  "施琅",
  "汞齊",
  "合金",
  "草嶺古道",
  "攀岩",
  "首席",
  "勞保",
  "鐵皮屋",
  "海砂屋",
  "三貂角",
  "貂蟬",
  "碉堡",
  "刁民",
  "二郎腿",
  "時刻表",
  "瑜珈",
  "沼氣",
  "裱框",
  "金牛角",
  "護法",
  "學運",
  "太陽花",
  "向日葵",
  "刺蝟",
  "臭鼬",
  "西施",
  "稀釋",
  "蒸散",
  "聚合酶",
  "解旋酶",
  "犛牛",
  "糌粑",
  "酥油茶",
  "青稞",
  "薩利亞",
  "三讀",
  "朝野協商",
  "在野黨",
  "眾議院",
  "酬勞",
  "規費",
  "羈押",
  "看守所",
  "派出所",
  "證據",
  "抓周",
  "頭香",
  "頭七",
  "骨灰罈",
  "火化",
  "圓寂",
  "眼袋",
  "臥蠶",
  "滴管",
  "鑄造",
  "白內障",
  "飛蚊症",
  "緋聞",
  "中天",
  "公視",
  "月經",
  "長尾夾",
];
