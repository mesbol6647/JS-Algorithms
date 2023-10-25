function tamBolen(num){
    let tamBolenstr = "";
    for (let i =1; i<=num; i++){
        if(num % i=== 0){
            tamBolenstr += i + " ";

        }
    }
// tamBolenstr= tamBolenstr.slice(0,-2 );
return tamBolenstr;

}
let num=20;
let bolenler =tamBolen(num);
console.log(num + " " +"sayısının tam bölenleri =" + " " + bolenler);