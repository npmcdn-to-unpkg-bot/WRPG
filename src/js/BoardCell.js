/*
*
*   Object for storing cell information that will be used
*   to create a BattleBoard
*
*/

function BoardCell(contents, terrain, xcoor, ycoor) {
  this.contents = contents;
  this.terrain = terrain;
  this.xcoor = xcoor;
  this.ycoor = ycoor;
}
