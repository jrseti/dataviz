# Module 8: Virtual Class (Required) Lesson Plan

## Overview

Today's Virtual Class (Required) lesson will review the ETL process and advanced Python techniques. Specifically, how to create functions, how to use lambda functions, data cleaning techniques, regular expressions, and loading data from Python into SQL.

## Learning Objectives

At the end of the session, learners will be able to:
 
* Explain the three steps to ETL
    * Extract
    * Transform
    * Load
* Create functions in Python
* Use lambda functions in Python and Pandas
* Clean data with Python and Pandas
* Create and use regular expressions to clean data
* Use plots to check for data integrity
* Merge data with Pandas
* Import Pandas DataFrames into SQL tables

## Instructor Prep

<details>
  <summary><strong>Career Services</strong></summary>

  Just a reminder that each week students receive a Career Connection in their course of work that ties to what academic content is being consumed. This Career Connection relates this week's material to a professional setting, encourages students to complete certain Career Services tasks, and provides technical interviewing questions, where applicable, that the student can work through.

  Encourage students to work through this material and if you'd like more information on Career Services, please check out the Career Services [resource page](http://bit.ly/DataVizCS) for Data Analytics and Visualization.

</details>

- - -

# Class Activities

## 1. Warm Up & Temperature Check

| Activity Time: 0:10 | Elapsed Time: 0:10 |
|---------------------|--------------------|

<details>
  <summary><strong> 🎉 Everyone Do: Interview Question Warm-Up (5 mins before class, first 5 mins of class)</strong></summary>

Open the [slideshow](https://docs.google.com/presentation/d/16m_GLJ7vWg-NHJNi-kYZFQWEQ4Td8l08tutSVCidaPc/edit#slide=id.g6363434e89_0_0) for today's class and begin the weekly presentation with the first slide.The first slide displays an interview question that a student may encounter based on the content of this week's content. 

**This week's question:** What are some possible pitfalls in each step of the ETL process?

Allow the question to be on the screen 5 mins prior to the start of class as students join the session. Allow the class 1 minute at the start of class to review, then you will ask for several students to volunteer their answers to the question. Next, offer the answer or a few approaches you would take for answering the question.

**Possible answers to this week's question:**

* Extract
    * Not being able to find the right data
    * Data in a proprietary format
    * Slow data delivery
    * Corrupted data
* Transform
    * Corrupted data
    * Missing data
    * Duplicated data
    * Over-writing data
* Load
    * Mixed data types in a column
    * Slow data delivery
    * Mixing structured and unstructured data

</details>

<details>
  <summary><strong> 📣 Instructor Do: Temperature Check (5 mins)</strong></summary>

Using the [Zoom Polling](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) feature or a [Poll Everywhere](http://www.polleverywhere.com), launch a poll of the class to identify areas that they would like to review from the week's asynchronous content. 

**Poll Text:**

*Select all of the topics that you feel prepared to apply outside of the class from this week's lesson:*

* *Functions*
* *Lambda functions*
* *Advanced list comprehensions*
* *Basic Regex Matches*
* *Regex Sets, Wildcards, and Escaping*
* *Regex Special Characters*
* *Regex Groups*
* *Connecting to a Database in Python*
* *Importing tables from Pandas to SQL*

Based on the results of the poll, advance to the correct slide for a review of the topics with the lowest scores. Choose 2 topics at minimum to review, or more as time permits to review.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/3gdJBD4)</sub>

## 2. Adaptive Learning Blocks

| Activity Time:  1:50 |  Elapsed Time: 2:00  |
|----------------------|----------------------|

>***Choose:***
>
>* Two 25-min blocks
>* *and* three 20-min blocks
>
>***then dismiss class.***

### Functions (20 mins)

<details>
  <summary><strong> 👥 Partners Do: Wrestling With Functions (0:15)</strong></summary>

* Within the world of wrestling, there are winners and there are losers. Winners are labeled as "Superstars" while the losers receive the lowly title of "Jobber". Using a function, create the code necessary to search through a list of wrestlers, determine their win, loss, and draw percentages.

![Wrestling Functions](Images/13-WrestlingFunctions_Run.gif)

* After opening up the [A3-Par_WrestlingWithFunctions/wrestling_functions.py](Activities/A3-Par_WrestlingWithFunctions/Solved/wrestling_functions.py) of this activity in order to show students how their application should function, slack out the following files and instructions.

* **Files:**

  * [A3-Par_WrestlingWithFunctions/wrestling_functions.py](Activities/A3-Par_WrestlingWithFunctions/Unsolved/wrestling_functions.py)

  * [WWE-Data-2016.csv](Activities/A3-Par_WrestlingWithFunctions/Resources/WWE-Data-2016.csv)

* **Instructions:**

  * Analyze the code and CSV provided, looking specifically for what needs to still be added to the application.

    * Explain that `header = next(reader)` will read the header row from the csv file.

  * Using the starter code provided, create a function called `print_percentages` which takes in a parameter called `wrestler_data` and does the following:

    * Uses the data stored within `wrestler_data` to calculate the percentage of matches the wrestler won, lost, and drew over the course of a year.

    * Prints out the stats for the wrestler to the terminal.

* **Bonus:**

  * Still within the `print_percentages()` function, create a conditional that checks a wrestler's loss percentage and prints either "Jobber" to the screen if the number was greater than fifty or "Superstar" if the number was less than 50.

</details>

<details>
  <summary><strong> ⭐ Review: Wrestling With Functions (0:05)</strong></summary>

* Open and slack out the file [A3-Par_WrestlingWithFunctions/wrestling_functions.py](Activities/A3-Par_WrestlingWithFunctions/Solved/wrestling_functions.py) from the previous activity and go over the code line by line with the class, answering whatever questions they may have.

* Key points to cover in this activity:

  * Looking through the CSV data beforehand was key to figuring out how to calculate the total number of matches wrestled. Doing so would have told students what each index within a row referred to.

  * Even though `row` is the variable being passed into the function, `wrestler_data` is still used within the function itself. The data within `row` is essentially moved into `wrestler_data` for usage within the function.

  ![Wrestling Functions](Images/14-WrestlingFunctions_Code.png)

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/3cAfDsh)</sub>

