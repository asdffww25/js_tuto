console.log(15);
//console.log(20-5);
console.log(3 * 5);
/*console.log(10+5)
aaa
aaa
bbb
컨트롤 + / */
//Number
console.log(3.1 + -5.5);
//Sting
console.log("Hello" + " Codeit");
//Boolean
console.log(8 > 6);
console.log(10 < 6); 

//추상화 : Abstraction : 복잡한 것들을 목적에 맞게 단순화 // 목적을 명확히 핵심만!!

//변수
// = : 할당연산자
//변수 선언
let espressoPrice = 3000;
let lattePrice =  4300;
let mochaPrice = 4800;
//변수 출력
console.log("espressoPrice = " + espressoPrice);
console.log("lattePrice = " + lattePrice);
console.log("mochaPrice = " + mochaPrice);

//함수 선언
function functionName(){
    console.log("함수선언부분입니다.")
    console.log("hi");
    console.log("안녕하세요");
};

//함수 호출
functionName();

//함수의 파라미터(매개변수)
function greeting(sentence){
    console.log('Hi');
    console.log('Hello');
    console.log('안녕');
    console.log(sentence);//매개변수로 출력
};

greeting('Hola');

function welcone(name){
    console.log('안녕하세요 ' + name + '님!');
};
console.log("문자열 함수 출력");
welcone('문현규');
welcone('문현규1');
welcone('문현규2');

function printSquare(num){
    console.log(num * num);
};
console.log("거듭제곱");
printSquare(2);
printSquare(6);
printSquare(13);

//여러개의 파라미터
function printSum(a, b){
    console.log(a + b);
};
printSum(3, 6);

function introduce(name, birth, nationality, job){
    console.log('안녕하세요! 반갑습니다.');
    console.log('제 이름은 ' + name + ' 입니다.');
    console.log('생년월일은 ' + birth + ' 이고,');
    console.log('국적은 ' + nationality + ' 입니다.');
    console.log('직업은 ' + job + ' 입니다.');
    console.log('잘 부탁드립니다.');
};
introduce('문현규', 980309, '한국', '학생');

//return : 반환
function getTwo(){
    return 2;
};
console.log(getTwo());
function getTwice(number){
    return number * 2;
};
console.log(getTwice(5));

let x = getTwice(5);
let y = getTwice(2);

console.log(x * y);