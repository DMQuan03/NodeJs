const newRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const CoursesRouter = require('./courses');

function routes(app) {
    app.use('/news', newRouter);
    app.use('/me', meRouter);
    app.use('/courses', CoursesRouter);
    app.use('/', siteRouter);
}

module.exports = routes;
