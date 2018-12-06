const {
    main
} = require('./main.js');
const input = require('./input.js');

function getInput() {
    var courseNumber = input();
    return courseNumber;
}

function getOutput(output) {
    // How to output data, eg. to csv, to json, to console, etc.
    return;
}

(function () {
    const courseNumber = getInput();
    const output = main(courseNumber);
    getOutput(output);
})()