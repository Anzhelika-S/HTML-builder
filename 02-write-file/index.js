const { stdin, stdout } = process;
const fs = require("fs");
const path = require("path");

stdout.write('Hello! Write something to input in a file:\n');

stdin.on('data', (data) => {
    if(data.toString('utf-8') === 'exit') {
        stdout.write('Bye!');
        process.exit()
    } else {
        if(!path.join(__dirname,'text.txt')) {
        fs.writeFile(
            path.join(__dirname,'text.txt'),
            `${data}`,
            (err) => {
                if (err) throw err;
            },
        );
        } else {
            fs.appendFile(
                path.join(__dirname,'text.txt'),
                `${data}`,
                (err) => {
                    if (err) throw err;
                },
            )
        }
    }
})

process.on('SIGINT', () => {
    stdout.write('Bye!');
    process.exit()
})