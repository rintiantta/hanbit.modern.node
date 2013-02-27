// 모듈을 추출합니다.
var connect = require('connect');
// 서버를 생성합니다.
connect.createServer(connect.router(function (app) {
    // GET - /Home/Index
    app.get('/Home/Index', function (request, response, next) {
        // 응답합니다.
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<h1>Index Page</h1>');
        response.end();
    });
    // GET - /Home/About
    app.get('/Home/About', function (request, response, next) {
        // 응답합니다.
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<h1>About Page</h1>');
        response.end();
    });
})).listen(52273, function () {
    console.log('server running at http://127.0.0.1:52273');
});