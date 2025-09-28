//const (cannot be reassigned)
const name = "Okala Fortune";

// let and var (can be reassigned)
//var can be redeclared and reassigned within the same scope
var y = 50; 
y = 10; // reassignment allowed

var y = 30; // redeclaration also allowed

console.log(y); // would give us 30

// let can be reassigned but can't be redeclared
let y = 50;
y = 40; //reassignment allowed
