/*
-- simple program
this function will take 2 array 
combine tow array and create new array 
return the maximum value from the combined array

*/


const findMaxValueOfTowArray = (array1, array2)=>{
     const combinedArray = [...array1, ...array2 ];
     let maxValue = combinedArray[0];
     for(const value of combinedArray){
        if(value > maxValue){
            maxValue = value;
        }
     }
     return maxValue;
}


const result =  findMaxValueOfTowArray([1,2,3], [4,5,6]);
console.log(result);