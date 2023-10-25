
let sayi= parseInt(prompt("Bir sayı giriniz"));
let asal = true;
for (let i=2; i<=sayi/2; i++){
    if(sayi % i== 0){
        asal = false;
        break;
    }
}
if (asal)
alert("sayı asal sayıdır");
else 
alert("sayı asal sayı değildir");
