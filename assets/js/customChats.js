//  Settings
Highcharts.setOptions({
  loading: {
    hideDuration: 1000,
    showDuration: 1000
  },
  colors: [
    '#86EAE9',
    '#6273D9',
    '#353C6E',
    '#5EBED3',
    '#4691B7',
    '#3C6696',
    '#022873',
    '#F26699',
    '#05AFF2',
    '#05C7F2',
    '#365902',

    '#F2A20C',
    '#60AEBF',
    '#F2DC9B',
    '#D99066',
    '#D9665B',

    '#D91A60',
    '#034AA6',
    '#2ABF5E',
    '#F2B705',
    '#D91604',


    '#C4D923',
    '#BDEDF2',
    '#F2798F',
    '#A65B61',


  ],
  title: {
    style: {
      color: "#1A202C",
      fontWeight: "bold",
      fontSize: "18px",
      fontFamily: "futura-pt, ar-udjingxiheib5"
    }
  },
  chart: {
    style: {
      fontFamily: "futura-pt, ar-udjingxiheib5"
    },
    animation: {
      duration: 1000
    }
  },
  xAxis: {

    labels: {
      style: {
        color: '#5A6473',
        fontSize: '10px'
      },
    }
  },
  yAxis: {
    title: {
      align: 'high',
      offset: 0,
      rotation: 0,
      y: 20,
      x: -15,
      style: {
        color: '#5A6473',
        fontSize: '10px'
      }
    },
    labels: {
      style: {
        color: '#5A6473',
        fontSize: '10px'
      },
    }
  },
  // series: {
  //     borderRadius: 2,

  // },
  plotOptions: {
    // series: {
    //     borderRadius: 2,
    // }
  }
});

// strings
var categories = [
  "15-19",
  "20-24",
  "25-29",
  "30-34",
  "35-39",
  "40-44",
  "45-49",
  "50-54",
  "55-59",
  "60-64",
  "65-69",
  "70-74",
  "75-79",
  "80+"
];

if ($('#gender').length) {
  Highcharts.chart("gender", {
    chart: {
      type: "bar"
    },
    title: {
      text: ""
    },
    subtitle: {
      text: ""
    },
    accessibility: {
      point: {
        valueDescriptionFormat: "{index}. Age {xDescription}, {value}%."
      }
    },
    xAxis: [{
      categories: categories,
      reversed: false,
      labels: {
        step: 1,
      },
      accessibility: {
        description: "Age (male)"
      }
    }, {
      // mirror axis on right side
      opposite: true,
      reversed: false,
      categories: categories,
      linkedTo: 0,
      labels: {
        step: 1
      },
      accessibility: {
        description: "Age (female)"
      }
    }],
    yAxis: {
      title: {
        text: null
      },
      labels: {
        formatter: function() {
          return Math.abs(this.value);
        }
      },
      accessibility: {
        description: "Percentage population",
        rangeDescription: "Range: 0 to 5%"
      }
    },

    plotOptions: {
      series: {
        stacking: "normal"
      }
    },

    tooltip: {
      formatter: function() {
        return (
          "<b>" +
          this.series.name +
          ", age " +
          this.point.category +
          "</b><br/>" +
          "Population: " +
          Highcharts.numberFormat(Math.abs(this.point.y), 1) +
          "%"
        );
      }
    },

    series: [{
      name: "男",
      data: [-2200, -2100, -2200, -2400, -2700, -3000, -3000, -1500, -1500, -1400, -1200, -1100, -1000, -270],
      color: "#05AFF2"
    }, {
      name: "女",
      data: [
        2200,
        2100,
        2200,
        2400,
        2400,
        3100,
        3000,
        1400,
        1400,
        1400,
        1200,
        1100,
        1000,
        270
      ],
      color: "#F26699"
    }]
  });
}

if ($('#apply').length) {
  var ySelect = document.getElementById('ySelect');

  ySelect.onchange = function handleChange(opv) {
    var val = opv.target.value;
    switch (val) {
      case '2020':
        applyChart.showLoading();
        setTimeout(function() {
          applyChart.hideLoading();
        }, 1000);
        applyChart.series[0].update({
          data: [150000, 70000, 100000, 80000, 83000],
        }, {
          data: [9800, 6400, 6600, 4800, 8600],
        }, {
          data: [100000, 42000, 72000, 50000, 65000],
        }, {
          data: [90, 87, 88, 80, 89],
        }, {
          data: [85, 83, 84, 74, 84],
        });
        applyChart.redraw();
        break;
      case '2019':
        applyChart.showLoading();
        setTimeout(function() {
          applyChart.hideLoading();
        }, 1000);
        applyChart.series[0].update({
          data: [155000, 78000, 120000, 86000, 64000],
        }, {
          data: [110000, 53000, 90000, 60000, 73000],
        }, {
          data: [12000, 36000, 72000, 40000, 66000],
        }, {
          data: [90, 87, 88, 80, 89],
        }, {
          data: [85, 83, 84, 74, 84],
        });
        applyChart.redraw();
        break;
      case '2018':
        applyChart.showLoading();
        setTimeout(function() {
          applyChart.hideLoading();
        }, 1000);
        applyChart.series[0].update({
          data: [155000, 78000, 120000, 86000, 64000],
        }, {
          data: [110000, 53000, 90000, 60000, 73000],
        }, {
          data: [12000, 36000, 72000, 40000, 66000],
        }, {
          data: [90, 87, 88, 80, 89],
        }, {
          data: [85, 83, 84, 74, 84],
        });
        applyChart.redraw();
        break;
      case '2017':
        applyChart.showLoading();
        setTimeout(function() {
          applyChart.hideLoading();
        }, 1000);
        applyChart.series[0].update({
          data: [155000, 78000, 120000, 86000, 64000],
        }, {
          data: [110000, 53000, 90000, 60000, 73000],
        }, {
          data: [12000, 36000, 72000, 40000, 66000],
        }, {
          data: [90, 87, 88, 80, 89],
        }, {
          data: [85, 83, 84, 74, 84],
        });
        applyChart.redraw();
        break;
    };
  };

  var applyChart = Highcharts.chart("apply", {

    chart: {
      type: "column"
    },
    title: {
      text: ""
    },
    xAxis: {
      categories: [
        "北基宜花金馬分署",
        "桃竹苗分署",
        "中彰投分署",
        "雲嘉南分署",
        "高屏澎東分署"
      ]
    },
    yAxis: [{
      min: 0,
      title: {
        text: "人數",
      }
    }, {
      title: {

        x: 15,
        text: "百分比",

      },
      opposite: true
    }],

    tooltip: {
      shared: true
    },
    plotOptions: {
      column: {
        grouping: false,
        shadow: false,
        borderWidth: 0
      }
    },
    series: [{
      name: "報名數",
      color: "rgba(165,170,217,1)",
      data: [150000, 70000, 100000, 80000, 83000],
      pointPadding: 0,
      pointPlacement: 0,
      borderRadius: 4,
      color: '#5EBED3',
      cursor: 'pointer',
      point: {
        events: {
          click: function() {
            location.href = 'inner_1.html'
          }
        }
      }
    }, {
      name: "參訓數",
      color: "rgba(126,86,134,.9)",
      data: [110000, 53000, 90000, 60000, 73000],
      pointPadding: 0.2,
      pointPlacement: 0,
      borderRadius: 3,
      color: '#353C6E',
    }, {
      name: "結訓數",
      data: [100000, 42000, 72000, 50000, 65000],
      pointPadding: 0.4,
      pointPlacement: 0,
      borderRadius: 2,
      color: '#F2A20C'
    }, {
      type: "spline",
      name: "錄取率",
      data: [90, 87, 88, 80, 89],
      color: "#F26699",
      marker: {
        lineWidth: 2,
        lineColor: "#F26699",
        fillColor: "#F26699",
      },
      yAxis: 1
    }, {
      type: "spline",
      name: "參訓率",
      data: [85, 83, 84, 74, 84],
      color: "#6273D9",
      marker: {
        lineWidth: 2,
        lineColor: "#6273D9",
        fillColor: "#6273D9"
      },
      yAxis: 1
    }]
  });


  Highcharts.seriesType(
    "lowmedhigh",
    "boxplot", {
      keys: ["low", "median", "high"],
      tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: ' +
          "Low <b>{point.low}</b> - Median <b>{point.median}</b> - High <b>{point.high}</b><br/>"
      }
    }, {
      // Change point shape to a line with three crossing lines for low/median/high
      // Stroke width is hardcoded to 1 for simplicity
      drawPoints: function() {
        var series = this;
        this.points.forEach(function(point) {
          var graphic = point.graphic,
            verb = graphic ? "animate" : "attr",
            shapeArgs = point.shapeArgs,
            width = shapeArgs.width,
            left = Math.floor(shapeArgs.x) + 0.5,
            right = left + width,
            crispX = left + Math.round(width / 2) + 0.5,
            highPlot = Math.floor(point.highPlot) + 0.5,
            medianPlot = Math.floor(point.medianPlot) + 0.5,
            // Sneakily draw low marker even if 0
            lowPlot = Math.floor(point.lowPlot) + 0.5 - (point.low === 0 ? 1 : 0);

          if (point.isNull) {
            return;
          }

          if (!graphic) {
            point.graphic = graphic = series.chart.renderer
              .path("point")
              .add(series.group);
          }

          graphic.attr({
            stroke: point.color || series.color,
            "stroke-width": 1
          });

          graphic[verb]({
            d: [
              "M",
              left,
              highPlot,
              "H",
              right,
              "M",
              left,
              medianPlot,
              "H",
              right,
              "M",
              left,
              lowPlot,
              "H",
              right,
              "M",
              crispX,
              highPlot,
              "V",
              lowPlot
            ]
          });
        });
      }
    }
  );
}

