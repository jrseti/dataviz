# Clean the Data

## Instructions

* To analyze our data we will need to perform some cleaning to ensure our fields are the correct data types and our resulting dataframe only includes fields to be utilized.

* Import the data from the last activity to perform the following steps: 

- Drop the records missing `horsepower` values

- Convert the `horsepower` field to be an integer type

- Convert the `origin` field to be a string type

- Drop the `car name` field as it will not be used in this analysis

* Hint: The [read_csv()](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html) command has a parameter called `na_values` to convert specified strings to `NaN` values during import.

* Hint: Remember if you use the `dropna()` or `astype()` functions they do not happen inplace.