### Lambda Functions (25 mins)

<details>
  <summary><strong> ✏️ Students Do: Lambda Functions (0:15)</strong></summary>

* **Files:**

    * [movies_metadata.csv](Activities/A4-Stu_LambdaFunctions/Resources/movies_metadata.csv)

    * [words.txt](Activities/A4-Stu_LambdaFunctions/Resources/words.txt)

* **Instructions**

    * Use the existing code to load in the Movielens data into a DataFrame movies_df.

    * Create a lambda function to filter movies_df to movies with more than 15 words in their title

    * Create a lambda function to filter movies_df to only movies that have a budget over 1000 and have revenue more than one hundred times the budget value

    * Use the existing code to load in a list of English words to words_df

    * Create a lambda function to filter words_df to only those words that contain the letter x

    * Note: example named functions have been created for each exercise. You will need to convert them into lambda functions.

</details>

<details>
  <summary><strong> ⭐ Review: Lambda Functions (0:05)</strong></summary>

* Open up [LambdaFunctions.ipynb](Activities/A4-Stu_LambdaFunctions/Solved/LambdaFunctions.ipynb) in Jupyter Notebook and run through the code with the class line-by-line, making certain to hit upon the following points.

    * If you have time, live code condensing the `more_than_15_words` function down line by line until it’s just a function taking in a parameter and returning an expression, and then explain how to make that condensed function into a lambda function.

    * Do the same for `hundredfold_return`.

    * Point out that because `contains_x` is being applied to a Pandas Series, we can use the `map()` method instead of `apply()`.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Lambda Functions (0:05)</strong></summary>

