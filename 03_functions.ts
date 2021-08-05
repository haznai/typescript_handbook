// Function Type Expression
// accepts other functions as input => higher order function
function greeter(fn: (a: string) => void) 
{
    fn("hello world")
}

// arrow function (lambda function) passed to greeter
greeter((a)=> console.log(a))