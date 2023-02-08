const Course = require('../modules/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /courses/slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }
    create(req, res, next) {
        res.render('courses/create');
    }

    // Post
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`;
        const course = new Course(formData);
        course.save().then(() => res.redirect('/'));
        // .cath(() => {
        // console.log('loi')
        // })
    }
}

module.exports = new CourseController();
