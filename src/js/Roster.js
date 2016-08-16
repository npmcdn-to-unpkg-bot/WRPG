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
	this.currentlyActing = 0;
	this.currentCharacter = this.characters[this.currentlyActing];
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

Roster.prototype.advanceActing = function() {
	var max = this.characters.length - 1;
  if(this.currentTurn == max) {
    this.currentlyActing = 1;
  } else {
    this.currentlyActing++;
  }
	this.currentCharacter = this.characters[this.currentlyActing];
}

Roster.prototype.sortByAgi = function() {
	this.characters = this.characters.sort(function(a, b) {
		return parseFloat(b.character_agility) - parseFloat(a.character_agility);
	});
}