if ($('#apply_num').length) {

  var applyChart = Highcharts.chart("apply_num", {

    chart: {
      type: "column"
    },
    title: {
      text: ""
    },
    xAxis: {
      categories: [
        "北基宜花金馬分署",
        "桃竹苗分署",
        "中彰投分署",
        "雲嘉南分署",
        "高屏澎東分署"
      ],
      labels: {
        style: {
          color: '#1F1F39',
          fontSize: '12px'
        },
      }
    },

    yAxis: [{
      min: 0,
      title: {
        text: "人數",
      }
    }, {
      title: {
        x: 15,
        text: "百分比",
      },
      opposite: true
    }],

    tooltip: {
      shared: true
    },
    plotOptions: {
      column: {
        grouping: false,
        shadow: false,
        borderWidth: 0
      }
    },
    series: [{
      name: "報名人數",
      data: [150000, 70000, 100000, 80000, 83000],
      pointPadding: 0,
      pointPlacement: 0,
      borderRadius: 4,
      color: '#80C4DC',
      cursor: 'pointer',
      point: {
        events: {
          click: function() {
            location.href = 'inner_1.html'
          }
        }
      }
    }, {
      name: "結訓人數",
      data: [110000, 53000, 90000, 60000, 73000],
      pointPadding: 0.2,
      pointPlacement: 0,
      borderRadius: 3,
      color: '#333F51',
    }, {
      name: "就業人數",
      data: [100000, 42000, 72000, 50000, 65000],
      pointPadding: 0.4,
      pointPlacement: 0,
      borderRadius: 2,
      color: '#FF9E9E'
    }, {
      type: "spline",
      name: "結訓率",
      data: [90, 87, 88, 80, 89],
      color: "#83BF6E",
      marker: {
        lineWidth: 2,
        lineColor: "#83BF6E",
        fillColor: "#fff",
      },
      yAxis: 1
    }, {
      type: "spline",
      name: "訓後就業率",
      data: [85, 83, 84, 74, 84],
      color: "#1F3BB3",
      marker: {
        lineWidth: 2,
        lineColor: "#1F3BB3",
        fillColor: "#fff"
      },
      yAxis: 1
    }]
  });


  Highcharts.seriesType(
    "lowmedhigh",
    "boxplot", {
      keys: ["low", "median", "high"],
      tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: ' +
          "Low <b>{point.low}</b> - Median <b>{point.median}</b> - High <b>{point.high}</b><br/>"
      }
    }, {
      // Change point shape to a line with three crossing lines for low/median/high
      // Stroke width is hardcoded to 1 for simplicity
      drawPoints: function() {
        var series = this;
        this.points.forEach(function(point) {
          var graphic = point.graphic,
            verb = graphic ? "animate" : "attr",
            shapeArgs = point.shapeArgs,
            width = shapeArgs.width,
            left = Math.floor(shapeArgs.x) + 0.5,
            right = left + width,
            crispX = left + Math.round(width / 2) + 0.5,
            highPlot = Math.floor(point.highPlot) + 0.5,
            medianPlot = Math.floor(point.medianPlot) + 0.5,
            // Sneakily draw low marker even if 0
            lowPlot = Math.floor(point.lowPlot) + 0.5 - (point.low === 0 ? 1 : 0);

          if (point.isNull) {
            return;
          }

          if (!graphic) {
            point.graphic = graphic = series.chart.renderer
              .path("point")
              .add(series.group);
          }

          graphic.attr({
            stroke: point.color || series.color,
            "stroke-width": 1
          });

          graphic[verb]({
            d: [
              "M",
              left,
              highPlot,
              "H",
              right,
              "M",
              left,
              medianPlot,
              "H",
              right,
              "M",
              left,
              lowPlot,
              "H",
              right,
              "M",
              crispX,
              highPlot,
              "V",
              lowPlot
            ]
          });
        });
      }
    }
  );
}

