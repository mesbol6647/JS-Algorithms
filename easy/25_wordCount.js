//! Verilen Bir String İfadedeki ---Kelime Sayısını Bulma---- Sorusu (kelimelerin arasında yalnızca 1 adet boşluk var)

export const wordCount = (str) => {

return str.trim().split(" ").length 
// buradaki tırnak içerisinde boşluk olmazsa harf 
//karakterinin sayısını bulur.(trim baştaki veya sondaki boşluk varsa siler)


}