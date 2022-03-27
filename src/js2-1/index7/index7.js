// 이벤트 버블링 (Event Bubbling)
// 이벤트가 겹친다.
// 자식요소의 이벤트를 발생시키면 부모요소의 이벤트도 발생한다.
const content = document.querySelector('#content');
const title = document.querySelector('#title');
const list = document.querySelector('#list');
const items = document.querySelectorAll('.item');

content.addEventListener('click', function(e){
    console.log('content Event');
    console.log(e.target)
});

title.addEventListener('click', function(e){
    console.log('title Event');
    console.log(e.currentTarget)
});

list.addEventListener('click', function(e){
    console.log('list Event');
});

for(let item of items){
    item.addEventListener('click', function(e){
        console.log('item Event');
        e.stopPropagation();//버블링을 막을수있다.
    });
}