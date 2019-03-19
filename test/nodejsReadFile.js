const fs = require('fs');
fs.readFile('sample1.txt', 'utf-8', function(err, data){
    console.log(data);
});

console.log(fs.readFileSync('sample1.txt', 'utf-8'));
