// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var chosenCharacters = [];
  var numberOfCharacters, chosenLowercase, chosenUppercase, chosenNumbers, chosenSpecialCha, chosenCharacters;
  numberOfCharacters = prompt("Choose password length between 10 and 64 characters.");


  // Conformation about number of characters, lowercase, uppercase, numbers and special characters
  if (numberOfCharacters < 10 || numberOfCharacters > 64) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("It is not a number. Please enter a valid number from 10 to 64.");
  } else {
    alert("Your new password will be " + numberOfCharacters + " charactors.");
  }

  chosenLowercase = window.confirm("Do you want add lowercase characters to your Password?");
  if (chosenLowercase) {
    alert("Lowercase characters will be used for your password");
  }
  else {
    alert("Lowercase characters will Not be used for your password");
  }

  chosenUppercase = window.confirm("Do you want add uppercase characters to your Password?");
  if (chosenUppercase) {
    alert("Uppercase characters will be used for your password");
  }
  else {
    alert("Uppercase characters will Not be used for your password");
  }

  chosenNumbers = window.confirm("Do you want add numbers to your Password?");
  if (chosenNumbers) {
    alert("Numbers will be used for your password");
  }
  else {
    alert("Numbers will Not be used for your password");
  }

  chosenSpecialCha = window.confirm("Do you want add special characters to your Password?");
  if (chosenSpecialCha) {
    alert("Special characters will be used for your password");
  }
  else {
    alert("Special characters will Not be used for your password");
  }

  if (chosenLowercase === false && chosenUppercase === false && chosenNumbers === false && chosenSpecialCha === false) {
    return "Please select at least one character type.";
  }

  // Select confrim characters

  if (chosenLowercase) {
    chosenCharacters = chosenCharacters.concat(lowerCasedCharacters)
  }
  if (chosenUppercase) {
    chosenCharacters = chosenCharacters.concat(upperCasedCharacters)
  }
  if (chosenNumbers) {
    chosenCharacters = chosenCharacters.concat(numberOfCharacters)
  }
  if (chosenSpecialCha) {
    chosenCharacters = chosenCharacters.concat(specialCharacters)
  }

  //  Generate password with user input

  var generatePassword = '';
  for (var i = 0; i < numberOfCharacters; i++) {
    var range = [Math.floor(Math.random() * chosenCharacters.length)];
    generatePassword = generatePassword + chosenCharacters[range];
  }

  return generatePassword;
};


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = getPasswordOptions();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
