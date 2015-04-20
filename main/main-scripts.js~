
var menu = function() {
	$('#face').mouseover(function() {
		$(this).fadeTo('slow', 0.4);
		//$('#menu:hidden').show(1000);
	$('#home').fadeTo('fast', 1, function() {
		$('#premium').fadeTo('fast', 1, function() {
			$('#standard').fadeTo('fast',1, function() {
				$('#order-info').fadeTo('fast', 1, function(){
					$('#contact').fadeTo('fast', 1);
				})
			})
		})
	});
	}); 
	
	$('li').click(function() {
		$(this).animate({color: 'red'}, 1100, function(){
			$(this).animate({color: 'white'});
		});
		$('#face').fadeTo('slow', 1);
		//$('#menu:visible').hide(1000);
		$('.liAnim').fadeTo('slow', 0);
	});
}

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



function reformMainDiv(selectionAttrib) {
	var contentDiv = document.getElementById("content-div");
	var titleChange = document.getElementsByTagName("title");
	var change = document.getElementById("description");
	var h3 = document.getElementById("h3");
	
	switch(selectionAttrib) {
		case 'home':
			contentDiv.innerhtml = ""; //reload div content
			//alert("You clicked on Home");
			
			titleChange.innerHTML = "7 Crimes. An eJuice Co.";
			change.innerHTML = "IT'S COMING.";
			h3.innerHTML = "Curators of Fine eJuice.";
			break;
		case 'premium':
			contentDiv.innerhtml = ""; //reload div content
			//alert("You clicked on Premium Line");
			
			titleChange.innerHTML = "7 Crimes. Premium Line.";
			change.innerHTML = "Premium Line.";
			h3.innerHTML = "Enjoy our Premium Line.";
			break;
		case 'standard':
			contentDiv.innerhtml = ""; //reload div content
			//alert("You clicked on Standard Line");
			
			titleChange.innerHTML = "7 Crimes. Standard Line.";
			change.innerHTML = "Standard Line.";
			h3.innerHTML = "Enjoy our Standard Line";
			break;
		case 'order-info':
			contentDiv.innerhtml = ""; //reload div content
			//alert("You clicked on Ordering Info");
			
			titleChange.innerHTML = "7 Crimes. Ordering Info.";
			change.innerHTML = "Ordering Info.";
			h3.innerHTML = "How to Order eJuice.";
			break;
		case 'contact':
			contentDiv.innerhtml = ""; //reload div content
			//alert("You clicked on Contact Us");
			
			titleChange.innerHTML = "7 Crimes. Contact Us.";
			change.innerHTML = "Contact Us.";
			h3.innerHTML = "Send a Quick Note.";
			break;
		default:
			alert("NO CONTENT TO DISPLAY");
	}
}
