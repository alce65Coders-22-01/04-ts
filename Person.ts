/* eslint-disable no-unused-vars */
class Person {
    name: string;
    age: number;
    height: number;
    protected id: number;
    static hasSoul = true;
    static foo() {}
    constructor(name = 'unknown', age) {
        this.id = parseInt(String(Math.random() * 1_000_000));
        this.name = name;
        this.age = age;
    }
    greetings() {
        console.log(
            `Hola, soy ${this.name}, y tengo ${this.age} años. Mi id es ${this.id}`
        );
    }
}

// Person.prototype.teeth = 32;
Person.hasSoul = false;
// Person.x = 23;

const p1 = new Person('Ramón', 32);
const p2 = new Person('Luisa', 34);
p1.greetings = () => {};

p1.height = 180;
// p1.weapon = 'sword';

console.log(p1);
console.log(p2);

p1.greetings();
p2.greetings();

// console.log(p1.#id);

p1.greetings();

class Alumno extends Person {
    course: string;
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }
    greetings() {
        super.greetings();
        console.log(`Estudio ${this.course}`);
    }
}

const a1 = new Alumno('Rosa', 25, 'Angular');
a1.greetings();
// console.log(a1.teeth);

let o: Person;
let a: Alumno;

type userName = string;
let z: userName;

type id = number | string;
let id2: id;

/* class Duck {
    public name: string,
    public age: number = 1,
    public weigh: number
    constructor(
        name: string,
        age: number = 1,
        weigh: number
    ) {
        this.name = name
        this.age = age
        this.weigh = weigh
    }
} */

class Duck {
    constructor(
        public name: string,
        public age: number = 1,
        public weigh: number
    ) {}
}

let p: Duck;
p = new Duck('Lucas', null, null);

let p22: Duck;
p22 = { name: 'Donald', age: 100, weigh: 6 };

interface iMouse {
    name: string;
    age: number;
    weigh: number;
}

let a23: iMouse;
a23 = { name: 'Tom', age: 23, weigh: 6 };

interface iAnimal {
    isLive: boolean;
}

class Mouse implements iMouse, iAnimal {
    constructor(
        public name: string,
        public age: number,
        public weigh: number,
        public isLive: boolean
    ) {}
}
