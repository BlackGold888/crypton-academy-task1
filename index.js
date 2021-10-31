fs = require('fs');

async function readFile(fileName) {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(fileName, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                let inputLines = data.split("\r\n");
                let outputLine = parseInt(inputLines[0]) + parseInt(inputLines[1]);

                resolve(outputLine)
            });
        } catch (e) {
            console.log(e);
        }
    });
}

function writeFile(fileName, data) {
    fs.writeFile(fileName, `${data}`, function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log('\x1b[32m%s\x1b[0m', '[TASK 1] Successfully done');
    });
}


(async function () {
    let data = await readFile('input.txt');
    writeFile('output.txt', data);
})();
