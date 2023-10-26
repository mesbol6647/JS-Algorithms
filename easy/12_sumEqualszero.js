export const sumEqualszero = (num) =>{
let newNum=[];
if(num%2==1){
    newNum.push(0)
}
for (let i = 1; i < num/2; i++) {
    newNum.push(i)
    newNum.unshift(-i)
    
    
}
return newNum


}