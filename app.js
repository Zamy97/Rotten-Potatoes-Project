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




    app.get('/reviews', (req, res) => {
            res.render('review-index', { reviews: reviews });
    })





    app.listen(3000, () => {
        console.log('App Listening on port 3000!')

    })
