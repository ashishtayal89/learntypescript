// undefined : A value is not defined this now. It may be defined going forward based on some actions.
// null : A value is defined but it contains nothing.


// Using !.

// @errors: 2532
type GroceryCart = {
    fruits?: { name: string; qty: number }[]
    vegetables?: { name: string; qty: number }[]
}

const cart: GroceryCart = {}

//This should throw an error
cart.fruits.push({ name: "kumkuat", qty: 1 })
// 
cart.fruits!.push({ name: "kumkuat", qty: 1 })


// Using !:

// @errors: 2564
// @noImplicitAny: false
class ThingWithAsyncSetup {
    setupPromise: Promise<any> // ignore the <any> for now
    isSetup!: boolean

    constructor() {
        this.setupPromise = new Promise((resolve) => {
            this.isSetup = false
            return this.doSetup()
        }).then(() => {
            this.isSetup = true
        })
    }

    private async doSetup() {
        // some async stuff
    }
}