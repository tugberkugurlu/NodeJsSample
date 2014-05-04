var http = require('http'),
    express = require('express'),
    app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/hello.txt', function(req, res) {
    res.set('Content-Type', 'text/plain');
    res.send('Hello World');
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});