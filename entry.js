const {
    main
} = require('./main.js');
const input = require('./input.js');

function getInput() {
    var input = input();
    return input;
}

function getOutput(output) {
    // How to output data, eg. to csv, to json, to console, etc.
    return;
}

(function () {
    const input = getInput();
    const output = main(input);
    getOutput(output);
})()