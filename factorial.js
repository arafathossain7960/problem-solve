// find factorial 

function findFactorial(number){
    let fact = 1;
    for(let i = 1; i<= number; i++){
        fact= fact * i;
    }
    return fact;
}

const factorial = findFactorial(5);

// console.log(factorial);

// factorial with while loop 
function findFacWithWhile(num){
    let fact= 1;
    let i = 1;
    while(i <= num){

        fact = fact * i;
        i++;
    }
    return fact;
}
const watchResult = findFacWithWhile(4);
console.log(watchResult);


// factorial with lowe number 
function factorialWithLoweNumber(num){
    let fact = 1;
    let i = num;
    while(i >=1){
       fact = fact * i;
        i--;
    }
    return fact;
}

console.log(factorialWithLoweNumber(5));