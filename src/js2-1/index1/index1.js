
//id로 태그 선택하기
//document.getElementById('id~~')
//해당 id태그를 가져온다.
const myNumberTag = document.getElementById('myNumber');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
console.log(myNumberTag)

let myNumber = +myNumberTag.textContent;

decreaseBtn.onclick = function() {
  myNumber--;
  myNumberTag.textContent = myNumber;
};

increaseBtn.onclick = function() {
  myNumber++;
  myNumberTag.textContent = myNumber;
};
//class로 태그 선택하기
//document.getElementsByClassName('class~~~')
//해당 class태그를 가져온다
//배열 비슷하게 가져온다.(유사배열)
const colorBtns = document.getElementsByClassName('color-btn');
//document.getElementsByClassName('red'); 하면 HTMLCollection을 가져온다
//한 요소만 가져오고 싶으면 []을 사용한다.
console.log(colorBtns)//배열 순서는 깊이와 상관없이 위에서부터 차례대로
console.log(colorBtns[1])
console.log(colorBtns.length)
for(let tag of colorBtns){
    console.log(tag)
}
//존재하지않는 클래스를 찾으면 빈 컬렉션을 출력한다.

for (let btn of colorBtns) {
  btn.onclick = function() {
    myNumberTag.style.color = btn.dataset.color;
  };
}

//css 선택자로 태그 선택하기
//document.qureySelector('#css~~')/('.css~~')
//#은 id/ .은 class
const myNumbercss1 = document.querySelector('#myNumber')
console.log(myNumbercss1)

const myNumvercss2 = document.querySelector('.color-btn')
console.log(myNumvercss2)
//querySelector를 사용하면 제일 위의 클래스태그만 가져온다
//querySelectorAll를 사용해서 해당 클래스를 NodeList라는 유사배열로 가져온다.
const myNumvercss3 = document.querySelectorAll('.color-btn')
console.log(myNumvercss3)

//이벤트 핸들링
const btn1 = document.querySelector('#myBtn1');
//onclick프로퍼티에 함수를 할당해준다.
btn1.onclick = function(){//이벤트 핸들러
    console.log('Hello Codeit!')
}