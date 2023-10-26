export const multiAddsub = (num) =>{
let revizeNum=num.toString().split("").map(Number);
return revizeNum.reduce((a,b)=>a*b,1)-revizeNum.reduce((a,b)=>a+b,0)
}