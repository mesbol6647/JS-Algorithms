//! Verilen String bir ifadenin arraye dönüştürülerek ---Harflerin Alfabeye göre dizilmesi--- (sort yöntemiyle ASCII Kod)

export const alphabetSor = (str )=> {

// const arr = str.split("")
// const sortedArr = arr.sort()
// const newStr= sortedArr.join("")

// return newStr

return str.split("").sort().join("") // tek satırla çözümü.........

}