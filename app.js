#!/usr/bin/env node
const { program } = require('commander');
const chalk = require('chalk');
const clipboard = require('clipboardy');
const passgen = require('./utils/passgen');
const log = console.log;
const savePassword = require('./utils/save');

// Setting version and description
program
    .version('1.0.0')
    .description('🧰 Password Generator 🧰');

// Adding options(flags)
program
    .option('--length <number>', 'specify the length', '8')
    .option('-ns,--no-special', 'no special characters included')
    .option('-nn,--no-number', 'no numbers included')
    .option('-s, --save', 'save to passwords.txt', false)
    .parse(process.argv);

const options = program.opts();

// Generating the password using flags 
let password = passgen(options.length, options.number, options.special);

// Saving to clipboard
clipboard.writeSync(password)

// Output password
log(chalk.cyanBright('Generated Password --> ') + chalk.rgb(255, 79, 167)(password));
// confirmation message
log(chalk.rgb(255, 153, 145)('Password copied to clipboard!'));

// Saving password to passwords.txt
if (options.save) {
    savePassword(password)
}