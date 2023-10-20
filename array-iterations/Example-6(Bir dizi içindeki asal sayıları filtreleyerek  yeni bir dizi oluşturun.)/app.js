// soru 6: Soru: Bir dizi içindeki asal sayıları filtreleyerek  yeni bir dizi oluşturun.
let numbers6 = [1, 2, 3, 8, 21, 23, 41, 44, 53];
let notAsalNum=numbers6.filter((i)=>(i%1!==0 && i%i!== 0));
console.log(notAsalNum);