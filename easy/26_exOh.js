//! Sadece x ve o lardan kurulu bir string verilecek . x ve o lar eşitse true değilse false verecek kodu yazınız.

export const exOh = (str) => {

    let x = 0;
    let o = 0;
    [...str].forEach((item)=>{ //([...str ] bu ifade stringi arraye çevirdi.)
        
        item === "x"? x = x + 1 : o = o + 1

    })
    return x === o ? true : false
}

