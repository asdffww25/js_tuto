// GET request : 조회
// URL끝에 원하는 아이디값을 넣으면 특정 직원의 정보가 나온다.
/*fetch('https://learn.codeit.kr/api/members/3')
    .then((response) => response.text())
    .then((result) => { console.log(result); });
*/
// POST request : 추가
const newMember = {
    name: 'Jerry',
    email: 'jerry@codeitmall.kr',
    department: 'enginerering',
};

fetch('https://learn.codeit.kr/api/members', {
    method: 'POST',
    //stringify(): parse의 반대, 객체타입의 데이터를 스트링타입의 JSON데이터로 만들어줌
    body: JSON.stringify(newMember),
})
    .then((response) => response.text())
    .then((result) => { console.log( result); });

// PUT requset : 수정
const member = {
    name: 'Alice',
    email: 'alice@codeitmall.kr',
    department: 'marketing',
};
// 수정할라면 해당 아이디를 알아야한다.
fetch('https://learn.codeit.kr/api/members/2',{
    method: 'PUT',
    body: JSON.stringify(member),
})
    .then((response) => response.text())
    .then((result) => { console.log( result); });

// DELETE requset : 삭제

fetch('https://learn.codeit.kr/api/members/2',{
    method: 'DELETE',
})
    .then((response) => response.text())
    .then((result) => { console.log( result); });
