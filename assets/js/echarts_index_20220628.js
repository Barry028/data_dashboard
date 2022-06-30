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

// index v9 訊後就業情形 
if ($('#index_training_capacity').length) {
  (function index_training_capacity() {
    var dom = document.getElementById("index_training_capacity");
    var index_training_capacity = echarts.init(dom, 'wda_data', {
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
        name: '求職數',
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(154, 160, 168, 0.12)',
          borderRadius: [0, 8, 8, 0]
        },
        itemStyle: {
          color: '#55bef9',
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.24)',
          borderRadius: [8, 8, 0, 0]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data1_n
      }, {
        name: '職訓課程預訓數',
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(154, 160, 168, 0.12)',
          borderRadius: [0, 8, 8, 0]
        },
        itemStyle: {
          color: '#ffb457',
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.24)',
          borderRadius: [8, 8, 0, 0],
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
      index_training_capacity.setOption(option, true);
    }

    window.addEventListener('resize', function() {
      index_training_capacity.resize();
    });

    index_training_capacity.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });

  })();
}

// index v9 XXX職類別各縣市求職數與職訓量能供給情形
if ($('#index_training_capacity_citys').length) {
  (function index_training_capacity_citys() {
    var dom = document.getElementById("index_training_capacity_citys");
    var index_training_capacity_citys = echarts.init(dom, 'wda_data', {
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
        text: '01:經營／行政／總務 - 各縣市求職數與職訓量能供給情形',
      },
      grid: {
        left: '0%',
        right: '0%',
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
        name: '求職數',
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
        name: '職訓課程預訓數',
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
        name: '求職數',
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
          color: '#969faf'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data1_n
      }, {
        name: '職訓課程預訓數',
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
      index_training_capacity_citys.setOption(option, true);
    }

    window.addEventListener('resize', function() {
      index_training_capacity_citys.resize();
    });
  })();
}


// index v10 訓後就業情形
if ($('#index_training_employment').length) {
  (function index_training_employment() {
    var chartDom = document.getElementById('index_training_employment');
    var index_training_employment = echarts.init(chartDom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    option = {
      title: {
        text: '',
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '10%',
        top: '12%',
        containLabel: true
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        showDelay: 0,
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['結訓人數', '就業總數', '訓後就業數之佔比'],
        icon: 'roundRect',
        bottom: '0'
      },
      xAxis: {
        boundaryGap: true,

        data: branch,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 16,
          fontWeight: 'bolder',
          color: tu_dark,
          padding: [8, 0, 0, 0],
          interval: 0,
          rotate: 0,
        }
      },
      yAxis: [{
        type: 'value',
        name: '人數',
        nameLocation: 'start',
        min: 0,
        interval: 50,
        nameTextStyle: {
          color: tu_grey_300,
          align: 'right'
        },
        axisLabel: {
          formatter: '{value} 人'
        }
      }, {
        type: 'value',
        name: '百分比',
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
        name: '結訓人數',
        type: 'bar',
        silent: true,
        barWidth: 60,
        itemStyle: {
          normal: {
            color: '#edc948',
            align: 'center',
            borderRadius: [8, 8, 0, 0]
          }
        },
        stack: 'total',
        data: [180, 176, 264, 200, 192]
      }, {
        name: '就業總數',
        type: 'bar',
        silent: true,
        barGap: '-82.5%',
        barWidth: 40,
        // barCategoryGap: 0,
        z: 10,
        itemStyle: {
          normal: {
            color: '#332a7c',
            borderRadius: [8, 8, 0, 0]
          }
        },
        data: [80, 94, 97, 78, 68]
      }, {
        name: '訓後就業數之佔比',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 12,
        itemStyle: {
          normal: {
            color: '#1657ff',
          }
        },
        markPoint: {
          symbolSize: 72,
          data: [{
            type: 'max',
            name: 'Max'
          }, ],

          label: {
            fontSize: 14,
            fontWeight: 'bolder',
            textBorderType: "solid",
            textBorderWidth: 2,
            textBorderColor: tu_info_300,
            textShadowColor: tu_info_500,
            textShadowBlur: 10,
            formatter: '{c}%'
          },
        },
        markLine: {
          symbol: ['circle', 'triangle'],
          label: {
            position: "insideEndTop",
            backgroundColor: "#ff4b55",
            borderRadius: 4,
            color: tu_white,
            fontSize: 12,
            padding: [4, 2],
            formatter: "前一個年度的平均就業率",
          },
          data: [{
            silent: false,
            lineStyle: {
              type: "dashed",
              width: 2,
              color: '#ff4b55',
            },
            yAxis: 85,
          }]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' %';
          }
        },
        data: [95, 90, 90, 90, 85],
      }]
    };
    if (option && typeof option === 'object') {
      index_training_employment.setOption(option);
    }

    window.addEventListener('resize', function() {
      index_training_employment.resize();
    });
    index_training_employment.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}



// index v10 訓後就業情形 職前訓練訓後就業情形－職前
if ($('#index_training_employment_before').length) {
  (function index_training_employment_before() {
    var chartDom = document.getElementById('index_training_employment_before');
    var index_training_employment_before = echarts.init(chartDom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    let data1 = [];
    let data2 = [];
    let data3 = [];
    for (let i = 0; i < 6; i++) {
      data1.push(+Math.floor((Math.random(180) * 500).toFixed(0)) + 200);
      data2.push(+Math.floor((Math.random(0) * 200).toFixed(0)) + 0);
      data3.push(+(Math.random() * 100).toFixed(0));
    }
    option = {
      title: {
        text: 'XX分署 - 職前訓練訓後就業情形',
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '10%',
        top: '12%',
        containLabel: true
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        showDelay: 0,
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['結訓人數', '訓後就業人數', '訓後就業率'],
        icon: 'roundRect',
        bottom: '0'
      },
      xAxis: {
        boundaryGap: true,
        data: category3,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 16,
          fontWeight: 'bolder',
          color: tu_dark,
          padding: [8, 0, 0, 0],
          interval: 0,
          rotate: 0,
        }
      },
      yAxis: [{
        type: 'value',
        name: '人數',
        nameLocation: 'start',
        min: 0,
        interval: 50,
        nameTextStyle: {
          color: tu_grey_300,
          align: 'right'
        },
        axisLabel: {
          formatter: '{value} 人'
        }
      }, {
        type: 'value',
        name: '百分比',
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
        name: '結訓人數',
        type: 'bar',
        silent: true,
        barWidth: 40,
        itemStyle: {
          normal: {
            color: '#a3ccc9',
            align: 'center',
            borderRadius: [8, 8, 0, 0]
          }
        },
        stack: 'total',
        data: data1
      }, {
        name: '訓後就業人數',
        type: 'bar',
        silent: true,
        barGap: '-75%',
        barWidth: 20,
        // barCategoryGap: 0,
        z: 10,
        itemStyle: {
          normal: {
            color: '#00589b',
            borderRadius: [8, 8, 0, 0]
          }
        },
        data: data2
      }, {
        name: '訓後就業率',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 12,
        itemStyle: {
          normal: {
            color: '#302c4d',
          }
        },
        markPoint: {
          symbolSize: 72,
          data: [{
            type: 'max',
            name: 'Max'
          }, ],

          label: {
            fontSize: 14,
            fontWeight: 'bolder',
            textBorderType: "solid",
            textBorderWidth: 1,
            textBorderColor: tu_white,
            textShadowColor: tu_white,
            textShadowBlur: 1,
            formatter: '{c}%'
          },
        },

        tooltip: {
          valueFormatter: function(value) {
            return value + ' %';
          }
        },
        data: data3
      }]
    };
    if (option && typeof option === 'object') {
      index_training_employment_before.setOption(option);
    }

    window.addEventListener('resize', function() {
      index_training_employment_before.resize();
    });

  })();
}


// index v10 訓後就業情形 職前訓練訓後就業情形 － 青年
if ($('#index_training_employment_youth').length) {
  (function index_training_employment_youth() {
    var chartDom = document.getElementById('index_training_employment_youth');
    var index_training_employment_youth = echarts.init(chartDom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    let data1 = [];
    let data2 = [];
    let data3 = [];
    for (let i = 0; i < 6; i++) {
      data1.push(+Math.floor((Math.random(180) * 500).toFixed(0)) + 200);
      data2.push(+Math.floor((Math.random(0) * 200).toFixed(0)) + 0);
      data3.push(+(Math.random() * 100).toFixed(0));
    }
    option = {
      title: {
        text: 'XX分署 - 青年訓練計畫訓後就業情形',
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '10%',
        top: '12%',
        containLabel: true
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        showDelay: 0,
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['結訓人數', '訓後就業人數', '訓後就業率'],
        icon: 'roundRect',
        bottom: '0'
      },
      xAxis: {
        boundaryGap: true,
        data: category3,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 16,
          fontWeight: 'bolder',
          color: tu_dark,
          padding: [8, 0, 0, 0],
          interval: 0,
          rotate: 0,
        }
      },
      yAxis: [{
        type: 'value',
        name: '人數',
        nameLocation: 'start',
        min: 0,
        interval: 50,
        nameTextStyle: {
          color: tu_grey_300,
          align: 'right'
        },
        axisLabel: {
          formatter: '{value} 人'
        }
      }, {
        type: 'value',
        name: '百分比',
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
        name: '結訓人數',
        type: 'bar',
        silent: true,
        barWidth: 40,
        itemStyle: {
          normal: {
            color: '#acedfb',
            align: 'center',
            borderRadius: [8, 8, 0, 0]
          }
        },
        stack: 'total',
        data: data1
      }, {
        name: '訓後就業人數',
        type: 'bar',
        silent: true,
        barGap: '-75%',
        barWidth: 20,
        // barCategoryGap: 0,
        z: 10,
        itemStyle: {
          normal: {
            color: '#14927a',
            borderRadius: [8, 8, 0, 0]
          }
        },
        data: data2
      }, {
        name: '訓後就業率',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 12,
        itemStyle: {
          normal: {
            color: '#b0dc00',
          }
        },
        markPoint: {
          symbolSize: 72,
          data: [{
            type: 'max',
            name: 'Max'
          }, ],

          label: {
            fontSize: 14,
            fontWeight: 'bolder',
            textBorderType: "solid",
            textBorderWidth: 1,
            textBorderColor: tu_white,
            textShadowColor: tu_white,
            textShadowBlur: 1,
            formatter: '{c}%'
          },
        },

        tooltip: {
          valueFormatter: function(value) {
            return value + ' %';
          }
        },
        data: data3
      }]
    };
    if (option && typeof option === 'object') {
      index_training_employment_youth.setOption(option);
    }

    window.addEventListener('resize', function() {
      index_training_employment_youth.resize();
    });

  })();
}

// index v11 訓後就業情形 職前訓練訓後就業情形 － 青年
if ($('#index_training_salary').length) {
  (function index_training_salary() {
    var chartDom = document.getElementById('index_training_salary');
    var index_training_salary = echarts.init(chartDom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    let data1 = [];
    let data2 = [];
    let data3 = [];
    for (let i = 0; i < 18; i++) {
      data1.push(+Math.floor((Math.random(0) * 6000).toFixed(0)) + 33000);
      data2.push(+Math.floor((Math.random(0) * 4000).toFixed(0)) + 25550);
    }
    option = {
      title: {
        text: '',
        subtext: '補充說明：參照主計處「薪資與生產力統計月報」，\n因此未列A大類- 農、林、漁、牧業、O大類- 公共行政及國防；\n強制性社會安全)Y軸：薪資(主計處調查數據/結訓學員訓後平均加保薪資級距!!',
        subtextStyle: {
          fontSize: 14,
          color: "#2f3199",
          width: '50%',
          overflow: 'break',
        },
        left: 0,
        top: 0
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '10%',
        top: '20%',
        containLabel: true
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        showDelay: 0,
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['結訓學員訓後薪資加保', '主計處人力運用調查揭露行業別之總薪資'],
        icon: 'roundRect',
        bottom: '0'
      },
      xAxis: {
        boundaryGap: true,
        data: category2,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 12,
          fontWeight: 'bolder',
          color: tu_dark,
          padding: [8, 0, 0, 0],
          interval: 0,
          rotate: 45,
        }
      },
      yAxis: [{
        type: 'value',
        name: '薪資',
        min: 0,
        nameTextStyle: {
          color: tu_grey_300,
          align: 'right'
        },
        axisLabel: {
          interval: 0,
          formatter: '{value}  元'
        }
      }, {
        type: 'category',
        name: '薪資級距',
        data: salary,
        nameLocation: 'start',
        nameTextStyle: {
          color: tu_grey_200,
          align: 'left'
        },
        interval: 20,
        axisLabel: {
          formatter: '{value} 元'
        }
      }],
      series: [{
        name: '結訓學員訓後薪資加保',
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(154, 160, 168, 0.06)',
          borderRadius: [8, 8, 0, 0]
        },

        itemStyle: {
          normal: {
            color: '#f9d23c',
            align: 'center',
            borderRadius: [4, 4, 0, 0]
          }
        },
        stack: 'total',
        data: data1
      }, {
        name: '主計處人力運用調查揭露行業別之總薪資',
        type: 'bar',
        itemStyle: {
          normal: {
            color: '#f47942',
            borderRadius: [4, 4, 0, 0]
          }
        },
        data: data2
      }]
    };
    if (option && typeof option === 'object') {
      index_training_salary.setOption(option);
    }

    window.addEventListener('resize', function() {
      index_training_salary.resize();
    });
    index_training_salary.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}
// index v11 參訓背景 性別與年齡分布
if ($('#index_training_gender').length) {
  (function index_training_gender() {
    var dom = document.getElementById("index_training_gender");
    var index_training_gender = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    let data1 = [];
    let data2 = [];
    for (let i = 0; i < 18; i++) {
      data1.push(+(Math.random() * 4000).toFixed(0));
      data2.push(+(Math.random() * 5000).toFixed(0));
    }

    option = {
      title: {
        text: 'XXX行業別 - 訓後就業學員性別年齡占比',
      },
      tooltip: {
        show: true,
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: function(params) {
          return (
            params[0].marker + params[0].seriesName +
            "<br>" +
            params[0].name +
            " 歲: " +
            params[0].value +
            " 人"
          );
        },
      },
      legend: {
        top: 28,
        left: "center",
        textStyle: {
          color: tu_dark
        },
        selectedMode: true,
        itemWidth: 28,
        itemHeight: 28,
        itemGap: 24,
        data: [{
          name: "男性",
          icon: "image://data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIuNDczIDUxMi40NzMiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyLjQ3MyA1MTIuNDczIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnPjxwYXRoIGQ9Im00MDEuNjY1IDE1NS42MDQgNDYuODg0LTQ2Ljg4NHYzMi4xODdjMCAxNy41ODYgMTQuMjU3IDMxLjg0MyAzMS44NDMgMzEuODQzIDE3LjU4NyAwIDMxLjg0My0xNC4yNTcgMzEuODQzLTMxLjg0M3YtMTA5LjA2NGMuMDAxLTE3LjU4Ni0xNC4yNTUtMzEuODQzLTMxLjg0Mi0zMS44NDNoLTEwOS4wNjRjLTE3LjU4NyAwLTMxLjg0MyAxNC4yNTctMzEuODQzIDMxLjg0MyAwIDE3LjU4NiAxNC4yNTcgMzEuODQzIDMxLjg0MyAzMS44NDNoMzIuMTg3bC00Ni44ODQgNDYuODg0Yy04Ny4zMDktNjUuNDUzLTIxMS43MDYtNTguNDk0LTI5MS4xMDkgMjAuOTEtODcuMDQ5IDg3LjA0OS04Ny4wNDkgMjI4LjE4NCAwIDMxNS4yMzNzMjI4LjE4NCA4Ny4wNDkgMzE1LjIzMyAwYzc5LjQwNC03OS40MDMgODYuMzYzLTIwMy44IDIwLjkwOS0yOTEuMTA5em0tMjkxLjEwOCAyNDYuMDc2Yy02Mi4wNzgtNjIuMDc4LTYyLjA3OC0xNjMuMDg4IDAtMjI1LjE2N3MxNjMuMDg4LTYyLjA3OCAyMjUuMTY3IDAgNjIuMDc4IDE2My4wODggMCAyMjUuMTY3LTE2My4wODkgNjIuMDc4LTIyNS4xNjcgMHoiIGZpbGw9IiNhM2RlZmUiLz48L2c+PGc+PHBhdGggZD0ibTIyMy4yMDEgNDQ4Ljc4NmMtODcuNzkyIDAtMTU5LjIxNy03MS40MjUtMTU5LjIxNy0xNTkuMjE3LTE1LjMyOSAxOS4zNjgtNDQuMjc5IDIwLjYxMS02MS4yMTEgMi42MjlsLTIuNDc1LTIuNjI5YzAgMTIzLjEwNiA5OS43OTcgMjIyLjkwNCAyMjIuOTA0IDIyMi45MDQtMTkuOTgxLTE2LjQ0LTIwLjA2MS00Ny4wMDYtLjE2NS02My41NDl6IiBmaWxsPSIjN2FjZWZhIi8+PC9nPjxnPjxnPjxnPjxlbGxpcHNlIGN4PSIxNDEuMDkxIiBjeT0iMjk3LjYxNSIgZmlsbD0iI2ZmYTFhYyIgcng9IjMwLjI3NCIgcnk9IjI0LjEwOSIvPjwvZz48Zz48ZWxsaXBzZSBjeD0iMzA1LjE4OSIgY3k9IjI5Ny42MTUiIGZpbGw9IiNmZmExYWMiIHJ4PSIzMC4yNzQiIHJ5PSIyNC4xMDkiLz48L2c+PGc+PHBhdGggZD0ibTI0Ny41NDkgMjc5LjA5MWMwLTE1LjA4NS0xMC45MjgtMTYuNTAyLTI0LjQwOS0xNi41MDItMTMuNDggMC0yNC40MDkgMS40MTctMjQuNDA5IDE2LjUwMnMxMC45MjggMjcuMzEzIDI0LjQwOSAyNy4zMTNjMTMuNDggMCAyNC40MDktMTIuMjI5IDI0LjQwOS0yNy4zMTN6IiBmaWxsPSIjNDIzZTRmIi8+PC9nPjwvZz48Zz48cGF0aCBkPSJtMTQ2LjE1MiAyNzYuMzMyYy00LjE0MiAwLTcuNS0zLjM1OC03LjUtNy41di0xMi4zNjJjMC00LjE0MiAzLjM1OC03LjUgNy41LTcuNXM3LjUgMy4zNTggNy41IDcuNXYxMi4zNjJjMCA0LjE0Mi0zLjM1OCA3LjUtNy41IDcuNXoiIGZpbGw9IiM0OTU1NjAiLz48L2c+PGc+PHBhdGggZD0ibTMwMC4xMjcgMjc2LjMzMmMtNC4xNDIgMC03LjUtMy4zNTgtNy41LTcuNXYtMTIuMzYyYzAtNC4xNDIgMy4zNTgtNy41IDcuNS03LjVzNy41IDMuMzU4IDcuNSA3LjV2MTIuMzYyYzAgNC4xNDItMy4zNTggNy41LTcuNSA3LjV6IiBmaWxsPSIjNDk1NTYwIi8+PC9nPjwvZz48L2c+PC9zdmc+"
        }, {
          name: "女性",
          icon: "image://data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTQ0Ni43MTMgMzgwLjUyYzg3LjA0OS04Ny4wNDkgODcuMDQ5LTIyOC4xODQgMC0zMTUuMjMzcy0yMjguMTg0LTg3LjA0OS0zMTUuMjMzIDBjLTc5LjQwMyA3OS40MDMtODYuMzYzIDIwMy44LTIwLjkwOSAyOTEuMTA5bC00MC4xNjggNDAuMTY4LTE2LjA0My0xNi4wNDRjLTEyLjQzNi0xMi40MzYtMzIuNTk4LTEyLjQzNi00NS4wMzMgMHMtMTIuNDM2IDMyLjU5OCAwIDQ1LjAzM2wxNi4wNDMgMTYuMDQzLTE2LjA0MyAxNi4wNDRjLTEyLjQzNiAxMi40MzYtMTIuNDM2IDMyLjU5OCAwIDQ1LjAzM3MzMi41OTggMTIuNDM2IDQ1LjAzMyAwbDE2LjA0My0xNi4wNDMgMTYuMDQzIDE2LjA0M2MxMi40MzYgMTIuNDM2IDMyLjU5OCAxMi40MzYgNDUuMDMzIDBzMTIuNDM2LTMyLjU5OCAwLTQ1LjAzM2wtMTYuMDQzLTE2LjA0MyA0MC4xNjgtNDAuMTY4Yzg3LjMwOSA2NS40NTQgMjExLjcwNiA1OC40OTQgMjkxLjEwOS0yMC45MDl6bS0yNzAuMi0yNzAuMmM2Mi4wNzgtNjIuMDc4IDE2My4wODgtNjIuMDc4IDIyNS4xNjcgMHM2Mi4wNzggMTYzLjA4OCAwIDIyNS4xNjctMTYzLjA4OCA2Mi4wNzgtMjI1LjE2NyAwLTYyLjA3OC0xNjMuMDg4IDAtMjI1LjE2N3oiIGZpbGw9IiNlMjZlN2UiLz48L2c+PGc+PHBhdGggZD0ibTcwLjQwMyAzOTYuNTYzIDQwLjE2OC00MC4xNjhjLjAxMy4wMTguMDI4LjAzNS4wNDEuMDUzbC0uMDA0LS4wMjNjMTAuNTM0IDE0LjA4MiAzMC40OSAxNi45NTggNDQuNTczIDYuNDI0IDE0LjA3Ni0xMC41MyAxNi45NTUtMzAuNDc0IDYuNDM2LTQ0LjU1NSA0LjQ5MSA1Ljk5NCA5LjQ0OSAxMS43NDYgMTQuODk2IDE3LjE5MyA2Mi4wNzggNjIuMDc4IDE2My4wODggNjIuMDc4IDIyNS4xNjcgMC0xMi40MzYgMTIuNDM2LTEyLjQzNiAzMi41OTggMCA0NS4wMzNzMzIuNTk4IDEyLjQzNiA0NS4wMzMgMGMtNzkuNDAzIDc5LjQwMy0yMDMuOCA4Ni4zNjMtMjkxLjEwOSAyMC45MDlsLTQwLjE2OCA0MC4xNjggMTYuMDQzIDE2LjA0M2MxMi40MzYgMTIuNDM2IDEyLjQzNiAzMi41OTggMCA0NS4wMzNzLTMyLjU5OCAxMi40MzYtNDUuMDMzIDBsLTE2LjA0My0xNi4wNDMtMTYuMDQzIDE2LjA0M2MtMTIuNDM2IDEyLjQzNi0zMi41OTggMTIuNDM2LTQ1LjAzMyAwcy0xMi40MzYtMzIuNTk4IDAtNDUuMDMzbDE2LjA0My0xNi4wNDNjMTIuNDM2IDEyLjQzNiAzMi41OTggMTIuNDM2IDQ1LjAzMyAwczEyLjQzNi0zMi41OTggMC00NS4wMzR6IiBmaWxsPSIjZDk0OTVkIi8+PC9nPjxnPjxnPjxnPjxlbGxpcHNlIGN4PSIyMDMuMDA5IiBjeT0iMjI5LjkyMiIgZmlsbD0iI2ZmYTFhYyIgcng9IjMxLjc2NSIgcnk9IjI1LjI5NiIvPjwvZz48Zz48ZWxsaXBzZSBjeD0iMzc1LjE4NCIgY3k9IjIyOS45MjIiIGZpbGw9IiNmZmExYWMiIHJ4PSIzMS43NjUiIHJ5PSIyNS4yOTYiLz48L2c+PC9nPjxnPjxwYXRoIGQ9Im0yMjEuNTIxIDIxMi43NmMtNC4xNDMgMC03LjUtMy4zNTgtNy41LTcuNXYtMTIuMzYyYzAtNC4xNDIgMy4zNTctNy41IDcuNS03LjVzNy41IDMuMzU4IDcuNSA3LjV2MTIuMzYyYzAgNC4xNDItMy4zNTcgNy41LTcuNSA3LjV6IiBmaWxsPSIjNDk1NTYwIi8+PC9nPjxnPjxwYXRoIGQ9Im0yODkuMDk3IDIyMC44MDFjLTguOTk2IDAtMTcuNTUxLTMuODk2LTIzLjQ3MS0xMC42ODgtMi43MjItMy4xMjMtMi4zOTYtNy44Ni43MjctMTAuNTgyIDMuMTIyLTIuNzIxIDcuODYtMi4zOTYgMTAuNTgyLjcyNyAzLjA3IDMuNTIzIDcuNTAzIDUuNTQ0IDEyLjE2MiA1LjU0NCA0LjY1OCAwIDkuMDkxLTIuMDIxIDEyLjE2MS01LjU0NCAyLjcyMy0zLjEyMyA3LjQ1OS0zLjQ0OCAxMC41ODItLjcyNyAzLjEyMiAyLjcyMiAzLjQ0OCA3LjQ1OS43MjcgMTAuNTgyLTUuOTIxIDYuNzkyLTE0LjQ3NSAxMC42ODgtMjMuNDcgMTAuNjg4eiIgZmlsbD0iIzQ5NTU2MCIvPjwvZz48Zz48cGF0aCBkPSJtMzczLjM4NCAyMTIuNDE2Yy00LjE0MyAwLTcuNS0zLjM1OC03LjUtNy41IDAtMy43NjQtMy4wNjItNi44MjYtNi44MjYtNi44MjZzLTYuODI1IDMuMDYyLTYuODI1IDYuODI2YzAgNC4xNDItMy4zNTcgNy41LTcuNSA3LjVzLTcuNS0zLjM1OC03LjUtNy41YzAtMTIuMDM1IDkuNzkxLTIxLjgyNiAyMS44MjUtMjEuODI2IDEyLjAzNSAwIDIxLjgyNiA5Ljc5MSAyMS44MjYgMjEuODI2IDAgNC4xNDItMy4zNTggNy41LTcuNSA3LjV6IiBmaWxsPSIjNDk1NTYwIi8+PC9nPjwvZz48L2c+PC9zdmc+",
        }, ],
      },
      grid: [{
        show: false,
        left: "4%",
        top: 72,
        bottom: 0,
        containLabel: true,
        width: '40%',
      }, {
        show: false,
        left: '40%',
        top: 72,
        bottom: 16,
        width: '0%',
        align: 'left'
      }, {
        show: false,
        right: "4%",
        top: 72,
        bottom: 0,
        containLabel: true,
        width: '40%',
      }, ],
      xAxis: [{
        type: "value",
        inverse: true,
        show: true,
        minInterval: 0,
        axisLabel: {
          color: tu_grey_600,
          fontSize: "12",
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: tu_grey_200,
            width: 1,
            type: "dotted",
          },
        },
      }, {
        gridIndex: 1,
      }, {
        gridIndex: 2,
        type: "value",
        show: true,
        minInterval: 0,
        axisLabel: {
          color: tu_grey_600,
          fontSize: "12",
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: tu_grey_200,
            width: 1,
            type: "dotted",
          },
        },
      }],
      yAxis: [{
        type: "category",
        axisLabel: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: tu_grey_300
          }
        },
        axisTick: {
          show: false,
        },
        data: ages,
      }, {
        axisLabel: {
          color: tu_dark,
          fontSize: "12",
          fontWeight: "bolder",
          margin: 0,
        },
        nameGap: 0,
        gridIndex: 1,
        axisLine: {
          show: false,
        },
        inverse: true,
        axisTick: {
          show: false,
        },
        data: ages.map(function(value) {
          return {
            value: value,
            textStyle: {
              align: 'center',
            }
          }
        }),
      }, {
        gridIndex: 2,
        type: "category",
        axisLabel: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: tu_grey_300
          }
        },
        axisTick: {
          show: false,
        },
        data: ages,
      }],
      series: [{
        type: "bar",
        name: "男性",
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(154, 160, 168, 0.12)',
          borderRadius: [0, 4, 4, 0]
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.16)',
          color: "#009EF7",
          borderRadius: [4, 0, 0, 4]
        },
        data: data1,
        label: {
          normal: {
            show: true,
            color: tu_white,
            position: 'left',
            formatter: '{c} 人',
            textBorderColor: "#009EF7",
            textBorderWidth: 2,
            textShadowColor: tu_info_800,
            textShadowBlur: 2
          }
        },
      }, {
        type: "bar",
        name: "女性",
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(154, 160, 168, 0.12)',
          borderRadius: [0, 4, 4, 0]
        },
        xAxisIndex: 2,
        yAxisIndex: 2,
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.16)',
          color: "#FC86B0",
          borderRadius: [0, 4, 4, 0]
        },
        data: data2,
        label: {
          normal: {
            show: true,
            color: tu_white,
            position: 'right',
            formatter: '{c} 人',
            textBorderColor: "#FC86B0",
            textBorderWidth: 2,
            textShadowColor: tu_tertiary_800,
            textShadowBlur: 2
          }
        },
      }],
    };
    if (option && typeof option === 'object') {
      index_training_gender.setOption(option);
    }
    window.addEventListener('resize', function() {
      index_training_gender.resize();
    });

  })();
}

