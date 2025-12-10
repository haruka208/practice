const product = {
  name: "りんご",
  price: 100,
  sayDescription: () => {
    console.log("とっても甘いです");
  },
};

// コンストラクタ
product.sayDescription();
class Product {
  constructor(name, price) {
    this.name = name; // this は生成されたオブジェクトそのもの
    this.price = price;
  }

  sayInfo(){
    console.log(`${this.name}の値段は${this.price}円です`);
  }

  static sayFuncDetail() {
    console.log("productのオブジェクトを作るコンストラクターです");
  }
}

const p1 = new Product("りんご", 100);
const p2 = new Product("みかん", 150);
const p3 = new Product("パイナップル", 200);
p1.sayInfo();
p2.sayInfo();
p3.sayInfo();
Product.sayFuncDetail();

// オブジェクト型のものは値の中身を変更できる
product.stock = 5;
console.log(product);

delete product.stock;
console.log(product);

const product1 = {
  name: "りんご",
  price: 100,
};
let product2 = product1;
product1.name = "みかん"

//スプレッド構文 全く別のオブジェクトが生成される
const product3 = { ...product1 }

console.log(Math.random());
console.log(Math.random());

console.log(Math.round(1.6)); // 2
console.log(Math.ceil(1.6)); // 2
console.log(Math.floor(1.6)); // 1

console.log(Math.max(1, 2, 3)); // 3
console.log(Math.min(1, 2, 3)); // 1

const message = "こんにちは"; // プリミティブ型 ←ふつうはこっち使う
// const message = new String("こんにちは"); // オブジェクト型

console.log(message.length); // 5
console.log(message[1]); // ん

console.log(message.includes("こん")); // true

console.log(message.indexOf("ち"));

console.log(message.replace("ん", "に")); // こににちは

console.log("a,b,c,d".split(",")); // ["a", "b", "c", "d"]

const now = new Date();
console.log(now);

const date1 = new Date("2025-12-04");
console.log(date1);

const date2 = new Date(2025, 11, 4) // 月が0始まりなので11で12月
console.log(date2)

console.log(date2.getFullYear()); // 2025

console.log(date2.getMonth()); // 11
console.log(date2.getDate()); // 4
console.log(date2.getDay()); // 4 日曜が0、土曜が6
