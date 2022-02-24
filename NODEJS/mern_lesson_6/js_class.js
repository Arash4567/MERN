class Person {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

const mark = new Person("Mark", 2000);
console.log(mark);
console.log(mark.age());

class Dog {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

const buldog = new Person("Buldog", 2000);
console.log(buldog);
console.log(buldog.age(2022));