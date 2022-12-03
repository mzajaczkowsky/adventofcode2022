// December 3rd, 2022
const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    const numbers = data.toString().split('\r\n');
    let sum = 0;
    numbers.forEach(e => {
        rucksackRight = e.slice(e.length/2)
        for(let i = 0; i < e.length/2; i++){
            if(!rucksackRight.includes(e[i])) continue;
            if(e.charCodeAt(i) >= 65 && e.charCodeAt(i) <= 90){
                console.log("guessed letter: " + e[i] + " charcode: " + e.charCodeAt(i))
                sum += e.charCodeAt(i) - 38;
                break;
            }
            if(e.charCodeAt(i) >= 97 && e.charCodeAt(i) <= 122){
                console.log("guessed letter: " + e[i] + " charcode: " + e.charCodeAt(i))
                sum += e.charCodeAt(i) - 96;
                break;
            }            
        }
    })
    console.log("#############################")
    console.log("Answer = " + sum)
    console.log("#############################")
});
