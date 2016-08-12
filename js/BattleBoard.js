/*
 *
 *   Object for keeping track of all characters, objects, and
 *   items on the battlefield.
 *
 *   author: Michael Wood
 *
 */

// BattleBoard Constructor
function BattleBoard(dimX, dimY) {
	this.dimX = dimX;
	this.dimY = dimY;

	this.createBlankBoard();
}

// BEGIN GETTERS AND SETTERS
BattleBoard.prototype.getDimX = function() {
	return this.dimX;
}

BattleBoard.prototype.getDimY = function() {
	return this.dimY;
}

BattleBoard.prototype.getContents = function() {
	return this.contents;
}

BattleBoard.prototype.getContentsAt = function(x, y) {
		return this.contents[x][y]
	}
	// END GETTERS AND SETTERS

BattleBoard.prototype.createBlankBoard = function() {
	var board = [];
	for (x = 0; x < this.dimX; x++) {
		var empty = [];
		for (y = 0; y < this.dimY; y++) {
			empty.push("E");
		}
		board.push(empty);
	}
	this.contents = board;
}

BattleBoard.prototype.emptySpace = function(x, y) {
	return this.contents[y][x] === "E";
}

BattleBoard.prototype.placeCharacter = function(character) {
	var x = character.getPosX();
	var y = character.getPosY();
	if (this.contents[y][x] === "E") {
		this.contents[y][x] = character.getID();
	} else {
		console.log("Error: There is already a person or object in this spot!");
	}
}

BattleBoard.prototype.print = function() {
	var board = this.getContents();
	for (x = 0; x < this.dimX; x++) {
		var out = "";
		for (y = 0; y < this.dimY; y++) {
			out += board[x][y];
		}
		console.log(out);
	}
}
