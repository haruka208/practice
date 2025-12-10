number1 = 3
// 1
number2 = 5
console.log(number1 * number2)
number1 = 7
console.log(number1 * number2)

// 2
point = 70
if(point >= 80) {
  console.log("素晴らしい");
} else if(point >= 60) {
  console.log("合格です");
} else {
  console.log("不合格です");
}

// 3　コンストラクタ：そのクラスから新しいオブジェクトを作る時に最初に呼ばれる特別なメソッド
class User {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  sayName() {
    console.log(`私の名前は${this.firstName} ${this.lastName}です`);
  }
}

user1 = new User("0001", "Hanako", "Yamada", 30);
user1.sayName();

// 4
// 関数宣言
// function returnMaxnumber(number) {
//   const maxNumber = Math.max(...number)
//   if(maxNumber % 3 === 0) {
//   return maxNumber / 3
// } else {
//   return maxNumber
// };
// }

// アロー関数 関数名 = (引数) => {処理}　変数に関数を入れる
const returnMaxnumber = (number) => {
    const maxNumber = Math.max(...number)
  if(maxNumber % 3 === 0) {
  return maxNumber / 3
} else {
  return maxNumber
}};

const number = [1, 2, 3, 4, 5, 6]
console.log(returnMaxnumber(number))

let message = "This is a pen"
console.log(message.split(" "))

// 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumber = []
for (let number of numbers) {
  if (number % 2 === 0) {
    evenNumber.push(number * 5);
  }
};
console.log(evenNumber)