* Open [LambdaFunctions.ipynb](Activities/A5-Ins_LambdaFunctions/Solved/LambdaFunctions.ipynb) in Jupyter Notebook and go through the code with the class.

    * Demonstrate that square() and f perform the same function. Point out that square() has four parts: name, parameter, code block, and a return statement, and all but name are optional. Show that the lambda function doesn’t have a name, just a parameter and return expression.

    * Show that functions can be sent as parameters to another function with apply_function_twice

    * Demonstrate how lambda functions can be used on DataFrames with the apply() method on the candy_df dataframe

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2yPNzlV)</sub>

### Advanced List Comprehensions (20 mins)

<details>
  <summary><strong> ✏️ Students Do: Conditional List Comprehensions (0:10)</strong></summary>

* **Instructions**

* Use conditional list comprehensions to create the following lists:
    
    * Make a list of numbers up to 100 that are divisible by three

    * Using the given list of pets, create a list of all the names that belong to dogs

    * Make a list of numbers up to 100 that are divisible by three OR divisible by five
    
    * **Hint:** Remember the modulo operator `%`!
      `x % y` gives the remainder if x is divided by y. So, for instance `x % 2` will be `0` when `x` is even, and `1` when x is odd

    * **Bonus:** Make a list comprehension that implements FizzBuzz on the last list created (multiples of 3 and 5) FizzBuzz replaces multiples of 3 with "Fizz", multiples of 5 with "Buzz" and multiples of both 3 and 5 with "FizzBuzz" Hint: use a conditional in the expression at the beginning of the list comprehension

</details>

<details>
  <summary><strong> ⭐ Review: Conditional List Comprehensions (0:05)</strong></summary>

* Open up [ConditionalComprehensions.ipynb](Activities/A6-Stu_ConditionalListComprehensions/Solved/ConditionalComprehensions.ipynb) in Jupyter Notebook and run through the code with the class line-by-line, making certain to hit upon the following points.

    * Show students that `[x for x in range(100)]` would just return the original list. Add in the conditional `x % 3 == 0` and explain how the conditional is filtering the list comprehension.

    * Point out that in the pets example, the value returned is not necessarily the value being compared in the condition
    
    * Conditions can use logical operators like `and` and `or`

    * For the bonus, go through how nested inline if statements work

</details>

<details>
  <summary><strong> 📣 Instructor Do: Conditional List Comprehensions (0:05)</strong></summary>

* Open up [ConditionalComprehensions.ipynb](Activities/A7-Ins_ConditionalListComprehensions/Solved/ConditionalComprehensions.ipynb) in Jupyter Notebook.

* Break down an example list comprehension that uses a conditional expression into four parts:
    * Expression
    * Element
    * Source list
    * Filter expression

* Show that we can use a conditional in the filter expression to filter the list. For example, to create a list of even numbers.

* Show that we can also use a conditional in the expression, for example to output whether a number is even or odd.

* Show how list comprehensions can be used to filter a list of dictionaries by accessing values inside the dictionaries

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/3bu0sQ0)</sub>

### Basic Regex Matches (20 mins)

<details>
  <summary><strong> ✏️ Students Do: Basic Regex Matches (0:10)</strong></summary>

* **Files**

    * [alice.txt](Activities/B1-Stu_BasicRegex/Resources/alice.txt)

* **Instructions**

    * Load in the "Alice in Wonderland" text into a DataFrame `alice_df`.

    * Create regular expression patterns to find all lines that

        * contain the string `'cat'`,

        * contain the string `' cat'` (beginning with a space),

        * contain the string `' cat'` beginning with a space and ending with a non-word character.

</details>

<details>
  <summary><strong> ⭐ Review: Basic Regex Matches (0:05)</strong></summary>

