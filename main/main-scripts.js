
var menu = function() {
	$('#face').mouseover(function() {
		$(this).fadeTo('slow', 0.4);
		//$('#menu:hidden').show(1000);
	$('#home').fadeTo('fast', 1, function() {
        $('#who').fadeTo('fast', 1, function() {
		$('#premium').fadeTo('fast', 1, function() {
			$('#standard').fadeTo('fast',1, function() {
				$('#order-info').fadeTo('fast', 1, function(){
					$('#contact').fadeTo('fast', 1);
				})
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

var whoClick = function() {
    $('who').click(function() {
        var selection = document.getElementsByTagName('li')[1].id;
        reformMainDiv(selection);
    });
}

var premiumClick = function() {
	$('#premium').click(function() {
		var selection = document.getElementsByTagName('li')[2].id;
		reformMainDiv(selection);
	});
}

var standardClick = function () {
	$('#standard').click(function() {
		var selection = document.getElementsByTagName('li')[3].id;
		reformMainDiv(selection);
	});
}

var orderClick = function() {
	$('#order-info').click(function() {
		var selection = document.getElementsByTagName('li')[4].id;
		reformMainDiv(selection);
	});
}

var contactClick = function() {
	$('#contact').click(function() {
		var selection = document.getElementsByTagName('li')[5].id;
		reformMainDiv(selection);
	});
}

var actionHandlers = [menu, homeClick, premiumClick, standardClick, orderClick, contactClick];

$(document).ready(actionHandlers);



function reformMainDiv(selectionAttrib) {
	var titleChange = document.getElementsByTagName("title");
    
	switch(selectionAttrib) {
		case 'home':
			titleChange.innerHTML = "7 Crimes. An eJuice Co.";
			break;
            
        case 'who':
            titleChange.innerHTML = "7 Crimes. About Us.";
            break;
            
		case 'premium':
			titleChange.innerHTML = "7 Crimes. Premium Line.";
			break;
            
		case 'standard':
			titleChange.innerHTML = "7 Crimes. Standard Line.";
            break;
            
		case 'order-info':
			titleChange.innerHTML = "7 Crimes. Ordering Info.";
			break;
            
		case 'contact':
			titleChange.innerHTML = "7 Crimes. Contact Us.";
			break;
            
		default:
			alert("NO CONTENT TO DISPLAY");
	}
}

