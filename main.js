// masala
class Transport {
  constructor(name, speed, capacity) {
    this.name = name;
    this.speed = speed;
    this.capacity = capacity;
  }
  getDetails() {
    return `Rusimi ${this.name} u ${this.speed} km/h tezlikda harakat qiladi sig'imi ${this.capacity} ta odam ketadi `;
  }
  start() {
    console.log(`${this.name} harakatga tushdi`);
  }
  stop() {
    console.log(`${this.name} to'xtadi`);
  }
}
const transport1 = new Transport("Avtobus", 120, 50);
const transport2 = new Transport("Poyezd", 220, 150);
const transport3 = new Transport("BMW", 320, 4);
// console.log(transport1);
// console.log(transport2);
// console.log(transport3);
// transport1.start();
// transport1.stop();
// transport2.start();
// transport2.stop();
// transport3.start();
// transport3.stop();
// console.log(transport1.getDetails());
// console.log(transport2.getDetails());
// console.log(transport3.getDetails());


// mashina---------////////////////
class Car extends Transport {
  constructor(name, speed, capacity, fuelType) {
    super(name, speed, capacity);
    this.fuelType = fuelType;
  }
  driveMode(mode) {
    console.log(`${this.name} haydash rejimini ${mode} ga o'zgartiradi`);
  }
  getDetailsCar() {
    return `Rusimi ${this.name} u ${this.speed} km/h tezlikda harakat qiladi sig'imi ${this.capacity} ta odam ketadi u ${this.fuelType} yonilg'isida harakatlanadi`;
  }
}
const car1 = new Car("Spark", 160, 4, "Benzin");
// car1.start();
// car1.driveMode("sport");
// console.log(car1);
// console.log(car1.getDetailsCar());


// samalyot-------------/////////////////////////////
class Airplane extends Transport {
  constructor(name, speed, capacity, altitude) {
    super(name, speed, capacity);
    this.altitude = altitude;
  }
  getDetailsAirplane() {
    return `Rusimi ${this.name} u ${this.speed} km/h tezlikda harakat qiladi sig'imi ${this.capacity} ta odam ketadi u ${this.altitude} balandlikda harakat qiladi`;
  }
  fly() {
    console.log(`${this.name} ${this.altitude} parvoz boshlandi.`);
  }
}
const airplane1 = new Airplane("Samalyot", 300, 2000, 1000);
// airplane1.fly();
// airplane1.start();
// airplane1.stop();
// console.log(airplane1);
console.log(airplane1.getDetailsAirplane());

  
// Kema------//////////
class Ship extends Transport {
  constructor(name, speed, capacity, cargoCapacity) {
    super(name, speed, capacity);
    this.cargoCapacity = cargoCapacity;
  }
  getDetailsShip() {
    return `Rusimi ${this.name} u ${this.speed} km/h tezlikda harakat qiladi sig'imi ${this.capacity} ta odam ketadi u ${this.cargoCapacity} tonna yuk tashiydi `;
  }
  sail() {
    console.log(
      `${this.name} ${this.cargoCapacity} t yuk bilan suzishni boshladi`
    );
  }
}
const ship1 = new Ship("Titanik", 80, 200, 20000);
// kema.sail();
// kema.start();
// kema.stop();
// console.log(kema);
// console.log(ship1.getDetailsShip());

