if ($('#index_v1_1').length) {
  (function index_v1_1() {
    var index_v1_1 = document.getElementById("index_v1_1");
    var index_v1_1 = echarts.init(index_v1_1, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    var option;

    let xAxisData = [];
    let data1 = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];
    for (let i = 0; i < 3; i++) {
      xAxisData.push('Class' + i);
      data1.push(+(Math.random() * 200).toFixed(2));
      data2.push(+(Math.random() * 500).toFixed(2));
      data3.push(+(Math.random() + 100).toFixed(2));
      data4.push(+(Math.random() + 100).toFixed(2));
    }
    var emphasisStyle = {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)'
      }
    };
    option = {
      title: {
        text: '參訓/結訓人數情形',

        left: "center",
        top: '16px'
      },
      legend: {
        data: ['參訓男', '結訓男', '參訓女', '結訓女'],
        left: 'center',
        bottom: '2.5%'
      },
      tooltip: {},
      xAxis: {
        data: ['青年', '職前', '在職'],
        axisLine: {
          onZero: true
        },
        splitLine: {
          show: false
        },
        splitArea: {
          show: false
        }
      },
      yAxis: {
        axisLabel: {
          formatter: '{value} 人',
          fontSize: 10,
        }
      },
      grid: {
        bottom: 72,
        left: '20%',
      },
      series: [{
          name: '參訓男',
          type: 'bar',
          stack: 'one',
          itemStyle: {
            borderRadius: ['8', '8', 0, 0]
          },
          color: '#00589B',
          emphasis: emphasisStyle,

          data: data1
        }, {
          name: '結訓男',
          type: 'bar',
          stack: 'one',
          itemStyle: {
            borderRadius: ['8', '8', 0, 0]
          },
          color: '#7FC3DC',
          emphasis: emphasisStyle,
          data: data2
        }, {
          name: '參訓女',
          type: 'bar',
          stack: 'two',
          itemStyle: {
            borderRadius: ['8', '8', 0, 0]
          },
          color: '#D3507A',
          emphasis: emphasisStyle,
          data: data3
        }, {
          name: '結訓女',
          type: 'bar',
          stack: 'two',
          itemStyle: {
            borderRadius: ['8', '8', 0, 0]
          },
          color: '#DF88B7',
          emphasis: emphasisStyle,
          data: data4,

        },
        //  {
        //   name: 'glyph',
        //   type: 'pictorialBar',
        //   barGap: '-0%',
        //   symbolPosition: 'end',
        //   symbolSize: 50,
        //   symbolOffset: [0, '-120%'],
        //   data: [{
        //     value: 123,
        //     symbol: pathSymbols.reindeer,
        //     symbolSize: [60, 60]
        //   }, {
        //     value: 60,
        //     symbol: pathSymbols.rocket,
        //     symbolSize: [50, 60]
        //   }, {
        //     value: 25,
        //     symbol: pathSymbols.plane,
        //     symbolSize: [65, 35]
        //   }, {
        //     value: 18,
        //     symbol: pathSymbols.train,
        //     symbolSize: [50, 30]
        //   }]
        // }
      ]
    };



    if (option && typeof option === 'object') {
      index_v1_1.setOption(option);
    }
    window.addEventListener('resize', function() {
      index_v1_1.resize();

    });
  })();
}

