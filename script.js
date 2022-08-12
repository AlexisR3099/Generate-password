// Assignment code here
var enter;
// prompts
var characterAmount;
var lowerCase
var upperCase;
var numValue;
var specialCharacters;

// variables/characters
character = ['!', '#', '$', '%', '%', '*', '(', ')', '.', '/', ':', ';', '<', '>', '?', '@', '[', ']'];
number = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// make capital letters
function makeUpperCase(x) {
  return x.toUpperCase();
};

letterCaps = letter.map(makeUpperCase);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