if ($('#salary').length) {
  var chart = Highcharts.chart("salary", {
    chart: {
      type: "lowmedhigh"
    },

    title: {
      text: ""
    },

    accessibility: {
      point: {
        descriptionFormatter: function(point) {
          // Use default formatter for null points
          if (point.isNull) {
            return false;
          }

          return (
            point.category +
            ", low " +
            point.low +
            ", median " +
            point.median +
            ", high " +
            point.high
          );
        }
      },

      series: {
        descriptionFormatter: function(series) {
          return (
            series.name +
            ", series " +
            (series.index + 1) +
            " of " +
            series.chart.series.length +
            " with " +
            series.points.length +
            " data points."
          );
        }
      },

      typeDescription: "Low, median, high. Each data point has a low, median and high value, depicted vertically as small ticks." // Describe the chart type to screen reader users, since this is not a traditional boxplot chart
    },

    xAxis: [{
      title: {
        text: "勞保級距"
      },
      accessibility: {
        description: "Months of the year"
      },
      categories: [
        "24000",
        "25200",
        "26400",
        "27600",
        "28800",
        "30300",
        "31800",
        "33000",
        "34800",
        "36300",
        "38200",
        "40100",
        "42000",
        "43900",
        "45800"
      ],
      crosshair: true
    }],
    yAxis: [{
      title: {
        text: "人數"
      },

      min: 0
    }, {
      title: {
        text: "年齡"
      },
      // categories: categories,
      // linkedTo: 0,
      // labels: {
      //   step: 1
      // },
      categories: [
        "15-19",
        "20-24",
        "25-29",
        "30-34",
        "35-39",
        "40-44",
        "45-49",
        "50-54",
        "55-59",
        "60-64",
        "65-69",
        "70-74",
        "75-79",
        "80+"
      ],

      opposite: true

      // tickInterval: 1
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 1200
        },
        chartOptions: {
          // xAxis: {
          //     categories: ['訓3', '訓6', '訓9','訓12']
          // }
        }
      }]
    },

    tooltip: {
      shared: true
    },

    plotOptions: {
      series: {
        stickyTracking: true,
        whiskerWidth: 5,
      }
    },

    series: [{
      name: "在職學員",
      data: [
        [100, 800, 1900],
        [100, 1100, 2300],
        [300, 1600, 2800],
        [200, 1500, 2800],
        [100, 1500, 2700],
        [000, 900, 2100],
        [000, 800, 1900],
        [100, 1100, 2300],
        [100, 600, 1900],
        [200, 800, 2100],
        [200, 900, 2200],
        [100, 1100, 1900],
        [300, 1600, 2800],
        [200, 1500, 2800],
        [100, 1500, 2700]
      ]
    }, {
      name: "職前學員訓前級距",
      data: [
        [000, 300, 600],
        [100, 200, 400],
        [000, 200, 500],
        [200, 200, 500],
        [100, 300, 600],
        [000, 100, 300],
        [100, 100, 200],
        [000, 100, 300],
        [100, 100, 300],
        [000, 200, 400],
        [100, 200, 500],
        [100, 300, 500],
        [000, 200, 400],
        [100, 200, 500]
      ]
    }, {
      name: "青年學員訓前級距",
      data: [
        [22, 22, 85],
        [33, 22, 22],
        [55, 33, 33],
        [55, 44, 33],
        [44, 55, 44],
        [77, 66, 55],
        [66, 77, 66],
        [88, 88, 77],
        [99, 88, 88],
        [22, 11, 99],
        [11, 66, 00],
        [44, 66, 00],
        [33, 33, 11],
        [21, 33, 22],
        [22, 44, 11],
        [54, 22, 11]
      ]
    }]
  });
  chart.container.onmousedown = null;
  chart.container.onclick = null;
}

if ($('#Identity_pie1').length) {
  Highcharts.chart("Identity_pie1", {
    chart: {
      type: "variablepie"
    },
    title: {
      text: "一般使用者-職類學員背景組成分析(通俗職類大類)-委外職前"
    },
    tooltip: {
      headerFormat: "",
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "人數: <b>{point.y:,.0f}</b><br/>" +
        "百分比: <b>{point.percentage:,.2f} %</b><br/>"
      //"Area (square km): <b>{point.y}</b><br/>" +
      //"Population density (people per square km): <b>{point.z}</b><br/>"
    },

    series: [{
      minPointSize: 10,
      innerSize: "20%",
      zMin: 0,
      name: "countries",
      data: [{
        name: "行政經營",
        y: 9,
        z: 92.9
      }, {
        name: "技術服務",
        y: 5,
        z: 118.7
      }, {
        name: "營建職類",
        y: 6,
        z: 124.6
      }, {
        name: "傳播媒體",
        y: 6,
        z: 137.5
      }, {
        name: "娛樂演藝",
        y: 5,
        z: 201.8
      }, {
        name: "教育學術",
        y: 2,
        z: 214.5
      }, {
        name: "餐飲旅遊運動",
        y: 8,
        z: 235.6
      }, {
        name: "醫藥美容",
        y: 9,
        z: 201.8
      }, {
        name: "保全警衛",
        y: 4,
        z: 235.6
      }, {
        name: "家事服務",
        y: 10,
        z: 118.7
      }, {
        name: "業務行銷",
        y: 7,
        z: 124.6
      }, {
        name: "農林漁牧",
        y: 2,
        z: 137.5
      }, {
        name: "人事法務",
        y: 1,
        z: 201.8
      }, {
        name: "財會金融",
        y: 6,
        z: 214.5
      }, {
        name: "廣告美編",
        y: 2,
        z: 235.6
      }, {
        name: "客戶服務",
        y: 10,
        z: 92.9
      }, {
        name: "電腦硬體",
        y: 1,
        z: 118.7
      }, {
        name: "資訊軟體",
        y: 5,
        z: 124.6
      }, {
        name: "品管製造",
        y: 7,
        z: 137.5
      }]
    }]
  });
}

if ($('#Identity_pie2').length) {
  Highcharts.chart("Identity_pie2", {
    chart: {
      type: "variablepie"
    },
    title: {
      text: "一般使用者-職類學員背景組成分析(通俗職類大類)-自辦職前"
    },
    tooltip: {
      headerFormat: "",
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "人數: <b>{point.y:,.0f}</b><br/>" +
        "百分比: <b>{point.percentage:,.2f} %</b><br/>"
      //"Area (square km): <b>{point.y}</b><br/>" +
      //"Population density (people per square km): <b>{point.z}</b><br/>"
    },

    series: [{
      minPointSize: 10,
      innerSize: "20%",
      zMin: 0,
      name: "countries",
      data: [{
        name: "行政經營",
        y: 9,
        z: 92.9
      }, {
        name: "技術服務",
        y: 5,
        z: 118.7
      }, {
        name: "營建職類",
        y: 3,
        z: 124.6
      }, {
        name: "傳播媒體",
        y: 6,
        z: 137.5
      }, {
        name: "娛樂演藝",
        y: 5,
        z: 201.8
      }, {
        name: "教育學術",
        y: 0,
        z: 214.5
      }, {
        name: "餐飲旅遊運動",
        y: 4,
        z: 235.6
      }, {
        name: "醫藥美容",
        y: 3,
        z: 201.8
      }, {
        name: "保全警衛",
        y: 0,
        z: 235.6
      }, {
        name: "家事服務",
        y: 4,
        z: 118.7
      }, {
        name: "業務行銷",
        y: 7,
        z: 124.6
      }, {
        name: "農林漁牧",
        y: 1,
        z: 137.5
      }, {
        name: "人事法務",
        y: 0,
        z: 201.8
      }, {
        name: "財會金融",
        y: 3,
        z: 214.5
      }, {
        name: "廣告美編",
        y: 2,
        z: 235.6
      }, {
        name: "客戶服務",
        y: 10,
        z: 92.9
      }, {
        name: "電腦硬體",
        y: 1,
        z: 118.7
      }, {
        name: "資訊軟體",
        y: 5,
        z: 124.6
      }, {
        name: "品管製造",
        y: 4,
        z: 137.5
      }]
    }]
  });
}

if ($('#Identity_pie3').length) {
  Highcharts.chart("Identity_pie3", {
    chart: {
      type: "variablepie"
    },
    title: {
      text: "一般使用者-職類學員背景組成分析(通俗職類大類)-青年"
    },
    tooltip: {
      headerFormat: "",
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "人數: <b>{point.y:,.0f}</b><br/>" +
        "百分比: <b>{point.percentage:,.2f} %</b><br/>"
      //"Area (square km): <b>{point.y}</b><br/>" +
      //"Population density (people per square km): <b>{point.z}</b><br/>"
    },

    series: [{
      minPointSize: 10,
      innerSize: "20%",
      zMin: 0,
      name: "countries",
      data: [{
        name: "行政經營",
        y: 9,
        z: 92.9
      }, {
        name: "技術服務",
        y: 1,
        z: 118.7
      }, {
        name: "營建職類",
        y: 3,
        z: 124.6
      }, {
        name: "傳播媒體",
        y: 6,
        z: 137.5
      }, {
        name: "娛樂演藝",
        y: 0,
        z: 201.8
      }, {
        name: "教育學術",
        y: 0,
        z: 214.5
      }, {
        name: "餐飲旅遊運動",
        y: 7,
        z: 235.6
      }, {
        name: "醫藥美容",
        y: 2,
        z: 201.8
      }, {
        name: "保全警衛",
        y: 2,
        z: 235.6
      }, {
        name: "家事服務",
        y: 4,
        z: 118.7
      }, {
        name: "業務行銷",
        y: 2,
        z: 124.6
      }, {
        name: "農林漁牧",
        y: 0,
        z: 137.5
      }, {
        name: "人事法務",
        y: 0,
        z: 201.8
      }, {
        name: "財會金融",
        y: 1,
        z: 214.5
      }, {
        name: "廣告美編",
        y: 0,
        z: 235.6
      }, {
        name: "客戶服務",
        y: 5,
        z: 92.9
      }, {
        name: "電腦硬體",
        y: 1,
        z: 118.7
      }, {
        name: "資訊軟體",
        y: 3,
        z: 124.6
      }, {
        name: "品管製造",
        y: 2,
        z: 137.5
      }]
    }]
  });
}

