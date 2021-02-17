class Vehicle{
   
    constructor(numWheels, price){
        this.numWheels=numWheels;
        this.price=price;
    }

    getPrice(){
        return this.price;
    }

    printDescription(){
        console.log("Vehicle", this.numWheels ,this.price);
    }
}

class Car extends Vehicle{
 
    constructor(price ,numDoors){
        super(2,price);
        this.numDoors = numDoors;
    }
    printDescription(){
        super.printDescription();
        console.log("car", this.numDoors);
    }
}

var c= new Car(10000, 4);
console.log(c);
c.printDescription();