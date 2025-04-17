function countPrimeNumbers(){
    function isPrime(num) {
    if (num <= 1)
        return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
    }
    
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}

const start = performance.now();
const primeCount = countPrimeNumbers();
const end = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);