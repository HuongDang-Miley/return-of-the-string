/*******************
 * YOUR CODE HERE! *
 *******************/
// Yell
function yell(str){
  return str + '!'
}
let result1 = yell('hello');
result1;

//getFirstCharacter
function getFirstCharacter(str){
  return str[0];
}

let result2 = getFirstCharacter('Miley');
result2;

//getLastCharacter
function getLastCharacter(str) {
  return str[str.length -1];
}
let result3 = getLastCharacter('Miley')
result3;

//getOneCharacter
function getOneCharacter(str, num){
  return str[num]
}

let result4 = getOneCharacter('Linh', 3);
result4; 

//getTwoCharacter
function getTwoCharacters(str, num1, num2){
  return str[num1] + str [num2]
}

let result5 = getTwoCharacters('Miley', 0, 3)
result5;

//makeCapitalized
function makeCapitalized(str){
  return str.toUpperCase();
}
let result6 = makeCapitalized('lower case');
result6;

//yellLouder
function yellLouder(str){
  return str.toUpperCase() + '!!!'
}
let result7 = yellLouder('Hellooo');
result7;

//getInitials Way 1
// function getInitials(str){
  //   const indexOfSpace = str.indexOf(' ');
  //   const indexNextToSpace = str[indexOfSpace + 1];
  //   return str[0] + '.' + indexNextToSpace + '.';
  // }
  
  
  //getInitials Way 2
function getInitials(str){
  return str[0] +'.'+ str[str.indexOf(' ')+1] + '.';
}

let result8 = getInitials('Miley Dawn');
result8

result8 = getInitials('Miley');
result8;

result8 = getInitials('Dang My Huong');
result8;
/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
