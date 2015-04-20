var main_url = "../main/main.html"
var under_url = "http://www.thetruth.com"
var currYear = new Date().getFullYear();



function validate_age() {
	var age_year = birthDate(); // assigns the return value of birthDate() to a variable
	var year = document.getElementById('year').value;
	
	
	if (year < 1900 || year > currYear) { // || is a logical operator meaning OR - either one side or the other must be true to run the block
		alert("Please enter a valid birthdate");
	} else if  (age_year < 18) {
		alert("Sorry, we can't let you in if you're under 18. Thanks for understanding!");
		redirectUnderAge();
	} else {
		alert("You're good to go!");
		redirectLegalAge();	
	}
	
}

var birthDate = function() {
	var num = /\d+/; // \d+ is a regular expression which finds all numbers in a string

	var mm = document.getElementById('month').value;
	var dd = document.getElementById('day').value;
	var yyyy = document.getElementById('year').value;

	var date = yyyy + mm + dd;

	var dateCheck = moment(date, 'YYYYMMDD').fromNow();
	var dateSplit = dateCheck.match(num); // match() takes in a reg exp, finds all matches in a string (in this case numbers) and returns an array of results
	var dateNum = parseInt(dateSplit[0]); // parseInt converts string input to a number - dateSplit[0] refers to the first string in the array dateSplit

	return dateNum; // returns the number converted from the string at dateSplit[0]
}

var redirectLegalAge = function() {
	window.location.href = main_url; // reloads the browser window at the url specified
}

var redirectUnderAge = function() {
	window.location.href = under_url; // reloads the browser window at the url specified
}



