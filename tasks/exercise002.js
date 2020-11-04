// The clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
// Your task is to make the 'past' function return the time converted to milliseconds.
// More examples in the test cases below.

function past(h, m, s){
    let hoursToMiliseconds = h * 60 * 60 * 1000;
    let minutesToMiliseconds = m * 60 * 1000;
    let secondsToMiliseconds = s * 1000;

    let result = hoursToMiliseconds + minutesToMiliseconds + secondsToMiliseconds;

    return result;
}

module.exports = {
    past
};
