document.addEventListener('DOMContentLoaded', function () {
/*

	var btn = document.getElementById("green");

	btn.addEventListener('mouseover', function() {
		btn.style.backgroundColor = "#66cc66";
		btn.style.color = "#FFFFFF";
	});

	btn.addEventListener('mouseout', function() {
		btn.style.backgroundColor = "transparent";
		btn.style.color = "grey";
	})
	
for (var i=0; i<btn.length; i++) {
	var btn = document.querySelectorAll("button");
	btn[i].addEventHandler('mouseover', function(e) {
		var clickedBtn = e.target;
		console.log(clickedBtn)
	})
}

*/

	var x = document.querySelectorAll("button.section__text--button");

	for(var i=0; i<x.length; i++) {
		x[i].addEventListener('mouseover', function(event) {

			var y = event.target;

			y.style.backgroundColor = "#66cc66";
			y.style.color = "#FFFFFF";
		})

		x[i].addEventListener('mouseout', function(event) {

			var y = event.target;

			y.style.backgroundColor = "transparent";
			y.style.color = "grey";
		})

	}
	


});


	




