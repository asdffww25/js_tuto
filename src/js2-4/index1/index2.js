// string타입의 json을 js의 객체로 변환
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.text())
    //JSON.parse(); json데이터를 객체로 변환
    .then((result) => {
        const users = JSON.parse(result);
        console.log(users.length);
        users.forEach((user) => {
            console.log(user.name)
        })
    });
