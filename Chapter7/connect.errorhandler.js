// 모듈을 추출합니다.
var connect = require('connect');

// 서버를 생성 및 실행합니다.
connect.createServer(function (request, response) {
    // 예외를 강제로 발생시킵니다.
    throw new Error('Page Not Found');
}, connect.errorHandler({
    stack: true,
    message: true,
    dump: true
})).listen(52273, function () {
    console.log('server running at http://127.0.0.1:52273');
});