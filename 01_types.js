"use strict";
function greet(name) {
    console.log("Hello, " + name);
}
function getFavoriteNumber() {
    return 24;
}
greet("hasan");
console.log(getFavoriteNumber());
// testing out lambda
var names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) { return console.log(s.toUpperCase()); });
// testing out object types
var ay = { x: 20, y: 30 };
//function accepting objects with x and y properties
function printCoord(pt) {
    console.log("The coordinate of the x value is " + pt.x);
    console.log("The coordinate of the y value is " + pt.y);
}
printCoord(ay);
var xd = { x: 10, y: 20 };
printCoord(xd);
