class Animal{

    constructor(name ,color){
        this.name = name
        this.color = color
    }

    run(){
        console.log(`${this.name}` + " Running")
    }

    shout(){

        console.log(`${this.name}` + " Shouting")
    }

    racing(){
        console.log(`${this.name} and ${this.color}`,"Rabbit is a Animal")
    }
}

let Monkey = new Animal("Monkey" , "brown");
Monkey.run()
Monkey.shout()

 class Rabbit extends Animal{
    

 }

let  Rab = new Rabbit("Rabbit" , "white")
console.log(Rab)
Rab.run()
Rab.shout()
Rab.racing()


