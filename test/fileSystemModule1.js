var fs = require('fs');

fs.appendFile('text1.txt', 'Hello Content', function(err){
    if(err) throw err;
    else console.log('Saved!');
});
