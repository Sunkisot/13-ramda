import {
  pipe,
  multiply,
  tap,
  curry,
  __ as _,
  map,
  filter,
  toString,
} from "ramda";

let list = map((x) => x + 1, [1, 2]);
let list2 = map(toString, [1, 2]);
console.log(list, list2);

// 实现map
let map1 = (x, y) => y.map(x);
let map_curry = curry(map1);
console.log(map_curry((x) => x + 1)([4, 2]));

// 先过滤在map
let filterMap = pipe(
  filter((x) => x % 2 === 0),
  map((x) => x * 2)
);

console.log(filterMap([1, 2, 3, 4, 5]));
console.log(filterMap({a: 1, b: 2, c: 3, d: 4, e: 5}));
