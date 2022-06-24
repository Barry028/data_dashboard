if ($('#employment_youth_chart').length) {
  // 青年參訓背景分析
  (function employment_youth_chart() {
    var dom = document.getElementById("employment_youth_chart");
    var employment_youth_chart = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    option = {
      baseOption: {
        dataZoom: [{
          type: 'inside',
          xAxisIndex: 1,
          start: 0,
          end: 10
        }, {
          type: 'slider',
          filterMode: 'filter', // 设定为 'filter' 从而 X 的窗口变化会影响 Y 的范围。
          top: 0,
          height: 24,
          brushSelect: false,
          backgroundColor: tu_primary_100,
          fillerColor: tu_primary_500,
          borderColor: tu_primary_200,
          // labelFormatter: function(value) {
          //   return 'aaa' + value + 'bbb';
          // },
          dataBackground: {
            lineStyle: {
              color: tu_primary_200,
            },
            areaStyle: {
              color: tu_primary_800,
              opacity: 1
            },
          },
          selectedDataBackground: {
            lineStyle: {
              color: tu_primary_500,
            },
            areaStyle: {
              color: tu_primary_400,
              opacity: 1
            },
          },
          xAxisIndex: 1,
          handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleSize: '120%',
          handleStyle: {
            color: tu_white,
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, 0.12)',
            shadowOffsetX: 2,
            shadowOffsetY: 2,
            borderType: 'solid',
            borderColor: tu_white
          }
        }],
        legend: {
          top: 'bottom'
        },
        grid: {
          left: '4%',
          right: '4%',
          bottom: '12%',
          top: '14%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['北分署', '桃分署', '中分署', '南分署', '高分署'],
          axisLabel: {
            textStyle: {
              color: tu_dark
            }
          },
        }, {
          type: 'category',
          data: date,
          boundaryGap: true,

          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          // min: 'dataMin',
          // max: 'dataMax',

        }],
        yAxis: [{
          type: 'value',
          // name: '人數',
          // offset: 12,
          min: 0,
          max: 1000,
          interval: 200,
          axisLabel: {
            formatter: '{value} 人'
          }
        }, {
          type: 'value',
          // name: '錄取率',
          min: 0,
          max: 100,
          interval: 25,
          axisLabel: {
            formatter: '{value} %'
          }
        }],
        series: [{
          name: '自辦 商業類',
          type: 'bar',
          stack: '分屬自辦',
          color: tu_secondary_500,
          yAxisIndex: 0,
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [222, 122, 102, 324, 200]
        }, {
          name: '自辦 工業類',
          type: 'bar',
          stack: '分屬自辦',
          color: tu_secondary_400,
          yAxisIndex: 0,
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90]
        }, {
          name: '自辦 醫事護理及家事類',
          type: 'bar',
          stack: '分屬自辦',
          color: tu_secondary_300,
          yAxisIndex: 0,
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90]
        }, {
          name: '自辦 藝術類',
          type: 'bar',
          stack: '分屬自辦',
          color: tu_secondary_200,
          yAxisIndex: 0,
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290]
        }, {
          name: '自辦 農業類',
          type: 'bar',
          stack: '分屬自辦',
          color: tu_secondary_100,
          yAxisIndex: 0,
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [150, 232, 201, 154, 190]
        }, {
          name: '委外 商業類',
          type: 'bar',
          stack: '分署委外',
          color: tu_primary_500,
          yAxisIndex: 0,
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390]
        }, {
          name: '委外 工業類',
          type: 'bar',
          stack: '分署委外',
          color: tu_primary_400,
          yAxisIndex: 0,
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90]
        }, {
          name: '委外 醫事護理及家事類',
          type: 'bar',
          stack: '分署委外',
          color: tu_primary_300,
          yAxisIndex: 0,
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90]
        }, {
          name: '委外 藝術類',
          type: 'bar',
          stack: '分署委外',
          color: tu_primary_200,
          yAxisIndex: 0,
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290]
        }, {
          name: '委外 農業類',
          type: 'bar',
          stack: '分署委外',
          color: tu_primary_100,
          yAxisIndex: 0,
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [150, 232, 201, 154, 190]
        }, {
          name: '委外 錄取率',
          data: [88, 66, 55, 48, 70],
          type: 'line',
          color: tu_tertiary_500,
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function(value) {
              return value + ' %';
            }
          },
          smooth: true
        }],
        // tooltip: {
        //   trigger: 'axis',
        //   axisPointer: {
        //     type: 'shadow'
        //   }
        // //    triggerOn: 'none',
        // // transitionDuration: 0,
        // // confine: true,
        // // borderRadius: 4,
        // // borderWidth: 1,
        // },
        tooltip: {
          triggerOn: 'none',
          transitionDuration: 0,
          confine: true,
          borderRadius: 4,
          borderWidth: 1,
          borderColor: '#333',
          backgroundColor: 'rgba(255,255,255,0.9)',
          textStyle: {
            fontSize: 12,
            color: '#333'
          },
        },
      },
    };

    if (option && typeof option === 'object') {
      employment_youth_chart.setOption(option);
    }

    window.addEventListener('resize', function() {
      employment_youth_chart.resize();

    });

  })();
}


