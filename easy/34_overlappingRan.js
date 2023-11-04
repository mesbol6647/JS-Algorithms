//! 5 adet sayılı verilen arrayin ( ilk 2 hanesi ile 3.ve 4. hanesi bir aralığı 
//! temsil ediyor bu iki aralığın kesişimindeki eleman sayısını bulmamızı istiyor bu eleman sayısı
//! son elemanla kıyasla büyük veya küçük olmasına göre true veya flase döndür)

export const overlappingRan = (arr)=>{

    const firstSet = createArr(arr[0],arr[1])
    const secondSet = createArr(arr[2],arr[3])

    let intersectionSet =[]
    firstSet.map(item => {
        if(secondSet.indexOf(item)>-1)intersectionSet.push(item)
    })


    return intersectionSet.length >= arr[4]? true:false
}

const createArr = (x, y)=>{
    let subSet =[]
    for (let i = x; i <=y; i++){
        subSet.push(i)
    }

    return subSet
}