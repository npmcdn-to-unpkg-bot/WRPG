/*
*
*   Object for storing cell information that will be used
*   to create a BattleBoard
*
*/

function BoardCell(contents, terrain) {
  this.contents = contents;
  this.terrain = terrain;
}

// BEGIN GETTERS AND SETTERS
BoardCell.prototype.getContents = function() {
  return this.contents;
}

BoardCell.prototype.getTerrain = function() {
  return this.terrain;
}

BoardCell.prototype.setContents = function(contents) {
  this.contents = contents;
}

BoardCell.prototype.setTerrain = function(terrain) {
  this.terrain = terrain;
}
// END GETTERS AND SETTERS
