# fitness-tracker-01.16.2021

## About The Project

---

![alt text](public/Images/image1.PNG)

![alt text](public/Images/image2.PNG)

-    When the user open the app , user should be given the option to create a new workout or continue with their last workout.

-    This app allows user to view create and track daily workouts. User able to log multiple exercises in a workout on a given day, allows track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, user should be able to track distance traveled.

## The user should be able to :

-    Add exercises to the most recent workout plan.

-    Add new exercises to a new workout plan.

-    View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

-    View the total duration of each workout from the past seven workouts on the `stats` page.

## Implemented the following apiRoutes

-    selectAll()
     -    Retrieve all burgers from database by executing SELECT staement and display on the UI.
-    insertOne()
     -    Add the burger to burgers table in database when user enter the burger name and click on submit button by executing INSERT statement
-    updateOne()
     -    Update the burger's devoured state from false to true and display in UI by executing UPDATE statement
-    index.handlebars
     -    To display to devour burgers and non-devour burgers on UI
     -    Form to submit new burger.

## Built With

-    express
-    express-handlebars
-    mysql
-    dotenv
-    Boot Strap Grid System
-    CSS
-    MVC(ORM)

## Getting Started

To get a local copy up and running follow below steps.

## Prerequisites

None

## Installation instructions:

Clone the repo git clone git@github.com:NirmalaAbothu/burger-12.8.20.git then open Git Bash window ,navigate to project folder then run
following commands

-    Make a package.json file by running `npm init` from the command line.

-    Install the Express npm package: `npm install express`.

-    Install the Handlebars npm package: `npm install express-handlebars`.

-    Install MySQL npm package: `npm install mysql`.
-    Install dotenv package: `npm install dotenv`
-    Navigate to project folder in VS Code,then
-    create ".env" file in root directory and assign your mysql password to PW, for example
-    PW = your mysql password.
-    Again navigat to terminal your project folder.
-    Make sure you're in the `db` folder of your app.
-    Start MySQL command line tool and login: `mysql -u root -p`.
-    Enter your password and click
-    Run the command `source schema.sql`
     -    This will run schema file and all of the queries in it to create database.
-    Run the command `source seeds.sql`
     -    This will insert the entries defined in `seeds.sql.
-    Run `exit` to close out of the MySQL command line tool.
-    Navigate to your app folder and run the following command to start the server
     -    `node server.js` ,then navigate to browser and enter "localhost:3001" to see app
          in browser.

## Credits

Followed the documentation about MySql,Handlebars and MVC

## License & copyright

Copyright © 2020 Nirmala Abothu

[Deployed Heroku Link](https://murmuring-depths-53897.herokuapp.com/)
