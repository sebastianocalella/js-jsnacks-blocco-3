const startingList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const randomList =[];


while (randomList.length<10){
    const randomIndex = getRandomNumber(0, startingList.length - 1);
    if(!randomList.includes(startingList[randomIndex])){
        randomList.push(startingList[randomIndex]);
    }
}

console.log(randomList);

function getRandomNumber(numMin, numMax){
    if(numMin===numMax){
        return numMax
    }
    return Math.floor(Math.random()*(numMax - numMin + 1) + numMin);
}
// Math.floor(Math.random() * (startingList.length + 1))