// find the biggest value with if else
function findMaximum(n1, n2, n3){
    if(n1 > n2 && n1 >n3){
        return n1;
    }else if(n2 > n1 && n2 > n3){
        return n2;
    }else{
        return n3;
    }

}
const max = findMaximum(2, 5, 7);
// console.log(max)

// find the biggest value with Math.max;
function findMaximumWithMax(n1, n2, n3){
    const max = Math.max(n1, n2, n3);
    return max;
}
   
    findMaximumWithMax(8, 9, 5);


    // find the min value
    function findMinValue(n1, n2, n3){
        const min = Math.min(n1, n2, n3);
        return min;
    }

    console.log(findMinValue(4, 7, 2));