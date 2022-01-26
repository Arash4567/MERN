class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "Menda  " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  show() {
    return this.present() + " mashinasi bor, uning modeli " + this.model;
  }
}

let myCar = new Model("Chevrolet", "Captiva");
