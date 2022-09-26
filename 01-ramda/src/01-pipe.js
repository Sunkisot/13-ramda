import { pipe, multiply, tap } from "ramda";

pipe(
  multiply(2),
  tap(console.log),
  Math.abs
)(-2)