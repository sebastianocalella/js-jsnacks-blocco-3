const array = [1,33,55,64,33,22,10,44];


function oddOrEven (arrayElement,length,divEven,divOdd){
    for (i=0; i<length; i++){
        if(arrayElement[i]%2===0){
            document.getElementById(divEven).appendChild(arrayElement[i]);
        } else {
            document.getElementById(divOdd).appendChild(arrayElement[i]);
        }
    }
}

oddOrEven(array,array.length,'green','red');