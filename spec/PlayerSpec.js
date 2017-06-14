describe("A Player", function() {
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
      var coord = [1,1]
      expect(player.placeMarker(1,1)).toEqual(coord);
    });

    describe("when picking coords, ", function() {
      it("can't pick an x-coord 1 > x > 3", function() {
        expect(function() { player.placeMarker(4,1) }).toThrow("Invalid coordinate choice");
        expect(function() { player.placeMarker(-1,1) }).toThrow("Invalid coordinate choice");
      });
      it("can't pick an y-coord 1 > y > 3", function() {
        expect(function() { player.placeMarker(3,4) }).toThrow("Invalid coordinate choice");
        expect(function() { player.placeMarker(3,0) }).toThrow("Invalid coordinate choice");
      });
    });
  });

});
