if ($('#echarts_tw_county_map').length) {
  (function echarts_tw_county_map() {


    var chartDom = document.getElementById('echarts_tw_county_map');
    var myChart = echarts.init(chartDom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    var option;

    var ROOT_PATH = 'https://assets.codepen.io/2845599';


    var nameMap = 'taiwan';
    var geoCoordMap = {
      "新北市": [121.6739, 24.91571],
      "高雄市": [120.666, 23.01087],
      "臺中市": [120.9417, 24.23321],
      "臺北市": [121.5598, 25.09108],
      "桃園縣": [121.2168, 24.93759],
      "臺南市": [120.2513, 23.1417],
      "彰化縣": [120.4818, 23.99297],
      "屏東縣": [120.62, 22.54951],
      "雲林縣": [120.3897, 23.75585],
      "苗栗縣": [120.9417, 24.48927],
      "嘉義縣": [120.574, 23.45889],
      "新竹縣": [121.1252, 24.70328],
      "南投縣": [120.9876, 23.83876],
      "宜蘭縣": [121.7195, 24.69295],
      "新竹市": [120.9647, 24.80395],
      "基隆市": [121.7081, 25.10898],
      "花蓮縣": [121.3542, 23.7569],
      "嘉義市": [120.4473, 23.47545],
      "臺東縣": [120.9876, 22.98461],
      "金門縣": [118.3186, 24.43679],
      "澎湖縣": [119.6151, 23.56548],
      "連江縣": [119.5397, 26.19737]
    };
    var data = [{
      name: "連江縣",
      value: 222
    }, {
      name: "宜蘭縣",
      value: 1
    }, {
      name: "彰化縣",
      value: 0
    }, {
      name: "南投縣",
      value: 33
    }, {
      name: "雲林縣",
      value: 22
    }, {
      name: "基隆市",
      value: 55
    }, {
      name: "臺北市",
      value: 44
    }, {
      name: "新北市",
      value: 66
    }, {
      name: "臺中市",
      value: 32
    }, {
      name: "臺南市",
      value: 88
    }, {
      name: "桃園市",
      value: 99
    }, {
      name: "苗栗縣",
      value: 111
    }, {
      name: "嘉義市",
      value: 452
    }, {
      name: "嘉義縣",
      value: 124
    }, {
      name: "金門縣",
      value: 22
    }, {
      name: "高雄市",
      value: 77
    }, {
      name: "臺東縣",
      value: 44
    }, {
      name: "花蓮縣",
      value: 122
    }, {
      name: "澎湖縣",
      value: 44
    }, {
      name: "新竹市",
      value: 33
    }, {
      name: "新竹縣",
      value: 55
    }, {
      name: "屏東縣",
      value: 66
    }];
    var max = 480,
      min = 9; // todo 
    var maxSize4Pin = 100,
      minSize4Pin = 20;


    var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    };

    $.get(ROOT_PATH + '/COUNTY_MOI_1090820.json', function(taiwanJson) {
      myChart.showLoading();

      // 選到縣市中文
      // console.log(taiwanJson.features[0].properties.COUNTYNAME);
      echarts.registerMap('taiwan', taiwanJson, {
        mapName: "台灣地圖",
        // "宜蘭縣": //   // left: -131,/   // top: 25,//   // width: 15, // },
      });

      var mapFeatures = echarts.getMap(nameMap).geoJson.features;
      myChart.hideLoading();

      option = {
        title: {
          text: 'Taiwan Map',
          subtext: '職訓數據地圖',
          sublink: 'javascript:;',
          left: 'left'
        },
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            if (typeof(params.value)[2] == "undefined") {
              return params.name + ' : ' + params.value;
            } else {
              return params.name + ' : ' + params.value[2];
            }
          }
        },
        // visualMap: [{
        //     left: 90,
        //     bottom: '20%',
        //     min: 0,
        //     max: 1000,
        //     show: true,
        //     //   text: ['High', 'Low'],
        //     realtime: false,
        //     calculable: false,
        //     seriesIndex: [0],
        //     orient: 'horizontal',
        //     textStyle: {
        //       color: 'rgba(175,224,254,.9)',
        //     },
        //     pieces: [{
        //         gt: 3,
        //         label: '已开发',
        //         color: '#134B1C',
        //       },
        //       {
        //         gte: 1,
        //         lte: 1,
        //         label: '开发中',
        //         color: '#4A4003',
        //       },
        //       {
        //         gte: 0,
        //         lte: 0,
        //         label: '未开发',
        //         color: '#00336C',
        //       },
        //     ],
        //   },
        //   {
        //     left: 90,
        //     // top: this.chinaBox / 2 + 52,
        //     top: '30%',
        //     min: 0,
        //     max: 1300,
        //     seriesIndex: 1,
        //     show: true,
        //     splitNumber: 4,
        //     padding: [50, 20, 20, 20],
        //     backgroundColor: 'rgba(255,255,255,.2)',
        //     textStyle: {
        //       color: 'rgba(175,224,254,.9)',
        //     },
        //     inRange: {
        //       // color: ['#8B77FF', '#4FCCFF', '#6FE621', '#FFC760', '#FB497C'].reverse(),
        //       symbolSize: [8, 15],
        //       symbol: 'circle',
        //     },
        //     formatter: function(value) {
        //       return '';
        //     },
        //     pieces: [{
        //         gt: 1000,
        //         label: '1000万以上',
        //         color: '#FB497C',
        //       },
        //       {
        //         gte: 500,
        //         lte: 1000,
        //         label: '500-1000万',
        //         color: '#FFC760',
        //       },
        //       {
        //         gte: 300,
        //         lt: 500,
        //         label: '300-500万',
        //         color: '#6FE621',
        //       },
        //       {
        //         gt: 100,
        //         lt: 300,
        //         label: '100-300万',
        //         color: '#4FCCFF',
        //       },
        //       {
        //         lt: 100,
        //         gt: 3,
        //         label: '100万以下',
        //         color: '#DAB2FF',
        //       },
        //     ],
        //   },
        // ],
        visualMap: {
          show: true,
          // min: min,
          // max: max,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'], // 文本，默认为数值文本
          calculable: true,
          seriesIndex: [1],
          nameProperty: 'COUNTYNAME', // Json.name
          inRange: {
            color: ['#4f51c6', "#edc948",'#ffe482'],
          },
        },
        toolbox: {
          show: true,
          left: 'right',
          top: 'top',
          feature: {
            dataView: {
              readOnly: false
            },
            restore: {},
            saveAsImage: {}
          }
        },
        geo: {
          show: true,
          map: 'taiwan',
          nameProperty: 'COUNTYNAME', // Json.name
          roam: true,
          aspectScale: 0.875,
          layoutSize: '100%',
          scaleLimit: {
            min: 0.5,
            max: 2.5,
          },
          projection: {
            project: function(point) {
              return [point[0] / 180 * Math.PI, -Math.log(Math.tan((Math.PI / 2 + point[1] / 180 * Math.PI) / 2))]
            },
            unproject: function(point) {
              return [point[0] * 180 / Math.PI, 2 * 180 / Math.PI * Math.atan(Math.exp(point[1])) - 90]
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#031525',
              borderColor: 'rgba(255,255,255,0.4)',
              borderWidth: 2,

            },
            emphasis: {
              // areaColor: '#2B91B7',
            }
          },
          label: {
            normal: {
              show: true,
              formatter: '{a}',
              position: 'center',
              color: 'rgba(255,255,255,0.4)',
              fontSize: 10,
              align: 'center',
            },
            emphasis: {
              show: true,
              color: tu_white,
              fontSize: 12,
            }
          },
        },
        series: [
          {
            name: 'taiwan2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
              return val[2] / 10;
            },
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#05C3F9'
              }
            }
          }, 
          {
            name: '分署執行績效',
            type: 'map',
            roam: true,
            map: 'taiwan',
            nameProperty: 'COUNTYNAME', // Json.name
            aspectScale: 0.85,
            layoutSize: '100%',
            scaleLimit: {
              min: 0.75,
              max: 2,
            },
            showLegendSymbol: false,
            geoIndex: 0,
            projection: {
              project: function(point) {
                return [point[0] / 180 * Math.PI, -Math.log(Math.tan((Math.PI / 2 + point[1] / 180 * Math.PI) / 2))]
              },
              unproject: function(point) {
                return [point[0] * 180 / Math.PI, 2 * 180 / Math.PI * Math.atan(Math.exp(point[1])) - 90]
              }
            },
            itemStyle: {
              normal: {
                shadowColor: 'rgba(0,0,0,0.12)',
                shadowOffsetX: 2,
                shadowOffsetY: 2,
                shadowBlur: 2,
                borderWidth: 2,
                borderColor: 'rgba(255,255,255,0.36)',
                borderCap: 'round',
                opacity: 1,
              },
              emphasis: {
                shadowColor: 'rgba(0,0,0,0.24)',
                shadowOffsetX: 4,
                shadowOffsetY: 4,
                shadowBlur: 4,
                borderWidth: 8,
                borderColor: 'rgba(255,255,255,0.66)',
                // areaColor: 'rgba(0,243,255,1)',
              },
            },
            label: {
              normal: {
                show: true,
                formatter: '{b}',
                position: 'right',
                color: tu_white,
                fontSize: 10,
                textBorderColor: tu_dark,
                textBorderWidth: 2,
                textShadowColor: tu_info_500,
                textShadowBlur: 2,
                align: 'right',
              },
              emphasis: {
                show: true,
                color: tu_white,
                fontSize: 12,
              }
            },
            data: data,
          },
          {
            name: 'Pointers',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: function(val) {
              var a = (maxSize4Pin - minSize4Pin) / (max - min);
              var b = minSize4Pin - a * min;
              b = maxSize4Pin - a * max;
              return a * val[2] + b;
            },
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 9,
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#F62157', //标志颜色
              }
            },
            zlevel: 6,
            data: convertData(data),
          }, 
          {
            // 水波纹
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(
              data.sort(function(a, b) {
                console.log(a, b)
                return b.value - a.value;
              })
              .slice(0, 6)
            ),
            // symbolSize: function(val) {
            //   return val[2] / 6;
            // },
            showEffectOn: 'render',
            symbolOffset: [-10, 10], //偏移
            rippleEffect: {
              period: 10, // 动画时间，值越小速度越快
              scale: 4, // 波纹圆环最大限制，值越大波纹越大
              brushType: 'fill', // 波纹绘制方式 stroke, fill
            },
            zlevel: 2,
          }, 
          {
            name: '前五名',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            // 顯示前五名
            data: convertData(data.sort(function(a, b) {
              console.log(a);
              console.log(b);
              return b.value - a.value;
            }).slice(0, 5)),
            symbolSize: function(val) {
              return val[2] / 20;
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
              normal: {
                backgroundColor: '#fff',
                formatter: '{b}',
                position: 'center',
                show: true
              }
            },
            itemStyle: {
              normal: {
                backgroundColor: "#fff",
                color: '#EDC373',
                shadowBlur: 10,
                shadowColor: '#05C3F9'
              }
            },
            zlevel: 2
          },
        ]
      };
      myChart.setOption(option);
    });


    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', function() {
      myChart.resize();
    });

  })();
}