describe("Board", function() {
  var board;

  beforeEach(function() {
    board = new Board();
  });

  it("has a clear board", function() {
    expect(board.viewBoard()).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]); 
  });
});
