const Ship = require('../ship');

describe('Class Ship:', () => {

  describe('instance method #hit:', () => {
    it('should mark corresponding deck as hit', () => {
      let fourDecker = new Ship(4);
      fourDecker.hit(3);
      expect(fourDecker.hitDecks[3]).toBe(true);
    });
  });

  describe('instance property #sunk:', () => {
    it('should return true when all the decks have been hit', () => {
      let threeDecker = new Ship(3);
      threeDecker.hit(0);
      threeDecker.hit(1);
      threeDecker.hit(2);
      expect(threeDecker.sunk).toBe(true);
    });
    it('should return false when at least one deck is not hit', () => {
      let threeDecker = new Ship(3);
      threeDecker.hit(0);
      threeDecker.hit(1);
      expect(threeDecker.sunk).toBe(false);
    });
    it('should return false when all the decks are not hit', () => {
      let threeDecker = new Ship(3);
      expect(threeDecker.sunk).toBe(false);
    });
  });

});