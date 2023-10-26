export const twoDigits = (num) =>{
    return num.filter(r => r.toString().length %2 == 0).length
}