if ($('#gender1').length) {
  Highcharts.chart("gender1", {
    chart: {
      type: "bar"
    },
    title: {
      text: "參訓學員基本背景"
    },
    subtitle: {
      text: ""
    },
    accessibility: {
      point: {
        valueDescriptionFormat: "{index}. 年齡 {xDescription}, {value}%."
      }
    },
    xAxis: [{
      categories: categories,
      reversed: false,
      labels: {
        step: 1
      },
      accessibility: {
        description: "年齡 (男性)"
      }
    }, {
      // mirror axis on right side
      opposite: true,
      reversed: false,
      categories: categories,
      linkedTo: 0,
      labels: {
        step: 1
      },
      accessibility: {
        description: "年齡 (女性)"
      }
    }],
    yAxis: {
      title: {
        text: null
      },
      labels: {
        formatter: function() {
          return Math.abs(this.value);
        }
      },
      accessibility: {
        description: "人口百分比",
        rangeDescription: "全距: 0 to 5%"
      }
    },

    plotOptions: {
      series: {
        stacking: "normal"
      }
    },

    tooltip: {
      formatter: function() {
        return (
          "<b>" +
          this.series.name +
          ", 年齡 " +
          this.point.category +
          "</b><br/>" +
          "人數: " +
          //Highcharts.numberFormat(Math.abs(this.point.y), 1) + "%"
          Highcharts.numberFormat(Math.abs(this.point.y), 0).replace(' ', ',')

        );
      }
    },

    series: [{
      name: "男",
      data: [-0, -0, -0, -1, -2, -5, -3, -1, -2, -0, -0, -0, -0, -0],
      color: "#0DCAF0"
    }, {
      name: "女",
      data: [
        0,
        0,
        0,
        2,
        6,
        4,
        10,
        6,
        1,
        1,
        0,
        0,
        0,
        0
      ],
      color: "#F25E86"
    }]
  });
}

if ($('#gender2').length) {
  Highcharts.chart("gender2", {
    chart: {
      type: "bar"
    },
    title: {
      text: "參訓學員基本背景"
    },
    subtitle: {
      text: ""
    },
    accessibility: {
      point: {
        valueDescriptionFormat: "{index}. 年齡 {xDescription}, {value}%."
      }
    },
    xAxis: [{
      categories: categories,
      reversed: false,
      labels: {
        step: 1
      },
      accessibility: {
        description: "年齡 (男性)"
      }
    }, {
      // mirror axis on right side
      opposite: true,
      reversed: false,
      categories: categories,
      linkedTo: 0,
      labels: {
        step: 1
      },
      accessibility: {
        description: "年齡 (女性)"
      }
    }],
    yAxis: {
      title: {
        text: null
      },
      labels: {
        formatter: function() {
          return Math.abs(this.value);
        }
      },
      accessibility: {
        description: "人口百分比",
        rangeDescription: "全距: 0 to 5%"
      }
    },

    plotOptions: {
      series: {
        stacking: "normal"
      }
    },

    tooltip: {
      formatter: function() {
        return (
          "<b>" +
          this.series.name +
          ", 年齡 " +
          this.point.category +
          "</b><br/>" +
          "人數: " +
          //Highcharts.numberFormat(Math.abs(this.point.y), 1) + "%"
          Highcharts.numberFormat(Math.abs(this.point.y), 0).replace(' ', ',')

        );
      }
    },

    series: [{
      name: "男",
      data: [-0, -0, -0, -2, -3, -0, -0, -0, -0, -0, -0, -0, -0, -0],
      color: "#0DCAF0"
    }, {
      name: "女",
      data: [
        0,
        0,
        0,
        1,
        2,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      color: "#F25E86"
    }]
  });
}

if ($('#times').length) {
  Highcharts.chart('times', {

    chart: {
      type: 'bubble',
      plotBorderWidth: 1,
      zoomType: 'xy'
    },

    title: {
      text: '職類學員參訓次數'
    },
    tooltip: {
      headerFormat: "",
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.series.name}</b><br/>' +
        "參訓次數: <b>{point.x}</b><br/>" +
        "人數: <b>{point.y}</b><br/>"
    },
    xAxis: {
      categories: [
        "",
        "1次",
        "2次",
        "3次",
        "4次",
        "5次",
        "5次以上",
        ""
      ],
      gridLineWidth: 1,
      accessibility: {
        rangeDescription: 'Range: 0 to 6.'
      }
    },

    yAxis: {
      title: {
        text: "人數"
      },
      startOnTick: false,
      endOnTick: false,
      accessibility: {
        rangeDescription: 'Range: 0 to 100.'
      }
    },

    series: [{
      data: [
        [1, 10, 63],
        [2, 12, 70],
        [3, 40, 100],
        [4, 19, 84],
        [5, 4, 20],
        [6, 6, 54],
      ],
      name: "委外職前",
      marker: {
        fillColor: {
          radialGradient: {
            cx: 0.4,
            cy: 0.3,
            r: 0.7
          },
          stops: [
            [0, 'rgba(255,255,255,0.5)'],
            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get('rgba')]
          ]
        }
      }
    }, {
      data: [
        [1, 3, 20],
        [2, 24, 1],
        [3, 4, 55],
        [4, 1, 90],
        [5, 0, 22],
        [6, 1, 96]
      ],
      name: "自辦職前",
      marker: {
        fillColor: {
          radialGradient: {
            cx: 0.4,
            cy: 0.3,
            r: 0.7
          },
          stops: [
            [0, 'rgba(255,255,255,0.5)'],
            [1, Highcharts.color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get('rgba')]
          ]
        }
      }
    }, {
      data: [
        [1, 37, 80],
        [2, 18, 11],
        [3, 7, 4],
        [4, 6, 2],
        [5, 2, 2],
        [6, 2, 0]
      ],
      name: "青年",
      marker: {
        fillColor: {
          radialGradient: {
            cx: 0.4,
            cy: 0.3,
            r: 0.7
          },
          stops: [
            [0, 'rgba(255,255,255,0.5)'],
            [1, Highcharts.color(Highcharts.getOptions().colors[2]).setOpacity(0.5).get('rgba')]
          ]
        }
      }
    }]
  });
}

if ($('#pie2').length) {
  Highcharts.chart("pie2", {
    chart: {
      type: "variablepie"
    },
    title: {
      text: "職類參訓學員-學歷-委外職前-參訓3次"
    },
    tooltip: {
      headerFormat: "",
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "人數: <b>{point.y}</b><br/>"
    },

    series: [{
      minPointSize: 10,
      innerSize: "20%",
      zMin: 0,
      name: "countries",
      data: [{
        name: "國民小學",
        y: 2,
        z: 92.9
      }, {
        name: "國民中學",
        y: 2,
        z: 118.7
      }, {
        name: "高等中學",
        y: 10,
        z: 124.6
      }, {
        name: "學士",
        y: 18,
        z: 137.5
      }, {
        name: "碩士",
        y: 5,
        z: 201.8
      }, {
        name: "博士",
        y: 3,
        z: 214.5
      }]
    }]
  });
}

