// 모듈을 추출합니다.
var connect = require('connect');

// 서버를 생성합니다.
var server = connect.createServer();

// Logger 미들웨어를 사용합니다.
server.use(connect.logger());

// request 이벤트 핸들러를 지정합니다.
server.use(function (request, response) {
    // 응답합니다.
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Hello Connect Module</h1>');
});

// Error Handler 미들웨어를 사용합니다.
server.use(connect.errorHandler({
    stack: true,
    message: true,
    dump: true
}));

// 서버를 실행합니다.
server.listen(52273, function () {
    console.log('server running at http://127.0.0.1:52273');
});