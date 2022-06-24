$('#tabv11').on('click', function(event) {
  $('#tab-2').show().tab('show');
});

// Pre_1 產業別開課占比
if ($('#course_bubble').length) {
  (function course_bubble() {
    var pop = document.getElementById('course_bubble');
    var myChart = echarts.init(pop, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    // var ROOT_PATH =
    //   'https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
    //   $.get(ROOT_PATH + '/data/asset/data/option-view.json'),

    $.when(
      $.get('json/bubble.json'),
      $.getScript(
        'https://fastly.jsdelivr.net/npm/d3-hierarchy@2.0.0/dist/d3-hierarchy.min.js'
      )
    ).done(function(res) {
      run(res[0]);
    });

    function run(rawData) {
      const dataWrap = prepareData(rawData);
      initChart(dataWrap.seriesData, dataWrap.maxDepth);
    }

    function prepareData(rawData) {
      const seriesData = [];
      let maxDepth = 0;

      function convert(source, basePath, depth) {
        if (source == null) {
          return;
        }
        if (maxDepth >= 4) {
          return;
        }
        maxDepth = Math.max(depth, maxDepth);
        seriesData.push({
          id: basePath,
          value: source.$count,
          depth: depth,
          index: seriesData.length
        });
        for (var key in source) {
          if (source.hasOwnProperty(key) && !key.match(/^\$/)) {
            var path = basePath + '.' + key;
            convert(source[key], path, depth + 1);
          }
        }
      }
      convert(rawData, '產業別開課占比', 0);
      return {
        seriesData: seriesData,
        maxDepth: maxDepth
      };
    }

    function initChart(seriesData, maxDepth) {
      var displayRoot = stratify();

      function stratify() {
        return d3
          .stratify()
          .parentId(function(d) {
            return d.id.substring(0, d.id.lastIndexOf('.'));
          })(seriesData)
          .sum(function(d) {
            return d.value || 0;
          })
          .sort(function(a, b) {
            return b.value - a.value;
          });
      }

      function overallLayout(params, api) {
        var context = params.context;
        d3
          .pack()
          .size([api.getWidth() - 2, api.getHeight() - 2])
          .padding(3)(displayRoot);
        context.nodes = {};
        displayRoot.descendants().forEach(function(node, index) {
          context.nodes[node.id] = node;
        });
      }

      function renderItem(params, api) {
        var context = params.context;
        // Only do that layout once in each time `setOption` called.
        if (!context.layout) {
          context.layout = true;
          overallLayout(params, api);
        }
        var nodePath = api.value('id');
        var node = context.nodes[nodePath];
        if (!node) {
          return;
        }
        var isLeaf = !node.children || !node.children.length;
        var focus = new Uint32Array(
          node.descendants().map(function(node) {
            return node.data.index;
          })
        );
        var nodeName = isLeaf ?
          nodePath
          .slice(nodePath.lastIndexOf('.') + 1)
          .split(/(?=[A-Z][^A-Z])/g)
          .join('\n') :
          '';
        var z2 = api.value('depth') * 2;
        return {
          type: 'circle',
          focus: focus,
          shape: {
            cx: node.x,
            cy: node.y,
            r: node.r
          },
          transition: ['shape'],
          z2: z2,
          textContent: {
            type: 'text',
            style: {
              // transition: isLeaf ? 'fontSize' : null,
              text: nodeName,
              width: node.r * 1,
              fill: tu_white,
              overflow: 'truncate',
              fontSize: node.r / 3
            },
            emphasis: {
              style: {
                overflow: null,
                fontSize: Math.max(node.r / 3, 12)
              }
            }
          },
          textConfig: {
            position: 'inside'
          },
          style: {
            fill: api.visual('color')
          },
          emphasis: {
            style: {
              fontSize: 14,
              shadowBlur: 12,
              shadowOffsetX: 3,
              shadowOffsetY: 5,
              shadowColor: 'rgba(0,0,0,0.24)'
            }
          }
        };
      }
      option = {
        title: {
          text: '在職計畫的重點產業開課統計',
          left: 'center'
        },
        dataset: {
          source: seriesData
        },
        tooltip: {},
        visualMap: [{
          show: false,
          min: 0,
          max: maxDepth,
          dimension: 'depth',
          inRange: {
            color: ['rgba(102,196,197,.24)', tu_primary_700]
          }
        }],
        hoverLayerThreshold: Infinity,
        series: [{
          type: 'custom',
          renderItem: renderItem,
          progressive: 100,
          coordinateSystem: 'none',
          encode: {
            tooltip: 'value',
            itemName: 'id'
          }
        }, ]
      };
      myChart.setOption(option);
    }
    window.addEventListener('resize', function() {
      myChart.resize();
    });
  })();
}

// Pre_2 參訓背景
if ($('#user_backgrounds').length) {
  (function user_backgrounds() {
    var dom = document.getElementById('user_backgrounds');
    var user_backgrounds = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    var data1 = [];
    var data2 = [];
    var data3 = [];
    var data4 = [];
    for (let i = 0; i < 5; i++) {
      data1.push(+(Math.random() * 200).toFixed(0));
      data2.push(+(Math.random() * 400).toFixed(0));
      data3.push(+(Math.random() * 230).toFixed(0));
      data4.push(+(Math.random() * 400).toFixed(0));
    }
    option = {
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
        bottom: '8%',
        top: '12%',
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
        data: ['自辦', '產投', '區域據點', '企訓']
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
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: '{value} 人'
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
        itemStyle: {
          borderRadius: [4, 4, 0, 0]
        },
        data: data1,
        label: {
          show: true,
          color: tu_white,
          fontSize: 12,
          textBorderType: "solid",
          textBorderWidth: 2,
          textBorderColor: "#fff"
        },
      }, {
        name: '產投',
        type: 'bar',
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        itemStyle: {
          borderRadius: [4, 4, 0, 0]
        },
        data: data2,
        label: {
          show: true,
          color: tu_white,
          fontSize: 12,
          textBorderType: "solid",
          textBorderWidth: 2,
          textBorderColor: "#fff"
        },
      }, {
        name: '區域據點',
        type: 'bar',
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        itemStyle: {
          borderRadius: [4, 4, 0, 0]
        },
        data: data3,
        label: {
          show: true,
          color: tu_white,
          fontSize: 12,
          textBorderType: "solid",
          textBorderWidth: 2,
          textBorderColor: "#fff"
        },
      }, {
        name: '企訓',
        type: 'bar',
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 人';
          }
        },
        itemStyle: {
          borderRadius: [4, 4, 0, 0]
        },
        data: data4,
        label: {
          show: true,
          color: tu_white,
          fontSize: 12,
          textBorderType: "solid",
          textBorderWidth: 2,
          textBorderColor: "#fff"
        },
      }]
    };

    if (option && typeof option === 'object') {
      user_backgrounds.setOption(option);
    }

    window.addEventListener('resize', function() {
      user_backgrounds.resize();
    });

    user_backgrounds.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}
