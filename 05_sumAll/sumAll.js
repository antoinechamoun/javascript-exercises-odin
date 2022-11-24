const sumAll = function(firstArg, secondArg) {
    let result=0;
    let max, min;
    firstArg > secondArg ? (max=firstArg,min=secondArg): (min=firstArg,max=secondArg);
    if(typeof(firstArg) !== 'number' || typeof(secondArg)!== 'number' || firstArg<0 || secondArg<0){
        return "ERROR"
    }else{
        for(let i=min; i<=max; i++){
            result += i;
        }
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
