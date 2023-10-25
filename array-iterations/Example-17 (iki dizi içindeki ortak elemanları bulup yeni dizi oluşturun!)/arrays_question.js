// 6. Soru: iki dizi içindeki ortak elemanları bulup yeni dizi oluşturun!

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

let ortakArr = []
for (let i = 0; i < arr1.length; i++) {
  if (arr2.includes(arr1[i])) {
    ortakArr.push(arr1[i])
  }
  
}
console.log(ortakArr);