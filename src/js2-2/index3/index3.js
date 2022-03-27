const members = ['영훈', '윤수', '동욱', '태호'];

// forEach
members.forEach(function (member){
    console.log(member)
})
/*
// arrow가능
members.forEach((member) => {
    console.log(member)
})

두번째 파라미터로 인덱스를 가져옴
members.forEach(function (member, i){
    console.log(member) // 영훈, 윤수, 동욱, 태호
    console.log(i) // 0 1 2 3
})

세번째 파라미터로 현재의 반복중인 배열을 호출한다.

*/

/*
    map
    forEach와 비슷하게 동작한다.
    map은 새로운 배열을 리턴한다.
*/

/*

const devices = [
  { name: 'GalaxyNote', brand: 'Sansung'},
  { name: 'MacbookPro', brand: 'Apple'},
  { name: 'iPad', brand: 'Apple'},
  { name: 'GalaxyWatch', brand: 'Sansung'},
  { name: 'iMac', brand: 'Apple'},
  { name: 'GalaxyBuds', brand: 'Samsung'},
  { name: 'Gram', brand: 'LG'},
  { name: 'GalaxyBook', brand: 'Samsung'},
  { name: 'SurfacePro', brand: 'Microsoft'},
  { name: 'ZenBook', brand: 'Asus'},
  { name: 'MacbookAir', brand: 'Apple'}];
  
// 콜백함수가 리턴하는 조건식이 true경우만 배열을 리턴해준다.
// 필터링된 새로운 배열을 얻을때 사용한다.
const apples = devices.filter((el) => el.brand === 'Apple');
  
console.log(apples);
  
// find는 조건에 만족하는 하나의 값만을 찾아서 값을 리턴한다.
// 조건이 만족할경우 반복을 종료한다.
const myLaptop = devices.find((el) => el.name === 'Gram');
console.log(myLaptop);
 */

/*
    some, every : 조건에 따라 true, false를 리턴함
    배열을 반복하는 방시이 find와 같음
    some은 0번 인덱스부터 조건이 맞는 순간 true를 리턴한다.
    every는 0번 인덱스부터 조건이 안맞는 순간 false를 리턴한다.
    빈배열일경우 some은 false, every는 true를 리턴함
const numbers = [1, 3, 5, 7, 9];
    some : 조건을 만족하는 요소가 1개이상 있는지
const someReturn = numbers.some((el) => el > 5);
    every : 모든 요소가 조건을 만족하는지
const everyReturn = numbers.every((el) => el >5);

console.log(someReturn); // true
console.log(everyReturn); // false
 */

/*
    reduce

    기본 형태
    el : 배열의 요소
    i : 그 요소의 인덱스
    arr : 매소드를 호출한 배열
    acc(Accumulator) : 누산기
    // 현재 동작하는 콜백함수의 리턴값이 다음 동작할 콜백함수의 acc이다.
numbers.reduce((acc, el, i, arr) => {
    return nextaccValue;
}, initialAccValue);
    const numbers = [1, 2, 3, 4];
    const sumAll = numbers.reduce((acc, el, i, arr) => {
        console.log(`${i}번 index의 요소로 콜백함수가 동작중입니다.`);
        console.log('acc:', acc);
        console.log('el:', el);
        console.log('--------');
        return acc + el;
    }, 0); // 0은 초기값

    console.log('sumAll:', sumAll)
*/

/*
const numbers = [1, 10, 4, 21, 36000];

// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // (5) [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [36000, 21, 10, 4, 1]   

a-b의 의미는
반환값 < 0 : a가 b보다 앞에 있어야한다.
반환값 = 0 : a와 b의 순서를 바꾸지 않는다.
반환값 > 0 : b가 a보다 앞에 있어야한다

const letters = ['a', 'c', 'b'];
const numbers = [421, 721, 353];

letters.reverse();
numbers.reverse();

console.log(letters); // (3) ["b", "c", "a"]
console.log(numbers); // (3) [353, 721, 421]
*/

/*
map

map.set(key, value): key를 이용해 value를 추가하는 메소드.
map.get(key): key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.
map.has(key): key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드.
map.delete(key): key에 해당하는 값을 삭제하는 메소드.
map.clear(): Map 안의 모든 요소를 제거하는 메소드.
map.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)

// Map 생성
const codeit = new Map();

// set 메소드
codeit.set('title', '문자열 key');
codeit.set(2017, '숫자형 key');
codeit.set(true, '불린형 key');

// get 메소드
console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get('title')); // 문자열 key

// has 메소드
console.log(codeit.has('title')); // true
console.log(codeit.has('name')); // false

// size 프로퍼티
console.log(codeit.size); // 3

// delete 메소드
codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size); // 2

// clear 메소드
codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0
 */

/*
set
Set은 중복되는 값을 허용하지 않는 독특한 특징이 있는데요.
set.add(value): 값을 추가하는 메소드. (메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환.)
set.has(value): Set 안에 값이 존재하면 true, 아니면 false를 반환하는 메소드.
set.delete(value): 값을 제거하는 메소드. (메소드를 호출한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환.)
set.clear(): Set 안의 모든 요소를 제거하는 메소드.
set.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)

// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

// has 메소드
console.log(members.has('동욱')); // true
console.log(members.has('현승')); // false

// size 프로퍼티
console.log(members.size); // 4

// delete 메소드
members.delete('종훈'); // false
console.log(members.size); // 4
members.delete('태호'); // true
console.log(members.size); // 3

// clear 메소드
members.clear();
console.log(members.size); // 0

const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);

console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}
 */