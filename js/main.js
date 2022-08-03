// Constants
// 1.1
const colors = {
    'null' : 'white',
    '1' : 'red',
    '-1' : 'green'
};

// 1.2
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// State
let board = []; // 2.1
let turn = ""; // 2.2
let winner = ""; // 2.3

const squares = ""; // 3.1

// Upon Loading