// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Arrays for possible characters for password
var passwordLength;
var chooseUpper;
var chooseLower;
var chooseNumbers;
var chooseSpecial;
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ":", ";", "'", "<", ">", "?", "/"];


// Start of the function to being generating password
function generatePassword () {
  var passwordHolder = [];
  // Asks user for character amount 
    var passwordLength = parseInt(prompt("How many characters would you like to have in your password? Please choose a number between 8 and 128."));
    // Checks criteria for password length
      if (passwordLength === "" || isNaN(passwordLength)) {
        alert("Please enter a value between 8 and 128.");
        generatePassword();
    } else if (passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a number between 8 and 128");
 
    // Prompts user for other criteria
    } else {
      chooseUpper = confirm("Do you want your password to contain upper case (A-Z) letters?");
      chooseLower = confirm("Do you want your password to contain lower case (a-z) letters?");
      chooseNumbers = confirm("Do you want your password to contain numbers (0-9)?");
      chooseSpecial = confirm("Do you want your password to contain special characters (ex. @,#,$)?");
    }

  if (chooseUpper) {
    passwordHolder = passwordHolder.concat(upper);
    console.log(passwordHolder);
  }

  if (chooseLower) {
    passwordHolder = passwordHolder.concat(lower);
    console.log(passwordHolder);
  }

  if (chooseNumbers) {
    passwordHolder = passwordHolder.concat(numbers);
    console.log(passwordHolder);
  }

  if (chooseSpecial) {
    passwordHolder = passwordHolder.concat(special);
    console.log(passwordHolder);
  }

  if (!chooseUpper && !chooseLower && !chooseNumbers && !chooseSpecial) {
    alert("You must choose at least one criteria to proceed.");
  }

var finalPassword = [];

for (i = 0; i < passwordLength; i++) {
  var chosenPassword = passwordHolder[Math.floor(Math.random() * passwordHolder.length)];
  
  finalPassword.push(chosenPassword);
}

  return finalPassword.join("");

}


// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);