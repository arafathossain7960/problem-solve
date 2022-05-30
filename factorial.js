// find factorial 

function findFactorial(number){
    let fact = 1;
    for(let i = 1; i<= number; i++){
        fact= fact * i;
    }
    return fact;
}

const factorial = findFactorial(5);

console.log(factorial);