* Open up [RegexMatching.ipynb](Activities/B1-Stu_BasicRegex/Solved/RegexMatching.ipynb) in Jupyter Notebook and run through the code with the class line-by-line, making certain to hit upon the following points.

    * `'cat'` as a regular expression will find any word containing `'cat'`, not just the word `'cat'` or words that start with `'cat'`

    * To find words that start with `'cat'`, we need to add a space at the beginning. Just adding a space will only find the space character, where `'\s'` will find any whitespace character, like spaces or tabs.

    * To find just the word `'cat'`, we need to start with a space and end with a non-word character. Point out that `'\W'` with a capital W is for *non*-word characters.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Basic Regex Matches (0:05 mins)</strong></summary>

If students need more exposure to basic regex matches, do this activity.

* Open [BasicRegex.ipynb](Activities/B2-Ins_BasicRegex/Solved/BasicRegex.ipynb) and go through the code with students.

* This activity mirrors the previous student activity, but searching for the string “Watson” in Sherlock Holmes text.

* Answer any questions students have.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/3fGC80z)</sub>

### Regex Sets, Wildcards, and Escaping (25 mins)

<details>
  <summary><strong> ✏️ Students Do: Sets, Wildcards, and Escaping (0:15)</strong></summary>

* **Files**

    * [alice.txt](Activities/B3-Stu_SetsWildcardsEscaping/Resources/alice.txt)

* **Instructions**

    * Load in the "Alice in Wonderland" text into a DataFrame `alice_df`.

    * Create a regular expression using a character set to find all lines with the strings `cat`, `hat`, and `eat`.

    * Create a regular expression using a character set to find all lines with the strings `cat`, `hat`, and `eat` that end with a period.

    * Create a regular expression that finds all lines that contain a word of the form "w_ll" (where the underscore could be any character).

</details>

<details>
  <summary><strong> ⭐ Review Sets, Wildcards, and Escaping (0:05)</strong></summary>

* Open up [RegexSetsWildcardsEscaping.ipynb](Activities/B3-Stu_SetsWildcardsEscaping/Solved/RegexSetsWildcardsEscaping.ipynb) in Jupyter Notebook and run through the code with the class line-by-line, making certain to hit upon the following points.

    * Character sets will match any of the characters inside the brackets
    
    * The period is a wildcard character that will match anything
    
    * To search for a period specifically, it needs to be escaped with a backslash

</details>

<details>
  <summary><strong> 📣 Instructor Do: Sets, Wildcards, and Escaping (0:05 mins)</strong></summary>

If students need more exposure to sets, wildcards, and/or escaping characters, do the following optional activity

* Open [SetsWildcardsAndEscaping.ipynb](Activities/B4-Ins_SetsWildcardsEscaping/Solved/SetsWildcardsAndEscaping.ipynb)

* This activity mirrors the student activity. Use the examples to reinforce any concepts that students are struggling with.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2SSsRbF)</sub>

### Regex Special Characters (20 mins)

<details>
  <summary><strong> ✏️ Students Do: Special Characters (0:10)</strong></summary>

* **Files**

    * [alice.txt](Activities/B5-Stu_SpecialCharacters/Resources/alice.txt)

* **Instructions**

    * Load in the "Alice in Wonderland" text into a DataFrame alice_df.

    * Create a regular expression to find all lines that start with the string `Alice`.
    
    * Create a regular expression to find all lines that end with an exclamation mark (`!`).

    * Create a regular expression to find all lines that end with an exclamation mark (`!`) or question mark (`?`).

</details>

<details>
  <summary><strong> ⭐ Review: Special Characters (0:05)</strong></summary>

* Open up [SpecialCharacters.ipynb]() in Jupyter Notebook and run through the code with the class line-by-line, making certain to hit upon the following points.

    * The carat (`^`) is a zero-length match for the beginning of the string. Here, the string is an entire line of text, so the carat matches the beginning of the entire line.

    * Similarly, the dollar sign (`$`) matches the end of the entire line.

    * The pipe character (`|`) is used like a logical OR to match one expression or another.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Special Characters (0:05)</strong></summary>

