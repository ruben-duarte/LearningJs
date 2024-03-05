//sum of n numbers

function sumOfNumbers(number){
    let sum = 0;
    for (let i = 1; i <= number ; i++) {
        sum += i
    }
    return sum
}

a = sumOfNumbers(10)
const time1 = performance.now()
console.log(a)
const time2 = performance.now()
console.log(`total time : ${time2 - time1} ms`)

function sumOfNumbers2(number){
    let sum;
    sum  = number*(number +1)/2
    return sum
}

a = sumOfNumbers2(10)
const time01 = performance.now()
console.log(a)
const time02 = performance.now()
console.log(`total time : ${time02 - time01} ms`)


