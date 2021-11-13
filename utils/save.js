const fs = require('fs');
const path = require('path');
const os = require('os');
const chalk = require('chalk');


const savePassword = (password) => {

    const format = `Password: ${password}  Created At: ${new Date}${os.EOL}`

    fs.appendFile(path.join(__dirname, '../', 'passwords.txt'), format, err => {
        if (err) throw err;
        if (!err) console.log(chalk.rgb(242, 133, 0).bold('Password SAVED to passwords.txt'));
    })
}

module.exports = savePassword