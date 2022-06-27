  // $('#tabv11').on('click', function(event) {
  //   $('#tab-2').show().tab('show');
  // });

  //  整體性職業訓練分析
  if ($('#vocational_training').length) {
    (function vocational_training() {
      var vocational_training = document.getElementById("vocational_training");
      var vocational_training = echarts.init(vocational_training, 'wda_data', {
        renderer: 'svg',
        useDirtyRect: true,
        locale: 'EN'
      });


      let data1 = [];
      let data2 = [];
      let data3 = [];
      let data4 = [];
      let data5 = [];
      for (let i = 0; i < 21; i++) {
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
          text: '整體性職業訓練分析',
          left: "center",
          top: '0',
          textStyle: {
            fontSize: 24,
            fontWeight: 'bolder',
            color: tu_dark,
          }

        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '0%',
          top: '16%',
          containLabel: true
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
        legend: {
          bottom: '0%'
        },
        xAxis: [{
          type: 'category',
          data: category1,
          axisPointer: {
            type: 'shadow'
          },

          axisLabel: {
            fontSize: 14,
            fontWeight: 'bolder',
            color: tu_dark,
            interval: 0,
            rotate: 45
          }
        }],
        yAxis: [{
          type: 'value',
          name: '職缺數',
          nameLocation: 'start',
          min: 0,
          // interval: 50,
          nameTextStyle: {
            color: tu_grey_300,
            align: 'right'
          },
          axisLabel: {
            formatter: '{value} 筆'
          }
        }, {
          type: 'value',
          name: '人數',
          nameLocation: 'start',
          min: 0,
          max: 100,
          nameTextStyle: {
            color: tu_grey_500,
            align: 'left'
          },
          interval: 20,
          axisLabel: {
            formatter: '{value} 人'
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
          label: {
            normal: {
              show: true,
              position: 'top',
              lineHeight: 30,
              width: 80,
              height: 30,
              backgroundColor: 'rgba(128,196,220,.66)',
              borderRadius: 200,
              position: ['-16', '-60'],
              distance: 0,
              formatter: [
                '    {d|●}',
                ' {a|{c}人}     \n',
                '    {b|}'
              ].join(' '),
              rich: {
                d: {
                  color: '#80C4DC',
                  textBorderColor: tu_white,
                  textBorderWidth: 2,
                  textShadowColor: tu_white,
                  textShadowBlur: 2,
                },
                a: {
                  color: tu_white,
                  align: 'center',
                  textBorderColor: tu_grey_200,
                  textBorderWidth: 2,
                  textShadowColor: tu_grey_200,
                  textShadowBlur: 0,
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: 'rgba(128,196,220,.66)',
                  align: 'left'
                },
              }
            }
          },
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          data: data1
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
          label: {
            normal: {
              show: true,
              position: 'top',
              lineHeight: 30,
              width: 80,
              height: 30,
              backgroundColor: 'rgba(31,59,179,.66)',
              borderRadius: 200,
              position: ['-16', '-60'],
              distance: 0,
              formatter: [
                '    {d|●}',
                ' {a|{c}人}     \n',
                '    {b|}'
              ].join(' '),
              rich: {
                d: {
                  color: '#1F3BB3',
                  textBorderColor: tu_white,
                  textBorderWidth: 2,
                  textShadowColor: tu_white,
                  textShadowBlur: 2,
                },
                a: {
                  color: tu_white,
                  align: 'center',
                  textBorderColor: tu_grey_200,
                  textBorderWidth: 2,
                  textShadowColor: tu_grey_200,
                  textShadowBlur: 0,
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: 'rgba(31,59,179,.66)',
                  align: 'left'
                },
              }
            }
          },
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          data: data2
        }]
      };

      if (option && typeof option === 'object') {
        vocational_training.setOption(option);
      }
      window.addEventListener('resize', function() {
        vocational_training.resize();

      });
      vocational_training.on('click', function(event) {
        $('#tab-2').show().tab('show');
      });
    })();
  }

  // 整體性職業訓練分析
  if ($('#vocational_training_citys').length) {
    (function vocational_training_citys() {
      var vocational_training_citys = document.getElementById("vocational_training_citys");
      var vocational_training_citys = echarts.init(vocational_training_citys, 'wda_data', {
        renderer: 'svg',
        useDirtyRect: true,
        locale: 'EN'
      });


      let data1 = [];
      let data2 = [];
      let data3 = [];
      let data4 = [];
      let data5 = [];
      for (let i = 0; i < 21; i++) {
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
          text: 'XXX職類別各縣市 - 職缺數與職訓量能供給情形',
          left: "center",
          top: '0',
          textStyle: {
            fontSize: 24,
            fontWeight: 'bolder',
            color: tu_dark,
          }

        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '0%',
          top: '16%',
          containLabel: true
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
            fontSize: 14,
            fontWeight: 'bolder',
            color: tu_dark,
            interval: 0,
            rotate: 45
          }
        }],
        yAxis: [{
          type: 'value',
          name: '職缺數',
          nameLocation: 'start',
          min: 0,
          // interval: 50,
          nameTextStyle: {
            color: tu_grey_300,
            align: 'right'
          },
          axisLabel: {
            formatter: '{value} 筆'
          }
        }, {
          type: 'value',
          name: '人數',
          nameLocation: 'start',
          min: 0,
          max: 100,
          nameTextStyle: {
            color: tu_grey_500,
            align: 'left'
          },
          interval: 20,
          axisLabel: {
            formatter: '{value} 人'
          }
        }],
        series: [{
          name: '求才開缺數',
          type: 'bar',
          showBackground: true,
          color: '#FF9E9E',
          backgroundStyle: {
            color: 'rgba(154, 160, 168, 0.12)',
            borderRadius: [0, 8, 8, 0]
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0,0,0,0.24)',
            borderRadius: [8, 8, 0, 0]
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              lineHeight: 30,
              width: 80,
              height: 30,
              backgroundColor: 'rgba(255, 158, 158,.66)',
              borderRadius: 200,
              position: ['-16', '-60'],
              distance: 0,
              formatter: [
                '    {d|●}',
                ' {a|{c}人}     \n',
                '    {b|}'
              ].join(' '),
              rich: {
                d: {
                  color: '#FF9E9E',
                  textBorderColor: tu_grey_200,
                  textBorderWidth: 2,
                  textShadowColor: tu_grey_200,
                  textShadowBlur: 2,
                },
                a: {
                  color: tu_dark,
                  align: 'center',
                  textBorderColor: tu_grey_200,
                  textBorderWidth: 2,
                  textShadowColor: tu_grey_200,
                  textShadowBlur: 0,
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: 'rgba(255, 158, 158,.66)',
                  align: 'left'
                },
              }
            }
          },
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          data: data1
        }, {
          name: '職訓課程學員數',
          type: 'bar',
          showBackground: true,
          color: '#FEE482',
          backgroundStyle: {
            color: 'rgba(154, 160, 168, 0.12)',
            borderRadius: [0, 8, 8, 0]
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0,0,0,0.24)',
            borderRadius: [8, 8, 0, 0],
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              lineHeight: 30,
              width: 80,
              height: 30,
              backgroundColor: 'rgba(254, 228, 130,.66)',
              borderRadius: 200,
              position: ['-16', '-60'],
              distance: 0,
              formatter: [
                '    {d|●}',
                ' {a|{c}人}     \n',
                '    {b|}'
              ].join(' '),
              rich: {
                d: {
                  color: '#FEE482',
                  textBorderColor: tu_grey_200,
                  textBorderWidth: 2,
                  textShadowColor: tu_grey_200,
                  textShadowBlur: 2,
                },
                a: {
                  color: tu_dark,
                  align: 'center',
                  textBorderColor: tu_grey_200,
                  textBorderWidth: 2,
                  textShadowColor: tu_grey_200,
                  textShadowBlur: 0,
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: 'rgba(254, 228, 130,.66)',
                  align: 'left'
                },
              }
            }
          },
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          data: data2
        }]
      };

      if (option && typeof option === 'object') {
        vocational_training_citys.setOption(option);
      }
      window.addEventListener('resize', function() {
        vocational_training_citys.resize();

      });

    })();
  }

  if ($('#vocational_training_citys_members_pie').length) {
    // 廠商行業別分布情形
    (function vocational_training_citys_members_pie() {
      var dom = document.getElementById("vocational_training_citys_members_pie");
      var vocational_training_citys_members_pie = echarts.init(dom, 'wda_data', {
        renderer: 'svg',
        useDirtyRect: true,
        locale: 'EN'
      });

      option = {
        title: {
          text: 'XXX 行業別 - 減班休息各縣市勞工數別占比',
          textStyle: {
            fontSize: 24,
            fontWeight: 'bolder',
            color: tu_dark,
          },
          x: 'center',
          y: 'top',
        },
        color: [
          "#80C4DC", "#3B3DBF", "#FF9E9E",
          "#638267", "#F9D23C", "#849DB1",
          "#6667AB", "#C5AEB1", "#00656E",
          "#884C5E", "#A3CCC9", "#B3906C",
          "#769E51", "#D65079", "#C5AEB1",
          "#8B5897", "#AEA393", "#5D89B4",
          "#EDC373", "#86A293", "#B66353",
          "#CE8451", "#4B9B69", "#302C4D"
        ],
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
          type: "scroll",
          width: "100%",
          x: 'center', //水平位置，【left\center\right\数字】
          y: 'bottom', //垂直位置，【top\center\bottom\数字】
          align: 'left', //字在图例的左边或右边【left/right】
          orient: 'horizontal', //图例方向【horizontal/vertical】
          icon: 'roundRect', //图例形状【circle\rect\roundRect\triangle\diamond\pin\arrow\none】
          textStyle: {
            color: tu_grey_800,
          },
        },
        series: [{
          radius: ['30%', '62%'],
          center: ['50%', '50%'],
          type: 'pie',
          label: {
            normal: {
              show: true,
              formatter: '{b} ({d}%)',
              textStyle: {
                fontSize: 12,
                color: tu_dark,
              },
              position: 'outer',
              alignTo: "labelLine",
              distanceToLabelLine: 2,
              edgeDistance: 8
            },
            emphasis: {
              show: true
            },
          },
          labelLine: {
            normal: {
              show: true,
              length: 8,
              length2: 20
            },
            emphasis: {
              show: true
            },
          },
          data: data.seriesData
          // [
          // {value: 1048, name: '北分署'},
          // {value: 488, name: '桃分署'},
          // {value: 648, name: '中分署'},
          // {value: 888, name: '南分署'},
          // {value: 248, name: '高分署'}
          // ]
          // ['北分署', '桃分署', '中分署', '南分署', '高分署'];
          // data.map(obj => ({
          //   value: obj['value'],
          //   name: obj['Key']
          // })),
        }, {
          name: '內',
          radius: ['30%', '34%'],
          center: ['50%', '50%'],
          type: 'pie',
          label: {
            alignTo: "edge",
            normal: {
              show: false
            },
            emphasis: {
              show: false
            },
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
            value: 0,
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
          radius: ['64%', '64%'],
          label: {
            normal: {
              show: false
            }
          },
          tooltip: {
            show: false
          },
          data: [{
            value: 10,
            itemStyle: {
              normal: {
                borderWidth: 2,
                borderColor: "rgba(0,0,0,0.12)",
              }
            }
          }]
        }]
      };

      if (option && typeof option === 'object') {
        vocational_training_citys_members_pie.setOption(option);
      }

      window.addEventListener('resize', function() {
        vocational_training_citys_members_pie.resize();
      });
    })();
  }



  // 求職職類訓練量能供給情形
  if ($('#vocational_training_job').length) {
    (function vocational_training() {
      var vocational_training_job = document.getElementById("vocational_training_job");
      var vocational_training_job = echarts.init(vocational_training_job, 'wda_data', {
        renderer: 'svg',
        useDirtyRect: true,
        locale: 'EN'
      });


      let data1 = [];
      let data2 = [];
      let data3 = [];
      let data4 = [];
      let data5 = [];
      for (let i = 0; i < 21; i++) {
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
          text: '求職職類訓練量能供給情形',
          left: "center",
          top: '0',
          textStyle: {
            fontSize: 24,
            fontWeight: 'bolder',
            color: tu_dark,
          }

        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '0%',
          top: '16%',
          containLabel: true
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
        legend: {
          bottom: '0%'
        },
        xAxis: [{
          type: 'category',
          data: category1,
          axisPointer: {
            type: 'shadow'
          },

          axisLabel: {
            fontSize: 14,
            fontWeight: 'bolder',
            color: tu_dark,
            interval: 0,
            rotate: 45
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
            formatter: '{value} 筆'
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
            formatter: '{value} 人'
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
          label: {
            normal: {
              show: true,
              position: 'top',
              lineHeight: 30,
              width: 80,
              height: 30,
              backgroundColor: 'rgba(128,196,220,.66)',
              borderRadius: 200,
              position: ['-16', '-60'],
              distance: 0,
              formatter: [
                '    {d|●}',
                ' {a|{c}人}     \n',
                '    {b|}'
              ].join(' '),
              rich: {
                d: {
                  color: '#80C4DC',
                  textBorderColor: tu_white,
                  textBorderWidth: 2,
                  textShadowColor: tu_white,
                  textShadowBlur: 2,
                },
                a: {
                  color: tu_white,
                  align: 'center',
                  textBorderColor: tu_grey_200,
                  textBorderWidth: 2,
                  textShadowColor: tu_grey_200,
                  textShadowBlur: 0,
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: 'rgba(128,196,220,.66)',
                  align: 'left'
                },
              }
            }
          },
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          data: data1
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
          label: {
            normal: {
              show: true,
              position: 'top',
              lineHeight: 30,
              width: 80,
              height: 30,
              backgroundColor: 'rgba(31,59,179,.66)',
              borderRadius: 200,
              position: ['-16', '-60'],
              distance: 0,
              formatter: [
                '    {d|●}',
                ' {a|{c}人}     \n',
                '    {b|}'
              ].join(' '),
              rich: {
                d: {
                  color: '#1F3BB3',
                  textBorderColor: tu_white,
                  textBorderWidth: 2,
                  textShadowColor: tu_white,
                  textShadowBlur: 2,
                },
                a: {
                  color: tu_white,
                  align: 'center',
                  textBorderColor: tu_grey_200,
                  textBorderWidth: 2,
                  textShadowColor: tu_grey_200,
                  textShadowBlur: 0,
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: 'rgba(31,59,179,.66)',
                  align: 'left'
                },
              }
            }
          },
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          data: data2
        }]
      };

      if (option && typeof option === 'object') {
        vocational_training_job.setOption(option);
      }
      window.addEventListener('resize', function() {
        vocational_training_job.resize();

      });
      vocational_training_job.on('click', function(event) {
        $('#tab-2').show().tab('show');
      });
    })();
  }

  // 求職職類訓練量能供給情形
  if ($('#vocational_training_citys_job').length) {
    (function vocational_training_citys_job() {
      var vocational_training_citys_job = document.getElementById("vocational_training_citys_job");
      var vocational_training_citys_job = echarts.init(vocational_training_citys_job, 'wda_data', {
        renderer: 'svg',
        useDirtyRect: true,
        locale: 'EN'
      });


      let data1 = [];
      let data2 = [];
      let data3 = [];
      let data4 = [];
      let data5 = [];
      for (let i = 0; i < 21; i++) {
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
          text: 'XXX職類別各縣市 - 求職數與職訓量能供給情形',
          left: "center",
          top: '0',
          textStyle: {
            fontSize: 24,
            fontWeight: 'bolder',
            color: tu_dark,
          }

        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '8%',
          top: '16%',
          containLabel: true
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
            fontSize: 14,
            fontWeight: 'bolder',
            color: tu_dark,
            interval: 0,
            rotate: 45
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
            formatter: '{value} 筆'
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
            formatter: '{value} 人'
          }
        }],
        series: [{
          name: '求才開缺數',
          type: 'bar',
          showBackground: true,
          color: '#FF9E9E',
          backgroundStyle: {
            color: 'rgba(154, 160, 168, 0.12)',
            borderRadius: [0, 8, 8, 0]
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0,0,0,0.24)',
            borderRadius: [8, 8, 0, 0]
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              lineHeight: 30,
              width: 80,
              height: 30,
              backgroundColor: 'rgba(255, 158, 158,.66)',
              borderRadius: 200,
              position: ['-16', '-60'],
              distance: 0,
              formatter: [
                '    {d|●}',
                ' {a|{c}人}     \n',
                '    {b|}'
              ].join(' '),
              rich: {
                d: {
                  color: '#FF9E9E',
                  textBorderColor: tu_grey_200,
                  textBorderWidth: 2,
                  textShadowColor: tu_grey_200,
                  textShadowBlur: 2,
                },
                a: {
                  color: tu_dark,
                  align: 'center',
                  textBorderColor: tu_grey_200,
                  textBorderWidth: 2,
                  textShadowColor: tu_grey_200,
                  textShadowBlur: 0,
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: 'rgba(255, 158, 158,.66)',
                  align: 'left'
                },
              }
            }
          },
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          data: data1
        }, {
          name: '職訓課程學員數',
          type: 'bar',
          showBackground: true,
          color: '#FEE482',
          backgroundStyle: {
            color: 'rgba(154, 160, 168, 0.12)',
            borderRadius: [0, 8, 8, 0]
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0,0,0,0.24)',
            borderRadius: [8, 8, 0, 0],
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              lineHeight: 30,
              width: 80,
              height: 30,
              backgroundColor: 'rgba(254, 228, 130,.66)',
              borderRadius: 200,
              position: ['-16', '-60'],
              distance: 0,
              formatter: [
                '    {d|●}',
                ' {a|{c}人}     \n',
                '    {b|}'
              ].join(' '),
              rich: {
                d: {
                  color: '#FEE482',
                  textBorderColor: tu_grey_200,
                  textBorderWidth: 2,
                  textShadowColor: tu_grey_200,
                  textShadowBlur: 2,
                },
                a: {
                  color: tu_dark,
                  align: 'center',
                  textBorderColor: tu_grey_200,
                  textBorderWidth: 2,
                  textShadowColor: tu_grey_200,
                  textShadowBlur: 0,
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: 'rgba(254, 228, 130,.66)',
                  align: 'left'
                },
              }
            }
          },
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          data: data2
        }]
      };

      if (option && typeof option === 'object') {
        vocational_training_citys_job.setOption(option);
      }
      window.addEventListener('resize', function() {
        vocational_training_citys_job.resize();

      });

    })();
  }

  if ($('#vocational_training_citys_pie_job').length) {
    (function vocational_training_citys_pie_job() {
      var dom = document.getElementById("vocational_training_citys_pie_job");
      var vocational_training_citys_pie_job = echarts.init(dom, 'wda_data', {
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
          text: 'XXX職類別各縣市預估參訓學員占比情形',
          textStyle: {
            fontSize: 24,
            fontWeight: 'bolder',
            color: tu_dark,
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
          bottom: '0',

          // right: 10,
          // top: 20,
          // bottom: 20,
          // data: data.legendData
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
            },

            axisLabel: {
              fontSize: 14,
              fontWeight: 'bolder',
              color: tu_dark,
              interval: 0,
              rotate: 45
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
        vocational_training_citys_pie_job.setOption(option);
      }

      window.addEventListener('resize', function() {
        vocational_training_citys_pie_job.resize();
      });

    })();
  }

  // 訓後就業薪資總體比較分析
  if ($('#vocational_training_salary').length) {
    (function vocational_training_salary() {
      var vocational_training_salary = document.getElementById("vocational_training_salary");
      var vocational_training_salary = echarts.init(vocational_training_salary, 'wda_data', {
        renderer: 'svg',
        useDirtyRect: true,
        locale: 'EN'
      });


      let data1 = [];
      let data2 = [];
      let data3 = [];
      let data4 = [];
      let data5 = [];
      for (let i = 0; i < 21; i++) {
        data1.push(+(Math.random() * 20000).toFixed(0));
        data2.push(+(Math.random() * 50000).toFixed(0));
        data3.push(+(Math.random() + 24000).toFixed(0));
        data4.push(+(Math.random() * 10000).toFixed(0));
        data5.push(+(Math.random() * 10000).toFixed(0));
      }
      var emphasisStyle = {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.24)'
        }
      };

      option = {
        title: {
          text: '訓後就業薪資總體比較分析',
          left: "center",
          top: '0',
          textStyle: {
            fontSize: 24,
            fontWeight: 'bolder',
            color: tu_dark,
          }

        },
        grid: {
          left: '2%',
          right: '8%',
          bottom: '0%',
          top: '16%',
          containLabel: true
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
        legend: {
          bottom: '0%'
        },
        xAxis: [{
          type: 'category',
          data: category,
          axisPointer: {
            type: 'shadow'
          },
          axisLabel: {
            fontSize: 14,
            fontWeight: 'bolder',
            color: tu_dark,
            interval: 0,
            rotate: 45
          }
        }],
        yAxis: [{
          show: true,
          type: 'value',
          name: '主計處調查數據',
          nameLocation: 'start',
          min: 0,
          // interval: 50,
          nameTextStyle: {
            color: tu_grey_300,
            align: 'right'
          },
          axisLabel: {
            formatter: '{value} 元'
          }
        }, {
          show: true,

          name: '結訓學員訓後平均加保薪資級距',
          nameLocation: 'start',
          data: salary,
          min: 0,
          nameTextStyle: {
            fontSize: 14,
            color: tu_grey_500,
            align: 'left'
          },
          axisLabel: {
            formatter: '{value} 元'
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
          label: {
            normal: {
              show: true,
              position: 'top',
              lineHeight: 30,
              width: 80,
              height: 30,
              backgroundColor: 'rgba(128,196,220,.66)',
              borderRadius: 200,
              position: ['-16', '-60'],
              distance: 0,
              formatter: [
                '    {d|●}',
                ' {a|{c}人}     \n',
                '    {b|}'
              ].join(' '),
              rich: {
                d: {
                  color: '#80C4DC',
                  textBorderColor: tu_white,
                  textBorderWidth: 2,
                  textShadowColor: tu_white,
                  textShadowBlur: 2,
                },
                a: {
                  color: tu_white,
                  align: 'center',
                  textBorderColor: tu_grey_200,
                  textBorderWidth: 2,
                  textShadowColor: tu_grey_200,
                  textShadowBlur: 0,
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: 'rgba(128,196,220,.66)',
                  align: 'left'
                },
              }
            }
          },
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 元';
            }
          },
          data: data1
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
          label: {
            normal: {
              show: true,
              position: 'top',
              lineHeight: 30,
              width: 80,
              height: 30,
              backgroundColor: 'rgba(31,59,179,.66)',
              borderRadius: 200,
              position: ['-16', '-60'],
              distance: 0,
              formatter: [
                '    {d|●}',
                ' {a|{c}元}     \n',
                '    {b|}'
              ].join(' '),
              rich: {
                d: {
                  color: '#1F3BB3',
                  textBorderColor: tu_white,
                  textBorderWidth: 2,
                  textShadowColor: tu_white,
                  textShadowBlur: 2,
                },
                a: {
                  color: tu_white,
                  align: 'center',
                  textBorderColor: tu_grey_200,
                  textBorderWidth: 2,
                  textShadowColor: tu_grey_200,
                  textShadowBlur: 0,
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: 'rgba(31,59,179,.66)',
                  align: 'left'
                },
              }
            }
          },
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 元';
            }
          },
          data: data2
        }]
      };

      if (option && typeof option === 'object') {
        vocational_training_salary.setOption(option);
      }
      window.addEventListener('resize', function() {
        vocational_training_salary.resize();

      });
      vocational_training_salary.on('click', function(event) {
        $('#tab-2').show().tab('show');
      });
    })();
  }

  // 減班休息與充電再出發申請情形分析
  if ($('#vocational_training_salary_take').length) {
    (function vocational_training_salary_take() {
      var vocational_training_salary_take = document.getElementById("vocational_training_salary_take");
      var vocational_training_salary_take = echarts.init(vocational_training_salary_take, 'wda_data', {
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
        data1.push(+(Math.random() * 20000).toFixed(0));
        data2.push(+(Math.random() * 50000).toFixed(0));
        data3.push(+(Math.random() + 24000).toFixed(0));
        data4.push(+(Math.random() * 10000).toFixed(0));
        data5.push(+(Math.random() * 10000).toFixed(0));
      }
      var emphasisStyle = {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.24)'
        }
      };

      option = {
        title: {
          text: '減班休息與充電再出發申請情形分析 勞工數統計',
          left: "center",
          top: '0',
          textStyle: {
            fontSize: 24,
            fontWeight: 'bolder',
            color: tu_dark,
          }

        },
        grid: {
          left: '2%',
          right: '8%',
          bottom: '0%',
          top: '16%',
          containLabel: true
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
            fontSize: 14,
            fontWeight: 'bolder',
            color: tu_dark,
            interval: 0,
            rotate: 45
          }
        }],
        yAxis: [{
          show: true,
          type: 'value',
          name: '減班休息通報本國籍勞工數',
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
          show: true,
          type: 'value',
          name: '充電再出發核定勞工數',
          nameLocation: 'start',

          min: 0,
          max: 50000,
          nameTextStyle: {
            fontSize: 14,
            color: tu_grey_500,
            align: 'left'
          },
          axisLabel: {
            formatter: '{value} 人'
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
          label: {
            normal: {
              show: true,
              position: 'top',
              lineHeight: 30,
              width: 80,
              height: 30,
              backgroundColor: 'rgba(128,196,220,.66)',
              borderRadius: 200,
              position: ['-16', '-60'],
              distance: 0,
              formatter: [
                '    {d|●}',
                ' {a|{c}人}     \n',
                '    {b|}'
              ].join(' '),
              rich: {
                d: {
                  color: '#80C4DC',
                  textBorderColor: tu_white,
                  textBorderWidth: 2,
                  textShadowColor: tu_white,
                  textShadowBlur: 2,
                },
                a: {
                  color: tu_white,
                  align: 'center',
                  textBorderColor: tu_grey_200,
                  textBorderWidth: 2,
                  textShadowColor: tu_grey_200,
                  textShadowBlur: 0,
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: 'rgba(128,196,220,.66)',
                  align: 'left'
                },
              }
            }
          },
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          data: data1
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
          label: {
            normal: {
              show: true,
              position: 'top',
              lineHeight: 30,
              width: 80,
              height: 30,
              backgroundColor: 'rgba(31,59,179,.66)',
              borderRadius: 200,
              position: ['-16', '-60'],
              distance: 0,
              formatter: [
                '    {d|●}',
                ' {a|{c}人}     \n',
                '    {b|}'
              ].join(' '),
              rich: {
                d: {
                  color: '#1F3BB3',
                  textBorderColor: tu_white,
                  textBorderWidth: 2,
                  textShadowColor: tu_white,
                  textShadowBlur: 2,
                },
                a: {
                  color: tu_white,
                  align: 'center',
                  textBorderColor: tu_grey_200,
                  textBorderWidth: 2,
                  textShadowColor: tu_grey_200,
                  textShadowBlur: 0,
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: 'rgba(31,59,179,.66)',
                  align: 'left'
                },
              }
            }
          },
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          data: data2
        }]
      };

      if (option && typeof option === 'object') {
        vocational_training_salary_take.setOption(option);
      }
      window.addEventListener('resize', function() {
        vocational_training_salary_take.resize();

      });
      vocational_training_salary_take.on('click', function(event) {
        $('#tab-2').show().tab('show');
      });
    })();
  }

  // 減班休息與充電再出發申請情形分析
  if ($('#vocational_training_salary_corp').length) {
    (function vocational_training_salary_corp() {
      var vocational_training_salary_corp = document.getElementById("vocational_training_salary_corp");
      var vocational_training_salary_corp = echarts.init(vocational_training_salary_corp, 'wda_data', {
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
        data1.push(+(Math.random() * 20000).toFixed(0));
        data2.push(+(Math.random() * 50000).toFixed(0));
        data3.push(+(Math.random() + 24000).toFixed(0));
        data4.push(+(Math.random() * 10000).toFixed(0));
        data5.push(+(Math.random() * 10000).toFixed(0));
      }
      var emphasisStyle = {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.24)'
        }
      };

      option = {
        title: {
          text: '減班休息與充電再出發申請情形分析 廠商數統計',
          left: "center",
          top: '0',
          textStyle: {
            fontSize: 24,
            fontWeight: 'bolder',
            color: tu_dark,
          }

        },
        grid: {
          left: '2%',
          right: '8%',
          bottom: '0%',
          top: '16%',
          containLabel: true
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
        legend: {
          bottom: '0%'
        },
        xAxis: [{
          type: 'category',
          data: category1,
          axisPointer: {
            type: 'shadow'
          },
          axisLabel: {
            fontSize: 14,
            fontWeight: 'bolder',
            color: tu_dark,
            interval: 0,
            rotate: 45
          }
        }],
        yAxis: [{
          show: true,
          type: 'value',
          name: '減班休息申報廠商數',
          nameLocation: 'start',
          min: 0,
          // interval: 50,
          nameTextStyle: {
            color: tu_grey_300,
            align: 'right'
          },
          axisLabel: {
            formatter: '{value} 家'
          }
        }, {
          show: true,
          type: 'value',
          name: '充電再出發核定勞工數',
          nameLocation: 'start',
          min: 0,
          max: 50000,
          nameTextStyle: {
            fontSize: 14,
            color: tu_grey_500,
            align: 'left'
          },
          axisLabel: {
            formatter: '{value} 人'
          }
        }],
        series: [{
          name: '減班休息申報廠商數',
          type: 'bar',
          showBackground: true,
          color: 'rgba(136,76,94,1)',
          backgroundStyle: {
            color: 'rgba(154, 160, 168, 0.12)',
            borderRadius: [0, 8, 8, 0]
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0,0,0,0.24)',
            borderRadius: [8, 8, 0, 0]
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              lineHeight: 30,
              width: 80,
              height: 30,
              backgroundColor: 'rgba(136,76,94,.66)',
              borderRadius: 200,
              position: ['-16', '-60'],
              distance: 0,
              formatter: [
                '    {d|●}',
                ' {a|{c}家數}     \n',
                '    {b|}'
              ].join(' '),
              rich: {
                d: {
                  color: 'rgba(136,76,94,1)',
                  textBorderColor: tu_white,
                  textBorderWidth: 2,
                  textShadowColor: tu_white,
                  textShadowBlur: 2,
                },
                a: {
                  color: tu_white,
                  align: 'center',
                  textBorderColor: tu_grey_200,
                  textBorderWidth: 2,
                  textShadowColor: tu_grey_200,
                  textShadowBlur: 0,
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: 'rgba(136,76,94,.66)',
                  align: 'left'
                },
              }
            }
          },
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          data: data1
        }, {
          name: '充電再出發核定勞工數',
          type: 'bar',
          showBackground: true,
          color: 'rgba(0,158,247,1)',
          backgroundStyle: {
            color: 'rgba(154, 160, 168, 0.12)',
            borderRadius: [0, 8, 8, 0]
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0,0,0,0.24)',
            borderRadius: [8, 8, 0, 0],
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              lineHeight: 30,
              width: 80,
              height: 30,
              backgroundColor: 'rgba(0,158,247,.66)',
              borderRadius: 200,
              position: ['-16', '-60'],
              distance: 0,
              formatter: [
                '    {d|●}',
                ' {a|{c}人}     \n',
                '    {b|}'
              ].join(' '),
              rich: {
                d: {
                  color: 'rgba(0,158,247,1)',
                  textBorderColor: tu_white,
                  textBorderWidth: 2,
                  textShadowColor: tu_white,
                  textShadowBlur: 2,
                },
                a: {
                  color: tu_white,
                  align: 'center',
                  textBorderColor: tu_grey_200,
                  textBorderWidth: 2,
                  textShadowColor: tu_grey_200,
                  textShadowBlur: 0,
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: 'rgba(0,158,247,.66)',
                  align: 'left'
                },
              }
            }
          },
          tooltip: {
            valueFormatter: function(value) {
              return value + ' 人';
            }
          },
          data: data2
        }]
      };

      if (option && typeof option === 'object') {
        vocational_training_salary_corp.setOption(option);
      }
      window.addEventListener('resize', function() {
        vocational_training_salary_corp.resize();

      });
      vocational_training_salary_corp.on('click', function(event) {
        $('#tab-2').show().tab('show');
      });
    })();
  }


  if ($('#vocational_training_salary_take_pie').length) {
    (function vocational_training_salary_take_pie() {
      var dom = document.getElementById("vocational_training_salary_take_pie");
      var vocational_training_salary_take_pie = echarts.init(dom, 'wda_data', {
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
          text: 'XXX行業別－減班休息廠商與核定充電再出發各縣市家數占比',
          textStyle: {
            fontSize: 24,
            fontWeight: 'bolder',
            color: tu_dark,
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
          bottom: '0',

          // right: 10,
          // top: 20,
          // bottom: 20,
          // data: data.legendData
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
            },

            axisLabel: {
              fontSize: 14,
              fontWeight: 'bolder',
              color: tu_dark,
              interval: 0,
              rotate: 45
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
        vocational_training_salary_take_pie.setOption(option);
      }

      window.addEventListener('resize', function() {
        vocational_training_salary_take_pie.resize();
      });

    })();
  }