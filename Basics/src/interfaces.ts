
// Interfaces can only hold object types. They are useful to provide the definition to a class
// We can have multiple declaration of interface
interface Bike {
    model: string,
    make: string,
    run(): string,
}

// This is augmenting an interface. It adds up to the definition of previous interface.
interface Bike {
    spin(): string,
}

class SportsBike implements Bike {
    constructor(model, make) {
        model = model;
        make = make;
    }
    model;
    make;
    run() {
        return "";
    }
    spin() {
        return "";
    }
}