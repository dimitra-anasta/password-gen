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
  if (passwordLength < 8 || passwordLength >128 ) {
    alert ("Must be at least 8 characters long, no more than 128 characters")
  }
var useNumbers = confirm("Do you want to use numbers?")
console.log(numbers)
if (useNumbers) {
}
 var useLowerCase = confirm("Do you want to use lowercase letters?")
 console.log(lowerCase)
 
 if (useLowerCase){
}
var useUpperCase = confirm("Do you want to use uppercase letters?")
console.log(upperCase)
if (useUpperCase){
}
var useSymbols = confirm("Do you want to use symbols?")
console.log(symbols)
if (useSymbols){
}
}

// Write password to the #password input
function writePassword() {
  console.log("function started")
  var password = generatePassword();
  var passwordText = document.querySelector("#password")
function randomLowCase() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}
console.log(randomLowCase());
function randomUppCase () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(randomUppCase());
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 } console.log(randomNumber()){
 }
 function randomSymbol() {
  const symbols = "!@#$%^&*()";
  return symbols [Math.floor(Math.random()) *symbols.length];
 }console.log(randomSymbol());
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