if ($('#pie3').length) {
  Highcharts.chart("pie3", {
    chart: {
      type: "variablepie"
    },
    title: {
      text: "職類參訓學員-學歷-委外職前-參訓1次"
    },
    tooltip: {
      headerFormat: "",
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "人數: <b>{point.y}</b><br/>"
    },

    series: [{
      minPointSize: 10,
      innerSize: "20%",
      zMin: 0,
      name: "countries",
      data: [{
        name: "國民小學",
        y: 0,
        z: 92.9
      }, {
        name: "國民中學",
        y: 1,
        z: 118.7
      }, {
        name: "高等中學",
        y: 2,
        z: 124.6
      }, {
        name: "學士",
        y: 4,
        z: 137.5
      }, {
        name: "碩士",
        y: 1,
        z: 201.8
      }, {
        name: "博士",
        y: 3,
        z: 214.5
      }]
    }]
  });
}

if ($('#map_container').length) {
  Highcharts.data({
    googleAPIKey: 'AIzaSyDJP6nfQSxT-tRqPR6z_hyqBnn11LDskcU',
    googleSpreadsheetKey: '1Bf49sR3qMM8NCgSomOLYA9WMDbQevBbxYRkxfp75yfQ',
    // console.log();
    // Custom handler for columns
    parsed: function(columns) {
      function pointClick() {
        var row = this.options.row,
          $div = $('<div id="dimap"></div>')
          .dialog({
            modal: true,
            title: this.name,
            width: 'auto',
            height: 'auto',
            // open: function() {
            //   $('.ui-dialog-content').css('overflow', 'auto');
            // }
          });

        window.chart = new Highcharts.Chart({
          chart: {
            renderTo: $div[0],
            type: 'pie',
            width: 200,
            height: 340,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
          },
          title: {
            text: null
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false
              },
              showInLegend: true
            }
          },
          series: [{
            name: 'Votes',
            data: [{
              name: '北投區',
              y: parseInt(columns[3][row], 10)
            }, {
              name: '士林區',
              y: parseInt(columns[4][row], 10)
            }, {
              name: '中山區',
              y: parseInt(columns[5][row], 10)
            }, {
              name: '內湖區',
              y: parseInt(columns[6][row], 10)
            }, {
              name: '大同區',
              y: parseInt(columns[7][row], 10)
            }, {
              name: '萬華區',
              y: parseInt(columns[8][row], 10)
            }, {
              name: '中正區',
              y: parseInt(columns[9][row], 10)
            }, {
              name: '大安區',
              y: parseInt(columns[10][row], 10)
            }, {
              name: '松山區',
              y: parseInt(columns[11][row], 10)
            }, {
              name: '信義區',
              y: parseInt(columns[12][row], 10)
            }, {
              name: '內湖區',
              y: parseInt(columns[13][row], 10)
            }, {
              name: '文山區',
              y: parseInt(columns[14][row], 10)
            }, ],
            dataLabels: {
              format: '<b>{point.name}</b> {point.percentage:.1f}%'
            }
          }],
        });

        $($div).append('<div class="in-bk-mid"><img src="img/Map_of_TaipeiCity.svg" alt="" id="imgs"></div><div class="in-bk-mid" id="dimap"></div>');

      }

      // Make the columns easier to read

      var keys = columns[0],
        names = columns[1],
        percent = columns[2],
        mapData = Highcharts.maps['countries/tw/tw-all'],
        // Build the chart options
        options = {
          chart: {
            type: 'map',
            map: mapData,
            renderTo: 'map_container',
            // borderWidth: 1,
            // height: 100 + '%',
            height: '820',
            backgroundColor: '#F6F9FB'
          },

          title: {
            text: ''
          },
          subtitle: {
            text: ''
          },

          legend: {
            title: {
              text: "課程數量",
              style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || "#1A202C"
              }
            },
            align: "right",
            verticalAlign: "bottom",
            floating: true,
            layout: "vertical",
            valueDecimals: 0,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
              "rgba(255, 255, 255, 1)",
            symbolRadius: 0,
            symbolHeight: 14
          },


          mapNavigation: {
            enabled: true,
            buttonOptions: {
              align: "left",
              verticalAlign: "top",
              color: '#fff',
              theme: {
                fill: '#1F1F39',
                'stroke-width': 0.5,
                stroke: '#fff',
                r: 4,
                states: {
                  hover: {
                    fill: '#9AA0A9',
                  },
                }
              },
              style: {
                color: '#fff',
              }
            },
            buttons: {
              zoomIn: {
                padding: 8,
                style: {
                  "fontSize": "16px",
                },
                text: "＋",
              },
              zoomOut: {
                padding: 8,
                style: {
                  "fontSize": "16px",
                },
                text: "－",
                y: 32
              }
            }
          },
          colorAxis: {
            tickPositions: [0, 1],
            dataClasses: [{
              to: 0,
              color: "#E2F4FE"
            }, {
              from: 1,
              to: 25,
              color: "#C6E9FD"
            }, {
              from: 26,
              to: 50,
              color: "#8DD3FB"
            }, {
              from: 51,
              to: 75,
              color: "#71C9FA"
            }, {
              from: 76,
              to: 100,
              color: "#38B3F8"
            }, {
              from: 101,
              color: "#009EF7"
            }]
          },
          plotOptions: {
            map: {
              cursor: "pointer",
              states: {
                hover: {
                  color: "#4244CB"
                }
              }
            }
          },

          series: [{
            mapData: mapData,
            data: [],
            joinBy: 'postal-code',
            id: ['id'],
            borderColor: "#fff",
            dataLabels: {
              enabled: true,
              allowOverlap: true,
              useHTML: true,
              formatter: function() {
                return '<div class="cluster custom-cluster"><span>' + this.point['value'] + '</span></div>' + this.point.properties['name'];
              },
              style: {
                textTransform: 'uppercase',
                fontSize: "12px",
                color: "#1F1F39"
              }
            },
            point: {
              events: {
                click: pointClick
              }
            },
            cursor: 'pointer'
          }, {
            name: 'Separators',
            type: 'mapline',
            showInLegend: false,
            enableMouseTracking: false,
          }, {
            type: 'mappoint',
            enableMouseTracking: true,
            colorKey: 'clusterPointsAmount',
            name: 'Cities',
            data: []
          }],
          tooltip: {
            enabled: true,
            borderWidth: 1,
            backgroundColor: "rgba(255,255,255,1)",
            borderRadius: 8,
            shadow: true,
            // shape: 'callout',
            shared: 'true',
            padding: 10,
            y: 30,
            outside: true,
            useHTML: true,
            valueSuffix: "堂",
            headerFormat: '<span style="text-align:center;font-size:.75rem;color:#A7AAAE;"> {point.key} </span>\
                                            <br/>\
                                          <span style="text-align:center;font-size:.75rem;color:#1A202C;">課程數量</span>',
            pointFormat: '<span style="text-align:center;font-size:1rem;color:#66C4C5;"> {point.value} </span>',
            style: {
              color: '#fff',
              zindex: '1000',
            }
          },
        };

      //     keys = keys.map(function(key) {
      //         return key.toUpperCase();
      // });
      mapData.features.forEach(function(mapPoint) {
        if (mapPoint.properties['postal-code']) {
          var postalCode = mapPoint.properties['postal-code'],
            i = $.inArray(postalCode, keys);
          options.series[0].data.push(Highcharts.extend({
            value: parseFloat(percent[i]),
            name: names[i],
            'postal-code': postalCode,
            row: i
          }, mapPoint));
        }
      });

      // Initialize the chart
      window.chart = Highcharts.Map(options);

    },

    error: function() {
      $('#map_container').html('<div class="loading">' +
        '<i class="icon-frown icon-large"></i> ' +
        '<p>Error loading data from Google Spreadsheets</p>' +
        '</div>');
    }
  });
}

