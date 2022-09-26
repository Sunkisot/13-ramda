import { pipe, multiply, tap, curry, __ as _ } from "ramda";

const add = (x, y) => x + y
// curry可以对函数进行柯里化， 从而可以创造新的函数
let add_curry = curry(add)

console.log(add_curry(_, 1)(2))
console.log(add_curry(2)(2))