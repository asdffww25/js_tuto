console.log('옵셔널 파라미터')
//옵셔널 파라미터는 맨 뒤에 위치해야 한다.
function introduce(name, age, nationality = '한국'){
    console.log(`제 이름은 ${name}입니다.`);
    console.log(`생년월일은 ${age}이고,`);
    console.log(`국적은 ${nationality}입니다.`);
}

introduce('문현규', 4, '미국');
introduce('문현규', 4);



let x = 3;

function my(){
    let x = 5
    console.log(x)
}
my()
console.log(x)