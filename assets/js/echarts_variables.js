  var app = {};
  var option;
  var posList = ['left', 'right', 'top', 'bottom',
    'inside', 'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
  ];

  var city = ['基隆市', '台北市', '新北市', '桃園縣',
    '新竹市', '新竹縣', '苗栗縣', '台中市',
    '彰化縣', '南投縣', '雲林縣', '嘉義市',
    '嘉義縣', '台南市', '高雄市', '屏東縣',
    '台東縣', '花蓮縣', '宜蘭縣', '澎湖縣',
    '金門縣', '連江縣'
  ];

  var salary = ['25,250', '26,400', '27,600', '28,800', '30,300',
    '31,800', '33,300', '34,800', '36,300', '38,200',
    '40,200', '42,000', '43,900', '45,800'
  ];
  var salarys = [25250, 26400, 27600, 28800, 30300, 31800, 33300, 34800, 36300, 38200, 40200, 42000, 43900, 45800];
  
  var plans = ['委外職前訓練計畫', '高齡者專班(委辦)',
    '陽光專案訓練計畫(委外)', '新住民專班', '原住民專班訓練',
    '推動原住民團體辦理原住民地區失業者職業訓練',
    '推動事業單位辦理職前培訓計畫(訓用合一)', '高齡者專班(補助)',
    '補助地方政府辦理失業者職前訓練', '補助地方政府辦理照顧服務員專班訓練計畫',
    '照顧服務員自訓自用訓練計畫', '補助辦理托育人員職業訓練',
    '區域產業據點職業訓練計畫(委外)'
  ];


  var plan1 = ['產業人才投資方案', '提升勞工自主學習計畫', '區域產業據點職業訓練計畫',
    '企業人力資源提升計畫', '小型企業人力提升計畫', '充電起飛計畫-協助事業單位辦理在職訓練'
  ];

  var plan2 = ['補助大專校院辦理就業學程計畫', '雙軌訓練旗艦計畫',
    '產學訓合作訓練', '青年就業旗艦計畫',
    '青年專班訓練', '產業新尖兵試辦計畫'
  ];

  var branch = ['北分署', '桃分署', '中分署', '南分署', '高分署'];

  var course = ['共通核心職能課程【3C】', '管理課程', '國際溝通能力課程',
    '運用數位能力課程', '研發創新能力課程', '專業技術課程'
  ];

  var course1 = ['共通核心職能課程【3C】', '管理課程', '國際溝通能力課程',
    '運用數位能力課程', '研發創新能力課程', '專業技術課程'
  ];
var course2 = ['生活職場英文班','生活職場韓文班',
'民俗調理業傳統整復推拿技術員職能課程班','人工智慧機器學習與深度學習實作應用班',
'雲端Docker容器技術班','AWS 雲端技術應用實務班','職業安全衛生管理員訓練班',
'吊升荷重在三公噸以上之固定式起重機(架空式-地面操作)人員訓練班',
'子平八字開運姓名學班','美髮進階班','美容進階班','月子餐調理班',
'環保婚禮小物實作班','盆栽組合與花束花藝設計班','節慶花藝設計班',
'韓文必備文法班','羊毛氈濕氈創作設計與技巧訓練班','寵物美容照顧實務班',
'創意婚禮花飾與會場佈置花藝設計班','自然時尚風創意婚飾與花藝設計班']




  var unit = ['公立職業訓練機構(含國立學校機構)', '財團法人機構附設職業訓練中心(含私立學校機構)',
    '社團法人機構附設職業訓練中心', '事業機構附設職業訓練中心', '營利事業機構',
    '大專院校訓練機構', '高中職學校訓練機構', '國中小學校訓練機構', '研(開)發機構',
    '補教事業機構', '勞工團體', '商業團體', '公益&社福團體', '地方自治團體',
    '原住民團體', '其他訓練機構', '事業單位'
  ];

  var category = ['農、林、漁、牧業', '礦業及土石採取業', '製造業',
    '電力及燃氣供應業', '用水供應及污染整治業', '營建工程業',
    '批發及零售業', '運輸及倉儲業',
    '住宿及餐飲業', '出版影音及資通訊業', '金融及保險業',
    '不動產業', '專業', '科學及技術服務業', '支援服務業',
    '公共行政及國防；強制性社會安全', '教育業', '醫療保健及社會工作服務業',
    '藝術', '娛樂及休閒服務業', '其他服務業'
  ];

  var category1 = ['01:經營／行政／總務', '02:業務／貿易／銷售',
    '03:人資／法務／智財', '04:財務／金融／保險', '05:廣告／公關／設計',
    '06:客服／門市', '07:工程／研發／生技', '08:資訊／軟體／系統',
    '09:品管／製造／環衛', '10:技術／維修／操作', '11:營建／製圖／施作',
    '12:新聞／出版／印刷', '13:傳播／娛樂／藝術',
    '14:教育／學術／研究', '15:物流／運輸／資材',
    '16:旅遊／餐飲／休閒', '17:醫療／美容／保健',
    '18:保全／軍警消', '19:清潔／家事／保姆',
    '20:農林漁牧相關21:行銷／企劃／專案', '22:其他職類'
  ];

  var category1_1 = ['01:經營／行政／總務', '02:業務／貿易／銷售',
    '03:人資／法務／智財', '04:財務／金融／保險', '05:廣告／公關／設計',
    '06:客服／門市', '07:工程／研發／生技', '08:資訊／軟體／系統',
    '09:品管／製造／環衛', '10:技術／維修／操作'];

  var category2 = [
  'B大類 - 礦業及土石採取業',
  'C大類 - 製造業',
  'D大類 - 電力及燃氣供應業',
  'E大類 - 用水供應及污染整治業',
  'F大類 - 營建工程業',
  'G大類 - 批發及零售業',
  'H大類 - 運輸及倉儲業',
  'I大類 - 住宿及餐飲業',
  'J大類 - 出版影音及資通訊業',
  'K大類 - 金融及保險業',
  'L大類 - 不動產業',
  'M大類 - 專業',
  '科學及技術服務業',
  'N大類 - 支援服務業',
  'P大類 - 教育業',
  'Q大類 - 醫療保健及社會工作服務業',
  'R大類 - 藝術、娛樂及休閒服務業',
  'S大類 - 其他服務業']

  var category3 = ['商業類', '工業類', '醫事護理及家事類',
    '藝術類', '農業類', '其他類'];

