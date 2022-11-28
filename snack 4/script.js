const arrayOne = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
];

const arrayTwo = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i'
];

const compressedArray = [];

const maxArray = arrayOne>=arrayTwo ? arrayOne : arrayTwo;

const minArray = arrayOne<arrayTwo ? arrayOne : arrayTwo;

for (i=0; i<maxArray.length; i++){
    compressedArray.push(maxArray[i] + minArray[i]);
}

console.log(compressedArray);