if ($('#map_container_v1').length) {
  Highcharts.data({
    googleAPIKey: 'AIzaSyDJP6nfQSxT-tRqPR6z_hyqBnn11LDskcU',
    googleSpreadsheetKey: '1Bf49sR3qMM8NCgSomOLYA9WMDbQevBbxYRkxfp75yfQ',
    // console.log();
    // Custom handler for columns
    parsed: function(columns) {
      /**
       * Event handler for clicking points. Use jQuery UI to pop up
       * a pie chart showing the details for each state.
       */
      function pointClick() {
        var row = this.options.row,
          $div = $('<div><div></div></div>')
          .dialog({
            title: this.name,
            width: '20rem',
            height: 'auto',
            open: function() {
              $('.ui-dialog-content').css('overflow', 'auto');
            }
          });

        window.chart = new Highcharts.Chart({
          chart: {
            renderTo: $div[0],
            type: 'pie',
            width: 200,
            height: 340,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
          },
          title: {
            text: null
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false
              },
              showInLegend: true
            }
          },
          series: [{
            name: 'Votes',
            data: [{
              name: '北投區',
              y: parseInt(columns[3][row], 10)
            }, {
              name: '士林區',
              y: parseInt(columns[4][row], 10)
            }, {
              name: '中山區',
              y: parseInt(columns[5][row], 10)
            }, {
              name: '內湖區',
              y: parseInt(columns[6][row], 10)
            }, {
              name: '大同區',
              y: parseInt(columns[7][row], 10)
            }, {
              name: '萬華區',
              y: parseInt(columns[8][row], 10)
            }, {
              name: '中正區',
              y: parseInt(columns[9][row], 10)
            }, {
              name: '大安區',
              y: parseInt(columns[10][row], 10)
            }, {
              name: '松山區',
              y: parseInt(columns[11][row], 10)
            }, {
              name: '信義區',
              y: parseInt(columns[12][row], 10)
            }, {
              name: '內湖區',
              y: parseInt(columns[13][row], 10)
            }, {
              name: '文山區',
              y: parseInt(columns[14][row], 10)
            }, ],
            dataLabels: {
              format: '<b>{point.name}</b> {point.percentage:.1f}%'
            }
          }],
        });

        $('.ui-dialog-content').prepend('<div class="in-bk-mid" style="width: calc(100% - 200px);display: inline-block; vertical-align: top;"><img src="img/Map_of_TaipeiCity.svg" alt="" id="imgs"></div>');
        $('.ui-dialog-content > .highcharts-container').css('width', '200px').wrap("<div class='in-bk-mid' style='display: inline-block; vertical-align: top;width: 260px'></div>");

      }

      // Make the columns easier to read

      var keys = columns[0],
        names = columns[1],
        percent = columns[2],
        mapData = Highcharts.maps['countries/tw/tw-all'],
        // Build the chart options
        options = {
          chart: {
            type: 'map',
            map: mapData,
            renderTo: 'map_container_v1',
            // borderWidth: 1,
            // height: 100 + '%',
            height: '580',
            backgroundColor: '#F2F0EB'
          },

          title: {
            text: ''
          },
          subtitle: {
            text: ''
          },

          legend: {
            title: {
              text: "課程數量",
              style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || "#1A202C"
              }
            },
            align: "right",
            verticalAlign: "bottom",
            floating: true,
            layout: "vertical",
            valueDecimals: 0,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
              "rgba(255, 255, 255, 1)",
            symbolRadius: 0,
            symbolHeight: 14
          },


          mapNavigation: {
            enabled: true,
            buttonOptions: {
              align: "left",
              verticalAlign: "top",
              color: '#fff',
              theme: {
                fill: '#1F1F39',
                'stroke-width': 0.5,
                stroke: '#fff',
                r: 4,
                states: {
                  hover: {
                    fill: '#9AA0A9',
                  },
                }
              },
              style: {
                color: '#fff',
              }
            },
            buttons: {
              zoomIn: {
                padding: 8,
                style: {
                  "fontSize": "16px",
                },
                text: "＋",
              },
              zoomOut: {
                padding: 8,
                style: {
                  "fontSize": "16px",
                },
                text: "－",
                y: 32
              }
            }
          },
          colorAxis: {
            tickPositions: [0],
            dataClasses: [{
              to: 0,
              color: "#E9F5F3"
            }, {
              from: 1,
              to: 25,
              color: "#D4EBE7"
            }, {
              from: 26,
              to: 50,
              color: "#A9D8CF"
            }, {
              from: 51,
              to: 75,
              color: "#93CEC4"
            }, {
              from: 76,
              to: 100,
              color: "#68BBAC"
            }, {
              from: 101,
              color: "#3EA895"
            }]
          },
          plotOptions: {
            map: {
              cursor: "pointer",
              states: {
                hover: {
                  color: "#4244CB"
                }
              }
            }
          },

          series: [{
            mapData: mapData,
            data: [],
            joinBy: 'postal-code',
            borderColor: "#fff",
            dataLabels: {
              enabled: true,
              allowOverlap: true,
              useHTML: true,
              formatter: function() {
                return '<div class="cluster custom-cluster"><span>' + this.point['value'] + '</span></div>' + this.point.properties['name'];
              },
              style: {
                textTransform: 'uppercase',
                fontSize: "12px",
                color: "#1F1F39"
              }
            },
            point: {
              events: {
                click: pointClick
              }
            },
            cursor: 'pointer'
          }, {
            name: 'Separators',
            type: 'mapline',
            showInLegend: false,
            enableMouseTracking: false,
          }, {
            type: 'mappoint',
            enableMouseTracking: true,
            colorKey: 'clusterPointsAmount',
            name: 'Cities',
            data: []
          }],
          tooltip: {
            enabled: true,
            borderWidth: 1,
            backgroundColor: "rgba(255,255,255,1)",
            borderRadius: 8,
            shadow: true,
            // shape: 'callout',
            shared: 'true',
            padding: 10,
            y: 30,
            outside: true,
            useHTML: true,
            valueSuffix: "堂",
            headerFormat: '<span style="text-align:center;font-size:.75rem;color:#A7AAAE;"> {point.key} </span>\
                                            <br/>\
                                          <span style="text-align:center;font-size:.75rem;color:#1A202C;">課程數量</span>',
            pointFormat: '<span style="text-align:center;font-size:1rem;color:#66C4C5;"> {point.value} </span>',
            style: {
              color: '#fff',
              zindex: '1000',
            }
          },
        };

      //     keys = keys.map(function(key) {
      //         return key.toUpperCase();
      // });
      mapData.features.forEach(function(mapPoint) {
        if (mapPoint.properties['postal-code']) {
          var postalCode = mapPoint.properties['postal-code'],
            i = $.inArray(postalCode, keys);
          options.series[0].data.push(Highcharts.extend({
            value: parseFloat(percent[i]),
            name: names[i],
            'postal-code': postalCode,
            row: i
          }, mapPoint));
        }
      });

      // Initialize the chart
      window.chart = Highcharts.Map(options);

    },

    error: function() {
      $('#map_container').html('<div class="loading">' +
        '<i class="icon-frown icon-large"></i> ' +
        '<p>Error loading data from Google Spreadsheets</p>' +
        '</div>');
    }
  });
}

