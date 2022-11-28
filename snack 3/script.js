const arrayOne = [
    'elemento uno',
    'elemento due',
    'elemento tre',
    'elemento quattro',
    'elemento cinque',
    'elemento sei',
    'elemento sette',
    'elemento otto',
    'elemento nove'
];

const arrayTwo = [
    'elemento uno',
    'elemento due',
    'elemento tre',
    'elemento quattro',
    'elemento cinque',
];

while (arrayOne.length != arrayTwo.length){
    if (arrayOne.length < arrayTwo.length){
        arrayOne.push('filler');
    } else if (arrayOne.length > arrayTwo.length){
        arrayTwo.push('filler');
    }
}

console.log(arrayOne);
console.log(arrayTwo);