// December 5th, 2022
const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    const moves = data.toString().split('');
    let arr = [];
    let counter = 0;
    moves.forEach(move =>{ 
        if(arr.length > 3) return;
        counter++;
        if(arr.includes(move)) {
            arr.splice(0, arr.indexOf(move)+1);            
        }
        if(!arr.includes(move)){
            arr.push(move);
        }        
    })

    console.log('Result: ' + counter)
});
