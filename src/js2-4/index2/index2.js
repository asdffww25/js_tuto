//catch 메소드

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.text())
    //.catch((error) => {console.log(error);})
    // catch메소드는 프로미스 객체가 rejected상태가 되면 실행할 콜백을 등록하는 메소드
    // then메소드의 두번째 파라미터에 넣는 방법 말고 catch로 해도 된다.
    // .then(undefined,  (error) => {console.log(error);}) 와 같다.

    .then((result) => { console.log(result); })
    .catch((error) => {console.log(error);})
    //catch는 콜백 맨 마지막에 사용해준다.

// finally 메소드
// try-catch-finally처럼 오류와 상관없이 무조건 실행한다.
// 파라미터가 없어도된다.
    .finally(() => { console.log('exit'); });

