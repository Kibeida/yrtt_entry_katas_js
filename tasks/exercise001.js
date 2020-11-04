// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
// More examples in the test cases below.

// Good luck!

function singles(arr){
    if (arr === undefined) throw new Error("array is required");

    let uniqueArray = arr.filter(item => arr.lastIndexOf(item) == arr.indexOf(item));
    let sum = 0;
    
    if (uniqueArray.length > 1) {
        sum = uniqueArray.reduce(function(total, amount){
            return total + amount
        });
    }

    return sum;
}

module.exports = {
    singles
};
