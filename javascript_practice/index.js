const fruits = ["りんご", "みかん"];
fruits.push("パイナップル", "バナナ");
console.log(fruits); // ["りんご", "みかん", "パイナップル", "バナナ"]

fruits.unshift("いちご", "メロン");
console.log(fruits); // ["いちご", "メロン", "りんご", "みかん", "パイナップル", "バナナ"]

fruits.pop();
console.log(fruits); // ["いちご", "メロン", "りんご", "みかん", "パイナップル"]

fruits.shift();
console.log(fruits); // ["メロン", "りんご", "みかん", "パイナップル"]

console.log(fruits.indexOf("りんご")); // 1
console.log(fruits.indexOf("柿")); // -1

console.log(fruits.includes("りんご")); // true
console.log(fruits.includes("柿")); //false

const products = [
  {id: 1, name: "りんご"},
  {id: 2, name: "みかん"},
  {id: 3, name: "パイナップル"},
];

const product1 = products.find((product) => product.id === 1);
const product2 = products.find((product) => product.id === 4);

// 配列もオブジェクトと同様にスプレット構文を使用できる
const cloneProducts = [...products];
console.log(cloneProducts);

// for eachメソッド
cloneProducts.forEach((product, index) => {
  console.log(index);
  console.log(product)
});

console.log(fruits.join(","));

const numbers = [1, 2, 3, 4];
console.log(numbers.every((num) => num > 0)); // true
console.log(numbers.every((num) => num > 1)); // false

console.log(numbers.some((num) => num > 3)); // true
console.log(numbers.some((num) => num > 5)); // false

console.log(numbers.filter((num) => num >= 3)); // [3, 4]
console.log(numbers.map((num) => num * 3)); // [3, 6, 9, 12]

const splitString = (str) => {
  return str.split(",");
};

console.log(splitString("a,b,c"));

try {
  console.log(splitString(1));
} catch (e) {
  alert(e);
}
