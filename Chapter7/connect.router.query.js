// 모듈을 추출합니다.
var connect = require('connect');
// 서버를 생성합니다.
connect.createServer(connect.router(function (app) {
    // GET - /Product/:id
    app.get('/Product/:id', function (request, response, next) {
        // 응답합니다.
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<h1>Product Page - ' + request.params.id + '</h1>');
        response.end();
    });
    // ALL - *
    app.all('*', function (request, response, next) {
        throw new Error('Page Not Found');
    });
}), connect.errorHandler({
    stack: true,
    message: true,
    dump: true
})).listen(52273, function () {
    console.log('server running at http://127.0.0.1:52273');
});