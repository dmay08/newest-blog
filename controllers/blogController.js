const blogPost = require('../models/Blog')

module.exports = blogController = {

    index: function(req, res, next) {
        res.render('blogPosts/index', { blogPosts: blogPost.getAllPosts() })
    },

    new: function(req, res, next) {
        res.render('blogPosts/new')
    },

    create: function(req, res, next) {
        let data = req.body
        blogPost.addPost(data.name, data.body)
        res.redirect('/blogPosts')
    },

    // show: function(req, res, next) {
        
    // },

    // update: function(req, res, next) {
        
    // },

    // destroy: function(req, res, next) {
        
    // },
}