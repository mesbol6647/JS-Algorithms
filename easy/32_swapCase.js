//! Verilen Strinde küçük harflerin büyük harfe veya tam tersi yapılarak döndürülmesi

export const swapcase = (str) => {

    let newArr=[]
    str.split("").forEach(element => {
        if((/[^a-z/A-z]/).test(element)){
            newArr.push(element)

        }else if ((/[a-z]/).test(element)){
            newArr.push(element.toUpperCase())
        }else if((/[A-Z]/).test(element)){
            newArr.push(element.toLowerCase())
        }
        
    });

 


    return newArr.join("")
}
// test bu elementin (bu regular expression içindeki) bulunuyormu bulunmuyormu ona bakıyor