// before_1 參訓學員背景分析
if ($('#employment_analysis_bg').length) {
  (function employment_analysis_bg() {
    var dom = document.getElementById("employment_analysis_bg");
    var employment_analysis_bg = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    let data1 = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];
    let data5 = [];

    for (let i = 0; i < 5; i++) {
      data1.push(+(Math.random() * 200).toFixed(0));
      data2.push(+(Math.random() * 500).toFixed(0));
      data3.push(+(Math.random() + 240).toFixed(0));
      data4.push(+(Math.random() * 100).toFixed(0));
      data5.push(+(Math.random() * 100).toFixed(0));
    }

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
        data: branch,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 18,
          fontWeight: 'bolder',
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
        name: '自辦',
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
        name: '委外',
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
      }, {
        name: '輔助',
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
            backgroundColor: 'rgba(136,76,94,.66)',
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
        data: data3
      }, {
        name: '錄取率',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 16,
        lineStyle: {
          opacity: 0.66,
          width: 3
        },
        itemStyle: {
          opacity: 0.66
        },
        markPoint: {
          symbolSize: 56,
          data: [{
            type: 'max',
            name: 'Max'
          }],
          itemStyle: {
            opacity: 0.88
          },
          label: {
            textBorderType: "solid",
            textBorderWidth: 2,
            textBorderColor: '#14927A',
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
      employment_analysis_bg.setOption(option, true);
    }

    window.addEventListener('resize', function() {
      employment_analysis_bg.resize();
    });

    employment_analysis_bg.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}
// before_1 性別與年齡分布
if ($('#employment_gender').length) {
  (function employment_gender() {
    var dom = document.getElementById("employment_gender");
    var employment_gender = echarts.init(dom, 'wda_data', {
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
        text: 'XXX 行業別 - 訓後就業學員性別年齡占比',
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
        left: '44%',
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
      employment_gender.setOption(option);
    }
    window.addEventListener('resize', function() {
      employment_gender.resize();
    });

  })();
}
// before_1 學歷分布情形
if ($('#employment_education').length) {
  (function employment_education() {
    var dom = document.getElementById('employment_education');
    var employment_education = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    option = {
      title: {
        text: '學歷分布情形',
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '10%',
        top: '12%',
        containLabel: true
      },
      legend: {
        bottom: 'bottom'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [{
        name: '教育程度',
        type: 'pie',
        radius: ['2%', '76%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 20
        },
        label: {
          alignTo: 'edge',
          formatter: '{name|{b}}\n{people|{c} 人數}',
          minMargin: 80,
          edgeDistance: 0,
          lineHeight: 16,
          rich: {
            name: {
              fontSize: 16,
              fontWeight: 'bold',
              color: tu_dark,
              padding: 0
            },
            people: {
              fontSize: 10,
              color: tu_grey_800,
              padding: 0
            }
          }
        },
        labelLine: {
          length: 15,
          length2: 0,
          maxSurfaceAngle: 80
        },
        data: [{
          value: 40,
          name: '國小'
        }, {
          value: 38,
          name: '國中'
        }, {
          value: 32,
          name: '高中'
        }, {
          value: 30,
          name: '大學'
        }, {
          value: 28,
          name: '碩士'
        }, {
          value: 26,
          name: '博士'
        }, ]
      }]
    };

    if (option && typeof option === 'object') {
      employment_education.setOption(option);
    }
    window.addEventListener('resize', function() {
      employment_education.resize();

    });

  })();
}

// before_1 參訓身分別統計
if ($('#employment_identity').length) {
  (function employment_identity() {
    var chartDom = document.getElementById('employment_identity');
    var employment_identity = echarts.init(chartDom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    var option;

    option = {
      title: {
        text: '參訓身分別統計',
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true
      },
      series: [{
        type: 'treemap',
        nodeClick: false,
        roam: false,
        breadcrumb: {
          show: false,
        },
        data: [{
          name: '身份別 1',
          value: 28,
          itemStyle: {
            normal: {
              borderColor: tu_white,
              borderWidth: 2,
              gapWidth: 2
            }
          },
          children: [{
            name: '身份別 1-1',
            value: 16
          }, {
            name: '身份別 1-2',
            value: 12
          }]
        }, {
          name: '身份別 2',
          value: 44,
          itemStyle: {
            normal: {
              borderColor: tu_white,
              borderWidth: 2,
              gapWidth: 2
            }
          },
          children: [{

            name: '身份別 2-1',
            value: 24,
          }, {
            name: '身份別 2-2',
            value: 12
          }, {
            name: '身份別 2-3',
            value: 8
          }]
        }, {
          name: '身份別 3',
          value: 54,
          itemStyle: {
            normal: {
              borderColor: tu_white,
              borderWidth: 2,
              gapWidth: 2
            }
          },
          children: [{
            name: '身份別 3-1',
            value: 20,
          }, {
            name: '身份別 3-2',
            value: 16
          }, {
            name: '身份別 3-3',
            value: 18
          }]
        }, {
          name: '身份別 4',
          value: 50,
          itemStyle: {
            normal: {
              borderColor: tu_white,
              borderWidth: 2,
              gapWidth: 2
            }
          },
          children: [{
            name: '身份別 3-1',
            value: 12,
          }, {
            name: '身份別 3-2',
            value: 20
          }, {
            name: '身份別 3-3',
            value: 18
          }]
        }, {
          name: '身份別 5',
          value: 16,
          itemStyle: {
            normal: {
              borderColor: tu_white,
              borderWidth: 2,
              gapWidth: 1
            }
          },
          children: [{
            name: '身份別 5-1',
            value: 12,
          }, {
            name: '身份別 5-2',
            value: 20
          }, {
            name: '身份別 5-3',
            value: 18
          }]
        }],
        itemStyle: {
          borderRadius: [4, 4, 4, 4],

        }
      }]
    };

    if (option && typeof option === 'object') {
      employment_identity.setOption(option);
    }

    window.addEventListener('resize', function() {
      employment_identity.resize();

    });
  })();
}
// before_2 分署職訓執行情形
if ($('#employment_training').length) {
  (function employment_training() {

    var employment_training = document.getElementById("employment_training");
    var employment_training = echarts.init(employment_training, 'wda_data', {
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
    let data7 = [];
    let data8 = [];
    let data9 = [];
    let data10 = [];
    let data11 = [];
    let data12 = [];
    let data13 = [];
    let data14 = [];
    let data15 = [];
    let data16 = [];
    let data17 = [];
    let data18 = [];
    let data19 = [];
    let data20 = [];
    let data21 = [];

    for (let i = 0; i < 5; i++) {
      data1.push(getRandom(1000, 2000));
      data2.push(getRandom(800, 1000));
      data3.push(getRandom(600, 800));
      data4.push(getRandom(400, 600));
      data5.push(getRandom(200, 400));

      data6.push(getRandom(1100, 2100));
      data7.push(getRandom(900, 1100));
      data8.push(getRandom(700, 900));
      data9.push(getRandom(500, 700));
      data10.push(getRandom(100, 500));

      data11.push(getRandom(800, 1200));
      data12.push(getRandom(700, 800));
      data13.push(getRandom(550, 700));
      data14.push(getRandom(400, 550));
      data15.push(getRandom(150, 390));

      data16.push(getRandom(40, 80));
      data17.push(getRandom(60, 80));
      data18.push(getRandom(50, 80));
      data19.push(getRandom(40, 80));
      data20.push(getRandom(60, 80));
      data21.push(getRandom(70, 90));
    }

    option = {
      legend: {
        width: "66%",
        bottom: '0'
      },
      grid: {
        left: '4%',
        right: '4%',
        bottom: '16%',
        top: '4%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: ['北分署', '桃分署', '中分署', '南分署', '高分署'],
        axisLabel: {
          fontSize: 18,
          top: '12',
          color: tu_dark,
          padding: [8, 0, 0, 8]
        }
      }, {
        type: 'category',
        show: true,
        axisLabel: {
          textStyle: {
            color: tu_white,
            fontSize: 18,
            backgroundColor: 'rgba(40, 45, 60, .88)',
            borderRadius: [6, 24, 6, 24],
            height: 32,
            lineHeight: 32,
          },
          margin: 12,
          width: 200,
          padding: [8, 12, 8, 12]
        },
        data: ['自辦', '委外', '補助'],
      }],
      yAxis: [{
        type: 'value',
        name: '人數',
        min: 0,
        nameLocation: 'start',
        axisLabel: {
          formatter: '{value} 人'
        }
      }, {
        type: 'value',
        name: '百分比',
        min: 0,
        max: 100,
        nameLocation: 'start',
        axisLabel: {
          formatter: '{value} %'
        }
      }],
      series: [{
          name: '自辦 報名',
          type: 'bar',
          barWidth: 54,
          color: tu_primary_800,
          itemStyle: {
            z: 10,
            opacity: 0.88,
            shadowBlur: 10,
            shadowColor: 'rgba(0,0,0,0.12)',
            borderRadius: [12, 12, 0, 0],
            borderColor: tu_white,
            borderWidth: 2,
            color: function(params) {
              return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: tu_primary_700
              }, {
                offset: 1,
                color: tu_primary_800
              }], false);
            },
          },
          data: data1,
        }, {
          name: '自辦 甄試',
          type: 'bar',
          barWidth: 40,
          barGap: '-88%',
          color: tu_primary_700,
          itemStyle: {
            z: 10,
            opacity: 0.48,
            shadowBlur: 10,
            shadowColor: 'rgba(0,0,0,0.12)',
            borderRadius: [8, 8, 0, 0],
            borderColor: tu_white,
            borderWidth: 1,
            color: function(params) {
              return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: tu_primary_500
              }, {
                offset: 1,
                color: tu_primary_600
              }], false);
            },
          },
          data: data2,
        }, {
          name: '自辦 開訓',
          type: 'bar',
          barWidth: 30,
          color: tu_primary_600,
          itemStyle: {
            z: 10,
            opacity: 0.48,
            borderColor: tu_white,
            borderWidth: 1,
            shadowBlur: 10,
            shadowColor: 'rgba(0,0,0,0.12)',
            borderRadius: [8, 8, 0, 0],
            color: function(params) {
              return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: tu_primary_300
              }, {
                offset: 1,
                color: tu_primary_400
              }], false);
            },
          },
          data: data3
        }, {
          name: '自辦 結訓',
          type: 'bar',
          barWidth: 24,

          color: tu_primary_600,
          itemStyle: {
            z: 10,
            opacity: 0.48,
            shadowBlur: 10,
            borderColor: tu_white,
            borderWidth: 1,
            shadowColor: 'rgba(0,0,0,0.12)',
            borderRadius: [6, 6, 0, 0],
            color: function(params) {
              return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: tu_primary_200
              }, {
                offset: 1,
                color: tu_primary_300
              }], false);
            },
          },
          data: data4
        }, {
          name: '自辦 就業',
          type: 'bar',
          barWidth: 18,
          // barGap: '-100%',
          color: tu_primary_500,
          itemStyle: {
            borderColor: tu_white,
            borderWidth: 1,
            opacity: 0.48,
            shadowBlur: 10,
            shadowColor: 'rgba(0,0,0,0.12)',
            borderRadius: [4, 4, 0, 0],
            color: function(params) {
              return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: tu_primary_100
              }, {
                offset: 1,
                color: tu_primary_200
              }], false);
            },
          },
          data: data5,
        },
        // {
        //   name: '委外 報名',
        //   type: 'bar',
        //   barWidth: 36,

        //   color: tu_secondary_800,
        //   yAxisIndex: 0,
        //   itemStyle: {
        //     shadowBlur: 10,
        //     shadowColor: 'rgba(0,0,0,0.12)',
        //     borderRadius: [8, 8, 0, 0]
        //   },
        //   data: data6
        // }, {
        //   name: '委外 甄試',
        //   type: 'bar',
        //   barWidth: 32,
        //   color: tu_secondary_700,
        //   yAxisIndex: 0,
        //   itemStyle: {
        //     shadowBlur: 10,
        //     shadowColor: 'rgba(0,0,0,0.12)',
        //     borderRadius: [8, 8, 0, 0]
        //   },
        //   data: data7
        // }, {
        //   name: '委外 開訓',
        //   type: 'bar',
        //   barWidth: 28,
        //   color: tu_secondary_600,
        //   yAxisIndex: 0,
        //   itemStyle: {
        //     shadowBlur: 10,
        //     shadowColor: 'rgba(0,0,0,0.12)',
        //     borderRadius: [8, 8, 0, 0]
        //   },
        //   data: data8
        // }, {
        //   name: '委外 結訓',
        //   type: 'bar',
        //   barWidth: 24,
        //   color: tu_secondary_500,
        //   yAxisIndex: 0,
        //   itemStyle: {
        //     shadowBlur: 10,
        //     shadowColor: 'rgba(0,0,0,0.12)',
        //     borderRadius: [8, 8, 0, 0]
        //   },
        //   data: data9
        // }, {
        //   name: '委外 就業',
        //   type: 'bar',
        //   barWidth: 20,
        //   barGap: '-92%',
        //   barCategoryGap: -20,
        //   color: tu_secondary_400,
        //   yAxisIndex: 0,
        //   tooltip: {
        //     valueFormatter: function(value) {
        //       return value + ' 人';
        //     }
        //   },
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   itemStyle: {
        //     shadowBlur: 10,
        //     shadowColor: 'rgba(0,0,0,0.12)',
        //     borderRadius: [8, 8, 8, 8]
        //   },
        //   data: data10
        // },



        // {
        //   name: '補助 報名',
        //   type: 'bar',
        //   stack: '補助',
        //   color: tu_tertiary_800,
        //   yAxisIndex: 0,
        //   tooltip: {
        //     valueFormatter: function(value) {
        //       return value + ' 人';
        //     }
        //   },
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   itemStyle: {
        //     shadowBlur: 10,
        //     shadowColor: 'rgba(0,0,0,0.12)',
        //     borderRadius: [8, 8, 8, 8]
        //   },
        //   data: data11
        // }, {
        //   name: '補助 甄試',
        //   type: 'bar',
        //   stack: '補助',
        //   color: tu_tertiary_700,
        //   yAxisIndex: 0,
        //   tooltip: {
        //     valueFormatter: function(value) {
        //       return value + ' 人';
        //     }
        //   },
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   itemStyle: {
        //     shadowBlur: 10,
        //     shadowColor: 'rgba(0,0,0,0.12)',
        //     borderRadius: [8, 8, 8, 8]
        //   },
        //   data: data12
        // }, {
        //   name: '補助 開訓',
        //   type: 'bar',
        //   stack: '補助',
        //   color: tu_tertiary_600,
        //   yAxisIndex: 0,
        //   tooltip: {
        //     valueFormatter: function(value) {
        //       return value + ' 人';
        //     }
        //   },
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   itemStyle: {
        //     shadowBlur: 10,
        //     shadowColor: 'rgba(0,0,0,0.12)',
        //     borderRadius: [8, 8, 8, 8]
        //   },
        //   data: data13
        // }, {
        //   name: '補助 結訓',
        //   type: 'bar',
        //   stack: '補助',
        //   color: tu_tertiary_500,
        //   yAxisIndex: 0,
        //   tooltip: {
        //     valueFormatter: function(value) {
        //       return value + ' 人';
        //     }
        //   },
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   itemStyle: {
        //     shadowBlur: 10,
        //     shadowColor: 'rgba(0,0,0,0.12)',
        //     borderRadius: [8, 8, 8, 8]
        //   },
        //   data: data14
        // }, {
        //   name: '補助 就業',
        //   type: 'bar',
        //   stack: '補助',
        //   color: tu_tertiary_400,
        //   yAxisIndex: 0,
        //   tooltip: {
        //     valueFormatter: function(value) {
        //       return value + ' 人';
        //     }
        //   },
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   itemStyle: {
        //     shadowBlur: 10,
        //     shadowColor: 'rgba(0,0,0,0.12)',
        //     borderRadius: [8, 8, 8, 8]
        //   },
        //   data: data15
        // }, {
        //   name: '自辦 結訓率',
        //   type: 'line',
        //   yAxisIndex: 1,
        //   smooth: true,
        //   color: "#66686C",
        //   symbol: 'emptyCircle',
        //   symbolSize: 12,
        //   opacity: 0.88,
        //   markLine: {
        //     symbol: ['circle', 'triangle'],
        //     label: {
        //       position: "end",
        //       backgroundColor: "rgba(0, 158, 247,.66)",
        //       borderRadius: 4,
        //       color: tu_white,
        //       fontSize: 12,
        //       padding: [4, 2],
        //       formatter: "自辦 80%",
        //     },
        //     data: [{
        //       silent: false,
        //       lineStyle: {
        //         type: "dashed",
        //         width: 1,
        //         color: tu_info_500,
        //       },
        //       yAxis: 80,
        //     }]
        //   },
        //   lineStyle: {
        //     opacity: 0.88,
        //     width: 2,
        //     shadowColor: 'rgba(0, 0, 0, 0.24)',
        //     shadowBlur: 2
        //   },
        //   itemStyle: {
        //     opacity: 0.88,
        //     borderColor: tu_white,
        //     borderWidth: 2,
        //   },
        //   tooltip: {
        //     valueFormatter: function(value) {
        //       return value + ' %';
        //     }
        //   },
        //   data: data16,
        // }, 
        // {
        //   name: '自辦 就業率',
        //   type: 'line',
        //   yAxisIndex: 1,
        //   smooth: true,
        //   color: "#66686C",
        //   symbol: 'circle',
        //   symbolSize: 12,
        //   opacity: 0.88,
        //   lineStyle: {
        //     opacity: 0.88,
        //     width: 2,
        //     shadowColor: 'rgba(0, 0, 0, 0.24)',
        //     shadowBlur: 2
        //   },
        //   itemStyle: {
        //     opacity: 0.88,
        //     borderColor: tu_white,
        //     borderWidth: 2,
        //   },
        //   tooltip: {
        //     valueFormatter: function(value) {
        //       return value + ' %';
        //     }
        //   },
        //   data: data17,
        // }, {
        //   name: '委外 結訓率',
        //   type: 'line',
        //   yAxisIndex: 1,
        //   smooth: true,
        //   color: '#81CC45',
        //   symbol: 'emptyCircle',
        //   symbolSize: 12,
        //   opacity: 0.66,
        //   markLine: {
        //     symbol: ['circle', 'triangle'],
        //     label: {
        //       position: "end",
        //       backgroundColor: "rgba(249, 185, 89,.88)",
        //       borderRadius: 4,
        //       color: tu_white,
        //       fontSize: 12,
        //       padding: [4, 2],
        //       formatter: "委辦 75%",
        //     },
        //     data: [{
        //       silent: false,
        //       lineStyle: {
        //         type: "dashed",
        //         width: 1,
        //         color: tu_warning_500,
        //       },
        //       yAxis: 75,
        //     }]
        //   },
        //   lineStyle: {
        //     opacity: 0.88,
        //     width: 2,
        //     shadowColor: 'rgba(0, 0, 0, 0.24)',
        //     shadowBlur: 2
        //   },
        //   itemStyle: {
        //     opacity: 0.88,
        //     borderColor: tu_white,
        //     borderWidth: 2,
        //   },
        //   tooltip: {
        //     valueFormatter: function(value) {
        //       return value + ' %';
        //     }
        //   },
        //   data: data18,
        // }, {
        //   name: '委外 就業率',
        //   type: 'line',
        //   yAxisIndex: 1,
        //   smooth: true,
        //   color: '#81CC45',
        //   symbol: 'circle',
        //   symbolSize: 12,
        //   opacity: 0.88,
        //   lineStyle: {
        //     opacity: 0.88,
        //     width: 2
        //   },
        //   itemStyle: {
        //     opacity: 0.88,
        //     borderColor: tu_white,
        //     borderWidth: 2,
        //   },
        //   tooltip: {
        //     valueFormatter: function(value) {
        //       return value + ' %';
        //     }
        //   },
        //   data: data19,
        // }, {
        //   name: '補助 結訓率',
        //   type: 'line',
        //   yAxisIndex: 1,
        //   smooth: true,
        //   color: "#F9D23C",
        //   symbol: 'emptyCircle',
        //   symbolSize: 12,
        //   opacity: 0.88,
        //   lineStyle: {
        //     opacity: 0.88,
        //     width: 2,
        //     shadowColor: 'rgba(0, 0, 0, 0.24)',
        //     shadowBlur: 2
        //   },
        //   itemStyle: {
        //     opacity: 0.88,
        //     borderColor: tu_white,
        //     borderWidth: 2,
        //   },
        //   tooltip: {
        //     valueFormatter: function(value) {
        //       return value + ' %';
        //     }
        //   },
        //   data: data20,
        // }, {
        //   name: '補助 就業率',
        //   type: 'line',
        //   yAxisIndex: 1,
        //   smooth: true,
        //   color: "#F9D23C",
        //   symbol: 'circle',
        //   symbolSize: 12,
        //   opacity: 0.88,
        //   lineStyle: {
        //     opacity: 0.88,
        //     width: 2,
        //     shadowColor: 'rgba(0, 0, 0, 0.24)',
        //     shadowBlur: 2
        //   },
        //   itemStyle: {
        //     opacity: 0.88,
        //     borderColor: tu_white,
        //     borderWidth: 2,
        //   },
        //   tooltip: {
        //     valueFormatter: function(value) {
        //       return value + ' %';
        //     }
        //   },
        //   data: data21,
        // }
      ],
      tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
          axis: 'x', // 'x', 'y', 'radius', 'angle'
          type: 'shadow'
        }
      },
    };

    if (option && typeof option === 'object') {
      employment_training.setOption(option);
    }
    window.addEventListener('resize', function() {
      employment_training.resize();
    });
    employment_training.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}

// before_2 分署職訓執行情形 自辦
if ($('#employment_training_self').length) {
  (function employment_training_self() {
    var employment_training_self = document.getElementById("employment_training_self");
    var employment_training_self = echarts.init(employment_training_self, 'wda_data', {
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
    let data7 = [];

    for (let i = 0; i < 6; i++) {
      data1.push(+(Math.random() * 200).toFixed(0));
      data2.push(+(Math.random() * 500).toFixed(0));
      data3.push(+(Math.random() + 240).toFixed(0));
      data4.push(+(Math.random() * 100).toFixed(0));
      data5.push(+(Math.random() * 100).toFixed(0));
      data6.push(getRandom(60, 80));
      data7.push(getRandom(70, 90));
    }

    option = {
      title: {
        text: '分署職訓執行情形 - 自辦',
        left: "center",
        top: '0',
        textStyle: {
          fontSize: 24,
          fontWeight: 'bolder',
          color: tu_dark,
        }
      },
      grid: {
        left: '4%',
        right: '4%',
        bottom: '10%',
        top: '12%',
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
        data: ['報名', '甄試', '開訓', '結訓', '就業', '結訓率', '就業率'],
        bottom: '0%'
      },
      xAxis: [{
        type: 'category',
        data: ['一股', '二股', '三股', '四股', '五股', '六股'],
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 18,
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
        name: '報名',
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
        name: '甄試',
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
      }, {
        name: '開訓',
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
            backgroundColor: 'rgba(136,76,94,.66)',
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
        data: data3
      }, {
        name: '結訓',
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
            backgroundColor: 'rgba(136,76,94,.66)',
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
        data: data4
      }, {
        name: '就業',
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
            backgroundColor: 'rgba(136,76,94,.66)',
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
        data: data5
      }, {
        name: '結訓率',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 16,
        lineStyle: {
          opacity: 0.66,
          width: 3
        },
        itemStyle: {
          opacity: 0.66
        },
        markPoint: {
          symbolSize: 56,
          data: [{
            type: 'max',
            name: 'Max'
          }],
          itemStyle: {
            opacity: 0.88
          },
          label: {
            textBorderType: "solid",
            textBorderWidth: 2,
            textBorderColor: '#fff',
            formatter: '{c}%',
            textShadowColor: tu_white,
            textShadowBlur: 0,
          },
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' %';
          }
        },
        data: data6
      }, {
        name: '就業率',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 16,
        lineStyle: {
          opacity: 0.66,
          width: 3
        },
        itemStyle: {
          opacity: 0.66
        },
        markPoint: {
          symbolSize: 56,
          data: [{
            type: 'max',
            name: 'Max'
          }],
          itemStyle: {
            opacity: 0.88
          },
          label: {
            textBorderType: "solid",
            textBorderWidth: 2,
            textBorderColor: '#fff',
            formatter: '{c}%',
            textShadowColor: tu_white,
            textShadowBlur: 0,
          },
        },
        markLine: {
          symbol: ['circle', 'triangle'],
          label: {
            position: "end",
            backgroundColor: "rgba(0, 158, 247,.66)",
            borderRadius: 4,
            color: tu_white,
            fontSize: 12,
            padding: [4, 2],
            formatter: "自辦 80%",
          },
          data: [{
            silent: false,
            lineStyle: {
              type: "dashed",
              width: 1,
              color: tu_info_500,
            },
            yAxis: 80,
          }]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' %';
          }
        },
        data: data7
      }]
    };

    if (option && typeof option === 'object') {
      employment_training_self.setOption(option, true);
    }
    window.addEventListener('resize', function() {
      employment_training_self.resize();
    });
  })();
}
// before_2 分署職訓執行情形 委辦
if ($('#employment_training_side').length) {
  (function employment_training_side() {
    var employment_training_side = document.getElementById("employment_training_side");
    var employment_training_side = echarts.init(employment_training_side, 'wda_data', {
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
    let data7 = [];

    for (let i = 0; i < 5; i++) {
      data1.push(+(Math.random() * 200).toFixed(0));
      data2.push(+(Math.random() * 500).toFixed(0));
      data3.push(+(Math.random() + 240).toFixed(0));
      data4.push(+(Math.random() * 100).toFixed(0));
      data5.push(+(Math.random() * 100).toFixed(0));
      data6.push(getRandom(60, 80));
      data7.push(getRandom(70, 90));
    }

    option = {
      title: {
        text: '分署職訓執行情形 - 委辦',
      },
      grid: {
        left: '4%',
        right: '4%',
        bottom: '10%',
        top: '12%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: tu_grey_500
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
        data: ['報名', '甄試', '開訓', '結訓', '就業', '結訓率', '就業率'],
        bottom: '0%'
      },
      xAxis: [{
        type: 'category',
        data: category3,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 18,
          fontWeight: 'bolder',
          interval: 0,
          rotate: 45,
          color: tu_dark,
        }
      }],
      yAxis: [{
        type: 'value',
        name: '人數',
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
        name: '報名',
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
        name: '甄試',
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
      }, {
        name: '開訓',
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
            backgroundColor: 'rgba(136,76,94,.66)',
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
        data: data3
      }, {
        name: '結訓',
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
            backgroundColor: 'rgba(136,76,94,.66)',
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
        data: data4
      }, {
        name: '就業',
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
            backgroundColor: 'rgba(136,76,94,.66)',
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
        data: data5
      }, {
        name: '結訓率',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 16,
        lineStyle: {
          opacity: 0.66,
          width: 3
        },
        itemStyle: {
          opacity: 0.66
        },
        markPoint: {
          symbolSize: 56,
          data: [{
            type: 'max',
            name: 'Max'
          }],
          itemStyle: {
            opacity: 0.88
          },
          label: {
            textBorderType: "solid",
            textBorderWidth: 2,
            textBorderColor: '#fff',
            formatter: '{c}%',
            textShadowColor: tu_white,
            textShadowBlur: 0,
          },
        },
        markLine: {
          symbol: ['circle', 'triangle'],
          label: {
            position: "end",
            backgroundColor: "rgba(249, 185, 89,.88)",
            borderRadius: 4,
            color: tu_white,
            fontSize: 12,
            padding: [4, 2],
            formatter: "委外 75%",
          },
          data: [{
            silent: false,
            lineStyle: {
              type: "dashed",
              width: 1,
              color: tu_warning_500,
            },
            yAxis: 75,
          }]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' %';
          }
        },
        data: data6
      }, {
        name: '就業率',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 16,
        lineStyle: {
          opacity: 0.66,
          width: 3
        },
        itemStyle: {
          opacity: 0.66
        },
        markPoint: {
          symbolSize: 56,
          data: [{
            type: 'max',
            name: 'Max'
          }],
          itemStyle: {
            opacity: 0.88
          },
          label: {
            textBorderType: "solid",
            textBorderWidth: 2,
            textBorderColor: '#fff',
            formatter: '{c}%',
            textShadowColor: tu_white,
            textShadowBlur: 0,
          },
        },
        markLine: {
          symbol: ['circle', 'triangle'],
          label: {
            position: "end",
            backgroundColor: "rgba(249, 185, 89,.88)",
            borderRadius: 4,
            color: tu_white,
            fontSize: 12,
            padding: [4, 2],
            formatter: "委辦 75%",
          },
          data: [{
            silent: false,
            lineStyle: {
              type: "dashed",
              width: 1,
              color: tu_warning_500,
            },
            yAxis: 75,
          }]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' %';
          }
        },
        data: data7
      }]
    };

    if (option && typeof option === 'object') {
      employment_training_side.setOption(option, true);
    }
    window.addEventListener('resize', function() {
      employment_training_side.resize();
    });
  })();
}
// before_2 分署職訓執行情形 該股總體訓後就業率 (水波)
if ($('#employment_training_rate').length) {
  (function employment_training_rate() {
    var dom = document.getElementById("employment_training_rate");
    var employment_training_rate = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    var option = {
      title: {
        text: '該股總體訓後就業率',
      },
      legend: {
        show: true,
        itemGap: 12,
        subtext: '',
        data: []
      },
      series: [{
        type: 'liquidFill',
        data: [0.68, 0.5, 0.4, 0.3],
        itemStyle: {
          opacity: 0.6
        },
        radius: '76%',
        emphasis: {
          itemStyle: {
            opacity: 0.88
          }
        }
      }]
    };


    if (option && typeof option === 'object') {
      employment_training_rate.setOption(option);
    }
    window.addEventListener('resize', function() {
      employment_training_rate.resize();
    });
  })();
}
// before_2 分署職訓執行情形 訓後就業率
if ($('#employment_training_rate_after').length) {
  (function employment_training_rate_after() {
    var dom = document.getElementById('employment_training_rate_after');
    var employment_training_rate_after = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });


    option = {
      title: {
        text: '各班別訓後就業率',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: tu_grey_200,
          }
        }
      },
      grid: {
        left: '-24%',
        right: '6%',
        bottom: '0%',
        top: '16%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          textStyle: {
            fontSize: '10',
          },
          formatter: '{value} 人'
        }
      },
      yAxis: [{
        show: false,
        type: 'category',
        inverse: true,
        position: 'right',
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        data: category3,
      }, {
        show: true,
        zlevel: 9,
        type: 'category',
        inverse: true,
        position: 'left',
        offset: 22,
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
          backgroundColor: tu_primary_900,
          borderRadius: 4,
          margin: 0,
          textStyle: {
            borderWidth: 1,
            borderColor: tu_primary_600,
            color: tu_white,
            fontSize: '10',
            fontWeight: 'bolder',
            padding: [4, 8, 4, 8],
          },
          verticalAlign: 'middle',
          align: 'left',
          formatter: '{value} 人'
        },
        data: category3,
      }, ],
      series: [{
        data: [120, 200, 150, 80, 70],
        type: 'bar',
        backgroundStyle: {
          color: 'rgba(154, 160, 168, 0.12)',
          borderRadius: [0, 8, 8, 0]
        },
        barWidth: 20,
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.16)',
          borderRadius: [0, 8, 8, 0]
        },
      }, {
        type: 'bar',
        barWidth: 24,
        barGap: '-108%',
        itemStyle: {
          normal: {
            color: 'rgba(71,134,163,.12)',
          },
        },
        data: [300, 300, 300, 300, 300],
        z: 0,
        tooltip: {
          show: false
        },
      }],
    };

    if (option && typeof option === 'object') {
      employment_training_rate_after.setOption(option);
    }
    window.addEventListener('resize', function() {
      employment_training_rate_after.resize();
    });
  })();
}

