function productOfArray(a){
    let copy = a.slice()
    
    if(copy.length===1){
     return copy[copy.length-1]
    }
    
    return copy[copy.length-1]*productOfArray(copy.slice(0, copy.length-1))
 }
