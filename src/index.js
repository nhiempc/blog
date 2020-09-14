const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');
const database = require('./config/db');

database.connect();
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.engine('hbs', handlebars({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, function (error) {
  if (error) {
    console.log('Something went wrong');
  }
  console.log('server is running port:  ' + port);
});
