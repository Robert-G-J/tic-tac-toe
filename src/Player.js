function Player(marker) {
  this._marker = marker;
}
Player.prototype.getMarker = function(marker) {
  return this._marker;
}
Player.prototype.placeMarker = function(xPos, yPos) {
  if (xPos > 3 || xPos < 1 || yPos > 3 || yPos < 1 || isNaN(xPos) || isNaN(yPos))
    throw "Invalid coordinate choice";
  else
    var coord = [xPos, yPos];
    return coord;
}
