/*
 *
 *   Object to act as main controller for all battle logic
 *   and objecs
 *
 */

function Battle(board, rosters, currentTurn) {
  this.board = board;
  this.rosters = rosters;
  this.currentTurn = currentTurn;
}

Battle.prototype.advanceTurn = function() {
  var max = this.rosters.length;
  if(this.currentTurn == max) {
    this.currentTurn = 1;
  } else {
    this.currentTurn++;
  }
}

function detectClick(domEl) {
  var clickedX = domEl.dataset.xpos;
  var clickedY = domEl.dataset.ypos;
  alert("Cell clicked \n X-Coor: " + clickedX + "\n Y-Coor: " + clickedY);
}
