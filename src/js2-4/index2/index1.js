console.log('Start');

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.text())
    .then((result) => { console.log(result); });

console.log('End')

//결과는
/*
Start
End
fetch함수실행

start출력되고, fetch함수가 실행, then메소드로 콜백을 등록, end출력, 서버로부터 response를 받아서 then실행
then메소드는 콜백(서버로부터 response받았을떄 실행)을 등록만하고 실행은 하지 않는다.

이처럼 한번 시작된 작업이 완료되기전에 다음코드로 실행이 넘어가고 나중에 콜백이 시작해서
작업이 마무리되는 것을 [비동기] 실행이라 한다.

fetch는 poromise객체를 리턴하는게 이 객체가 비동기실행을 한다.

promise : 어떤 작업에 관한 '상태정보'
    pending : 진행중
    fulfilled : 성공
    rejected : 실패
    promise객체가 성공이 되면 promise는 작업성공결과도 가지게 된다.
    서버가 보내주는 response가 작업성공결과에 해당된다.
    반대로 promise객체가 실패가 되면 작업실패정보를 가지게 된다.
    
then메소드는 promise객체가 fulfilled상태가 되었을때 실행할 콜백을 등록하는 메소드
작업성공결과가 콜백의 파라미터로 넘어오게 된다.
*/

/*
promise chaining
then메소드 뒤에는 계속해서 then메소드를 붙일수 있다.
이를 promise chaining라고 한다. : 프로미스객체를 연결~~
then메소드는 새로운 promise객체를 리턴한다.

*/