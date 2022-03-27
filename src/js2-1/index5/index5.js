let btn = document.querySelector('#myBtn')

// btn.onclick = function(){
//     console.log('Hi Codeit!')
// }
// onclick을 쓰면 실수로 덮어쓸 수 있다.

// elem.addEventListener(event, handler)
// event에는 이벤트 타입을 넣는다
/*
이벤트 타입들
mousedown	마우스 버튼을 누르는 순간
mouseup	마우스 버튼을 눌렀다 떼는 순간
click	왼쪽 버튼을 클릭한 순간
dblclick	왼쪽 버튼을 빠르게 두 번 클릭한 순간
contextmenu	오른쪽 버튼을 클릭한 순간
mousemove	마우스를 움직이는 순간
mouseover	마우스 포인터가 요소 위로 올라온 순간
mouseout	마우스 포인터가 요소에서 벗어나는 순간
mouseenter	마우스 포인터가 요소 위로 올라온 순간 (버블링이 일어나지 않음)
mouseleave	마우스 포인터가 요소에서 벗어나는 순간 (버블링이 일어나지 않음)

keydown	키보드의 버튼을 누르는 순간
keypress	키보드의 버튼을 누르는 순간 ('a', '5' 등 출력이 가능한 키에서만 동작하며, Shift, Esc 등의 키에는 반응하지 않음)
keyup	키보드의 버튼을 눌렀다 떼는 순간

focusin	요소에 포커스가 되는 순간
focusout	요소로부터 포커스가 빠져나가는 순간
focus	요소에 포커스가 되는 순간 (버블링이 일어나지 않음)
blur	요소로부터 포커스가 빠져나가는 순간 (버블링이 일어나지 않음)

change	입력된 값이 바뀌는 순간
input	값이 입력되는 순간
select	입력 양식의 하나가 선택되는 순간
submit	폼을 전송하는 순간

scroll	스크롤 바가 움직일 때

resize	윈도우 사이즈를 움직일 때 발생

*/
function event1(){
    console.log('Hi Codeit!')
}

function event2(){
    console.log('Hi again!')
}

btn.addEventListener('click', event1)
btn.addEventListener('click', event2)

// elem.removeEventListener(event, handler)
// 꼭 등록한 함수 이름으로 전달 할 것
btn.removeEventListener('click', event2)