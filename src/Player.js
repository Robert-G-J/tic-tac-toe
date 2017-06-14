function Player(marker) {
  this._marker = marker;
}
Player.prototype.getMarker = function(marker) {
  return this._marker;
}
