/**
 * 檢測數組是否存在
 */
Array.prototype.contains = function(obj) {
  var i = this.length;
  while (i--) {
    if (this[i] === obj) {
      return true;
    }
  }
  return false;
};
/**
 * 數組中最大值 最小值
 * @param array
 * @returns
 */
Array.prototype.max = function() {
  return Math.max.apply({}, this);
};
Array.prototype.min = function() {
  return Math.min.apply({}, this);
};
/**
 * 判斷是否為整數
 * @param obj
 * @returns {Boolean}
 */
function isInteger(obj) {
  return obj % 1 === 0
}

/**
 * 為圖形設置容器
 */
function setContainer(containerId) {
  var containerWidth;
  var containerHeight;
  var container = eval("document.getElementById('" + containerId + "')");
  //以為需要用遞歸查找祖宗級父元素
  /*   var ParentContainer = container.parentNode;//獲取容器父元素
     function getParentContainer() {
         if(ParentContainer.clientWidth != 0 && ParentContainer.clientWidth != "undefined" && ParentContainer.clientWidth != null){
             return ParentContainer.clientWidth;
         }
         ParentContainer = ParentContainer.parentNode;
         getParentContainer();
     }
     var containerParent = getParentContainer();*/
  var containerParent = container.parentNode.clientWidth; //獲取容器父元素的寬度
  if (containerParent == 0 || containerParent == "undefined" || containerParent == null) {
    containerParent = 600;
  }
  if (typeof(container.attributes.width) != "undefined") {
    if (container.getAttribute("width").includes("%")) {
      containerWidth = containerParent * container.getAttribute("width").replace("%", "") / 100
    }
    if (container.getAttribute("width").includes("px")) {
      containerWidth = container.getAttribute("width").replace("px", "");
    }
  } else {
    containerWidth = containerParent || "600";
  }
  if (typeof(container.attributes.height) != "undefined") {
    if (container.getAttribute("height").includes("%")) {
      containerHeight = containerWidth * container.getAttribute("height").replace("%", "") / 100
    }
    if (container.getAttribute("height").includes("px")) {
      containerHeight = container.getAttribute("height").replace("px", "");
    }
  } else {
    containerHeight = containerWidth * 0.618 || "400"; //黃金分割比例0.618
  }
  container.style.width = containerWidth + "px";
  container.style.height = containerHeight + "px";
}

/**
 * EchartUtil核心代碼
 */
