// December 4th, 2022
const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    const pairs = data.toString().split('\r\n');
    let counter = 0;
    pairs.forEach(e => {
        const pair = e.split(/,|-/);
        const p0 = Number(pair[0]);
        const p1 = Number(pair[1]);
        const p2 = Number(pair[2]);
        const p3 = Number(pair[3]);
        
        if((p2 >= p0) && (p2 <= p1)){
            counter++;
            return;
        }
        if((p3 >= p0) && (p3 <= p1)){
            counter++;
            return;
        }
        if((p0 >= p2) && (p0 <= p3)){
            counter++;
            return;
        }
        if((p1 >= p2) && (p1 <= p3)){
            counter++;
            return;
        }
    })    
    console.log('Number of all removals: '+ counter);
});
