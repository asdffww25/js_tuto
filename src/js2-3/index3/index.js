class User{
    constructor(email, birthdate){
        this.email = email;
        this.birthdate = birthdate;
    }

    buy(item){
        console.log(`${this.eamil} buys ${item.name}`);
    }
}

class PremiumUser extends User {
    constructor(eamil, birthdate, level){
        // 상속받을땐 자식에서 super를 이용해서 부모클래스의 생성자를 호출해야한다.
        super(eamil, birthdate); 
        this.level = level;
    }

    streamMusicForFree(){
        console.log(`Free music streaming for ${this.email}`);
    }
    // 다형성
    // 자식에서 부모의 메소드를 새로 덮어쓴다.(오버라이딩)
    buy(item){
        super.buy(item); // 부모클래스의 buy메소드를 호출
        
        //console.log(`${this.email} buys ${item.name} with a 5% discount`);
    }
}

const iter = {
    name: '스웨터',
    price: 30000,
}

const pUser1 = new PremiumUser('chris123@google.com', '1992-03-21', 3);
const user1 = new User('rache@google.com', '1994-04-23');

console.log(pUser1 instanceof PremiumUser); // true
console.log(user1 instanceof PremiumUser); // false
console.log(pUser1 instanceof User); // true
console.log(user1 instanceof User); // true


// static
// 객체가 아닌 클래스 이름으로 접근할 수 있다.
class Math{
    static PI = 3.14;

    static getCircleArea(r){
        return Math.PI * r * r;
    }
}
Math.PI = 3.141592;
Math.getRectangleArea = function (w, h){
    return w * h;
}
console.log(Math.PI);
console.log(Math.getCircleArea(5));
console.log(Math.getRectangleArea(4, 5));