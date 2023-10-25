function harfSay(kelime, harf){
    let sayac=0;
    for(let i=0; i<kelime.length; i++ ){
        if(kelime[i]===harf){
            sayac++;
        }
    }
    return sayac;
}
let kelime="merhaba";
let harf="c";
let sonuc= harfSay(kelime, harf);
console.log(` "${kelime}" kelimesinde "${harf}" harfi ${sonuc} kez geçiyor. `)