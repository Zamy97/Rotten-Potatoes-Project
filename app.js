 https://github.com/Zamy97/Rotten-Potatoes-Project.git

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const reviewController = require('./controllers/reviews');
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

reviewController(app);

app.listen(port, console.log(`Running Rotten Potatoes on port ${port}!`));
