// type one

function evenOdd(number){
    for(let i = 0; i < number.length; i++){
        const element = number[i];
        if(element % 2 == 0){
            console.log('even');
        }
        else{
            console.log('odd');
        }
    }
}

const numbers = [1,3,9,4,20, 12,6, 3,9,8,23];
 evenOdd(numbers);


// type two
function evenOdd2(number){
    if(number % 2 == 0){
        console.log('This number is even ');
    }
    else{
        console.log('This number is odd')
    }
}

evenOdd2(11);