//? 1.SORU(18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını ifelse ve ternary yapı ile konsola yazdıran kodu yazınız.)

// console.log("merhaba");
let yas = +prompt("Yasinizi giriniz");
let vatandas = confirm("Türkiye Vatandaşımısınız?")
console.log(vatandas);
if (yas >= 18 && vatandas) {
    console.log(`Yaşınız ${yas} oy kullanabilirsiniz`);
} else {
    console.log(`Yaşınız ${yas} oy kullanamazsınız `);
}
/* -------------------------------------------------------------------------- */
/*                               ternary çözümü                               */
/* -------------------------------------------------------------------------- */

yas >= 18 && vatandas
    ? console.log(`yaşınız ${yas} ve Türkiye vatandaşınızsınız oy kullanabilirsiniz`)
    :
    console.log(`yaşınız ${yas} oy kullanamazsınız`);