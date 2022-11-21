(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports', 'echarts'], factory);
  } else if (
    typeof exports === 'object' &&
    typeof exports.nodeName !== 'string'
  ) {
    // CommonJS
    factory(exports, require('echarts/lib/echarts'));
  } else {
    // Browser globals
    factory({}, root.echarts);
  }
})(this, function(exports, echarts) {
  var log = function(msg) {
    if (typeof console !== 'undefined') {
      console && console.error && console.error(msg);
    }
  };
  if (!echarts) {
    log('ECharts is not Loaded');
    return;
  }

  var colorPalette = [
    "#80c4dc",
    "#3b3dbf",
    "#ff9e9e",
    "#14927a",
    "#FEE482",
    "#ACB0B1",
    "#E0BF62",
    "#7C4C5A",
    "#A2CEAA",
    "#C49C94",
    "#BAC5DD",
    "#B8DFEC",
    "#F9C5C2",   
    "#98DF8A",
    "#fd79a8",
    "#004EFF",
    "#FEE482",
    "#16DBCC",
    "#B0A7A4",
    '#f2385a',   
    "#4F51C6",
    "#C3C55D", 
    "#66C4C5",
    "#59A14F",
    '#f5a503',
    "#00ADEF",
    "#2E3192",
    "#76DEBC",
    "#F5DF4D",
    "#939597",
    "#F8B252",
    "#BD2444",
    "#CCB97E",
    "#4791FF",
    "#A4C23E",
    "#638267",
    "#14927a",
    "#EC725A",
    "#edc373",
    '#4ad9d9', 
    '#f7879c', 
    "#2D2C4B",
    '#c1d7a8',
    '#4dffd2',
    '#fccfd7',
    '#d5f6f6',
  ];

  var theme = {
    "seriesCnt": "6",
    // "backgroundColor": "#f9f9fb",
    "backgroundColor": "rgba(255,255,255,0.0)",
    "subtitleColor": "#5a6473",
    "textColorShow": false,
    "textColor": "#5A6473",
    "markTextColor": "#ffffff",
    title: {
      left: "center",
      top: '0',
      textStyle: {
        fontSize: 20,
        fontWeight: 'bolder',
        color: '#1f1f39',
      },
    },
    grid: {
      containLabel: true,
    },
    color: colorPalette,
    "borderColor": 'rgba(0,0,0,0.12)',
    "borderWidth": "2",
    "visualMapColor": [
      "#2a99c9",
      "#afe8ff"
    ],
    tooltip: {

      backgroundColor: 'rgba(0,0,0,0.66)',
      textStyle: {
        color: "#ffffff",
      },
      axisPointer: {
        // Axis indicator, coordinate trigger effective
        type: 'line', // The default is a straight line： 'line' | 'shadow'
        lineStyle: {
          // Straight line indicator style settings
          color: '#00aecd',
          type: 'dashed'
        },
        crossStyle: {
          color: '#00aecd'
        },
        shadowStyle: {
          // Shadow indicator style settings
          color: 'rgba(200,200,200,0.3)'
        }
      }
    },

    "legendTextColor": "#8d949e",
    "kColor": "#fc86b0",
    "kColor0": "transparent",
    "kBorderColor": "#fc86b0",
    "kBorderColor0": "#009ef7",
    "kBorderWidth": "2",
    "lineWidth": "2",
    "symbolSize": "8",
    "symbol": "circle",
    "symbolBorderWidth": "2",
    "lineSmooth": true,
    "graphLineWidth": "1",
    "graphLineColor": "#E8E8F1",
    "mapLabelColor": "#ffffff",
    "mapLabelColorE": "#3fb1e3",
    "mapBorderColor": "#9AA0A9",
    "mapBorderColorE": "#3fb1e3",
    "mapBorderWidth": 0.5,
    "mapBorderWidthE": 1,
    "mapAreaColor": "#E4E4EB",
    "mapAreaColorE": "rgba(63,177,227,0.25)",
    "axes": [{
      "type": "all",
      "name": "通用坐标轴",
      "axisLineShow": true,
      "axisLineColor": "#bbbfc5",
      "axisTickShow": true,
      "axisTickColor": "#bbbfc5",
      "axisLabelShow": true,
      "axisLabelColor": "#5a6473",
      "splitLineShow": true,
      "splitLineColor": [
        "#e8e9eb"
      ],
      "splitAreaShow": false,
      "splitAreaColor": [
        "rgba(200,200,200,0.02)",
        "rgba(200,200,200,0.02)"
      ]
    }, {
      "type": "category",
      "name": "类目坐标轴",
      "axisLineShow": true,
      "axisLineColor": "#5A6473",
      "axisTickShow": true,
      "axisTickColor": "#5A6473",
      "axisLabelShow": true,
      "axisLabelColor": "#5A6473",
      "splitLineShow": false,
      "splitLineColor": [
        "#ccc"
      ],
      "splitAreaShow": false,
      "splitAreaColor": [
        "rgba(250,250,250,0.3)",
        "rgba(200,200,200,0.3)"
      ]
    }, {
      "type": "value",
      "name": "数值坐标轴",
      "axisLineShow": true,
      "axisLineColor": "#5A6473",
      "axisTickShow": true,
      "axisTickColor": "#5A6473",
      "axisLabelShow": true,
      "axisLabelColor": "#5A6473",
      "splitLineShow": true,
      "splitLineColor": [
        "#ccc"
      ],
      "splitAreaShow": false,
      "splitAreaColor": [
        "rgba(250,250,250,0.3)",
        "rgba(200,200,200,0.3)"
      ]
    }, {
      "type": "log",
      "name": "对数坐标轴",
      "axisLineShow": true,
      "axisLineColor": "#5A6473",
      "axisTickShow": true,
      "axisTickColor": "#5A6473",
      "axisLabelShow": true,
      "axisLabelColor": "#5A6473",
      "splitLineShow": true,
      "splitLineColor": [
        "#ccc"
      ],
      "splitAreaShow": false,
      "splitAreaColor": [
        "rgba(250,250,250,0.3)",
        "rgba(200,200,200,0.3)"
      ]
    }, {
      "type": "time",
      "name": "时间坐标轴",
      "axisLineShow": true,
      "axisLineColor": "#5A6473",
      "axisTickShow": true,
      "axisTickColor": "#5A6473",
      "axisLabelShow": true,
      "axisLabelColor": "#5A6473",
      "splitLineShow": true,
      "splitLineColor": [
        "#ccc"
      ],
      "splitAreaShow": false,
      "splitAreaColor": [
        "rgba(250,250,250,0.3)",
        "rgba(200,200,200,0.3)"
      ]
    }],
    "axisSeperateSetting": false,
    "toolboxColor": "#8d949e",
    "toolboxEmphasisColor": "#5A6473f51",
    "tooltipAxisColor": "#d1d4d8",
    "tooltipAxisWidth": "1",
    "timelineLineColor": "#626c91",
    "timelineLineWidth": 1,
    "timelineItemColor": "#626c91",
    "timelineItemColorE": "#626c91",
    "timelineCheckColor": "#3fb1e3",
    "timelineCheckBorderColor": "#3fb1e3",
    "timelineItemBorderWidth": 1,
    "timelineControlColor": "#626c91",
    "timelineControlBorderColor": "#626c91",
    "timelineControlBorderWidth": 0.5,
    "timelineLabelColor": "#626c91",
    "datazoomBackgroundColor": "rgba(255,255,255,0)",
    "datazoomDataColor": "rgba(222,222,222,1)",
    "datazoomFillColor": "rgba(114,230,212,0.24)",
    "datazoomHandleColor": "#E8E8F1",
    "datazoomHandleWidth": "100",
    "datazoomLabelColor": "#8d949e"
  };

  echarts.registerTheme('echart_theme', theme);
});