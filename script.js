function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++)
        if (n % i === 0) return false;
    return true;
}

function findPrimes(a, b) {
    for (let i = a; i <= b; i++)
        if (isPrime(i))
            console.log(i);

}

function findPosNum(text) {
    return (text.match(/\b\d+\b/g) || []).map(Number);
}

function findDates(text) {
    return text.match(/\b\d{4}-\d{2}-\d{2}\b/g) || [];
}

function findEmail(text) {
    return text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
}