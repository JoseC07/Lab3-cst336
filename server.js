const express = require('express')
const app = express()
var port = process.env.PORT || 8080;
var path = require('path');

app.use(express.static(path.join(__dirname, 'topics')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/topics/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))