# Bars per Square Mile

## Instructions

In this activity, you will use functional programming techniques to create plots for density of bars per square mile in various cities.

Data for 32 cities is given in the `data.js ` file. Complete the following: 

* From the dataset, use `filter()` to select only cities whose population is greater than 1,000,000. Note that you will also have to create a custom filtering function.

* In order to define the data for each plot point in a trace, use the `map()` method with arrow functions on the filtered dataset to calculate the number of bars per square mile.

* Use Plotly to create a bar chart of the bar densities of the filtered cities.
