describe("Player", function() {
  var player;
  var marker;

  beforeEach(function() {
    marker = 'x';
    player = new Player(marker);
  });

  describe("can", function() {
    it("have a marker", function() {
      expect(player.getMarker()).toEqual(marker);
    });

    it("pick a coordinate", function() {
      var coord = [0,0]
      expect(player.placeMarker(0,0)).toEqual(coord);
    });
  });

});
