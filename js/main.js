// login credentials
var credentials = {
	'username': 'admin',
	'password': 'password123'
};

// main vars
var form  = document.getElementsByTagName('form')[0];
var username = document.getElementById('login_username');
var password = document.getElementById('login_password');
var submit = document.getElementById('submit');
var error = document.querySelector('.error-message');

// submit local form 
form.addEventListener("submit", function (event) {
	// We prevent the form from being sent
	event.preventDefault();
	// disable submit button here.
	submit.disabled = true;
	// Each time the user tries to send the data, we set first the default values
	var noissue = true;
	error.innerHTML = '';
	var error_message = 'There was an issue with ';
	// check username if the length is less than 1 (means empty) or it's not match with the credentials
	if (username.value.length < 1 || username.value != credentials.username) {
		// add error in the field class to enable the styling
		username.parentNode.classList.add('error');
		// create the error message
		error.innerHTML += error_message + 'username field';
		// set noissue var as false so we have an issue
		noissue = false;
		// enable submit button here.
		submit.disabled = false;
	}else{
		// else remove error class from the field
		username.parentNode.classList.remove('error');
	}
	// check password if the length is less than 1 (means empty) or it's not match with the credentials
	if (password.value.length < 1 || password.value != credentials.password) {
		// add error in the field class to enable the styling
		password.parentNode.classList.add('error');
		// update the error message
		error.innerHTML += (error.innerHTML == '')?error_message + 'password field':' and password field';
		// set noissue var as false so we have an issue
		noissue = false;
		// enable submit button here.
		submit.disabled = false;
	}else{
		// else remove error class from the field
		password.parentNode.classList.remove('error');
	}

	// if all the validation pass
	if(noissue) {
		// add success class in error field
		error.classList.add('success');
		// show a good message
		error.innerHTML = 'All went fine you will now redirect';
		// wait 3 sec and then redirect to a page.
		setTimeout(function(){
			window.location = 'https://google.com';
		}, 3000);
	}

}, false);

// add event listener for blur input field
form.addEventListener("blur", function( event ) {
	// check if value is empty then remove class error and has-val
	if(event.target.value != ""){
		event.target.parentNode.classList.remove('error');
		event.target.classList.add('has-val');
	}
	else {
		// else add clacss has-val
		event.target.classList.remove('has-val');
	}
}, true);

