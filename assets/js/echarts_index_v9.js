// Index V7
if ($('#all_branch').length) {
  (function all_branch() {
    var dom = document.getElementById("all_branch");
    var all_branch = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    var data = [];


    for (var i = 0; i < 5; i++) {
      min = 100;
      max = 1000;
      data.push(+(Math.random() * (max - min + 1) + min).toFixed(0));
    }

    option = {
      title: {
        text: '',
      },
      grid: {
        left: '0%',
        right: '4%',
        bottom: '4%',
        top: '16%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: tu_grey_400
          }
        },
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
      xAxis: [{
        type: 'category',
        data: branch,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 15,
          fontWeight: 'bolder',
          interval: 0,
          top: '12',
          color: tu_dark,
          padding: [8, 0, 0, 8]
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
          formatter: '{value} 人',
        }
      }],
      series: [{
        name: '人數',
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(154, 160, 168, 0.06)',
          borderRadius: [8, 8, 0, 0]
        },
        itemStyle: {
          normal: {
            borderRadius: [0, 0, 0, 0],
            color: function(params) {
              return color_def[params.dataIndex]
            }
          },
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.12)',
        },
        label: {
          show: true,
          formatter: '{b}',
          fontWeight: 'bolder',
          textBorderColor: 'rgba(255,255,255,0.24)',
          textBorderWidth: 4,
        },
        data: data,
      }, {
        name: '上方標籤',
        type: 'pictorialBar',
        silent: true,
        symbolSize: ['100%', 10],
        symbolOffset: [0, -5],
        symbolPosition: 'end',
        z: 12,
        itemStyle: {
          normal: {
            color: function(params) {
              return color_def_darker[params.dataIndex]
            }
          },
        },
        label: {
          normal: {
            show: true,
            position: 'top',
            lineHeight: 30,
            width: 80,
            height: 30,
            backgroundColor: 'inherit',
            borderRadius: 200,
            position: ['-16', '-54'],
            distance: 0,
            formatter: [
              '    {d|●}',
              ' {a|{c}人}     \n',
              '    {b|}'
            ].join(' '),
            rich: {
              d: {
                color: 'inherit',
                textBorderColor: tu_white,
                textBorderWidth: 2,
                textShadowColor: tu_white,
                textShadowBlur: 2,
              },
              a: {
                color: tu_white,
                align: 'center',
                textBorderColor: tu_grey_300,
                textBorderWidth: 2,
                textShadowColor: tu_grey_200,
                textShadowBlur: 2,
              },
              b: {
                width: 2,
                height: 30,
                borderWidth: 2,
                borderColor: 'inherit',
                align: 'left'
              },
            }
          }
        },
        color: function(params) {
          return color_def[params.dataIndex]
        },
        data: data,
        tooltip: {
          show: false,
        }
      }, ]
    };

    if (option && typeof option === 'object') {
      all_branch.setOption(option);
    }
    window.addEventListener('resize', function() {
      all_branch.resize();
    });
    all_branch.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}
