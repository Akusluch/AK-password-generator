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
  password = "";
  charset = "" ;
  var special = ['!','@','#','$','%','&','*','?'];
  var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var num = ['0','1','2','3','4','5','6','7','8','9'];
  var critcharset = "";
  


  if (specialchar && lowercasechar && uppercasechar && numbers){
    critcharset = charset.concat(special).concat(lower).concat(upper).concat(num); 
  }

  // if (lowercasechar){
  //   critcharset = charset.concat(lower);  
  // }

  // if (uppercasechar){
  //   critcharset = charset.concat(upper);  
  // }  

  // if (numbers){
  //   critcharset = charset.concat(num);  
  // }

  for (var i = 0; i < length; ++i) {
    password += critcharset[Math.floor(Math.random() * critcharset.length)];
  }

  return password;
}


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
