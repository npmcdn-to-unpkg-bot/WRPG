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

BattleBoard.prototype.createBlankBoard = function() {
	var board = [];
	for (x = 0; x < this.dimX; x++) {
		var empty = [];
		for (y = 0; y < this.dimY; y++) {
			empty.push(new BoardCell("E", "Grass", x, y));
		}
		board.push(empty);
	}
	this.board_cells = board;
}

BattleBoard.prototype.getContentsAt = function(x, y) {
		return this.board_cells[x][y];
	}

BattleBoard.prototype.emptySpace = function(x, y) {
	return this.board_cells[y][x].contents === "E";
}

BattleBoard.prototype.clearSpace = function(x, y) {
	this.board_cells[y][x].contents = "E";
}

BattleBoard.prototype.placeCharacter = function(character) {
	var x = character.posx;
	var y = character.posy;
	if (this.emptySpace(x, y)) {
		this.board_cells[y][x].contents = character.character_id;
	} else {
		console.log("Error: There is already a person or object in this spot!");
	}
}

BattleBoard.prototype.print = function() {
	var board = this.board_cells;
	for (x = 0; x < this.dimX; x++) {
		var out = "";
		for (y = 0; y < this.dimY; y++) {
			out += board[x][y];
		}
		console.log(out);
	}
}

BattleBoard.prototype.moveCharacter = function(character, xOff, yOff) {
	var curx = character.posx;
	var cury = character.posy;
	if(this.emptySpace(curx + xOff, cury + yOff)) {
		this.clearSpace(curx, cury);
		character.posx += xOff;
		character.posy += yOff;
		this.placeCharacter(character);
	}
}

BattleBoard.prototype.generateHTML = function() {
	var out = '';
	var cellWidth = 100/this.dimX + "%";
	for(var x = 0; x < this.dimX; x++) {
		out += '<div class="row">'
		for(var y = 0; y < this.dimY; y++) {
			var cellContent = this.getContentsAt(x, y).contents;
			out += '<div class="cell" data-xpos="' + y + '" data-ypos="' + x + '" onclick="detectClick(this)" style="width: ' + cellWidth + '"><div class="contents">' + cellContent + '</div></div>';
		}
		out += '</div>';
	}
	return out;
}
