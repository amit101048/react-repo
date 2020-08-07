class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
  
    speak () {
        console.log(`I am ${this.name} and my age is ${this.age}`);
    }
}
  
const animal = new Animal('Simba', 3);
animal.speak();

console.log(animal);

class Lion extends Animal {
    constructor(name, age, furColor, speed) {
        super(name, age);
        this.furColor = furColor;
        this.speed = speed;
    }
  
    roar () {
        console.log(`ROOOAR! I have ${this.furColor} fur and I can run ${this.speed} miles/hr`);
    }
}
  
const lion = new Lion('Mufasa', 20, 'golden', 25);
console.log(lion);

lion.speak();
lion.roar();