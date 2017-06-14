describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should have players", function() {
    var players = game.getPlayers();
    expect(players).not.toBe(null);
  });
  it("should have two players", function() {
    var player1 = new Player();
    var player2 = new Player();
    var players = game.getPlayers();
    console.log(players);
    expect(players).toEqual([player1, player2])
  });
  it("should have a board", function() {
    var board = new Board();
    console.log(game.getBoard())
    expect(game.getBoard()).toEqual(board.viewBoard());
  });
});
