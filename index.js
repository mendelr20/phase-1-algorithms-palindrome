function isPalindrome(word) {
  const splitArray = word.split('');
  const reverseArray = splitArray.reverse();
  const jointArray = reverseArray.join('')
  if(jointArray === word){
    return true
  } else {
    return false
  }
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

  function isPalindrome(word) {
  const splitArray = word.split('');
  const reverseArray = splitArray.reverse();
  const jointArray = reverseArray.join('')
  if(jointArray === word){
    return true
  } else {
    return false
  }
}

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
