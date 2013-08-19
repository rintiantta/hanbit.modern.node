#Node.js Programming Example

`모던 웹을 위한 Node.js 프로그래밍『한빛미디어, 2012』`에 사용된 예제입니다.
그냥 위에 zip 파일 눌러서 다운 받으면 됩니다.

질문은 issues에 글을 남겨주시면 됩니다.
모두 함께 답변을 해주세요!
우리 함께 만들어가는 좋은 대한민국 개발 세상 "ㅁ" ....

#중요 모듈 변경
##connect 모듈
connect 모듈이 엄청나게 변경되었습니다. 본문에서 Express 프레임워크를 공부하기 위해 잠깐 보는 용도이므로 다음과 같이 입력해서 1.8.5버전을 설치하고 공부하는 것을 추천합니다.

```shell
npm install connect@1.8.5
```

##mysql 모듈
mysql 모듈의 `createClient() 메서드`가 `createConnection() 메서드`로 변경되었습니다. 이것만 변경하면 모두 정상적으로 사용하실 수 있습니다. ㅎㅎ
```javascript
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password'
})
connection.connect()
```
자세한 내용은 공식 모듈 페이지 [node-mysql](https://github.com/felixge/node-mysql)를 참고하세요.

#버그
코드 5-5가 제대로 실행되고 계시지 않을 것입니다. 'ㅁ' 
공식 홈페이지의 예제도 실행되고 있지 않은 상황입니다. 'ㅁ' (두둥) 
현재 버그로 보이구요 'ㅁ' .... 잘 안 쓰는 녀석이다보니 우선 순위가 밀려서 수정이 늦어지는 것 같군요 ;ㅁ;

#오탈자
죄송합니다. 'ㅂ' ... 오타가 있겠지... 15명이 검토를 했어도 있을 것입니다.. ;ㅁ; ...

###Page 64 + Page 65 - opensrc님 발견!
코드 4-14 - CONPLETE를 COMPLETE로
코드 4-15 - CONPLETE를 COMPLETE로 

###Page 77 - baramseo님 발견!
removeAllListener를
removeAllListeners로!

###Page 89
89페이지 시작부분 코드 6-4 가 6-3이 되어야 합니다.

###Page 111
살쳐보면 -> 살펴보면

###Page 121
하단의 내용이 EJS 모듈이 아니라 Jade 모듈입니다.
 
###Page 152
주석 "// GET - /LOGIN"다음 부분의
```javascript
if(request.cookies.auth == true)
```
부분을
```javascript
if(request.cookies.auth == 'true')
```
로 해주세요 ㅠㅁㅜ

###Page 155
원래 이 코드를
```javascript
// 모듈을 추출합니다.
var connect = require('connect');

// 서버를 생성합니다.
var server = connect.createServer();

// 미들웨어를 사용합니다.
server.use(connect.cookieParser());
server.use(connect.session());
server.use(function (request, response) {
    // 변수를 선언합니다.
    var output = '';
    output += '<h1>Cookies: ' + JSON.stringify(request.cookies) + '</h1>';
    output += '<h1>Session: ' + JSON.stringify(request.session)) + '</h1>';
   
    // 응답합니다.
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(output);
    
    // 세션을 생성합니다.
    response.session.now = (new Date()).toUTCString();
});
```
이것으로 수정합니다. 'ㅁ'
```javascript
// 모듈을 추출합니다.
var connect = require('connect');

// 서버를 생성합니다.
var server = connect.createServer();

// 미들웨어를 사용합니다.
server.use(connect.cookieParser());
server.use(connect.session());
server.use(function (request, response) {
    // 변수를 선언합니다.
    var output = '';
    output += '<h1>Cookies: ' + JSON.stringify(request.cookies) + '</h1>';
    output += '<h1>Session: ' + JSON.stringify(request.session)) + '</h1>';
   
    // 세션을 생성합니다.
    request.session.now = (new Date()).toUTCString();
   
    // 응답합니다.
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(output);
});
```
session 미들웨어의 매개 변수 부분과 세션을 생성하는 부분이 response 객체에서 request 객체로 변경되었답니다. 'ㅁ' ...
 
###Page 176 - 담요님 발견!
`createClient()` 메서드가 `createConnection()` 메서드로 변경되었습니다.
음 ㅇㅂㅇ 모듈 홈페이지를 보니 메서드 이름이 변경된 것이 맞군요 ㅎㅎ
https://github.com/felixge/node-mysql
변경 내용에 추가하도록 하겠습니다 ㅠㅜ ㅎㅎ

메서드 이름이 변경되는 이유는 대부분 간단합니다.
"개발자 마음에 들지 않아서...!"
 
자바나 마이크로소프트 관련 기술은 특정한 기업이 주도적으로 기술을 지원하므로
완전히 인정된 기술(안정화된)이 상용화됩니다.
대신 어떠한 기술이 안정되었다고 알려지기 전까지는 기술을 공개하지 않으므로
발달 속도가 그만큼 늦습니다. ㅇㅂㅇ ㅎㅎ
 
반면 Ruby, Node.js 같은 오픈소스 진영(사람들이 협업해서 만들어나가는)의 경우는
어떤 개발자가 "이런게 있으면 좋겠다."라고 말하고 빠른 속도로 확산되는 편입니다.
다만 아직 안정화되지 않고 메서드 이름에 대한 논쟁도 많다보니
메서드 이름이나 기능과 구조가 자주 변경됩니다. ㅎㅎ
 
예를들어 웹 개발에 개발 속도 혁명을 일으켰던 Ruby on Rails는 2004년에 나왔습니다. 당시의 자바나 마이크로소프트 진영보다 웹 개발 속도가 10배 정도 빨랐습니다. 사람들은 모두 레일스를 공부하고 사용하려는데.... 2.0버전으로 올라가면서 내용이 와장창 바뀌었답니다. 그리고 또 공부하다보니 3.0 버전으로 올라가면서 와장창 ㅠㅜ.... 지금 4.0버전 베타 진행중인데.... 또.... ;ㅁ; (따라서 오픈 소스 진영을 다룰 때는 항상 최신 버전을 사용하는 것보다 현재 개발하고 있는 버전을 맞춰서 개발하는 것이 좋답니다.)
 
마찬가지로 현재 Node.js가 1.0 버전도 나오지 않은 상태라
모듈 시장이 굉장히 춘추 전국 시대입니다. ㅠㅜ
책의 내용들이 조금 많이 바뀌었죠 ㅠ_ㅜ
(connect 모듈은 완전히 엎어졌고 Express 프레임워크도 3.0버전으로 올라가면서 레이아웃 기능이 사라졌습니다. ㅠㅜㅠㅜ)
  
###Page 185
http://127.0.0.1:522273으로 되어 있는 것을 http://127.0.0.1:52273으로 변경해주세요 'ㅁ'

###Page 190 - 인두기님 발견! 
```javascript
app.post('/Edit', function () { })
```
이런식으로 책에는 되어있는데요.
 
실행하면 Cannot POST /Edit/2 
이런 오류가 뜹니다. 
```javascript
app.post('/Edit/:id'. function () {})
```
이렇게 고치니깐 제대로 수정이 되네요.
 
###Page 204 - opensrc님 발견!
`$ NODE_ENV = production node app`를 `$ NODE_ENV=production node app`로 수정합니다.

###Page 207 - opensrc님 발견! 
그림 9-10의 아래 부분이 잘려서 index.is로 보이는데 index.js 입니다.

###Page 213 - opensrc님 발견! 
코드 9-23의 Rint Guitar Store Admin Page를 Layout Page로 수정합니다.
음... 원래 Express 프레임워크로 전자 상거래 사이트 만드는 예제로 넣었다가 =ㅅ= ...
Node.js로 왜 전자 상거래 사이트를 맹글어.... 다른 프레임워크 많은데.... 해서 지우는 바람에 생긴 오타군요. ㅎㅎ
 
###Page 228 - opensrc님의 발견!
그림 10-4 http://127.0.0.1:52273/socket.io.socket.io.js를
그림 10-4 http://127.0.0.1:52273/socket.io/socket.io.js로 수정합니다.

###Page 240 - baramseo님 발견!
코드 10-18의 chaeset -> charset

###Page 244 - baramseo님 발견!
코드 10-25의 charse t -> charser

###Page 245
코드 내부에서 jQuery를 사용했는데 jQuery 파일 추가를 안 했군요 'ㅁ' ...
```html
<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
```
이 코드를 추가해주세요 ㅎㅎ ;ㅁ; 

###Page 294 - 담요님 발견!
"실시간 위치 추적" 예제를 보시면, 서버에서 클라이언트로 date를 전달하지 않습니다. ;ㅁ;
latitude, longitude 속성과 더불어 date 속성도 전달해주세요! ㅎㅎ
 
###Page 334 - opensrc님 발견!
14.8 정리 및 남은 과제의 3번 "canvas 태그에 그린 그림 저장합니다."를 "canvas 태그에 그린 그림을 저장합니다."로 바꿉니다.
