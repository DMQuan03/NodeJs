const express = require('express');
const router = express.Router();

const CourseController = require('../app/controllers/CourseController');

// newsController.index

router.get('/create', CourseController.create);
router.post('/store', CourseController.store);
router.get('/:slug', CourseController.show);

module.exports = router;
