// 모듈을 추출합니다.
var connect = require('connect');
var ejs = require('ejs');
var fs = require('fs');
var socketio = require('socket.io');

// 변수를 선언합니다.
var roomArray = [];

// 웹 서버를 생성 및 실행합니다.
var server = connect.createServer();

// Router 미들웨어를 사용합니다.
server.use(connect.router(function (app) {
    // GET - /
    app.get('/', function (request, response) {
        fs.readFile('Lobby.htm', function (error, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        });

    });

    // GET - /Canvas/:room
    app.get('/canvas/:room', function (request, response) {
        fs.readFile('Canvas.htm', 'utf8', function (error, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(ejs.render(data, {
                room: request.params.room
            }));
        });
    });

    // GET - /room
    app.get('/room', function (request, response) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(roomArray));
    });
}));

// Static 미들웨어를 사용합니다.
server.use(connect.static(__dirname + '/Resource'));

// 웹 서버를 실행합니다.
server.listen(52273);

// 소켓 서버를 생성 및 실행합니다.
var io = socketio.listen(server);
io.set('log level', 2);
io.sockets.on('connection', function (socket) {
    // join 이벤트
    socket.on('join', function (data) {
        socket.join(data);
        socket.set('room', data);
    });

    // room 이벤트
    socket.on('draw', function (data) {
        socket.get('room', function (error, room) {
            io.sockets.in(room).emit('line', data);
        });
    });

    // addroom 이벤트
    socket.on('addroom', function (data) {
        roomArray.push(data);
        io.sockets.emit('addroom', data);
    });
});