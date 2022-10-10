
/*
-- simple program 
Description:
This program will take a Array of numbers
 do sum of all element and return average.

*/

function squareElement(numbers){
    const numbersLength = numbers.length;
    let sum = 0;
    numbers.map(function(number){
        const squaredNumber = number * number;
        sum = sum + squaredNumber;
       
    })
    const average =  parseFloat((sum / numbersLength).toFixed(2))
    return average;
}

const numbers = [10,45,20,23,63,54,80];
const result = squareElement(numbers);
console.log(result);