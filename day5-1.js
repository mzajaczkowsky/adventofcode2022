// December 5th, 2022
const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    const moves = data.toString().split('\r\n');
    let result = '';
    const arr = [
        ['Q', 'F', 'M', 'R', 'L', 'W', 'C', 'V'],
        ['D', 'Q', 'L'],
        ['P', 'S', 'R', 'G', 'W', 'C', 'N', 'B'],
        ['L', 'C', 'D', 'H', 'B', 'Q', 'G'],
        ['V', 'G', 'L', 'F', 'Z', 'S'],
        ['D', 'G', 'N', 'P'],
        ['D', 'Z', 'P', 'V', 'F', 'C', 'W'],
        ['C', 'P', 'D', 'M', 'S'],
        ['Z', 'N', 'W', 'T', 'V', 'M', 'P', 'C']
    ];
    moves.forEach(e => {
        splittedArr = e.split(' ');
        count = splittedArr[1];
        sender = splittedArr[3] - 1;
        receiver = splittedArr[5] - 1;
        for(let i = 0; i < count; i++) {
            arr[receiver].push(arr[sender].pop())
        }
    })
    arr.forEach(e => {
        result += e.at(-1);
    })

    console.log('Result: ' + result)
});