var TuEcharts = {
  //格式化數據series
  echartsDataFormate: {
    /**
     *整理數據沒有分組類型的，適合餅圖
     */
    NoGroupFormate: function(data) {
      //category 的數據存儲
      var categorys = [];
      //data 的數據存儲
      var datas = [];
      //遍歷
      for (var i = 0; i < data.length; i++) {
        categorys.push(data[i].name || "");
        //定義一個中間變量
        var temp_data = {
          value: data[i].value || 0,
          name: data[i].name || ""
        };
        datas.push(temp_data);
      }
      return {
        categorys: categorys,
        data: datas
      };
    },
    //整理數據有分組類型的，適合折線圖、柱形圖（分組，堆積） 
    //數據格式：group：XXX，name：XXX，value：XXX
    /**
     * @param data : json數據<br>
     * @param type : 圖表類型<br>
     * var data1 = [ <br>
     *    { group:'類型1' , name: '1月', value: 10 }, <br>
     *    { group:'類型2' , name: '1月', value: 15 }, <br>
     *    { group:'類型1' , name: '2月', value: 25 }, <br>
     *    { group:'類型2' , name: '2月', value: 12 }, <br>
     *    { group:'類型1' , name: '3月', value: 22 }, <br>
     *    { group:'類型2' , name: '3月', value: 12 }, <br>
     *    ];
     *
     */
    GroupFormate: function(data, type) {
      //用於存儲類型名稱
      var groups = new Array();
      //用於存儲data.name數據
      var names = new Array();
      //存儲返回series數據 （一個或者多個）
      var series = new Array();

      for (var i = 0; i < data.length; i++) {
        //判斷data[i].group是否存在數租groups中
        if (!groups.contains(data[i].group)) {
          //不存在則跳進 存放
          groups.push(data[i].group);
        }

        //判斷name數據是否存在 數組names中
        if (!names.contains(data[i].name)) {
          //不存在則跳進 存放
          names.push(data[i].name);
        }
      }

      //遍歷分類
      for (var i = 0; i < groups.length; i++) {
        //定義一個series中間變量
        var temp_series = {};
        //定義data.value數據存儲
        var temp_data = new Array();
        //遍歷所有數據
        for (var j = 0; j < data.length; j++) {
          //遍歷data.name數據
          for (var k = 0; k < names.length; k++) {
            //判斷所有分類中的所有數據含name數據分開
            if (groups[i] == data[j].group && names[k] == data[j].name) {
              temp_data.push(data[j].value);
            }
          }
        }
        temp_series = {
          name: groups[i],
          type: type,
          data: temp_data
        };
        series.push(temp_series);

      }
      return {
        groups: groups,
        category: names,
        series: series
      };
    },

    LineFormate: function(data, type) {
      switch (type) {
        case "smooth":
          //用於存儲類型名稱
          var groups = new Array();
          //用於存儲data.name數據
          var names = new Array();
          //存儲返回series數據 （一個或者多個）
          var series = new Array();

          for (var i = 0; i < data.length; i++) {
            //判斷data[i].group是否存在數租groups中
            if (!groups.contains(data[i].group)) {
              //不存在則跳進 存放
              groups.push(data[i].group);
            }

            //判斷name數據是否存在 數組names中
            if (!names.contains(data[i].name)) {
              //不存在則跳進 存放
              names.push(data[i].name);
            }
          }

          //遍歷分類
          for (var i = 0; i < groups.length; i++) {
            //定義一個series中間變量
            var temp_series = {};
            //定義data.value數據存儲
            var temp_data = new Array();
            //遍歷所有數據
            for (var j = 0; j < data.length; j++) {
              //遍歷data.name數據
              for (var k = 0; k < names.length; k++) {
                //判斷所有分類中的所有數據含name數據分開
                if (groups[i] == data[j].group && names[k] == data[j].name) {
                  temp_data.push(data[j].value);
                }
              }
            }
            temp_series = {
              name: groups[i],
              type: "line",
              data: temp_data,
              smooth: true
            };
            series.push(temp_series);

          }
          return {
            groups: groups,
            category: names,
            series: series
          };
        case "area":
          //用於存儲類型名稱
          var groups = new Array();
          //用於存儲data.name數據
          var names = new Array();
          //存儲返回series數據 （一個或者多個）
          var series = new Array();

          for (var i = 0; i < data.length; i++) {
            //判斷data[i].group是否存在數租groups中
            if (!groups.contains(data[i].group)) {
              //不存在則跳進 存放
              groups.push(data[i].group);
            }

            //判斷name數據是否存在 數組names中
            if (!names.contains(data[i].name)) {
              //不存在則跳進 存放
              names.push(data[i].name);
            }
          }

          //遍歷分類
          for (var i = 0; i < groups.length; i++) {
            //定義一個series中間變量
            var temp_series = {};
            //定義data.value數據存儲
            var temp_data = new Array();
            //遍歷所有數據
            for (var j = 0; j < data.length; j++) {
              //遍歷data.name數據
              for (var k = 0; k < names.length; k++) {
                //判斷所有分類中的所有數據含name數據分開
                if (groups[i] == data[j].group && names[k] == data[j].name) {
                  temp_data.push(data[j].value);
                }
              }
            }
            temp_series = {
              name: groups[i],
              type: "line",
              data: temp_data,
              areaStyle: {}
            };
            series.push(temp_series);

          }
          return {
            groups: groups,
            category: names,
            series: series
          };
        case "areaSmooth":
          //用於存儲類型名稱
          var groups = new Array();
          //用於存儲data.name數據
          var names = new Array();
          //存儲返回series數據 （一個或者多個）
          var series = new Array();

          for (var i = 0; i < data.length; i++) {
            //判斷data[i].group是否存在數租groups中
            if (!groups.contains(data[i].group)) {
              //不存在則跳進 存放
              groups.push(data[i].group);
            }

            //判斷name數據是否存在 數組names中
            if (!names.contains(data[i].name)) {
              //不存在則跳進 存放
              names.push(data[i].name);
            }
          }

          //遍歷分類
          for (var i = 0; i < groups.length; i++) {
            //定義一個series中間變量
            var temp_series = {};
            //定義data.value數據存儲
            var temp_data = new Array();
            //遍歷所有數據
            for (var j = 0; j < data.length; j++) {
              //遍歷data.name數據
              for (var k = 0; k < names.length; k++) {
                //判斷所有分類中的所有數據含name數據分開
                if (groups[i] == data[j].group && names[k] == data[j].name) {
                  temp_data.push(data[j].value);
                }
              }
            }
            temp_series = {
              name: groups[i],
              type: "line",
              data: temp_data,
              smooth: true,
              areaStyle: {}
            };
            series.push(temp_series);

          }
          return {
            groups: groups,
            category: names,
            series: series
          };
        default:
          //用於存儲類型名稱
          var groups = new Array();
          //用於存儲data.name數據
          var names = new Array();
          //存儲返回series數據 （一個或者多個）
          var series = new Array();

          for (var i = 0; i < data.length; i++) {
            //判斷data[i].group是否存在數租groups中
            if (!groups.contains(data[i].group)) {
              //不存在則跳進 存放
              groups.push(data[i].group);
            }

            //判斷name數據是否存在 數組names中
            if (!names.contains(data[i].name)) {
              //不存在則跳進 存放
              names.push(data[i].name);
            }
          }

          //遍歷分類
          for (var i = 0; i < groups.length; i++) {
            //定義一個series中間變量
            var temp_series = {};
            //定義data.value數據存儲
            var temp_data = new Array();
            //遍歷所有數據
            for (var j = 0; j < data.length; j++) {
              //遍歷data.name數據
              for (var k = 0; k < names.length; k++) {
                //判斷所有分類中的所有數據含name數據分開
                if (groups[i] == data[j].group && names[k] == data[j].name) {
                  temp_data.push(data[j].value);
                }
              }
            }
            temp_series = {
              name: groups[i],
              type: "line",
              data: temp_data
            };
            series.push(temp_series);

          }
          return {
            groups: groups,
            category: names,
            series: series
          };
      }
    },

    /**
     * 雷達圖數據格式化
     */
    RadarFormate: function(data, type) {
      //用於存儲類型名稱
      var groups = new Array();
      //用於存儲data.name數據
      var names = new Array();
      //存儲最大值數組
      var indicators = new Array();
      //定義data.value數據存儲
      var temp_data = new Array();
      for (var i = 0; i < data.length; i++) {
        //判斷data[i].group是否存在數租groups中
        if (!groups.contains(data[i].group)) {
          //不存在則跳進 存放
          groups.push(data[i].group);
        }

        //判斷name數據是否存在 數組names中
        if (!names.contains(data[i].name)) {
          //不存在則跳進 存放
          names.push(data[i].name);
        }
      }

      for (var i = 0; i < names.length; i++) {
        //中
        var temp_maxValue = new Array();
        for (var j = 0; j < data.length; j++) {
          if (names[i] == data[j].name) {
            temp_maxValue.push(data[j].value);
          }
        }
        indicators.push({
          name: names[i],
          max: Number(temp_maxValue.max() * 2 / 1.5).toFixed(2)
        })
      }
      //遍歷分類
      for (var i = 0; i < groups.length; i++) {
        //定義一個series中間變量
        var temp_series = {};
        //定義datavalue數組
        var dataValues = new Array();
        //遍歷所有數據
        for (var j = 0; j < data.length; j++) {
          if (groups[i] == data[j].group) {
            dataValues.push(data[j].value);
          }
        }
        temp_data.push({
          value: dataValues,
          name: groups[i]
        });
      }
      series = {
        type: type,
        data: temp_data
      };
      return {
        indicators: indicators,
        groups: groups,
        category: names,
        series: series
      };
    },
    /**
     * 漏鬥圖數據格式化
     */
    FunnelFormate: function(data, type) {
      //用於存儲類型名稱
      var groups = new Array();
      //用於存儲data.name數據
      var names = new Array();
      //定義一個存放series的數組
      var series = new Array();
      for (var i = 0; i < data.length; i++) {
        //判斷data[i].group是否存在數租groups中
        if (!groups.contains(data[i].group)) {
          //不存在則跳進 存放
          groups.push(data[i].group);
        }

        //判斷name數據是否存在 數組names中
        if (!names.contains(data[i].name)) {
          //不存在則跳進 存放
          names.push(data[i].name);
        }
      }
      var width = parseInt(100 / groups.length);
      //遍歷分類
      for (var i = 0; i < groups.length; i++) {
        //定義data.value數據存儲
        var temp_data = new Array();
        var k = 0;
        //遍歷所有數據
        for (var j = 0; j < data.length; j++) {
          //判斷所有分類中的所有數據含name數據分開
          if (groups[i] == data[j].group) {
            k++;
            temp_data.push({
              value: k,
              name: data[j].name + ":" + data[j].value
            });
          }
        }
        var left = width * i;
        series.push({
          name: groups[i],
          type: type,
          sort: 'ascending',
          grap: 2,
          left: left + "%",
          width: width - 5 + "%",
          label: {
            normal: {
              show: true,
              position: 'inside'
            },
            emphasis: {
              textStyle: {
                fontSize: 20
              }
            }
          },
          data: temp_data
        });
      }
      return {
        groups: groups,
        category: names,
        series: series
      };
    },
    /**
     * 儀表盤圖數據格式化
     */
    GaugeFormate: function(data, type) {
      var temp_datas = [{
        value: data.value,
        name: data.name
      }];
      var names = data.name;
      //判斷最大值和最小值幾位數
      maxNum = Number(parseInt(data.value)).toString().length;
      minNum = Number(parseInt(data.value)).toString().length;
      if (minNum <= 2) {
        min = 0;
      } else {
        //最小值
        min = Math.pow(10, (maxNum - 1));
      }
      //最大值
      max = Math.pow(10, maxNum);
      var series = new Array();
      series.push({
        name: data.group,
        type: type,
        min: min,
        max: max,
        radius: '70%',
        startAngle: 180,
        endAngle: -0,
        axisLine: { // 坐標軸線
          lineStyle: { // 屬性lineStyle控制線條樣式
            color: [
              [0.09, 'lime'],
              [0.82, '#1e90ff'],
              [1, '#ff4500']
            ],
            width: 3,
            shadowColor: '#fff', //默認透明
            shadowBlur: 10
          }
        },
        axisLabel: { // 坐標軸小標記
          textStyle: { // 屬性lineStyle控制線條樣式
            fontWeight: 'bolder',
            color: '#444',
            shadowColor: '#fff', //默認透明
            shadowBlur: 10
          }
        },
        axisTick: { // 坐標軸小標記
          length: 15, // 屬性length控制線長
          lineStyle: { // 屬性lineStyle控制線條樣式
            color: 'auto',
            shadowColor: '#fff', //默認透明
            shadowBlur: 10
          }
        },
        splitLine: { // 分隔線
          length: 25, // 屬性length控制線長
          lineStyle: { // 屬性lineStyle（詳見lineStyle）控制線條樣式
            width: 3,
            color: 'auto',
            shadowColor: '#fff', //默認透明
            shadowBlur: 10
          }
        },
        pointer: { // 分隔線
          shadowColor: '#fff', //默認透明
          shadowBlur: 5
        },
        title: {
          offsetCenter: ['-10%', '30%'],
          textStyle: { // 其余屬性默認使用全局文本樣式，詳見TEXTSTYLE
            fontWeight: 'bolder',
            fontSize: 14,
            fontStyle: 'italic',
            color: '#',
            shadowColor: '#fff', //默認透明
            shadowBlur: 10
          }
        },
        detail: {
          backgroundColor: 'rgba(30,144,255,0.8)',
          borderWidth: 1,
          borderColor: '#fff',
          shadowColor: '#fff', //默認透明
          shadowBlur: 5,
          fontSize: 14,
          offsetCenter: ['20%', '30%'], // x, y，單位px
          textStyle: { // 其余屬性默認使用全局文本樣式，詳見TEXTSTYLE
            fontWeight: 'bolder',
            color: '#fff'
          }
        },
        data: temp_datas
      });
      return {
        category: names,
        series: series
      };
    }

  },

  // 生成圖形option

  /**
   * 餅圖
   * @param data : json 數據 [{  name: '男生', value: 10}，name: '女生', value: 20}]
   * @param type : 餅圖類型 數值型 1表示環形圖，2表示玫瑰餅圖，3表示環形玫瑰圖...
   * @param title ： 標題 字符串類型加引號
   */
  pie: function(data, type, title) {
    //數據格式
    var datas = TuEcharts.echartsDataFormate.NoGroupFormate(data);
    switch (type) {
      case 1:
        var option1 = {
          //標題
          title: {
            text: title || "", //標題
            x: 'center', //位置默認居中
          },
          // 提示
          tooltip: {
            show: true,
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          // 組建
          legend: {
            orient: 'horizontal', //垂直：vertical； 水平 horizontal
            // top: 'center', //位置默認左
            bottom: '5%',
            data: datas.categorys
          },
          series: [{
            name: title || "",
            type: 'pie', //類型
            radius: ['50%', '70%'], //圓的大小
            center: ['50%', '50%'], //位置居中
            data: datas.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            //引導線
            labelLine: {
              normal: {
                show: true,
                length: 2,
              }
            }
          }]
        };
        return option1;
      case 2:
        var option2 = {
          //標題
          title: {
            text: title || "", //標題
            x: 'center', //位置默認居中
          },
          //提示
          tooltip: {
            show: true,
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          //組建
          legend: {
            orient: 'horizontal', //垂直：vertical； 水平 horizontal
            // top: 'center', //位置默認左
            bottom: '5%',
            data: datas.categorys
          },
          series: [{
            name: title || "",
            type: 'pie', //類型
            radius: '48%', //圓的大小
            roseType: 'radius',
            center: ['50%', '50%'], //位置居中
            data: datas.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            //引導線
            labelLine: {
              normal: {
                show: true,
                length: 2,
              }
            }
          }]
        };
        return option2;
      case 3:
        var option3 = {
          //標題
          title: {
            text: title || "", //標題
            x: 'center', //位置默認居中
          },
          //提示
          tooltip: {
            show: true,
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          //組建
          legend: {
            orient: 'horizontal', //垂直：vertical； 水平 horizontal
            // top: 'center', //位置默認左
            bottom: '5%',
            data: datas.categorys
          },
          series: [{
            name: title || "",
            type: 'pie', //類型
            radius: ['50%', '70%'], //圓的大小
            roseType: 'radius',
            center: ['50%', '50%'], //位置居中
            data: datas.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            //引導線
            labelLine: {
              normal: {
                show: true,
                length: 2,
              }
            }
          }]
        };
        return option3;
      case 4:
        var option4 = {
          //標題
          title: {
            text: title || "", //標題
            x: 'center', //位置默認居中
          },
          //提示
          tooltip: {
            show: true,
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          //組建
          legend: {
            orient: 'horizontal', //垂直：vertical； 水平 horizontal
            // top: 'center', //位置默認左
            bottom: '5%',
            data: datas.categorys
          },
          series: [{
            name: title || "",
            type: 'pie', //類型
            radius: '48%', //圓的大小
            roseType: 'area',
            center: ['50%', '50%'], //位置居中
            data: datas.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            //引導線
            labelLine: {
              normal: {
                show: true,
                length: 2,
              }
            }
          }]
        };
        return option4;
      case 5:
        var option5 = {
          //標題
          title: {
            text: title || "", //標題
            x: 'center', //位置默認居中
          },
          //提示
          tooltip: {
            show: true,
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          //組建
          legend: {
            orient: 'horizontal', //垂直：vertical； 水平 horizontal
            // top: 'center', //位置默認左
            bottom: '5%',
            data: datas.categorys
          },
          series: [{
            name: title || "",
            type: 'pie', //類型
            radius: ['50%', '70%'], //圓的大小
            roseType: 'area',
            center: ['50%', '50%'], //位置居中
            data: datas.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            //引導線
            labelLine: {
              normal: {
                show: true,
                length: 2,
              }
            }
          }]
        };
        return option5;
      default:
        var option = {
          //標題
          title: {
            text: title || "", //標題
            x: 'center', //位置默認居中
          },
          //提示
          tooltip: {
            show: true,
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          //組建
          legend: {
            orient: 'horizontal', //垂直：vertical； 水平 horizontal
            // top: 'center', //位置默認左
            bottom: '5%',
            data: datas.categorys
          },
          series: [{
            name: title || "",
            type: 'pie', //類型
            radius: '48%', //圓的大小
            center: ['50%', '50%'], //位置居中
            data: datas.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            //引導線
            labelLine: {
              normal: {
                show: true,
                length: 2,
              }
            }
          }]
        };
        return option;
    }
  },
  /**
   * 柱形圖
   * @param data : Json 數據
   * @param type : 柱狀圖類型 數值型 1 表示
   * @param data : Json 數據
   */
  bar: function(data, type, title) {
    var datas = TuEcharts.echartsDataFormate.GroupFormate(data, type);
    console.log(datas.series[0])
    var option = {
      //標題
      title: {
        text: title || "", //標題
        x: 'center', //位置默認居中
      },
      //提示
      tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}"
      },
      //組建
      legend: {
        orient: 'vertical', //垂直：vertical； 水平 horizontal
        left: 'left', //位置默認左
        data: datas.groups
      },
      //水平坐標
      xAxis: [{
        type: 'category',
        data: datas.name[0]
      }],
      //垂直坐標
      yAxis: [{
        type: 'value'
      }],
      //series數據
      series: datas.series[0]
    };
    return option;
  },

  /**
   * 折線圖
   * @param data : json 數據
   * @param type : 折線圖類型
   * @param title : 標題
   */
  line: function(data, type, title) {
    var datas = TuEcharts.echartsDataFormate.LineFormate(data, type);
    var option = {
      //標題
      title: {
        text: title || "", //標題
        x: 'center', //位置默認居中
      },
      //提示
      tooltip: {
        show: true,
        trigger: 'axis',
      },
      //組建
      legend: {
        orient: 'vertical', //垂直：vertical； 水平 horizontal
        left: 'right', //位置默認右
        data: datas.groups
      },
      grid: {
        left: '10%',
        top: '25%',
        right: '10%',
        bottom: '25%',
      },
      //水平坐標
      xAxis: [{
        type: 'category',
        data: datas.category,
        boundaryGap: false,
        splitLine: {
          show: true,
        },
      }],
      //垂直坐標
      yAxis: [{
        type: 'value'
      }],
      //series數據
      series: datas.series
    };
    return option;
  },
  /**
   * 雷達圖
   * @param title ： 標題<br>
   * @param subtext ：副標題<br>
   * @param data : json 數據
   */
  radar: function(title, subtext, data) {
    var datas = TuEcharts.echartsDataFormate.RadarFormate(data, 'radar');
    var option = {
      //標題
      title: {
        text: title || "", //標題
        subtext: subtext || "", //副標題
        x: 'center', //位置默認居中
      },
      //提示
      tooltip: {
        show: true,
      },
      //組建
      legend: {
        orient: 'vertical', //垂直：vertical； 水平 horizontal
        left: 'left', //位置默認左
        data: datas.groups
      },
      radar: {
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: datas.indicators
      },
      series: datas.series
    };
    return option;
  },
  /**
   * 漏鬥圖
   * @param title ： 標題<br>
   * @param subtext ：副標題<br>
   * @param data : json 數據
   */
  funnel: function(title, subtext, data) {
    var datas = TuEcharts.echartsDataFormate.FunnelFormate(data, 'funnel');
    var option = {
      //標題
      title: {
        text: title || "", //標題
        subtext: subtext || "", //副標題
        x: 'center', //位置默認居中
      },
      //提示
      tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{a} <br/>{b} ({c}%)"
      },
      //組建
      legend: {
        orient: 'vertical', //垂直：vertical； 水平 horizontal
        left: 'left', //位置默認左
        data: datas.groups
      },
      series: datas.series
    };
    return option;
  },
  /**
   * 儀表圖
   * @param title ： 標題<br>
   * @param subtext ：副標題<br>
   * @param data : json 數據
   */
  gauge: function(title, subtext, data) {
    var datas = TuEcharts.echartsDataFormate.GaugeFormate(data, 'gauge');
    var option = {
      //標題
      title: {
        text: title || "", //標題
        subtext: subtext || "", //副標題
        x: 'center', //位置默認居中
      },
      //提示
      tooltip: {
        show: true,
        formatter: "{a} <br/>{b}:{c}"
      },
      series: datas.series
    };
    return option;
  },
  /**
   *
   * @param option : option
   * @param echartId : 圖表的id 需要加引號
   */
  renderChart: function(option, echartId, theme) {
    var container = eval("document.getElementById('" + echartId + "')");
    setContainer(echartId);
    var theme = theme || 'wda_data';
    var myChart = echarts.init(container, theme, {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    //當無數據的時候顯示；
    /*    if (option.series[0].data.length <= 0) {
            myChart.showLoading({
                text: '無數據' //loading話術
            });
            return;
        }*/
    myChart.setOption(option); // 為echarts對象加載數據
    window.onresize = function() {
      setContainer(echartId);
      myChart.resize();
    };
    return myChart;
  },


  map: function(option, echartId, theme) {
    
  }
};


/**
 *
 * 預設樣式
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports', 'echarts'], factory);
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(exports, require('echarts'));
  } else {
    // Browser globals
    factory({}, root.echarts);
  }
}(this, function(exports, echarts) {
  var log = function(msg) {
    if (typeof console !== 'undefined') {
      console && console.error && console.error(msg);
    }
  };
  if (!echarts) {
    log('ECharts is not Loaded');
    return;
  }
  echarts.registerTheme('wda_data', {
    "color": [
      "#80c4dc",
      "#3b3dbf",
      "#ff9e9e",
      "#14927a",
      "#FEE482",
      "#ACB0B1",
      "#E0BF62",
      "#7C4C5A",
      "#A2CEAA",
      "#C49C94",
      "#BAC5DD",
      "#B8DFEC",
      "#F9C5C2",
      "#98DF8A",
      "#fd79a8",
      "#004EFF",
      "#FEE482",
      "#16DBCC",
      "#B0A7A4",
      '#f2385a',
      "#4F51C6",
      "#C3C55D",
      "#66C4C5",
      "#59A14F",
      '#f5a503',
      "#00ADEF",
      "#2E3192",
      "#76DEBC",
      "#F5DF4D",
      "#939597",
      "#F8B252",
      "#BD2444",
      "#CCB97E",
      "#4791FF",
      "#A4C23E",
      "#638267",
      "#14927a",
      "#EC725A",
      "#edc373",
      '#4ad9d9',
      '#f7879c',
      "#2D2C4B",
      '#c1d7a8',
      '#4dffd2',
      '#fccfd7',
      '#d5f6f6',
    ],
    "backgroundColor": "rgba( 245, 245, 246,1)",
    "borderColor": 'rgba(255, 255, 255, 0.66)',
    "borderWidth": 2,
    "borderType": "solid",
    "subtitleColor": "rgba(90, 100, 115,1)",
    "textColorShow": false,
    "textColor": "rgba(31, 31, 57,1)",
    "markTextColor": "rgba(255, 255, 255, 1)",
    "textStyle": {},
    "title": {
      "left": "center",
      "top": '0',
      "textStyle": {
        "fontSize": 20,
        "fontWeight": 'bolder',
        "color": 'rgba(31, 31, 57,1)',
      },
    },
    "grid": {
      "containLabel": true,
    },
        "legendTextColor": 'rgba(31, 31, 57,1)',
    "axes": [{
      "type": "all",
      "name": "通用坐标轴",
      "axisLineShow": true,
      "axisLineColor": "rgba(90, 100, 115,1)",
      "axisTickShow": true,
      "axisTickColor": "rgba(90, 100, 115,1)",
      "axisLabelShow": true,
      "axisLabelColor": "rgba(90, 100, 115,1)",
      "splitLineShow": true,
      "splitLineColor": [
        "rgba(242, 242, 242,1)"
      ],
      "splitAreaShow": false,
      "splitAreaColor": [
        "rgba(233, 233, 239,0.32)",
        "rgba(233, 233, 239,0.32)"
      ]
    }, {
      "type": "category",
      "name": "類目坐標軸",
      "axisLineShow": true,
      "axisLineColor": "rgba(90, 100, 115,1)",
      "axisTickShow": true,
      "axisTickColor": "rgba(90, 100, 115,1)",
      "axisLabelShow": true,
      "axisLabelColor": "rgba(90, 100, 115,1)",
      "splitLineShow": false,
      "splitLineColor": [
        "rgba(242, 242, 242,1)"
      ],
      "splitAreaShow": false,
      "splitAreaColor": [
        "rgba(233, 233, 239,0.32)",
        "rgba(233, 233, 239,0.32)"
      ]
    }, {
      "type": "value",
      "name": "数值坐标轴",
      "axisLineShow": true,
      "axisLineColor": "rgba(90, 100, 115,1)",
      "axisTickShow": true,
      "axisTickColor": "rgba(90, 100, 115,1)",
      "axisLabelShow": true,
      "axisLabelColor": "rgba(90, 100, 115,1)",
      "splitLineShow": true,
      "splitLineColor": [
        "rgba(242, 242, 242,1)"
      ],
      "splitAreaShow": false,
      "splitAreaColor": [
        "rgba(233, 233, 239,0.32)",
        "rgba(233, 233, 239,0.32)"
      ]
    }, {
      "type": "log",
      "name": "对数坐标轴",
      "axisLineShow": true,
      "axisLineColor": "rgba(90, 100, 115,1)",
      "axisTickShow": true,
      "axisTickColor": "rgba(90, 100, 115,1)",
      "axisLabelShow": true,
      "axisLabelColor": "rgba(90, 100, 115,1)",
      "splitLineShow": true,
      "splitLineColor": [
        "rgba(242, 242, 242,1)"
      ],
      "splitAreaShow": false,
      "splitAreaColor": [
        "rgba(233, 233, 239,0.32)",
        "rgba(233, 233, 239,0.32)"
      ]
    }, {
      "type": "time",
      "name": "时间坐标轴",
      "axisLineShow": true,
      "axisLineColor": "rgba(90, 100, 115,1)",
      "axisTickShow": true,
      "axisTickColor": "rgba(90, 100, 115,1)",
      "axisLabelShow": true,
      "axisLabelColor": "rgba(90, 100, 115,1)",
      "splitLineShow": true,
      "splitLineColor": [
        "rgba(242, 242, 242,1)"
      ],
      "splitAreaShow": false,
      "splitAreaColor": [
        "rgba(233, 233, 239,0.32)",
        "rgba(233, 233, 239,0.32)"
      ]
    }],
    "line": {
      "itemStyle": {
        "normal": {
          "borderWidth": 2
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2
        }
      },
      "symbolSize": "8",
      "symbol": "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z",
      "smooth": false
    },
    "radar": {
      "itemStyle": {
        "normal": {
          "borderWidth": 2
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2
        }
      },
      "symbolSize": "8",
      "symbol": "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z",
      "smooth": false
    },
    "bar": {
      "itemStyle": {
        "normal": {
          "barBorderWidth": "0",
          "barBorderColor": "#ccc"
        },
        "emphasis": {
          "barBorderWidth": "0",
          "barBorderColor": "#ccc"
        }
      }
    },
    "pie": {
      "itemStyle": {
        "normal": {
          "borderWidth": "0",
          "borderColor": "#ccc"
        },
        "emphasis": {
          "borderWidth": "0",
          "borderColor": "#ccc"
        }
      },
      "symbol": "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z"
    },
    "scatter": {
      "itemStyle": {
        "normal": {
          "borderWidth": "0",
          "borderColor": "#ccc"
        },
        "emphasis": {
          "borderWidth": "0",
          "borderColor": "#ccc"
        }
      },
      "symbol": "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z"
    },
    "boxplot": {
      "itemStyle": {
        "normal": {
          "borderWidth": "0",
          "borderColor": "#ccc"
        },
        "emphasis": {
          "borderWidth": "0",
          "borderColor": "#ccc"
        }
      },
      "symbol": "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z"
    },
    "parallel": {
      "itemStyle": {
        "normal": {
          "borderWidth": "0",
          "borderColor": "#ccc"
        },
        "emphasis": {
          "borderWidth": "0",
          "borderColor": "#ccc"
        }
      },
      "symbol": "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z"
    },
    "sankey": {
      "itemStyle": {
        "normal": {
          "borderWidth": "0",
          "borderColor": "#ccc"
        },
        "emphasis": {
          "borderWidth": "0",
          "borderColor": "#ccc"
        }
      },
      "symbol": "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z"
    },
    "funnel": {
      "itemStyle": {
        "normal": {
          "borderWidth": "0",
          "borderColor": "#ccc"
        },
        "emphasis": {
          "borderWidth": "0",
          "borderColor": "#ccc"
        }
      },
      "symbol": "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z"
    },
    "gauge": {
      "itemStyle": {
        "normal": {
          "borderWidth": "0",
          "borderColor": "#ccc"
        },
        "emphasis": {
          "borderWidth": "0",
          "borderColor": "#ccc"
        }
      },
      "symbol": "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z"
    },
    "candlestick": {
      "itemStyle": {
        "normal": {
          "color": "#ffee51",
          "color0": "#ffffff",
          "borderColor": "#ff715e",
          "borderColor0": "#797fba",
          "borderWidth": "1"
        }
      }
    },
    "graph": {
      "itemStyle": {
        "normal": {
          "borderWidth": "0",
          "borderColor": "#ccc"
        }
      },
      "lineStyle": {
        "normal": {
          "width": "1",
          "color": "#888888"
        }
      },
      "symbolSize": "8",
      "symbol": "path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z",
      "smooth": false,
      "color": [
        "#ff715e",
        "#ffaf51",
        "#ffee51",
        "#8c6ac4",
        "#715c87"
      ],
      "label": {
        "normal": {
          "textStyle": {
            "color": "#333333"
          }
        }
      }
    },
    "map": {
      "itemStyle": {
        "normal": {
          "areaColor": "#555555",
          "borderColor": "#999999",
          "borderWidth": 0.5
        },
        "emphasis": {
          "areaColor": "rgba(255,175,81,0.5)",
          "borderColor": "#ffaf51",
          "borderWidth": 1
        }
      },
      "label": {
        "normal": {
          "textStyle": {
            "color": "#ffffff"
          }
        },
        "emphasis": {
          "textStyle": {
            "color": "rgb(255,238,81)"
          }
        }
      }
    },
    "geo": {
      "itemStyle": {
        "normal": {
          "areaColor": "#555555",
          "borderColor": "#999999",
          "borderWidth": 0.5
        },
        "emphasis": {
          "areaColor": "rgba(255,175,81,0.5)",
          "borderColor": "#ffaf51",
          "borderWidth": 1
        }
      },
      "label": {
        "normal": {
          "textStyle": {
            "color": "#ffffff"
          }
        },
        "emphasis": {
          "textStyle": {
            "color": "rgb(255,238,81)"
          }
        }
      }
    },
    "categoryAxis": {
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "#666666"
        }
      },
      "axisTick": {
        "show": false,
        "lineStyle": {
          "color": "#333"
        }
      },
      "axisLabel": {
        "show": true,
        "textStyle": {
          "color": "#999999"
        }
      },
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": [
            "#555555"
          ]
        }
      },
      "splitArea": {
        "show": false,
        "areaStyle": {
          "color": [
            "rgba(250,250,250,0.05)",
            "rgba(200,200,200,0.02)"
          ]
        }
      }
    },
    "valueAxis": {
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "#666666"
        }
      },
      "axisTick": {
        "show": false,
        "lineStyle": {
          "color": "#333"
        }
      },
      "axisLabel": {
        "show": true,
        "textStyle": {
          "color": "#999999"
        }
      },
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": [
            "#555555"
          ]
        }
      },
      "splitArea": {
        "show": false,
        "areaStyle": {
          "color": [
            "rgba(250,250,250,0.05)",
            "rgba(200,200,200,0.02)"
          ]
        }
      }
    },
    "logAxis": {
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "#666666"
        }
      },
      "axisTick": {
        "show": false,
        "lineStyle": {
          "color": "#333"
        }
      },
      "axisLabel": {
        "show": true,
        "textStyle": {
          "color": "#999999"
        }
      },
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": [
            "#555555"
          ]
        }
      },
      "splitArea": {
        "show": false,
        "areaStyle": {
          "color": [
            "rgba(250,250,250,0.05)",
            "rgba(200,200,200,0.02)"
          ]
        }
      }
    },
    "timeAxis": {
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "#666666"
        }
      },
      "axisTick": {
        "show": false,
        "lineStyle": {
          "color": "#333"
        }
      },
      "axisLabel": {
        "show": true,
        "textStyle": {
          "color": "#999999"
        }
      },
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": [
            "#555555"
          ]
        }
      },
      "splitArea": {
        "show": false,
        "areaStyle": {
          "color": [
            "rgba(250,250,250,0.05)",
            "rgba(200,200,200,0.02)"
          ]
        }
      }
    },
    "toolbox": {
      "iconStyle": {
        "normal": {
          "borderColor": "#999999"
        },
        "emphasis": {
          "borderColor": "#666666"
        }
      }
    },
    "legend": {
      "textStyle": {
        "color": "rgba(31, 31, 57,1)",
      }
    },
    "tooltip": {
      "backgroundColor": 'rgba(0,0,0,0.80)',
      "textStyle": {
        "color": "#ffffff",
      },
      "axisPointer": {
        "type": 'line',
        "lineStyle": {
          "color": '#00aecd',
          "width": 2,
          "type": 'dashed'
        },
        "crossStyle": {
          "color": '#00aecd',
          "width": 2
        },
        "shadowStyle": {
          "color": 'rgba(200,200,200,0.3)'
        }
      }

    },
    "timeline": {
      "lineStyle": {
        "color": "#ffaf51",
        "width": 1
      },
      "itemStyle": {
        "normal": {
          "color": "#ffaf51",
          "borderWidth": 1
        },
        "emphasis": {
          "color": "#ffaf51"
        }
      },
      "controlStyle": {
        "normal": {
          "color": "#ffaf51",
          "borderColor": "#ffaf51",
          "borderWidth": 0.5
        },
        "emphasis": {
          "color": "#ffaf51",
          "borderColor": "#ffaf51",
          "borderWidth": 0.5
        }
      },
      "checkpointStyle": {
        "color": "#ff715e",
        "borderColor": "rgba(255,113,94,0.4)"
      },
      "label": {
        "normal": {
          "textStyle": {
            "color": "#ff715e"
          }
        },
        "emphasis": {
          "textStyle": {
            "color": "#ff715e"
          }
        }
      }
    },
    "visualMap": {
      "color": [
        "#ff715e",
        "#ffee51",
        "#797fba"
      ]
    },
    "dataZoom": {
      "backgroundColor": "rgba(255,255,255,0)",
      "dataBackgroundColor": "rgba(222,222,222,1)",
      "fillerColor": "rgba(255,113,94,0.2)",
      "handleColor": "#cccccc",
      "handleSize": "100%",
      "textStyle": {
        "color": "#999999"
      }
    },
    "markPoint": {
      "label": {
        "normal": {
          "textStyle": {
            "color": "#333333"
          }
        },
        "emphasis": {
          "textStyle": {
            "color": "#333333"
          }
        }
      }
    }
  });
}));