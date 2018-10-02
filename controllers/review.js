const Review = require('../models/review');

module.exports = function(app) {

    app.get('/', (req, res) => {
        Review.find()
        .then(review => {
            res.render('reviews-index', {review: review});
        }).catch(error => {
            console.log("hello /")
            console.log(error);
        });
    });

    app.get('/reviews/new', (req, res) => {
        res.render('reviews-new');
    });

    app.post('/reviews', (req, res) => {
        Review.create(req.body)
        .then(review => {
            res.redirect(`/reviews/${review._id}`);
        }).catch(error => {
            console.log("vantaggio /reviews")
            console.log(error.message);
        });
    });

    app.get('/reviews/:id', (req, res) => {
        Review.findById(req.params.id)
        .then(review => {
            res.render('reviews-show', {review: review});
        }).catch(error => {
            console.log("Chips not working")
            console.log(error);
        });
    });

    app.get('/reviews/:id/edit', (req, res) => {
        Review.findById(req.params.id)
        .then(review => {
            res.render('reviews-edit', {review: review});
        }).catch(error => {
            console.log('Error');
        });
    });

    app.put('/reviews/:id', (req, res) => {
        Review.findByIdAndUpdate(req.params.id, req.body)
        .then(review => {
            res.redirect(`/reviews/${review._id}`);
        }).catch(error => {
            console.log("Mongod is confusing")
            console.log(error);
        });
    });

    app.delete('/reviews/:id', (req, res) => {
        Review.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/');
        });
    });

}
