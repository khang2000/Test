// function sum() {
//   const a = 2;
//   const b = 50;
//   let sum = 0;
//   for (let i = 2; i <= 50; i++) {
//     if (isPrime(i)) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// }
// console.log(sum());
// const ar = [2, ...4];
// console.log(ar);
function sumFibs(num) {
  let a = 1,
    b = 1,
    c = 0,
    sum = 2,
    count = 0;
  while (b <= num) {
    c = a + b;
    a = b;
    b = c;
    for (let i = 1; i <= c; i++) {
      if (c % i === 0) {
        count++;
      }
    }
    if (count === 2) {
      sum += c;
    }
  }
  return sum;
}
console.log(sumFibs(20));
