console.log("Hello World!");
let nickname = "tarou";
console.log(nickname);
nickname = "sample";
console.log(nickname);
const firstName = "jirou";
console.log(firstName);
// firstName = "saburou" //error

let fruit = "apple";

let age = 20;
let circleRatio = 3.14;

let isActive = true;

let color; // undefined

let box = null;

console.log(typeof fruit);

// 管理が大変
let productName = "りんご";
let productPrice = 200;

// なのでオブジェクトを使用
let product = {
  name: "りんご",
  price: 200,
};
console.log(product);

// ①　基本的に①を使用
product.name = "みかん";
console.log(product.name);

// ②
product["price"] = 300;
console.log(product["price"]);

let fruits = ["りんご", "みかん"];
console.log(fruits);

fruits[0] = "バナナ";
console.log(fruits[0]);

fruits[2] = "パイナップル";
console.log(fruits);

console.log(fruits.length);

// アロー関数
const outputProductInfo = (productName, productPrice) => {
  console.log("こんにちは");
  console.log(`${productName}の値段は、${productPrice}円です`);
};
outputProductInfo("みかん", 100);
outputProductInfo("りんご", 150);
outputProductInfo("パイナップル", 200);

const add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

let x = 10;
let y = 3;
console.log(x + y); // 13
console.log(x - y); // 7

console.log(x * y); // 30
console.log(x / y); // 3.3333....

console.log(x % y); // 1

console.log(x ** 2) // 100

console.log(++x); // 11
console.log(x); // 11
console.log(x++); // 11
console.log(x); // 12

console.log(--x); // 11
console.log(x); // 11
console.log(x--); // 11
console.log(x); // 10

x += 5;
console.log(x); // 15

x -= 5;
console.log(x); // 10

console.log(x > 5); // true
console.log(x > 20); // false

console.log(x >= 10); // true

console.log(x < 20); // true
console.log(x < 5); // false

console.log(x <= 10); // true

console.log(x === 10); // true
console.log(x === 11); // false

console.log(x !== 11); // true
console.log(x !== 10); // false

console.log(1 === "1"); // false
console.log(1 == "1"); //true

// 三項演算子
let userAge = 25;
let userType = userAge > 20 ? "adult" : "child"
console.log(userType); // adult

// 左がfalseの場合右は実行されない
console.log(x > 5 && x < 20); // true
console.log(x > 15 && x < 20); // false
console.log(x > 5 && x < 9); // false

// 左がtrueの場合右は実行されない
console.log(x > 5 || x < 9); // true
console.log(x > 16 || x < 20); // true
console.log(x > 16 || x < 9); //true

console.log(!(x > 16)); // true

// Falsyな値↓ 以外はTrucyな値
undefined;
null;
0;
("");
NaN;

console.log(true && "a"); // a
console.log(false && "a"); // false
console.log(true || 1); // true
console.log(false || 1) // 1