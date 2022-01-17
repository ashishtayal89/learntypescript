///// SAMPLE DATA FOR YOUR EXPERIMENTATION PLEASURE (do not modify)
function assertEquals<T>(
    found: T,
    expected: T,
    message: string
) {
    if (found !== expected)
        throw new Error(
            `❌ Assertion failed: ${message}\nexpected: ${expected}\nfound: ${found}`
        )
    console.log(`✅ OK ${message}`)
}

function assertOk(value: any, message: string) {
    if (!value)
        throw new Error(`❌ Assertion failed: ${message}`)
    console.log(`✅ OK ${message}`)
}


const fruits = {
    apple: { color: "red", mass: 100, price: 10 },
    grape: { color: "red", mass: 5, price: 20 },
    banana: { color: "yellow", mass: 183, price: 11 },
    lemon: { color: "yellow", mass: 80, price: 10 },
    pear: { color: "green", mass: 178, price: 10 },
    orange: { color: "orange", mass: 262, price: 30 },
    raspberry: { color: "red", mass: 4, price: 10 },
    cherry: { color: "red", mass: 5, price: 10 },
}

interface Dict<T> {
    [k: string]: T
}

// OR

// type Dict<T> = {
//     [k: string]: T
// }

// Array.prototype.map, but for Dict
function mapDict<T, P>(dict: Dict<T>, invoke: (value: T, name: string) => P): Dict<P> {
    const newDict: Dict<P> = {};
    for (let key of Object.keys(dict)) {
        newDict[key] = invoke(dict[key], key);
    }
    return newDict;
}

const fruitsWithCost = mapDict(fruits, (fruit, name) => (
    { ...fruit, cost: fruit.mass * fruit.price, name }
))


// MAP
const fruitsWithKgMass = mapDict(fruits, (fruit, name) => ({
    ...fruit,
    kg: 0.001 * fruit.mass,
    name,
}))
const lemonName: string = fruitsWithKgMass.lemon.name
// @ts-ignore-error
const failLemonName: number = fruitsWithKgMass.lemon.name
assertOk(
    fruitsWithKgMass,
    "[MAP] mapDict returns something truthy"
)
assertEquals(
    fruitsWithKgMass.cherry.name,
    "cherry",
    '[MAP] .cherry has a "name" property with value "cherry"'
)
assertEquals(
    fruitsWithKgMass.cherry.kg,
    0.005,
    '[MAP] .cherry has a "kg" property with value 0.005'
)
assertEquals(
    fruitsWithKgMass.cherry.mass,
    5,
    '[MAP] .cherry has a "mass" property with value 5'
)
assertEquals(
    Object.keys(fruitsWithKgMass).length,
    8,
    "[MAP] fruitsWithKgMass should have 8 keys"
)



// Array.prototype.filter, but for Dict
// function filterDict(...args: any[]): any { }


// Array.prototype.reduce, but for Dict
function reduceDict<T, P>(dict: Dict<T>, invoke: (reducer: P | T, value: T, name: string) => P, initialValue: P): P {
    let reducer = initialValue;
    for (let key of Object.keys(dict)) {
        reducer = invoke(reducer, dict[key], key);
    }
    return reducer;
}