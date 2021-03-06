'use strict';

const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;

// const conString = 'postgress://localhost:5432';
// const conString = 'postgres://postgres:postgres@localhost:5432/booklist';
// const client = new pg.Client(conString);

// client.connect();

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/newbook', (request, response) => {
  response.sendFile('newBook.html', { root: './public' });
})

app.get('/updatebook', (request, response) => {
  response.sendFile('updateBook.html', { root: './public' });
})

app.use((request, response) => {
  response.status(404).sendFile('404.html', { root: './public' });
});

app.listen(PORT, () => {
  console.log(`listening on PORT:  ${PORT}`);
});