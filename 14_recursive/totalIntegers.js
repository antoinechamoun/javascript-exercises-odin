function totalIntegers(a){
    let total = 0

    a.forEach(element => {
        if(Array.isArray(element)){
            total += totalIntegers(element)
        }
        else{
            if(Number.isInteger(element)){
                total += 1 
            }
        }
    });
    return total 
}
