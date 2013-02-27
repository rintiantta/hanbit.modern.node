// 모듈을 변수에 저장합니다.
var connect = require('connect');
var socketio = require('socket.io');
var fs = require('fs');
// 변수를 선언합니다.
var seats = [
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1]
];
// 웹 서버를 생성합니다.
var server = connect.createServer(connect.router(function (app) {
    // GET - /
    app.get('/', function (request, response, next) {
        fs.readFile('HTMLPage.htm', function (error, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        });
    });

    // GET - /seats
    app.get('/seats', function (request, response, next) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(seats));
    });
}));
// 서버를 실행합니다.
server.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
// 소켓 서버를 생성 및 실행합니다.
var io = socketio.listen(server);
io.set('log level', 2);
io.sockets.on('connection', function (socket) {
    // reserve 이벤트
    socket.on('reserve', function (data) {
        seats[data.y][data.x] = 2;
        io.sockets.emit('reserve', data);
    });
});