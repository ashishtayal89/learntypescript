// @noImplicitAny: true

// Param properties
class Cars {
    constructor(
        public make: string,
        public model: string,
        protected year: number
    ) { }
}

const myCar = new Cars("Honda", "Accord", 2017);

class Parent { }

class Child extends Parent {
    foo = console.log("class field initializer")
    name = "Ashish";
    constructor(public make: string) {
        super()
        console.log("custom constructor stuff")
    }
    getName(): string {
        return this.name;
    }
}

const c = new Child("honda");