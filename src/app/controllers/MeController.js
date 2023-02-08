const Course = require('../modules/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /search
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
