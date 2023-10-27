export const fibonacci = (num) =>{
    let fibon =[0, 1];
    if(num <=2 ) return 1
    for (let i = 2; i <= num; i++) {
       
        fibon[i]=fibon[i-1] +fibon[i-2]
    }
    return fibon[num]
}