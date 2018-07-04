// require express
const express = require('express');
// require cors to avoid the cors issue with post data
var cors = require('cors')
// set the app 
const app = express();
// set the cors in the app
app.use(cors())
// require body parser for the json results
var bodyParser = require('body-parser');
// use body parser
app.use(bodyParser.json());

// listener to 8000 port for the server
app.listen(8000, () => {
  console.log('Server app listening on port 8000!')
});

// get result for the / page
app.get('/', (req, res) => {
  res.send('This is a node Server with Express! Have a nice day!')
});

// set the credentials for login
const credentials = {
	'username' : 'admin',
	'password' : 'password123'
}

// redirect to home if you reach with get
app.get('/checklogin', function(req, res) {
	res.redirect('/');
});

// post data for login
app.post('/checklogin', function(req, res) {

	// get data from post
    var username = typeof req.body.username != 'undefined'?req.body.username:false;
    var password = typeof req.body.password != 'undefined'?req.body.password:false;

    // check against credentials
    let resData = {};
    if(username.length > 0 && password.length >0) {
    	let error = false;
    	let error_message = 'There was an issue with ';
    	let error_fields = [];
    	// check username
    	if(username  !== credentials.username){
    		error_message += 'username field' ;
    		error_fields.push('u');
    		error = true;
    	}
    	// check password
    	if(password !== credentials.password){
    		error_message += error?' and password field':'password field';
    		error_fields.push('p');
    		error = true;
    	}
    	// get result
    	resData = {
    		error : error,
    		message: error?error_message:'You are loggedin',
    		fields : error_fields
    	};
    } else {
    	// get error result
    	resData = {
    		error : true,
    		message: 'You have some issue with credentials',
    		fields : ['u','p']
    	};
    }
    // return result
    res.send(JSON.stringify(resData));
});