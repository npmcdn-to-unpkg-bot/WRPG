// Eventually the main controller. For now a bunch of console logging.

//Constructor Templates
//Character(id, name, race, level, maxHealth, maxEnergy, maxMana, strength, agility, intelligence, charisma, posx, posy)
//BattleBoard(dimX, dimY)

var testCharacter1 = new Character(1, "Rupert", "Human", 1, 100, 50, 25, 9, 7, 4, 5, 0, 0);
var testCharacter2 = new Character(2, "Ignatius", "Human", 1, 100, 50, 25, 7, 9, 4, 5, 0, 0);
var testRoster = new Roster(1, [testCharacter1, testCharacter2]);

testRoster.sortByAgi();

var testBattle = new Battle(new BattleBoard(10, 10), [testRoster]);

testBattle.board.placeCharacter(testCharacter1);

testBattle.board.moveCharacter(testCharacter1, 2, 3);

var boardHTML = testBattle.board.generateHTML();

addElement(boardHTML, 'battleBoard', 'output');
