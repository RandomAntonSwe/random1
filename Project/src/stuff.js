class Stuff {
  constructor (item) {
    this.item = item
  }

  dice () {
    var die = Math.floor(Math.random() * 6) + 1
    console.log(die)
  }
}

module.exports = Stuff
