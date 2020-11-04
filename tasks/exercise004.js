// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigLatin(str){
    if(str == null || str.trim() === "") throw new Error("Please provide str");
    
    let words = str.split(" ");
    let result = [];
   
    words.forEach(word=>{
        let firstChar = word[0];
        let remainingCharsWithMarks = word.substring(1).split('');
        let remainingCharsWithoutMarks = "";
        let marks = "";
        remainingCharsWithMarks.forEach(char=>{
            if (!char.match(/^[.,:!?]/)) {
                remainingCharsWithoutMarks += char;
            }else{
                marks += char;
            }
        });

        result.push(remainingCharsWithoutMarks + firstChar + "ay" + marks);
    });

    return result.join(" ");
}

module.exports = {
    pigLatin
};
