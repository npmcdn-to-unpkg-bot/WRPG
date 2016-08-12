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
