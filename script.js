// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!@#$%^&*()";
var password = "";


function generatePassword() {
  var passwordLength = prompt("How long do you want your password?")
  console.log(passwordLength)
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Must be at least 8 characters long, no more than 128 characters")
  }
  var useNumbers = confirm("Do you want to use numbers?")
  var useLowerCase = confirm("Do you want to use lowercase letters?")
  var useUpperCase = confirm("Do you want to use uppercase letters?")
  var useSymbols = confirm("Do you want to use symbols?")
  console.log(numbers)
  for(var i = 0; i < passwordLength; i++){
    if (useNumbers && password.length< passwordLength) {
      var positionNumber = Math.floor(Math.random() * numbers.length)
      password = password + numbers[positionNumber]
    }
    
    console.log(lowerCase)
  
    if (useLowerCase && password.length< passwordLength) {
    var positionNumber = Math.floor(Math.random() * lowerCase.length)
     password = password + lowerCase[positionNumber]
    }
  
    console.log(upperCase)
    if (useUpperCase && password.length< passwordLength) {
      var positionNumber = Math.floor(Math.random() * upperCase.length)
      password = password + upperCase[positionNumber]
    }
   
    console.log(symbols)
    if (useSymbols && password.length< passwordLength) {
      var positionNumber = Math.floor(Math.random() * symbols.length)
      password = password + symbols[positionNumber]
    }
  }
  if (useNumbers === false && useLowerCase === false && useUpperCase === false && useSymbols === false){
    alert("You must have one type of variable.")
  }
  return password
}

// Write password to the #password input
function writePassword() {
  console.log("function started")
  var password = generatePassword();
  var passwordText = document.querySelector("#password")
  passwordText.textContent = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
