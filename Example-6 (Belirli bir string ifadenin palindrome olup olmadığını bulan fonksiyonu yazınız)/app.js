/* -------------------------------------------------------------------------- */
/*                   //! Palindrome tersinden de aynı okunan                  */
/* -------------------------------------------------------------------------- */
const string = "selles";

const isPalindrome = (str)=>{
    let newStr ="";
    for( let i= str.length-1; i>=0; i--){
         newStr += str[i];
}
if( newStr===str){
    return true;
}else{

 return false;
}
return newStr=== str;
};

console.log(isPalindrome(string));