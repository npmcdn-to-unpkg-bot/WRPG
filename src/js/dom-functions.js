function addElement(content, extraClass, target) {
  var newElement = document.createElement('div');
  newElement.setAttribute('class', extraClass);
  newElement.innerHTML = content;
  document.getElementById(target).appendChild(newElement);
}
 function clearElement(id) {
   document.getElementById(id).innerHTML = '';
 }
