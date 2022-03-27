// 함수 표현식
// 함수 표현을 값처럼 선언한다.
const printCodeit = function(){
    console.log('hello world')
};

// 함수 선언식
// 바로 선언한다.
// 호출 후에 선언해도 호이스팅개념으로 함수가 호출이 된다.
// function printCodeIt(){
//     console.log('hello world')
// }
/*  선언식과 표현식의 가장 큰 차이는 호이스팅과 스코프이다
    함수 선언 방식은 호이스팅으로인해 선언 이전에 호출해도 정상으로 작동한다.
    let이나 const변수에 선언하는 표현식은 블록 스코프를 가지기 때문에 코드 블록 밖에서는 사용할 수 없다.
*/

/*
    기명 함수 표현식(Named Function Expression)
    이름이 있는 함수 표현식.
    함수 표현식으로 함수가 할당되면 변수에 name이라는 프로퍼티를 가지게 된다
    ex) console.log(printCodeit.name) // printCodeit
    //
    이처럼 변수에 할당하면서 함수에 이름을 부여할 수 있다.
    let countdown = function printCountdown(n){
        console.log(n);
        if( n === 0 ) {
            console.log('End');
        }
        else{
            printCountdown(n - 1)
        }
    }
    let myFuction = countdown;
    countdown
    //
    처럼 함수 내부에서 함수를 가리켜야 할 때는 함수 이름을 작성해주는것이 안전하다.
    함수 표현식으로 정의된 함수는 변수명을 통해 호출된다. 
*/

/*
    즉시 실행 함수(Immediately Invoked Function Expression -> IIFE)
    (function () {
        console.log('Hi!');
    })(); // Hi!
    함수가 선언된 순간 바로 실행이 된다.
    (function (x, y) {
        console.log(x + y);
    })(3, 5); // 8

    이름을 지어주더라도 외부에서는 재사용할 수 없다.
    (function sayHi(){
        console.log('Hi!');
    })();
    sayHi(); // ReferenceError

    주로 (function init(){})();
    처럼 프로그램이 실행 될 때 기본적으로 동작할 코드를 쓰거나
    재사용이 필요없는 일회성 동작을 구성할때 활요한다.
*/

/*
    값으로서 함수
*/
console.log(typeof printCodeit)
console.dir(printCodeit)
/*
    이처럼 함수는 객채타입의 값으로 평가된다.
    함수는 어디에서나 할당되고 다양한 형태로 호출된다.
    선언후 호출, 객체안에서 프로퍼티에 담아서 호출, 배열에 요소로 함수선언호출이 된다.
    다른 함수의 파라미터로 전달 가능 ex) event.addEventListener('click', function(){...})
    다른 함수의 파라미터로 전달된 함수를 콜백함수라 부른다.
    어떤 함수의 리턴값이 함수가 되기도한다. ( 고차함수 )

*/

/*
    파라미터(Parameter)
    아규먼트(Argument)
    파라미터는 함수에서 받는 부분
    아규먼트는 함수 호출할때 파라미터로 전달하는 값
    파라미터는 있지만 아규먼트가 없이 호출되면 undefined가 전달됨

    funcrtion greeting(name = 'Codeit', interest = 'Javascript){
        console.log(`Hi! My name is ${name}!`);
        console.log(`I like ${interest}!`);
    }
    greeting(undefined, 'Python'); // name에는 undefined가 전달되서 Codeit이 되고 interest에는 Python이 전달된다.
    
    function defaultTest(x, y = x + 3){
        console.log(`x : ${x}`);
        console.log(`y : ${y}`);
    };
    defaultTest(2) // x = 2, y = 5
    defaultTest(2, 3) // x = 2, y = 30

    파라미터의 수보다 아규먼트의 수가 적으면 나머지 파라미터는 undefined로 전달됨
    파라미터의 수보다 아규먼트의 수가 많으면 초과되는 아규먼트는 전달되지 않음
    아규먼트의 갯수에 따라 유연하게 동작하는 함수를 만들려면
    arguments객체를 사용할수 있다.
*/
function printArguments(a){
    for(let arg of arguments){
        console.log(arg);
    };
};
printArguments('a', 'b', 'c', 'd');

/* 
    Rest Parameter
    arguments는 유사배열이라서 귀찮다 이를 해결하기위해선?
    파라미터에 ...을 붙여준다
*/

function RestParameter(...args){
    console.log(args.splice(0,2));
   // console.log(arguments.splice(0,2)); //arguments.splice is not a function
    console.log('-----------------------')
};

RestParameter('a','b','c');
RestParameter('a');
RestParameter('a','b')
RestParameter('a', 'b', 'c', 'd')
/*
    fubction functionName(a, b, ...c){...} 처럼 여러 파라미터 끝에 설정해도된다.
*/

/*
    Arrow Function 이름이 없는 익명 함수
    function키워드를 지우고 소괄호 뒤에 =>를 넣어준다.

    const getTwice = function(number){...}
    const getTwice = (number) => {
        return number * 2;
    };
    myBtn.addEventListener('click', () => {
        console.log('button is clicked!');
    });
    
    파라미터가 하나일때 소괄호를 생략하기도 한다.
    리턴이 하나일경우 중괄호와 함께 리턴도 생략할 수 있다.
    const getTwice = number => number * 2;
    
    어지간하면 소괄호와 중괄호를 생략안하는게 가독성이 높다.

*/

/*
    this
    주로 객체에서 사용한다.
    함수를 호출한 객체를 가르키는 키워드
    function getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    이러면 다른 객체에서 함수를 호출해도 그 호출한 객체의 firstName과 lastName를 불러온다.
    this의 기본값은 window객체
    
    Arrow Function에서의 this는 선언되기 직전에 그때 유요한 this값과 똑같다.
 */




