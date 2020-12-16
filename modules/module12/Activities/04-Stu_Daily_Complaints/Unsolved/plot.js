// Create the Trace
var trace1 = {
    x: date_data[0],
    y: date_data[1],
    type: "line"
  };
  
  // Create the data array for the plot
  var data = [trace1];
  
  // Define the plot layout
  var layout = {
    title: "2019 Total Complaints by Day",
    yaxis: {rangemode: "tozero"},
    height: 750
  };
  
  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("plot", data, layout);

