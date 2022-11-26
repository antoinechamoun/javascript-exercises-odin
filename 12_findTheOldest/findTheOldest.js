const findTheOldest = function(arr) {
    let date = new Date().getFullYear()
    let result = arr.sort((a,b)=>{
        if(a.yearOfDeath === undefined || b.yearOfDeath === undefined){
            return (date - a.yearOfBirth) - (date - b.yearOfBirth)
        }else{
            return (a.yearOfDeath-a.yearOfBirth) - (b.yearOfDeath-b.yearOfBirth)
        }
    })
    return result[arr.length-1]
};

// Do not edit below this line
module.exports = findTheOldest;
