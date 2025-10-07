const obj  = [{id:1,name:"elan"}]

console.log(obj);

const car = {name:"Tesla",year:2020}

console.log(car);

 //constructor 

function Car(brand,year)
{
    this.brand = brand;
     this.year = year;
}

const car1 = new Car("Tesla",2020);
const car2 = new Car("Baleno",2023);

console.log(car1);

//object creating with new keyword with class constructor
  class Person{
   constructor(name,age){
    this.name  = name;
    this.age = age;
   }
  }

  const person1 =  new Person("Elan" , 28);
  const person2 = new Person("Ela" , 25);
  console.log("Class Constructor");

  console.log(person1);


  function bike(brand)
  {
    this.brand = brand;
    this.start = function()
    {
       console.log(this.brand, "Started");
    }
  }

  const bike1 = new bike("RE")
  bike1.start();