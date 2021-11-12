const charCodes = require('./characters');

// Generating Password
const passwordGenerator = (length, uppercase = true, nums, specials) => {
    // Password by default is consist of lowercase chars
    let passwordChars = charCodes.LOWERCASE_CHARACTERS;
    // Adding uppercase chars if true
    if (uppercase) passwordChars = passwordChars.concat(charCodes.UPPERCASE_CHARACTERS);

    // Adding numbers if true
    if (nums) passwordChars = passwordChars.concat(charCodes.NUMBER_CHARACTERS);

    // Adding special chars if true
    if (specials) passwordChars = passwordChars.concat(charCodes.SPECIAL_CHARACTERS);

    // Finding a random char of the password and include it in the PASSWORD
    let char;
    let password = [];
    for (let i = 0; i < length; i++) {
        char = String.fromCharCode(passwordChars[Math.floor(Math.random() * passwordChars.length)]);
        password.push(char);
    }
    // returning the generated password as an string
    return password.join("");
}

module.exports = passwordGenerator