if ($('#choose_branch').length) {
  (function all_branch() {
    var dom = document.getElementById("choose_branch");
    var choose_branch = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    var data = [{
      value: 200,
      name: '自辦',
    }, {
      value: 110,
      name: '委外',
    }, {
      value: 150,
      name: '輔助',
    }];
    let datum = data.map((v) => v.value);
    let data1 = data[0].value + data[1].value + data[2].value;
    let baseData = [];
    for (var i = 0; i < data.length; i++) {
      baseData.push({
        value: data[i].value,
        name: data[i].name,
        itemStyle: {
          normal: {
            borderWidth: 30,
            shadowBlur: 20,
            borderColor: color_def[i],
            borderRadius: 20,
          },
        },
      });
    }
    option = {
      title: {
        text: '北分署課程分佈',
        textStyle: {
          rich: {
            a: {
              fontSize: 20,
              fontWeight: 'bolder',
            },
            b: {
              fontSize: 12,
              color: 'gray',
            },
          },
        }, // top: '4%',
        // left: '4%',
      },
      color: color_def,
      tooltip: {
        show: true,
        trigger: 'item',
        formatter: '{b} <br/>占比：{d}%',
      },
      legend: {
        orient: 'horizontal',
        right: 'center',
        bottom: '0',
        width: '100%',
        // itemGap: 50,
        // itemWidth: 14,
        formatter: function(name) {
          for (var i = 0; arguments.length; i++) {
            if (name == '委外') {
              i = 1;
            } else if (name == '輔助') {
              i = 2;
            }
            return `{a|${name}}  {b${i}|${datum[i]}}  {c|門}`;
          }
        },
        textStyle: {
          rich: (function() {
            return {
              b0: {
                fontSize: 16,
                fontWeight: 'bold',
                color: color_def[0],
              },
              b1: {
                fontSize: 16,
                fontWeight: 'bold',
                color: color_def[1],
              },
              b2: {
                fontSize: 16,
                fontWeight: 'bold',
                color: color_def[2],
              },

            };
          })(),
        },
      },
      grid: {
        top: '10%',
        left: 'center',
        bottom: '20%',
        width: '80%',
        height: '90%',
      },
      series: [{
        zlevel: 1,
        name: '北分署課程統計',
        type: 'pie',
        selectedMode: 'single',
        radius: ['60%', '70%'],
        center: ['50%', '50%'], //圆心的位置
        startAngle: 60,
        label: {
          normal: {
            position: 'inside',
            show: true,
            color: tu_white,
            textBorderWidth: 4,
            textBorderColor: 'rgba(0,0,0,.24)',
            fontSize: 16,
            formatter: function(params) {
              return params.percent.toFixed() + '%';
            },
            rich: {
              b: {
                fontSize: 16,
                lineHeight: 30,
                color: tu_white,
              },
            },
          },
        },
        itemStyle: {
          normal: {
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 10,
          },
        },
        data: baseData,
      }, {
        name: '',
        type: 'pie',
        selectedMode: 'single',
        radius: ['60%', '70%'],
        center: ['50%', '50%'], //圆心的位置
        startAngle: 60,
        hoverAnimation: false,
        data: [{
          value: data1,
          name: '',
          label: {
            normal: {
              show: true,
              formatter: '{c|{c}門課程} \n {a|本月\n課程總數}',
              rich: {
                c: {
                  color: tu_dark,
                  fontSize: 24,
                  fontWeight: 'bold',
                  lineHeight: 2,
                  align: 'center',
                  padding: [30, 0, 30, 0],
                },
                a: {
                  align: 'center',
                  color: tu_warning_900,
                  fontSize: 16,
                  padding: [16, 0, -10, -10],
                },
              },
              position: 'center',
            },
          },
        }],
        /*          tooltip: {
                    show: false
                  }*/
      }, ],
    };


    if (option && typeof option === 'object') {
      choose_branch.setOption(option);
    }
    window.addEventListener('resize', function() {
      choose_branch.resize();
    });
  })();
}

