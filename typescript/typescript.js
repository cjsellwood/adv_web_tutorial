"use strict";
const sum = (a, b) => {
    return a + b;
};
const answer = sum(4, 5);
console.log(answer);
// boolean
let isCool = true;
// number
let age = 56;
// string
let eyeColor = "brown";
let favoriteQuote = `I'm not old, I'm only ${age}`;
// Array
let pets = ["cat", "dog", "bird"];
let pets2 = ["pig", "lion", "dragon"];
// Objects
let wizard = {
    a: "John",
};
// null and undefined
let meh = undefined;
let noo = null;
// Tuple
let basket;
basket = ["basketball", 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let sizeName = Size[2];
let sizeName2 = Size.Small;
// Any
let whatever = "agh no!";
whatever = 5;
whatever = basket;
// void
let sing = () => {
    console.log("la la la la");
};
// never
let error = () => {
    throw Error("oops");
};
let fightRobotArmy = (robots) => {
    console.log("FIGHT", robots);
};
fightRobotArmy({ count: 1, type: "dragon" });
let dog = {};
dog.count;
// Function
let fightRobotArmy3 = (robots) => {
    console.log("FIGHT", robots);
};
let fightRobotArmy4 = (robots) => {
    console.log("FIGHT", robots);
    return 5;
};
// Classes
class Animal {
    constructor(sound) {
        this.sing = "Allallalala";
        this.sing = sound;
    }
    greet() {
        return `Hello ${this.sing}`;
    }
}
let lion = new Animal("RAAAAWR");
lion.sing;
// Union
let confused = "hello";
confused = 5;
confused = true;
let x = 4;
