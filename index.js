function reverse(word){
  return word.split('').reverse().join('')
}

function isPalindrome(word) {
 
 return word === reverse(word)
  }



/* 
  Add your pseudocode here\

  #1 Split the string into a array of strings
  #2 Reverse the array
  #3 Join the array back together
  #4 If the result is = word return true otherwise return false
  
*/ 

/*
  Add written explanation of your solution here
   .split creates a array of string
   .reverse reverses array
   .join rejoins the array
    === compare word vs revesed
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("lol"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("mendel"));
}

module.exports = isPalindrome;
