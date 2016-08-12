# Meal Tracker

#### An App to Track Caloric Intake

#### Made by Charles Ewel

## Description

An app that allows user to enter their food intake for a day and see their total caloric intake along with options to filter meals by high and low calories

## Instructions

* Clone the repository
* If on a mac, install node.js on your machine by running >"brew install node" (must have Homebrew installed). if on PC or Linux google node.js, go their website and follow the instructions there. This will install npm automatically
* In the console, run ">npm install bower -g" to install bower globally
* In the console, run ">npm install" to set up the node modules
* In the console, run ">bower install" to set up the bower components
* In the console, run ">gulp build; gulp serve" to launch the website

## Specs

The program should handle: | Example Input | Example Output
----- | ----- | -----
Adding New Foods| User fills out a form with name, details, and calories | That food is added to the list of foods eaten for that day
Editing Foods | User clicks a food which brings up an edit menu, they then change some of the values in that menu | The values are changed in that food object and that is reflected in the display and total calories
Filtering Foods | User selects "High Calories" from the filter drop down menu | Only high calorie foods (>500 cal) are displayed in the list


## Technologies Used

* Angular2 Javascript
* Node.js
* Bower
* Typescript

## Known Bugs

None

### License

Licensed under the MIT License.
