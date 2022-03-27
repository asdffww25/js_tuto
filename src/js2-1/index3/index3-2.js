// 노드 삭제와 이동
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// 노드 삭제하기: Node.remove()
//tomorrow.remove();
today.children[2].remove(); 
// 노드 이동하기: prepend, append, before, after
today.append(tomorrow.children[1]) // today에 마지막 자식요소에 tomorrow의 1번 자식을 이동

tomorrow.children[0].after(today.children[1]); //tomorrow의 0번쨰 자식 뒤에 today의 1번자식을 이동


