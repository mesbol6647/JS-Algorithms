//!  Bize bir adet array veriliyor  kelimelerin harf sayısına dizip 3.en büyük harf kelimenin return edilmesi 

export const  thirdGreatest = (arr)=>{

arr.sort((a,b)=>b.length-a.length)

return arr[2]
}
// soruda mantık hatası var çözüm yanlış