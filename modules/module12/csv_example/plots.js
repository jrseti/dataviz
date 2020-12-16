
//https://covidactnow.org/us/ca/?s=1445408
/*
California has about 7,872 ICU beds. Based on best available data, 
3615 are currently occupied by non-COVID patients. Of the 4,257 
ICU beds remaining, 2,933 are needed by COVID cases, or 69% of 
available beds. 
*/

//const url = "https://covidtracking.com/data/download/california-history.csv";
const filename = "california-history.csv";
d3.csv(filename).then(function(receivedData) {

    var dates = receivedData.map(e => e.date);
    var deaths = receivedData.map(e => e.death);
    var hospitalized = receivedData.map(e => e.hospitalizedCurrently);
    var icu = receivedData.map(e => e.inIcuCurrently);
    console.log(dates);

    var trace = [{
        x: dates,
        y: deaths,
        name: "Deaths",
        type: "bar"
     },
     {
        x: dates,
        y: hospitalized,
        name: "Hospitalized",
        type: "line"
     },
     {
        x: dates,
        y: icu,
        name: "In ICU",
        type: "line",
        line: {
            color: 'rgb(255, 0, 0)',
            width: 3
          }
     }
    ];
     
     var layout = {
        title: "Covid Statistics",
        xaxis: {title: "Date"},
        shapes: [
            {
                type: 'line',
                xref: 'paper',
                x0: 0,
                y0: 4257,
                x1: 1,
                y1: 4257,
                line:{
                    color: 'rgb(255, 33, 0)',
                    width: 2,
                    dash:'dot'
                }
            }
        ],
        annotations: [
            {
              x: 0.06,
              y: 4257,
              xref: 'paper',
              yref: 'y',
              text: 'ICU Beds available for Covid (4257)',
              showarrow: true,
              arrowhead: 7,
              ax: 0,
              ay: -40
            }
          ]
    };
    
    Plotly.newPlot("plotArea", trace, layout);
    
});