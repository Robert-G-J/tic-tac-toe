function Player(marker) {
  this._marker = marker;
}
Player.prototype.getMarker = function(marker) {
  return this._marker;
}
Player.prototype.placeMarker = function(xPos, yPos) {
  var coord = [xPos, yPos];
  return coord;
}
