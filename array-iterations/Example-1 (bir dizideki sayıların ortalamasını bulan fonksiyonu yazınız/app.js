// soru 1: bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız?
let numbers1 = [1, 2, 3, 45, 65]
/* -------------------------------------------------------------------------- */
/*                               FOREACH ÇÖZÜMÜ                               */
/* -------------------------------------------------------------------------- */
let toplam = 0;
let elemanSayisi = 0;

numbers1.forEach((i) => {
  toplam += i;
  elemanSayisi++;
});

const avr = toplam / elemanSayisi;
console.log("Average: " + avr);

