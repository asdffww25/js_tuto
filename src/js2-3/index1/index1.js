// 객체 만들기
// const user1 = {
//     email: 'chris123@google.com',
//     birthdate: '1992-03-21',
//     buy(item){
//         console.log(`${this.email} buys ${item.name}`);
//     },
// };

// factory function
function createUser(email, birthdate){
    const user = {
        email, // email: email,
        birthdate, // birthdate: birthdate,
        buy(item){
            console.log(`${this.email} buys ${item.name}`);
        },
    };
    return user;
}

// constructor function
// 함수를 사용해서 객체를 생성
// 
// function User(email, birthdate){
//     this.email = email;
//     this.birthdate = birthdate;
//     this.buy = function(item){
//         console.log(`${this.email} buys ${item.name}`);
//     };
// }
// const user1 = new User('email', 'birthdate');

// Class로 객체 만들기
/*
    class User{
        constructor(email, birthdate){ // 생성자
            // new로 생성할때 제일 먼저 실행
            this.email = email;
            this.birthdate = birthdate;
        }
        buy(item){ // 메소드
            console.log(`${this.email} buys ${item.name}`);
        }
    }

    const user1 = new User('email', 'birthdate');
 */
const item = {
    name: '스웨터',
    price: 30000,
};

const user1 = createUser('chris123@google.com', '1992-03-21');
const user2 = createUser('jerry99@google.com', '1995-07-19');
const user3 = createUser('alice@google.com', '1993-12-24');

console.log(user1.email);
console.log(user2.email);
console.log(user3.email);

user1.buy(item);
user2.buy(item);
user3.buy(item);
// console.log(user1.email);
// console.log(user1.birthdate);
// user1.buy(item)