// Generics allow us to parameterize types, which unlocks great opportunity to reuse types broadly across a TypeScript project.

// Specific

interface PhoneInfo {
    customerId: string
    areaCode: string
    num: string
}

const phoneList = [
    { customerId: "0001", areaCode: "321", num: "123-4566" },
    { customerId: "0002", areaCode: "174", num: "142-3626" },
    { customerId: "0003", areaCode: "192", num: "012-7190" },
    { customerId: "0005", areaCode: "402", num: "652-5782" },
    { customerId: "0004", areaCode: "301", num: "184-8501" },
]

function listToDict(
    list: PhoneInfo[], // take the list as an argument
    idGen: (arg: PhoneInfo) => string // a callback to get Ids
): { [k: string]: PhoneInfo } {
    // create an empty dictionary
    const dict: { [k: string]: PhoneInfo } = {}

    // Loop through the array
    list.forEach((element) => {
        const dictKey = idGen(element)
        dict[dictKey] = element // store element under key
    })

    // return the dictionary
    return dict
}

console.log(
    listToDict(phoneList, (item) => item.customerId)
)

// Generic
function listToDictGeneric<T>(
    list: T[], // take the list as an argument
    idGen: (arg: T) => string // a callback to get Ids
): { [k: string]: T } {
    // create an empty dictionary
    const dict: { [k: string]: T } = {}

    // Loop through the array
    list.forEach((element) => {
        const dictKey = idGen(element)
        dict[dictKey] = element // store element under key
    })

    // return the dictionary
    return dict
}

console.log(
    listToDict(phoneList, (item) => item.customerId)
)