if ($('#index_v1_2').length) {
  // index_v1_2
  (function index_v1_2() {
    var index_v1_2 = document.getElementById("index_v1_2");
    var index_v1_2 = echarts.init(index_v1_2, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    var option;

    let xAxisData = [];
    let data1 = [];
    let data2 = [];
    let data3 = [];



    series = [{
      name: '青年',
      data: [100, 115, 165, 107, 67]
    }, {
      name: '職前',
      data: [85, 106, 129, 161, 123]
    }, {
      name: '在職',
      data: [200, 87, 86, 167, 157]
    }, {
      name: '在職',
      data: [0, 0, 0, 0, 0]
    }]

    genFormatter = (series) => {
      return (param) => {
        console.log(param);
        let sum = 0;
        series.forEach(item => {
          sum += item.data[param.dataIndex];
        });
        return sum
      }
    };

    function isLastSeries(index) {
      return index === series.length - 1
    }

    option = {
      // title: {
      //   text: '參加訓練結訓人數',
      //   left: "center",
      //   top: '16px'
      // },
      legend: {
        data: series.map(item => item.name),
        left: 'center',
        bottom: '2.5%'
      },
      tooltip: {},
      xAxis: [{
        type: 'category',
        data: ['北分署', '桃分署', '中分署', '南分署', '高分署'],

      }],
      yAxis: {
        axisLabel: {
          formatter: '{value} 人',
          fontSize: 10,
        }
      },
      grid: {
        bottom: 72,
        left: '20%',
      },
      // series: [{
      //   name: '青年',
      //   type: 'bar',
      //   stack: 'one',
      //   label: {
      //     show: true,
      //     fontSize: 10,
      //     textBorderType: "solid",
      //     textBorderWidth: 2,
      //     textBorderColor: "#fff"
      //   },
      //   emphasis: {
      //     focus: 'series'
      //   },
      //   data: data1
      // }, {
      //   name: '職前',
      //   type: 'bar',
      //   stack: 'one',
      //   label: {
      //     show: true,
      //     fontSize: 10,
      //     textBorderType: "solid",
      //     textBorderWidth: 2,
      //     textBorderColor: "#000"
      //   },
      //   emphasis: {
      //     focus: 'series'
      //   },
      //   data: data2
      // }, {
      //   name: '在職',
      //   type: 'bar',
      //   stack: 'one',
      //   label: {
      //     show: true,
      //     fontSize: 10,
      //     textBorderType: "solid",
      //     textBorderWidth: 2,
      //     textBorderColor: "#fff"
      //   },
      //   emphasis: {
      //     focus: 'series'
      //   },
      //   data: data3
      // }]
      series: series.map((item, index) => Object.assign(item, {
        type: 'bar',
        stack: true,
        itemStyle: {
          borderRadius: ['8', '8', 0, 0]
        },
        tooltip: {
          show: isLastSeries(index) ? false : true,
        },
        label: {
          show: true,
          textBorderType: "solid",
          textBorderWidth: 2,
          textBorderColor: "#fff",
          formatter: isLastSeries(index) ? genFormatter(series) : null,
          fontSize: isLastSeries(index) ? 16 : 12,
          color: 'black',
          position: isLastSeries(index) ? 'top' : 'inside',
        },
        markPoint: {
          data: [{
              tooltip: {
                show: false
              },
              xAxis: 0,
              y: 52,
              name: '北分署',
              symbolSize: 40,
              symbol: 'pin',
              itemStyle: {
                color: "#14927A"
              },
              label: {
                formatter: '北',
                color: "#fff"
              }
            }, {
              tooltip: {
                show: false
              },
              xAxis: 1,
              y: 52,
              name: '桃分署',
              symbolSize: 40,
              symbol: 'pin',
              itemStyle: {
                color: "#FF4B55"
              },
              label: {
                formatter: '桃',
                color: "#fff"
              }
            }, {
              tooltip: {
                show: false
              },
              xAxis: 2,
              y: 52,
              name: '中分署',
              symbolSize: 40,
              symbol: 'pin',
              itemStyle: {
                color: "#5D89B4"
              },
              label: {
                formatter: '中',
                color: "#fff"
              }
            }, {
              tooltip: {
                show: false
              },
              xAxis: 3,
              y: 52,
              name: '南分署',
              symbolSize: 40,
              symbol: 'pin',
              itemStyle: {
                color: "#1F3BB3"
              },
              label: {
                formatter: '南',
                color: "#fff"
              }
            }, {
              tooltip: {
                show: false
              },
              xAxis: 4,
              y: 52,
              name: '高分署',
              symbolSize: 40,
              symbol: 'pin',
              itemStyle: {
                color: "#D4AE40"
              },
              label: {
                formatter: '高',
                color: "#fff"
              }
            },

          ]
        }
      }))
    };



    if (option && typeof option === 'object') {
      index_v1_2.setOption(option);
    }
    window.addEventListener('resize', function() {
      index_v1_2.resize();

    });
  })();
}
if ($('#index_v1_3').length) {
  // index_v1_3
  (function index_v1_3() {
    var index_v1_3 = document.getElementById("index_v1_3");
    var index_v1_3 = echarts.init(index_v1_3, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    var option;

    let xAxisData = [];
    let data1 = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];
    let data5 = [];
    for (let i = 0; i < 5; i++) {
      xAxisData.push('Class' + i);
      data1.push(+(Math.random() * 200).toFixed(0));
      data2.push(+(Math.random() * 500).toFixed(0));
      data3.push(+(Math.random() * 200).toFixed(0));
      data4.push(+(Math.random() * 500).toFixed(0));
      data5.push(+(Math.random() * 10).toFixed(2));
    }
    var emphasisStyle = {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)'
      }
    };

    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      legend: {
        data: ['職前結訓人數', '職前就業人數', '青年結訓人數', '青年就業人數', '就業率'],
        left: 'center',
        bottom: '5%'
      },
      grid: {
        bottom: 96,
        top: 48,
        left: '15%',
        right: '12.5%',
      },
      xAxis: [{
        type: 'category',
        data: ['北分署', '桃分署', '中分署', '南分署', '高分署'],
        axisPointer: {
          type: 'shadow'
        }
      }],
      yAxis: [{
        type: 'value',
        name: '人數',
        min: 0,
        max: 500,
        nameTextStyle: {
          color: '#000',
          align: 'right',

        },
        axisLabel: {
          formatter: '{value} 人',
          fontSize: 10,
        }
      }, {
        type: 'value',
        name: '百分比',
        min: 0,
        max: 100,

        nameTextStyle: {
          color: '#000',
          align: 'center',

        },
        axisLine: {
          lineStyle: {
            color: '#000',
            width: 2,
          }
        },
        axisLabel: {
          formatter: '{value} %',
          fontSize: 10,
        }
      }],
      series: [{
        name: '職前結訓人數',
        type: 'bar',
        stack: 'one',
        itemStyle: {
          borderRadius: ['8', '8', 0, 0]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data1
      }, {
        name: '職前就業人數',
        type: 'bar',
        stack: 'one',
        itemStyle: {
          borderRadius: ['8', '8', 0, 0]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data2
      }, {
        name: '青年結訓人數',
        type: 'bar',
        stack: 'two',
        itemStyle: {
          borderRadius: ['8', '8', 0, 0]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data3
      }, {
        name: '青年就業人數',
        type: 'bar',
        stack: 'two',
        itemStyle: {
          borderRadius: ['8', '8', 0, 0]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data4
      }, {
        name: '就業率',
        type: 'line',
        yAxisIndex: 1,
        markPoint: {
          data: [{
            type: 'max',
            name: 'Max'
          }, ],

          label: {
            textBorderType: "solid",
            textBorderWidth: 2,
            textBorderColor: "#fff"
          },
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' %';
          }
        },
        data: data5
      }]
    };



    if (option && typeof option === 'object') {
      index_v1_3.setOption(option);
    }
    window.addEventListener('resize', function() {
      index_v1_3.resize();

    });
  })();
}

if ($('#index_v2_1').length) {
  // index_v2_1
  (function index_v2_1() {
    var index_v2_1 = document.getElementById("index_v2_1");
    var index_v2_1 = echarts.init(index_v2_1, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    var option;

    let xAxisData = [];
    let data1 = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];
    let data5 = [];
    for (let i = 0; i < 5; i++) {
      xAxisData.push('Class' + i);
      data1.push(+(Math.random() * 200).toFixed(0));
      data2.push(+(Math.random() * 500).toFixed(0));
      data3.push(+(Math.random() * 200).toFixed(0));
      data4.push(+(Math.random() * 500).toFixed(0));
      data5.push(+(Math.random() * 100).toFixed(2));
    }
    var emphasisStyle = {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)'
      }
    };

    option = {
      tooltip: {
        trigger: 'axis',

      },
      legend: {
        data: ['職前結訓人數', '職前就業人數', '青年結訓人數', '青年就業人數', '就業率'],
        left: 'center',
        bottom: '5%'
      },
      grid: {
        bottom: 96,
        top: 48,
        // left: '15%',
        // right: '12.5%',
      },
      xAxis: [{
        type: 'category',
        data: ['北分署', '桃分署', '中分署', '南分署', '高分署'],
        axisPointer: {
          type: 'shadow'
        }
      }],
      yAxis: [{
        type: 'value',
        name: '人數',
        min: 0,
        nameTextStyle: {
          color: tu_white,
          align: 'right',

        },
        axisLabel: {
          formatter: '{value} 人',
          fontSize: 10,
        }
      }, {
        type: 'value',
        name: '百分比',
        min: 0,
        max: 100,
        nameTextStyle: {
          color: tu_white,
          align: 'center',

        },
        axisLine: {
          lineStyle: {
            color: '#000',
            width: 0
          }
        },
        axisLabel: {
          formatter: '{value} %',
          fontSize: 10,
        }
      }],
      series: [{
        name: '職前結訓人數',
        type: 'bar',
        stack: 'one',
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data1
      }, {
        name: '職前就業人數',
        type: 'bar',
        stack: 'one',
        itemStyle: {
          borderRadius: [8, 8, 0, 0]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data2
      }, {
        name: '青年結訓人數',
        type: 'bar',
        stack: 'two',
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data3
      }, {
        name: '青年就業人數',
        type: 'bar',
        stack: 'two',
        itemStyle: {
          borderRadius: [8, 8, 0, 0]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data4
      }, {
        name: '就業率',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        markPoint: {
          data: [{
            type: 'max',
            name: 'Max'
          }, ],

          label: {
            textBorderType: "solid",
            textBorderWidth: 2,
            textBorderColor: "#fff"
          },
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' %';
          }
        },
        data: data5
      }]
    };



    if (option && typeof option === 'object') {
      index_v2_1.setOption(option);
    }
    window.addEventListener('resize', function() {
      index_v2_1.resize();

    });
  })();
}
if ($('#index_v2_2').length) {
  (function index_v1_1() {
    var index_v2_2 = document.getElementById("index_v2_2");
    var index_v2_2 = echarts.init(index_v2_2, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    var option;

    let xAxisData = [];
    let data1 = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];
    for (let i = 0; i < 3; i++) {
      xAxisData.push('Class' + i);
      data1.push(+(Math.random() * 200).toFixed(2));
      data2.push(+(Math.random() * 500).toFixed(2));
      data3.push(+(Math.random() + 100).toFixed(2));
      data4.push(+(Math.random() + 100).toFixed(2));
    }
    var emphasisStyle = {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)'
      }
    };

    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {

        left: 'center',
        bottom: '2.5%'
      },
      grid: {
        left: '4%',
        right: '8%',
        bottom: '10%',
        top: '6%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['青年', '職前', '在職'],
      },
      series: [{
          name: '青年',
          type: 'bar',
          stack: 'total',
          color: '#F3A8A2',
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: [320, 302, 301, 334, 390, 330, 320]
        }, {
          name: '職前',
          type: 'bar',
          stack: 'total',
          color: '#FDCB9E',
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        }, {
          name: '在職',
          type: 'bar',
          stack: 'total',
          color: '#CCEABB',
          itemStyle: {
            borderRadius: [0, 8, 8, 0]
          },
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        // {
        //   name: '委外',
        //   type: 'bar',itemStyle: {
        //   borderRadius: [0 ,8,8,0]
        // },
        //   stack: 'total',
        //   color: '#ACEDFB',
        //   label: {
        //     show: false
        //   },
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   data: [150, 212, 201, 154, 190, 330, 410]
        // },

      ]
    };


    if (option && typeof option === 'object') {
      index_v2_2.setOption(option);
    }
    window.addEventListener('resize', function() {
      index_v2_2.resize();

    });
  })();
}
if ($('#index_v2_3').length) {
  // 青年參訓背景分析 1
  (function employment_youth_chart_inner_1() {
    var index_v2_3 = document.getElementById("index_v2_3");
    var index_v2_3 = echarts.init(index_v2_3, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    var manData = [2200, 2100, 2200, 2400, 2700, 3000, 3000, 1500, 1500, 1400, 1200, 1100, 1000, 270];
    var womanData = [2200, 2100, 2200, 2400, 2700, 3000, 3000, 1500, 1500, 1400, 1200, 1100, 1000, 270];
    var categories = ["15-19", "20-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64", "65-69", "70-74", "75-79", "80+"];
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {

        left: 'center',
        bottom: '2.5%'
      },
      grid: {
        left: '4%',
        right: '8%',
        bottom: '10%',
        top: '6%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: categories
      },
      series: [{
          name: '女生',
          type: 'bar',
          stack: 'total',
          color: '#FD79A8',
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: womanData
        }, {
          name: '男生',
          type: 'bar',
          stack: 'total',
          color: '#7FC3DC',
          itemStyle: {
            borderRadius: [0, 4, 4, 0]
          },
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: manData
        }

      ]
    };
    if (option && typeof option === 'object') {
      index_v2_3.setOption(option);
    }
    window.addEventListener('resize', function() {
      index_v2_3.resize();

    });
  })();
}


