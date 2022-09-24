/*
This function will take total used Electricity units and return total cost.
a. per 100 <= units = 5tk,
b. per 100 > && 200 <= units = 6tk
c. per 200 > && 300 <= units = 7tk

for general residential area 

*/

function electricityBill(units){
    let bill = 0;
    if(units <= 100){
        bill = units * 5;
    }else if(units <=200 ){
        const first100 = 100 * 5;
        const remaining = units - 100;
        const second100 = remaining * 6;
        bill = first100 + second100;
    }else{
        const first100 = 100 * 5;
        const second100 = 100 * 6;
        const remaining = units - 200;
        const third = remaining * 7;
        bill = first100 + second100 + third;
    }



    return bill;
}

const bill = electricityBill(210);