// index v11 參訓背景 分署
if ($('#index_training_branch').length) {
  (function index_training_branch() {
    var dom = document.getElementById("index_training_branch");
    var index_training_branch = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    let data1 = [];
    let data2 = [];
    for (let i = 0; i < 5; i++) {

      data1.push(+(Math.random() * 360).toFixed(0));
      data2.push(+(Math.random() * 500).toFixed(0));

    }

    option = {
      title: {
        text: 'XXX行業別 - 訓後就業學員各分署占比',
        // subtext: 7789,
        textStyle: {
          fontSize: 20,
        },
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
        right: 10,
        bottom: 0,
        data: branch
      },
      series: [{
        name: '分署',
        radius: ['30%', '61%'],
        center: ['50%', '50%'],
        type: 'pie',
        label: {
          alignTo: 'labelLine',
          formatter: '{name|{b}}\n{people|{c} 門課程}',
          minMargin: 0,
          edgeDistance: 0,
          lineHeight: 16,
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} 門課程 ({d}%)'
          },
          rich: {
            name: {
              fontSize: 16,
              fontWeight: 'bold',
              color: tu_dark,
              padding: 10
            },
            people: {
              fontSize: 10,
              color: tu_grey_800,
              padding: 0
            }
          }
        },
        labelLine: {
          normal: {
            show: true,
            length: 0,
            length2: 12
          },
          emphasis: {
            show: true
          }
        },
        data: [{
          value: 40,
          name: '北分署'
        }, {
          value: 38,
          name: '桃分署'
        }, {
          value: 32,
          name: '中分署'
        }, {
          value: 30,
          name: '南分署'
        }, {
          value: 28,
          name: '高分署'
        }],
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
      index_training_branch.setOption(option);
    }

    window.addEventListener('resize', function() {
      index_training_branch.resize();
    });

  })();
}

