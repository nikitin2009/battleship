class Ship {
  constructor(length) {
    this.length = length;
    this.hitDecks = [];
    for (let i = 0; i < length; i++) {
      this.hitDecks[i] = false;
    };
  }

  get sunk() {
    return this.hitDecks.every( i => i);
  }

  hit(i) {
    this.hitDecks[i] = true;
  }
}

module.exports = Ship;