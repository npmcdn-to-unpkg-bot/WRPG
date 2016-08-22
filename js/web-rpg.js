"use strict";
;function Skill() {

}
;function Class() {

}
;function ClassTree() {
  
}
;function Equipment() {
  
}
;/*
 *
 *   Main object for all characters in the game to keep track of
 *   all stats and perform all battle actions.
 *
 *   author: Michael Wood
 *
 */

// Character Constructor
function Character(id, name, race, level, maxHealth, maxEnergy, maxMana, strength, agility, intelligence, charisma, luck, posx, posy) {
	this.character_id = id;
	this.character_name = name;
	this.character_race = race;
	this.character_level = level;
	this.character_health = maxHealth;
	this.character_max_health = maxHealth;
	this.character_energy = maxEnergy;
	this.character_max_engery = maxEnergy;
	this.character_mana = maxMana;
	this.chracter_max_mana = maxMana;
	this.character_strength = strength;
	this.character_agility = agility;
	this.character_intelligence = intelligence;
	this.character_charisma = charisma;
	this.character_luck = luck;
	this.initiative = 0;
	this.posx = posx;
	this.posy = posy;
}

Character.prototype.print = function() {
	console.log("Hi, my name is " + this.character_name + "!");
}
;/*
 *
 *   Object for storing groups of characters for use in battle
 *   and on menus
 *
 *   author: Michael Wood
 *
 */

function Roster(id, characters) {
	this.roster_id = id;
	this.characters = characters;
}

Roster.prototype.addCharacter = function(character) {
		this.characters.push(character);
}

Roster.prototype.removeCharacter = function(character) {
	var index = this.characters.indexOf(character);
	if(index > -1) {
		this.characters.splice(index, 1);
	}
}
;/*
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
;/*
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
	for (var x = 0; x < this.dimX; x++) {
		var empty = [];
		for (var y = 0; y < this.dimY; y++) {
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
;/*
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
;function addElement(content, extraClass, target) {
  var newElement = document.createElement('div');
  newElement.setAttribute('class', extraClass);
  newElement.innerHTML = content;
  document.getElementById(target).appendChild(newElement);
}
 function clearElement(id) {
   document.getElementById(id).innerHTML = '';
 }
;// Eventually the main controller. For now a bunch of console logging.

//Constructor Templates
//Character(id, name, race, level, maxHealth, maxEnergy, maxMana, strength, agility, intelligence, charisma, posx, posy)
//BattleBoard(dimX, dimY)

var testCharacter1 = new Character(1, "Rupert", "Human", 1, 100, 50, 25, 9, 7, 4, 5, 3, 0, 0);
var testCharacter2 = new Character(2, "Ignatius", "Human", 1, 100, 50, 25, 7, 9, 4, 5, 5, 0, 0);
var testRoster = new Roster(1, [testCharacter1, testCharacter2]);

var testBattle = new Battle(new BattleBoard(10, 10), [testRoster]);

testBattle.board.placeCharacter(testCharacter1);

testBattle.board.moveCharacter(testCharacter1, 2, 3);

var boardHTML = testBattle.board.generateHTML();

addElement(boardHTML, 'battleBoard', 'output');
