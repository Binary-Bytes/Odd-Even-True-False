function trueorfalse(num) {
    return num % 2 == 0;
}

function oddoreven(num) {
    let abc = num % 2 == 0;

    if (abc == true) {
        return "Even";
    } else if (abc == false) {
        return "Odd";
    }
}

module.exports = {
    trueorfalse,
    oddoreven
}