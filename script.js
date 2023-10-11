// Assignment Code
var generateBtn = document.querySelector("#generate");

// generates random password based off 5 diffrent criteria represented at the let statements 
function generatePassword() {
  password = "";
  var special = ['!','@','#','$','%','&'];
  var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var num = ['0','1','2','3','4','5','6','7','8','9'];
  var critcharset = [];

  let length = prompt("How many characters would you like your password. (min.8 max. 128)");
  let specialchar = confirm("Click OK to include special characters.");
  let lowercasechar = confirm("Click OK to include lowercase characters.");
  let uppercasechar = confirm("Click OK to include UPPERCASE characters.");
  let numbers = confirm("Click OK to include numerical values");
  length = parseInt(length);

  if (specialchar){
    critcharset = critcharset.concat(special); 
  }

  if (lowercasechar){
    critcharset = critcharset.concat(lower);  
  }

  if (uppercasechar){
    critcharset = critcharset.concat(upper);  
  }  

  if (numbers){
    critcharset = critcharset.concat(num);  
  }

  for (var i = 0; i < length; ++i) {
    password += critcharset[Math.floor(Math.random() * critcharset.length)];
  }

  return password;
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
