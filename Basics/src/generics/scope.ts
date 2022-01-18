// types are also lexicaly scoped ie you can access the types delcared in an parent function inside a child function.

// outer function
function tupleCreator<T>(first: T) {
    // inner function
    return function finish<S>(last: S): [T, S] {
        return [first, last]
    }
}
const finishTuple = tupleCreator(3)
const t1 = finishTuple<null>(null)
//    ^?
const t2 = finishTuple([4, 8, 15, 16, 23, 42])
  //    ^?