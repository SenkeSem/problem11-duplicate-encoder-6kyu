function duplicateEncode(word){
  let arr = word.toLowerCase().split("");
  let resultStr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      resultStr[i] = "(";
    } else {
      resultStr[i] = ")";
    }
  }

  return resultStr.join("");
}

console.log(duplicateEncode("Success"));