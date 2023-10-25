export const userValidation = (str) => {

    if (
        str.length >= 4 && str.length <= 25 &&
        (/[a-zA-Z]/).test(str.slice(0,1)) &&
        (/^\w+$/).test(str)&&
        (/[a-zA-Z0-9]/).test(str.slice(-1))
        // str.charAt(0)==(str.slice(0,1) 
        // str.charAt(str.length-1)==(str.slice(-1))

    ) {
        return true
    } else {
        return false
    }


    //AND Operator
    //.lenght property

    // Reg Exp
    //.charAt() .slice() stringin ilgili karakterinin hangi index oldugunu gösterir."Slice"da olabilir.
    //.test()
}
//!- İlk Kural ve .length Property Kullanımı
//!- Reg Exp .test() .slice() ve .charAt() Metotlarının Kullanımı
//!- Üçüncü Kural Reg Exp ve .test() MEtotlarının Kullanımı
//!- Dördüncü Kural Reg Exp ve .test() Metodunun Kullanımı

