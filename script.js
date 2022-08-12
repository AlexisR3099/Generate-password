// Assignment code here
var enter;
// prompts
var characterAmount;
var lowerCase
var upperCase;
var numValue;
var specialCharacters;
var option;

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
generateBtn.addEventListener("click", function() {
  var generatePassword = function() {
    enter = parseInt(prompt('How many characters in your password?'));

    if(!enter) {
      alert('Please enter a value!')
    } else if (enter < 8 || enter > 128) {
      enter = parseInt(prompt('Length must be between 8-128 characters'));
    } else {

      lowerCase = confirm("Allow 'lowercase' letters in your password?");
      upperCase = confirm("Allow 'uppercase' letters in your password?");
      numValue = confirm("Allow 'numbers' to be in your password?");
      specialCharacters = confirm("Allow 'special characters' to be in your password");
    };
    if (!lowerCase && !upperCase && !numValue && !specialCharacters) {
      option = alert("Choose at least one criteria!");
    }
    // all options
    else if (lowerCase && upperCase && numValue && specialCharacters) {
      option = character.concat(number, letter, letterCaps);
    }
    // 3/4 options picked
    else if (lowerCase && upperCase && numValue) {
      option = letter.concat(letterCaps, number);
    }
    else if (lowerCase && upperCase && specialCharacters) {
      option = letter.concat(letterCaps, character);
    }
    else if (upperCase && numValue && specialCharacters) {
      option = number.concat(letterCaps, number);
    }
    // 2/4 options picked 
    else if (lowerCase && upperCase) {
      option = letter.concat(letterCaps);
    }
    else if (lowerCase && numValue) {
      option = letter.concat(number);
    }
    else if (lowerCase && specialCharacters) {
      option = letter.concat(character);
    }
    else if (upperCase && numValue) {
      option = letterCaps.concat(number);
    }
    else if (upperCase && specialCharacters) {
      option = letterCaps.concat(character);
    }
    else if (numValue && specialCharacters) {
      option = number.concat(character);
    }
    // 1 option picked
    else if (lowerCase) {
      option = letter;
    }
    else if (upperCase) {
      option = letterCaps;
    }
    else if (numValue) {
      option = number;
    }
    else if (specialCharacters) {
      option = character;
    }
  }
});
