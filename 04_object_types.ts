// testing optionals
interface PaintOptions {
    shape: "rectangle" | "circle" | "triangle";
    xPos?: number;
    yPos?: number;
}

// all are valid
let options: PaintOptions = { shape: "circle", xPos: 0, yPos: 0 }
options = { shape: "circle", xPos: 0 }
options = { shape: "circle" }

// testing intersection types
interface Colorful {
    color: string;
}

interface House {
    address: string;
    numberOfResidents: number;
}

// ColorfulHouse has properties from both Colorful and House
type ColorfulHouse = Colorful & House

// testing pass by value/ pass by reference

// primitive types
let foo = "x"
let bar = foo
bar = "xd"
console.log(foo) // didn't get changed

// object types
let myHouse: ColorfulHouse = 
{
    address: "Uetlibergstr. 111b",
    numberOfResidents: 100,
    color: "gray"
}
let alsoMyHouse = myHouse // passing a reference/ a pointer value
alsoMyHouse.address = "Universitätsstrasse 111"
console.log(myHouse.address) // did change

// testing optional return values
function returnStringOrNull(returnNil: boolean): string | null
{
    if (returnNil) return null
    return "hehe"
}