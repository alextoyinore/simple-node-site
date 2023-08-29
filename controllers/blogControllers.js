//import Blog model
const Blog = require('../models/blog')

const blogIndex = (req, res) => {
    Blog.find().sort({createdAt: -1})
    .then(result => {
        res.render('index', {title: 'Home', blogs: result})
    })
    .catch(err => console.error(err))
}

const blogCreate = (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
    .then(result => {
        res.redirect('/blogs')
    })
    .catch(err => {
        console.error(err)
    })
}

const blogDetail = (req, res) => {
    const id = req.params.id
    Blog.findById(id)
    .then(result => {
        res.render('blog/detail', {blog: result, title: result.title})
    })
    .catch(err => console.error(err))
}


const blogDelete = (req, res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect: '/blogs'})
    })
    .catch(err => console.error(err))
}

module.exports = {
    blogIndex,
    blogCreate,
    blogDetail,
    blogDelete,
}

