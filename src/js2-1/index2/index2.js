// DOM 트리 여행하기
const myTag = document.querySelector('#list-1');

console.log(myTag);

// 형제 요소 노드
//tag.previous/nextelementSibling ->이전/이후 형제의 노드를 가져옴
console.log(myTag.previousElementSibling);
console.log(myTag.nextElementSibling);

// 부모 요소 노드
//tag.parentElement 현재 요소의 부모노드 가져옴
console.log(myTag.parentElement);

// 자식 요소 노드
//tag.children -> 해당 요소의 자식태그들을 가져옴 []가능
console.log(myTag.children[1]);
console.log(myTag.firstElementChild); //첫번째
console.log(myTag.lastElementChild); //마지막

console.log(myTag.parentElement.nextElementSibling)//여러태그이동 가능

// DOM 프로퍼티
const myTag = document.querySelector('#list-1');

// textContext
// 요소안의 있는 내용들중에서 텍스트만 가져온다. 
// 사용자의 입력을 웹페이지에 보여줄때 주로 사용됨
console.log(myTag.textContent);
// myTag.textContent = 'new text!'; // 마찬가지로 요소안의 내용을 수정함
// outerHTML
// 해당 요소를 포함한 전체 HTML을 가져온다. //줄바꿈이나 들여쓰기 가져온다.
console.log(myTag.outerHTML);

// innerHTML
//해당 요소안의 html태그 수정 및 확인
// 태그사이의 줄바꿈이나 들여쓰기도 가져온다.
console.log(myTag.innerHTML);
//myTag.innerHTML += '<li>Exotic</li>';//처럼 태그를 추가할수있고 +를 빼면 수정된다.