// Pre_2 參訓背景 性別與年齡分布 Pre_3
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
// Pre_2 參訓背景 學歷分布情形 Pre_3
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
// Pre_2 參訓背景 參訓身分別統計 Pre_3
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

// Pre_3 參訓者薪資落點分布 
if ($('#user_salary').length) {
  (function user_salary() {
    var dom = document.getElementById('user_salary');
    var user_salary = echarts.init(dom, 'wda_data', {
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
        color: [tu_secondary_300, tu_secondary_500]
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
      user_salary.setOption(option);
    }

    window.addEventListener('resize', function() {
      user_salary.resize();
    });


    user_salary.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}
// Pre_3 參訓者薪資落點分布 課程職類分布情形
if ($('#user_salary_courses').length) {
  (function user_salary_courses() {
    var dom = document.getElementById('user_salary_courses');
    var user_salary_courses = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    option = {
      title: {
        text: '課程職類分布情形',
        left: "center",
        top: '0',
        textStyle: {
          color: tu_dark
        },
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
          edgeDistance: 16,
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
          name: course[0]
        }, {
          value: 38,
          name: course[1]
        }, {
          value: 32,
          name: course[2]
        }, {
          value: 30,
          name: course[3]
        }, {
          value: 28,
          name: course[4]
        }, {
          value: 26,
          name: course[5]
        }, ]
      }]
    };

    if (option && typeof option === 'object') {
      user_salary_courses.setOption(option);
    }
    window.addEventListener('resize', function() {
      user_salary_courses.resize();
    });
  })();
}

