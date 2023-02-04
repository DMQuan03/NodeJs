const newRouter = require('./news')
const siteRouter = require('./site')

function routes(app) {
    app.use('/news', newRouter)
    app.use('/' , siteRouter)
}

module.exports = routes
