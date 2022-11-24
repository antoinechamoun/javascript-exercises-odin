const reverseString = function(word) {
    let wordArray = word.split(" ");
    let reversedArray = [];
    let reversedWord ="";

    for(let i=0; i<wordArray.length; i++){
        reversedWord=""
        let singleWord =wordArray[i];
        let singleWordArray = singleWord.split(""); 
        
        for(let i=singleWordArray.length-1; i>=0; i--){
            reversedWord += singleWordArray[i]
        }
        reversedArray.unshift(reversedWord)
    }
    return reversedArray.join(" ")
};

// Do not edit below this line
module.exports = reverseString;
