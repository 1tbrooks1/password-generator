// Assignment code here

writePassword();

// possible characters for password
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()'+,-./:;<=[]\_{}|~";

function generatePassword () 
    //asks user how many characters they want in their password
    passwordLength = (parseInt(window.prompt("How many characters would you like your password to be? Choose a number between 8 and 128?")));
    
    if (passwordLength >= 8 && passwordLenght <= 128) {
        console.log(passwordLenght);
     } else { 
        window.alert("Please choose a number that's 8, 128, or in between 8 and 128.");
    }

    var confirmUpperCase = window.confirm("Would you like upper case letters (A-Z) included in your password?")
    var confirmLowerCase = window.confirm("Would you like lower case letters (a-z) included in your password?")
    var confirmNumbers = window.confirm("Would you like numbers included in your password?")
    var confirmSymbols = winwow.confirm("Would you like symbols inluded in your password?")




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


