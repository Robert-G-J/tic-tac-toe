describe('A game is started', function() {
  var game;
  var player;

  beforeEach(function() {
    game = new Game();
  });

  it("with two players", function() {
    expect(game.players).toContain("Player1")
    expect(game.players).toContain("Player2")
  });
});
   
