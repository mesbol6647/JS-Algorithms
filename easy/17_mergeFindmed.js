// Verilen  2 arrayi birleştir daha sonra ortasını bul
export const mergeFindmed = (num1, num2) =>{

    num1.push(...num2)
    num1.sort((a,b) => a - b)
    let decimal = num1.length/2 - Math.floor(num1.length/2)
    if(num1.length %2 == 1){
    return num1[num1.length /2 -decimal]

    }else{
        return (num1[num1.length /2 -decimal] + num1[num1.length /2 -decimal -1])/2
    }
}