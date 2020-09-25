var express = require('express');
var app = express();
app.use(express.static('./dist/my-spacex/browser'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/my-spacex/browser'});
});
app.listen(process.env.PORT || 8080);
