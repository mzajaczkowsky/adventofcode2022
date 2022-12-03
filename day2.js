// December 1st, 2022
const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    const numbers = data.toString().split('\r\n');
    
    const result = numbers.map(e =>{
        sum = 0;
        if(e[2] === "X"){
            sum += 1;
            if(e[0] === "A") return sum += 3
            if(e[0] === "B") return sum += 0
            if(e[0] === "C") return sum += 6
        }
        if(e[2] === "Y"){
            sum += 2;
            if(e[0] === "A") return sum += 6
            if(e[0] === "B") return sum += 3
            if(e[0] === "C") return sum += 0
        }
        if(e[2] === "Z"){
            sum += 3;
            if(e[0] === "A") return sum += 0
            if(e[0] === "B") return sum += 6
            if(e[0] === "C") return sum += 3
        }
    })    
    let score = 0; 
    result.forEach(e => {
        score += e;
    })

    console.log("Your total score is: " + score);
});
