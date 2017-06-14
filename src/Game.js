function Game(player1 = new Player('x'), player2 = new Player('o'), board = new Board()) {
  this._players = [player1, player2];
  this._player1 = player1;
  this._player2 = player2;
  this._board =   board;
}

Game.prototype.getPlayers = function() {
  return this._players;
};

Game.prototype.getBoard = function() {
  var board = this._board;
  return board.viewBoard();
};

Game.prototype.receiveMove = function(coordinate) {
  return coordinate;
}
