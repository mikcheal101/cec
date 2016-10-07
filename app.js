var express 	= require ('express'); 
var path 		= require ('path');
var routes 		= require ('./routes');

var app			= express ();

app.use (express.static (path.join (__dirname, 'assets')));
app.set ('view engine', 'ejs');
app.listen (process.env.PORT || 3000);

app.get ('/', routes.home);
app.get ('/students', routes.students);
app.get ('/subjects', routes.subjects);
app.get ('/questions', routes.questions);
app.get ('*', routes.noWhere);