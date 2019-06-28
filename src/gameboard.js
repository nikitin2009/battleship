const Ship = require('./ship');

class GameBoard {
  constructor() {
    // firs digit
    this.board = {
      a: ['000', '000', '000', '000', '000', '000', '000', '000', '000', '000'],
      b: ['000', '000', '000', '000', '000', '000', '000', '000', '000', '000'],
      c: ['000', '000', '000', '000', '000', '000', '000', '000', '000', '000'],
      d: ['000', '000', '000', '000', '000', '000', '000', '000', '000', '000'],
      e: ['000', '000', '000', '000', '000', '000', '000', '000', '000', '000'],
      f: ['000', '000', '000', '000', '000', '000', '000', '000', '000', '000'],
      g: ['000', '000', '000', '000', '000', '000', '000', '000', '000', '000'],
      h: ['000', '000', '000', '000', '000', '000', '000', '000', '000', '000'],
      i: ['000', '000', '000', '000', '000', '000', '000', '000', '000', '000'],
      j: ['000', '000', '000', '000', '000', '000', '000', '000', '000', '000']
    };
    this.ships = {
      singleDeckers: [],
      twoDeckers: [],
      threeDeckers: [],
      fourDeckers: []
    };
  }

  buildShips() {
    for (let i = 0; i < 4; i++) {
      let singleD = new Ship(1);
      this.ships.singleDeckers.push(singleD);
    }
    for (let i = 0; i < 3; i++) {
      let twoD = new Ship(2);
      this.ships.twoDeckers.push(twoD);
    }
    for (let i = 0; i < 2; i++) {
      let threeD = new Ship(3);
      this.ships.threeDeckers.push(threeD);
    }
    let fourD = new Ship(4);
    this.ships.fourDeckers.push(fourD);
  }

  placeShipsOnBoard() {
    this.board = {
      a: ['000', '000', '000', '000', '000', '000', '000', '000', '000', '000'],
      b: ['000', '000', '000', '000', '000', '200', '201', '000', '000', '000'],
      c: ['000', '100', '000', '000', '000', '000', '000', '000', '000', '120'],
      d: ['000', '000', '000', '000', '1_3', '000', '000', '000', '000', '000'],
      e: ['000', '000', '000', '000', '000', '000', '000', '000', '000', '000'],
      f: ['4_000', '4_0_1', '4_0_', '4_0', '000', '000', '000', '3_1', '000', '000'],
      g: ['000', '000', '000', '000', '000', '000', '000', '3_1', '000', '000'],
      h: ['000', '000', '000', '3_0', '000', '2_1', '000', '3_1', '000', '1_1'],
      i: ['000', '2_2', '000', '3_0', '000', '2_1', '000', '000', '000', '000'],
      j: ['000', '2_2', '000', '3_0', '000', '000', '000', '000', '000', '000']
    };
  }
}

module.exports = GameBoard;