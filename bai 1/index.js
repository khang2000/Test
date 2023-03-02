function sumPrimes() {
  const start = document.getElementById(1);
  let end = document.getElementById(2);
  let result = document.getElementById(3);
  let arr = [];
  let sum = 0;
  for (let i = start.value; i <= end.value; i++) {
    arr.push(i);
  }
  console.log(arr);
  for (let i = 1; i <= arr[i]; i++) {
    if (arr[i] >= 1 && arr[i] % i != 0) {
      sum += arr[i];
    }
  }
  result.innerHTML = `${sum}`;
}
