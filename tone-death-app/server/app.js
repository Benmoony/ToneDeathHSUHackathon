var express = require('express');
const bodyParser = require('body-parser');
const app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* GET home page. */
router.post('/getMidi', function(req, res, next) {
	console.log("test");
	res.render('index', { title: 'Express' });
	let result = ["Midi-One", "Midi-Two", "Midi-Three", "Midi-Five"];
	res.send({result: result})
});

app.use("/", router);
app.listen(3001, 'localhost');