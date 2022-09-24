

// largest number 
const numbers = [23, 48, 23, 14, 14, 24, 45, 76, 39, 80,16];

function findLargestNumber(numbers){
    
    let largest  = numbers[0];
    for(let i=0; i<numbers.length; i++){
        const element = numbers[i];
        if(largest < element){
            largest = element;
        }
  
    }
    console.log(largest);
};

// findLargestNumber(numbers);

const minNumber = [25,59,14,39,20,10, 75];

const findMinNumber =numbers =>{

    let smallest = numbers[0];
    for(const number of numbers){
        if(smallest > number){
            smallest = number;
        }

        
    }
    return smallest;
 
}

// const min =  findMinNumber(minNumber);
// console.log(min)

// strings 

const names = ['Mahbob', 'Moklessor rahman', 'Abo taleb', 'Rassel khan'];
const biggestString = names =>{

    let biggestName = names[0];
    for(const name of names){
        if(biggestName.length < name.length ){
            biggestName = name;
        }
    }
    
    return biggestName;

}

// const biggestName = biggestString(names);
// console.log(biggestName);

const names2 = ['Mahbob','Masom', 'Moklessor rahman', 'Rassel', 'Abo taleb', 'Rassel', 'Masom'];

 function removeDuplicateName(names2){
    let uniqName =[];
    let i =0;
    while(i<names2.length){
        let element = names2[i];
        if(uniqName.indexOf(element)== -1){
            uniqName.push(element)
        }
        i++;
    }
    return uniqName;

}

// console.log(removeDuplicateName(names2));

// handle unexpected input in function

function handleParaMeter(one, two, three = 20){
    const sum = one + two + three;
    return sum;
}

// console.log(handleParaMeter(20))


const groceryCalculator = (egg, banana, flour)=>{

    const eggPrice = 12;
    const bananaPrice = 10;
    const flourPrice = 40;

    const eggTotal = eggPrice *egg;
    const bananaTotal = bananaPrice * banana;
    const flourTotal = flourPrice * flour;

    const total  = eggTotal + bananaTotal + flourTotal;
    
    return total;
    

}

// console.log(groceryCalculator(1,1,1))

    
const product = [
    {phone: 'samsung As4', price:12000},
    {phone: 'vivo 2.5 new model', price:11000},
    {phone: 'know A11', price:10000},
    {phone: 'show me AY400', price:2000},
]

let cep = product[0];
for(const p of product){
    if(p.price < cep.price){
        cep= p;
    }
}
console.log(cep)
