function all(a, b){
    if(Array.isArray(a)){
        let copy = a.slice()

        if(copy.length === 1){
            return b(copy[copy.length-1])
        }

        if(b(copy[copy.length-1])){
            copy.splice(copy.length-1, 1)
            return all(copy, b)
        }
        
        return false
    }else{
        return "a should be an array"
    }
}
