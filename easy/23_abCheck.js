//! Verilen bir string cümlede ----a harfinden 3 karakter sonra b harfinin---- gelip gelmediği sorusu...

export const abCheck = (str )=> {

    const arr = str.toLowerCase().split("")
    let control =[]
    arr.forEach(element => {
    

        if(element === "a"&& arr[arr.indexOf(element)+4]=== "b"){
            control.push(true)
        }
    });

return control.includes(true) ? true :false 
// Yukarıda çözüm uzun çözüm

//? return str.search("a...b") > -1 ? true : false // önemli çözüm

// kısa çözüm buradaki önemli olan nokta (search) 
// kullanımı bu metod strigde kullanılıreken harfa arattığımızda karakterin indisini ilk bulduğu yerdeki indisi
// gösterir bulamazsa -1 gösterir. Bi kısım aratcaksak aratacağımız yerin başladığı indisi gösterir çözümde (a...b) derken  aradaki 3 karakter olduğunu gösteren çözümdür boşluk önemli değil..
}