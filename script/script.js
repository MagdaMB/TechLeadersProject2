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

	var menuClick = document.querySelectorAll("nav.header__nav > div > a");
	console.log(menuClick)

	for(var i=0; i<menuClick.length; i++) {

		menuClick[i].addEventListener('click', function(event) {
		
		var y = event.target;
			
		
		
		
	})

	}
	
		
	


});


	




