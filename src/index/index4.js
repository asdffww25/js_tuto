console.log('객체 다루기')

let codeit = {
    name: '코드잇',
    'born Year' : 2017,
    isVeryNice : true,
    worstCourse : null,
    bestCourse: {
        title : '자바스크립트 프로그래밍 기초',
        language : 'JavaScript'
    }
};

console.log(codeit.name);
console.log(codeit['born Year'])
console.log(codeit['born' +  ' Year'])
let propertyName = 'name';
console.log(codeit[propertyName])
console.log(codeit.bestCourse.title)
console.log(codeit.bestCourse['title'])
console.log(codeit.aaa)


console.log('객체 프로퍼티 수정')
console.log(codeit.name)
codeit.name = 'codeit'
console.log(codeit.name)

console.log('객체 프로퍼티 추가')
console.log(codeit.ceo)
codeit.ceo = '강영훈'
console.log(codeit.ceo)
console.log(codeit)

console.log('객체 프로퍼티 삭제')
console.log(codeit.worstCourse)
delete codeit.worstCourse;
console.log(codeit.worstCourse)

console.log('in연산자')
//'propertyName' in object
console.log('name' in codeit)

console.log('객체에서 함수 만들기')

let greetings = {
    sayHello: function(name){
        console.log(`Hello! ${name}`)
    },
    sayHi : function(){
        console.log('Hi')
    },
    sayBye : function(){
        console.log('Bye')
    }
};

greetings.sayHello('codeit')
greetings['sayHello']('Codeit')


console.log('for .. in 반복문')

for(let key in codeit){
    console.log(key)
    console.log(codeit[key])
}

console.log('내장 객체')

let myDate = new Date()
console.log(myDate)//객체 만들떄의 시간때

let myDate1 = new Date(1000)//1970년 1월 1일 00:00:00 UTC + 1000ms만큼 추가
let myDate2 = new Date('2017-05-18')
let myDate3 = new Date('2017-05-18T19:11:16')
console.log(myDate1)
console.log(myDate2)
console.log(myDate3)

