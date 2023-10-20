// soru 4: Soru: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).
let numbers5 = [1, 2, 3, 4, 5];

let tersDizi = []; //Boş Dizi oluşturuyoruz.

numbers5.forEach(i => tersDizi.unshift(i)); // unshift başa eleman ekler burada foreachle her elamanın üzerine gidilerek başa ekleme yapar son elemana geldiğinde döngü tamamlanır son eleman başa eklenmiş olur

console.log(numbers5);
// Terse Çevrilmiş Dizi
console.log(tersDizi);