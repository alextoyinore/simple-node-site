const fs = require('fs')

const readStream = fs.createReadStream('./file.txt', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./file2.txt')

// Reading files with stream
/*
readStream.on('data', (chunk) => {
    console.log('---NEW CHUNK---')
    console.log(chunk)
    writeStream.write('\nNEW CHUNK\n')
    writeStream.write(chunk)
}) */
 
// Piping
readStream.pipe(writeStream)
