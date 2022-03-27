// 브라우저의 기본 동작
const link = document.querySelector('#link');
const checkbox = document.querySelector('#checkbox');
const input = document.querySelector('#input');
const text = document.querySelector('#text');

// event.preventDefault
// 브라우저 기본동작을 막는다.
link.addEventListener('click', function(e){
    e.preventDefault();
    alert('지금은 이동할 수 없습니다.')
})

input.addEventListener('keydown', function(e){
    if(!checkbox.checked){ // 체크박스의 체크 유무 
        e.preventDefault();
        alert('체크박스를 먼저 클릭해 주세요.')
    }
})

// 문서 전체를 사용할라면 text가 아닌 document로 하면됨
text.addEventListener('contextmenu', function(e){ // 해당 텍스트에 우클릭 금지
    e.preventDefault();
    alert('마우스 오른쪽 클릭은 사용할 수 없습니다.')
})