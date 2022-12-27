  if ($('#echarts_tw_branch_map').length) {
    (function echarts_tw_branch_map() {
      var chartDom = document.getElementById('echarts_tw_branch_map');
      var myChart = echarts.init(chartDom, 'wda_data', {
        renderer: 'svg',
        useDirtyRect: true,
        locale: 'EN'
      });
      var option;

      var ROOT_PATH = 'https://assets.codepen.io/2845599';

      var nameMap = 'taiwan';


      // 中心點
      var geoCoordMap = {
        "基隆市": [121.7081, 25.10898],
        "新北市": [121.6739, 24.91571],
        "臺北市": [121.5598, 25.09108],
        "宜蘭縣": [121.7195, 24.69295],
        "花蓮縣": [121.3542, 23.7569],
        "桃園市": [121.2168, 24.93759],
        "新竹市": [120.9647, 24.80395],
        "新竹縣": [121.1252, 24.70328],
        "苗栗縣": [120.9417, 24.48927],
        "嘉義市": [120.4473, 23.47545],
        "嘉義縣": [120.574, 23.45889],
        "南投縣": [120.9876, 23.83876],
        "彰化縣": [120.4818, 23.99297],
        "屏東縣": [120.62, 22.54951],
        "雲林縣": [120.3897, 23.75585],
        "臺中市": [120.9417, 24.23321],
        "高雄市": [120.666, 23.01087],
        "臺南市": [120.2513, 23.1417],
        "臺東縣": [120.9876, 22.98461],
        "金門縣": [118.3186, 24.43679],
        "澎湖縣": [119.6151, 23.56548],
        "連江縣": [119.8397, 26.19737],
      };
      // 課程人數
      var data = [{
        name: "連江縣",
        value: [998, getRandom(0, 1000)]
      }, {
        name: "宜蘭縣",
        value: [88, getRandom(0, 1000)]
      }, {
        name: "彰化縣",
        value: [65, getRandom(0, 1000)]
      }, {
        name: "南投縣",
        value: [256, getRandom(0, 1000)]
      }, {
        name: "雲林縣",
        value: [624, getRandom(0, 1000)]
      }, {
        name: "基隆市",
        value: [782, getRandom(0, 1000)]
      }, {
        name: "臺北市",
        value: [468, getRandom(0, 1000)]
      }, {
        name: "新北市",
        value: [244, getRandom(0, 1000)]
      }, {
        name: "臺中市",
        value: [98, getRandom(0, 1000)]
      }, {
        name: "臺南市",
        value: [88, getRandom(0, 1000)]
      }, {
        name: "桃園市",
        value: [312, getRandom(0, 1000)]
      }, {
        name: "苗栗縣",
        value: [188, getRandom(0, 1000)]
      }, {
        name: "嘉義市",
        value: [452, getRandom(0, 1000)]
      }, {
        name: "嘉義縣",
        value: [124, getRandom(0, 1000)]
      }, {
        name: "金門縣",
        value: [24, getRandom(0, 1000)]
      }, {
        name: "高雄市",
        value: [924, getRandom(0, 1000)]
      }, {
        name: "臺東縣",
        value: [768, getRandom(0, 1000)]
      }, {
        name: "花蓮縣",
        value: [562, getRandom(0, 1000)]
      }, {
        name: "澎湖縣",
        value: [388, getRandom(0, 1000)]
      }, {
        name: "新竹市",
        value: [244, getRandom(0, 1000)]
      }, {
        name: "新竹縣",
        value: [156, getRandom(0, 1000)]
      }, {
        name: "屏東縣",
        value: [66, getRandom(0, 1000)]
      }];

      // console.log(data);

      var dataMax = ArrayMax(data);
      var dataMin = ArrayMin(data);

      // 創建第二組數組
      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          // var newV = getRandom((data[i].value) * 1, (data[i].value) * 2);
          var newV = data[i].value;
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
              // 中心點座標、增加人數、課堂數到 value 後面
            });
          }
        }
        return res;
      };

      dataNew = convertData(data);
      // console.log(dataNew);
      // $.get(ROOT_PATH + '/branch.json', function(taiwanJson) {
      $.get(ROOT_PATH + '/branch.json', function(taiwanJson) {

        // 選到縣市中文
        echarts.registerMap('taiwan', taiwanJson, {
          mapName: "台灣地圖",
        });

        var mapFeatures = echarts.getMap(nameMap).geoJson.features;
        // console.log(mapFeatures)
        // myChart.hideLoading();
        // 
        // 

        option = {
          title: {
            text: 'Taiwan Map',
            textStyle: {
              fontWeight: 'bolder',
              fontSize: 22,
              color: tu_primary_100,
              textBorderColor: tu_primary_500,
              textBorderWidth: 6,
              textBorderType: 'solid',
              textBorderDashOffset: 2,
              textShadowColor: tu_primary_600,
              textShadowBlur: 4,
              textShadowOffsetX: 2,
              textShadowOffsetY: 2,
            },
            subtext: '職訓數據地圖',
            subtextStyle: {
              color: tu_primary_800,
              fontWeight: 'bolder',
              fontSize: 14,
            },
            sublink: 'javascript:;',
            left: 12,
            top: 12,
            zlevel: 10
          },
          tooltip: {
            trigger: 'item',
            formatter: function(params) {
              if (typeof(params.value)[2] == "undefined") {
                return params.name + ' : ' + params.value + ' 人';
              } else {
                return params.name + ' : ' + params.value[1] + ' 人';
              }
            }
          },
          visualMap: [{
            left: 0,
            top: 0,
            min: dataMin,
            max: dataMax,
            seriesIndex: [0],
            dimension: [0],
            show: true,
            splitNumber: 5,
            padding: [88, 24, 24, 24],
            backgroundColor: 'rgba(255,255,255, 0.66)',
            textStyle: {
              color: tu_dark,
              fontSize: 14,
            },
            inRange: {
              color: ['#a1d3ca', '#72beaf', '#43a895', '#14927A', '#186460'],
              symbolSize: [100],
              symbol: 'circle',
            },
            formatter: function(value, value2) {
              return value + ' 人 ~ ' + value2 + ' 人'; // 范围标签显示内容。
            },
            pieces: [{
              gte: 1000,
              label: '1000 人以上',
            }, {
              gte: 500,
              lte: 1000,
              label: '500 - 1000 人',
            }, {
              gte: 300,
              lte: 500,
              label: '300 - 500 人',
            }, {
              gte: 100,
              lte: 300,
              label: '100 - 300 人',
            }, {
              lte: 100,
              gte: 0,
              label: '100 人以下',
            }],
            zlevel: 9,
          }, {
            left: 0,
            top: 232,
            min: 1000,
            max: 0,
            show: true,
            seriesIndex: [1],
            dimension: [3], // 選到第三個數組
            padding: [24, 24, 24, 24],
            backgroundColor: 'rgba(255,255,255, 0.66)',
            textStyle: {
              color: tu_dark,
              fontSize: 14,
            },
            pieces: [{
              gt: 800, // 大於
              label: '課程數量 > 800 門',
              color: '#cf3e53',
            }, {
              gt: 500, // 大於等於
              lte: 800, // 小於等於
              label: '課程數量 > 500 門',
              color: '#D96879',
            }, {
              gt: 0, // 大於等於
              lte: 500, // 小於等於
              label: '課程數量 < 500 門',
              color: '#E9A9B2',
            }],
            zlevel: 9,
          }],
          toolbox: {
            show: true,
            left: 'right',
            top: 'top',
            feature: {
              dataView: {
                title: '查看數值',
                readOnly: false
              },
              restore: {
                title: '儲存圖片'
              },
              saveAsImage: {
                title: '儲存圖片'
              }
            }
          },
          geo: {
            show: true,
            map: 'taiwan',
            nameProperty: 'COUNTYNAME', // Json.name
            roam: true,
            layoutCenter: ['50%', '40%'], // 位置
            zoom: 1.25, // 當前缩放比例
            layoutSize: '100%',
            scaleLimit: {
              min: 0.75,
              max: 2,
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
                shadowColor: 'rgba(0,0,0,0.12)',
                shadowOffsetX: 8,
                shadowOffsetY: 8,
                shadowBlur: 2,
                borderWidth: 2,
                borderColor: 'rgba(255,255,255,0.4)',
                borderCap: 'round',
              },
              emphasis: {
                shadowColor: 'rgba(0,0,0,0.24)',
                shadowOffsetX: 10,
                shadowOffsetY: 10,
                shadowBlur: 2,
                borderWidth: 4,
                borderColor: 'rgba(255,255,255,0.66)',
              },
            },
            label: {
              normal: {
                show: true,
                formatter: '{a}',
                position: 'right',
                offset: [20, 20],
                color: 'rgba(255,255,255,1)',
                fontSize: 12,
                align: 'right',
                verticalAlign: 'bottom',
                textShadowColor: tu_success_800,
                textShadowBlur: 4,
                textBorderWidth: 2,
                textBorderColor: tu_success_800,
                textBorderType: 'solid',
                textBorderDashOffset: 10,
              },
              emphasis: {
                color: tu_white,
                fontSize: 16,
              },
            },
            select: {
              label: {
                color: tu_success_100
              },
            },
            zlevel: 0,
          },
          series: [{
            name: '分署執行績效',
            map: 'taiwan',
            type: 'map',
            nameProperty: 'COUNTYNAME', // Json.name
            geoIndex: 0,
            projection: {
              project: function(point) {
                return [point[0] / 180 * Math.PI, -Math.log(Math.tan((Math.PI / 2 + point[1] / 180 * Math.PI) / 2))]
              },
              unproject: function(point) {
                return [point[0] * 180 / Math.PI, 2 * 180 / Math.PI * Math.atan(Math.exp(point[1])) - 90]
              }
            },
            markPoint: {
              symbol: 'pin',
              symbolSize: 100,
              itemStyle: {
                normal: {
                  borderColor: tu_info_600,
                  borderWidth: 2,
                  shadowColor: tu_info_800,
                  shadowBlur: 2,
                  shadowOffsetX: 4,
                  shadowOffsetY: 4,
                  color: tu_info_600,
                  opacity: 1,
                  label: {
                    show: true,
                    offset: [0, -8],
                    borderRadius: 50,
                    backgroundColor: tu_white,
                    width: 36,
                    height: 36,
                    formatter: '🐻',
                    fontSize: 32
                  }
                },
                emphasis: {
                  borderColor: '#1e90ff',
                  borderWidth: 2,
                  label: {
                    show: true
                  }
                }
              },
              effect: {
                show: true,
                shadowBlur: 10
              },
              data: [{
                name: '目前位置',
                // 經緯度
                coord: [121.7081, 25.10898]
              }]
            },
            data: data,
          }, 
          {
            name: '課堂數量',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: function(val) {
              // console.log(val)
              return val[3] / 20; // val[0] 經度；[1] 緯度；[2] 人數；[3]課堂數
            },
            label: {
              normal: {
                show: true,
                position: 'inside',
                align: 'center',
                color: tu_danger_900,
                fontSize: 12,
                fontWeight: 'bolder',
                textBorderWidth: 3,
                textBorderColor: tu_white,
                textBorderType: 'solid',
                textBorderDashOffset: 0,
                formatter(value) {
                  // console.log(value.value[3])
                  return value.value[3] + ' 堂'
                },
              },
              emphasis: {
                show: true
              }
            },
            tooltip: {
              show: false,
            },
            itemStyle: {
              normal: {
                borderColor: 'rgba(255,255,255,0.32)',
                borderWidth: 2
              }
            },
            zlevel: 2,
            data: dataNew,
          }, {
            name: '前五名 課程數量',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            geoIndex: 0,
            // 顯示前五名
            data: dataNew.sort(function(a, b) {
              return b.value[3] - a.value[3];
            }).slice(0, 5),
            symbolSize: function(val) {
              // console.log(val)
              return val[3] / 15;
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: 'rgba(255,75,85,0.36)',
                shadowBlur: 10,
                shadowColor: 'rgba(255,75,85,0.12)',
              }
            },
            tooltip: {
              show: false,
            },
            zlevel: 1
          }, {
            name: '前五名 課程數量 水波紋',
            // 水波纹
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: dataNew.sort(function(a, b) {
              return b.value[3] - a.value[3];
            }).slice(0, 5),
            symbolSize: function(val) {
              // console.log(val)
              return val[3] / 15;
            },
            showEffectOn: 'render',
            rippleEffect: {
              period: 10, // 動畫時間，值越小速度越快
              scale: 2, // 波紋圓環最大限制，值越大波紋越大
              brushType: 'fill', // 波紋繪制方式 stroke, fill
            },
            itemStyle: {
              normal: {
                color: "rgba(255,255,255,0.36)",
              }
            },
            zlevel: 0,
          }
          ]
        };
        if (option && typeof option === 'object') {
          myChart.setOption(option);
        }
      });

      window.addEventListener('resize', function() {
        myChart.resize();
      });

    })();
  }