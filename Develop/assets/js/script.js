// Assignment code here

// Arrays for possible characters for password
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
characters = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ":", ";", "'", "<", ">", "?", "/"];


// Start of the function to being generating password
function generatePassword () {
  // Asks user for character amount 
    passwordLength = prompt("How many characters would you like to have in your password? Please choose a number between 8 and 128.");
    // Checks criteria for password length
      if (passwordLength === "") {
        alert("Please enter a value between 8 and 128.");
        return;
    } else if (passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a number between 8 and 128");
 
    // Prompts user for other criteria
    } else {
      chooseUpper = confirm("Do you want your password to contain upper case letters?");
      chooseLower = confirm("Do you want your password to contain lower case letters?");
      chooseNumbers = confirm("Do you want your password to contain numbers?");
      chooseCharacters = confirm("Do you want your password to contain special characters?");
    }
  };


  // Chosen password criteria from user


  // for loop to create lengthe of password
 for (var i = 0; i < passwordLength; i++)
    var passwordOptions = passwordCriteria[Math.floor(Math.random() * passwordCriteria.passwordLength)];
    password.push(passwordOptions);




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