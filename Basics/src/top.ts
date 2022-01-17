// any

let flexible: any = 4
flexible = "Download some more ram"
flexible = window.document
flexible = setTimeout

// unknown
// @errors: 2571
let myUnknown: unknown = 14

// This code runs for { myUnknown| anything }
if (typeof myUnknown === "string") {
    // This code runs for { myUnknown| all strings }
    console.log(myUnknown, "is a string");
} else if (typeof myUnknown === "number") {
    // This code runs for { myUnknown| all numbers }
    console.log(myUnknown, "is a number")
} else {
    // this would run for "the leftovers"
    //       { myUnknown| anything except string or numbers }
}