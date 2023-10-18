// 1. Soru: Verilen bir dizi içindeki tek sayıları bulup yeni bir diziye ekleyin.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let tekSayilar = [];
// Dizi üzerinde dolaşarak tek sayıları bulup yeni diziye ekleyelim
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        tekSayilar.push(numbers[i]);
    }
}

// Sonuçları yazdıralım
console.log("Verilen dizi:", numbers);
console.log("Tek sayılar:", tekSayilar);