// 分署職訓執行情形 自辦
if ($('#before_5').length) {
  var dom = document.getElementById('before_5');
  var myChart = echarts.init(dom, 'wda_data', {
    renderer: 'canvas',
    useDirtyRect: false
  });
  var app = {};

  var option3;

  option3 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        },
      }
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        dataView: {
          show: true,
          readOnly: false
        },
        magicType: {
          show: true,
          type: ['line', 'bar']
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    legend: {
      data: ['報名', '甄試', '開訓', '結訓', '就業', '結訓率', '就業率'],

    },
    xAxis: [{
      type: 'category',
      data: ['一股', '二股', '三股', '四股', '五股', '六股'],
      axisPointer: {
        type: 'shadow'
      }
    }],
    yAxis: [{
      type: 'value',
      name: '人數',
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value} 人'
      }
    }, {
      type: 'value',
      name: '百分比',
      min: 0,
      max: 100,
      interval: 20,
      axisLabel: {
        formatter: '{value} ％'
      }
    }],
    series: [{
      name: '報名',
      type: 'bar',
      tooltip: {
        valueFormatter: function(value) {
          return value + ' 人';
        }
      },
      data: [
        120, 149, 170, 123, 156, 176,
      ]
    }, {
      name: '甄試',
      type: 'bar',
      tooltip: {
        valueFormatter: function(value) {
          return value + ' 人';
        }
      },
      data: [
        116, 149, 167, 120, 150, 170,
      ]
    }, {
      name: '開訓',
      type: 'bar',
      tooltip: {
        valueFormatter: function(value) {
          return value + ' 人';
        }
      },
      data: [
        115, 145, 160, 110, 145, 163,
      ]
    }, {
      name: '結訓',
      type: 'bar',
      tooltip: {
        valueFormatter: function(value) {
          return value + ' 人';
        }
      },
      data: [
        67, 109, 127, 88, 112, 130,
      ]
    }, {
      name: '就業',
      type: 'bar',
      tooltip: {
        valueFormatter: function(value) {
          return value + ' 人';
        }
      },
      data: [
        43, 78, 99, 65, 93, 77,
      ]
    }, {
      name: '結訓率',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function(value) {
          return value + ' ％';
        }
      },
      data: [58, 75, 76, 80, 77, 79]
    }, {
      name: '就業率',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function(value) {
          return value + ' ％';
        }
      },
      data: [64, 71, 77, 73, 83, 59]
    }]
  };

  if (option3 && typeof option3 === 'object') {
    myChart.setOption(option3);
  }

  window.addEventListener('resize', myChart.resize);
}




if ($('#before_1').length) {
  (function before_1() {
    var before_1 = document.getElementById("before_1");
    var before_1 = echarts.init(before_1, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    let data1 = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];
    for (let i = 0; i < 5; i++) {

      data1.push(+(Math.random() * 200).toFixed(0));
      data2.push(+(Math.random() * 500).toFixed(0));
      data3.push(+(Math.random() + 100).toFixed(0));
      data4.push(+(Math.random() + 100).toFixed(0));
    }
    var emphasisStyle = {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)'
      }
    };

    option = {
      title: {
        text: '',
        left: "center",
        top: '0'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: tu_grey_700
          }
        }
      },
      toolbox: {
        feature: {
          dataView: {
            show: true,
            readOnly: false
          },
          magicType: {
            show: true,
            type: ['line', 'bar']
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      legend: {
        data: ['自辦', '委外', '輔助', '錄取率'],
        bottom: '2%'
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

        interval: 50,
        axisLabel: {
          formatter: '{value} 人'
        }
      }, {
        type: 'value',
        name: '％',
        min: 0,
        max: 100,
        interval: 20,
        axisLabel: {
          formatter: '{value} '
        }
      }],
      series: [{
        name: '自辦',
        type: 'bar',
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data1
      }, {
        name: '委外',
        type: 'bar',
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data2
      }, {
        name: '輔助',
        type: 'bar',
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data3
      }, {
        name: '錄取率',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbolSize: 12,
        tooltip: {
          valueFormatter: function(value) {
            return value + ' %';
          }
        },
        data: data4
      }]
    };


    if (option && typeof option === 'object') {
      before_1.setOption(option);
    }
    window.addEventListener('resize', function() {
      before_1.resize();

    });
    before_1.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();

  // $('[data-toggle="tab"]').on('shown.bs.tab', function(e) {
  //   for (var i = 0; i < charts.length; i++) {
  //     charts[i].resize();
  //   }
  // });
}


