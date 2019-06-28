const GameBoard = require('../gameboard');
const Ship = require('../ship');

describe('Class GameBoard:', () => {

  describe('#buildShips method should build ships', () => {
    let board = new GameBoard();

    beforeAll(() => {
      board.buildShips();
    });

    it('builds four single-deck ships', () => {
      expect(board.ships.singleDeckers.length).toBe(4);
    });
    it('builds three two-deck ships', () => {
      expect(board.ships.twoDeckers.length).toBe(3);
    });
    it('builds two three-deck ships', () => {
      expect(board.ships.threeDeckers.length).toBe(2);
    });
    it('builds one four-deck ship', () => {
      expect(board.ships.fourDeckers.length).toBe(1);
    });
  });

});