// index v12 重點產業資源
if ($('#index_training_industry').length) {
  var dom = document.getElementById('index_training_industry');
  var myChart = echarts.init(dom, 'wda_data', {
    renderer: 'svg',
    useDirtyRect: true,
    locale: 'EN'
  });

  const data = [
    [0, 0, 5],
    [0, 1, 1],
    [0, 2, 5],
    [0, 3, 10],
    [0, 4, 8],
    [0, 5, 9],
    [0, 6, 8],
    [0, 7, 1],
    [0, 8, 2],
    [0, 9, 3],

    [1, 0, 7],
    [1, 1, 6],
    [1, 2, 6],
    [1, 3, 8],
    [1, 4, 9],
    [1, 5, 5],
    [1, 6, 2],
    [1, 7, 2],
    [1, 8, 6],
    [1, 9, 5],

    [2, 0, 2],
    [2, 1, 1],
    [2, 2, 3],
    [2, 3, 2],
    [2, 4, 1],
    [2, 5, 9],
    [2, 6, 8],
    [2, 7, 10],
    [2, 8, 6],
    [2, 9, 5],

    [3, 0, 7],
    [3, 1, 3],
    [3, 2, 8],
    [3, 3, 4],
    [3, 4, 2],
    [3, 5, 0],
    [3, 6, 10],
    [3, 7, 2],
    [3, 8, 1],
    [3, 9, 0],

    [4, 0, 1],
    [4, 1, 3],
    [4, 2, 2],
    [4, 3, 8],
    [4, 4, 0],
    [4, 5, 1],
    [4, 6, 9],
    [4, 7, 6],
    [4, 8, 3],
    [4, 9, 2],

    [5, 0, 2],
    [5, 1, 1],
    [5, 2, 7],
    [5, 3, 3],
    [5, 4, 0],
    [5, 5, 10],
    [5, 6, 0],
    [5, 7, 3],
    [5, 8, 2],
    [5, 9, 8],
  ].map(function(item) {
    return [item[1], item[0], item[2] || '-'];
  });
  option = {
    tooltip: {
      position: 'top'
    },

    legend: {

      show: true,
      icon: 'circle',
      data: [{
        name: '重點產業資源',
      }],
    },
    grid: {
      top: '12%',
      bottom: '10%',
      left: '0%',
      right: '0%'
    },
    xAxis: {
      name: '重點產業資源',
      type: 'category',
      data: category4,
      axisLine: {
        lineStyle: {
          color: tu_dark
        }
      },
      axisLabel: {
        interval: 0,
        rotate: 45,
        textStyle: {
          color: tu_grey_600,
          fontSize: 16,
          fontWeight: 'bolder'
        }
      },
      splitArea: {
        show: false
      },
    },
    yAxis: {
      name: '分署',
      type: 'category',
      data: branch,
      axisLine: {
        lineStyle: {
          color: tu_white,
        }
      },
      axisLabel: {
        interval: 0,
        rotate: 0,
        textStyle: {
          color: tu_dark,
          fontSize: 20,
          fontWeight: 'bolder'
        }
      },
      splitArea: {
        show: false
      },
    },
    visualMap: {
      min: 0,
      max: 10,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      top: '',
      inRange: {
        color: ["#e1c3cd", '#3b3dbf']
      },
    },
    series: [{
      type: 'heatmap',
      data: data,
      label: {
        normal: {
          color: tu_white,
          show: true,
          textStyle: {
            fontSize: 14,
            fontWeight: 'bolder',
            textBorderColor: tu_grey_900,
            textBorderWidth: 4
          }
        }
      },
      itemStyle: {
        normal: {
          borderColor: tu_white,
          borderWidth: 2,
          borderRadius: 4,
        },
        emphasis: {
          shadowBlur: 10,
          shadowColor: "rgba(255, 255, 255, 0.5)"
        }
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }

  window.addEventListener('resize', function() {
    myChart.resize();
  });
  myChart.on('click', function(event) {
    $('#tab-2').show().tab('show');
  });
}
if ($('#courses_areas').length) {
  (function courses_areas() {
    var dom = document.getElementById("courses_areas");
    var courses_areas = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });


    let data1 = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];
    let data5 = [];
    let data6 = [];
    for (let i = 0; i < 5; i++) {
      data1.push(+(Math.random() * 400).toFixed(0));
      data2.push(+(Math.random() * 500).toFixed(0));
      data3.push(+(Math.random() + 340).toFixed(0));
      data4.push(+(Math.random() * 300).toFixed(0));
      data5.push(+(Math.random() * 500).toFixed(0));
      data6.push(+(Math.random() * 220).toFixed(0));
    }


    option = {
      title: {
        text: '',
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
      grid: {
        left: '2%',
        right: '2%',
        bottom: '10%',
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
        data: ['職前-開班數量', '在職-開班數量', '青年-開班數量', '職前-學員數量', '在職-學員數量', '青年-學員數量'],
        bottom: '0%'
      },
      xAxis: [{
        type: 'category',
        data: branch,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 14,
          fontWeight: 'bolder',
          color: tu_dark,
          padding: [8, 8, 0, 0],
          interval: 0,
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
      }, {
        type: 'value',
        name: '課程數',
        nameLocation: 'start',
        min: 0,

        nameTextStyle: {
          color: tu_grey_500,
          align: 'left'
        },
        axisLabel: {
          formatter: '{value} 門'
        }
      }],
      series: [{
        name: '職前-開班數量',
        type: 'bar',
        stack: '開班數量',
        itemStyle: {
          color: tu_secondary_200,
          borderRadius: [4, 4, 0, 0],
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.12)'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 門';
          }
        },

        data: data1
      }, {
        name: '在職-開班數量',
        type: 'bar',
        stack: '開班數量',
        itemStyle: {
          color: tu_secondary_400,
          borderRadius: [4, 4, 0, 0],
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.12)'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 門';
          }
        },

        data: data2
      }, {
        name: '青年-開班數量',
        type: 'bar',
        stack: '開班數量',
        itemStyle: {
          color: tu_secondary_600,
          borderRadius: [4, 4, 0, 0],
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.12)'
        },
        markPoint: {
          symbolSize: 88,
          symbol: 'roundRect',
          data: [{
            type: 'max',
            name: 'Max'
          }],
          label: {
            fontSize: 16,
            color: '#fff',
            textBorderType: "solid",
            textBorderWidth: 2,
            textBorderColor: tu_grey_400,
            formatter: '學員人數',
            textShadowColor: tu_white,
            textShadowBlur: 1,
          },
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 門';
          }
        },

        data: data3
      }, {
        name: '職前-學員數量',
        type: 'bar',
        stack: '學員數量',
        itemStyle: {
          color: tu_primary_200,
          borderRadius: [4, 4, 0, 0],
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.12)'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data4
      }, {
        name: '在職-學員數量',
        type: 'bar',
        stack: '學員數量',
        itemStyle: {
          color: tu_primary_400,
          borderRadius: [4, 4, 0, 0],
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.12)'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data5
      }, {
        name: '青年-學員數量',
        type: 'bar',
        stack: '學員數量',
        itemStyle: {
          color: tu_primary_600,
          borderRadius: [4, 4, 0, 0],
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.12)'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        markPoint: {
          symbolSize: 88,
          symbol: 'roundRect',
          data: [{
            type: 'max',
            name: 'Max'
          }],
          label: {
            fontSize: 16,
            color: '#fff',
            textBorderType: "solid",
            textBorderWidth: 2,
            textBorderColor: tu_grey_400,
            formatter: '學員人數',
            textShadowColor: tu_white,
            textShadowBlur: 1,
          },
        },
        data: data6
      }]
    };

    if (option && typeof option === 'object') {
      courses_areas.setOption(option);
    }
    window.addEventListener('resize', function() {
      courses_areas.resize();

    });
    courses_areas.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}

