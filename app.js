//Exercise 1
for(let i = 1; i < 100; i++)
    if(i % 2 != 0){
        console.log(i)
    }
        
//Exercise 2
for(let num = 1; num <= 100; num++){

let output = "";
if(num %3 == 0){
    output += "FIZZ";
}
if(num % 5 == 0){
    output += "BUZZ";
}

console.log(`${i} ${output}`);

}

//Exercise 3 while and do/while
do{
if (x % 2 !== 0){
    console.log(x)
}
x++
} while (x < 100)

let i = 1;

while (i <= 100){
    let output = "";

    if(num %3 == 0){
    output += "FIZZ";
    }
    if(num % 5 == 0){
    output += "BUZZ";
}

    console.log(`${i} ${output}`);

    i++;
}

let x = 1;

do{
    let output = "";
    let x = 0;

    if(num %3 == 0){
    output += "FIZZ";
    }
    if(num % 5 == 0){
    output += "BUZZ";
}

    console.log(`${i} ${output}`);

    x++;
}while (x <= 100)

//Exercise 4 Find Value
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500


for(let i = 1; i <= n; i++){
    if (i == value) {
       console.log(`Found ${value}`);
    break;
    }
    
}

console.log(`Did not find ${value}`)
//Exercise 5 Customize FizzBuzz
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 1); // creates a random number between 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 1000


for (let i = start; i <= end; i++) {
    let output = "";

    if (i % fizzDivisor ==0){
        output += "FIZZ"
    }

    if (i % buzzDivisor == 0){
        output += "BUZZ"
    }

    console.log(`${i} ${output}`);
}
