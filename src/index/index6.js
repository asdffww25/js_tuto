//Number
let milionaire = 1000000000; // 0이 9개
let myNumber = 1e9; // 0이 9개 // 지수 표기법 1 * 10^9
console.log(milionaire)
console.log(myNumber)
console.log(milionaire === myNumber)

console.log(25e5 === 2500000)  // 25 * 10^5
console.log(5.3e3 === 5300)  // 5.3 * 10^3
console.log(-6.1e8 === -610000000)

console.log(16e-5 === 0.00016)
console.log(3.5e-3 === 0.0035)
console.log(-9.1e-5 === -0.000091)

let hex1 = 0xff; // 255
let octal = 0o377 // 255
let binary = 0b11111111 // 255
console.log(hex1)
console.log(octal)
console.log(binary)

let myNum = 0.3591;
console.log(myNum.toFixed(3))  //소수점 4번쨰 자리를 반올림해줌
console.log(myNum.toFixed(2))
console.log(myNum.toFixed(7))  // 부족한 자릿수는 0으로 채워줌
console.log(typeof myNum.toFixed(3)) // 문자열임
console.log(typeof Number(myNum.toFixed(3)))  //숫자로 할려면 Number()를 사용해야함
console.log(typeof +myNum.toFixed(3)) // +만 붙여주면 알아서 넘버로 변함

let myNumber1 = 255;
console.log(myNumber1.toString(2)) // toString(2 ~ 36) 
console.log(myNumber1.toString(8))  //해당 숫자를 2/8/16진법으로 변환
console.log(myNumber1.toString(16))  // 역시 문자열로 바뀜
console.log(255..toString(2)) // 정수형태에도 가능 // ..이나 ()로 사용
console.log((255).toString(2))
console.log('')
//String
let myString = 'Hi Codeit'
let myString1 = '  Hi Codeit  '
console.log(myString.length) // 9
console.log(myString[3]) //c
console.log(myString.charAt(3)) //c
console.log(myString.indexOf('i')) // 1 // 앞부터
console.log(myString.lastIndexOf('i')) // 7 // 뒤부터
console.log(myString.indexOf('a')) // -1

console.log(myString1.toUpperCase()) // 전부 대문자
console.log(myString1.toLowerCase()) // 전부 소문자
console.log(myString1.trim()) // 양쪽의 공백 제거

console.log(myString.slice(0,2)) // 0~(2-1)까지의 문자열 리턴
console.log(myString.slice(3)) // 3~~끝까지 
console.log(myString.slice())  // 문자열 전체

let number1 = [1, 2, 3];
let number2 = number1;
let number3 = number1.slice()
number2.push(4);

console.log(number1)
console.log(number2)
console.log(number2 === number1)
console.log(number3)
console.log(number3 === number1)