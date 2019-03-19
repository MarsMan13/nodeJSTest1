var fs = require('fs');

fs.unlink('text1.txt', function(err){
    if(err) throw err;
    console.log('file deleted!');
});
