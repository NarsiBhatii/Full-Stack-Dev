class Animal {
    constructor(name,legCount,speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    speak() {
        console.log(`${this.name} says ${this.speaks}`);
    }
}

const dog = new Animal("dog",2,"Bhow Bhow");
const cat = new Animal("cat",2,"meow");

cat.speak();
dog.speak();