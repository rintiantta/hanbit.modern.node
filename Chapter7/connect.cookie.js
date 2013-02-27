// 모듈을 추출합니다.
var connect = require('connect');

// 서버를 생성합니다.
connect.createServer(connect.cookieParser(), connect.router(function (app) {
    // GET - /SetCookie
    app.get('/SetCookie', function (request, response) {
        // 응답합니다.
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'Set-Cookie': ['breakfast=toast', 'dinner=lunch']
        });
        response.end('<a href="/GetCookie">GO TO GET COOKIE</a>');
    });

    // GET - /GetCookie
    app.get('/GetCookie', function (request, response) {
        // 쿠키를 추출합니다.
        var output = JSON.stringify(request.cookies);

        // 응답합니다.
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('<h1>' + output + '</h1>');
    });
})).listen(52273, function () {
    console.log('server running at http://127.0.0.1:52273');
});