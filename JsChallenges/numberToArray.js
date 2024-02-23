// convert number to reversed array of digits
//3564 => [4,6,5,3]  non negative number

function numberToReversedArray(number) {
    let nums = number.toString().split('').reverse().map(num => parseInt(num));
    return nums
}

let a = numberToReversedArray(3564)
console.log(a);
