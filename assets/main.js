function getPalindrome(num, count = 0){
    const reversNum = getReversNum(num)
    if(num === reversNum){

        return {result: num, step: count,}
        
    } else{
        num += reversNum;

        return getPalindrome(num, ++count);
    }
};

function getReversNum(num){
    let strNum = String(num);

    return +strNum.split('').reverse().join('');
};


console.log(getPalindrome(56));
console.log(getPalindrome(57));
console.log(getPalindrome(89));
