var templatesDir = '../Templates';
var fs = require('fs');

fs.readdir(templatesDir, function(err, fileList){
    console.log(fileList);
    console.log(fileList[0]);
});
