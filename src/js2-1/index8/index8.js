const list = document.querySelector('#list');

// for(let item of list.children){
//     item.addEventListener('click', function(e){
//         e.target.classList.toggle('done')
//     })
// }
// 위처럼 이벤트를 등록한 후에 새로 내용을 추가하면 이벤트가 적용 안된다.
const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li)
// 이를 버블링으로 해결한다.
// 자식요소가 아닌 부모 요소로 이벤트를 등록하면 된다.
// 이벤트 위임(Event Delegation)
list.addEventListener('click', function(e){
// if(e.target.tagName === 'LI')
// if문을 사용해서 자식이 아닌 공간을 클릭했을땐 이벤트가 안일어나게 한다.
    if(e.target.classList.contains('item')){
        e.target.classList.toggle('done')
    }
})

