class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    Show(req, res) {
        res.send('123');
    }
}

module.exports = new NewsController();
