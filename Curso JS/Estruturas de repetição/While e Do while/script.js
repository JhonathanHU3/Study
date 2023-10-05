function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = 49;
console.log(rand);

while (rand !== 49){
    rand = random(1, 50);
    console.log("###");
}

do {
    rand = random(1, 50);
    console.log(rand);
} while(rand !== 49);




// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }