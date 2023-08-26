// Global objects

// console.log(global)

console.log('Immediate')

globalThis.setTimeout(()=>{
    console.log('Much later')
    clearInterval(int)
}, 3000)

var count = 0

const int = setInterval(()=>{
    console.log(count++)
},1000)

console.log(__dirname)
console.log(__filename)