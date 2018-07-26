const Stuff = require('./src/stuff')

let random = new Stuff('Item One')
console.log(random)
console.log(random.item)
random.dice()