If students need more exposure to special characters, do the following optional activity

* Open [SpecialCharacters.ipynb](Activities/B6-Ins_SpecialCharacters/Solved/SpecialCharacters.ipynb)

* This activity mirrors the student activity. Use the examples to reinforce any concepts that students are struggling with.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/35P7Kwp)</sub>

### Regex Groups (25 mins)

<details>
  <summary><strong> ✏️ Students Do: Groups (0:15)</strong></summary>

* **Files**

    * [alice.txt](Activities/B7-Stu_Groups/Resources/alice.txt)

* **Instructions**

    * Load in the "Alice in Wonderland" text into a DataFrame `alice_df`.

    * Create a regular expression to extract all words with 12 or more letters.

    * Create a regular expression to extract every word in the text that comes after "Alice", and count their frequency.

    * Create a regular expression to extract every word in the text 5 letters or longer that comes after "Alice", and count their frequency.

    * Create a regular expression to extract every word in the text 5 letters or longer that comes after "Alice" and does not end in "ly", and count their frequency.

</details>

<details>
  <summary><strong> ⭐ Review: Regex Groups (0:05)</strong></summary>

* Open up [RegexGroups.ipynb](Activities/B7-Stu_Groups/Solved/RegexGroups.ipynb) in Jupyter Notebook and run through the code with the class line-by-line, making certain to hit upon the following points.
    
    * The default group in regex is a “capture” group. For matching purposes, it doesn’t make a big difference, but when using regex for extracting substrings, only the substrings in capture groups get extracted.

    * Non-capture groups are used to find context for substrings to be extracted. For example, finding words that come after “Alice” requires a non-capturing group to look for “Alice”

    * Negative lookahead groups are non-capturing groups that also help find the context for other substrings. For example, to find words that come after “Alice” that are not adverbs (words ending in “ly”), we need to add a negative lookahead group that looks ahead of “Alice” and negates the match if it finds a word ending in “ly”.

    * Answer any questions students might have.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Regex Groups (0:05)</strong></summary>

If students need more exposure to special characters, do the following optional activity

* Open [Groups.ipynb](Activities/B8-Ins_Groups/Solved/Groups.ipynb)

* This activity mirrors the previous student activity. Use the examples to reinforce any concepts that students are struggling with.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2xTJVHh)</sub>

### Connecting to a Database in Python (20 mins)

<details>
  <summary><strong> ✏️ Students Do: Connection Strings (0:10)</strong></summary>

* **Instructions**

    * There are six values in a connection string:
        * Protocol
        * User
        * Password
        * Location
        * Port
        * Database 
        **Identify the six values in the connection string "postrgres://postgres:12345@localhost:5432/pets"**

    * Answer the question: how is a connection string different than a website URL?

    * Create a connection string with the following values
        * Protocol: "mysql"
        * User: "admin"
        * Password: "p@ssw0rd123"
        * Location: "rds.us-east-2.amazonaws.com"
        * Port: "3306"
        * Database: "example"

</details>

<details>
  <summary><strong> ⭐ Review: Connection Strings (0:05)</strong></summary>

* Open up [ConnectionStrings.md](Activities/C1-Stu_ConnectionStrings/Solved/ConnectionStrings.md)

    * For question #1, point out the 6 different values in the given connection string

    * For question #2, ask students what answers they came up with. Share the following as some example answers:
        * Connection strings are URLs, but differ from website URLs by
            * Different protocol, i.e. "postgres" vs "http(s)"
            * Connection strings have user, password, and database, while website URLs do not
            * Website URLs have port 80 implied (but can use different ports, i.e. Jupyter Notebook)

    * For question #3, show students the correct connection string `mysql://admin:p@ssw0rd123@rds.us-east-2.amazonaws.com:3306/example` and point out the different parts to the connection string.

</details>

