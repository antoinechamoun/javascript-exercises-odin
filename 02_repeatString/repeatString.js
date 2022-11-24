const repeatString = function(value, count) {
    let result=''
    if(count === null){
        count = Math.floor(Math.random()*10)   
    }
    if(count<0){
        return "ERROR"
    }
    for(let i=0; i<count; i++){
        result += value;
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
