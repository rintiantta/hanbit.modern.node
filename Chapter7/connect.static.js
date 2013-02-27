// 모듈을 추출합니다.
var connect = require('connect');

// 서버를 생성 및 실행합니다.
connect.createServer(
    // Static 미들웨어를 사용합니다.
    connect.static(__dirname + '/Resources'),
    // Request 이벤트 핸들러를 등록합니다.
    function (request, response) {
        // 응답합니다.
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('<img src="/Penguins.jpg" width="100%" />');
    }
).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});