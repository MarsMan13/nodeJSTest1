var url = require('url');
var adr = "http://www.localhost:8080/default.html?year=2017&month=february";
var q = url.parse(adr, true);

console.log(adr);
console.log('------');
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);
console.log('q.query: ', q.query);
