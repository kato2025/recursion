// Using iteration
function fibs(n) {
    const result = [];
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        result.push(a);
        const temp = a;
        a = b;
        b = temp + b;
    }
    return result;
}
// Using recursion
function fibsRec(n, a = 0, b = 1, result = []) {
    if (n === 0) {
        return result;
    }
    result.push(a);
    return fibsRec(n - 1, b, a + b, result);
}
// Example
const numberOfFibs = 8;
console.log("Using iteration:", fibs(numberOfFibs)); 
console.log("Using recursion:", fibsRec(numberOfFibs)); 
