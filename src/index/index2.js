console.log('나머지 연산')
console.log(7 % 3);

console.log('거듭제곱')
console.log(2 ** 3);

console.log('사칙연산')
console.log(3 + 6);
console.log(3 - 6);
console.log(3 / 6);
console.log(3 * 6);

console.log('연산 우선순위')
console.log(2 + 3 * 2);
console.log((2 + 3) * 2);

console.log('문자열')
console.log('7');
console.log('문자열 출력');
console.log('백슬레시로 \'따옴표 가능\'');
console.log('\"큰 따옴표도 가능\"');
console.log('작은 따옴표 안에 "큰따옴표만쓰면 가능"')
console.log("큰 따옴표 안에 '작은 따옴표도 가능'")
console.log(`백틱(1옆에\`)으로도 문자열 출력 가능 ' " ' "`);

console.log('문자열 연산')
console.log(`Hello` + 'World');
console.log('3' + '5');

console.log('불대수')// : 일상적인 논리를 수학적으로 표현한 것(false, true, and, or, not)
//명제 : 참과 거짓이 확실한 문장
console.log(2 > 1);
console.log(2 < 1);
console.log(3 >= 2);
console.log(3 <= 3);
console.log(3 === '3'); //등호 3개는 값과 자료형이 일치하는지
console.log(3 == '3'); // 등호 2개는 값만 비교한다.
console.log(3 !== 3); //!는 not
console.log(3 != '4');

console.log('and연산 &&')
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('or연산 ||')
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

console.log('not연산 !')
console.log(!true);
console.log(!false);

console.log('typeof연산자') //자료형 확인
//typeof 값
console.log(typeof 101);
console.log(typeof 'Hello');
console.log(typeof true);

let myname = 'Codeit';
function sayHello(){
    console.log("Hello");
};

console.log(typeof myname);
console.log(typeof sayHello);
console.log('연산의 순서가 가장 빠름')
console.log(typeof 'Hello' + "Codeit"); //'Hello'를 먼저 typeof했음
console.log(typeof 8 - 3); // 8을 먼저 typeof를 해서 오류가 남
console.log(typeof (8 - 3)); //괄호를 사용하면 된다.
console.log(typeof typeof 8); // 기본적으로 typeof는 string를 리턴함

console.log('형변환(String, Number, Boolean 함수 사용)')
console.log('10' + '5')
console.log(10 + 5)
console.log(Number('10') + Number('5'))
console.log(String(10) + String(5))
console.log(typeof String(10))
console.log(typeof Number('10'))
console.log(typeof Boolean(10))

console.log('강제 형변환')
console.log('산술연산자')
console.log(4 + '2') // 문자열로 만들어서 +한다
console.log(4 + 2)
console.log(4 - true)
console.log(4 * false)
console.log(4 / '2')
console.log('4' ** true)
console.log(4 % 'two')

console.log('관계비교연산')
console.log(2 < '3')
console.log(2 > true)
console.log('2' <= false)
console.log('two' >= 1) // 비교가 불가능할떄도 false가 나옴

console.log('같음 비교 연산')
console.log(1 === '1')//일치 타입도 비교함
console.log(1 === true)
//일치
console.log(1 == '1')//동등 타입은 형변환 후 비교함
console.log(1 == true)

console.log('템플릿 문자열')
let year = 2022;
let month = 1;
let day = 03;

console.log('오늘은 ' + year + '년 ' + month + '월 ' + day + '일 입니다.')
//백틱(`)을 사용하고 안쪽에 ${}를 사용해서 변수나 함수를 넣을 수 있다.
console.log(`오늘은 ${year}년 ${month}월 ${day}일 입니다.`)

let myNumber = 3;
function getTwice(x){
    return x * 2;
};
console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.`)

//null은 값이 없다는것을 의도적으로 표현할 때 사용하는값
//undefined는 값이 없다는 것을 확인 하는 값
let ununun;
console.log(ununun) // 선언 후 값이 안정해지면 undefined

ununun = null
console.log(ununun);// 의도적으로 값이 비었다는것을 표현함 

console.log(null == undefined)
console.log(null === undefined)

