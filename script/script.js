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


});


	




