console.log('배열')

let courseRanking = [
    '자바스크립트 프로그래밍 기초',
    'Git으로 배우는 버전 관리',
    '컴퓨터 개론',
    '파이썬 프로그래밍 기초'
];

console.log(courseRanking[2])
console.log(courseRanking[1])

console.log(courseRanking.length)
console.log(courseRanking['length'])

//배열에 요소 추가
courseRanking[4] = 'ㅁㅁㅁ'
console.log(courseRanking[4])
//요소 수정
courseRanking[4] = 'codeit'
console.log(courseRanking[4])
//요소 삭제 // splice(index1, count) -> index1부터 count만큼 지운다
            //splice(index) -> index부터 다 지운다
            //splice(index1, count, item...) -> count만큼 지운후에 그 부분에 추가
            //splice(1,1)로 요소를 지우게 되면 인덱스가 한칸씩 밀린다.
courseRanking.splice(4,4);
console.log(courseRanking[4])

let members = ['쿤갈레', 'Zerrard66', '우리생각해써', '흙토끼', 'End Miracle']

console.log(members)
//배열의 첫 요소를 삭제 : shift()
members.shift();
console.log(members)
//배열의 마지막 요소를 삭제 : pop()
members.pop();
console.log(members)
//배열의 첫 요소로 값 추가 : unshift(value);
members.unshift('NiceCodeit')
console.log(members)
//배열의 마지막 요소로 값 추가 : push(value)
members.push('HiCodeit')
console.log(members)
//배열에서 특정 값 찾기 : indexOf(value)//index값 리턴
console.log(members.indexOf('Zerrard66'))
//배열에서 특정 값이 있는지 확인하기 : includes(value)
console.log(members.includes('Zerrard66'))
//배열 뒤집기 : reverse()
console.log(members)
members.reverse();
console.log(members)
//for..of 반복문
for(let i = 0; i < members.length; i++){//변수가 인덱스가됨
    console.log(members[i])
}
for(let i of members){//변수가 요소가됨
    console.log(i)
}

//다차원 배열
let twoDimensional = [[1, 2], [3, 4]];
codsole.log(twoDimensional[0][1]) // 2
console.log(twoDimensional[1][0]) //3

