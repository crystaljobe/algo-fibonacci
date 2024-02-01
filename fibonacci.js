function fibonacci(num) {
  let fibonacciArr = [0, 1];

  for (var i = 0; i < num; i++) {
    fibonacciArr.push(fibonacciArr[i] + fibonacciArr[i+1]);
  }

  return fibonacciArr[num];
}

console.log(fibonacci(7));

module.exports = fibonacci;
