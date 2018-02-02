document.addEventListener('DOMContentLoaded', function () {
//podświetlane przyciski
	var btn = document.querySelectorAll("button");

	for(var i=0; i<btn.length; i++) {
		btn[i].addEventListener('mouseover', function(event) {
			var x = event.target;

			x.classList.add('green__button');

		})

		btn[i].addEventListener('mouseout', function() {
			var x = event.target;

			x.classList.remove('green__button');
		})
	}

//podświetlane napisy w menu - nav

	var menu = document.querySelectorAll("nav.header__nav > div > a");

	menu.addEventListener('click', function() {
		for(var i=0; i<menu.length; i++) {
			menu[i].style.color = "#66cc66";
		}
		
	})
		
	


});


	