if ($('#index_v2_11').length) {
  (function employment_youth_chart_inner_1() {
    var index_v2_11 = document.getElementById("index_v2_11");
    var index_v2_11 = echarts.init(index_v2_11, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    option = {
      series: [{
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        splitNumber: 0,
        itemStyle: {
          color: '#58D9F9',
          shadowColor: 'rgba(0,138,255,0.45)',
          shadowBlur: 10,
          shadowOffsetX: 2,
          shadowOffsetY: 2
        },
        progress: {
          show: true,
          roundCap: true,
          width: 28
        },
        pointer: {
          icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
          length: '75%',
          width: 16,
          offsetCenter: [0, '5%']
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 18
          }
        },
        axisTick: {
          splitNumber: 2,
          lineStyle: {
            width: 0,
            color: '#999'
          }
        },
        splitLine: {
          length: 12,
          lineStyle: {
            width: 0,
            color: '#999'
          }
        },
        axisLabel: {
          distance: 30,
          color: '#999',
          fontSize: 0
        },
        title: {
          show: true
        },
        detail: {
          backgroundColor: tu_white,
          borderColor: '#000',
          borderWidth: 0,
          width: '100%',
          borderRadius: 8,
          offsetCenter: [0, '50%'],
          valueAnimation: true,
          formatter: function(value) {
            return '{value|' + value.toFixed(0) + '}{unit|%}';
          },
          rich: {
            value: {
              fontSize: 28,
              fontWeight: 'bolder',
              // color: '#777'
            },
            unit: {
              fontSize: 20,
              // color: '#999',
              padding: [0, 0, -0, 10]
            }
          }
        },
        data: [{
          value: 87,
          name: "北分署",
          title: {
            offsetCenter: ['0', "92%"],
            fontWeight: 'bolder',
            fontSize: 24
          }
        }]
      }]
    };

    if (option && typeof option === 'object') {
      index_v2_11.setOption(option);
    }
    window.addEventListener('resize', function() {
      index_v2_11.resize();

    });
  })();
}
if ($('#index_v2_12').length) {
  (function employment_youth_chart_inner_1() {
    var index_v2_12 = document.getElementById("index_v2_12");
    var index_v2_12 = echarts.init(index_v2_12, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    option = {
      series: [{
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        splitNumber: 12,
        itemStyle: {
          color: '#EDC373',
          shadowColor: 'rgba(237,195,115,0.45)',
          shadowBlur: 10,
          shadowOffsetX: 2,
          shadowOffsetY: 2
        },
        progress: {
          show: true,
          roundCap: true,
          width: 28
        },
        pointer: {
          icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
          length: '75%',
          width: 16,
          offsetCenter: [0, '5%']
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 18
          }
        },
        axisTick: {
          splitNumber: 2,
          lineStyle: {
            width: 0,
            color: '#999'
          }
        },
        splitLine: {
          length: 12,
          lineStyle: {
            width: 0,
            color: '#999'
          }
        },
        axisLabel: {
          distance: 30,
          color: '#999',
          fontSize: 0
        },
        title: {
          show: true
        },
        detail: {
          backgroundColor: tu_white,
          borderColor: '#000',
          borderWidth: 0,
          width: '100%',

          borderRadius: 8,
          offsetCenter: [0, '50%'],
          valueAnimation: true,
          formatter: function(value) {
            return '{value|' + value.toFixed(0) + '}{unit|%}';
          },
          rich: {
            value: {
              fontSize: 28,
              fontWeight: 'bolder',
              // color: '#777'
            },
            unit: {
              fontSize: 20,
              // color: '#999',
              padding: [0, 0, -0, 10]
            }
          }
        },
        data: [{
          value: 47,
          name: "桃分署",
          title: {
            offsetCenter: ['0', "92%"],
            fontWeight: 'bolder',
            fontSize: 24
          }
        }]
      }]
    };

    if (option && typeof option === 'object') {
      index_v2_12.setOption(option);
    }
    window.addEventListener('resize', function() {
      index_v2_12.resize();

    });
  })();
}

