// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Declaring  used to generate randonw password

const lowerChar = "abcdefghijklmnopqrstuvwxyz";

const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numberChar = "0123456789";

const specialChar = "@#$%^&*()_+[]<>?{}-=/";

// Declaring functions

function getRandomLower(){
        return lowerChar.charAt(Math.ceil(Math.random()* lowerChar.length));
}
function getRandomUpper (){
	return upperChar.charAt(Math.ceil(Math.random()* upperChar.length));
}
function getRandomNumber (){
	return numberChar.charAt(Math.ceil(Math.random()* numberChar.length));
}
function getRandomSymbol (){
	return specialChar.charAt(Math.ceil(Math.random()* specialChar.length));
}

function generatePassword() {

	let passLength = prompt(
		"Choose a password length of at least 8 characters and no more than 128 characters");


//Validating if user entered valid input
if (
	parseInt(passLength) < 8 || 
	parseInt(passLength) > 128 ||
	isNaN(passLength) ||
	 passLength === "null" ||
	 passLength === null ||
         passLength.trim() === "" )
	 {
	alert ("Invalid Input. You need to enter a number with minimum length of 8 and maximum of 128");	
	}

else {
	  let isLowercase = confirm ("Do you want to include lowercase character ?");
	  let isUppercase = confirm ("Do you want to include uppercase characters?");
	  let isNumeric = confirm ("DO you want to include Numbers ?");
	  let isSpecialChar = confirm (" Do you want to include Special CHaracters ?");

	  return processPasswordGenerator(
		passLength,
		isLowercase,
		isUppercase,
		isNumeric,
		isSpecialChar
		);
   }	}

   //Function to create password based on users choice
function processPasswordGenerator(length, lower, upper, numeric, symbol){
	let tempPass ="";
	      for (let counter = 1; counter<=length; counter++)
	      {
		      tempPass += lower ?    getRandomLower():"";
		      tempPass += upper?     getRandomUpper():""; 
		      tempPass += numeric ?   getRandomNumber():"";
		      tempPass += symbol ?    getRandomSymbol():"";
	      }

	      return tempPass 
	      .slice(0,length)
	      .split("")
	      .sort(() => {
		Math.random() * -0.5;
		})
		.join("");
		}
	      

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);