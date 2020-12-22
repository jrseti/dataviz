// Live code - create an HTML file first with dic "plotArea"

//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
var trace = [{
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 }];
 
 var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

//Plotly.newPlot("plotArea", trace, layout);


var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: { title: "Drinks"},
    yaxis: { title: "% of Drinks Ordered"}
   };
//Plotly.newPlot("plotArea", data, layout);

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
  };
  var data = [trace];
  var layout = {
    title: "'Pie' Chart",
  };
  //Plotly.newPlot("plotArea", data, layout);

  // Scatter chart
  var trace = {
    x: [1,2,5,3,9,3,6,7],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: 'markers',
    type: "scatter"
   };
   var data = [trace];
   var layout = {
    title: "'Scatter' Chart",
    xaxis: { title: "x"},
    yaxis: { title: "y"}
   };
//Plotly.newPlot("plotArea", data, layout);

//
// map()
//

var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

// map() to add 5 to each number
var numbers = [0,2,4,6,8];
let plus5 = numbers.map(number => number + 5);
console.log(plus5);
// or
let plus5 = numbers.map(function(xxx) {
    return xxx + 5;
});
console.log(plus5);

// map() on javascript Object
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

// filter() with anonymous function
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});
// Or with an arrow function
console.log(larger);

var larger = numbers.filter(num => num > 1);

// Filter() example, all words that start with 's'
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
startsWithS = words.filter( word => word[0] == 's');

// sort()
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

// slice(), to is NOT inclusive!
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slicew = words.slice(1,2);
console.log(slicew);

// slice() from an index to the end
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slicew = words.slice(3, );
console.log(slicew);

// Module 12.3.1
// Skill drill, which is the best answer?
d3.json(url).then(receivedData => receivedData.map(function(data){
    console.log(data.location.latitude, data.location.longitude);
}));

const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then(function(receivedData) {

    // The received data is an array of launch site information
    
    // Arrow function to use map() to create an array of latitude/longitude pairs
    launchSiteLocations = (launch_sites_array) => launch_sites_array.map(function(launch_site){
        return [launch_site.location.latitude, launch_site.location.longitude];
    }
    );

    // Call the function to create an array of latitude/longitude pairs
    let locationsArray = launchSiteLocations(receivedData);

    // Print out the array of latitude/longitude pairs
    locationsArray.forEach(function(loc) {
        console.log(loc[0], loc[1]);
    });
    
});
