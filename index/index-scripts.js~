var main_url = "../main/main.html"
var under_url = "http://www.thetruth.com"
var this_year = new Date().getFullYear();


var legalAge = function() {
	window.location.href = main_url;
}

var underAge = function() {
	window.location.href = under_url;
}


function validate_age() {
	var age_year = birthDate();
	var year = document.getElementById('year').value;
	
	
	if (year < 1900) {
		alert("Please enter a valid birthdate");
	} else if  (age_year < 18) {
		alert("Sorry, we can't let you in if you're under 18. Thanks for understanding!");
		//underAge();
	} else {
		alert("You're good to go!");
		//legalAge();	
	}
	
}

var birthDate = function() {
	var num = /\d+/;

	var mm = document.getElementById('month').value;
	var dd = document.getElementById('day').value;
	var yyyy = document.getElementById('year').value;

	var date = yyyy + mm + dd;

	var dateCheck = moment(date, 'YYYYMMDD').fromNow();
	var dateSplit = dateCheck.match(num);
	var dateNum = parseInt(dateSplit[0]);

	return dateNum
}



