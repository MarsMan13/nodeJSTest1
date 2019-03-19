const http = require('http');
const fs = require('fs');
const url = require('url');


var server = http.createServer(function(req, res){

    var bg = 'tt';
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData);
    var dt = require('./Templates/data1.js');
    dt = dt.data();
    var dd = queryData.title;
    console.log('dd: '+dd);
    var title = dt[dd].title;
    var article = dt[dd].article;
    var footer = dt[dd].footer;

    bg = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${title}</title>
    </head>

    <body>
        <h2>${title}</h2>
        <div>
            <ul>
                <li><a href="/?title=HTML">HTML</a></li>
                <li><a href="/?title=CSS">CSS</a></li>
            </ul>
            <p>
                ${article}
            </p>
        </div>
        <footer>
            ${footer}
        </footer>
    </body>

    </html>
    `;

    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(bg);

    /*
    fs.readFile('./Templates/backBg.html', async function(err, data){
        bg = data;
        console.log('data: '+data);
        console.log('bg: '+bg);
        showTemplate();
        return 0;
    });

    function showTemplate(){
        var dt = require('./Templates/data1.js');
        dt = dt.data();
        console.log('bg2: '+bg);
    }
    */

}).listen(8080);
