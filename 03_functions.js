// Function Type Expression
// accepts other functions as input => higher order function
function greeter(fn) {
    fn("hello world");
}
greeter(function (a) { return console.log(a); });
