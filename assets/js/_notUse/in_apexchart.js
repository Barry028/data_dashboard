var borderColor = '#dce0e5';
var dark = '#1a202b';
var gray = '#51596C';

var light = '#BDC5D1';

var teal = '#077C76';
var blue = '#334AC0';
var yellow = '#f39568';
var green = '#0ABF53';
var red = '#692340';
var purple = '#6f42c1';

var white = '#fff';

function navScrollBar() {
  var nav = document.getElementById("navbarScroll");
  var navWidth = nav.clientWidth;
  var navItem = nav.querySelectorAll("li");
  for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function(e) {
      var thisWidth = this.clientWidth;
      var moveLeft = this.offsetLeft;
      if (navWidth < moveLeft + thisWidth + 100) {
        nav.scrollTo({
          left: moveLeft,
          behavior: "smooth"
        });
      } else {
        nav.scrollTo({
          left: 0,
          behavior: "smooth"
        });
      }
    });
  }
  /// 鼠標拖曳行為 ///
  var isDown = false;
  var startX = "";
  var scrollLeft = "";
  nav.addEventListener("mousedown", function(e) {
    isDown = true;
    nav.className = "navbar-scroll nav-grab";
    startX = e.pageX - nav.offsetLeft;
    scrollLeft = nav.scrollLeft;
  });

  nav.addEventListener("mousemove", function(e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - nav.offsetLeft;
    var walk = (x - startX) * 3;
    nav.scrollLeft = scrollLeft - walk;
  });

  nav.addEventListener("mouseleave", function() {
    isDown = false;
    nav.className = "navbar-scroll";
  });

  nav.addEventListener("mouseup", function() {
    isDown = false;
    nav.className = "navbar-scroll";
  });
  /// 滾輪事件 ///
  nav.addEventListener("wheel", function(e) {
    nav.scrollLeft += e.deltaX;
    nav.scrollLeft += e.deltaY;
    e.preventDefault();
  });
}
var colors = [
  "#80C4DC", "#3B3DBF", "#FF9E9E",
  "#638267", "#F9D23C", "#849DB1",
  "#6667AB", "#C5AEB1", "#00656E",
  "#884C5E", "#A3CCC9", "#B3906C",
  "#769E51", "#D65079", "#C5AEB1",
  "#8B5897", "#AEA393", "#5D89B4",
  "#EDC373", "#86A293", "#B66353",
  "#CE8451", "#4B9B69", "#302C4D"
];

var city = ['基隆市', '台北市', '新北市', '桃園縣', '新竹市', '新竹縣', '苗栗縣', '台中市', '彰化縣', '南投縣', '雲林縣',
  '嘉義市', '嘉義縣', '台南市', '高雄市', '屏東縣', '台東縣', '花蓮縣', '宜蘭縣', '澎湖縣', '金門縣', '連江縣'
];
var newTaipeiCity = [
  "板橋區", "三重區", "中和區", "永和區", "新莊區", "新店區", "土城區",
  "蘆洲區", "汐止區", "樹林區", "淡水區", "鶯歌區", "三峽區", "瑞芳區",
  "五股區", "泰山區", "林口區", "深坑區", "石碇區", "新店區", "坪林區",
  "三芝區", "石門區", "八里區", "平溪區", "雙溪區", "貢寮區", "金山區", "萬里區", "烏來區"
];
var newTaipeiCity_val = [
  12, 24, 5, 7, 14, 8, 9, 2, 7, 16,
  1, 3, 6, 18, 12, 1, 2, 7, 9, 11,
  12, 24, 5, 7, 14, 8, 9, 2, 7, 16
]


var month = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

var category_1 = ['製造業', '礦業及土石採取業', '批發及零售業', '營建工程夜', '電力及燃氣空應累'];

var category_2 = ['同鄉會', '宗親會', '經濟業務團體', '國際團體', '社會服務及慈善團體', '體育團體', '宗教團體', '醫療衛生團體', '學術文化團體'];

var category_3 = ['運輸及倉儲業', '其他服務業', '醫療保健及社會工作服務業', '農林漁牧業', '批發及零售業', '住宿及餐飲業', '營建工程業', '製造業'];

var category_license_1 = ['照顧服務員', '堆高機操作', '美容', '電腦軟體應用', '中餐烹調', '飲料調製'];