// before_3 職前各計畫執行情形
if ($('#pre_employment_plans').length) {
  (function pre_employment_plans() {
    var pre_employment_plans = document.getElementById("pre_employment_plans");
    var pre_employment_plans = echarts.init(pre_employment_plans, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    function getLevelOption() {
      return [{
        itemStyle: {
          borderColor: tu_white,
          borderWidth: 2,
          borderRadius: 4,
          gapWidth: 4,
        },
        upperLabel: {
          show: false
        }
      }, {
        itemStyle: {
          borderColor: tu_neutral_900,
          borderWidth: 10,
          borderRadius: 4,
          gapWidth: 2,
        },
        emphasis: {
          itemStyle: {
            borderColor: tu_neutral_800
          }
        }
      }, {
        colorSaturation: [1, 0.24],
        itemStyle: {
          borderWidth: 2,
          borderRadius: 4,
          gapWidth: 2,
          borderColorSaturation: 0.8,
        }
      }];
    }
    pre_employment_plans.setOption(
      (option = {
        title: {
          text: '',
        },
        grid: {
          left: '4%',
          right: '4%',
          bottom: '4%',
          top: '4%',
          containLabel: true
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
            formatter: '{b}',
            textBorderColor: tu_dark
          },
          upperLabel: {
            show: true,
            height: 48,
            textBorderColor: tu_white,
            textBorderWidth: 4,
            textBorderType: 'solid',
            textBorderDashOffset: 1,
          },
          itemStyle: {
            borderColor: tu_white,
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
          }]
        }]
      })
    );

    if (option && typeof option === 'object') {
      pre_employment_plans.setOption(option);
    }

    window.addEventListener('resize', function() {
      pre_employment_plans.resize();
    });

    pre_employment_plans.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}
