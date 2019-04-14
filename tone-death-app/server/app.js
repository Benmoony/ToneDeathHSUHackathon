// server.js

//tutorials:
//express: https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4 
//sqlite3: http://www.sqlitetutorial.net/sqlite-nodejs/

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
const fs = require('fs');
const fileUpload = require('express-fileupload');
const session = require('express-session');
var FileStore = require('session-file-store')(session);

/* 
process.on('unhandledRejection', (reason, p) => {
   console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
   // application specific logging, throwing an error, or other logic here
 });
 */

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());

let cookie = { secure: false, httpOnly: false };
app.use(session({
   store: new FileStore({ path: './data', ttl: 86400 }),
   secret: "dsfsdfjksldjflwoir23424",
   resave: false,
   saveUninitialized: false,
   cookie: cookie
}));

var port = process.env.PORT || 8080;        // set our port


app.use((req, res, next) => {

   //Allow CORS from react (not safe for production)
      const origin = req.get('origin');
      res.header('Access-Control-Allow-Origin', origin);

   res.header('Access-Control-Allow-Credentials', true);
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, OPTIONS');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');



   // intercept OPTIONS method
   if (req.method === 'OPTIONS') {
      res.sendStatus(204);
   } else {
      next();
   }
});


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', (req, res) => {
   res.json({ message: 'hooray! welcome to our api!' });
});

/*router.get('/getMidi', function(req, res, next) {
	console.log("test");
	res.render('index', { title: 'Express' });
	let result = ["Midi-One", "Midi-Two", "Midi-Three", "Midi-Five"];
	res.send({result: result})
});*/

router.post('/post', function (req, res){
   var data = req.body.input_numbers;
   res.send("got your post: " + data);
});
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server running on port ' + port);

/* GET home page. */
router.post('/getMidi', function(req, res, next) {
	console.log("test");
	res.render('index', { title: 'Express' });
	let result = ["Midi-One", "Midi-Two", "Midi-Three", "Midi-Five"];
	res.send({result: result})
});
