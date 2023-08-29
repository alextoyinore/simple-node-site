const express = require ('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
// import blog routes
const blogRoutes = require('./routes/blogRoutes')


//express app
const app = express();

// register view engine
app.set('view engine', 'ejs')

// MongoDB URI
const dbURI = "mongodb+srv://aore8030:test@cluster0.zdlkh9y.mongodb.net/simple_node_site?retryWrites=true&w=majority"
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(3000))
.catch(err => console.error(err))

// listen for request
// Done inside the mongoose connect function above

// Mongoose and mongo sandbox routes
// app.get('/create-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'Test blog 2',
//         excerpt: 'the excerpt of my test blog 2',
//         body: 'This is the body of my test blog 2'
//     })

//     blog.save()
//     .then(result => {
//         res.send(result)
//     }).catch(err => {
//         console.error(err)
//     })
// })

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then(result => {
//         res.send(result)
//     })
//     .catch(err => console.error(err))
// })

// app.get('/single-blog', (req, res) => {
//     Blog.findById('64ec88851076600c8c52fc71')
//     .then(result => {
//         res.send(result)
//     })
//     .catch(err => console.error(err))
// })


//Using middleware

// Creating your own middleware

// app.use((req, res, next) => {
//     console.log('New request made')
//     console.log('host: ', req.hostname)
//     console.log('path: ', req.path)
//     console.log('method: ', req.method)
//     next()
// })

// Middleware for attaching form data to request object
app.use(express.urlencoded({extended: true}))

// Middleware for static files
app.use(express.static('public'))

// Adding a logger middleware
app.use(morgan('dev'))


// End using middleware


// page routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('blog/about', {title: 'About'})
})

app.get('/create', (req, res) => {
    res.render('blog/create', {title: 'Create'})
})

// Adding a scope e.g. /blogs will allow us to remove /blogs
// from the routes in the routes file
app.use('/blogs', blogRoutes)

// Redirect
// app.get('/about-us', (req, res) => {
//     res.redirect('/about')
// })

// 404 page
app.use((req, res)=>{
    res.status(404).render('404', {title: '404'})
})

