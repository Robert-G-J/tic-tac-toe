function Board() {
  this._board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
}

Board.prototype.viewBoard = function() {
  return this._board;
}
