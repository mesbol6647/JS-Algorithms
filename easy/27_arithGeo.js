//! verilen sayıların aritmetik olarakmı yoksa geometrik olarakmı sıralandığını bulun doğruysa 1 yazsın.

export const arithGeo = (arr) => {

let diff = arr[1] - arr[0]
let ratio = arr [1]/ arr [0]
let isAritmetric = true
let isGeometric = true

for (let i = 2; i < arr.length; i ++) {
   
    if(arr[i]- arr[i-1] != diff){
        isAritmetric = false

    }

    if(arr [i]/ arr[i-1] != ratio){
        isGeometric = false
    }
}

if(isAritmetric === true ){
    return " Arithmetric"


}else if ( isGeometric === true){
    return " Geometric"
}else {
     return -1
}





return isAritmetric



}
