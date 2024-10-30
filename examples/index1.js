// Write a file wxith callback
const fs = require('fs');

fs.writeFile('myFile.txt', 'Hello world', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File created');
    }
});