var category_license_2 = ['室內配線', '門市服務', '重機械操作', '飲料調製', '堆高機操作', '烘培食品', '美容', '電腦軟體應用', '照顧服務員', '中餐烹調'];

var ages = ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54', '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'];

var race = ['阿美族', '排灣族', '泰雅族', '布農族', '太魯閣族', '卑南族', '魯凱族', '賽德克族', '鄒族', '賽夏族', '雅美族', '噶瑪蘭族', '撒奇萊雅族', '邵族', '拉阿魯哇族', '卡那卡那富族'];

var svg = 'images/PointingDown.png';

// Default
window.Apex = {
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', 'PingFang TC', 'Microsoft Yahei','Microsoft JhengHei', '微軟正黑體', 'Noto Sans CJK TC', sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
  fontSize: 14,
  foreColor: gray,
  fontWeight: 400,
  colors: colors,
  noData: {
    text: '本區間查詢不到資料喔！😕',
    align: 'center',
    verticalAlign: 'middle',
    offsetX: 0,
    offsetY: 0,
    style: {
      color: undefined,
      fontSize: '24px',
      fontFamily: undefined
    }
  },
  fill: {
    opacity: 0.88
  },
  chart: {
    parentHeightOffset: 32,
    toolbar: {
      show: !1
    },
    zoom: {
      enabled: !1
    },
  },
  stroke: {
    show: true,
    width: 1,
    curve: "smooth",
    lineCap: 'butt',
    colors: undefined,
    dashArray: 0,
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'],
      opacity: .24
    },
    borderColor: borderColor,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: 0,
    offsetY: 0,
    offsetX: 0,
    itemMargin: {
      horizontal: 8,
      vertical: 4,
    },
    markers: {
      width: 16,
      height: 16,
      strokeWidth: 1,
      strokeColor: white,
      fillColors: undefined,
      radius: 8,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0
    },
    labels: {
      colors: dark,
      useSeriesColors: false
    },
  },
  states: {
    normal: {
      filter: {
        type: 'none',
        value: 0,
      }
    },
    hover: {
      filter: {
        type: 'lighten',
        value: 0.06,
      }
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: 'darken',
        value: 0.12,
      }
    },
  }
};

function newTpPie_chart() {

  var NewTpPie_options = {
    colors: colors,
    series: [44, 13, 24, 22, 36, 62, 28, 18, 16, 20, 22, 44, 13, 24, 22, 36, 62, 28, 18, 16, 20, 22],
    labels: newTaipeiCity,
    chart: {
      width: '100%',
      height: 520,
      type: 'donut',

      events: {
        animationEnd: function(ctx) {
          // ctx.toggleDataPointSelection(0)
        },
        dataPointSelection: function(event, chartContext, config) {
          // tab1_3_chart.updateSeries(randomize())
        },
      }
    },
    dataLabels: {
      enabled: true,
      formatter(val, opts) {
        const name = opts.w.globals.labels[opts.seriesIndex]
        return [name, val.toFixed(1) + '%']
      },
      distributed: true,
      offsetX: 0,
      offsetY: 0,
      style: {
        colors: [dark],
        fontSize: '14px',
      },
      background: {
        enabled: true,
        foreColor: white,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: white,
        padding: 20,
        opacity: 0.8,
      },
    },
    plotOptions: {
      pie: {
        customScale: 1,
        expandOnClick: true,
        offsetX: 0,
        offsetY: 0,

        donut: {
          // background: ['#fff'],
          size: '30%',
          labels: {
            show: true,
            value: {
              show: true,
              fontSize: '18px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              color: undefined,
              offsetY: 16,
              formatter: function(val) {
                return val + ' 門課程'
              }
            },
            total: {
              show: true,
              label: '總課程數',
              fontSize: '24px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              color: '#8C98A4',
              formatter: (w) => {
                const total = w.globals.seriesTotals.reduce(
                  (a, b) => a + b,
                  0
                );
                return total + ' 門';
              }
            }
          },
          // offsetY: 20,
        }
      },
    },
    tooltip: {
      y: {
        formatter: function(value) {
          return value + " 門";
        }
      }
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 2,
      curve: "straight",
      colors: [white],
      dashArray: 0,
    },
  };

  var newTpPie_chart = new ApexCharts(document.getElementById("NewTpPie"), NewTpPie_options);
  newTpPie_chart.render();
}