/* -------------------------------------------------------------------------- */
/*                                   2.Soru                                   */
/* -------------------------------------------------------------------------- */

// function a(){
//     console.log("ben bir void fonksiyonum");
// }
// a();

// //! Olay tetiklemek için...

//  function sum(a,b){
//     return a+b
// }
// const toplam = sum(5,8);
// console.log(toplam);
// //! function declaration...

// const sum= (a,b) =>{return a +b;
// };
// const toplam= sum(5,8);
// console.log(toplam);
// //! arrow function

function calFahrenheit(celcius){
    const hesap= (celcius*9)/5+32
return hesap;
}
console.log(calFahrenheit(50));

// const celcius=calFahrenheit(30);
// console.log(celcius);

/* -------------------------------------------------------------------------- */
/*                            Arrow function çözümü                           */
/* -------------------------------------------------------------------------- */
// const calFahrenheit=(celcius)=> (celcius*9)/5 +32;
// const celcius =calFahrenheit(30);
// console.log(celcius);