if ($('#before_4').length) {
  var before_4 = document.getElementById('before_4');
  var before_4 = echarts.init(before_4, 'wda_data', {
    renderer: 'svg',
    useDirtyRect: true,
    locale: 'EN'
  });


  option = {
    title: {
      text: '各班別訓後就業率',
      left: "center",
      top: '0'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '1%',
      right: '1%',
      bottom: '1%',
      top: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['商業類', '工業類', '醫事護理及家事', '藝術類', '農業類']
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      itemStyle: {
        borderRadius: ['8', '8', 0, 0]
      },
    }]
  };


  if (option && typeof option === 'object') {
    before_4.setOption(option);
  }

  window.addEventListener('resize', before_4.resize);
}



if ($('#before_7').length) {
  (function employment_youth_chart() {
    var before_7 = document.getElementById("before_7");
    var before_7 = echarts.init(before_7, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    var option;

    before_7.showLoading();
    before_7.hideLoading();

    function getLevelOption() {
      return [{
        itemStyle: {
          borderColor: '#777',
          borderWidth: 0,
          gapWidth: 1
        },
        upperLabel: {
          show: false
        }
      }, {
        itemStyle: {
          borderColor: '#555',
          borderWidth: 5,
          gapWidth: 1
        },
        emphasis: {
          itemStyle: {
            borderColor: '#ddd'
          }
        }
      }, {
        colorSaturation: [0.35, 0.5],
        itemStyle: {
          borderWidth: 5,
          gapWidth: 1,
          borderColorSaturation: 0.6
        }
      }];
    }
    before_7.setOption(
      (option = {
        title: {
          text: '職前各計畫執行情形',
          left: 'center'
        },
        nodeClick: false,
        roam: false,
        breadcrumb: {
          show: false,
        },
        tooltip: {
          formatter: function(info) {
            var value = info.value;
            var treePathInfo = info.treePathInfo;
            var treePath = [];
            for (var i = 1; i < treePathInfo.length; i++) {
              treePath.push(treePathInfo[i].name);
            }
            return [
              '<div class="tooltip-title">' +
              echarts.format.encodeHTML(treePath.join('/')) +
              '</div>',
              'Disk Usage: ' + echarts.format.addCommas(value) + ' KB'
            ].join('');
          }
        },
        series: [{
          name: '職前各計畫執行情形',
          type: 'treemap',
          nodeClick: false,
          roam: false,
          breadcrumb: {
            show: true,
          },
          label: {
            show: true,
            formatter: '{b}'
          },
          upperLabel: {
            show: true,
            height: 30
          },
          itemStyle: {
            borderColor: tu_white
          },
          // 推動原住民團體辦理原住民地區失業者職業訓練、推動事業單位辦理職前培訓計畫(訓用合一)、高齡者專班(補助)、補助地方政府辦理失業者職前訓練、補助地方政府辦理照顧服務員專班訓練計畫、照顧服務員自訓自用訓練計畫、補助辦理托育人員職業訓練、區域產業據點職業訓練計畫(委外)

          levels: getLevelOption(),
          data: [{
            "value": 566,
            "name": "委外職前訓練計畫",
            "path": "委外職前訓練計畫",
            "children": [{
              "value": 76,
              "name": "北分署",
              "path": "委外職前訓練計畫/北分署",

            }, {
              "value": 92,
              "name": "桃分署",
              "path": "Accounts/Authentication",

            }, {
              "value": 92,
              "name": "中分署",
              "path": "Accounts/Authentication",

            }, {
              "value": 92,
              "name": "南分署",
              "path": "Accounts/Authentication",

            }, {
              "value": 92,
              "name": "高分署",
              "path": "Accounts/Authentication",

            }]
          }, {
            "value": 2222,
            "name": "高齡者專班(委辦)",
            "path": "高齡者專班(委辦)",
            "children": [{
              "value": 176,
              "name": "北分署",
              "path": "委外職前訓練計畫/北分署",

            }, {
              "value": 92,
              "name": "桃分署",
              "path": "Accounts/Authentication",

            }, {
              "value": 192,
              "name": "中分署",
              "path": "Accounts/Authentication",

            }, {
              "value": 92,
              "name": "南分署",
              "path": "Accounts/Authentication",

            }, {
              "value": 124,
              "name": "高分署",
              "path": "Accounts/Authentication",

            }]

          }, {
            "value": 999,
            "name": "陽光專案訓練計畫(委外)",
            "path": "陽光專案訓練計畫(委外)",
            "children": [{
              "value": 76,
              "name": "北分署",
              "path": "陽光專案訓練計畫(委外)/北分署",

            }, {
              "value": 92,
              "name": "桃分署",
              "path": "陽光專案訓練計畫(委外)/桃分署",

            }, {
              "value": 92,
              "name": "中分署",
              "path": "陽光專案訓練計畫(委外)/中分署",

            }, {
              "value": 92,
              "name": "南分署",
              "path": "陽光專案訓練計畫(委外)/南分署",

            }, {
              "value": 92,
              "name": "高分署",
              "path": "陽光專案訓練計畫(委外)/高分署",

            }]
          }, {
            "value": 962,
            "name": "新住民專班",
            "path": "新住民專班",
            "children": [{
              "value": 76,
              "name": "北分署",
              "path": "新住民專班/北分署",

            }, {
              "value": 554,
              "name": "桃分署",
              "path": "新住民專班/桃分署",

            }, {
              "value": 146,
              "name": "中分署",
              "path": "新住民專班/中分署",

            }, {
              "value": 222,
              "name": "南分署",
              "path": "新住民專班/南分署",

            }, {
              "value": 636,
              "name": "高分署",
              "path": "新住民專班/高分署",

            }]
          }, {
            "value": 999,
            "name": "原住民專班訓練",
            "path": "原住民專班訓練",
            "children": [{
              "value": 76,
              "name": "北分署",
              "path": "原住民專班訓練/北分署",

            }, {
              "value": 92,
              "name": "桃分署",
              "path": "原住民專班訓練/桃分署",

            }, {
              "value": 92,
              "name": "中分署",
              "path": "原住民專班訓練/中分署",

            }, {
              "value": 92,
              "name": "南分署",
              "path": "原住民專班訓練/南分署",

            }, {
              "value": 92,
              "name": "高分署",
              "path": "原住民專班訓練/高分署",

            }]
          }, {
            "value": 999,
            "name": "推動原住民團體辦理原住民地區失業者職業訓練",
            "path": "推動原住民團體辦理原住民地區失業者職業訓練",
            "children": [{
              "value": 124,
              "name": "北分署",
              "path": "推動原住民團體辦理原住民地區失業者職業訓練/北分署",

            }, {
              "value": 555,
              "name": "桃分署",
              "path": "推動原住民團體辦理原住民地區失業者職業訓練/桃分署",

            }, {
              "value": 567,
              "name": "中分署",
              "path": "推動原住民團體辦理原住民地區失業者職業訓練/中分署",

            }, {
              "value": 244,
              "name": "南分署",
              "path": "推動原住民團體辦理原住民地區失業者職業訓練/南分署",

            }, {
              "value": 222,
              "name": "高分署",
              "path": "推動原住民團體辦理原住民地區失業者職業訓練/高分署",

            }]
          }, {
            "value": 6263,
            "name": "推動事業單位辦理職前培訓計畫(訓用合一)",
            "path": "推動事業單位辦理職前培訓計畫(訓用合一)",
            "children": [{
              "value": 124,
              "name": "北分署",
              "path": "推動事業單位辦理職前培訓計畫(訓用合一)/北分署",

            }, {
              "value": 555,
              "name": "桃分署",
              "path": "推動事業單位辦理職前培訓計畫(訓用合一)/桃分署",

            }, {
              "value": 567,
              "name": "中分署",
              "path": "推動事業單位辦理職前培訓計畫(訓用合一)/中分署",

            }, {
              "value": 244,
              "name": "南分署",
              "path": "推動事業單位辦理職前培訓計畫(訓用合一)/南分署",

            }, {
              "value": 222,
              "name": "高分署",
              "path": "推動事業單位辦理職前培訓計畫(訓用合一)/高分署",

            }]
          }, {
            "value": 2634,
            "name": "高齡者專班(補助)",
            "path": "高齡者專班(補助)",
            "children": [{
              "value": 124,
              "name": "北分署",
              "path": "高齡者專班(補助)/北分署",

            }, {
              "value": 555,
              "name": "桃分署",
              "path": "高齡者專班(補助)/桃分署",

            }, {
              "value": 567,
              "name": "中分署",
              "path": "高齡者專班(補助)/中分署",

            }, {
              "value": 244,
              "name": "南分署",
              "path": "高齡者專班(補助)/南分署",

            }, {
              "value": 222,
              "name": "高分署",
              "path": "高齡者專班(補助)/高分署",

            }]
          }, {
            "value": 4567,
            "name": "補助地方政府辦理失業者職前訓練",
            "path": "補助地方政府辦理失業者職前訓練",
            "children": [{
              "value": 124,
              "name": "北分署",
              "path": "補助地方政府辦理失業者職前訓練/北分署",

            }, {
              "value": 555,
              "name": "桃分署",
              "path": "補助地方政府辦理失業者職前訓練/桃分署",

            }, {
              "value": 567,
              "name": "中分署",
              "path": "補助地方政府辦理失業者職前訓練/中分署",

            }, {
              "value": 244,
              "name": "南分署",
              "path": "補助地方政府辦理失業者職前訓練/南分署",

            }, {
              "value": 222,
              "name": "高分署",
              "path": "補助地方政府辦理失業者職前訓練/高分署",

            }]
          }, ]
        }]
      })
    );



    if (option && typeof option === 'object') {
      before_7.setOption(option);
    }

    window.addEventListener('resize', function() {
      before_7.resize();

    });
    before_7.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}


// before 19
if ($('#before_19').length) {
  (function before_19() {
    var before_19 = document.getElementById("before_19");
    var before_19 = echarts.init(before_19, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });


    let data1 = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];
    let data5 = [];
    for (let i = 0; i < 22; i++) {
      data1.push(+(Math.random() * 200).toFixed(0));
      data2.push(+(Math.random() * 500).toFixed(0));
      data3.push(+(Math.random() + 240).toFixed(0));
      data4.push(+(Math.random() * 100).toFixed(0));
      data5.push(+(Math.random() * 100).toFixed(0));
    }
    var emphasisStyle = {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.24)'
      }
    };

    option = {
      title: {
        text: '',
        left: "center",
        top: '0'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      grid: {
        left: '1%',
        right: '1%',
        bottom: '1%',
        top: '10%',
        containLabel: true
      },
      toolbox: {
        feature: {
          dataView: {
            show: true,
            readOnly: false
          },
          magicType: {
            show: true,
            type: ['line', 'bar']
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      legend: {
        data: ['訓後就業有關連性', '訓後就業無關聯性', '未就業'],
        top: '0%'
      },
      xAxis: [{
        type: 'category',
        data: category1,
        boundaryGap: false,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 14,
          color: tu_dark,
          interval: 0,
          rotate: 45
        }
      }],
      yAxis: [{
        type: 'value',
        name: '人數',
        nameLocation: 'start',
        min: 0,
        nameTextStyle: {
          color: tu_grey_300,
          align: 'right'
        },
        axisLabel: {
          formatter: '{value} 人'
        }
      }],
      series: [{
        name: '訓後就業有關連性',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        symbol: 'rect',
        symbolSize: 12,
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data1
      }, {
        name: '訓後就業無關聯性',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        symbol: 'roundRect',
        symbolSize: 12,
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data2
      }, {
        name: '未就業',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        symbol: 'circle',
        symbolSize: 12,
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data3
      }]
    };

    if (option && typeof option === 'object') {
      before_19.setOption(option);
    }
    window.addEventListener('resize', function() {
      before_19.resize();

    });
    before_19.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}


if ($('#pt-background').length) {
  var dom = document.getElementById('pt-background');
  var myChart = echarts.init(dom, 'wda_data', {
    renderer: 'svg',
    useDirtyRect: true,
    locale: 'EN'
  });


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
    toolbox: {
      feature: {
        dataView: {
          show: true,
          readOnly: false
        },
        magicType: {
          show: true,
          type: ['line', 'bar']
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    legend: {
      data: ['自辦', '委外', '錄取率']
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
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value} 人'
      }
    }, {
      type: 'value',
      name: '％',
      min: 0,
      max: 100,
      interval: 20,
      axisLabel: {
        formatter: '{value} '
      }
    }],
    series: [{
      name: '自辦',
      type: 'bar',
      tooltip: {
        valueFormatter: function(value) {
          return value + ' 人';
        }
      },
      data: [
        115, 122, 180, 232, 205
      ]
    }, {
      name: '委外',
      type: 'bar',
      tooltip: {
        valueFormatter: function(value) {
          return value + ' 人';
        }
      },
      data: [
        173, 159, 190, 214, 237
      ]
    }, {
      name: '錄取率',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function(value) {
          return value + ' %';
        }
      },
      data: [33, 25, 39, 45, 63]
    }]
  };

  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }

  window.addEventListener('resize', myChart.resize);

  myChart.on('click', function(event) {
    $('#tab-2').show().tab('show');
  });
}




if ($('#youth').length) {
  (function before_1() {
    var youth = document.getElementById("youth");
    var youth = echarts.init(youth, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    var option;

    let xAxisData = [];
    let data1 = [];

    for (let i = 0; i < 3; i++) {
      xAxisData.push('Class' + i);
      data1.push(+(Math.random() * 200).toFixed(2));
    }
    var emphasisStyle = {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)'
      }
    };

    // before
    option = {
      title: {
        text: '',
        left: "center",
        top: '0'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: {
            show: true,
            readOnly: false
          },
          magicType: {
            show: true,
            type: ['line', 'bar']
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      // legend: {
      //   data: ['自辦', '委外', '輔助', '錄取率'],
      //   bottom: '2%'
      // },
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

        axisLabel: {
          formatter: '{value} 人'
        }
      }],
      series: [{
        name: '人數',
        type: 'bar',
        itemStyle: {
          borderRadius: [12, 12, 0, 0]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: [
          15, 22, 30, 23, 25
        ]
      }]
    };


    if (option && typeof option === 'object') {
      youth.setOption(option);
    }
    window.addEventListener('resize', function() {
      youth.resize();

    });
    youth.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });

  })();
}

