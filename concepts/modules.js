// const people = require('./people.js')
// console.log(people.names, people.ages)

// Destructuring
const {names, ages} = require('./people')
console.log(names,ages)


// Built in modules

const os = require('os')
console.log(
    os.machine(),
    os.platform(), 
    os.uptime(),
    os.homedir(),
    os.hostname())