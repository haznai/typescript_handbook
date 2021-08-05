// Function Type Expression 
// accepts other functions as input => higher order function
function greeter(fn: (a: string) => void) 
{
    fn("hello world")
}
// arrow function (lambda function) passed to greeter
greeter((s)=> console.log(s))

// generic function with constraints
function printLength<Type extends {length:number}>(sequence: Type)
{
    console.log(sequence.length)
}
printLength("waddup")
printLength([1, 2, 3])

// parameter destructing
type foo =
{
    a: boolean;
    b: boolean;
}

function printProperties({a, b}:foo)
{
    console.log(`from the printProperties function: a: ${a}, b: ${b}`)
}

let bar: foo = {a: true, b:false}
let {a, b} = bar
console.log(`a: ${a}, b: ${b}`)
printProperties(bar)

