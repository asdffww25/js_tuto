const today = document.querySelector('#today');

today.innerHTML = '<li>처음</li>' + today.innerHTML;
today.innerHTML = today.innerHTML + '<li>마지막</li>';

today.outerHTML = '<p>이전</p>' + today.outerHTML; 
//outerHTML을 다루려면 한번 쓰고 다시 할당해줘야한다.
const newToday = document.querySelector('#today');
newToday.outerHTML = newToday.outerHTML + '<p>다음</p>';

//요소 노드 추가하기
const tomorrow = document.querySelector('#tomorrow');
// 1. 요소 노드 만들기 : document.createElement('태그이름')
const first = document.createElement('li') 

// 2. 요소 노드 꾸미기 :  textContent, innerHTML...
first.textContent = '처음';

// 3. 요소 노드 추가하기 : NODE.prepend, append, after, before
// prepend, append : 해당 노드의 자식노드에 추가한다.
// after, before : 해당 노드의 형제노드에 추가한다.
tomorrow.prepend(first); // 자식노드에 맨 앞에 추가
const last = document.createElement('li');
last.textContent = '마지막';
tomorrow.append(last);  // 자식노드 맨 뒤에 추가

const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.before(prev); // 형제노드 앞으로 추가

const next = document.createElement('p');
next.textContent = '다음';
tomorrow.after(next); // 형제노드 뒤로 추가