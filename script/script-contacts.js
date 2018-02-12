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

//błędy w formularzu

	var sendBtn = document.getElementById("send");
	var formName = document.getElementById("myForm").name;
	var formEmail = document.getElementById("myForm").email;
	var formPhone = document.getElementById("myForm").phone;
	var info = document.getElementById("info");
	var clearBtn = document.getElementById("clear");

	
	sendBtn.addEventListener('click', function() {

		if(formName.value == "Name: ") {
			info.innerHTML = "Name is empty";
		} else {
			return false;
		}









		/*if(formName.value == "Name: ") {
			return formName.value = "Name is empty";
		} else {
			return false;
		}
		
		if(formEmail.value == "Email: ") {
			return formEmail.value = "Email is empty";
		} else {
			return false;
		}

		if(formPhone.value == "Phone: ") {
			return formPhone.value = "Phone is empty";
		} else {/
			dacdesass5
			return false;
		}*/
	})


});


	




