// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].style.fontWeight = "600";
        }       
     }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container', {
        chart: {
            type: 'line',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1-p2jXiiozwOOlTTzTCFBQSu6L7g9bOqWJuvTCrLKG-o'
        },
        plotOptions: {
            series: {
                lineWidth: 1,
                // clip: false,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    fillColor: '#ffffff',
                    states: {
                        hover: {
                            fillColor: '#ffffff'
                        }
                    }
                }
            }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                },
                format: '{value:%b. %e}'
            },
            tickLength: 5,
            tickInterval: 7 * 24 * 3600 * 1000
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow',
                format: '{value:.2f}'
            },
            min: 2.55,
            max: 2.65,
            tickAmount: 6
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
        },
        annotations: [{
            labels: [{
                point: {
                    x: 1567900800000, // timestamp
                    y: 2.5623, // value
                    xAxis: 0, // yAxis INDEX
                    yAxis: 0 // xAxis INDEX
                },
                text: 'Attacks in <br> Saudi Arabia',
                y: -30,
                shape: 'connector',
                x: 15   
            }],
            shapes: [{
                point: {
                    x: 1567900800000, // timestamp
                    y: 2.5623, // value
                    xAxis: 0, // yAxis INDEX
                    yAxis: 0 // xAxis INDEX
                  },
                type: 'circle',
                r: 5
            }],
        }],
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        format: '{value:%m/%d}'
                    },
                }
              }
            }]
        }
    });
});