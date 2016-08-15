/*
 *
 *   Main object for all characters in the game to keep track of
 *   all stats and perform all battle actions.
 *
 *   author: Michael Wood
 *
 */

// Character Constructor
function Character(id, name, race, level, maxHealth, maxEnergy, maxMana, strength, agility, intelligence, charisma, posx, posy) {
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
	this.posx = posx;
	this.posy = posy;
}

// BEGIN GETTERS AND SETTERS
Character.prototype.getID = function() {
	return this.character_id;
}

Character.prototype.getName = function() {
	return this.character_name;
}

Character.prototype.getRace = function() {
	return this.character_race;
}

Character.prototype.getLevel = function() {
	return this.character_level;
}

Character.prototype.getHealth = function() {
	return this.character_health;
}

Character.prototype.getMaxHealth = function() {
	return this.character_max_health;
}

Character.prototype.getEnergy = function() {
	return this.character_energy;
}

Character.prototype.getMaxEnergy = function() {
	return this.character_max_energy;
}

Character.prototype.getMana = function() {
	return this.character_mana;
}

Character.prototype.getMaxMana = function() {
	return this.character_max_mana;
}

Character.prototype.getStrength = function() {
	return this.character_strength;
}

Character.prototype.getAgility = function() {
	return this.character_agility;
}

Character.prototype.getIntelligence = function() {
	return this.character_intelligence;
}

Character.prototype.getCharisma = function() {
	return this.character_charisma;
}

Character.prototype.getPosX = function() {
	return this.posx;
}

Character.prototype.getPosY = function() {
	return this.posy;
}

Character.prototype.setID = function(val) {
	this.character_id = val;
}

Character.prototype.setName = function(str) {
	this.character_name = str;
}

Character.prototype.setRace = function(str) {
	this.character_race = str;
}

Character.prototype.setLevel = function(val) {
	this.character_level = val;
}

Character.prototype.setHealth = function(val) {
	this.character_health = val;
}

Character.prototype.setMaxHealth = function(val) {
	this.character_max_health = val;
}

Character.prototype.setEnergy = function(val) {
	this.character_energy = val;
}

Character.prototype.setMaxEnergy = function(val) {
	this.character_max_energy = val;
}

Character.prototype.setMana = function(val) {
	this.character_mana = val;
}

Character.prototype.setMaxMana = function(val) {
	this.character_max_mana = val;
}

Character.prototype.setStrength = function(val) {
	this.character_strength = val;
}

Character.prototype.setAgility = function(val) {
	this.character_agility = val;
}

Character.prototype.setIntelligence = function(val) {
	this.character_intelligence = val;
}

Character.prototype.setCharisma = function(val) {
	this.character_charisma = val;
}

Character.prototype.setPosX = function(val) {
	this.posx = val;
}

Character.prototype.setPosY = function(val) {
		this.posy = val;
	}
	// END GETTERS AND SETTERS

Character.prototype.print = function() {
	console.log("Hi, my name is " + this.getName() + "!");
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

// BEGIN GETTERS AND SETTERS
Roster.prototype.getID = function() {
	return this.roster_id;
}

Roster.prototype.getCharacters = function() {
	return this.characters;
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
// END GETTERS AND SETTERS
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
		return this.contents[x][y];
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

BattleBoard.prototype.clearSpace = function(x, y) {
	this.contents[y][x] = "E";
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
			var cellContent = this.getContentsAt(x, y);
			out += '<div class="cell" style="width: ' + cellWidth + '"><div class="contents">' + cellContent + '</div></div>';
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

function Battle() {

}
;// Eventually the main controller. For now a bunch of console logging.

//Constructor Templates
//Character(id, name, race, level, maxHealth, maxEnergy, maxMana, strength, agility, intelligence, charisma, posx, posy)
//BattleBoard(dimX, dimY)

var testCharacter = new Character(1, "Rupert", "Human", 1, 100, 50, 25, 9, 7, 4, 5, 0, 0);
var testBoard = new BattleBoard(10, 10);

testBoard.placeCharacter(testCharacter);

testBoard.moveCharacter(testCharacter, 2, 3);

var boardHTML = testBoard.generateHTML();

addElement(boardHTML, 'battleBoard', 'output');

function addElement(content, extraClass, target) {
  var newElement = document.createElement('div');
  newElement.setAttribute('class', extraClass);
  newElement.innerHTML = content;
  document.getElementById(target).appendChild(newElement);
}
 function clearElement(id) {
   document.getElementById(id).innerHTML = '';
 }
