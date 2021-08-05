// string interpolation
function greet(name: string)
{
    console.log(`Hello, ${name}`);
}

// return type 
function getFavoriteNumber(): number
{
    return 24;
}

greet("hasan");
console.log(getFavoriteNumber());

// testing out lambda
const names: string[] = ["Alice", "Bob", "Eve"];
names.forEach((s)=> console.log(s.toUpperCase()));

// **** testing out object types ****
const ay = {x: 20, y:30};
//function accepting objects with x and y properties
function printCoord(pt: {x: number; y:number;})
{
    console.log(`The coordinate of the x value is ${pt.x}`);
    console.log(`The coordinate of the y value is ${pt.y}`)
}

printCoord(ay);

// will printCoord still accept this?
type Point = 
{
    x: number;
    y: number;
};



const xd: Point = {x: 10, y:20}
printCoord(xd) // yep, printCoord still accepts this