const palindromes = function (value) {
    let wordsArray = value.split(" ");
    let array =new Array()
    
    for(let i=0; i<wordsArray.length; i++){
        array=array.concat(wordsArray[i].split(""))    
    }
    
    for(let i=0; i<array.length; i++){
        if(((array[i]).toLowerCase().charCodeAt(0)<97) || ((array[i]).toLowerCase().charCodeAt(0)>122)){
            console.log(array[i]);
            array.splice(i, 1)
        }
    }
    for(let i=0; i<array.length; i++){
        if(array[i].toLowerCase() !== array[array.length-i-1].toLowerCase()){

        console.log("2"+array[i], array[i-1]);
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
