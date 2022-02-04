function charDuplicate(str, noOfDuplicates) {
    var newStr = "";
  
    for (let i = 0; i < str.length; i++) {
      newStr += str.charAt(i).repeat(parseInt(noOfDuplicates));
      // console.log(str[i].repeat(parseInt(noOfDuplicates)));
    }
  
    return newStr;
  }
  
console.log(charDuplicate("abc", 2));
