const vowels = "aeıioöuü"
const string = " hello world"
const findVowels = (str)=> {
    let newStr =""
    for (let i =0; i<str.length; i++){
        
        for(let j= 0; j<vowels.length; j++){
            if(vowels[j] === str[i]){
                newStr +=str[i];
            }
        }
    }
    return newStr;
}
console.log(findVowels("hello world"));
