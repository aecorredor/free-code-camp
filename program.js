// Manage Packages with npm Complete
// Start a Node.js Server Complete
// Continue working with Node.js Servers Complete
// Finish working with Node.js Servers
// Build Web Apps with Expressjs

// 3.
// var sum = 0;
// process.argv.forEach(function(argument, index) {
//     if(index >= 2) {
//         sum += +argument;
//     }
// });
// console.log(sum);

// 4.
// var fs = require('fs');
// var buffer = fs.readFileSync(process.argv[2]);
// var string = buffer.toString();
// var lines = string.split('\n');
// console.log(lines.length - 1);

// 5.
// var fs = require('fs');
// fs.readFile(process.argv[2], 'utf8', function(err, data) {
//     console.log(data.split('\n').length - 1);
// });

// 6.
// var fs = require('fs');
// fs.readdir(process.argv[2], function(err, list) {
//     if(err) {
//         console.log(err);
//     } else {
//         list.forEach(function(file) {
//             var extension = file.split('.')[1];
//             if(extension === process.argv[3]) {
//                 console.log(file);
//             }
//         });
//     }
// });

// 7.
// var filterFiles = require('./module');

// var logFiles = function(err, data) {
//     if(err) {
//         console.log(err);
//     } else {
//         data.forEach(function(file) {
//             console.log(file);
//         });
//     }
// }

// filterFiles(process.argv[2], process.argv[3], logFiles);

// 8.
// var http = require('http');
// http.get(process.argv[2], function(response) {
//     response.setEncoding('utf8');
//     response.on('data', function(data) {
//         console.log(data);
//     });
// });

// 9.
// var http = require('http');
// http.get(process.argv[2], function(response) {
//     var allData = "";
//     response.setEncoding('utf8');
    
//     response.on('data', function(data) {
//         allData = allData + data; 
//     });
    
//     response.on('end', function(data) {
//         console.log(allData.length);
//         console.log(allData);
//     });
// });

// 10.
// var http = require('http');
// http.get(process.argv[2], function(response) {
//     var allData = "";
//     response.setEncoding('utf8');
    
//     response.on('data', function(data) {
//         allData = allData + data; 
//     });
    
//     response.on('end', function(data) {
//         console.log(allData);
//         http.get(process.argv[3], function(response) {
//             var allData = "";
//             response.setEncoding('utf8');
            
//             response.on('data', function(data) {
//                 allData = allData + data; 
//             });
            
//             response.on('end', function(data) {
//                 console.log(allData);
//                 http.get(process.argv[4], function(response) {
//                     var allData = "";
//                     response.setEncoding('utf8');
                    
//                     response.on('data', function(data) {
//                         allData = allData + data; 
//                     });
                    
//                     response.on('end', function(data) {
//                         console.log(allData);
//                     });
//                 });
//             });
//         });
//     });
// });


// 11.
// var net = require('net');
// var server = net.createServer(function(socket) {
//     // logic here
//     var date = new Date();
//     var year = date.getFullYear();
//     var month = date.getMonth() + 1;
//     var correctMonth = month.toString().length === 1 ? `0${month}` : month;
//     var currentDay = date.getDate();
//     var correctDay = currentDay.toString().length === 1 ? `0${currentDay}` : currentDay;
//     var hour = date.getHours();
//     var correctHour = hour.toString().length === 1 ? `0${hour}` : hour;
//     var minutes = date.getMinutes();
//     var correctMinutes = minutes.toString().length === 1 ? `0${minutes}` : minutes;
//     var completeDate = `${year}-${correctMonth}-${correctDay} ${correctHour}:${correctMinutes}\n`;
    
//     socket.write(completeDate);
//     socket.end();
// });
// server.listen(process.argv[2]);


// 12.
// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function(req, res) {
//     // handle logic
//     var readStream = fs.createReadStream(process.argv[3]);
//     readStream.on('open', function() {
//         readStream.pipe(res);
//     });
// });
// server.listen(process.argv[2]);

// 13.
// var http = require('http');
// var map = require('through2-map');
// var server = http.createServer(function(req, res) {
//     // handle logic
//     if(req.method === 'POST') {
//         req.pipe(map(function(chunk) {
//             return chunk.toString().toUpperCase();
//         })).pipe(res);
//     }
// });
// server.listen(process.argv[2]);

// 14.
// var http = require('http');
// var url = require('url');
// var server = http.createServer(function(req, res) {
//     // handle logic
//     var urlObject = url.parse(req.url, true);
//     console.log(urlObject.pathname);
//     console.log(urlObject.search);
    
//     var query = urlObject.search.slice(1).split('=');
//     var isoDate = query[1];
    
//     if(urlObject.pathname === '/api/parsetime') {
//         var timePart = isoDate.split('T')[1].split(':');
//         var hour = timePart[0];
//         var minute = timePart[1];
//         var second = timePart[2].substring(0, 2);
        
//         res.writeHead(200, { 'Content-Type': 'application/json' })  
        
//         var json = JSON.stringify({
//             "hour": hour.length === 1 ? +hour.slice(1) : +hour,
//             "minute": minute.length === 1 ? +minute.slice(1) : +minute,
//             "second": second.length === 1 ? +second.slice(1) : +second
//         });
        
//         res.end(json, 'utf8');
//     }
    
//     if(urlObject.pathname === '/api/unixtime') {
//         var date = new Date(isoDate);
//         var epoch = date.getTime();
        
//         res.writeHead(200, { 'Content-Type': 'application/json' });
        
//         var json = JSON.stringify({
//             "unixtime": epoch
//         });
        
//         res.end(json, 'utf8');
//     }
    
//     res.end();
// });
// server.listen(process.argv[2]);

// Build Web Apps with Expressjs

// 15.
// var express = require('express');
// var app = express();

// app.get('/home', function(req, res) {
//     res.end('Hello World!');
// });

// app.listen(process.argv[2]);

// 16.
// var path = require('path');
// var express = require('express');
// var app = express();

// app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

// app.listen(process.argv[2]);

// 17.
// var express = require('express');
// var app = express();

// app.set('views', process.argv[3]);
// app.set('view engine', 'jade');

// app.get('/home', function(req, res) {
//     res.render('index', { date: new Date().toDateString() });
// });

// app.listen(process.argv[2]);

// 18.
// var bodyparser = require('body-parser');
// var express = require('express');
// var app = express();

// app.use(bodyparser.urlencoded({ extended: false }));

// app.post('/form', function(req, res) {
//     res.send(req.body.str.split('').reverse().join(''));
// });

// app.listen(process.argv[2]);

// 19.
// var express = require('express')
// var app = express()

// app.use(require('stylus').middleware(process.argv[3]));
// app.use(express.static(process.argv[3]));


// app.listen(process.argv[2])

// 20.
// var express = require('express');
// var app = express();
// var crypto = require('crypto');

// app.put('/message/:id', function(req, res) {
//     res.send(crypto.createHash('sha1')
//                   .update(new Date().toDateString() + req.params.id)
//                   .digest('hex'));
// });

// app.listen(process.argv[2]);

// 21.
// var express = require('express');
// var app = express();

// app.get('/search', function(req, res) {
//     res.send(req.query);
// });

// app.listen(process.argv[2]);

// 22.
// var express = require('express');
// var app = express();

// var fs = require('fs');

// app.get('/books', function(req, res) {
//   fs.readFile(process.argv[3], 'utf8', function(err, content) {
//       res.send(JSON.parse(content));
//   });
// });

// app.listen(process.argv[2]);

