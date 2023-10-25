export const longestWord = (sen) => {

    //Noktalama işaretlerini kaldır..--- 9.sırada yapıldı.
    //Cümleyi boşluklardan bölüp,kelimelerle bir array oluşturmak
    //Kelimelerle oluşturduğumuz arrayi,kelimelerin karakter sayılarına göre azalan bir şekilde oluşturmak
    //En başta yani 0.indexte yer alan kelimeyi return etmek

    const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ")
    arr.sort((a,b)=>{return b.length-a.length})
    return arr [0]





}