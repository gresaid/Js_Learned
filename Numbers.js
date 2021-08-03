
let asd;
asd = ['1', '2', '3'];

for (let mas of asd) {
    console.log (mas)
}

function getRandomBeetwen(Min,Max) {
    return Math.floor(Math.random() * (Max - Min + 1) + Min)
}

console.log (getRandomBeetwen(10,15) )