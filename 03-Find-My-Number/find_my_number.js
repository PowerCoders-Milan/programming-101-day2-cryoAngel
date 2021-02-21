//insert your pseudocode below
/*

set the computer secret number 
then a condition that do allow the user to prompt a true or false number


*/

//insert your code below
var pcNum;


pcNum = Number(window.prompt('guess my digit'));
if (pcNum > 6 && pcNum < 8) {
  window.alert('you guessed');
} else {
  window.alert('guess again');
}