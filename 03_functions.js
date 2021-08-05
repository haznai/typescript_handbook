// Function Type Expression 
// accepts other functions as input => higher order function
function greeter(fn) {
    fn("hello world");
}
// arrow function (lambda function) passed to greeter
greeter(function (s) { return console.log(s); });
// generic function with constraints
function printLength(sequence) {
    console.log(sequence.length);
}
printLength("waddup");
printLength([1, 2, 3]);
function printProperties(_a) {
    var a = _a.a, b = _a.b;
    console.log("from the printProperties function: a: " + a + ", b: " + b);
}
var bar = { a: true, b: false };
var a = bar.a, b = bar.b;
console.log("a: " + a + ", b: " + b);
printProperties(bar);