// index v8 區域訓練資源運用情形
if ($('#index_v8_area').length) {
  (function index_v8_area() {
    var dom = document.getElementById("index_v8_area");
    var index_v8_area = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    let data1 = [];
    let data2 = [];
    let data1_n = [];
    let data2_n = [];

    for (let i = 0; i < 10; i++) {
      data1.push(+Math.floor((Math.random(180) * 200).toFixed(0)) + 100);
      data2.push(+Math.floor((Math.random(80) * 500).toFixed(0)) + 20);
    }

    function randomSort(arr, newArr) {
      // 如果原陣列arr的length值等於1時，原陣列只有一個值，其鍵值為0
      // 同時將這個值push到新陣列newArr中
      if (arr.length == 1) {
        newArr.push(arr[0]);
        return newArr.sort(); // 相當於遞迴退出
      }
      // 在原陣列length基礎上取出一個隨機數
      var random = Math.ceil(Math.random() * arr.length) - 1;
      // 將原陣列中的隨機一個值push到新陣列newArr中
      newArr.push(arr[random]);
      // 對應刪除原陣列arr的對應陣列項
      arr.splice(random, 1);
      newArr.sort();
      return randomSort(arr, newArr.sort());
    }


    randomSort(data1, data1_n);
    randomSort(data2, data2_n);



    option = {
      title: {
        text: '',
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '10%',
        top: '12%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: tu_grey_400
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
        bottom: '0%'
      },
      xAxis: [{
        type: 'category',
        data: category1_1,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 12,
          fontWeight: 'bolder',
          interval: 0,
          rotate: 45,
          top: '12',
          color: tu_dark,
          padding: [8, 0, 0, 8]
        }
      }],
      yAxis: [{
        type: 'value',
        name: '求才開缺數',
        nameLocation: 'start',
        min: 0,
        // interval: 50,
        nameTextStyle: {
          color: tu_grey_300,
          align: 'right'
        },
        axisLabel: {
          formatter: '{value} 人'
        }
      }, {
        type: 'value',
        name: '職訓課程學員數',
        nameLocation: 'start',
        min: 0,
        max: 100,
        nameTextStyle: {
          color: tu_grey_500,
          align: 'left'
        },
        interval: 20,
        axisLabel: {
          formatter: '{value} %'
        }
      }],
      series: [{
        name: '求才開缺數',
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(154, 160, 168, 0.12)',
          borderRadius: [0, 8, 8, 0]
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.24)',
          borderRadius: [8, 8, 0, 0]
        },
        // label: {
        //   normal: {
        //     show: true,
        //     position: 'top',
        //     lineHeight: 30,
        //     width: 80,
        //     height: 30,
        //     backgroundColor: 'rgba(128,196,220,.66)',
        //     borderRadius: 200,
        //     position: ['-16', '-60'],
        //     distance: 0,
        //     formatter: [
        //       '    {d|●}',
        //       ' {a|{c}人}     \n',
        //       '    {b|}'
        //     ].join(' '),
        //     rich: {
        //       d: {
        //         color: '#80C4DC',
        //         textBorderColor: tu_white,
        //         textBorderWidth: 2,
        //         textShadowColor: tu_white,
        //         textShadowBlur: 2,
        //       },
        //       a: {
        //         color: tu_white,
        //         align: 'center',
        //         textBorderColor: tu_grey_200,
        //         textBorderWidth: 2,
        //         textShadowColor: tu_grey_200,
        //         textShadowBlur: 0,
        //       },
        //       b: {
        //         width: 1,
        //         height: 30,
        //         borderWidth: 1,
        //         borderColor: 'rgba(128,196,220,.66)',
        //         align: 'left'
        //       },
        //     }
        //   }
        // },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data1_n
      }, {
        name: '職訓課程學員數',
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(154, 160, 168, 0.12)',
          borderRadius: [0, 8, 8, 0]
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.24)',
          borderRadius: [8, 8, 0, 0],
        },
        // label: {
        //   normal: {
        //     show: true,
        //     position: 'top',
        //     lineHeight: 30,
        //     width: 80,
        //     height: 30,
        //     backgroundColor: 'rgba(31,59,179,.66)',
        //     borderRadius: 200,
        //     position: ['-16', '-60'],
        //     distance: 0,
        //     formatter: [
        //       '    {d|●}',
        //       ' {a|{c}人}     \n',
        //       '    {b|}'
        //     ].join(' '),
        //     rich: {
        //       d: {
        //         color: '#1F3BB3',
        //         textBorderColor: tu_white,
        //         textBorderWidth: 2,
        //         textShadowColor: tu_white,
        //         textShadowBlur: 2,
        //       },
        //       a: {
        //         color: tu_white,
        //         align: 'center',
        //         textBorderColor: tu_grey_200,
        //         textBorderWidth: 2,
        //         textShadowColor: tu_grey_200,
        //         textShadowBlur: 0,
        //       },
        //       b: {
        //         width: 1,
        //         height: 30,
        //         borderWidth: 1,
        //         borderColor: 'rgba(31,59,179,.66)',
        //         align: 'left'
        //       },
        //     }
        //   }
        // },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data2_n
      }]
    };

    if (option && typeof option === 'object') {
      index_v8_area.setOption(option, true);
    }

    window.addEventListener('resize', function() {
      index_v8_area.resize();
    });

    index_v8_area.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });

  })();
}
// index v8 區域訓練資源運用情形 職類別各縣市職缺數與職訓量能供給情形
if ($('#index_v8_area_citys').length) {
  (function index_v8_area_citys() {
    var dom = document.getElementById("index_v8_area_citys");
    var index_v8_area_citys = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    let data1 = [];
    let data2 = [];
    let data1_n = [];
    let data2_n = [];

    for (let i = 0; i < 22; i++) {
      data1.push(+Math.floor((Math.random(180) * 200).toFixed(0)) + 100);
      data2.push(+Math.floor((Math.random(80) * 500).toFixed(0)) + 20);
    }

    function randomSort(arr, newArr) {
      // 如果原陣列arr的length值等於1時，原陣列只有一個值，其鍵值為0
      // 同時將這個值push到新陣列newArr中
      if (arr.length == 1) {
        newArr.push(arr[0]);
        return newArr.sort(); // 相當於遞迴退出
      }
      // 在原陣列length基礎上取出一個隨機數
      var random = Math.ceil(Math.random() * arr.length) - 1;
      // 將原陣列中的隨機一個值push到新陣列newArr中
      newArr.push(arr[random]);
      // 對應刪除原陣列arr的對應陣列項
      arr.splice(random, 1);
      newArr.sort();
      return randomSort(arr, newArr.sort());
    }
    randomSort(data1, data1_n);
    randomSort(data2, data2_n);

    option = {
      title: {
        text: '01:經營／行政／總務 - XXX 職類別各縣市職缺數與職訓量能供給情形',
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '10%',
        top: '12%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: tu_grey_400
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
        bottom: '0%'
      },
      xAxis: [{
        type: 'category',
        data: city,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 12,
          fontWeight: 'bolder',
          interval: 0,
          rotate: 45,
          top: '12',
          color: tu_dark,
          padding: [8, 0, 0, 8]
        }
      }],
      yAxis: [{
        type: 'value',
        name: '求才開缺數',
        nameLocation: 'start',
        min: 0,
        // interval: 50,
        nameTextStyle: {
          color: tu_grey_300,
          align: 'right'
        },
        axisLabel: {
          formatter: '{value} 人'
        }
      }, {
        type: 'value',
        name: '職訓課程學員數',
        nameLocation: 'start',
        min: 0,
        max: 100,
        nameTextStyle: {
          color: tu_grey_500,
          align: 'left'
        },
        interval: 20,
        axisLabel: {
          formatter: '{value} %'
        }
      }],
      series: [{
        name: '求才開缺數',
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(154, 160, 168, 0.12)',
          borderRadius: [0, 8, 8, 0]
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.24)',
          borderRadius: [8, 8, 0, 0],
          color: '#ff9e9e'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data1_n
      }, {
        name: '職訓課程學員數',
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(154, 160, 168, 0.12)',
          borderRadius: [0, 8, 8, 0]
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.24)',
          borderRadius: [8, 8, 0, 0],
          color: '#89da8b'
        },

        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data2_n
      }]
    };

    if (option && typeof option === 'object') {
      index_v8_area_citys.setOption(option, true);
    }

    window.addEventListener('resize', function() {
      index_v8_area_citys.resize();
    });
  })();
}