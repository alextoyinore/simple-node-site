// lodash
const _ = require('lodash')

const num = _.random(0, 20)

const greet = _.once(() =>{
    console.log('testing lodash once')
})

module.exports = {num, greet}
