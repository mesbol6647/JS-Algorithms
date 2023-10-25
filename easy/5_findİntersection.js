export const findİntersection = (arr) =>{

    let intersection=[]
    //yeni bir array tipinde değişken tanımla

    const kume1=arr[0].replace(/\s/g, "").split(",")
    const kume2=arr[1].replace(/\s/g, "").split(",")

    // split, replace

    kume2.forEach((item)=>{
        if(kume1.includes(item)){
            intersection.push(item)
        }


    })

    if(intersection.length !=0){
        return intersection.toString()
    }else{
        return false
    }

}