// Pre_4 訓練單位屬性分析
if ($('#units').length) {
  var dom = document.getElementById('units');
  var myChart = echarts.init(dom, 'wda_data', {
    renderer: 'svg',
    useDirtyRect: true,
    locale: 'EN'
  });

  const data = [
    [0, 0, 5],
    [0, 1, 1],
    [0, 2, 0],
    [0, 3, 0],
    [0, 4, 0],
    [0, 5, 0],
    [0, 6, 0],
    [0, 7, 0],
    [0, 8, 0],
    [0, 9, 0],
    [0, 10, 0],
    [0, 11, 2],
    [0, 12, 4],
    [0, 13, 1],
    [0, 14, 1],
    [0, 15, 3],
    [0, 16, 4],
    [0, 17, 6],
    [0, 18, 4],
    [0, 19, 4],
    [0, 20, 3],
    [0, 21, 3],
    [0, 22, 2],
    [0, 23, 5],
    [1, 0, 7],
    [1, 1, 0],
    [1, 2, 0],
    [1, 3, 0],
    [1, 4, 0],
    [1, 5, 0],
    [1, 6, 0],
    [1, 7, 0],
    [1, 8, 0],
    [1, 9, 0],
    [1, 10, 5],
    [1, 11, 2],
    [1, 12, 2],
    [1, 13, 6],
    [1, 14, 9],
    [1, 15, 11],
    [1, 16, 6],
    [1, 17, 7],
    [1, 18, 8],
    [1, 19, 12],
    [1, 20, 5],
    [1, 21, 5],
    [1, 22, 7],
    [1, 23, 2],
    [2, 0, 1],
    [2, 1, 1],
    [2, 2, 0],
    [2, 3, 0],
    [2, 4, 0],
    [2, 5, 0],
    [2, 6, 0],
    [2, 7, 0],
    [2, 8, 0],
    [2, 9, 0],
    [2, 10, 3],
    [2, 11, 2],
    [2, 12, 1],
    [2, 13, 9],
    [2, 14, 8],
    [2, 15, 10],
    [2, 16, 6],
    [2, 17, 5],
    [2, 18, 5],
    [2, 19, 5],
    [2, 20, 7],
    [2, 21, 4],
    [2, 22, 2],
    [2, 23, 4],
    [3, 0, 7],
    [3, 1, 3],
    [3, 2, 0],
    [3, 3, 0],
    [3, 4, 0],
    [3, 5, 0],
    [3, 6, 0],
    [3, 7, 0],
    [3, 8, 1],
    [3, 9, 0],
    [3, 10, 5],
    [3, 11, 4],
    [3, 12, 7],
    [3, 13, 14],
    [3, 14, 13],
    [3, 15, 12],
    [3, 16, 9],
    [3, 17, 5],
    [3, 18, 5],
    [3, 19, 10],
    [3, 20, 6],
    [3, 21, 4],
    [3, 22, 4],
    [3, 23, 1],
    [4, 0, 1],
    [4, 1, 3],
    [4, 2, 0],
    [4, 3, 0],
    [4, 4, 0],
    [4, 5, 1],
    [4, 6, 0],
    [4, 7, 0],
    [4, 8, 0],
    [4, 9, 2],
    [4, 10, 4],
    [4, 11, 4],
    [4, 12, 2],
    [4, 13, 4],
    [4, 14, 4],
    [4, 15, 14],
    [4, 16, 12],
    [4, 17, 1],
    [4, 18, 8],
    [4, 19, 5],
    [4, 20, 3],
    [4, 21, 7],
    [4, 22, 3],
    [4, 23, 0],
    [5, 0, 2],
    [5, 1, 1],
    [5, 2, 0],
    [5, 3, 3],
    [5, 4, 0],
    [5, 5, 0],
    [5, 6, 0],
    [5, 7, 0],
    [5, 8, 2],
    [5, 9, 0],
    [5, 10, 4],
    [5, 11, 1],
    [5, 12, 5],
    [5, 13, 10],
    [5, 14, 5],
    [5, 15, 7],
    [5, 16, 11],
    [5, 17, 6],
    [5, 18, 0],
    [5, 19, 5],
    [5, 20, 3],
    [5, 21, 4],
    [5, 22, 2],
    [5, 23, 0],
    [6, 0, 1],
    [6, 1, 0],
    [6, 2, 0],
    [6, 3, 0],
    [6, 4, 0],
    [6, 5, 0],
    [6, 6, 0],
    [6, 7, 0],
    [6, 8, 0],
    [6, 9, 0],
    [6, 10, 1],
    [6, 11, 0],
    [6, 12, 2],
    [6, 13, 1],
    [6, 14, 3],
    [6, 15, 4],
    [6, 16, 0],
    [6, 17, 0],
    [6, 18, 0],
    [6, 19, 0],
    [6, 20, 1],
    [6, 21, 2],
    [6, 22, 2],
    [6, 23, 6]
  ].map(function(item) {
    return [item[1], item[0], item[2] || '-'];
  });
  option = {
    tooltip: {
      position: 'top'
    },
    grid: {
      height: '100%',
      top: '12%',
      bottom: '14%',
      left: '0%',
      right: '0%'
    },
    xAxis: {
      type: 'category',
      data: unit,
      axisLine: {
        lineStyle: {
          color: tu_dark
        }
      },
      axisLabel: {
        interval: 0,
        rotate: 45,
        textStyle: {
          color: tu_grey_300,
          fontSize: 12,
          // fontWeight: 'bolder'
        }
      },
      splitArea: {
        show: false
      },
      name: '機構單位'
    },
    yAxis: {
      type: 'category',
      data: plan1,
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
          fontSize: 12,
          fontWeight: 'bolder'
        }
      },
      splitArea: {
        show: false
      },
      name: '計畫'
    },
    visualMap: {
      min: 0,
      max: 10,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      top: '',
      inRange: {
        color: [tu_warning_100, tu_warning_500]
      },
    },
    series: [{
      name: '參訓者薪資落點分布',
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
  window.addEventListener('resize', myChart.resize);

  myChart.on('click', function(event) {
    $('#tab-2').show().tab('show');
  });
}
// Pre_4 訓練單位屬性分析 XX計畫XX縣市XXXX訓練單位類型開
if ($('#units_1').length) {
  var dom = document.getElementById('units_1');
  var myChart = echarts.init(dom, 'wda_data', {
    renderer: 'svg',
    useDirtyRect: true,
    locale: 'EN'
  });

  let xAxisData = [];
  let data1 = [];
  let data2 = [];
  let data3 = [];
  let data4 = [];
  for (let i = 0; i < 20; i++) {
    xAxisData.push('Class' + i);
    data1.push(+(Math.random() * 200).toFixed(0));
    data2.push(+(Math.random() * 500).toFixed(0));
    data3.push(+(Math.random() + 100).toFixed(0));
    data4.push(+(Math.random() + 100).toFixed(0));
  }
  option = {
    title: {
      text: '產業人才投資方案計畫－台北市公立職業訓練機構(含國立學校機構)',
      left: "center",
      top: '0'
    },
    backgroundColor: "#fff",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        shadowStyle: {
          color: "rgba(210,219,238,0.2)"
        }
      },
    },
    legend: {

    },
    xAxis: {
      type: "value",
      // max: 4000,
    },
    yAxis: {
      type: "category",
      realtimeSort: true,
      data: unit,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: tu_grey_600,
        letterSpacing: "5",
      },
    },
    grid: {
      left: "0%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    series: [{
      type: "bar",
      barMaxWidth: 40,

      itemStyle: {
        normal: {
          // color: "#d4d7ea",
        },
      },
      label: {
        normal: {
          show: true,
          position: "inside",
          textBorderType: "solid",
          textBorderWidth: 2,
          textBorderColor: "#fff",
          fontSize: 12,
          color: 'black',

          formatter: function(params) {
            if (params.value > 0) {
              return params.value;
            } else {
              return "";
            }
          },
        },
      },
      data: data1,
    }],
  };

  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  window.addEventListener('resize', myChart.resize);
}


