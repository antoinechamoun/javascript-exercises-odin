function replicate(rec, num){
    let a = []
    
    if(rec <= 0){
        return a
    }

    a.push(num)
    
    return a.concat(replicate(rec-1, num)) 
}

console.log(replicate(3, 5))