if ($('#index_v2_13').length) {
  (function employment_youth_chart_inner_1() {
    var index_v2_13 = document.getElementById("index_v2_13");
    var index_v2_13 = echarts.init(index_v2_13, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    option = {
      series: [{
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        splitNumber: 12,
        itemStyle: {
          color: '#EDC373',
          shadowColor: 'rgba(237,195,115,0.45)',
          shadowBlur: 10,
          shadowOffsetX: 2,
          shadowOffsetY: 2
        },
        progress: {
          show: true,
          roundCap: true,
          width: 28
        },
        pointer: {
          icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
          length: '75%',
          width: 16,
          offsetCenter: [0, '5%']
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 18
          }
        },
        axisTick: {
          splitNumber: 2,
          lineStyle: {
            width: 0,
            color: '#999'
          }
        },
        splitLine: {
          length: 12,
          lineStyle: {
            width: 0,
            color: '#999'
          }
        },
        axisLabel: {
          distance: 30,
          color: '#999',
          fontSize: 0
        },
        title: {
          show: true
        },
        detail: {
          backgroundColor: tu_white,
          borderColor: '#000',
          borderWidth: 0,
          width: '100%',

          borderRadius: 8,
          offsetCenter: [0, '50%'],
          valueAnimation: true,
          formatter: function(value) {
            return '{value|' + value.toFixed(0) + '}{unit|%}';
          },
          rich: {
            value: {
              fontSize: 28,
              fontWeight: 'bolder',
              // color: '#777'
            },
            unit: {
              fontSize: 20,
              // color: '#999',
              padding: [0, 0, -0, 10]
            }
          }
        },
        data: [{
          value: 35,
          name: "中分署",
          title: {
            offsetCenter: ['0', "92%"],
            fontWeight: 'bolder',
            fontSize: 24
          }
        }]
      }]
    };

    if (option && typeof option === 'object') {
      index_v2_13.setOption(option);
    }
    window.addEventListener('resize', function() {
      index_v2_13.resize();

    });
  })();
}
if ($('#index_v2_14').length) {
  (function employment_youth_chart_inner_1() {
    var index_v2_14 = document.getElementById("index_v2_14");
    var index_v2_14 = echarts.init(index_v2_14, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    option = {
      series: [{
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        splitNumber: 12,
        itemStyle: {
          color: '#FD79A8',
          shadowColor: 'rgba(253,161,168,0.45)',
          shadowBlur: 10,
          shadowOffsetX: 2,
          shadowOffsetY: 2
        },
        progress: {
          show: true,
          roundCap: true,
          width: 28
        },
        pointer: {
          icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
          length: '75%',
          width: 16,
          offsetCenter: [0, '5%']
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 18
          }
        },
        axisTick: {
          splitNumber: 2,
          lineStyle: {
            width: 0,
            color: '#999'
          }
        },
        splitLine: {
          length: 12,
          lineStyle: {
            width: 0,
            color: '#999'
          }
        },
        axisLabel: {
          distance: 30,
          color: '#999',
          fontSize: 0
        },
        title: {
          show: true
        },
        detail: {
          backgroundColor: tu_white,
          borderColor: '#000',
          borderWidth: 0,
          width: '100%',

          borderRadius: 8,
          offsetCenter: [0, '50%'],
          valueAnimation: true,
          formatter: function(value) {
            return '{value|' + value.toFixed(0) + '}{unit|%}';
          },
          rich: {
            value: {
              fontSize: 28,
              fontWeight: 'bolder',
              // color: '#777'
            },
            unit: {
              fontSize: 20,
              // color: '#999',
              padding: [0, 0, -0, 10]
            }
          }
        },
        data: [{
          value: 47,
          name: "南分署",
          title: {
            offsetCenter: ['0', "92%"],
            fontWeight: 'bolder',
            fontSize: 24
          }
        }]
      }]
    };

    if (option && typeof option === 'object') {
      index_v2_14.setOption(option);
    }
    window.addEventListener('resize', function() {
      index_v2_14.resize();

    });
  })();
}
if ($('#index_v2_15').length) {
  (function employment_youth_chart_inner_1() {
    var index_v2_15 = document.getElementById("index_v2_15");
    var index_v2_15 = echarts.init(index_v2_15, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    option = {
      series: [{
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        splitNumber: 12,
        itemStyle: {
          color: '#FD79A8',
          shadowColor: 'rgba(253,161,168,0.45)',
          shadowBlur: 10,
          shadowOffsetX: 2,
          shadowOffsetY: 2
        },
        progress: {
          show: true,
          roundCap: true,
          width: 28
        },
        pointer: {
          icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
          length: '75%',
          width: 16,
          offsetCenter: [0, '5%']
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 18
          }
        },
        axisTick: {
          splitNumber: 2,
          lineStyle: {
            width: 0,
            color: '#999'
          }
        },
        splitLine: {
          length: 12,
          lineStyle: {
            width: 0,
            color: '#999'
          }
        },
        axisLabel: {
          distance: 30,
          color: '#999',
          fontSize: 0
        },
        title: {
          show: true
        },
        detail: {
          backgroundColor: tu_white,
          borderColor: '#000',
          borderWidth: 0,
          width: '100%',

          borderRadius: 8,
          offsetCenter: [0, '50%'],
          valueAnimation: true,
          formatter: function(value) {
            return '{value|' + value.toFixed(0) + '}{unit|%}';
          },
          rich: {
            value: {
              fontSize: 28,
              fontWeight: 'bolder',
              // color: '#777'
            },
            unit: {
              fontSize: 20,
              // color: '#999',
              padding: [0, 0, -0, 10]
            }
          }
        },
        data: [{
          value: 66,
          name: "高分署",
          title: {
            offsetCenter: ['0', "92%"],
            fontWeight: 'bolder',
            fontSize: 24
          }
        }]
      }]
    };

    if (option && typeof option === 'object') {
      index_v2_15.setOption(option);
    }
    window.addEventListener('resize', function() {
      index_v2_15.resize();
    });
  })();
}
