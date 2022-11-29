const myArray = [1,2,3,4,5,6,7,43,3,5,23,3,6,6,45,7,98];

function sumArray (object, lenght){
    let sum = 0;
    for (i=0; i<lenght;i++){
        sum+=object[i];
    }
    return sum;
}

const sum = sumArray(myArray, myArray.length);

console.log(sum);
