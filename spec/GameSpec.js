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
    var players = game.getPlayers();
    console.log(players);
    expect(players).toEqual([game._player1, game._player2])
  });
  it("should have a board", function() {
    var board = new Board();
    expect(game.getBoard()).toEqual(board.viewBoard());
  });
  it("should receive a move", function() {
    var player1 = game._player1;
    console.log(player1);
    expect(game.receiveMove(player1.placeMarker(1,1))).toEqual([1,1]);
  });
  
});