// Pre_5 重點產業別課程佔比分析
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
        text: '自辦在職重點產業課程開課數',
        left: '25%',
        textAlign: 'center'
      }, {
        text: '委外在職重點產業課程開課數',
        left: '25%',
        top: '52.5%',
        textAlign: 'center'
      }, {
        text: '自辦在職重點產業課程',
        subtext: '總計 ' +
          Object.keys(downloadJson).reduce(function(all, key) {
            return all + downloadJson[key];
          }, 0),
        left: '75%',
        textAlign: 'center'
      }, {
        text: '委外在職重點產業課程',
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

// Pre_5 重點產業別課程佔比分析 Xxxx(依照點擊的項目)重點產業分署開課情形
if ($('#import_industry_composite_branch').length) {
  (function import_industry_composite_branch() {
    var dom = document.getElementById("import_industry_composite_branch");
    var import_industry_composite_branch = echarts.init(dom, 'wda_data', {
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
      import_industry_composite_branch.setOption(option);
    }
    window.addEventListener('resize', function() {
      import_industry_composite_branch.resize();
    });
  })();
}
// Pre_5 Xxxx(依照點擊的項目)重點產業參訓學員背景
if ($('#import_industry_composite_students').length) {
  (function import_industry_composite_students() {
    var dom = document.getElementById("import_industry_composite_students");
    var import_industry_composite_students = echarts.init(dom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    option = {
      title: {
        text: 'Xxxx(依照點擊的項目)重點產業參訓學員背景',
      },
      grid: {
        left: '0%',
        right: '4%',
        bottom: '0%',
        top: '16%',
        containLabel: true
      },
      tooltip: {
        position: 'top',
        formatter: function(params) {
          return option.yAxis.data[params.value[1]] + '<br />' + params.marker + option.xAxis.data[params.value[0]] + '歲: ' + params.value[2];
        }
      },
      // legend: {
      //   left: 'center',
      //   bottom: '0'
      // },
      xAxis: {
        // name: "年紀",
        nameLocation: "center",
        nameGap: 30,
        type: 'category',
        data: ages,
        boundaryGap: false,
        axisLabel: {
          interval: 0,
          rotate: 45
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      yAxis: {
        // name: "分署別",
        nameLocation: "center",
        nameGap: 50,
        type: 'category',
        data: branch,
        axisLabel: {
          margin: 20
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed"
          }
        },
        axisLine: {
          show: false
        }
      },
      series: [{
        name: "1",
        type: "scatter",
        symbolSize: function(val) {
          return val[2] % 40;
        },
        data: [
          [0, 0, 52.7],
          [1, 0, 54.3],
          [2, 0, 103.6609073],
          [3, 0, 49.44177425],
          [4, 0, 85.36067451],
          [5, 0, 65.21634684],
          [6, 0, 70.8854895],
          [7, 0, 144.1782892],
          [8, 0, 86.55587461],
          [9, 0, 175.0591988],
          [10, 0, 137.365509],
          [11, 0, 152.1522859],
          [12, 0, 73.40271996],
          [13, 0, 113.8638821],
          [14, 0, 242.7411259],
          [15, 0, 165.2438771],
          [16, 0, 180.3957087],
          [17, 0, 144.8147144],
          [18, 0, 346.5970571],
          [19, 0, 134.2839845],
          [20, 0, 18.4879261],
          [21, 0, 74.88802983],
          [22, 0, 149.2529388],
          [23, 0, 50.49407848],
          [24, 0, 109.88688],
          [25, 0, 55.44359926],
          [26, 0, 48.63457596],
          [27, 0, 24.93681753],
          [28, 0, 40.53116549],
          [29, 0, 234.0532251]
        ],
        animationDelay: function(idx) {
          return idx * 5;
        },
      }, {
        name: "2",
        type: "scatter",
        symbolSize: function(val) {
          return val[2] % 40;
        },
        data: [
          [0, 1, 392.1786493],
          [1, 1, 388.7314648],
          [2, 1, 921.2800999],
          [3, 1, 648.919632],
          [4, 1, 718.9274538],
          [5, 1, 497.239929],
          [6, 1, 395.3669522],
          [7, 1, 707.5748246],
          [8, 1, 525.6779595],
          [9, 1, 691.97786],
          [10, 1, 1045.084889],
          [11, 1, 707.264729],
          [12, 1, 323.6257305],
          [13, 1, 328.1628793],
          [14, 1, 1787.290769],
          [15, 1, 1321.787024],
          [16, 1, 1210.112322],
          [17, 1, 890.3458121],
          [18, 1, 1862.071566],
          [19, 1, 442.5346048],
          [20, 1, 183.9365599],
          [21, 1, 468.5321879],
          [22, 1, 679.0783481],
          [23, 1, 339.6884056],
          [24, 1, 687.2046487],
          [25, 1, 371.4889227],
          [26, 1, 289.9903558],
          [27, 1, 86.5853872],
          [28, 1, 118.9524556],
          [29, 1, 354.8211222]
        ],
        animationDelay: function(idx) {
          return idx * 5;
        },
      }, {
        name: "3",
        type: "scatter",
        symbolSize: function(val) {
          return val[2] % 40;
        },
        data: [
          [0, 2, 765.172507],
          [1, 2, 673.2350584],
          [2, 2, 1214.166909],
          [3, 2, 926.421874],
          [4, 2, 3330.484544],
          [5, 2, 872.8083577],
          [6, 2, 1205.481453],
          [7, 2, 1893.100095],
          [8, 2, 1055.561147],
          [9, 2, 1238.412209],
          [10, 2, 1783.53776],
          [11, 2, 1715.397752],
          [12, 2, 902.7836735],
          [13, 2, 1216.242364],
          [14, 2, 2840.093451],
          [15, 2, 2040.059033],
          [16, 2, 2045.713473],
          [17, 2, 1533.73434],
          [18, 2, 3595.441708],
          [19, 2, 1404.352322],
          [20, 2, 221.0451535],
          [21, 2, 1297.894354],
          [22, 2, 3683.918502],
          [23, 2, 1105.750945],
          [24, 2, 2745.32716],
          [25, 2, 1100.772938],
          [26, 2, 86.4579147],
          [27, 2, 3814.697032],
          [28, 2, 284.7903147],
          [29, 2, 2311.373729]
        ],
        animationDelay: function(idx) {
          return idx * 5;
        },
      }, {
        name: "4",
        type: "scatter",
        symbolSize: function(val) {
          return val[2] % 40;
        },
        data: [
          [0, 3, 178.2720978],
          [1, 3, 176.7408727],
          [2, 3, 458.2143211],
          [3, 3, 157.3541005],
          [4, 3, 275.4471887],
          [5, 3, 344.0511719],
          [6, 3, 343.2315163],
          [7, 3, 282.9383794],
          [8, 3, 232.5082511],
          [9, 3, 367.7003857],
          [10, 3, 366.7452107],
          [11, 3, 463.8688594],
          [12, 3, 205.9611084],
          [13, 3, 360.5455701],
          [14, 3, 1087.709496],
          [15, 3, 929.8818277],
          [16, 3, 682.2616724],
          [17, 3, 569.6208345],
          [18, 3, 897.1430416],
          [19, 3, 385.6639469],
          [20, 3, 54.5693401],
          [21, 3, 382.9388292],
          [22, 3, 918.7355411],
          [23, 3, 245.0711592],
          [24, 3, 569.8418153],
          [25, 3, 180.7667839],
          [26, 3, 136.7756494],
          [27, 3, 128.8889828],
          [28, 3, 56.6882725],
          [29, 3, 197.8460022]
        ],
        animationDelay: function(idx) {
          return idx * 5;
        },
      }, {
        name: "5",
        type: "scatter",
        symbolSize: function(val) {
          return val[2] % 40;
        },
        data: [
          [0, 4, 23.2283978],
          [1, 4, 26.1810766],
          [2, 4, 72.2094598],
          [3, 4, 27.4956732],
          [4, 4, 30.462724],
          [5, 4, 45.4754844],
          [6, 4, 43.56418],
          [7, 4, 43.394009],
          [8, 4, 32.7692135],
          [9, 4, 59.057503],
          [10, 4, 54.0528025],
          [11, 4, 72.034583],
          [12, 4, 35.0386527],
          [13, 4, 53.0192571],
          [14, 4, 145.8359813],
          [15, 4, 118.1407429],
          [16, 4, 106.146228],
          [17, 4, 80.9065694],
          [18, 4, 146.6643559],
          [19, 4, 63.9367591],
          [20, 4, 8.1792371],
          [21, 4, 47.722568],
          [22, 4, 129.8749331],
          [23, 4, 32.018815],
          [24, 4, 78.0416694],
          [25, 4, 29.5306334],
          [26, 4, 16.2063724],
          [27, 4, 15.4440513],
          [28, 4, 8.382198],
          [29, 4, 27.7161442]
        ],
        animationDelay: function(idx) {
          return idx * 5;
        },
      }, {
        name: "6",
        type: "scatter",
        symbolSize: function(val) {
          return val[2] % 40;
        },
        data: [
          [0, 5, 25046.31678],
          [1, 5, 23223.20219],
          [2, 5, 47653.02587],
          [3, 5, 33579.37074],
          [4, 5, 109707.6926],
          [5, 5, 32254.25147],
          [6, 5, 45283.24653],
          [7, 5, 68363.12693],
          [8, 5, 35648.57193],
          [9, 5, 49581.30441],
          [10, 5, 53553.04565],
          [11, 5, 63771.15894],
          [12, 5, 15720.11194],
          [13, 5, 29456.97976],
          [14, 5, 113380.1347],
          [15, 5, 83865.49511],
          [16, 5, 64102.36443],
          [17, 5, 38417.9838],
          [18, 5, 100727.9566],
          [19, 5, 33359.26424],
          [20, 5, 6730.823663],
          [21, 5, 42365.59751],
          [22, 5, 93530.59428],
          [23, 5, 32655.01222],
          [24, 5, 55879.66608],
          [25, 5, 31185.0535],
          [26, 5, 33243.46382],
          [27, 5, 135433.4624],
          [28, 5, 12363.53003],
          [29, 5, 81481.966]
        ],
        animationDelay: function(idx) {
          return idx * 5;
        },
      }, {
        name: "G05B",
        type: "scatter",
        symbolSize: function(val) {
          return val[2] % 40;
        },
        data: [
          [0, 6, 493.9268417],
          [1, 6, 867.0691293],
          [2, 6, 742.1647056],
          [3, 6, 481.1008477],
          [4, 6, 331.6842146],
          [5, 6, 503.5029553],
          [6, 6, 444.132275],
          [7, 6, 387.397841],
          [8, 6, 787.9254582],
          [9, 6, 635.0982957],
          [10, 6, 584.3160911],
          [11, 6, 601.086535],
          [12, 6, 261.653708],
          [13, 6, 314.4516431],
          [14, 6, 1501.584241],
          [15, 6, 977.3758475],
          [16, 6, 601.6229876],
          [17, 6, 386.422958],
          [18, 6, 1074.269414],
          [19, 6, 311.2744403],
          [20, 6, 133.6015051],
          [21, 6, 516.9475946],
          [22, 6, 406.5259596],
          [23, 6, 276.6985997],
          [24, 6, 392.9127721],
          [25, 6, 309.9883433],
          [26, 6, 301.0666145],
          [27, 6, 288.9986422],
          [28, 6, 1351.215214],
          [29, 6, 375.4427012]
        ],
        animationDelay: function(idx) {
          return idx * 5;
        },
      }, {
        name: "G08C",
        type: "scatter",
        symbolSize: function(val) {
          return val[2] % 40;
        },
        data: [
          [0, 7, 444],
          [1, 7, 699],
          [2, 7, 951],
          [3, 7, 1126],
          [4, 7, 1347],
          [5, 7, 1993],
          [6, 7, 3096],
          [7, 7, 5196],
          [8, 7, 1750],
          [9, 7, 222]
        ],
        animationDelay: function(idx) {
          return idx * 5;
        },
      }, {
        name: "H04N",
        type: "scatter",
        symbolSize: function(val) {
          return val[2] % 40;
        },
        data: [
          [0, 8, 444],
          [1, 8, 699],
          [2, 8, 951],
          [3, 8, 1126],
          [4, 8, 1347],
          [5, 8, 1993],
          [6, 8, 3096],
          [7, 8, 5196],
          [8, 8, 1750],
          [9, 8, 222]
        ],
        animationDelay: function(idx) {
          return idx * 5;
        },
      }, {
        name: "H04M",
        type: "scatter",
        symbolSize: function(val) {
          return val[2] % 40;
        },
        data: [
          [0, 9, 444],
          [1, 9, 699],
          [2, 9, 951],
          [3, 9, 1126],
          [4, 9, 1347],
          [5, 9, 1993],
          [6, 9, 3096],
          [7, 9, 5196],
          [8, 9, 1750],
          [9, 9, 222]
        ],
        animationDelay: function(idx) {
          return idx * 5;
        },
      }]
    };



    if (option && typeof option === 'object') {
      import_industry_composite_students.setOption(option);
    }
    window.addEventListener('resize', function() {
      import_industry_composite_students.resize();
    });
  })();
}


// Pre_6 課程報名趨勢
if ($('#now_courses_areas').length) {
  (function now_courses_areas() {
    var dom = document.getElementById("now_courses_areas");
    var now_courses_areas = echarts.init(dom, 'wda_data', {
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
          padding: [0, 0, 0, 0],
          interval: 0,
          rotate: -15,
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
            textBorderColor: tu_secondary_200,
            textShadowColor: tu_secondary_400,
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
      now_courses_areas.setOption(option);
    }
    window.addEventListener('resize', function() {
      now_courses_areas.resize();

    });
    now_courses_areas.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}
// Pre_6 課程報名趨勢 學員性別年齡分布
if ($('#now_courses_areas_gender').length) {
  (function now_courses_areas_gender() {
    var dom = document.getElementById("now_courses_areas_gender");
    var now_courses_areas_gender = echarts.init(dom, 'wda_data', {
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
        gridIndex: 1,
        axisLabel: {
          color: tu_dark,
          fontSize: "12",
          fontWeight: "bolder",
          margin: 0,
        },
        nameGap: 0,

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
      now_courses_areas_gender.setOption(option);
    }
    window.addEventListener('resize', function() {
      now_courses_areas_gender.resize();
    });
  })();
}
// Pre_6 課程報名趨勢 學歷分布情形
if ($('#now_courses_areas_education').length) {
  (function now_courses_areas_education() {
    var dom = document.getElementById('now_courses_areas_education');
    var now_courses_areas_education = echarts.init(dom, 'wda_data', {
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
      now_courses_areas_education.setOption(option);
    }
    window.addEventListener('resize', function() {
      now_courses_areas_education.resize();

    });
  })();
}
// Pre_6 課程報名趨勢 參訓身分別統計
if ($('#now_courses_areas_identity').length) {
  (function now_courses_areas_identity() {
    var chartDom = document.getElementById('now_courses_areas_identity');
    var now_courses_areas_identity = echarts.init(chartDom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    var option;
    var data = [
      [
        [28604, 77, 17096869, '25,250', 1990],
        [31163, 77.4, 27662440, '26,400', 1990],
        [1516, 68, 1154605773, '27,600', 1990],
        [13670, 74.7, 10582082, '28,800', 1990],
        [28599, 75, 4986705, '30,300', 1990],
        [29476, 77.1, 56943299, '31,800', 1990],
        [31476, 75.4, 78958237, '38,200', 1990],
        [28666, 78.1, 254830, '25,250', 1990],
        [1777, 57.7, 870601776, '28,800', 1990],
        [29550, 79.1, 122249285, '31,800', 1990],
        [2076, 67.9, 20194354, '33,300', 1990],
        [12087, 72, 42972254, '43,900', 1990],
        [24021, 75.4, 3397534, '30,300', 1990],
        [43296, 76.8, 4240375, '38,200', 1990],
        [10088, 70.8, 38195258, 'Poland', 1990],
        [19349, 69.6, 147568552, '33,300', 1990],
        [10670, 67.3, 53994605, '27,600', 1990],
        [26424, 75.7, 57110117, '31,800', 1990],
        [37062, 75.4, 252847810, '31,800', 1990]
      ],
      [
        [44056, 81.8, 23968973, '33,300', 2015],
        [43294, 81.7, 35939927, '38,200', 2015],
        [13334, 76.9, 1376048943, '30,300', 2015],
        [21291, 78.5, 11389562, '33,300', 2015],
        [38923, 80.8, 5503457, '28,800', 2015],
        [37599, 81.9, 64395345, '30,300', 2015],
        [44053, 81.1, 80688545, '28,800', 2015],
        [42182, 82.8, 329425, '43,900', 2015],
        [5903, 66.8, 1311050527, '25,250', 2015],
        [36162, 83.5, 126573481, '28,800', 2015],
        [1390, 71.4, 25155317, '38,200', 2015],
        [34644, 80.7, 50293439, '31,800', 2015],
        [34186, 80.6, 4528526, '33,300', 2015],
        [64304, 81.6, 5210967, '30,300', 2015],
        [24787, 77.3, 38611794, '43,900', 2015],
        [23038, 73.13, 143456918, '25,250', 2015],
        [19360, 76.5, 78665830, '33,300', 2015],
        [38225, 81.4, 64715810, '30,300', 2015],
        [53354, 79.1, 321773631, '31,800', 2015]
      ]
    ];

    option = {
      title: {
        text: '參訓者薪資級'
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '4%',
        top: '12%',
        containLabel: true
      },
      legend: {
        right: 10,
        data: ['男生', '女生']
      },
      xAxis: {

        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        scale: true
      },
      series: [{
        name: '男生',
        data: data[0],
        type: 'scatter',
        symbolSize: function(data) {
          return Math.sqrt(data[2]) / 5e2;
        },
        label: {
          emphasis: {
            show: true,
            formatter: function(param) {
              return param.data[3];
            },
            position: 'top'
          }
        },
        itemStyle: {
          normal: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
              offset: 0,
              color: 'rgb(251, 118, 123)'
            }, {
              offset: 1,
              color: 'rgb(204, 46, 72)'
            }])
          }
        }
      }, {
        name: '女生',
        data: data[1],
        type: 'scatter',
        symbolSize: function(data) {
          return Math.sqrt(data[2]) / 5e2;
        },
        label: {
          emphasis: {
            show: true,
            formatter: function(param) {
              return param.data[3];
            },
            position: 'top'
          }
        },
        itemStyle: {
          normal: {
            shadowBlur: 10,
            shadowColor: 'rgba(25, 100, 150, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
              offset: 0,
              color: 'rgb(129, 227, 238)'
            }, {
              offset: 1,
              color: 'rgb(25, 183, 207)'
            }])
          }
        }
      }]
    };
    if (option && typeof option === 'object') {
      now_courses_areas_identity.setOption(option);
    }

    window.addEventListener('resize', function() {
      now_courses_areas_identity.resize();
    });
  })();
}

// Pre_7 訓後在職穩定度
if ($('#now_stable').length) {
  (function now_stable() {
    var chartDom = document.getElementById('now_stable');
    var now_stable = echarts.init(chartDom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });
    option = {
      title: {
        text: '',
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        showDelay: 0,
        formatter: '{a0}: {c0} 人<br />{a1}: {c1} 人',
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['Actual', 'Object', 'General', 'Good', 'Excellent '],
        icon: 'roundRect',
        left: 'right'
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
          name: '訓後穩定就業人數',
          type: 'bar',
          barWidth: 50,
          align: 'center',
          itemStyle: {
            normal: {
              color: '#AACFD0',
              align: 'center',
            }
          },
          stack: 'total',
          data: [180, 176, 264, 200, 192]
        },
        // {
        //   name: 'Good',
        //   type: 'bar',
        //   itemStyle: {
        //     normal: {
        //       align: 'center',
        //     }
        //   },
        //   stack: 'total',
        //   data: [15, 15, 15, 15, 15]
        // }, 
        // {
        //   name: 'Excellent ',
        //   type: 'bar',
        //   itemStyle: {
        //     normal: {

        //       align: 'center',
        //     }
        //   },
        //   stack: 'total',
        //   data: [15, 15, 15, 15, 15]
        // }, 
        {
          name: '結訓人數',
          type: 'bar',
          barGap: '-80%',
          barWidth: '20%',
          z: 10,
          itemStyle: {
            normal: {
              color: '#29252C',
            }
          },
          data: [80, 94, 97, 78, 68]
        }, {
          name: '',
          type: 'scatter',
          symbol: 'rect',
          silent: true,
          itemStyle: {
            normal: {
              color: '#F33535',
            }
          },
          symbolSize: [30, 5],
          symbolOffset: ['5', 0],
          z: 20,
          data: [95, 90, 90, 90, 85],

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
              textBorderColor: tu_info_300,
              textShadowColor: tu_info_500,
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
        }
      ]
    };
    if (option && typeof option === 'object') {
      now_stable.setOption(option);
    }

    window.addEventListener('resize', function() {
      now_stable.resize();
    });
    now_stable.on('click', function(event) {
      $('#tab-2').show().tab('show');
    });
  })();
}


// Pre_7 訓後在職穩定度 產投計畫訓後就業穩定度

if ($('#now_stable_coures').length) {
  (function now_stable_coures() {
    var chartDom = document.getElementById('now_stable_coures');
    var now_stable_coures = echarts.init(chartDom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    var data1 = [];
    var data2 = [];
    var data3 = [];
    var data4 = [];
    for (let i = 0; i < 6; i++) {
      data1.push(+(Math.random() * 200).toFixed(0));
      data2.push(+(Math.random() * 400).toFixed(0));
      data3.push(+(Math.random() * 230).toFixed(0));
      data4.push(+(Math.random() * 400).toFixed(0));
    }
    option = {
      title: {
        text: '自辦在職訓後就業穩定度',
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '4%',
        top: '10%',
        containLabel: true
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        showDelay: 0,
        formatter: '{a0}: {c0} 人<br />{a1}: {c1} 人',
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: category3,
        icon: 'roundRect',
        left: 'right'
      },
      xAxis: {
        boundaryGap: true,

        data: category3,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          fontSize: 14,
          fontWeight: 'bolder',
          color: tu_dark,
          padding: [8, 0, 0, 0],
          interval: 0,
          rotate: 15,
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
          name: '訓後穩定就業人數',
          type: 'bar',
          barWidth: '36%',
          align: 'center',
          itemStyle: {
            normal: {
              color: '#c3ce3d',
              align: 'center',
            }
          },
          stack: 'total',
          data: [180, 176, 264, 200, 192]
        },
        // {
        //   name: 'Good',
        //   type: 'bar',
        //   itemStyle: {
        //     normal: {
        //       align: 'center',
        //     }
        //   },
        //   stack: 'total',
        //   data: [15, 15, 15, 15, 15]
        // }, 
        // {
        //   name: 'Excellent ',
        //   type: 'bar',
        //   itemStyle: {
        //     normal: {

        //       align: 'center',
        //     }
        //   },
        //   stack: 'total',
        //   data: [15, 15, 15, 15, 15]
        // }, 
        {
          name: '結訓人數',
          type: 'bar',
          barGap: '-80%',
          barWidth: '20%',
          z: 10,
          itemStyle: {
            normal: {
              color: '#027b8e',
            }
          },
          data: [80, 94, 97, 78, 68]
        }, {
          name: '',
          type: 'scatter',
          symbol: 'rect',
          silent: true,
          itemStyle: {
            normal: {
              color: '#f44771',
            }
          },
          symbolSize: [30, 5],
          symbolOffset: ['5', 0],
          z: 20,
          data: [95, 90, 90, 90, 85],

        }, {
          name: '錄取率',
          type: 'line',
          yAxisIndex: 1,
          smooth: true,
          symbol: 'circle',
          symbolSize: 12,
          color: '#1f3bb3',
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
          tooltip: {
            valueFormatter: function(value) {
              return value + ' %';
            }
          },
          data: [95, 90, 90, 90, 85],
        }
      ]
    };
    if (option && typeof option === 'object') {
      now_stable_coures.setOption(option);
    }

    window.addEventListener('resize', function() {
      now_stable_coures.resize();
    });
  })();
}



// Pre_7 訓後在職穩定度 產投計畫訓後就業穩定度
if ($('#now_stable_plans').length) {
  (function now_stable_plans() {
    var chartDom = document.getElementById('now_stable_plans');
    var now_stable_plans = echarts.init(chartDom, 'wda_data', {
      renderer: 'svg',
      useDirtyRect: true,
      locale: 'EN'
    });

    var data1 = [];
    var data2 = [];
    var data3 = [];
    var data4 = [];
    for (let i = 0; i < 6; i++) {
      data1.push(+(Math.random() * 200).toFixed(0));
      data2.push(+(Math.random() * 400).toFixed(0));
      data3.push(+(Math.random() * 230).toFixed(0));
      data4.push(+(Math.random() * 100).toFixed(0));
    }
    option = {
      title: {
        text: '產投計畫訓後就業穩定度',
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        showDelay: 0,
        formatter: '{a0}: {c0} 人<br />{a1}: {c1} 人',
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '4%',
        top: '10%',
        containLabel: true
      },
      legend: {
        data: ['Actual', 'Object', 'General', 'Good', 'Excellent '],
        icon: 'roundRect',
        left: 'right'
      },
      xAxis: {
        boundaryGap: true,
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
          rotate: 15,
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
          name: '訓後穩定就業人數',
          type: 'bar',
          barWidth: '36%',
          align: 'center',
          itemStyle: {
            normal: {
              color: '#4f51c6',
              align: 'center',
            }
          },
          stack: 'total',
          data: data1
        },
        // {
        //   name: 'Good',
        //   type: 'bar',
        //   itemStyle: {
        //     normal: {
        //       align: 'center',
        //     }
        //   },
        //   stack: 'total',
        //   data: [15, 15, 15, 15, 15]
        // }, 
        // {
        //   name: 'Excellent ',
        //   type: 'bar',
        //   itemStyle: {
        //     normal: {

        //       align: 'center',
        //     }
        //   },
        //   stack: 'total',
        //   data: [15, 15, 15, 15, 15]
        // }, 
        {
          name: '結訓人數',
          type: 'bar',
          barGap: '-80%',
          barWidth: '20%',
          z: 10,
          itemStyle: {
            normal: {
              color: '#b9aa97',
            }
          },
          data: data2
        }, {
          name: '',
          type: 'scatter',
          symbol: 'rect',
          silent: true,
          itemStyle: {
            normal: {
              color: '#55bef9',
            }
          },
          symbolSize: [30, 5],
          symbolOffset: ['5', 0],
          z: 20,
          data: data3
        }, {
          name: '錄取率',
          type: 'line',
          yAxisIndex: 1,
          smooth: true,
          symbol: 'circle',
          symbolSize: 12,
                    color: '#b66353',
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
              textBorderColor: '#ccb97e',
              textShadowColor: '#ccb97e',
              textShadowBlur: 10,
              formatter: '{c}%'
            },
          },
          tooltip: {
            valueFormatter: function(value) {
              return value + ' %';
            }
          },
          data: data4
        }
      ]
    };
    if (option && typeof option === 'object') {
      now_stable_plans.setOption(option);
    }

    window.addEventListener('resize', function() {
      now_stable_plans.resize();
    });
  })();
}