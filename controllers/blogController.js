const BlogPost = require('../models/Blog')

module.exports = blogController = {

    index: function (req, res, next) {
        res.render('blogPosts/index', { blogPosts: BlogPost.getAllPosts() })
    },

    new: function (req, res, next) {
        res.render('blogPosts/new')
    },

    create: function (req, res, next) {
        let data = req.body
        BlogPost.addPost(data.name, data.body)
        res.redirect('/blogPosts')
    },

    show: function (req, res, next) {
        res.render('blogPosts/show', { blogPost: BlogPost.getPost(req.params.id), id: req.params.id })
    },

    edit: function (req, res, next) {
        // send the populated update form
        blogPost = BlogPost.getPost(req.params.id)
        res.render('blogPosts/edit', { blogPost: blogPost, id: req.params.id })
    },

    update: function (req, res, next) {
        let data = req.body
        BlogPost.updatePost(req.params.id, data.name, data.body)
        res.redirect(`/blogPosts/${req.params.id}`)
    },

    destroy: function(req, res, next) { 
        BlogPost.deletePost(req.params.id)
        res.redirect('/blogPosts')
    },
}