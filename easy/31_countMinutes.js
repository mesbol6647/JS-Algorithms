/*String şekilinde verilen iki adet saat arasındaki farkın dakika olarak hesaplanması isteniyor.
Parametre formatı ise: "9:00am-10:00am" şeklinde. */

export const countMinutes = (time) => {


    const times =time.split("-")
    let time1={}
    let time2={}

    time1.meridiem = times[0].slice(-2)
    time1.hour=parseInt(times[0].split(":")[0])
    time1.minute = parseInt(times[0].slice(-4,-2))

    time2.meridiem = times[1].slice(-2)
    time2.hour=parseInt(times[1].split(":")[0])
    time2.minute = parseInt(times[1].slice(-4,-2))


    let minutes = 0

    if(time1.meridiem === time2.meridiem){

            minutes = (time2.hour*60 +time2.minute)-(time1.hour*60-time1.minute)
    }
  

    return minutes







    
}