// 캡슐화
class User{
    constructor(email, birthdate){ // 생성자
        // new로 생성할때 제일 먼저 실행
        this.email = email;
        this.birthdate = birthdate;
    }

    buy(item){ // 메소드
        console.log(`${this.email} buys ${item.name}`);
    }

    // setter메소드
    set email(address){
        if(address.includes('@')){
            this._email = address; // 
        }else{
            throw new Error('invalid email address');
        }
    }
    // getter 메소드
    get email(){
        return this._email;
    }
}

const item = {
    name: '스웨터',
    price: 30000,
};


const user1 = new User('codeit@google.com', 'birthdate');
user1.email = 'asdffww25@naver.com';
console.log(user1._email);
console.log(user1.email)

