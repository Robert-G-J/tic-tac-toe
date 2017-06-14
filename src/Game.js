function Game(player1 = new Player(), player2 = new Player()) {
  this._players = [player1, player2];
  this._player1 = player1;
  this._player1 = player2;
}

Game.prototype.getPlayers = function() {
  return this._players;
};