// before_3 職前各計畫執行情形 學員數熱力圖分布
if ($('#pre_employment_trainees').length) {
  (function pre_employment_trainees() {
    var pre_employment_trainees = document.getElementById("pre_employment_trainees");
    var pre_employment_trainees = echarts.init(pre_employment_trainees, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    var data = [];

    function random(a, b) {
      return Math.round(Math.random() * Math.abs(b - a) + Math.min(a, b));
    }
    var seriesData = [];
    for (var i = 0; i < plans.length; i++) {
      var data = [];
      for (var j = 0; j < city.length; j++) {
        data.push([i, j]);
      }
      seriesData.push(data);
    }
    for (let i = 0; i < seriesData.length; i++) {
      seriesData[i] = seriesData[i].map(function(item) {
        return [item[1], item[0], random(1, 24)];
      })
      seriesData[i] = {
        name: plans[i],
        type: 'heatmap',
        data: seriesData[i],
        label: {
          normal: {
            color: tu_white,
            show: true
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
        }
      }
    }
    option = {
      title: {
        text: '學員數熱力圖分布',
        left: '0'
      },
      tooltip: {
        trigger: 'item',
        formatter: function(params) {
          var tooltip =
            plans[params.value[1]] +
            '<br />' + params.name +
            '<br />' +
            '隸屬轄區：南分署<br />' +
            '開課數：12 筆<br />' +
            '參訓學員數：' + params.value[2] + '位';
          return tooltip;
        }
      },
      grid: {
        height: '88%',
        top: '10%',
        left: 32,
        right: '0',
        bottom: '0%'
      },
      xAxis: {
        type: 'category',
        data: city,
        splitArea: {
          show: true
        },
        axisLabel: {
          interval: 0,
          rotate: 45,
          fontSize: 12,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'category',
        data: plans,
        splitArea: {
          show: true
        },
        axisLabel: {
          backgroundColor: tu_neutral_800,
          borderRadius: [2, 12, 2, 12],
          color: tu_white,
          fontSize: 10,
          interval: 0,
          padding: [2, 12, 2, 12],
          overflow: 'break',
          width: 100,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      visualMap: {
        min: 0,
        max: 24,
        calculable: true,
        orient: 'horizontal',
        right: '0',
        bottom: '',
        color: [tu_danger_500, tu_quaternary_500, tu_success_500],
        text: ['多', '少']
      },
      series: seriesData,
    };

    if (option && typeof option === 'object') {
      pre_employment_trainees.setOption(option);
    }

    window.addEventListener('resize', function() {
      pre_employment_trainees.resize();
    });
  })();
}

// before_4 重點產業別參訓職類分布趨勢
if ($('#import_industry_composite').length) {
  (function import_industry_composite() {
    var dom = document.getElementById('import_industry_composite');
    var import_industry_composite = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: false,
      locale: 'EN'
    });


    const builderJson = {
      all: 200,
      charts: {
        智慧機械: 88,
        亞洲矽谷: 16,
        綠能科技: 24,
        生技醫藥: 124,
        新農業: 64,
        循環經濟: 92,
        文化創意: 148,
        晶片設計與半導體: 104,
        國防產業: 134,
        營造業: 174,
      },
      components: {
        智慧機械: 110,
        亞洲矽谷: 188,
        綠能科技: 36,
        生技醫藥: 92,
        新農業: 72,
        循環經濟: 82,
        文化創意: 162,
        晶片設計與半導體: 140,
        國防產業: 128,
        營造業: 56
      },
    };
    const downloadJson = {
      '北分署': 31,
      '桃分署': 14,
      '中分署': 40,
      '南分署': 24,
      '高分署': 11
    };
    const themeJson = {
      '北分署': 116,
      '桃分署': 63,
      '中分署': 50,
      '南分署': 56,
      '高分署': 78
    };

    // const waterMarkText = 'WDA 勞動力發展署';
    // const canvas = document.createElement('canvas');
    // const ctx = canvas.getContext('2d');
    // canvas.width = 200;
    // canvas.height = 80;

    // ctx.textAlign = '';
    // ctx.textBaseline = 'center';
    // ctx.globalAlpha = 0.08;
    // ctx.font = '14px eurostile';
    // ctx.translate(50, 50);
    // ctx.rotate(-Math.PI / 8);
    // ctx.fillText(waterMarkText, 0, 0);


    option = {
      // backgroundColor: {
      //   type: 'pattern',
      //   image: canvas,
      //   repeat: 'repeat'
      // },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} 門課程'
      },
      title: [{
        text: '自辦職前重點產業課程開課數',
        left: '25%',
        textAlign: 'center'
      }, {
        text: '委外職前重點產業課程開課數',
        left: '25%',
        top: '52.5%',
        textAlign: 'center'
      }, {
        text: '自辦職前重點產業課程',
        subtext: '總計 ' +
          Object.keys(downloadJson).reduce(function(all, key) {
            return all + downloadJson[key];
          }, 0),
        left: '75%',
        textAlign: 'center'
      }, {
        text: '委外職前重點產業課程',
        subtext: '總計 ' +
          Object.keys(themeJson).reduce(function(all, key) {
            return all + themeJson[key];
          }, 0),
        left: '75%',
        top: '52.5%',
        textAlign: 'center'
      }],
      grid: [{
        top: 52,
        width: '50%',
        bottom: '50%',
        left: 0,
        containLabel: true
      }, {
        top: '60%',
        width: '50%',
        bottom: 0,
        left: 0,
        containLabel: true
      }],
      xAxis: [{
        type: 'value',
        max: builderJson.all,
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: '{value} 門',
          textStyle: {
            fontSize: 10
          }
        }
      }, {
        type: 'value',
        max: builderJson.all,
        gridIndex: 1,
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: '{value} 門',
          textStyle: {
            fontSize: 10
          }
        }
      }],
      yAxis: [{
        type: 'category',
        data: Object.keys(builderJson.charts),
        axisLabel: {
          interval: 0,
          rotate: 10,
          textStyle: {
            fontSize: 12,
            fontWeight: 'bolder',
            color: tu_dark
          }
        },
        splitLine: {
          show: true,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            width: 4,
            color: tu_primary_700
          }
        },
      }, {
        gridIndex: 1,
        type: 'category',
        data: Object.keys(builderJson.components),
        axisLabel: {
          interval: 0,
          rotate: 10,
          textStyle: {
            fontSize: 12,
            fontWeight: 'bolder',
            color: tu_dark
          }
        },
        splitLine: {
          show: true,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            width: 4,
            color: tu_secondary_700
          }

        },
      }],
      series: [{
        type: 'bar',
        stack: 'chart',
        z: 3,
        label: {
          position: 'right',
          show: true
        },
        itemStyle: {
          borderRadius: [0, 2, 2, 0]
        },
        data: Object.keys(builderJson.charts).map(function(key) {
          return builderJson.charts[key];
        })
      }, {
        type: 'bar',
        stack: 'chart',
        silent: true,
        itemStyle: {
          color: tu_neutral_100,
          borderRadius: [0, 2, 2, 0]
        },
        data: Object.keys(builderJson.charts).map(function(key) {
          return builderJson.all - builderJson.charts[key];
        })
      }, {
        type: 'bar',
        stack: 'component',
        xAxisIndex: 1,
        yAxisIndex: 1,
        z: 3,
        label: {
          position: 'right',
          show: true
        },
        itemStyle: {
          borderRadius: [0, 2, 2, 0]
        },
        data: Object.keys(builderJson.components).map(function(key) {
          return builderJson.components[key];
        })
      }, {
        type: 'bar',
        stack: 'component',
        silent: true,
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          color: tu_neutral_100,
          borderRadius: [0, 2, 2, 0]
        },
        data: Object.keys(builderJson.components).map(function(key) {
          return builderJson.all - builderJson.components[key];
        })
      }, {
        type: 'pie',
        radius: ['10%', '30%'],
        center: ['75%', '30%'],
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} 門課程 ({d}%)'
        },
        label: {
          alignTo: 'labelLine',
          formatter: '{name|{b}}\n{people|{c} 門課程}',
          minMargin: 0,
          edgeDistance: 0,
          lineHeight: 16,
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
          length: 2,
          length2: 2,
          maxSurfaceAngle: 0
        },
        data: Object.keys(downloadJson).map(function(key) {
          return {
            name: key.replace('.js', ''),
            value: downloadJson[key]
          };
        })
      }, {
        type: 'pie',
        radius: ['10%', '30%'],
        center: ['75%', '77.5%'],
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} 門課程 ({d}%)'
        },
        label: {
          alignTo: 'labelLine',
          formatter: '{name|{b}}\n{people|{c} 門課程}',
          minMargin: 0,
          edgeDistance: 0,
          lineHeight: 16,
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
          length: 2,
          length2: 2,
          maxSurfaceAngle: 0
        },
        data: Object.keys(themeJson).map(function(key) {
          return {
            name: key.replace('.js', ''),
            value: themeJson[key]
          };
        })
      }]
    };

    if (option && typeof option === 'object') {
      import_industry_composite.setOption(option);
    }

    window.addEventListener('resize', function() {
      import_industry_composite.resize();
    });

    import_industry_composite.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });

  })();
}
// before_4 生技醫藥 - 重點產業分署開課情形
if ($('#import_industry_courses').length) {
  (function import_industry_courses() {

    var dom = document.getElementById('import_industry_courses');
    var import_industry_courses = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: false,
      locale: 'EN'
    });

    option = {
      title: {
        text: '生技醫藥 - 重點產業分署開課情形',
      },
      grid: {
        left: '4%',
        right: '4%',
        bottom: '0%',
        top: '12%',
        containLabel: true
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: tu_grey_500
          },
        }
      },
      legend: {
        show: true,
        bottom: '0'
      },
      xAxis: {
        data: branch,
        axisLabel: {
          color: tu_dark,
          fontSize: 14,
          fontWeight: 'bolder',
          interval: 0,
          rotate: 20,
        },
        axisLabel: {
          zlevel: 99,
          backgroundColor: tu_primary_900,
          borderRadius: 4,
          margin: 20,
          interval: 0,
          color: tu_dark,
          interval: 0,
          rotate: 20,
          textStyle: {
            borderWidth: 1,
            borderColor: tu_primary_600,
            color: tu_white,
            fontSize: 14,
            fontWeight: 'bolder',
            padding: [4, 8, 4, 8],
          },
          verticalAlign: 'middle',
          align: 'center',

        },
      },
      yAxis: {},
      series: {
        type: 'bar',
        id: 'sales',
        data: [{
          value: 16,
          groupId: '北分署',
          itemStyle: {
            color: '#59A14F'
          }
        }, {
          value: 8,
          groupId: '桃分署',
          itemStyle: {
            color: '#4791FF'
          }
        }, {
          value: 36,
          groupId: '中分署',
          itemStyle: {
            color: '#5A46AA'
          }
        }, {
          value: 21,
          groupId: '南分署',
          itemStyle: {
            color: '#fd79a8'
          }
        }, {
          value: 7,
          groupId: '高分署',
          itemStyle: {
            color: '#F5DF4D'
          }
        }],
        itemStyle: {
          borderRadius: [8, 8, 0, 0]
        },
        universalTransition: {
          enabled: true,
          divideShape: 'clone'
        },
        label: {
          normal: {
            show: true,
            color: tu_white,
            position: 'inside',
            fontSize: 14,
            fontWeight: 'bolder',
            formatter: '{c}'
          }
        },
        markPoint: {
          data: [{
            type: 'max',
            name: 'Max'
          }],
          itemStyle: {
            color: tu_secondary_500
          },
          label: {
            color: tu_white,
            fontSize: 14,
            textBorderType: "solid",
            textBorderWidth: 2,
            textBorderColor: tu_secondary_200,
          },
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
      }
    };

    if (option && typeof option === 'object') {
      import_industry_courses.setOption(option);
    }

    window.addEventListener('resize', function() {
      import_industry_courses.resize();
    });
  })();
}
// before_4 生技醫藥 - 重點產業參訓學員背景
if ($('#import_industry_courses_students').length) {
  var dom = document.getElementById('import_industry_courses_students');
  var import_industry_courses_students = echarts.init(dom, 'wda_data', {
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
      text: '生技醫藥 - 重點產業參訓學員背景',
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
      left: '44%',
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
    import_industry_courses_students.setOption(option);
  }
  window.addEventListener('resize', function() {
    import_industry_courses_students.resize();
  });
}

// brfore 5 課程報名趨勢
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
    for (let i = 0; i < 6; i++) {
      data1.push(+(Math.random() * 400).toFixed(0));
      data2.push(+(Math.random() * 500).toFixed(0));
      data3.push(+(Math.random() + 340).toFixed(0));
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
        bottom: '4%',
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
        data: ['自辦', '委外', '輔助', '錄取率'],
        top: '0%'
      },
      xAxis: [{
        type: 'category',
        data: course,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 14,
          fontWeight: 'bolder',

          color: tu_dark,
          padding: [8, 0, 0, 0],
          interval: 0,

        }

      }],
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
        name: '自辦',
        type: 'bar',
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.12)'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
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
        data: data1
      }, {
        name: '委外',
        type: 'bar',
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.12)'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
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
        data: data2
      }, {
        name: '輔助',
        type: 'bar',
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.12)'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
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
              ' {a|{c}人}     \n',
              '    {b|}'
            ].join(' '),
            rich: {
              d: {
                color: '#FF9E9E',
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
        data: data3
      }, {
        name: '錄取率',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 12,
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
            textBorderColor: tu_success_400,
            textShadowColor: tu_primary_800,
            textShadowBlur: 10,
            formatter: '{c}%'
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
// brfore_5 課程報名趨勢 學員性別年齡分布
if ($('#courses_areas_gender').length) {
  (function courses_areas_gender() {
    var dom = document.getElementById("courses_areas_gender");
    var courses_areas_gender = echarts.init(dom, 'wda_data', {
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
        text: 'XXX 課程 - 學員性別年齡分布',
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
        left: '44%',
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
      courses_areas_gender.setOption(option);
    }
    window.addEventListener('resize', function() {
      courses_areas_gender.resize();
    });
  })();
}
// brfore_5 課程報名趨勢 學歷分布情形
if ($('#courses_areas_education').length) {
  (function courses_areas_education() {
    var dom = document.getElementById('courses_areas_education');
    var courses_areas_education = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    option = {
      title: {
        text: '學歷分布情形',
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '10%',
        top: '12%',
        containLabel: true
      },
      legend: {
        bottom: 'bottom'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [{
        name: '教育程度',
        type: 'pie',
        radius: ['2%', '76%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 20
        },
        label: {
          alignTo: 'edge',
          formatter: '{name|{b}}\n{people|{c} 人數}',
          minMargin: 80,
          edgeDistance: 0,
          lineHeight: 16,
          rich: {
            name: {
              fontSize: 16,
              fontWeight: 'bold',
              color: tu_dark,
              padding: 0
            },
            people: {
              fontSize: 10,
              color: tu_grey_800,
              padding: 0
            }
          }
        },
        labelLine: {
          length: 15,
          length2: 0,
          maxSurfaceAngle: 80
        },
        data: [{
          value: 40,
          name: '國小'
        }, {
          value: 38,
          name: '國中'
        }, {
          value: 32,
          name: '高中'
        }, {
          value: 30,
          name: '大學'
        }, {
          value: 28,
          name: '碩士'
        }, {
          value: 26,
          name: '博士'
        }, ]
      }]
    };

    if (option && typeof option === 'object') {
      courses_areas_education.setOption(option);
    }
    window.addEventListener('resize', function() {
      courses_areas_education.resize();

    });
  })();
}
// brfore_5 課程報名趨勢 參訓身分別統計
if ($('#courses_areas_identity').length) {
  (function courses_areas_identity() {
    var chartDom = document.getElementById('courses_areas_identity');
    var courses_areas_identity = echarts.init(chartDom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    var option;

    option = {
      title: {
        text: '參訓身分別統計',
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true
      },
      series: [{
        type: 'treemap',
        nodeClick: false,
        roam: false,
        breadcrumb: {
          show: false,
        },
        data: [{
          name: '身份別 1',
          value: 28,
          itemStyle: {
            normal: {
              borderColor: tu_white,
              borderWidth: 2,
              gapWidth: 2
            }
          },
          children: [{
            name: '身份別 1-1',
            value: 16
          }, {
            name: '身份別 1-2',
            value: 12
          }]
        }, {
          name: '身份別 2',
          value: 44,
          itemStyle: {
            normal: {
              borderColor: tu_white,
              borderWidth: 2,
              gapWidth: 2
            }
          },
          children: [{

            name: '身份別 2-1',
            value: 24,
          }, {
            name: '身份別 2-2',
            value: 12
          }, {
            name: '身份別 2-3',
            value: 8
          }]
        }, {
          name: '身份別 3',
          value: 54,
          itemStyle: {
            normal: {
              borderColor: tu_white,
              borderWidth: 2,
              gapWidth: 2
            }
          },
          children: [{
            name: '身份別 3-1',
            value: 20,
          }, {
            name: '身份別 3-2',
            value: 16
          }, {
            name: '身份別 3-3',
            value: 18
          }]
        }, {
          name: '身份別 4',
          value: 50,
          itemStyle: {
            normal: {
              borderColor: tu_white,
              borderWidth: 2,
              gapWidth: 2
            }
          },
          children: [{
            name: '身份別 3-1',
            value: 12,
          }, {
            name: '身份別 3-2',
            value: 20
          }, {
            name: '身份別 3-3',
            value: 18
          }]
        }, {
          name: '身份別 5',
          value: 16,
          itemStyle: {
            normal: {
              borderColor: tu_white,
              borderWidth: 2,
              gapWidth: 1
            }
          },
          children: [{
            name: '身份別 5-1',
            value: 12,
          }, {
            name: '身份別 5-2',
            value: 20
          }, {
            name: '身份別 5-3',
            value: 18
          }]
        }],
        itemStyle: {
          borderRadius: [4, 4, 4, 4],

        }
      }]
    };

    if (option && typeof option === 'object') {
      courses_areas_identity.setOption(option);
    }

    window.addEventListener('resize', function() {
      courses_areas_identity.resize();
    });
  })();
}


// before_6 學員訓後薪資水準分析
if ($('#salary_charts').length) {
  (function salary_charts() {
    var dom = document.getElementById('salary_charts');
    var salary_charts = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    var data = [];
    for (var z = 0; z < salary.length; z++) {
      for (var i = 0; i < branch.length; i++) {
        data.push([i, z, 1 + Math.round(Math.random() * 50)]);
      }
    }
    data = data.map(function(item) {
      return [item[1], item[0], item[2] || '-'];
    });

    option = {
      dataZoom: [{
        id: 'dataZoomY',
        type: 'slider',
        yAxisIndex: [0],
        startValue: 0,
        endValue: 10,
        filterMode: 'empty'
      }],
      tooltip: {
        position: 'top',
        formatter: function(params) {
          return branch[params.value[1]] + '<br/>' + '人数：' + params.data[2];
        }
      },
      grid: {
        left: '4%',
        right: '8%',
        bottom: '2%',
        top: '12%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: salary,
        axisLine: {
          lineStyle: {
            color: tu_dark
          }
        },
        axisLabel: {
          interval: 0,
          rotate: 30,
          textStyle: {
            color: tu_grey_600,
            fontSize: 14,
            fontWeight: 'bolder'
          }
        },
        splitArea: {
          show: true
        },
        name: '薪水'
      },
      yAxis: {
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
            fontSize: 16,
            fontWeight: 'bolder'
          }
        },
        splitArea: {
          show: true
        },
        name: '分屬別'
      },
      visualMap: {
        min: 1,
        max: 50,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        top: '4%',
        text: ['50', '1'],
        calculable: false,
        color: [tu_primary_100, tu_primary_500]
      },
      series: [{
        name: '',
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
        }
      }]
    };

    if (option && typeof option === 'object') {
      salary_charts.setOption(option);
    }

    window.addEventListener('resize', function() {
      salary_charts.resize();
    });


    salary_charts.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}
// before_6 學員訓後薪資水準分析 各分署
if ($('#salary_charts_branch').length) {
  (function beforesalary_charts_branch_18() {
    var salary_charts_branch = document.getElementById("salary_charts_branch");
    var salary_charts_branch = echarts.init(salary_charts_branch, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });


    let data1 = [];
    let data2 = [];
    let data3 = [];
    for (let i = 0; i < 5; i++) {
      data1.push(+(Math.random() * 200).toFixed(0));
      data2.push(+(Math.random() * 500).toFixed(0));
      data3.push(+(Math.random() + 240).toFixed(0));
    }

    option = {
      title: {
        text: '薪資 25,000 元 - 學員訓後薪資水準分析 各分署',
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
        data: branch,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 18,
          fontWeight: 'bolder',
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
        // interval: 50,
        nameTextStyle: {
          color: tu_grey_300,
          align: 'right'
        },
        axisLabel: {
          formatter: '{value} 人'
        }
      }],
      series: [{
        name: '自辦',
        type: 'bar',
        stack: true,
        itemStyle: {
          borderRadius: [0, 0, 0, 0]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data1,
        label: {
          normal: {
            show: true,
            color: tu_white,
            position: 'inside',
            fontSize: 18,
            fontWeight: 'bolder',
            formatter: '{c}'
          }
        },
      }, {
        name: '委外',
        type: 'bar',
        stack: true,
        itemStyle: {
          borderRadius: [0, 0, 0, 0]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data2,
        label: {
          normal: {
            show: true,
            color: tu_white,
            position: 'inside',
            fontSize: 18,
            fontWeight: 'bolder',
            formatter: '{c}'
          }
        },
      }, {
        name: '輔助',
        type: 'bar',
        stack: true,
        itemStyle: {
          borderRadius: [10, 10, 0, 0]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data3,
        label: {
          normal: {
            show: true,
            color: tu_white,
            position: 'inside',
            fontSize: 18,
            fontWeight: 'bolder',
            formatter: '{c}'
          }
        },
        markPoint: {
          symbolSize: 66,
          data: [{
            type: 'max',
            name: 'Max'
          }],
          itemStyle: {
            color: "#edc948"
          },
          label: {
            color: tu_white,
            fontSize: 12,
            textBorderType: "solid",
            textBorderWidth: 2,
            textBorderColor: tu_quaternary_600,
            formatter: '最高人數'
          },
        },
      }]
    };

    if (option && typeof option === 'object') {
      salary_charts_branch.setOption(option);
    }
    window.addEventListener('resize', function() {
      salary_charts_branch.resize();
    });
  })();
}
// before_6 學員訓後薪資水準分析 學員性別年齡分布
if ($('#salary_charts_gender').length) {
  (function salary_charts_gender() {
    var dom = document.getElementById("salary_charts_gender");
    var salary_charts_gender = echarts.init(dom, 'wda_data', {
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
        text: '學員訓後薪資水準分析 - 學員性別年齡分布',
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
        left: '42%',
        top: 72,
        bottom: 16,
        align: 'center',
        width: 100,
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
      salary_charts_gender.setOption(option);
    }
    window.addEventListener('resize', function() {
      salary_charts_gender.resize();
    });
  })();
}
// before_6 學員訓後薪資水準分析 學歷分布情形
if ($('#salary_charts_education').length) {
  (function courses_areas_education() {
    var dom = document.getElementById('salary_charts_education');
    var salary_charts_education = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    option = {
      title: {
        text: '學歷分布情形',
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '10%',
        top: '12%',
        containLabel: true
      },
      legend: {
        bottom: 'bottom'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [{
        name: '教育程度',
        type: 'pie',
        radius: ['2%', '76%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 20
        },
        label: {
          alignTo: 'edge',
          formatter: '{name|{b}}\n{people|{c} 人數}',
          minMargin: 80,
          edgeDistance: 0,
          lineHeight: 16,
          rich: {
            name: {
              fontSize: 16,
              fontWeight: 'bold',
              color: tu_dark,
              padding: 0
            },
            people: {
              fontSize: 10,
              color: tu_grey_800,
              padding: 0
            }
          }
        },
        labelLine: {
          length: 15,
          length2: 0,
          maxSurfaceAngle: 80
        },
        data: [{
          value: 40,
          name: '國小'
        }, {
          value: 38,
          name: '國中'
        }, {
          value: 32,
          name: '高中'
        }, {
          value: 30,
          name: '大學'
        }, {
          value: 28,
          name: '碩士'
        }, {
          value: 26,
          name: '博士'
        }, ]
      }]
    };

    if (option && typeof option === 'object') {
      salary_charts_education.setOption(option);
    }
    window.addEventListener('resize', function() {
      salary_charts_education.resize();
    });
  })();
}

// before_7 學員訓後就業關聯性
if ($('#employment_categorys_about').length) {
  (function employment_categorys_about() {
    var dom = document.getElementById("employment_categorys_about");
    var employment_categorys_about = echarts.init(dom, 'wda_data', {
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
        left: '2%',
        right: '2%',
        bottom: '0%',
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
        top: '0'
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
          fontWeight: 'bolder',
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
      employment_categorys_about.setOption(option);
    }
    window.addEventListener('resize', function() {
      employment_categorys_about.resize();
    });

    employment_categorys_about.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}
// before_7 學員訓後就業關聯性 各分署
if ($('#employment_categorys_about_branch').length) {
  (function employment_categorys_about_branch() {
    var dom = document.getElementById("employment_categorys_about_branch");
    var employment_categorys_about_branch = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });


    let data1 = [];
    let data2 = [];
    let data3 = [];
    for (let i = 0; i < 5; i++) {
      data1.push(+(Math.random() * 200).toFixed(0));
      data2.push(+(Math.random() * 500).toFixed(0));
      data3.push(+(Math.random() + 240).toFixed(0));
    }

    option = {
      title: {
        text: '07:工程／研發／生技 - 學員訓後就業關聯性 各分署',
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
        data: branch,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 18,
          fontWeight: 'bolder',
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
        // interval: 50,
        nameTextStyle: {
          color: tu_grey_300,
          align: 'right'
        },
        axisLabel: {
          formatter: '{value} 人'
        }
      }],
      series: [{
        name: '自辦',
        type: 'bar',
        stack: true,
        itemStyle: {
          borderRadius: [0, 0, 0, 0]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data1,
        label: {
          normal: {
            show: true,
            color: tu_white,
            position: 'inside',
            fontSize: 18,
            fontWeight: 'bolder',
            formatter: '{c}'
          }
        },
      }, {
        name: '委外',
        type: 'bar',
        stack: true,
        itemStyle: {
          borderRadius: [0, 0, 0, 0]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data2,
        label: {
          normal: {
            show: true,
            color: tu_white,
            position: 'inside',
            fontSize: 18,
            fontWeight: 'bolder',
            formatter: '{c}'
          }
        },
      }, {
        name: '輔助',
        type: 'bar',
        stack: true,
        itemStyle: {
          borderRadius: [10, 10, 0, 0]
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        data: data3,
        label: {
          normal: {
            show: true,
            color: tu_white,
            position: 'inside',
            fontSize: 18,
            fontWeight: 'bolder',
            formatter: '{c}'
          }
        },
        markPoint: {
          symbolSize: 66,
          data: [{
            type: 'max',
            name: 'Max'
          }],
          itemStyle: {
            color: "#edc948"
          },
          label: {
            color: tu_white,
            fontSize: 12,
            textBorderType: "solid",
            textBorderWidth: 2,
            textBorderColor: tu_quaternary_600,
            formatter: '最高人數'
          },
        },
      }]
    };

    if (option && typeof option === 'object') {
      employment_categorys_about_branch.setOption(option);
    }
    window.addEventListener('resize', function() {
      employment_categorys_about_branch.resize();
    });
  })();
}
// before_7 學員訓後就業關聯性 學員性別年齡分布
if ($('#employment_categorys_about_gender').length) {
  (function employment_categorys_about_gender() {
    var dom = document.getElementById("employment_categorys_about_gender");
    var employment_categorys_about_gender = echarts.init(dom, 'wda_data', {
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
        text: '學員訓後就業關聯性 - 學員性別年齡分布',
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
        left: '42%',
        top: 72,
        bottom: 16,
        align: 'center',
        width: 100,
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
      employment_categorys_about_gender.setOption(option);
    }
    window.addEventListener('resize', function() {
      employment_categorys_about_gender.resize();
    });
  })();
}
// before_7 學員訓後就業關聯性 學歷分布情形
if ($('#employment_categorys_about_education').length) {
  (function employment_categorys_about_education() {
    var dom = document.getElementById('employment_categorys_about_education');
    var employment_categorys_about_education = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    option = {
      title: {
        text: '學歷分布情形',
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '10%',
        top: '12%',
        containLabel: true
      },
      legend: {
        bottom: 'bottom'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [{
        name: '教育程度',
        type: 'pie',
        radius: ['2%', '76%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 20
        },
        label: {
          alignTo: 'edge',
          formatter: '{name|{b}}\n{people|{c} 人數}',
          minMargin: 80,
          edgeDistance: 0,
          lineHeight: 16,
          rich: {
            name: {
              fontSize: 16,
              fontWeight: 'bold',
              color: tu_dark,
              padding: 0
            },
            people: {
              fontSize: 10,
              color: tu_grey_800,
              padding: 0
            }
          }
        },
        labelLine: {
          length: 15,
          length2: 0,
          maxSurfaceAngle: 80
        },
        data: [{
          value: 40,
          name: '國小'
        }, {
          value: 38,
          name: '國中'
        }, {
          value: 32,
          name: '高中'
        }, {
          value: 30,
          name: '大學'
        }, {
          value: 28,
          name: '碩士'
        }, {
          value: 26,
          name: '博士'
        }, ]
      }]
    };

    if (option && typeof option === 'object') {
      employment_categorys_about_education.setOption(option);
    }
    window.addEventListener('resize', function() {
      employment_categorys_about_education.resize();
    });
  })();
}

// before_8 訓練費用結構分析
if ($('#employment_analysis_cost').length) {
  (function employment_analysis_bg0() {
    var dom = document.getElementById("employment_analysis_cost");
    var employment_analysis_cost = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    let data1 = [];
    let data2 = [];
    for (let i = 0; i < 5; i++) {
      data1.push(+(Math.random() * 20000).toFixed(0));
      data2.push(+(Math.random() * 40000).toFixed(0));
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
            color: tu_grey_400,
          }
        }
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
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
        top: '0%',
        right: ''
      },
      xAxis: [{
        type: 'category',
        data: ['商業類', '工業類', '醫事護理及家事類', '藝術類', '農業類'],
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 18,
          fontWeight: 'bolder',
          color: tu_dark,
          interval: 0,
          padding: [4, 0, 0, 0]
            // rotate: 45
        }
      }],
      yAxis: [{
        type: 'value',
        name: '人數',
        nameLocation: 'start',
        min: 0,
        interval: 3000,
        nameTextStyle: {
          color: tu_grey_300,
          align: 'right'
        },
        axisLabel: {
          formatter: '{value} 元'
        }
      }],
      series: [{
        name: '學員負擔',
        type: 'bar',
        stack: true,
        itemStyle: {
          borderRadius: [4, 4, 0, 0]
        },
        label: {
          show: true,
          color: tu_white,
          fontSize: 16,
          textBorderType: "solid",
          textBorderWidth: 2,
          textBorderColor: "#fff"
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 元';
          }
        },
        data: data1
      }, {
        name: '政府負擔',
        type: 'bar',
        stack: true,
        itemStyle: {
          borderRadius: [4, 4, 0, 0]
        },
        label: {
          color: tu_white,
          show: true,
          fontSize: 16,
          textBorderType: "solid",
          textBorderWidth: 2,
          textBorderColor: "#fff"
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
      employment_analysis_cost.setOption(option);
    }
    window.addEventListener('resize', function() {
      employment_analysis_cost.resize();

    });
    employment_analysis_cost.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}
// before_8 訓練費用結構分析 自辦職前訓練費用結構
if ($('#employment_analysis_cost_self').length) {
  (function employment_analysis_cost_self() {
    var dom = document.getElementById("employment_analysis_cost_self");
    var employment_analysis_cost_self = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    let data1 = [];
    let data2 = [];
    for (let i = 0; i < 5; i++) {
      data1.push(+(Math.random() * 200).toFixed(0));
      data2.push(+(Math.random() * 500).toFixed(0));
    }
    option = {
      title: {
        text: '自辦職前訓練費用結構[商業類]',
        left: "left",
        top: '0'
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
        bottom: '0%',
        right: ''
      },
      xAxis: [{
        type: 'category',
        data: branch,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 16,
          fontWeight: 'bolder',
          interval: 0,
          rotate: 45
        }
      }],
      yAxis: [{
        type: 'value',
        name: '人數',
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
      }],
      series: [{
        name: '學員負擔',
        type: 'bar',
        stack: true,
        color: '#5D89B4',
        itemStyle: {
          borderRadius: [0, 0, 0, 0]
        },
        label: {
          show: true,
          fontSize: 12,
          textBorderType: "solid",
          textBorderWidth: 2,
          textBorderColor: tu_white
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 元';
          }
        },
        data: data1
      }, {
        name: '政府負擔',
        type: 'bar',
        stack: true,
        color: '#4B9B69',
        itemStyle: {
          borderRadius: [4, 4, 0, 0]
        },
        label: {
          show: true,
          fontSize: 12,
          textBorderType: "solid",
          textBorderWidth: 2,
          textBorderColor: tu_white
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
      employment_analysis_cost_self.setOption(option);
    }
    window.addEventListener('resize', function() {
      employment_analysis_cost_self.resize();
    });
  })();
}
// before_8 訓練費用結構分析 委外職前訓練費用結構
if ($('#employment_analysis_side').length) {
  (function employment_analysis_side() {
    var dom = document.getElementById("employment_analysis_side");
    var employment_analysis_side = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    let data1 = [];
    let data2 = [];
    for (let i = 0; i < 5; i++) {
      data1.push(+(Math.random() * 200).toFixed(0));
      data2.push(+(Math.random() * 500).toFixed(0));
    }
    option = {
      title: {
        text: '委外職前訓練費用結構[商業類]',
        left: "left",
        top: '0'
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
        bottom: '0%',
        right: ''
      },
      xAxis: [{
        type: 'category',
        data: branch,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 16,
          fontWeight: 'bolder',
          interval: 0,
          rotate: 45
        }
      }],
      yAxis: [{
        type: 'value',
        name: '人數',
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
      }],
      series: [{
        name: '學員負擔',
        type: 'bar',
        stack: true,
        color: '#F9D23C',
        itemStyle: {
          borderRadius: [0, 0, 0, 0]
        },
        label: {
          show: true,
          fontSize: 12,
          textBorderType: "solid",
          textBorderWidth: 2,
          textBorderColor: tu_white
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 元';
          }
        },
        data: data1
      }, {
        name: '政府負擔',
        type: 'bar',
        stack: true,
        color: '#D65079',
        itemStyle: {
          borderRadius: [4, 4, 0, 0]
        },
        label: {
          show: true,
          fontSize: 12,
          textBorderType: "solid",
          textBorderWidth: 2,
          textBorderColor: tu_white
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
      employment_analysis_side.setOption(option);
    }
    window.addEventListener('resize', function() {
      employment_analysis_side.resize();
    });
  })();
}

// before_7 index v8 
if ($('#vocational_training_citys_pie').length) {
  (function vocational_training_citys_pie() {
    var dom = document.getElementById("vocational_training_citys_pie");
    var vocational_training_citys_pie = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    function random(a, b) {
      return Math.round(Math.random() * Math.abs(b - a) + Math.min(a, b));
    }
    var seriesData = [];
    for (var i = 0; i < plans.length; i++) {
      var data = [];
      for (var j = 0; j < city.length; j++) {
        data.push([i, j]);
      }
      seriesData.push(data);
    }
    for (let i = 0; i < seriesData.length; i++) {
      seriesData[i] = seriesData[i].map(function(item) {
        return [item[1], item[0], random(1, 24)];
      })
      seriesData[i] = {
        name: plans[i],
        type: 'heatmap',
        data: seriesData[i],
        label: {
          normal: {
            color: tu_white,
            show: true
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
        }
      }
    }

    option = {
      color: color_v21,
      title: {
        text: 'XXX 行業別 - 職類別開缺數量',
        textStyle: {
          fontSize: 24,
          fontWeight: 'bolder',
          color: tu_dark,
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
      }, {
        name: '內',
        radius: ['30%', '38%'],
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
            color: "rgba(20,20,20,0.16)",
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
      vocational_training_citys_pie.setOption(option);
    }

    window.addEventListener('resize', function() {
      vocational_training_citys_pie.resize();
    });

  })();
}

// before_7 index v8 
if ($('#vocational_training_citys_stuedent_pie').length) {
  (function vocational_training_citys_stuedent_pie() {
    var dom = document.getElementById("vocational_training_citys_stuedent_pie");
    var vocational_training_citys_stuedent_pie = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });


    option = {
      color: color_v22,
      title: {
        text: 'XXX職類 - 別各縣市預估結訓學員占比情形',
        textStyle: {
          fontSize: 24,
          fontWeight: 'bolder',
          color: tu_dark,
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
      }, {
        name: '內',
        radius: ['30%', '38%'],
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
            color: "rgba(20,20,20,0.16)",
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
      vocational_training_citys_stuedent_pie.setOption(option);
    }

    window.addEventListener('resize', function() {
      vocational_training_citys_stuedent_pie.resize();

    });

  })();
}