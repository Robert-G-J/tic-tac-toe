describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should have two players", function() {
    var players = game.getPlayers();
    expect(players.length).not.toBe(null);
  });
});
