/*
    조건 연산자 (Conditional operator)
    삼항연산자라고 불린다.
    
    조건 ? true : false

    const CUT_OFF = 80;
    function passChecker(score){
        return score > CUT_OFF ? '합격!' : '불합격!';
    } 
    console.log(passChecker(75));
 */
/*
    Spread 구문
    배열을 펼치는 문법
    const numbers = [1, 2, 3];
    의 배열이 있다 하면
    console.log(numbers) // [1, 2, 3]
    console.log(...numbers) // 1 2 3
    const numbers2 = [...numbers] 처럼 배열을 참조가 아닌 복사할 수 있다.

    function exfunction(a, b, c){...}
    const arr = [1, 2, 3];
    exfunction(...arr)
    처럼 배열을 펼쳐서 파라미터로 전달 가능

    const arr = [a, b, c];
    const newObject = {...arr}; // 중괄호를 넣어주면 객체로 변한다.
    console.log(newObject) // {0 : a, 1 : b, 2 : c}\
    
    일반 객체에서도 Spread문법 가능
    const latte = {
        esspresso: '30ml',
        milk: '150ml'
    };
    const cafeMocha = {
        ...latte,
        chocolate: '20ml',
    }
    console.log(latte); // {esspresso: "30ml", milk: "150ml"}
    console.log(cafeMocha); // {esspresso: "30ml", milk: "150ml", chocolate: "20ml"}
 */

/*
    모던한 프로퍼티

    객체에서 키와 값이 같다면 하나만 작성해도된다
    object = {
        a : a ==> a // a를 두번쓰지않고 한번만 쓰기 가능
    }

    function printCatName(user) {
        console.log(user.cat?.name);
    }
    위 코드에서 볼 수 있는 것처럼 물음표와 마침표를 붙여 사용하는 부분이 바로 옵셔널 체이닝 연산자(?.)인데요.
    만약 옵셔널 체이닝 연산자 왼편의 프로퍼티 값이 undefined 또는 null이 아니라면 그다음 프로퍼티 값을 리턴하고 그렇지 않은 경우에는 undefined를 반환하는 문법입니다.

    null 병합 연산자
    a ?? b //a가 null도 아니고 undefined도 아니면 a 그 외에는 b
*/

/*
    구조 분해(Destructuring)

    배열을 이용한 구조분해

    const rank = ['효준', '유나', '민환', '재하'];
    
    const macbook = rank[0] // 효준
    const ipad = rank[1] // 유나
    const airpods = rank[2] //민환
    const coupon = rank[3] //재하
    -----------------------------------------
    const [macbook, ipad, airpods, coupon] = rank;
    이처럼 왼편[]에 변수 이름, 오른편에 배열이름을 써주면 순서에 맞게 할당된다.
    왼편의 길이와 배열의 길이는 같지 않아도 된다. 마지막 변수에 ...으로 여러 변수사용이 가능하다.
    길이가 달라서 선언이 안된 변수는 undefined가 할당된다.

    [macbook, ipad] = [ipad, macbook]; // 효준,유나를 유나.효준으로 교환
    처럼 두 변수의 값을 교환 할수 있다.

    객체를 이용한 구조분해

    const macbook = {
        title: '맥북 프로 16형',
        price: 3690000,
        memory: '16GB',
        storage: '1TB SSD 저장 장치',
        display: '16형 Retina 디스플레이',
    };

    const title = macbook.title;
    const price = macbook.price;
    // 객체의 프로퍼티와 같은 이름의 변수가 있으면 분해를 한다.
    const { title, price } = macbook; // title, price는 macbook의 프로퍼티와 같은 이름의 변수 이다.
    // 만약 프로퍼티와 다른 이름의 변수면 undefined로 되고
    // price = 3000처럼 지정해서 줄수도있다.
    // ...변수이름 을 사용하면 앞의 프로퍼티를 제외한 나머지 프로퍼티를 해당 변수에 할당한다.
    // const {title:product, ...rest} 처럼 새로운 이름으로 지정해줄수 있다.

    console.log(title); // 맥북 프로 16형
    console.log(price); // 3690000
*/

/*
    const errorName = new TypeError('에러발생')
    에러를 생성하고
    throw errorName;하면 에러를 발생시킨다.
    error.name
    error.message

    try catch문
    try{
        // 코드
        // 에러가 발생하면 이후의 코드는 실행하지않고 catch문으로 넘어감
    }
    catch(error){
        // try에서 에러가 발생했을때의 동작 코드
        // try에서 에러가 발생하지 않으면 동작하지 않음
    }
    finally{
        // 에러가 발생하든 안하든 실행하는 코드
    }

 */