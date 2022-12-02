// December 1st, 2022
const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    const numbers = data.toString().split('\r\n');
    let sum = 0;
    let calories = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] !== ''){
            sum += Number(numbers[i]);
            continue;
        }
        calories.push(sum);
        sum = 0;
    }
    calories.push(sum);

    const max = (e) => {
        m = e[0];
        for(let i = 0; i < e.length; ++i){
            if(e[i] > m){
                m = e[i];
            }
        }
        return e.indexOf(m);
    }
    const maxIndex = max(calories);
    console.log("Maximum is placed in array on index: " + maxIndex + " with value: " + calories[maxIndex])
  });
