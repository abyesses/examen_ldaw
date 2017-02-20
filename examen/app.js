var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({
       defaultLayout:'main',
       helpers: {
           section: function(name, options){
               if(!this._sections) this._sections = {};
               this._sections[name] = options.fn(this);
               return null;
} }
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next){
	res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
	next();
});
app.use(require('body-parser')());
app.get('/', function(req, res){
	res.render('choose');
});
app.get('/cesar', function(req, res){
	res.render('cesar',{pageTestScript: '/qa/test_result.js'});
});
app.get('/vigenere', function(req, res){
	res.render('vigenere');
});

app.post('/process', function(req, res){
	if(req.body.code)
	res.render('result',{texto: req.body.texto, desfase: req.body.desfase});
	if(req.body.decode)
	res.render('result_decode',{texto: req.body.texto, desfase: req.body.desfase});
});

app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' +
	app.get('port') + '; press Ctrl-C to terminate.' );
});