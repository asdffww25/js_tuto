// 선언문 앞에 export를 써주면 다른 파일에서도 사용이 가능해진다
export const title = 'CodeitPtinter';

export function print(value){
    console.log(value);
}

// export { title, print as printerprint}
// 하나씩 export를 안해주고 한번에 묶어줄수있고
// 바로 as로 이름을 바꿔줄 수 있다.

// default 는 뒤에 단 하나만 내보낼수 있고
// 해당 파일 내에서 한번만 사용할 수 있다.
/*
    사용할 파일에서 import할때는 똑같이 쓰지만
    as를 사용해서 반듯이 이름을 정해주어야 한다.
 */
// export default title