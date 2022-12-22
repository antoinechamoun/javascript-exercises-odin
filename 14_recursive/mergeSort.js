function mergeSort(array){
    let leftLength = Math.floor(array.length/2)
    let rightLength = array.length-leftLength
    
    if(array.length === 1) return array

    let leftArray = []
    let rightArray = []

    for(let i=0; i<array.length; i++){
        if(i<leftLength){
            leftArray.push(array[i])
        }else{
            rightArray.push(array[i])
        }
    }

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(left, right){
    let k = []
    let i=0, j=0;
   
    while(i < left.length && j < right.length){
        if(left[i]<=right[j]){
            k.push(left[i])
            i++
        }else{
            k.push(right[j])
            j++
        }
    }

    while(i<left.length){
        k.push(left[i])
        i++
    }

    while(j<right.length){
        k.push(right[j])
        j++
    }

    return k
}


 console.log(mergeSort([1, 3, 4, 2, 7]));