if ($('#map_container_v2').length) {
  Highcharts.data({
    googleAPIKey: 'AIzaSyDJP6nfQSxT-tRqPR6z_hyqBnn11LDskcU',
    googleSpreadsheetKey: '1YMIyUd0KEhwR758slr_qFmcAzThqaS5EI25iKQ0T0Nw', //googlesheet
    // console.log();
    // Custom handler for columns
    parsed: function(columns) {
      /**
       * Event handler for clicking points. Use jQuery UI to pop up
       * a pie chart showing the details for each state.
       */
      function pointClick() {

        var row = this.options.row,
          $div = $('<div><div></div></div>');
        // .dialog({
        //   title: this.name,
        //   width: '20rem',
        //   height: 'auto',
        //   open: function() {
        //     $('.ui-dialog-content').css('overflow', 'auto');
        //   }
        // });
        $.TuCore.components.modalMarkup.init('#modal-1', {
          body: $div
        });
        window.chart = new Highcharts.Chart({
          chart: {
            renderTo: $div[0],
            type: 'pie',
            width: 200,
            height: 340,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
          },
          title: {
            text: null
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false
              },
              showInLegend: true
            }
          },
          series: [{
            name: 'Votes',
            data: [{
              name: '北投區',
              y: parseInt(columns[3][row], 2)
            }, {
              name: '士林區',
              y: parseInt(columns[4][row], 2)
            }, {
              name: '中山區',
              y: parseInt(columns[5][row], 2)
            }, {
              name: '內湖區',
              y: parseInt(columns[6][row], 2)
            }, {
              name: '大同區',
              y: parseInt(columns[7][row], 2)
            }, {
              name: '萬華區',
              y: parseInt(columns[8][row], 2)
            }, {
              name: '中正區',
              y: parseInt(columns[9][row], 2)
            }, {
              name: '大安區',
              y: parseInt(columns[10][row], 2)
            }, {
              name: '松山區',
              y: parseInt(columns[11][row], 2)
            }, {
              name: '信義區',
              y: parseInt(columns[12][row], 2)
            }, {
              name: '內湖區',
              y: parseInt(columns[13][row], 2)
            }, {
              name: '文山區',
              y: parseInt(columns[14][row], 2)
            }, ],
            dataLabels: {
              format: '<b>{point.name}</b> {point.percentage:.1f}%'
            }
          }],
        });

        $('.modal-body').prepend('<div class="in-bk-mid" style="width: calc(100% - 200px);display: inline-block; vertical-align: top;"><img src="img/Map_of_TaipeiCity.svg" alt="" id="imgs"></div>');
        $('.modal-body > .highcharts-container').css('width', '200px').wrap("<div class='in-bk-mid' style='display: inline-block; vertical-align: top;width: 260px'></div>");

      }

      // Make the columns easier to read

      var keys = columns[0],
        names = columns[1],
        percent = columns[2],
        mapData = Highcharts.maps['countries/tw/tw-all'],
        // Build the chart options
        options = {
          chart: {
            type: 'map',
            map: mapData,
            renderTo: 'map_container_v2',
            // borderWidth: 1,
            // height: 100 + '%',
            height: '760',
            backgroundColor: '#F6F9FB'
          },

          title: {
            text: ''
          },
          subtitle: {
            text: ''
          },

          legend: {
            title: {
              text: "課程數量",
              style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || "#1A202C"
              }
            },
            align: "right",
            verticalAlign: "bottom",
            floating: true,
            layout: "vertical",
            valueDecimals: 0,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
              "rgba(255, 255, 255, 1)",
            symbolRadius: 0,
            symbolHeight: 14
          },


          mapNavigation: {
            enabled: true,
            buttonOptions: {
              align: "left",
              verticalAlign: "top",
              color: '#fff',
              theme: {
                fill: '#1F1F39',
                'stroke-width': 0.5,
                stroke: '#fff',
                r: 4,
                states: {
                  hover: {
                    fill: '#9AA0A9',
                  },
                }
              },
              style: {
                color: '#fff',
              }
            },
            buttons: {
              zoomIn: {
                padding: 8,
                style: {
                  "fontSize": "16px",
                },
                text: "＋",
              },
              zoomOut: {
                padding: 8,
                style: {
                  "fontSize": "16px",
                },
                text: "－",
                y: 32
              }
            }
          },
          colorAxis: {
            tickPositions: [0, 1],
            dataClasses: [{
              to: 0,
              color: "#E2F4FE"
            }, {
              from: 1,
              to: 25,
              color: "#C6E9FD"
            }, {
              from: 26,
              to: 50,
              color: "#8DD3FB"
            }, {
              from: 51,
              to: 75,
              color: "#71C9FA"
            }, {
              from: 76,
              to: 100,
              color: "#38B3F8"
            }, {
              from: 101,
              color: "#009EF7"
            }]
          },
          plotOptions: {
            map: {
              cursor: "pointer",
              states: {
                hover: {
                  color: "#4244CB"
                }
              }
            }
          },

          series: [{
            mapData: mapData,
            data: [],
            joinBy: 'postal-code',
            borderColor: "#fff",
            dataLabels: {
              enabled: true,
              allowOverlap: true,
              useHTML: true,
              formatter: function() {
                return '<div class="cluster custom-cluster"><span>' + this.point['value'] + '</span></div>' + this.point.properties['name'];
              },
              style: {
                textTransform: 'uppercase',
                fontSize: "12px",
                color: "#1F1F39"
              }
            },
            point: {
              events: {
                click: pointClick
              }
            },
            cursor: 'pointer'
          }, {
            name: 'Separators',
            type: 'mapline',
            showInLegend: false,
            enableMouseTracking: false,
          }, {
            type: 'mappoint',
            enableMouseTracking: true,
            colorKey: 'clusterPointsAmount',
            name: 'Cities',
            data: []
          }],
          tooltip: {
            enabled: true,
            borderWidth: 1,
            backgroundColor: "rgba(255,255,255,1)",
            borderRadius: 8,
            shadow: true,
            // shape: 'callout',
            shared: 'true',
            padding: 10,
            y: 30,
            outside: true,
            useHTML: true,
            valueSuffix: "堂",
            headerFormat: '<span style="text-align:center;font-size:.75rem;color:#A7AAAE;"> {point.key} </span>\
                                            <br/>\
                                          <span style="text-align:center;font-size:.75rem;color:#1A202C;">課程數量</span>',
            pointFormat: '<span style="text-align:center;font-size:1rem;color:#66C4C5;"> {point.value} </span>',
            style: {
              color: '#fff',
              zindex: '1000',
            }
          },
        };

      //     keys = keys.map(function(key) {
      //         return key.toUpperCase();
      // });
      mapData.features.forEach(function(mapPoint) {
        if (mapPoint.properties['postal-code']) {
          var postalCode = mapPoint.properties['postal-code'],
            i = $.inArray(postalCode, keys);
          options.series[0].data.push(Highcharts.extend({
            value: parseFloat(percent[i]),
            name: names[i],
            'postal-code': postalCode,
            row: i
          }, mapPoint));
        }
      });

      // Initialize the chart
      window.chart = Highcharts.Map(options);

    },

    error: function() {
      $('#map_container').html('<div class="loading">' +
        '<i class="icon-frown icon-large"></i> ' +
        '<p>Error loading data from Google Spreadsheets</p>' +
        '</div>');
    }
  });
}




