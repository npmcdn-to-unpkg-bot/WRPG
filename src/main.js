// Eventually the main controller. For now a bunch of console logging.

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
