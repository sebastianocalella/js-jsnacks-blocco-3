let number = parseInt(prompt('inserisci un numero compreso fra 1 e 10:'));



let i=0;
while(!(i>0 && i<10)){
    number = parseInt(prompt('per favore inserisci un numero compreso fra 1 e 10:'));
    i=number;
}

console.log(number);