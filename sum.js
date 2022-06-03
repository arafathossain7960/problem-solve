// sum of all elements from the Array 

function sumAllElements(numbers){
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    sum = element + sum;
}
    return sum;
}

const sumOf = sumAllElements([50, 11, 20,74,89]);
// console.log(sumOf);

// sum 1 to 100 
function sum1To100(){
    let sum = 0;
    for(let i = 0; i<= 100; i++){
        sum = sum + i;
    }
    return sum;
}
    // sum1To100();
console.log(sum1To100())

// sum 1 to 100 event numbers
function sum1To100Event(){
    let sum = 0;
    for(let i = 2; i<=100; i+= 2){
        sum = sum + i;
    }
    return sum;
}

console.log(sum1To100Event());
