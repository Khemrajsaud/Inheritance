// inheritance = allows a new class to inherit properties and methods from an existing class (parent -> child)
// helps with code reusability 

class Animal {
    alive = true;

    eat(){
        console.log(`this ${this.name} is eating`);
        
    }
    sleeping(){
        console.log(`thi ${this.name} is sleeping`);
        
    }
}
class Robbit extends Animal{
    name = "rabbit"
}
class Fish extends Animal {
    name = "fish"
}
class Hawk extends Animal{
    name = "kawk"
}



const rabbit = new Robbit();
const fish = new Fish();
const hawk = new Hawk()

console.log(rabbit.alive);
rabbit.eat()
rabbit.sleeping()

