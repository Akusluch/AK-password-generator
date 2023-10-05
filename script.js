// Assignment Code
var generateBtn = document.querySelector("#generate");

// create the function here

function generatePassword() {
  let length = prompt("How many characters would you like your password. (min.8 max. 128)");
  let specialchar = confirm("Click OK to include special characters.");
  let lowercasechar = confirm("Click OK to include lowercase characters.");
  let uppercasechar = confirm("Click OK to include UPPERCASE characters.");
  let numbers = confirm("Click OK to include numerical values");
  length = parseInt(length);
  charset ="" ;

  // for (var i = 0; i < length; ++i) {
  //   password += charset[Math.floor(Math.random() * charset.length)];

  return password;
}
  // if (lowercasechar) {
  //   charset = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
  // } else if (uppercasechar){
  //   charset =
  // } else if (numbers){
  //   charset =
  // } else if (specialchar){
  //   charset =
  // }

  
  // }

  // return password;





// prompt to get the number of characters in password
// need 4 ifs with 4 confirmExpressionconditionals
// processing...
// return password
//   return "turtle"; // if turtle is a password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
