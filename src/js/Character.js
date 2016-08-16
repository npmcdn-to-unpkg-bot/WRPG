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

Character.prototype.print = function() {
	console.log("Hi, my name is " + this.character_name + "!");
}
