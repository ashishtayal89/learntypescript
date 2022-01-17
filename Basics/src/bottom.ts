// never

class UnreachableError extends Error {
    constructor(_nvr: never, message: string) {
        super(message)
    }
}

function obtainRandomVehicle(): any {
    return {} as any
}
class Cycle {
    drive() {
        console.log("vroom")
    }
}
class Truck {
    tow() {
        console.log("dragging something")
    }
}
type Vehicle = Truck | Cycle

let myVehicle: Vehicle = obtainRandomVehicle()

// The exhaustive conditional
if (myVehicle instanceof Truck) {
    myVehicle.tow() // Truck
} else if (myVehicle instanceof Cycle) {
    myVehicle.drive() // Bike
} else {
    // NEITHER!
    const neverValue: never = myVehicle
    throw new UnreachableError(neverValue, `Unexpected vehicle type`);
}