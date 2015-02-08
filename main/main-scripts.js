
//event handler to trigger the flyout menu
var menu = function() {
	//show the menu
	var links = $('li');
	$('#face').mouseover(function() {
		$('#menu').show(1000);
		$('.liAnim').each(function() {
			$(links).animate({marginTop: 1, opacity: 100}, 1000, 'linear')});
		$(this).rotate({
			duration: 2800,
			animateTo: 360
		});
	});
	
	//hide the menu
	$('li').click(function() {
		$('#menu:visible').hide(1000),
		$('#face').rotate({
			duration: 2800,
			animateTo: -0
		});
	});
}

//event handlers for clicking the links in the flyout menu
var homeClick = function() {
	$('#home').click(function() {
		var selection = document.getElementsByTagName('li')[0].id;
		reformMainDiv(selection);
	});
}

var premiumClick = function() {
	$('#premium').click(function() {
		var selection = document.getElementsByTagName('li')[1].id;
		reformMainDiv(selection);
	});
}

var standardClick = function () {
	$('#standard').click(function() {
		var selection = document.getElementsByTagName('li')[2].id;
		reformMainDiv(selection);
	});
}

var orderClick = function() {
	$('#order-info').click(function() {
		var selection = document.getElementsByTagName('li')[3].id;
		reformMainDiv(selection);
	});
}

var contactClick = function() {
	$('#contact').click(function() {
		var selection = document.getElementsByTagName('li')[4].id;
		reformMainDiv(selection);
	});
}

var actionHandlers = [menu, homeClick, premiumClick, standardClick, orderClick, contactClick];

$(document).ready(actionHandlers);


//this is the actual event handler for clicking the links - the handlers at the top call this function
function reformMainDiv(selectionAttrib) {
	var contentDiv = document.getElementById("content-div");
	var titleChange = document.getElementsByTagName("title");
	var change = document.getElementById("description");
	
	switch(selectionAttrib) {
		case 'home':
			contentDiv.innerhtml = ""; //reload div content
			//alert("You clicked on Home");
			
			titleChange.innerHTML = "7 Crimes. An eJuice Co.";
			change.innerHTML = "IT'S COMING.<br><br>For inquiries:<br>Send us an <a href='mailto:james@sevencrimes.com?Subject=Web%20Inquiry' target='_top'>Email</a>";
			break;
		case 'premium':
			contentDiv.innerhtml = ""; //reload div content
			//alert("You clicked on Premium Line");
			
			titleChange.innerHTML = "7 Crimes. Premium Line.";
			change.innerHTML = "Premium Line."
			change.innerHTML += "<p id='labelp'><img id='GLlabel' src='../labels/grandlarceny3-display.png'/><br><br>  For inquiries:<br>  Send us an <a href='mailto:james@sevencrimes.com?Subject=Web%20Inquiry:%20Premium%20Line' target='_top'>Email</a></p>";
			
			break;
		case 'standard':
			contentDiv.innerhtml = ""; //reload div content
			//alert("You clicked on Standard Line");
			
			titleChange.innerHTML = "7 Crimes. Standard Line.";
			change.innerHTML = "Standard Line.<br><br>For inquiries:<br>Send us an <a href='mailto:james@sevencrimes.com?Subject=Web%20Inquiry:%20Standard%20Line' target='_top'>Email</a>";
			break;
		case 'order-info':
			contentDiv.innerhtml = ""; //reload div content
			//alert("You clicked on Ordering Info");
			
			titleChange.innerHTML = "7 Crimes. Ordering Info.";
			change.innerHTML = "For inquiries:<br>Send us an <a href='mailto:james@sevencrimes.com?Subject=Web%20Inquiry:%20Order%20Info' target='_top'>Email</a>";
			break;
		case 'contact':
			contentDiv.innerhtml = ""; //reload div content
			//alert("You clicked on Contact Us");
			
			titleChange.innerHTML = "7 Crimes. Contact Us.";
			change.innerHTML = "Contact Us.<br>For inquiries:<br>Send us an <a href='mailto:james@sevencrimes.com?Subject=Web%20Inquiry:%20General%20Contact' target='_top'>Email</a>";
			break;
		default:
			alert("NO CONTENT TO DISPLAY");
	}
}
