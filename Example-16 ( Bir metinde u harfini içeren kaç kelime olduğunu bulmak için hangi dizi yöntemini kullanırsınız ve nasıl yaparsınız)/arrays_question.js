// 5. Soru: Bir metinde "u" harfini içeren kaç kelime olduğunu bulmak için hangi dizi yöntemini kullanırsınız ve nasıl yaparsınız?

let text = "There are many shorthand techniques in JavaScript that can shorten the code length, reduce redundancy, and improve the readability and maintainability of the code. This article will introduce 20 JS abbreviation techniques to improve efficiency, helping you say goodbye to the shit mountain and write elegant code easily!";

let textList = text.split(' ');
let newTextList =[]
for (let i=0; i<textList.length; i++){
    if(textList[i].includes('u')){
        console.log(textList[i])
        newTextList.push(textList[i])
    }
}
console.log(newTextList.length)