import {
  pipe,
  multiply,
  tap,
  curry,
  __ as _,
  map,
  filter,
  toString,
  groupBy,
  prop,
  values,
  dissoc,
  Index
} from "ramda";
let list = [
  {
    id: 1,
    name: '张三',
    age: '18',
  },
  {
    id: 2,
    name: '张三1',
    age: '19',
  },
  {
    id: 3,
    name: '张三2',
    age: '18',
  },
]
// const fn = pipe(
//   groupBy(prop('age'))
// )
const fn = pipe(
  Index,
  groupBy((item) => item.age > 18 ? 'big': 'small')
)
console.log(fn(list)) 
