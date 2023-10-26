export const letterCapitalize =( str) => {

    let newStr = []
    str.split(" ").forEach((word)=>{
        newStr.push(word.charAt(0).toUpperCase() + word.slice(1, word.length))

    })
    return newStr.join(" ")

    //! ****************  Farklı Çözümü ***********************

    // let arr = str.split(" ")
    
    // return  arr.map((item) => (item.charAt(0).toUpperCase() + item.slice(1, item.length))).join(" ") 


}




