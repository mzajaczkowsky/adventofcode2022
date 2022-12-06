// December 2st, 2022
const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    const numbers = data.toString().split('\r\n');
    
    const result = numbers.map(e =>{
        sum = 0;
        if(e[0] === "A"){
            if(e[2] === "X") return sum += 3    // +0 for lose and +3 for scissors
            if(e[2] === "Y") return sum += 4    // +3 for draw and +1 for rock
            if(e[2] === "Z") return sum += 8    // +6 for win and +2 for paper
        }
        if(e[0] === "B"){
            if(e[2] === "X") return sum += 1    // +0 for lose and +1 for rock
            if(e[2] === "Y") return sum += 5    // +3 for draw and +2 for paper
            if(e[2] === "Z") return sum += 9    // +6 for win and +3 for scissors
        }
        if(e[0] === "C"){
            if(e[2] === "X") return sum += 2    // +0 for lose and +2 for paper
            if(e[2] === "Y") return sum += 6    // +3 for draw and +3 for scissors
            if(e[2] === "Z") return sum += 7    // +6 for win and +1 for rock
        }
    })    
    let score = 0; 
    result.forEach(e => {
        score += e;
    })

    console.log("Your total score is: " + score);
});