if ($('#youth_1').length) {
  (function youth_1() {
    var youth_1 = document.getElementById("youth_1");
    var youth_1 = echarts.init(youth_1, 'wda_data', {
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

    // before
    option = {
      title: {
        text: '',
        left: "center",
        top: '0'
      },
      tooltip: {
        trigger: 'axis',

      },
      toolbox: {
        feature: {
          dataView: {
            show: true,
            readOnly: false
          },
          magicType: {
            show: true,
            type: ['line', 'bar']
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      legend: {
        data: plan2,
        bottom: '2%'
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

        interval: 50,
        axisLabel: {
          formatter: '{value} 人'
        }
      }],
      series: [{
        name: plan2[0],
        type: 'bar',
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: [
          15, 22, 30, 23, 25
        ]
      }, {
        name: plan2[1],
        type: 'bar',
        markLine: {
          lineStyle: {
            type: 'dashed'
          },
          data: [
            [{
              type: 'min'
            }, {
              type: 'max'
            }]
          ]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: [
          12, 59, 90, 24, 237
        ]
      }, {
        name: plan2[2],
        type: 'bar',
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: [
          66, 66, 22, 20, 200
        ]
      }, {
        name: plan2[3],
        type: 'bar',
        symbolSize: 12,
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: [33, 25, 39, 45, 63]
      }, {
        name: plan2[4],
        type: 'bar',
        symbol: 'circle',
        symbolSize: 12,
        tooltip: {
          valueFormatter: function(value) {
            return value + '人'
          }
        },
        data: [24, 44, 60, 50, 72]
      }, {
        name: plan2[5],
        type: 'bar',
        symbol: 'circle',
        symbolSize: 12,
        tooltip: {
          valueFormatter: function(value) {
            return value + '人'
          }
        },
        data: [24, 44, 60, 50, 72]
      }]
    };


    if (option && typeof option === 'object') {
      youth_1.setOption(option);
    }
    window.addEventListener('resize', function() {
      youth_1.resize();

    });
    youth_1.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });

  })();
}

if ($('#youth_2').length) {
  // 廠商行業別分布情形
  (function employment_youth_chart() {
    var dom = document.getElementById("youth_2");
    var youth_2 = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    app.configParameters = {
      rotate: {
        min: -90,
        max: 90
      },
      align: {
        options: {
          left: 'left',
          center: 'center',
          right: 'right'
        }
      },
      verticalAlign: {
        options: {
          top: 'top',
          middle: 'middle',
          bottom: 'bottom'
        }
      },
      position: {
        options: posList.reduce(function(map, pos) {
          map[pos] = pos;
          return map;
        }, {})
      },
      distance: {
        min: 0,
        max: 100
      }
    };
    app.config = {
      rotate: 90,
      align: 'left',
      verticalAlign: 'middle',
      position: 'insideBottom',
      distance: 15,
      onChange: function() {
        const labelOption = {
          rotate: app.config.rotate,
          align: app.config.align,
          verticalAlign: app.config.verticalAlign,
          position: app.config.position,
          distance: app.config.distance
        };
        myChart.setOption({
          series: [{
            label: labelOption
          }, {
            label: labelOption
          }, {
            label: labelOption
          }, {
            label: labelOption
          }]
        });
      }
    };
    var labelOption = {
      show: true,
      position: app.config.position,
      distance: app.config.distance,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      rotate: app.config.rotate,
      formatter: '{name|{a}}',
      fontSize: 10,
      rich: {
        name: {}
      }
    };
    let data1 = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];
    let data5 = [];
    for (let i = 0; i < 24; i++) {

      data1.push(+(Math.random() * 360).toFixed(0));
      data2.push(+(Math.random() * 500).toFixed(0));
      data3.push(+(Math.random() * 240).toFixed(0));
      data4.push(+(Math.random() * 500).toFixed(0));
      data5.push(+(Math.random() * 250).toFixed(0));
    }
    series = [{
      name: '北分署',
      data: data1
    }, {
      name: '桃分署',
      data: data2
    }, {
      name: '中分署',
      data: data3
    }, {
      name: '南分署',
      data: data4
    }, {
      name: '高分署',
      data: data5
    }, {
      name: '南分署',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
      baseOption: {
        legend: {
          top: 'bottom'
        },
        grid: {
          left: '4%',
          right: '4%',
          bottom: '12%',
          top: '14%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: category,
          axisLabel: {
            interval: 0,
            rotate: 40,
            textStyle: {
              color: tu_dark
            }
          },
        }],
        yAxis: [{
          type: 'value',
          min: 0,


          axisLabel: {
            formatter: '{value} 家'
          }
        }],

        series: series.map((item, index) => Object.assign(item, {
          type: 'bar',
          stack: true,
          tooltip: {
            show: isLastSeries(index) ? false : true,
          },
          itemStyle: {
            borderRadius: ['8', '8', 0, 0]
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
          // markPoint: {
          //   data: [{
          //       tooltip: {
          //         show: false
          //       },
          //       xAxis: 0,
          //       y: 52,
          //       name: '北分署',
          //       symbolSize: 40,
          //       symbol: 'pin',
          //       itemStyle: {
          //         color: "#14927A"
          //       },
          //       label: {
          //         formatter: '北',
          //         color: "#fff"
          //       }
          //     }, {
          //       tooltip: {
          //         show: false
          //       },
          //       xAxis: 1,
          //       y: 52,
          //       name: '桃分署',
          //       symbolSize: 40,
          //       symbol: 'pin',
          //       itemStyle: {
          //         color: "#FF4B55"
          //       },
          //       label: {
          //         formatter: '桃',
          //         color: "#fff"
          //       }
          //     }, {
          //       tooltip: {
          //         show: false
          //       },
          //       xAxis: 2,
          //       y: 52,
          //       name: '中分署',
          //       symbolSize: 40,
          //       symbol: 'pin',
          //       itemStyle: {
          //         color: "#5D89B4"
          //       },
          //       label: {
          //         formatter: '中',
          //         color: "#fff"
          //       }
          //     }, {
          //       tooltip: {
          //         show: false
          //       },
          //       xAxis: 3,
          //       y: 52,
          //       name: '南分署',
          //       symbolSize: 40,
          //       symbol: 'pin',
          //       itemStyle: {
          //         color: "#1F3BB3"
          //       },
          //       label: {
          //         formatter: '南',
          //         color: "#fff"
          //       }
          //     }, {
          //       tooltip: {
          //         show: false
          //       },
          //       xAxis: 4,
          //       y: 52,
          //       name: '高分署',
          //       symbolSize: 40,
          //       symbol: 'pin',
          //       itemStyle: {
          //         color: "#D4AE40"
          //       },
          //       label: {
          //         formatter: '高',
          //         color: "#fff"
          //       }
          //     },
          //   ]
          // }
        })),
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },

      },
    };

    if (option && typeof option === 'object') {
      youth_2.setOption(option);
    }

    window.addEventListener('resize', function() {
      youth_2.resize();

    });
    youth_2.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}

if ($('#youth_2_1').length) {
  // 廠商行業別分布情形
  (function youth_2_1() {
    var dom = document.getElementById("youth_2_1");
    var youth_2_1 = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });


    let data1 = [];
    let data2 = [];
    for (let i = 0; i < 24; i++) {

      data1.push(+(Math.random() * 360).toFixed(0));
      data2.push(+(Math.random() * 500).toFixed(0));

    }
    series = [{
      name: '雙軌',
      data: data1
    }, {
      name: '青艦',
      data: data2
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
      baseOption: {
        title: {
          text: '分署 - 農、林、漁、牧業 - 分布情形',
          left: "center",
          top: '0'
        },
        legend: {
          top: 'bottom'
        },
        grid: {
          left: '4%',
          right: '4%',
          bottom: '12%',
          top: '14%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: branch,
          axisLabel: {
            interval: 0,
            rotate: 40,
            textStyle: {
              color: tu_dark
            }
          },
        }],
        yAxis: [{
          type: 'value',
          min: 0,


          axisLabel: {
            formatter: '{value} 家'
          }
        }],

        series: series.map((item, index) => Object.assign(item, {
          type: 'bar',

          tooltip: {
            show: isLastSeries(index) ? false : true,
          },
          itemStyle: {
            borderRadius: ['8', '8', 0, 0]
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

        })),
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },

      },
    };

    if (option && typeof option === 'object') {
      youth_2_1.setOption(option);
    }

    window.addEventListener('resize', function() {
      youth_2_1.resize();

    });

  })();
}

if ($('#youth_2_2').length) {
  // 廠商行業別分布情形
  (function youth_2_1() {
    var dom = document.getElementById("youth_2_2");
    var youth_2_2 = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    let data1 = [];
    let data2 = [];
    for (let i = 0; i < 22; i++) {

      data1.push(+(Math.random() * 360).toFixed(0));
      data2.push(+(Math.random() * 500).toFixed(0));

    }

    option = {
      title: {
        text: '農、林、漁、牧業 - 別各縣市分部占比',
        // subtext: 7789,
        textStyle: {
          fontSize: 20,
          // align: 'center'
        },
        // subtextStyle: {
        //   fontSize: 30,
        //   color: ['#ff9d19']
        // },
        x: 'center',
        y: 'top',
      },
      grid: {
        bottom: 24,
        left: 100,
        right: '10%'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: data.legendData
      },
      series: [{
        radius: ['30%', '61%'],
        center: ['50%', '50%'],
        type: 'pie',
        label: {
          normal: {
            show: true,
            formatter: '{b} ({d}%)',

            textStyle: {
              fontSize: 12,

            },
            position: 'outside'
          },
          emphasis: {
            show: true
          }
        },
        labelLine: {
          normal: {
            show: true,
            length: 30,
            length2: 55
          },
          emphasis: {
            show: true
          }
        },
        data: data.seriesData,
      }, {
        radius: ['30%', '34%'],
        center: ['50%', '50%'],
        type: 'pie',
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        animation: false,
        tooltip: {
          show: false
        },
        data: [{
          value: 1,
          itemStyle: {
            color: "rgba(250,250,250,0.12)",
          },
        }],
      }, {
        name: '外',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        center: ['50%', '50%'],
        radius: ['65%', '65%'],
        label: {
          normal: {
            show: false
          }
        },
        data: [{
          value: 9,
          name: '',
          itemStyle: {
            normal: {
              borderWidth: 2,
              borderColor: "rgba(0,0,0,0.12)",
            }
          }
        }]
      }, ]
    };


    if (option && typeof option === 'object') {
      youth_2_2.setOption(option);
    }

    window.addEventListener('resize', function() {
      youth_2_2.resize();

    });

  })();
}
