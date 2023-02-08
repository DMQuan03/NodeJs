const newRouter = require('./news');
const siteRouter = require('./site');
const CoursesRouter = require('./courses');

function routes(app) {
    app.use('/news', newRouter);
    app.use('/courses', CoursesRouter);
    app.use('/', siteRouter);
}

module.exports = routes;