// index v13 熱門課程趨勢 職前熱門課程趨勢
if ($('#index_courses_before').length) {
  (function index_courses_before() {
    var dom = document.getElementById("index_courses_before");
    var index_courses_before = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    var data = [];
    let data5 = [];

    for (let i = 0; i < 11; i++) {
      data5.push(+(Math.random() * 100).toFixed(0));
    }

    for (var i = 0; i < 10; i++) {
      min = 100;
      max = 1000;
      data.push(+(Math.random() * (max - min + 1) + min).toFixed(0));
    }

    option = {
      title: {
        text: '職前熱門課程趨勢',
        left: '0'
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
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
        data: ['美髮進階班','美容進階班','月子餐調理班',
'環保婚禮小物實作班','盆栽組合與花束花藝設計班','節慶花藝設計班',
'韓文必備文法班','羊毛氈濕氈創作設計與技巧訓練班','寵物美容照顧實務班',
'創意婚禮花飾與會場佈置花藝設計班','自然時尚風創意婚飾與花藝設計班'],
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 0,
          fontWeight: 'bolder',
          interval: 0,
          rotate: 30,
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
          fontSize: 12
        }
      }, {
        type: 'value',
        name: '百分比',
        nameLocation: 'start',
        min: 0,
        max: 100,
        nameTextStyle: {
          color: tu_grey_500,
          align: 'left'
        },
        interval: 20,
        axisLabel: {
          formatter: '{value} %',
          fontSize: 12
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
            borderRadius: [8, 8, 0, 0],
            color: "#80c4dc"
          },
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.12)',
        },
        label: {
          show: true,
          formatter: '{b}',
          rotate: 90,
          fontWeight: 'bolder',
          textBorderColor: 'rgba(255,255,255,0.24)',
          textBorderWidth: 4,
        },
        data: [200,190,188,180,166,158,154,148,144,124,100],
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
            color: "#80c4dc"
          },
        },
      }, {
        name: '錄取率',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 16,
        lineStyle: {
          color: '#1657ff',
          opacity: 0.66,
          width: 3
        },
        itemStyle: {
          color: '#1657ff',
          opacity: 0.66
        },
        markPoint: {
          symbolSize: 56,
          data: [{
            type: 'max',
            name: 'Max'
          }],
          itemStyle: {
            color: '#1657ff',
            opacity: 0.88
          },
          label: {
            textBorderType: "solid",
            textBorderWidth: 2,
            textBorderColor: '#5ad0e8',
            formatter: '{c}%',
            textShadowColor: tu_white,
            textShadowBlur: 1,
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
      index_courses_before.setOption(option);
    }
    window.addEventListener('resize', function() {
      index_courses_before.resize();
    });
    index_courses_before.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}

// index v13 熱門課程趨勢 在職熱門課程趨勢
if ($('#index_courses_now').length) {
  (function index_courses_before() {
    var dom = document.getElementById("index_courses_now");
    var index_courses_now = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    var data = [];
    let data5 = [];

    for (let i = 0; i < 12; i++) {
      data5.push(+(Math.random() * 100).toFixed(0));
    }

    for (var i = 0; i < 12; i++) {
      min = 100;
      max = 1000;
      data.push(+(Math.random() * (max - min + 1) + min).toFixed(0));
    }

    option = {
      title: {
        text: '在職熱門課程趨勢',
        left: '0'
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
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
        data: ['生活職場英文班','生活職場韓文班',
'民俗調理業傳統整復推拿技術員職能課程班','人工智慧機器學習與深度學習實作應用班',
'雲端Docker容器技術班','AWS 雲端技術應用實務班','職業安全衛生管理員訓練班',
'吊升荷重在三公噸以上之固定式起重機(架空式-地面操作)人員訓練班',
'子平八字開運姓名學班'],
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 0,
          fontWeight: 'bolder',
          interval: 0,
          rotate: 30,
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
          fontSize: 12
        }
      }, {
        type: 'value',
        name: '百分比',
        nameLocation: 'start',
        min: 0,
        max: 100,
        nameTextStyle: {
          color: tu_grey_500,
          align: 'left'
        },
        interval: 20,
        axisLabel: {
          formatter: '{value} %',
          fontSize: 12
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
            borderRadius: [8, 8, 0, 0],
            color: "#8dbfa8"
          },
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.12)',
        },
        label: {
          show: true,
          formatter: '{b}',
          rotate: 90,
          fontWeight: 'bolder',
          textBorderColor: 'rgba(255,255,255,0.24)',
          textBorderWidth: 4,
        },
        data: [200,190,188,180,166,158,154,148,144,124,100],
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
            color: "#50cd89"
          },
        },
      }, {
        name: '錄取率',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 16,
        lineStyle: {
          color: '#2ca02c',
          opacity: 0.66,
          width: 3
        },
        itemStyle: {
          color: '#2ca02c',
          opacity: 0.66
        },
        markPoint: {
          symbolSize: 56,
          data: [{
            type: 'max',
            name: 'Max'
          }],
          itemStyle: {
            color: '#2ca02c',
            opacity: 0.88
          },
          label: {
            textBorderType: "solid",
            textBorderWidth: 2,
            textBorderColor: '#50cd89',
            formatter: '{c}%',
            textShadowColor: tu_white,
            textShadowBlur: 1,
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
      index_courses_now.setOption(option);
    }
    window.addEventListener('resize', function() {
      index_courses_now.resize();
    });
    index_courses_now.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}




// index v14 訓後就業情形
if ($('#index_training_employment11').length) {
  (function index_training_employment11() {
    var chartDom = document.getElementById('index_training_employment11');
    var index_training_employment11 = echarts.init(chartDom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    option = {
      title: {
        text: '111 年度 中彰投分署總預算 執行情形',
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '10%',
        top: '12%',
        containLabel: true
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        showDelay: 0,
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['當月分配數', '當月執行數', '當月執行率', '累計執行率'],
        icon: 'roundRect',
        bottom: '0'
      },
      xAxis: {
        boundaryGap: true,
        data: month,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 12,
          fontWeight: 'bolder',
          color: tu_dark,
          padding: [8, 0, 0, 0],
          interval: 0,
          rotate: 30,
        }
      },
      yAxis: [{
        type: 'value',
        name: '人數',
        nameLocation: 'start',
        min: 0,
        interval: 50,
        nameTextStyle: {
          color: tu_grey_300,
          align: 'right'
        },
        axisLabel: {
          formatter: '{value} 人'
        }
      }, {
        type: 'value',
        name: '百分比',
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
        name: '當月分配數',
        type: 'bar',
        silent: true,
        barWidth: 20,
        itemStyle: {
          normal: {
            color: '#edc948',
            align: 'center',
            borderRadius: [8, 8, 0, 0]
          }
        },
        stack: 'total',
        data: [180, 100, 264, 200, 192, 245]
      }, {
        name: '當月執行數',
        type: 'bar',
        silent: true,
        barGap: '-75%',
        barWidth: 10,
        // barCategoryGap: 0,
        z: 10,
        itemStyle: {
          normal: {
            color: '#332a7c',
            borderRadius: [8, 8, 0, 0]
          }
        },
        data: [80, 128, 188, 216, 68, 88]
      }, {
        name: '當月執行率',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 12,
        itemStyle: {
          normal: {
            color: '#1657ff',
          }
        },
        markPoint: {
          symbolSize: 72,
          data: [{
            type: 'max',
            name: 'Max'
          }, ],
          label: {
            fontSize: 14,
            fontWeight: 'bolder',
            textBorderType: "solid",
            textBorderWidth: 2,
            textBorderColor: tu_info_300,
            textShadowColor: tu_info_500,
            textShadowBlur: 10,
            formatter: '{c}%'
          },
        },
        markLine: {
          symbol: ['circle', 'triangle'],
          label: {
            position: "insideEndTop",
            backgroundColor: "#ff4b55",
            borderRadius: 4,
            color: tu_white,
            fontSize: 12,
            padding: [4, 2],
            formatter: "標準線",
          },
          data: [{
            silent: false,
            lineStyle: {
              type: "dashed",
              width: 2,
              color: '#ff4b55',
            },
            yAxis: 85,
          },]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' %';
          }
        },
        data: [95, 90, 90, 90, 85, 80],
      },
      {
        name: '累計執行率',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 12,
        itemStyle: {
          normal: {
            color: '#66c4c5',
          }
        },
        markPoint: {
          symbolSize: 72,
          data: [{
            type: 'max',
            name: 'Max'
          }, ],
          label: {
            fontSize: 14,
            fontWeight: 'bolder',
            textBorderType: "solid",
            textBorderWidth: 2,
            textBorderColor: tu_info_300,
            textShadowColor: tu_info_500,
            textShadowBlur: 10,
            formatter: '{c}%'
          },
        },
        markLine: {
          symbol: ['circle', 'triangle'],
          label: {
            position: "insideEndTop",
            backgroundColor: "#ff4b55",
            borderRadius: 4,
            color: tu_white,
            fontSize: 12,
            padding: [4, 2],
            formatter: "標準線",
          },
          data: [{
            silent: false,
            lineStyle: {
              type: "dashed",
              width: 2,
              color: '#ff4b55',
            },
            yAxis: 85,
          },]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' %';
          }
        },
        data: [40, 50, 60, 70, 80, 85],
      },
      ]
    };
    if (option && typeof option === 'object') {
      index_training_employment11.setOption(option);
    }

    window.addEventListener('resize', function() {
      index_training_employment11.resize();
    });
    index_training_employment11.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}


// index v14 訓後就業情形
if ($('#index_training_employment22').length) {
  (function index_training_employment22() {
    var chartDom = document.getElementById('index_training_employment22');
    var index_training_employment22 = echarts.init(chartDom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    option = {
      title: {
        text: '111 年度 中彰投分署執行預算情形',
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '10%',
        top: '12%',
        containLabel: true
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        showDelay: 0,
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['當月分配數', '當月執行數', '當月執行率', '累計執行率'],
        icon: 'roundRect',
        bottom: '0'
      },
      xAxis: {
        boundaryGap: true,

        data: branch,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 16,
          fontWeight: 'bolder',
          color: tu_dark,
          padding: [8, 0, 0, 0],
          interval: 0,
          rotate: 0,
        }
      },
      yAxis: [{
        type: 'value',
        name: '人數',
        nameLocation: 'start',
        min: 0,
        interval: 50,
        nameTextStyle: {
          color: tu_grey_300,
          align: 'right'
        },
        axisLabel: {
          formatter: '{value} 人'
        }
      }, {
        type: 'value',
        name: '百分比',
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
        name: '當月分配數',
        type: 'bar',
        silent: true,
        barWidth: 60,
        itemStyle: {
          normal: {
            color: '#80c4dc',
            align: 'center',
            borderRadius: [8, 8, 0, 0]
          }
        },
        stack: 'total',
        data: [180, 176, 264, 200, 192]
      }, {
        name: '當月執行數',
        type: 'bar',
        silent: true,
        barGap: '-82.5%',
        barWidth: 40,
        // barCategoryGap: 0,
        z: 10,
        itemStyle: {
          normal: {
            color: '#332a7c',
            borderRadius: [8, 8, 0, 0]
          }
        },
        data: [80, 94, 97, 78, 68]
      }, {
        name: '當月執行率',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 12,
        itemStyle: {
          normal: {
            color: '#ff9e9e',
          }
        },
        markPoint: {
          symbolSize: 72,
          data: [{
            type: 'max',
            name: 'Max'
          }, ],

          label: {
            fontSize: 14,
            fontWeight: 'bolder',
            textBorderType: "solid",
            textBorderWidth: 2,
            textShadowBlur: 10,
            formatter: '{c}%'
          },
        },
       
        tooltip: {
          valueFormatter: function(value) {
            return value + ' %';
          }
        },
        data: [95, 90, 90, 90, 85],
      },
      {
        name: '累計執行率',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 12,
        itemStyle: {
          normal: {
            color: '#787f8c',
          }
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' %';
          }
        },
        data: [30, 40, 50, 60, 75],
      }]
    };
    if (option && typeof option === 'object') {
      index_training_employment22.setOption(option);
    }

    window.addEventListener('resize', function() {
      index_training_employment22.resize();
    });
    index_training_employment22.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}