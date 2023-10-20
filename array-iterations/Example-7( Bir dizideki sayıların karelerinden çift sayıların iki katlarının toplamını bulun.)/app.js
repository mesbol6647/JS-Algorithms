// soru 7: Soru: Bir dizideki sayıların karelerinden çift sayıların iki katlarının toplamını bulun.
let numbers7 = [1, 2, 3, 4, 5];

let kareSayi = numbers7.map((a)=>(a*a)); // her elemanın karesini alarak kareSayi adında yeni bir dizi oluşturuyoruz.
let ciftSayi = kareSayi.filter((a)=> (a%2===0));  // Yalnızca çift sayıları içeren bir başka dizi oluşturduk 
let yeniDizi= ciftSayi.map((a)=>(a*2));
console.log(ciftSayi);
console.log(yeniDizi);
