const express = require ('express')
const morgan = require('morgan')

//express app
const app = express();

// register view engine
app.set('view engine', 'ejs')

// listen for request
app.listen(3000)

// dummy data
const blogs = [
    {title: 'Mover ups from GameWeek 3', excerpt: 'The GameWeek has come and gone and here are the players with price hikes and price drops'},
    {title: 'Winners and losers from GW 3', excerpt: 'From Saka to Haaland here are the winners and losers from EPL GameWeek 3'},
    {title: 'Scout reports ahead of GW 4', excerpt: 'Here are the scout picks ahead of GameWeek 4'}
]

//Using middleware

// Creating your own middleware

// app.use((req, res, next) => {
//     console.log('New request made')
//     console.log('host: ', req.hostname)
//     console.log('path: ', req.path)
//     console.log('method: ', req.method)
//     next()
// })

// Middleware for static files
app.use(express.static('static'))

// Adding a logger middleware
app.use(morgan('dev'))


// End using middleware

app.get('/', (req, res) => {
    res.render('index', {title: 'Home', blogs})
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})

app.get('/create', (req, res) => {
    res.render('create', {title: 'Create'})
})

// Redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

// 404 page
app.use((req, res)=>{
    res.status(404).render('404', {title: '404'})
})

