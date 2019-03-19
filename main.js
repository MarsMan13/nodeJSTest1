var http = require('http');
var fs = require('fs');
var url = require('url');
const templatesDir = './Templates';

var app = http.createServer(function(req, res) {
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = queryData['title'];
    var arr = ['HTML', 'CSS'];


    if (pathname === '/') {
        if (title == undefined) {
            title = 'Welcome';
            showPage('Welcome to nodeJS');
        } else {
            console.log('its good');
            showPage();
        }
    } else {
        res.writeHead(404);
        res.end("<h1>ERRor 404: Not found</h1>");
    }



    function showPage() {
        var homeURL = '/';
        var argument1;
        if(arguments[0]){
            argument1 = arguments[0];
        }
        console.log('title: '+title);
        fs.readFile(`Templates/content_${title}.html`, 'utf-8', function(err, article) {    //readFile@@@@@@@@@@@@@@@@@@@@@
            fs.readdir(templatesDir, function(err, fileList) {  //readDirectory@@@@@@@@@@@@@@@@@@@@
                var lis = "";
                for (var i = 0; i < fileList.length; i++) {
                    if(fileList[i].search('content_') >= 0){
                        console.log('fileName: '+fileList[i]);
                        lis += `<li id="${fileList[i]}">`;
                        lis += fileList[i].slice(fileList[i].indexOf('_')+1, fileList[i].indexOf('.'));
                        lis += "</li>";
                    }
                }


                if (argument1) {
                    var article = argument1;
                }
                console.log('article: '+article);
                console.log('argument1: '+argument1);

                var template = `
                <!DOCTYPE html>
                <html lang="en">

                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>${title}</title>
                </head>

                <body>
                <h1><a href='${homeURL}'>Web</a></h1>
                <h3>${title}</h3>
                <div>
                <ul>
                    ${lis}
                </ul>
                <p>
                ${article}
                </p>
                </div>
                <footer>
                    <h4>no footer</h4>
                </footer>
                </body>

                </html>

                `;
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(template);
            });
        });
    };
}).listen(8080);
