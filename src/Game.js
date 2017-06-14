function Game(player1 = new Player(), player2 = new Player(), board = new Board()) {
  this._players = [player1, player2];
  this._player1 = player1;
  this._player1 = player2;
  this._board =   board;
}

Game.prototype.getPlayers = function() {
  return this._players;
};

Game.prototype.getBoard = function() {
  var board = this._board;
  return board.viewBoard();
};
