// function sumPrimes(a, b) {
//   let start = "a";
//   let end = "b";
//   let arr = [];
//   let sum = 0;
//   for (let i = start; i <= end; i++) {
//     arr.push(i);
//   }
//   console.log(arr);
// }
// sumPrimes(2, 5);

function sumPrimes() {
  let start = document.querySelector("#1");
  let end = document.querySelector("#2");
  let arr = [];
  let sum = 0;
  const result = document.querySelector("#3");
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % arr[i + 1] != 0 && arr[i] % arr[i - 1] != 0) {
      sum += arr[i];
    }
  }
  result.innerHTML = sum;
}
