 //https://github.com/Zamy97/Rotten-Potatoes-Project.gits

const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()
const reviewController = require('./controllers/review')
const port = process.env.PORT || 3000


app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }))

reviewController(app);

app.listen(port, console.log(`Running Rotten Potatoes on port ${port}!`));
