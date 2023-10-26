export const reverseChange = (num) =>{

return num < 0 ? -1 * Number(num.toString().split("").filter(r => r != "-").reverse().join("")):

Number(num.toString().split("").reverse().join(""))


}