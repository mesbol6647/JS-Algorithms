export const roman = (num) => {

const romanSymbols = {

// 3999-1000 M
// 2999-1000 M
// 1999-1000 M
// 999-900  CM
// 99-90    XC
// 9-9      IX
// 0   mantık bu......



        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
}

let inRoman = ""
for ( let key in romanSymbols){
    // console.log(key+"-"+romanSymbols[key]);

    while(num >= romanSymbols[key]){
        inRoman += key
        num -= romanSymbols[key]
    }
}

return inRoman

}
