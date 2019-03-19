var fs = require('fs');

fs.open('text1.txt', 'w', function(err, file){
    if(err) throw err;
    else{
        console.log('Saved!');
    }
});
fs.writeFile('text1.txt','ttt', function(err){
    if(err) throw err;
    else{
        console.log('Replaced!');
    }
});
