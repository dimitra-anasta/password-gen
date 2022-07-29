// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 15
var password = ""

for (var i=0; i<= passwordLength; i++){
  var randomNumber = Math.floor(Math.random() * characters.length);
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")


  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
