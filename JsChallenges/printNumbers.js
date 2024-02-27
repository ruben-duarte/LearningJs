// print numbers from 1 to 10

//using for
for(let number = 1; number <11; number++){
    console.log(number);
    console.log('count: ', number);
    process.stdout.write("hello");
}

for(let number = 1; number <11; number++){
    process.stdout.write(number.toString());
}

// using while
number = 0;
while(number < 10){
    console.log(++number);
}

