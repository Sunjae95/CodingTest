class Animal {
    constructor(name) {
        this.name = name;
    }
    
    attack() {
        console.log('animal attack');
    }
}

class Lion extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    attack() {
        console.log('lion attack');
    }
}

const lion = new Lion('leo', 'white');
lion.attack();