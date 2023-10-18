let one = 1;
let two = '2';
// javascript variables are loosely typed
// but PLEASE dont do this
one = '1';
one = [1];
// strings can be concatenated and subscripted
two += '2';
two[0];
// arrays are denoted by square brackets
const three = [3];
// objects are dentoed by curly braces
const four = {
  '4': 4
};
// functions are first class objects...
function foo() {
  return 'bar';
}
// they can be assigned and passed around
const fn = foo;
console.log(fn());
// to create a class in javascript we use fucntions
function ListNode(data, node) {
  this.data = data;
  this.next = node ? node : null;
};
// to add a method on the class we
// use this strange syntax
ListNode.prototype.addNext =
    function(data) {
  this.next = new ListNode(data, null);
}
// and instaniated with "new"
const head = new ListNode(4);
head.addNext(5);
// alternatively we can use ES6 classes
class ListNodeClass {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
  addNext(data) {
    this.next = new ListNodeClass(data);
  }
}
// let's not forget for loops
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// and while loops
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
// and for-range loops
for (let i in arr) {
  console.log(arr[i]);
}
// if we just want the values
for (let val of arr) {
  console.log(val);
}
// we can alos iterate over objects
const obj = {
  one: 1,
  two: 2,
  three: 3
};

for (let key in obj) {
  console.log(obj[key]);
}
// the javasipt standard library is vast and powerful
// we can use it to do things like
const arr2 = arr.map((val) => val * 2);
let sum = arr.reduce((acc, val) => acc + val);
const arr3 = arr.filter((val) => val > 2);
// and much more!
// check out the docs at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// to learn more about the javascript language and standard library!