// 4. Soru: Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.


let sentence = "JavaScript harika bir dil";

let sentenceArr =sentence.split(' ')

let reversedSentenceArr = sentenceArr.reverse()

let strReversedSentenceArr = reversedSentenceArr.join(' ')

console.log(strReversedSentenceArr)

//? Başka Çözümü..

// console.log(sentence.split(" ").reverse().join(' '));

//! Başka çözüm uzun olsun bizim olsun..

// let sentence = "JavaScript harika bir dil";
// let yeni_dizi=sentence.split(" ")
// console.log(yeni_dizi);
// let ters=[];
// for(let i=yeni_dizi.length-1; i>=0;i--) {
//     ters.push(yeni_dizi[i])
// }
// console.log(ters);
// let yeni_ters=ters.join(" ")
// console.log(yeni_ters);