window.addEventListener("load", function() {

  // var eventsHandler = {
  //   haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'],
  //   init: function(options) {
  //     var instance = options.instance,
  //       initialScale = 1,
  //       pannedX = 0,
  //       pannedY = 0

  //     this.hammer = Hammer(options.svgElement, {
  //       inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
  //     })
  //     // 多點觸控時兩手指距離越來越近
  //     this.hammer.get('pinch').set({
  //       enable: true
  //     })
  //     this.hammer.on('doubletap', function(ev) {
  //       instance.zoomIn()
  //     })
  //     // 拖動開始 / 過程
  //     this.hammer.on('panstart panmove', function(ev) {
  //       if (ev.type === 'panstart') {
  //         pannedX = 0
  //         pannedY = 0
  //       }
  //       instance.panBy({
  //         x: ev.deltaX - pannedX,
  //         y: ev.deltaY - pannedY
  //       })
  //       pannedX = ev.deltaX
  //       pannedY = ev.deltaY
  //     })
  //     // 多點觸控開始 / 過程
  //     this.hammer.on('pinchstart pinchmove', function(ev) {
  //       if (ev.type === 'pinchstart') {
  //         initialScale = instance.getZoom()
  //         instance.zoomAtPoint(initialScale * ev.scale, {
  //           x: ev.center.x,
  //           y: ev.center.y
  //         })
  //       }

  //       instance.zoomAtPoint(initialScale * ev.scale, {
  //         x: ev.center.x,
  //         y: ev.center.y
  //       })
  //     })
  //     options.svgElement.addEventListener('touchmove', function(e) {
  //       e.preventDefault();
  //     });
  //   },
  //   destroy: function() {
  //     this.hammer.destroy()
  //   }
  // };
  // var svg_options = {
  //   zoomEnabled: true,
  //   controlIconsEnabled: true,
  //   fit: true,
  //   center: true,
  //   minZoom: 0.6,
  //   maxZoom: 10,
  //   zoomScaleSensitivity: 0.1,
  //   center: true,
  //   customEventsHandler: eventsHandler
  // }
  // if ($('#taiwan_cost').length)
  //   var costZoom = window.zoomTaiwan_cost = svgPanZoom('#taiwan_cost', svg_options);
  // if ($('#taiwan_course').length)
  //   var courseZoom = window.zoomTaiwan_course = svgPanZoom('#taiwan_course', svg_options);
  // if ($('#taiwan_course1').length)
  //   var courseZoom1 = window.zoomTaiwan_course = svgPanZoom('#taiwan_course1', svg_options);


  // $.TuCore.helpers.resize($(window), function() {
  //   if ($('#taiwan_course').length) {
  //     courseZoom.resize();
  //     courseZoom.fit();
  //     courseZoom.center();
  //   }
  //   if ($('#taiwan_course1').length) {
  //     courseZoom1.resize();
  //     courseZoom1.fit();
  //     courseZoom1.center();
  //   }

  //   if ($('#taiwan_cost').length) {
  //     costZoom.resize();
  //     costZoom.fit();
  //     costZoom.center();
  //   }
  // });
});


if ($('#taiwan_course').length) {

  $('#NewTaipei').tooltip({
    title: '<h6>新北市</h6>' +
      '<p>課程數量：146 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Taipei').tooltip({
    title: '<h6>台北市</h6>' +
      '<p>課程數量：117 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#NewTaipei').tooltip({
    title: '<h6>新北市</h6>' +
      '<p>課程數量：91 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Keelung').tooltip({
    title: '<h6>基隆市</h6>' +
      '<p>課程數量：96 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Yilan').tooltip({
    title: '<h6>宜蘭縣</h6>' +
      '<p>課程數量：18 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Hualien').tooltip({
    title: '<h6>花蓮縣</h6>' +
      '<p>課程數量：77 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Taoyuan').tooltip({
    title: '<h6>桃園市</h6>' +
      '<p>課程數量：18 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#HsinchuCounty').tooltip({
    title: '<h6>新竹縣</h6>' +
      '<p>課程數量：52 筆</p>',
    html: true,
    placement: 'top',
    container: 'body'
  });
  $('#HsinchuCity').tooltip({
    title: '<h6>新竹市</h6>' +
      '<p>課程數量：40 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Miaoli').tooltip({
    title: '<h6>苗栗縣</h6>' +
      '<p>課程數量：91 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Taichung').tooltip({
    title: '<h6>台中市</h6>' +
      '<p>課程數量：58 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Nantou').tooltip({
    title: '<h6>南投縣</h6>' +
      '<p>課程數量：58 筆</p>',
    html: true,
    placement: 'top',
    container: 'body'
  });
  $('#Changhua').tooltip({
    title: '<h6>彰化縣</h6>' +
      '<p>課程數量：24 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Yunlin').tooltip({
    title: '<h6>雲林縣</h6>' +
      '<p>課程數量：66 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#ChiayiCounty').tooltip({
    title: '<h6>嘉義縣</h6>' +
      '<p>課程數量：39 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#ChiayiCity').tooltip({
    title: '<h6>嘉義市</h6>' +
      '<p>課程數量：96 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Tainan').tooltip({
    title: '<h6>台南市</h6>' +
      '<p>課程數量：6 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Kaohsiung').tooltip({
    title: '<h6>高雄市</h6>' +
      '<p>課程數量：49 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Pingtung').tooltip({
    title: '<h6>屏東縣</h6>' +
      '<p>課程數量：72 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Taitung').tooltip({
    title: '<h6>台東縣</h6>' +
      '<p>課程數量：28 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
}
if ($('#taiwan_course1').length) {

  $('#NewTaipei').tooltip({
    title: '<h6>新北市</h6>' +
      '<p>課程數量：146 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Taipei').tooltip({
    title: '<h6>台北市</h6>' +
      '<p>課程數量：117 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#NewTaipei').tooltip({
    title: '<h6>新北市</h6>' +
      '<p>課程數量：91 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Keelung').tooltip({
    title: '<h6>基隆市</h6>' +
      '<p>課程數量：96 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Yilan').tooltip({
    title: '<h6>宜蘭縣</h6>' +
      '<p>課程數量：18 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Hualien').tooltip({
    title: '<h6>花蓮縣</h6>' +
      '<p>課程數量：77 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Taoyuan').tooltip({
    title: '<h6>桃園市</h6>' +
      '<p>課程數量：18 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#HsinchuCounty').tooltip({
    title: '<h6>新竹縣</h6>' +
      '<p>課程數量：52 筆</p>',
    html: true,
    placement: 'top',
    container: 'body'
  });
  $('#HsinchuCity').tooltip({
    title: '<h6>新竹市</h6>' +
      '<p>課程數量：40 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Miaoli').tooltip({
    title: '<h6>苗栗縣</h6>' +
      '<p>課程數量：91 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Taichung').tooltip({
    title: '<h6>台中市</h6>' +
      '<p>課程數量：58 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Nantou').tooltip({
    title: '<h6>南投縣</h6>' +
      '<p>課程數量：58 筆</p>',
    html: true,
    placement: 'top',
    container: 'body'
  });
  $('#Changhua').tooltip({
    title: '<h6>彰化縣</h6>' +
      '<p>課程數量：24 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Yunlin').tooltip({
    title: '<h6>雲林縣</h6>' +
      '<p>課程數量：66 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#ChiayiCounty').tooltip({
    title: '<h6>嘉義縣</h6>' +
      '<p>課程數量：39 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#ChiayiCity').tooltip({
    title: '<h6>嘉義市</h6>' +
      '<p>課程數量：96 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Tainan').tooltip({
    title: '<h6>台南市</h6>' +
      '<p>課程數量：6 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Kaohsiung').tooltip({
    title: '<h6>高雄市</h6>' +
      '<p>課程數量：49 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Pingtung').tooltip({
    title: '<h6>屏東縣</h6>' +
      '<p>課程數量：72 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Taitung').tooltip({
    title: '<h6>台東縣</h6>' +
      '<p>課程數量：28 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
}