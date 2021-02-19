//insert your pseudocode below
/*

setting a list of numbers inside a variable
then set a function that return me numbers randomly


*/

//insert your code below
var myNumber;

function listsGetRandomItem(list, remove) {
  var x = Math.floor(Math.random() * list.length);
  if (remove) {
    return list.splice(x, 1)[0];
  } else {
    return list[x];
  }
}

myNumber = [50, 28, 3, 7];
window.alert(listsGetRandomItem(myNumber, false));