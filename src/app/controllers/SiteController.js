const Course = require('../modules/Course');

class SiteController {
    // [GET] /
    index(req, res) {
        // res.render('home');
        Course.find({}, function (err, Courses) {
            if (!err) {
                res.json(Courses);
            } else {
                res.status(400).json({ error: 'ERROR!!!' });
            }
        });
    }

    // [GET] /search
    search(req, res) {
        res.send('search');
    }
}

module.exports = new SiteController();
