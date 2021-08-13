const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const expressValidator = require('express-validator');

//Port
const port = 3000;

//init app
const app = express();

//view Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));


//Express Messages
app.use(require('connect-flash')());
app.use((req, res, next)  => {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//Express validator


app.get('/', (req, res) =>{
    res.send('Hello');
});

app.listen(port, () =>{
    console.log('Server started on port '+port);
});