<details>
  <summary><strong> 📣 Instructor Do: SQLAlchemy and Connection Strings (0:05)</strong></summary>

If students need more exposure to connection strings, do the following optional activity:

* Open [ConnectionStrings.ipynb](Activities/C2-Ins_ConnectionStrings/Solved/ConnectionStrings.ipynb)

* The first cell shows a visual “skeleton” of a connection string, if all the parts were blank. Point out that website addresses follow a simplified version of this, because connection strings and website addresses are both URLs

* Use the second cell to build a connection string. Change values of the connection string to point out how this could connect to a wide variety of databases.
    * For example:
        * A PostgreSQL database hosted locally
        * A MySQL database hosted on AWS
        * A SQL Server database hosted on Azure

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/3dyAEn4)</sub>

### Importing Tables from Pandas to SQL (20 mins)

<details>
  <summary><strong> ✏️ Students Do: Pandas `to_sql()` (0:10)</strong></summary>

* **File:**
    [alice.txt](Activities/C3-Stu_to_sql()/Resources/alice.txt)

* **Instructions**

    * In pgAdmin, create a database called `alice_db`

    * Create a connection string and engine to connect to `alice_db`

    * Use the Pandas to_sql() method to load the contents of alice_df into a table called `alice`

</details>

<details>
  <summary><strong> ⭐ Review: Pandas `to_sql()`  (0:05)</strong></summary>

* Open up [PandasToSQL.ipynb](Activities/C3-Stu_to_sql()/Solved/PandasToSQL.ipynb) in Jupyter Notebook and run through the code with the class line-by-line, making certain to hit upon the following points.

    * The `to_sql()` method is a quick and easy way to transfer a table to SQL
        * However, the database needs to exist already, but if the table already exists, to_sql() will default to failing
        * If the table exists, we need to explicitly tell `to_sql()` whether to replace or append the data. 

</details>

<details>
  <summary><strong> 📣 Instructor Do: Pandas `to_sql()` (0:05)</strong></summary>

If students need more exposure to special characters, do the following optional activity

* Open [to_sql().ipynb](Activities/C4-Ins_to_sql()/Solved/to_sql().ipynb)

* This activity mirrors the previous student activity. Use the examples to reinforce any concepts that students are struggling with.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2YPNj0V)</sub>

- - -

### Challenge Instructions - Office Hours

Before you dismiss your class, let them know that the first few minutes of Office Hours will include a walkthrough of the Challenge requirements, rubric, and helpful tips to ensure they know exactly what they need in order to be successful. Encourage them to stay for this, even if they can’t stay the full length of post-class Office Hours.

<details>
  <summary><strong> 📣 Instructor Do: Challenge Instruction Walkthrough</strong></summary>

Open the Challenge in Canvas and go through the high-level instructions and requirements with your class. Be sure to check for understanding.

Open the Rubric in Canvas and go through the Mastery column with your class and show how it maps back to the requirements for each deliverable. Be sure to check for understanding.

Let them know that this challenge has **four** deliverables.

The first part of the assignment, **Deliverable 1: Write an ETL function to read three data files**, requires them to write a function that reads in the three data files as arguments and converts the them to Pandas DataFrames.

* We have provided a [ETL function starter code](../../../01-Assignments/08-ETL/Resources/ETL_Deliverable1_starter_code.ipynb) that has comments as to where the learners will need to add code to complete this part of the challenge.

* In Steps 6-11, we have provide code to help them read in the files and display the DataFrames. In Step 7, we have made the three variables from Step 6 equal to the function name.  They may not be familiar with assigning variables to a function. We have done this so we can change the variables from the `return` statement by assignment to avoid confusion. This is done in Step 8, where we assign the DataFrames equal to these variables in order to display the DataFrames in Steps 9-11.

    ``` python
    # 7. Set the three variables in Step 6 equal to the function created in Step 1.
    wiki_file, kaggle_file, ratings_file = function_name()

    # 8. Set the DataFrames from the return statement equal to the file names in Step 6.
    wiki_movies_df = wiki_file
    kaggle_metadata = kaggle_file
    ratings = ratings_file

    ```

