  function taiwan_map_members() {
    let width = 1200;
    let height = 675;

    const projection = d3.geoMercator()
      .center([121.5, 24.25])
      .scale(10500);

    const svg = d3.select('body')
      .select('.full-map-wrap')
      .append('svg')
      .attr('class', 'tw-map')
      .attr('id', 'taiwan_map_members')
      .attr('width', width)
      .attr('height', height);

    const tooltip = d3.select(".full-map-wrap")
    .append("div")
    .attr('class', 'd3-tooltips')
    .attr('id', 'd3_tooltip_v1')

    //  d3.select("#taiwan_map_members").on("mouseleave", function(e) {
    //   d3.select("#d3_tooltip_v1").remove();
    // })
    d3.select("#taiwan_map_members").on("mousemove", function(event, d) {
      let pt = d3.pointer(event, this);
      var ofX = event.offsetX;
      var ofY = event.offsetY ;
      tooltip.style('transform', "translate("+ofX+"px,"+ofY+"px)")
      console.log(tooltip);
    });

    const path = d3.geoPath()
      .projection(projection);

    const g = svg.append('g')
      .attr('id', 'taiwan_members')
      .attr('class', 'd3-map-container')
    d3.json('map_d3/map_test/Taiwan_N/COUNTY_MOI_1090820_topo.json')

      .then(function(topology) {
        const geojson = topojson
          .feature(topology, topology.objects.COUNTY_MOI_1090820)
          .features;
        console.log(geojson);

        var dataObject = {
          '臺北市': 88,
          '新北市': 44,
          '臺南市': 33,
          '高雄市': 22,
          '臺中市': 66
        };
        for (item = geojson.length - 1; item >= 0; item--) {
          var site = geojson[item].properties.COUNTYNAME;
          var parameter = dataObject[site];
          if (typeof parameter == 'undefined') {
            geojson[item].properties.parameter = Math.floor((Math.random() * 100) + 1);
            var parameter = geojson[item].properties.parameter;
            console.log(parameter);
          } else {
            geojson[item].properties.parameter = parameter;
            console.log(parameter);
          }
        }

        let maxNum = d3.max(geojson, (d) => (d.properties.parameter));
        let minNum = d3.min(geojson, (d) => (d.properties.parameter));
        let redGreen = d3.scaleSequential([tu_primary_500, tu_primary_100]).domain([maxNum, minNum]);

        g.selectAll('path')
          .data(
            topojson
            .feature(topology, topology.objects.COUNTY_MOI_1090820)
            .features
          )
          .join('g')
          .attr('data-city', function(d, i) {
            return d.properties.COUNTYENG
          })
          .attr('id', function(d, i) {
            return d.properties.COUNTYID
          })
          .attr('class', 'd3-map-country')
          .append('path')
          .attr('class', 'd3-map-path')
          .attr('data-parameter', function(d, i) {
            return d.properties.COUNTYENG
          })
          .attr('d', path)
          .style("fill", d => (redGreen(d.properties.parameter)))

          .on("mouseover", function(e) {
            d3.select(this).style("fill", tu_secondary_500);
            d3.select(this).select(function(d) {
              tooltip.html(d.properties.COUNTYENG);
              tooltip.style("opacity", "1");
            });
          })
          .on("mouseleave", function(e) {
            d3.select(this).style("fill", d => (redGreen(d.properties.parameter)));
            tooltip.style("opacity", "0");
          });


        g.selectAll('text')
          .data(
            topojson
            .feature(topology, topology.objects.COUNTY_MOI_1090820)
            .features
          )
          .join('g')
          .append('text')
          .attr('x', (d, i) => {
            return path.centroid(d)[0]
          })
          .attr('y', (d, i) => {
            return path.centroid(d)[1]
          })
          .attr('dx', '')
          .attr('dy', '0.5rem')
          .attr('class', 'd3-map-txt')
          .text((d, i) => {
            return d.properties.COUNTYNAME
          });

        g.selectAll('circle')
          .data(
            topojson
            .feature(topology, topology.objects.COUNTY_MOI_1090820)
            .features
          )
          .join('g')
          .attr('class', 'd3-map-points')
          .attr('id', function(d, i) {
            return d.properties.COUNTYID + '-points'
          })
          .append('circle')
          .attr('cx', function(d) {
            return path.centroid(d)[0]
          })
          .attr('cy', function(d) {
            return path.centroid(d)[1]
          })
          .attr('r', 16)

        g.selectAll('.d3-map-points')
          .append('text')
          .attr('x', (d, i) => {
            return path.centroid(d)[0]
          })
          .attr('y', (d, i) => {
            return path.centroid(d)[1]
          })
          .attr('dy', '4')
          .text((d, i) => {
            // return d.properties.COUNTYID
            return d.properties.parameter
          });

        const zoom = d3.zoom()
          .scaleExtent([0.5, 8])
          .extent([
            [0, 0],
            [0.5, 8]
          ])
          .on('zoom', function(event) {
            g.selectAll('path')
              .attr('transform', event.transform);
            g.selectAll("circle")
              .attr('transform', event.transform);
            g.selectAll('text')
              .attr('transform', event.transform);
          });

        svg.call(zoom)

        d3.select("#zoomIn").on("click", () => {
          svg.transition().call(zoom.scaleBy, 1.1);
        });
        d3.select("#zoomOut").on("click", () => {
          svg.transition().call(zoom.scaleBy, 0.9);
        });
        d3.select("#resetZoom").on("click", () => {
          svg.transition().call(zoom.scaleTo, 1);
        });
      });

    function modal() {
      var ntpTable = '';

      $.TuCore.components.modal.init('#F', {
        title: '新北市課程區域分佈',
        drag: true,
        size: 'modal-xl',
        body: '<div class="modal-map-cnt">' +
          '  <h6 class="map-title">新北市 <big>146</big> 筆</h6>' +
          '  <div class="modal-map-lt">' +
          '    <div class="mask mask_graph"></div>' +
          '      <img id="Map_of_NewTaipei" src="img/Map_of_NewTaipei.svg" alt="新北市">' +
          '    </div>' +
          '    <div class="modal-map-rt js-tab-placeholder">' +
          '      <ul class="card-list"></ul>' + ntpTable + '' +
          '    </div>' +
          '  </div>',
        created: function(modal) {
          modal.on('shown.bs.modal', function() {
            function modalGetData(selector, sheetname) {
              var sheetid = '1YMIyUd0KEhwR758slr_qFmcAzThqaS5EI25iKQ0T0Nw',
                sheetno = 2,
                sheetname = 'new_taipei_city',
                googleAPIKey = 'AIzaSyDJP6nfQSxT-tRqPR6z_hyqBnn11LDskcU',
                dataurl = 'https://sheets.googleapis.com/v4/spreadsheets/' + sheetid + '/values/' + sheetname + '?alt=json&key=' + googleAPIKey + '';

              fetch(dataurl)
                .then(res => res.json())
                .then(res => {
                  var data = res.values;
                  data.shift();
                  Array.prototype.forEach.call(data, d => {
                    var item = `
              <li class="card-list-item">
                  <span class="card-list-item-marker"></span>
                  <h6 class="card-list-item-name">${d[3]}</h6>
                  <p class="card-list-item-val">
                  <strong class="text-secondary">${d[7]}</strong> 門 課程</p>
              </li>`;

                    document.querySelector('.card-list').insertAdjacentHTML('beforeend', item);
                  })
                })
            };
            if (!$('.card-list-item').length)
              setTimeout(function() {
                modal.find('.modal-map-rt').removeClass('js-tab-placeholder');
                modalGetData();
              }, 1500);
          });
        },
      });
    };

    setTimeout(function() {
      modal();
    }, 3000);
  }

  function tainan_map() {
    let width = 1200;
    let height = 675;

    const projection = d3.geoMercator()
      .center([120.64, 23.18])
      .scale(40000);
    var cnt = d3.select('body')
      .select('.map-wrap');
    const svg = d3.select('body')
      .select('.map-wrap')
      .append('svg')
      .attr('class', 'tw-map')
      .attr('id', 'taiwan_map_members')
      .attr('width', width)
      .attr('height', height);

    const path = d3.geoPath()
      .projection(projection);

    const g = svg.append("g");
    d3.json("map_d3/map_test/Taiwan_N/TOWN_MOI_1100415/TOWN_MOI_1100415_topo.json")
      .then(function(topology) {
        const geojson = topojson
          .feature(topology, topology.objects.TOWN_MOI_1100415)
          .features;
        const tainanGeojson = [];
        geojson.forEach(function(el) {
          if (el.properties.COUNTYNAME == "臺南市") {
            tainanGeojson.push(el);
          }
        })
        d3.csv("map_d3/map_test/_tainan/D_lvr_land_A.csv")
          .then(function(csvData) {
            console.log(csvData);
            const districtMap = d3.group(csvData, d => d["鄉鎮市區"]);
            console.log(districtMap);

            tainanGeojson.forEach(function(el) {
              for (let [key, value] of districtMap) {
                if (key === el.properties.TOWNNAME) {
                  el.properties.HOUSEPRICE = d3.mean(value, d => d["單價元平方公尺"]);
                }
              }
            });

            const tainanGeojsonSort = d3.sort(tainanGeojson, d => (d.properties.HOUSEPRICE));
            console.log(tainanGeojsonSort);
            let maxNum = d3.max(tainanGeojson, (d) => (d.properties.HOUSEPRICE));
            let minNum = d3.min(tainanGeojson, (d) => (d.properties.HOUSEPRICE));
            const redGreen = d3.scaleSequential(d3.interpolateRdYlGn).domain([maxNum, minNum]);

            g.selectAll("path")
              .data(tainanGeojsonSort)
              .join("path")
              .style('fill', "white")
              .style("stroke", "black")
              .style("stroke-width", ".24")
              .style("stroke-opacity", ".66")
              .attr("d", path)
              .on("mouseenter", function(e) {
                let getTheDtName = d3.select(this).data()[0].properties.TOWNNAME;
                let getTheDtPrice = parseInt(d3.select(this).data()[0].properties.HOUSEPRICE);
                var ofX = e.offsetX;
                var ofY = e.offsetY ;
                cnt.append("div")
                  // .style("border", function(d) {
                  //   console.log(e)
                  // })
                  .style('transform', "translate("+ofX+"px,"+ofY+"px)")
                  .attr('class', 'd3-tooltips')
                  .attr("id", "d3_tooltip").html(
                    '<ul class="d3-tooltips-ul">' +
                        '<li class="d3-tooltips-item item-title">'+getTheDtName+'</li>'+
                        '<li class="d3-tooltips-item">'+getTheDtPrice +' 元</li>'+
                        '<li class="d3-tooltips-item"> Avg:NT$/m² </li>'+
                    '</ul>'
                  )
              })
              .on("mouseleave", function(e) {
                cnt.select("#d3_tooltip").remove();
              })

              .transition().delay((d, i) => (i * 100))
              .style("fill", d => (redGreen(d.properties.HOUSEPRICE)))


            const zoom = d3.zoom()
              .scaleExtent([0.5, 8])
              .extent([
                [0, 0],
                [0.5, 8]
              ])
              .on('zoom', function(event) {
                g.selectAll('path')
                  .attr('transform', event.transform);
                g.selectAll("circle")
                  .attr('transform', event.transform);
                g.selectAll('text')
                  .attr('transform', event.transform);
              });
            svg.call(zoom)

            d3.select("#zoomIn").on("click", () => {
              svg.transition().call(zoom.scaleBy, 1.1);
            });
            d3.select("#zoomOut").on("click", () => {
              svg.transition().call(zoom.scaleBy, 0.9);
            });
            d3.select("#resetZoom").on("click", () => {
              svg.transition().call(zoom.scaleTo, 1);
            });
          });
      })
  }