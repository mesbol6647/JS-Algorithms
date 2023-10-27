//bir sayının tüm asal çarpanlarını bulma
export const findPrimefactor = (num) =>{

let factors= [];
let start = 2 ;
while (num>2) {
    if(num % start ==0){
        factors.push(start)
        num=num/start
    }else{
        start ++
    }
   
}
return factors

}