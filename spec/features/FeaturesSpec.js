describe('Feature Tests:', function() {
  var game;
  var player;

  beforeEach(function() {
    game = new Game();
  });

  describe("Players", function() {
    it("can place a marker on a vacant field", function() {
      console.log(game);
      console.log(game._player1);
      game._player1.placeMarker(1,1);
      expect(game.getBoard()).toEqual([
        ['x', 0, 0],
        [ 0,  0, 0],
        [ 0,  0, 0]
      ]);
    });
  });

});
