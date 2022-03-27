// fetch : 서버를 요청(request)을 보내고 응답(response)을 받는 함수
fetch('https://www.codeit.kr/learn/courses/javascript-intermediate/4333')
// 콜백 함수 : 어떤 조건이 만족되었을떄 실행되는 함수
// 아래 함수는 콜백함수이다.
// .then : 콜백함수를 등록해주는 메소드, fetch가 리턴하는 promise객체를 리턴함
// 이전 콜백의 리턴값을 다음 콜백이 넘겨받는다
	.then((response) => response.text()) // 이떄의 리턴값은 response.text()
    //response.text()가 다음 콜백인 result에 넘겨진다.
	.then((result) => { console.log(result); });

