function getRandomBetween(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

const resulte = getRandomBetween(1,100);

console.log(resulte);