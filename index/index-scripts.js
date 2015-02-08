var main_url = "/main/main.html"
var under_url = "http://www.thetruth.com"

var legalAge = function() {
	window.location.href = main_url;
}

var underAge = function() {
	window.location.href = under_url;
}


var legal_age = function() {
	legalAge();
}

var under_age = function() {	
	underAge();
}