// 重點產業別
 var category4 = [
'智慧機械','亞洲矽谷',
'綠能科技','生技醫藥',
'新農業','循環經濟',
'文化創意','晶片設計與半導體',
'國防產業','營造業'];



  var ages = ['85+', '80-84', '75-79', '70-74', '65-69', '60-64',
    '55-59', '50-54', '45-49', '40-44', '35-39', '30-34',
    '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'
  ];

  var month = ["1月", "2月", "3月", "4月", "5月", "6月",
    "7月", "8月", "9月", "10月", "11月", "12月"
  ];


  var tu_grey_100 = '#E8E9EB';
  var tu_grey_200 = '#D1D4D8';
  var tu_grey_300 = '#BBBFC5';
  var tu_grey_400 = '#8D949E';
  var tu_grey_500 = '#A4A9B1';
  var tu_grey_600 = '#8D949E';
  var tu_grey_700 = '#777F8B';
  var tu_grey_800 = '#606A78';
  var tu_grey_900 = '#333F51';
  var tu_dark = '#1F1F39';
  var tu_white = '#fff';

  var tu_neutral_100 = '#e9e9ef';
  var tu_neutral_200 = '#bcbccf';
  var tu_neutral_300 = '#9f9fba';
  var tu_neutral_400 = '#9090b0';
  var tu_neutral_500 = '#8181A5';
  var tu_neutral_600 = '#65658e';
  var tu_neutral_700 = '#505070';
  var tu_neutral_800 = '#303043';
  var tu_neutral_900 = '#252534';
  var tu_primary_100 = '#e0f3f3';
  var tu_primary_200 = '#c2e7e8';
  var tu_primary_300 = '#a3dcdc';
  var tu_primary_400 = '#85d0d1';
  var tu_primary_500 = '#66C4C5';
  var tu_primary_600 = '#58a3a9';
  var tu_primary_700 = '#4a828d';
  var tu_primary_800 = '#3b6171';
  var tu_primary_900 = '#2d4055';
  var tu_secondary_100 = '#dcdcf4';
  var tu_secondary_200 = '#b9b9e8';
  var tu_secondary_300 = '#9597dd';
  var tu_secondary_400 = '#7274d1';
  var tu_secondary_500 = '#4F51C6';
  var tu_secondary_600 = '#4547aa';
  var tu_secondary_700 = '#3c3d8e';
  var tu_secondary_800 = '#323371';
  var tu_secondary_900 = '#292955';
  var tu_tertiary_100 = '#ffecec';
  var tu_tertiary_200 = '#ffd8d8';
  var tu_tertiary_300 = '#ffc5c5';
  var tu_tertiary_400 = '#ffb1b1';
  var tu_tertiary_500 = '#FF9E9E';
  var tu_tertiary_600 = '#d2858a';
  var tu_tertiary_700 = '#a56b76';
  var tu_tertiary_800 = '#795261';
  var tu_tertiary_900 = '#4c384d';
  var tu_quaternary_100 = '#fffae6';
  var tu_quaternary_200 = '#fff4cd';
  var tu_quaternary_300 = '#feefb4';
  var tu_quaternary_400 = '#fee99b';
  var tu_quaternary_500 = '#FEE482';
  var tu_quaternary_600 = '#d1bd73';
  var tu_quaternary_700 = '#a59565';
  var tu_quaternary_800 = '#786e56';
  var tu_quaternary_900 = '#4c4648';
  var tu_success_100 = '#d0e9e4';
  var tu_success_200 = '#a1d3ca';
  var tu_success_300 = '#72beaf';
  var tu_success_400 = '#43a895';
  var tu_success_500 = '#14927A';
  var tu_success_600 = '#167b6d';
  var tu_success_700 = '#186460';
  var tu_success_800 = '#1b4d53';
  var tu_success_900 = '#1d3646';
  var tu_danger_100 = '#ffdbdd';
  var tu_danger_200 = '#ffb7bb';
  var tu_danger_300 = '#ff9399';
  var tu_danger_400 = '#ff6f77';
  var tu_danger_500 = '#FF4B55';
  var tu_danger_600 = '#d2424f';
  var tu_danger_700 = '#a5394a';
  var tu_danger_800 = '#793144';
  var tu_danger_900 = '#4c283f';
  var tu_warning_100 = '#ffebd8';
  var tu_warning_200 = '#ffd7b2';
  var tu_warning_300 = '#ffc28b';
  var tu_warning_400 = '#ffae65';
  var tu_warning_500 = '#FF9A3E';
  var tu_warning_600 = '#d2813d';
  var tu_warning_700 = '#a5693c';
  var tu_warning_800 = '#79503b';
  var tu_warning_900 = '#4c383a';
  var tu_info_100 = '#ccecfd';
  var tu_info_200 = '#99d8fc';
  var tu_info_300 = '#66c5fa';
  var tu_info_400 = '#33b1f9';
  var tu_info_500 = '#009EF7';
  var tu_info_600 = '#0685d1';
  var tu_info_700 = '#0c6bab';
  var tu_info_800 = '#135285';
  var tu_info_900 = '#19385f';


  var color_def = ["#80c4dc", "#ff9e9e", "#3b3dbf", "#969faf", "#89da8b", "#55bef9", "#ffe482", "#7ed7d9", "#ffb457", "#50cd89"];
  var color_def_darker = ["#679db0","#cc7f7f","#2f3199","#787f8c","#6eaf6f"];

  var color_v01 = ["#4e79a7", "#edc948", "#f28e2b", "#b07aa1", "#e15759", "#ff9da7", "#76b7b2", "#9c755f", "#59a14f", "#bab0ac"];
  var color_v02 = ["#4e79a7", "#ff9d9a", "#fabfd2", "#edc948", "#8cd17d", "#b07aa1", "#a0cbe8", "#79706e", "#e15759", "#f28e2b", "#c4c4c4", "#b6992d", "#d4a6c8", "#ffbe7d", "#59a14f", "#499894", "#86bcb6", "#bab0ac", "#d37295", "#9d7660", "#d7b5a6"];
  var color_v03 = ["#1170aa", "#c85200", "#fc7d0b", "#a3acb9", "#a3cce9", "#57606c", "#ffbc79", "#5fa2ce", "#c8d0d9"];
  var color_v04 = ["#767f8b", "#b3b7b8", "#5c6068", "#d3d3d3", "#989ca3"];
  var color_v05 = ["#b60a1c", "#51b364", "#e39802", "#ff684c", "#309143", "#ffda66", "#e03531", "#8ace7e", "#f0bd27"];
  var color_v06 = ["#6388b4", "#c3bc3f", "#ffae34", "#bb7693", "#ef6f6a", "#baa094", "#8cc2ca", "#a9b5ae", "#55ad89", "#767676"];
  var color_v07 = ["#4f6980", "#f47942", "#7e756d", "#849db1", "#fbb04e", "#a2ceaa", "#b66353", "#638b66", "#d7ce9f", "#bfbb60", "#b9aa97"];
  var color_v08 = ["#8175aa", "#94d0c0", "#6fb899", "#959c9e", "#31a1b3", "#027b8e", "#ccb22b", "#9f8f12", "#a39fc9"];
  var color_v09 = ["#eb1e2c", "#64cdcc", "#fd6f30", "#91dcea", "#f9a729", "#a4a4d5", "#f9d23c", "#bbc9e5", "#5fbb68"];
  var color_v10 = ["#8fb202", "#97cfd0", "#b9ca5d", "#f3a546", "#cf3e53", "#f7c480", "#f1788d", "#00a2b3"];
  var color_v11 = ["#90728f", "#ff9888", "#b9a0b4", "#6b6b6b", "#9d9b3d", "#bab2ae", "#cecb76", "#e15759", "#aa8780", "#dab6af"];
  var color_v12 = ["#4e9f50", "#98d9e4", "#26897e", "#87d180", "#94a323", "#8dbfa8", "#ef8a0c", "#fcc66d", "#3ca8bc", "#c3ce3d", "#a08400", "#f7d42a"];
  var color_v13 = ["#466f9d", "#d7b5a6", "#c8133b", "#91b3d7", "#3896c4", "#ea8783", "#ed444a", "#feb5a2", "#9d7660", "#a0d4ee", "#ba7e45", "#e9b87f"];
  var color_v14 = ["#8074a8", "#c5bfbe", "#b173a0", "#c6c1f0", "#9b93c9", "#c799bc", "#c46487", "#ffbed1", "#9c9290", "#ddb5d5", "#7c7270", "#f498b6"];
  var color_v15 = ["#1f77b4", "#8c564b", "#ff7f0e", "#e377c2", "#2ca02c", "#7f7f7f", "#d62728", "#9467bd", "#bcbd22", "#17becf"];
  var color_v16 = ["#729ece", "#a8786e", "#ff9e4a", "#ed97ca", "#67bf5c", "#a2a2a2", "#ed665d", "#ad8bc9", "#cdcc5d", "#6dccda"];
  var color_v17 = ["#1f77b4", "#98df8a", "#8c564b", "#c7c7c7", "#aec7e8", "#d62728", "#e377c2", "#c49c94", "#dbdb8d", "#17becf", "#ff7f0e", "#9467bd", "#c5b0d5", "#bcbd22", "#ffbb78", "#2ca02c", "#ff9896", "#f7b6d2", "#6f6f6f", "#9edae5"];
  var color_v18 = ["#1657ff", "#ff9a3e", "#ff16a2", "#332a7c", "#ff1010", "#8675ff", "#baccfd", "#16dbcc", "#ffbb38", "#f44771", "#fd7289", "#353e6c", "#22b8cf", "#dcfaf8", "#fff5d9"];
  var color_v19 = ["#e1c3cd", "#96d7d2", "#ffdcb9", "#b4dc96", "#f07896", "#c9e196", "#72c39f", "#ffde84", "#81d8e1", "#6fa5cf", "#f38ac0", "#9684bd"];
  var color_v20 = ["#2e4dd4", "#9fd4fd", "#84e0be", "#ffbc6e", "#fd9f9f", "#ababfd", "#7e7ef4"];
  var color_v21 = ["#66c4c5", "#14927a", "#ff9e9e", "#ff9a3e", "#ff4b55", "#fee482", "#4f51c6", "#302c4d", "#e2c1c0", "#7b6660", "#ccb97e", "#615c61", "#aea393", "#dbd5d1", "#e4455e", "#d29380", "#edc373", "#6667ab", "#df88b7", "#00589b", "#7fc3dc", "#5d89b4", "#499894", "#a3ccc9", "#879f84"];
  var color_v22 = ["#d4ae40", "#fee482", "#89da8b", "#f9f9fb", "#5ad0e8", "#b0dc00", "#50cd89", "#ffc700", "#7239ea", "#f1416c", "#1f3bb3", "#7ed7d9", "#1f1f39", "#f3a8a2", "#fff", "#acedfb", "#583ef2", "#3e6789", "#f7658b", "#ffb457"];

  function getRandom(min, max) {
    // var min = 1000, max = min + 1500;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var data = genData(city.length);

  function genData(count) {
    var seriesData = [];
    var legendData = [];
    for (var i = 0; i < count; i++) {
      legendData.push(city[i]);
      seriesData.push({
        name: city[i],
        value: Math.round(Math.random() * 100000)
      });
    }
    return {
      legendData: legendData,
      seriesData: seriesData
    };
  }


  // $('#tabv11').on('click', function(event) {
  //   $('#tab-2').show().tab('show');
  // });