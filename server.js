const http = require('http')
const fs = require('fs')
const {num, greet} = require('./concepts/lodash-learn')

const server = http.createServer((req, res)=>{
    // Set Header content type
    res.setHeader('Content-Type', 'text/html')

    var path = './views'+req.url+'.html'

    // console.log(path)

    if(!fs.existsSync(path) && req.url != '/'){
        path = './views/404.html'
        res.statusCode = 404
    }else if(req.url === '/'){
        path = './views/index.html'
        res.statusCode = 200
    }else{
        res.statusCode = 200
    }

    // Redirecting
    // This is how to redirect a broken link
    
    if(req.url === '/about-us'){
        res.statusCode = 301
        res.setHeader('Location', '/about')
        res.end()
    }
    
    // send an html file
    fs.readFile(path, (err,data)=>{
        if(err) throw err
        res.write(data)
        res.end()
    })
})

const port = 3000
const host = 'localhost'

server.listen(port, host, ()=>{
    console.log('Server listening on ' + port)
})

