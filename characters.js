// ASCII Character Codes

const LOWERCASE_CHARACTERS = getCharCodes(97, 122)
const UPPERCASE_CHARACTERS = getCharCodes(65, 90)
const NUMBER_CHARACTERS = getCharCodes(48, 57)
const SPECIAL_CHARACTERS = getCharCodes(33, 47)
    .concat(getCharCodes(58, 64))
    .concat(getCharCodes(94, 126));

// Getting character codes
function getCharCodes(from, to) {
    let chars = [];
    for (let i = from; i <= to; i++) {
        chars.push(i)
    }
    return chars;
}

module.exports = {
    LOWERCASE_CHARACTERS,
    UPPERCASE_CHARACTERS,
    SPECIAL_CHARACTERS,
    NUMBER_CHARACTERS
}