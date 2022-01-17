
// Array
type Person = { name: string, age: number };
type Persons = Person[];

let a: Persons = [{ name: "Ashish", age: 10 }];

type Bus = (string | number)[];
const myBus = [2017, "Starbus", 2022, "Tata"]

// Tuple
// This is used when the size of the array is predefined and the array is hetrogenious

type Car = [number, string, string];
const [year, make, model] = [2017, "Toyota", "Corola"];