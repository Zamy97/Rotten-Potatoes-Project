    const express = require('express')
    const app = express()
    var exphbs = require('express-handlebars');

    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

   // OUR MOCK ARRAY OF OBJECTS
    let reviews = [

        {title: "Great Review"},
        {title: "Next Review"}
    ]
    // INDEX
    app.get('/reviews', (req, res) => {
            res.render('review-index', { reviews: reviews });
    })

    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/rotten-potatoes', { useMongoClient: true });



    app.listen(3000, () => {
        console.log('App Listening on port 3000!')

    })
