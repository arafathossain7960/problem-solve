/*
-- Simple program --
This program will take a name list,
 then check every single name.length
 if the name's length is even then it push to new array
 which name evenName
 and return all even Names array  

*/

const findLengthEvenOfName =(nameList)=>{
    let evenName = [];
    const nameListLength = nameList.length;
    nameList.map((name)=>{
        const nameLength = name.length;
        if(nameLength %  2 === 0){
            evenName.push(name)
        }
      
        
    })
    return evenName; 
}



const friends = ['micle', 'kmal', 'joni leaber', 'adum', 'lliy bellenger'];

const result = findLengthEvenOfName(friends);
console.log(result)