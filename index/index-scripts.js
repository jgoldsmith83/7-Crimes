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
	//var age_year = parseInt(document.getElementById("year").value);
	//birthDate();

	//if (this_year - age_year >= 18) {
		//legalAge();
		alert(birthDate());
	//} else {
		//alert("Sorry, we can't let you in if you're under 18. Thanks for understanding!");
		//underAge();
		//alert(date);
	//}
}

var birthDate = function() {
	var mm = document.getElementById('month').value;
	var dd = document.getElementById('day').value;
	var yyyy = document.getElementById('year').value;

	var date = mm + "/" + dd + "/" + yyyy;

	return date;
}

/*
var legal_age = function() {
	legalAge();
}

var under_age = function() {	
	underAge();
}
*/
