// 모듈을 추출합니다.
var fs = require('fs');
var url = require('url');
var connect = require('connect');
var cluster = require('cluster');
var os = require('os');
var color = require('cli-color');
var mysql = require('mysql');

// 데이터베이스와 연결합니다.
var client = require('mysql').createClient({
    user: 'root',
    password: '1234',
    database: 'location'
});

// 웹 서버를 생성합니다.
var server = connect.createServer();
server.use(connect.query());
server.use(connect.router(function (app) {
    // GET - /Tracker
    app.get('/Tracker', function (request, response) {
        // Tracker.htm 파일을 제공합니다.
        fs.readFile('Tracker.htm', function (error, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        });
    });

    // GET - /Observer
    app.get('/Observer', function (request, response) {
        // Observer.htm 파일을 제공합니다.
        fs.readFile('Observer.htm', function (error, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        });
    });

    // GET - /ShowData
    app.get('/ShowData', function (request, response) {
        console.log(request.query);
        // 데이터베이스의 데이터를 제공합니다.
        client.query('SELECT * FROM locations WHERE name=?', [request.query.name], function (error, data) {

        });
    });
}));

// 웹 서버를 실행합니다.
server.listen(52273, function () {
    console.log(color.yellow('   server-'), 'start the Server Running at http://127.0.0.1:52273');
});

// 소켓 서버를 생성 및 실행합니다.
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    // join 이벤트
    socket.on('join', function (data) {
        socket.join(data);
    });

    // location 이벤트
    socket.on('location', function (data) {
        // 데이터를 삽입합니다.
        client.query('INSERT INTO locations(name, latitude, longitude, date) VALUES (?, ?, ?, NOW())', [data.name, data.latitude, data.longitude]);

        // receive 이벤트를 발생시킵니다.            
        io.sockets.in(data.name).emit('receive', {
            latitude: data.latitude,
            longitude: data.longitude
        });
    });
});