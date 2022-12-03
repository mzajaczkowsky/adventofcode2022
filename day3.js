// December 3rd, 2022
const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    const numbers = data.toString().split('\r\n');
    let sum = 0;
    
    for(let i = 0; i < numbers.length; i += 3){
        rucksackSecondItem = numbers[i+1].slice();
        rucksackThirdItem = numbers[i+2].slice();
        for(let j = 0; j < numbers[i].length; j++){
            if(!rucksackSecondItem.includes(numbers[i][j])) continue;
            if(!rucksackThirdItem.includes(numbers[i][j])) continue;
            const charcode = numbers[i].charCodeAt(j);
            if(charcode >= 65 && charcode <= 90){
                console.log("guessed letter: " + numbers[i][j] + " charcode: " + charcode)
                sum += charcode - 38;
                break;
            }
            if(charcode >= 97 && charcode <= 122){
                console.log("guessed letter: " + numbers[i][j] + " charcode: " + charcode)
                sum += charcode - 96;
                break;
            }
        }

        console.log("Sum = " + sum)
    }
    console.log("#############################")
    console.log("Answer = " + sum)
    console.log("#############################")
});
