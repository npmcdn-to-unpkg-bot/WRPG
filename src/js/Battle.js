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
  this.phases = ["Standby", "Move", "Act", "End"];
  this.currentPhase = 0;
}

Battle.prototype.advancePhase = function() {
  var max = this.phases.length - 1;
  if(this.currentPhase == max) {
    this.currentPhase = 0;
  } else {
    this.currentPhase++;
  }
}

Battle.prototype.turnPhase = function() {
  return this.phases[this.currentPhase];
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
