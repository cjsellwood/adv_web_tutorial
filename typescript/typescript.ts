const sum = (a: number, b: number) => {
  return a + b;
};

const answer = sum(4, 5);
console.log(answer);

// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = "brown";
let favoriteQuote: string = `I'm not old, I'm only ${age}`;

// Array
let pets: string[] = ["cat", "dog", "bird"];
let pets2: Array<string> = ["pig", "lion", "dragon"];

// Objects
let wizard: object = {
  a: "John",
};

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number];
basket = ["basketball", 5];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let sizeName: string = Size[2];
let sizeName2: number = Size.Small;

// Any
let whatever: any = "agh no!";
whatever = 5;
whatever = basket;

// void
let sing = (): void => {
  console.log("la la la la");
};

// never
let error = (): never => {
  throw Error("oops");
};

// interface
interface RobotArmy {
  count: number;
  type: string;
  magic?: string;
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log("FIGHT", robots);
};
fightRobotArmy({ count: 1, type: "dragon" });

// Type Assertion
interface CatArmy {
  count: number;
  type: string;
  magic: string;
}

let dog = {} as CatArmy;
dog.count;

// Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
  console.log("FIGHT", robots);
};

let fightRobotArmy4 = (robots: RobotArmy): number => {
  console.log("FIGHT", robots);
  return 5;
};

// Classes
class Animal {
  public sing: string = "Allallalala";
  constructor(sound: string) {
    this.sing = sound;
  }

  greet(): string {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal("RAAAAWR");
lion.sing;

// Union
let confused: string | number | boolean = "hello";
confused = 5;
confused = true;

let x = 4;