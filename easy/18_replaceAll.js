//! replaceAll yöntemiyle çözülebiecek bir soru =.. input 5.5.5.5.5 output 5[.]5[.]5[.]5[.]...

export const replaceAll = (str)=>{

    return str.replaceAll('.' , '[.]')//replace all yöntemi ile çözüm
}