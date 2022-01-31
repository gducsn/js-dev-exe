function memoize(fn) {
  let cache = {};
  return function (p1) {
    if (p1 in cache) {
      return cache;
    } else {
      cache[p1] = fn(p1);
      return cache[p1];
    }
  }


}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));