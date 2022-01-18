interface HasId {
    id: string
}
interface Dict<T> {
    [k: string]: T
}

function listToDict(list: HasId[]): Dict<HasId> {
    const dict: Dict<HasId> = {}

    list.forEach((item) => {
        dict[item.id] = item
    })

    return dict
}


// Here we are adding a constraint to a type using the extends keyword.
// Generic type T extends from HasId ie it will have all the behariours of HasId
function listToDict<T extends HasId>(list: T[]): Dict<T> {
    const dict: Dict<T> = {}

    list.forEach((item) => {
        dict[item.id] = item
    })

    return dict
}