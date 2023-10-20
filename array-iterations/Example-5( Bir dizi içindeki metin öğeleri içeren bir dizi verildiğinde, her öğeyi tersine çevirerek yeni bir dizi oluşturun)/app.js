// soru 5: Soru: Bir dizi içindeki metin öğeleri içeren bir dizi verildiğinde, her öğeyi tersine çevirerek yeni bir dizi oluşturun.
// çıktı : ["tpircSavaJ", "nohtyP", "avaJ", "++C"]

/* -------------------------------------------------------------------------- */
/*                              ARROW FUNCTİONLA ÇÖZÜMÜ                      */
/* -------------------------------------------------------------------------- */
let words = ["JavaScript", "Python", "Java", "C++"];

let cikti = words.map(word => word.split('').reverse().join(''));

console.log(cikti);

// split: Kelimenin her karakteri bir diziye ayrılır
// reverse: Bu dizi tersine çevrilir karakterler tersine çevrilir
// join: Tekrar birleştirilir.Tersine çevrilmiş karakterler tekrar birleştirilir

let rwords = ["JavaScript", "Python", "Java", "C++"];

let reversedWords = words.map(function(word) {
  return word.split('').reverse().join('');
});

console.log(reversedWords);

/* -------------------------------------------------------------------------- */
/*                     NORMAL FONKSİYON VE FOREACH ÇÖZÜMÜ                     */
/* -------------------------------------------------------------------------- */

let a_words = ["JavaScript", "Python", "Java", "C++"];
let a_reversedWords = [];
words.forEach(function(word) {
  let a_reversedWord = word.split('').reverse().join('');
  a_reversedWords.push(a_reversedWord);
});

console.log(a_reversedWords);