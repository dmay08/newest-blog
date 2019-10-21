var express = require('express')
var router = express.Router()
var blogPosts = require('../controllers/blogController')

router.get('/blogPosts', blogPosts.index)
router.get('/blogPosts/new', blogPosts.new)
router.post('/blogPosts', blogPosts.create)
router.get('/blogPosts/:id', blogPosts.show);
router.get('/blogPosts/:id/edit', blogPosts.edit);
router.put('/blogPosts/:id', blogPosts.update);
router.delete('/blogPosts/:id', blogPosts.destroy);

module.exports = router