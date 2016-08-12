// Eventually the main controller. For now a bunch of console logging.

//Constructor Templates
//Character(id, name, race, level, maxHealth, maxEnergy, maxMana, strength, agility, intelligence, charisma, posx, posy)
//BattleBoard(dimX, dimY)

var testCharacter = new Character(1, "Rupert", "Human", 1, 100, 50, 25, 9, 7, 4, 5, 1, 2);
var testBoard = new BattleBoard(10, 10);

testBoard.placeCharacter(testCharacter);

testBoard.print();
