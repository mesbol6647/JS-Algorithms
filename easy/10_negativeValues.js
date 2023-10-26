export const negativeValues = (num) => {

    // return num.map(row=> row.filter(r=> r<0).length).reduce((a,b) => a + b, 0)


    //! *******FARKLI ÇÖZÜM*******

    let newNum = [];

    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num[i].length; j++) {

            if (num[i][j] < 0) {
                newNum.push(num[i][j])
            }
        }
    }
    return newNum.length
}