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
        m1 = 0;
        m2 = 0;
        m3 = 0; 
        for(let i = 0; i < e.length; ++i){
            if(e[i] > m1){
                m3 = m2;
                m2 = m1;
                m1 = e[i];
                continue;
            }
            if(e[i] > m2){
                m3 = m2;
                m2 = e[i];
                continue;
            }
            if(e[i] > m3){
                m3 = e[i];
            }
        }

        return m1 + m2 + m3;
    }
    console.log("Three Elves carrying together: " + max(calories) + " calories!")
  });
