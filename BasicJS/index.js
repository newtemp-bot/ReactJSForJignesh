class Car {
    constructor(name="Car",year=0) {
        this.name = name;
        this.year = year;
      }
    run(){
        console.log(this.name,"is runing");
    }
    showSpeed(s) {
        console.log(this.name,"runing speed is =",s);
        this.showYear()
    }
    showYear(){
        console.log("Your",this.name,"year is",this.year);
    }
}

class Test extends Car{

}


let a = new Array();

let obj = new Test(
    
);
obj.showSpeed(55)
obj.run()

let myCar1 = new Car("BMW",2016);
let myCar2 = new Car("Tata",2018);

myCar1.run()
myCar1.showSpeed(45)
myCar2.run()
myCar2.showSpeed(80)
