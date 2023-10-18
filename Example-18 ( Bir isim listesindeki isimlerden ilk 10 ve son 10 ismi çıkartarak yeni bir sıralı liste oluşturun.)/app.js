// 7. Bir isim listesindeki isimlerden ilk 10 ve son 10 ismi çıkartarak yeni bir sıralı liste oluşturun.

let isimListesi = ["Ali", "Ayşe", "Mehmet", "Fatma", "Hasan", "Zeynep", "Emre", "Selin", "Mustafa", "Elif", "Baran", "Gamze", "Eren", "Dilara", "Burak", "Pınar", "İsmail", "Sibel", "Murat", "Gülşah", "Ahmet", "Hatice", "Kemal", "Sevgi", "Yusuf", "Aslı", "Can", "Zehra", "Onur", "Ebru", "Serkan", "Nazlı", "Cemal", "Gonca", "Ercan", "Esra", "Hakan", "Nur"];
// İlk 10 ve son 10 ismi çıkart
let yeniListe = isimListesi.slice(10, -10);

yeniListe.sort();

console.log(yeniListe);