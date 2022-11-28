const numberList = [];

i=0;

while (i<50){
    let number = parseInt(prompt('inserisci un numero:'));
    numberList.push(number);
    i+=number;
}

console.log(numberList);

console.log(i);