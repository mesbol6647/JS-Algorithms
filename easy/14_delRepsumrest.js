export const delRepsumrest = (num ) =>{
    let newNum = [... new Set(num)]    //! (...new Set )--bakılacak önemli ! bir dizideki tekrar edenleri çıkarır. 
    return newNum.reduce((a,b)=> a+b, 0)
}