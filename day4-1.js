// December 4th, 2022
const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    const pairs = data.toString().split('\r\n');
    const result = [];
    let counter = 0;
    pairs.forEach(e => {
        const pair = e.split(/,|-/);
        const p0 = Number(pair[0]);
        const p1 = Number(pair[1]);
        const p2 = Number(pair[2]);
        const p3 = Number(pair[3]);
        
        if(p0 < p2){
            if(p1 >= p3){
                result.push(p0+'-'+p1);
                counter++;
                return;
            }
            result.push(p0+'-'+p1+','+p2+'-'+p3);
            return;
        }
        if(p0 > p2){
            if(p1 <= p3){
                result.push(p2+'-'+p3);
                counter++;
                return;
            }
            result.push(p0+'-'+p1+','+p2+'-'+p3);
            return;
        }
        if(p0 === p2){
            if(p1 >= p3) result.push(p0+'-'+p1)
            if(p1 < p3) result.push(p2+'-'+p3)
            counter++;
        }
    })
    
    // result.forEach(e => console.log(e))
    console.log('Number of all removals: '+ counter)

});