* Remind them if they pass the file names in the function in Step 7 and add those file names as arguments in the function, the DataFrames will be displayed but in the Pandas DataFrame format. 

For the second part of the assignment, **Deliverable 2: CExtract and Transform the Wikipedia Data**, they'll need to extract, clean, and transform the Wikipedia data so it can be merged with the Kaggle metadata in Deliverable 3.

* We have provided a [ETL clean wiki movies starter code](../../../01-Assignments/08-ETL/Resources/ETL_Deliverable2_starter_code.ipynb) that has comments as to where the learners will need to add code to complete this part of the challenge.

* For this part of the challenge make sure that they copy the code from the solution file that is working from Deliverable 1 and add it to the starter code. They willl need to reaname the starter code as given in the instructions. 

* Next, they'll need to refactor and orgainze the code that extracts, cleans, and transforms the Wikipedia data into the `wiki_movies_df` DataFrame and add it to their jupyter notebook file.

* There is a lot of code to add and modify so that the function works without errors. Let them know they need to be mindful of formatting and indentation. Encourage them to keep or edit the commented sections to maintian an easier workflow. 

* In Step 6, they'll need to use a `try-except` block to catch errors while extracting the IMDb ID using a regular expression string and dropping any `imdb_id` duplicates. If there is an exception, they'll need to print it.

* Their final code should create the `wiki_movies_df` DataFrame as in the module. To confirm this we have provide code for them to display the DataFrame and the columns.  

For the third part of the assignment, **Deliverable 3: Extract and Transform the Kaggle Data**, the learners will need to extract, clean, and transform the Kaggle metadata and MovieLens rating data and then convert the transformed data into separate DataFrames. Then, they’ll merge the Kaggle metadata DataFrame with the Wikipedia movies DataFrame to create the `movies_df`. Finally, they’ll merge the MovieLens rating data DataFrame with the `movies_df` DataFrame to create the `movies_with_ratings_df`.

* We have provided a [ETL clean kaggle data starter code](../../../01-Assignments/08-ETL/Resources/ETL_Deliverable3_starter_code.ipynb) that has comments as to where the learners will need to add code to complete this part of the challenge.

* For this part of the challenge make sure that they copy the code from the solution file that is working from Deliverable 2 and add it to the starter code. They willl need to reaname the starter code as given in the instructions. 

* Next, they'll need to refactor and orgainze the code that extracts, cleans, and transforms the Kaggle metadata and MovieLens rating data and add it to their jupyter notebook file.

* Again, there is a lot of code to add and modify so that the function works without errors. Let them know they need to be mindful of formatting and indentation.  

Finally, for the last part of the assignment, **Deliverable 4: Create the Movie Database**, the learners will need to load the new data into PostgreSQL database.

* There is no starter code for this deliverable. Instead, they'll need to copy the he solution file that is working from Deliverable 3, and reaname the file as given in the instructions. 

* Next, they'll need to add the code that creates the connection to the postgreSQL database, and then converts the `movies_df` DataFrame to a SQL database. 

* We have provided a **Hint** to let them know that they'll neeed to use `'replace'` for the `if_exists` parameter so that the `movies_df` DataFrame isn't appended to the `movies` table is the table is in the database. 

* Before they add the MovieLens rating CSV data to the database, they'll need to drop the table in postgreSQL. This may be familiar to them as they have covered dropping tables in previous module. 

Encourage your class to begin the Challenge as soon as possible, if they have not already begun, and to use the Learning Assistants channel and pre-scheduled Office Hours with their instructional team for help as they progress through their work. If they feel like they need context to understand documentation or instructions throughout the week, this is where they can get it.

Open the floor to discussion and ensure to answer any questions they may have about the Challenge requirements before moving onto other areas of interest.


### End Class
