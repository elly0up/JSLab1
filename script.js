// 1 завдання
function isInteger(num) {
    return Number.isInteger(num);
}

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

// 2 завдання
function isIPAddress(ip) {
    return /^(\d{1,3}\.){3}\d{1,3}$/.test(ip);
}

function findRGBA(text) {
    const match = text.match(/rgba\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*([01]|0?\.\d+)\s*\)/);
    return match ? match[0] : null;
}

function findHexColor(text) {
    const match = text.match(/#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})/);
    return match ? match[0] : null;
}

function findTags(text, tag) {
    const regex = new RegExp(`<${tag}[^>]*>.*?<\/${tag}>`, 'gi');
    return text.match(regex) || [];
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
