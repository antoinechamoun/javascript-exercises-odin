function sumSquares(a){
    let total = 0

    a.forEach(element => {
        if(Array.isArray(element)){
            total += sumSquares(element)
        }
        else{
            if(Number.isInteger(element)){
                total += (element*element) 
            }
        }
    });
    return total 
}
l = [10,[[10],10],[10]] 
console.log(sumSquares(l));
