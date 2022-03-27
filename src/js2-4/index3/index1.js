/*fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.text())
    .then((result) => { console.log(result); });
*/

// async/await
// async : 비동기/ 함수안의 비동기적으로 실행될 부분이 있다. : await 부분이 비동기
// await : await뒤에있는 프로미스 객체의 상태가 결정될때까지 기다린다.
//          async안에서만 사용이 가능하다
// async function fetchAndPrint(){
//     console.log(2);
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     console.log(7);
//     const result = await response.text();
//     console.log(result);
//     console.log(8);
// }
// console.log(1);
// fetchAndPrint();
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);


// try/catch
// 일반적인 try/catch문을 사용하면 된다.
// finally도 가능
async function fetchAndPrint(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.text();
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log('exit');
    }
}

fetchAndPrint();


