// HTML 속성 (HTML attribute)
const tomorrow = document.querySelector('#tomorrow');
const today = document.querySelector('#today')
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;
//~~~Attribute('속성')
// elem.getAttribute('속성'): 속성에 접근하기
// 해당태그에 추가된 모든 태그에 접근 가능
console.log(tomorrow.getAttribute('href'));
console.log(item.getAttribute('class'));

// elem.setAttribute('속성', '값'): 속성 추가(수정)하기
// 없으면 추가 있으면 수정
tomorrow.setAttribute('class', 'list'); // 추가
link.setAttribute('href', 'https://www.codeit.kr'); // 수정

// elem.removeAttribute('속성'): 속성 제거하기
tomorrow.removeAttribute('href'); 
tomorrow.removeAttribute('class'); 

// id 속성
console.log(tomorrow);
console.log(tomorrow.id);

// class 속성
console.log(item);
console.log(item.className);

// href 속성
console.log(link);
console.log(link.href);
console.log(tomorrow.href);
////////////////////////////////////////////////////

//style프로퍼티

//이러면 복잡해지고 코드가 길어짐
today.children[0].style.textDecoration = 'line-through'
today.children[0].style.backgroundColor = '#DDDDDD'

//elem.className
//클래스 속성값 전체가 변경됨
today.children[1].className = 'done'

//elem.classList
//이를 활용하면 클래스 활용을 하나씩 다룬다.
//add, remove, toggle함수 활용 가능
const item1 = tomorrow.children[1];
item1.classList.add('done')
//toggle은 있으면 제거하고 없으면 추가한다.
item1.classList.toggle('done')