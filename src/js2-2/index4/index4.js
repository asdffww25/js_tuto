// 타입에 모듈을 넣어줘야 모듈스코프가 생성된다.
// <script type="module" src="./index4.js"></script>
// 파일을 불러와야지 모듈사용 가능 
// {}안에는 사용할 변수나 함수를 써준다
import {title as printerTitle, print } from './printer.js';

print(title);

// 이름 바꾸기
// as를 사용해준다.
// import {title as printerTitle, print } from './printer.js'


// 한꺼번에 불러오기 {}대신 *를써주고 as 이름을 써준다.
// 객체처럼 불러온이름.사용할 변수 한다.
import * as members from '.members.js'

console.log(members.title);