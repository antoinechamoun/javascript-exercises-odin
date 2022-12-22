function contains(a,b){
    // console.log(b.split(""));
    // let length = Object.keys(a)
    // console.log(Object.entries(a));
    // console.log(length);
    // console.log(typeof a[length[0]]);

    for(let key in a){
        if(typeof a[key] === 'object' ){
            return contains(a[key], b)
        }
        if(a[key] === b){
            return true
        }
        return false
    }

    // length.forEach((key)=>{
    //     if(typeof a[key] === 'object') {
    //         return contains(a[key], b)
    //     }
    //     else{
    //         console.log(Object.values(a[key]))
    //     }
    // })
}
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    },
}
console.log(contains(nestedObject, 'foo2'))
