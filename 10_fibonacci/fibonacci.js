const fibonacci = function(n) {
    if(n<0){
        return "OOPS"
    }
    n=parseInt(n)
    let result = new Array()
    result[1]=1
    result[2]=2
    for(let i=3; i<=n; i++){
        result[i] = result[i-2] + result[i-1]
    }
    if(n==0 || n==1){
        return 1
    }
    return result[n-1]
};

// Do not edit below this line
module.exports = fibonacci;
