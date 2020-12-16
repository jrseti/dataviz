const stateData = { 
    california: 
    { 
        name: 'california', 
        filename: 'california-history.csv',
        available_icu_beds: 4257
    },
    texas:
    {
        name: 'texas', 
        filename: 'texas-history.csv',
        available_icu_beds: 4041
    },
    florida:
    {
        name: 'florida', 
        filename: 'florida-history.csv',
        available_icu_beds: 2235
    },
    arizona:
    {
        name: 'arizona', 
        filename: 'arizona-history.csv',
        available_icu_beds: 1378
    },
    newyork:
    {
        name: 'New York', 
        filename: 'new-york-history.csv',
        available_icu_beds: 3814
    },
    illinois:
    {
        name: 'Illinois', 
        filename: 'illinois-history.csv',
        available_icu_beds: 2050
    }
};


function drawPlot(stateName) {
    
    var filename = stateData[stateName].filename;
    var icuBeds = stateData[stateName].available_icu_beds;

    d3.csv(filename).then(function(receivedData) {

        var dates = receivedData.map(e => e.date);
        var deaths = receivedData.map(e => e.death);
        var hospitalized = receivedData.map(e => e.hospitalizedCurrently);
        var icu = receivedData.map(e => e.inIcuCurrently);

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
            title:  capitalize(stateName) + " Covid Statistics",
            xaxis: {title: "Date"},
            annotations: [
                {
                x: 1.00,
                y: icuBeds,
                xref: 'paper',
                yref: 'y',
                text: `ICU Beds available<br>NOW for Covid ${icuBeds}`,
                showarrow: true,
                arrowhead: 1,
                ax: 80,
                ay: 0
                }
            ]
        };
        
        Plotly.newPlot("plotArea", trace, layout);
        
    });
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    //Populate the dropdown with state names
    Object.keys(stateData).forEach(key => {
        selector
          .append("option")
          .text(key)
          .property("value", key);
    });

    //Draw the first state graph
    let firstStateName = Object.keys(stateData)[0];
    drawPlot(firstStateName);
   
}

function optionChanged(stateName) {
    // Fetch new data each time a new state is selected
    drawPlot(stateName)
}

init();