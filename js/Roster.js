/*
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