// Predefined type guards
// 1. instanceof
// 2. typeof
// 3. value check
// 4. build-in functions
// 5. Property presence check


let value:
    | Date
    | null
    | undefined
    | "pineapple"
    | [number]
    | { dateRange: [Date, Date] }

// instanceof
if (value instanceof Date) {
    value
    // ^?
}
// typeof
else if (typeof value === "string") {
    value
    // ^?
}
// Specific value check
else if (value === null) {
    value
    // ^?
}
// Truthy/falsy check
else if (!value) {
    value
    // ^?
}
// Some built-in functions
else if (Array.isArray(value)) {
    value
    // ^?
}
// Property presence check
else if ("dateRange" in value) {
    value
    // ^?
} else {
    value
    // ^?
}


// User Defined type guards

// Using is

interface CarLike {
    make: string
    model: string
    year: number
}

let maybeCar: unknown

// the guard
function isCarLike(
    valueToTest: any
): valueToTest is CarLike {
    return (
        valueToTest &&
        typeof valueToTest === "object" &&
        "make" in valueToTest &&
        typeof valueToTest["make"] === "string" &&
        "model" in valueToTest &&
        typeof valueToTest["model"] === "string" &&
        "year" in valueToTest &&
        typeof valueToTest["year"] === "number"
    )
}

// using the guard
if (isCarLike(maybeCar)) {
    maybeCar // maybeCar is of type CarLike here
}

// Using asserts is

// the guard
// Here the return value is always asserted to be of type CarLike
function assertsIsCarLike(
    valueToTest: any
): asserts valueToTest is CarLike {
    if (
        !(
            valueToTest &&
            typeof valueToTest === "object" &&
            "make" in valueToTest &&
            typeof valueToTest["make"] === "string" &&
            "model" in valueToTest &&
            typeof valueToTest["model"] === "string" &&
            "year" in valueToTest &&
            typeof valueToTest["year"] === "number"
        )
    )
        throw new Error(
            `Value does not appear to be a CarLike${valueToTest}`
        )
}

// using the guard
maybeCar
// ^?
assertsIsCarLike(maybeCar)
maybeCar
  // ^?