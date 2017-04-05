var app = require('express')();
var path = require('path');

app.use(express.static(path.join(__dirname, 'app'));
app.listen(process.env.PORT);
