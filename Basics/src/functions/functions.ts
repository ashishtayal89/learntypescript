
// Using interface
interface Add1 {
    (a: number, b: number): number
}

// Using type
type Add2 = (a: number, b: number) => number


// void
type ReturnUndefined = () => undefined
type ReturnVoid = () => void

// Here the function accepts a return type as undefined and hence gives an error.
//@ts-expect-error
const add: ReturnUndefined = () => 4;

// A void return type doesn't give an error even if you return something. It is to prevent the use of the return value.
const substract: ReturnVoid = () => 3;
// Even though substract is returning a value but the type of subsValue is still void since the function return a void type.
// This prevents us from using this value accidently
const subsValue = substract();
//@ts-expect-error
const finalValue = 2 + subsValue;

// Construct Signature
// They are similar to call signature, except they describe what should happen with the new keyword
interface MyDate {
    new(value: number): Date
}

let MyDateConstructor: MyDate = Date;

const d = new MyDateConstructor(5);