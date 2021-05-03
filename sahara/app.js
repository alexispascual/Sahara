
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point to directory containing static files
app.use(express.static(path.join(__dirname, 'dist/sahara')));

//catch all other routes to return the index file
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'dist/sahara/index.html'));
});

//get heroku port
const port = process.env.PORT || '5000';
app.set('port', port);


//create server
const server = http.createServer(app);

//listen on port
server.listen(port, () => console.log('Running on port %s', port));