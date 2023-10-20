// soru 3: Soru: Bir dizi içerisindeki sayıların karesini alarak yeni bir dizi oluşturun. Ardından, bu yeni dizideki çift sayıları filtreleyerek sadece çift sayıları içeren bir başka dizi oluşturun.

/* -------------------------------------------------------------------------- */
/*               ARROW FUNCTİON VE MAP-FİLTER YÖNTEMİ KULLANARAK              */
/* -------------------------------------------------------------------------- */
let numbers4 = [1, 2, 3, 4, 5];
let kareSayi = numbers4.map((a)=>(a*a)); // her elemanın karesini alarak kareSayi adında yeni bir dizi oluşturuyoruz.
let ciftSayi = kareSayi.filter((a)=> (a%2===0));  // Yalnızca çift sayıları içeren bir başka dizi oluşturduk 
console.log(ciftSayi);


 /* -------------------------------------------------------------------------- */
 /*                      FUNCTİON KULLANARAK FARKLI ÇÖZÜMÜ                     */
 /* -------------------------------------------------------------------------- */
let numbers5 = [1, 2, 3, 4, 5];

// Her elemanın karesini alarak yeni bir dizi oluşturun
let squaredNumbers = numbers5.map(function(number) {
  return number * number;
});

// Yalnızca çift sayıları içeren bir başka dizi oluşturun
let evenNumbers = squaredNumbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers);  
