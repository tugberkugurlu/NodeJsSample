// ## Middleware
// A short guide to Connect Middleware: http://stephensugden.com/middleware_guide/
// Express.js Middleware Demystified: http://blog.safaribooksonline.com/2014/03/10/express-js-middleware-demystified/

// ## MVC
// TODO: Add resources here...

    // #### Routes
    // TODO: Add resources here...

    // #### Views
    // TODO: Add resources here...

        // ###### Jade View Engine
        // TODO: Add resources here...

// ## Static Files
// TODO: Add resources here...

    // #### Less Integration
    // TODO: Add resources here...

var http = require('http'),
    express = require('express'),
    app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// logger middleware...
app.use(function(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/help', function (req, res) {
    res.send('Nope.. nothing to see here');
});

app.get('/hello.txt', function (req, res) {
    res.set('Content-Type', 'text/plain');
    res.send('Hello World');
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});