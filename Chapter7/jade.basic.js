// 모듈을 추출합니다.
var http = require('http');
var jade = require('jade');
var fs = require('fs');

// 서버를 생성하고 실행합니다.
http.createServer(function (request, response) {
    // JadePage.jade 파일을 읽습니다.
    fs.readFile('JadePage.jade', 'utf8', function (error, data) {
        // Jade 모듈을 사용합니다.
        var fn = jade.compile(data);
        // 출력합니다.
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(fn({
            name: 'RintIanTta',
            description: 'Hello EJS With Node.js .. !'
        }));
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});