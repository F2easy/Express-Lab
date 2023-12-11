/// Load express
const express = require('express');
const path = require('path');

// require the Student "database"
const StudentDb = require('./data/student-db');

// create our express app
const app = express();

// configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// mount middleware(app.use)

// mount routes

//Define a "root" directly on app
// Tommorow, we'll use best practice routing
app.get('/', function(req, res){
  // Path MUST start with a leading slash
  res.redirect('/home');
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function (){
  console.log('listening on port 3000');
});

// defining my own route

app.get('/students');

app.get('/home', function(req, res) {
  // Never begin the name of the template
  // with a forward slash
  res.render('home.ejs')
});

app.get('/students', function(req, res){
  const students = StudentDb.getAll();
  res.render('students/index', {students});
});


app.listen(3000, function(){
  console.log('Listening on port 3000 the 2nd part')
});

