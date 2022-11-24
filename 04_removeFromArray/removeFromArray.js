const removeFromArray = function(...args) {
    let arr = []
    let allArgs = []
    for(const arg of args){
        if(Array.isArray(arg)){
            arr = arg.map((item)=>item);
        } else {
            allArgs.push(arg)
        }
    }
    console.log(allArgs);
    for(let j=0; j<allArgs.length; j++){
        for(let i=0; i<arr.length; i++){
            console.log(arr[i], allArgs[j]);
            if(arr[i] === allArgs[j]){
                arr.splice(i, 1);
            }
        }
    }
    console.log(arr);
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
