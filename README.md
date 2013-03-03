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

#오탈자 - 조금씩 옮기겠습니다. 흐흨
