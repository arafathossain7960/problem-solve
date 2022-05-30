// Inch to feet converter

function inchToFeet(inch){
    const feet  =inch /12;
    return parseFloat(feet.toFixed(2)) ;
}
const checkFeet = inchToFeet(58);
console.log(checkFeet);

// Feet to inch converter

function feetToInch(feet){
    const inch = feet * 12;
    return inch;
}

const checkInch = feetToInch(1.5);
console.log(checkInch);