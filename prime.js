function sumPrimes(num) {
  let allNumber = [];

  for (var i = 2; i <= num; i++) {
    allNumber.push(i);
  }

  function isPrime(element) {
    for (var i = 2; i < element; i++) {
      if (element % i === 0) {
        return false;
      }
    }
    return element > 1;
  }

  let primes = allNumber.filter(isPrime);
  return primes.reduce((acc, curr) => acc + curr);
}

console.log(sumPrimes(10));
