    const express = require('express')
    const app = express()
    var exphbs = require('express-handlebars');

    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

   // // OUR MOCK ARRAY OF OBJECTS
   //  let reviews = [
   //
   //      {title: "Great Review"},
   //      {title: "Next Review"}
   //  ]
    // INDEX
    app.get('/reviews', (req, res) => {
        Review.find().then(reviews => {
            res.render('review-index', { reviews: reviews });
        })
            .catch(error => {
                console.log(error);
            })
    })

    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/rotten-potatoes', { useMongoClient: true });

    const Review = mongoose.model('Review', {
        title: String
    });



    app.listen(3000, () => {
        console.log('App Listening on port 3000!')

    })
