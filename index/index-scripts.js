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
	var age_year = parseInt(document.getElementById("year").value);

	if (this_year - age_year >= 18) {
		legalAge();
	} else {
		alert("Sorry, we can't let you in if you're under 18. Thanks for understanding!");
		underAge();
	}
}

/*
var legal_age = function() {
	legalAge();
}

var under_age = function() {	
	underAge();
}
*/
