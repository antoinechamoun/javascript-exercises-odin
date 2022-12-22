function sumRange(x){
    if(x==1){
        return 1
    }    
    return (x + sumRange(x-1))
}
