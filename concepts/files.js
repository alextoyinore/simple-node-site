const fs = require('fs')
const buffer = require('buffer')

// Reading files
// readFile is an asynchronus process
fs.readFile('./people.js', (err, data)=>{
    if(err) throw err
    console.log(data.toString())
})

// Write files
const text = 'Just wrote to file'
fs.writeFile('./file.txt', text, (err)=>{
    if(err) throw err
    console.log('file was written to')
})


// Making directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
        if(err) throw err
        console.log('folder created')
    })
}else{
    // Deleting directories
    fs.rmdir('./assets', (err)=>{
        if(err) throw err
        console.log('folder deleted')
    })
}

// Deleting files
if(fs.existsSync('./file.txt')){
    fs.unlink('./file.txt', (err) => {
        if(err) throw err
        console.log('file deleted!')
    })
}

  