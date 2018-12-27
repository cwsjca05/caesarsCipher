/* The project called for a rot13 specifically, but it can be generalized by requiring the rotation amount
to be specified as an argument to the function and then updating the hard 13's in the code below with the rot passed in */

function rot13(str) { 
  
  // Initialize an empty string and iterate over its characters, looking at each one individually
  
  var decoded = "";
  
  for (var i=0; i<str.length; i++){
    var newChar = str.charCodeAt(i);
    
    // Check the ASCII value of each character to see if adding 13 would result in a character outside the charset being used.  Either way, update the character appropriately and add to the decoded string
    
    if(newChar>64 && newChar<91){
      if (newChar+13 < 91){
        newChar+=13;
        newChar = String.fromCharCode(newChar);
        decoded += newChar;
      }
      if(newChar+13 >= 91){
        newChar-=13;
        newChar = String.fromCharCode(newChar);
        decoded += newChar;
      }
      
    }
    else{
      newChar = String.fromCharCode(newChar);
      decoded += newChar;
    }
  }
  
  
  return decoded;
}

rot13("LBH QVQ VG!");
