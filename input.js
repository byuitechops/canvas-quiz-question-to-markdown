module.exports = function () {
    var courseCode;
    courseCode = Number(process.argv[2]);
    if (courseCode === NaN) {
        throw 'courseCode is Not a Number';
    }
    return courseCode;
}