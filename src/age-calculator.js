export class Age {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.ageMercury = 0;
    this.ageVenus = 0;
    this.ageMars = 0;
    this.ageJupiter = 0;
  }

  calculateMercury() {
    this.ageMercury = Math.round(this.age / .24);
  }

  calculateVenus() {
    this.ageVenus = Math.round(this.age / .62);
  }

  calculateMars() {
    this.ageMars = Math.round(this.age / 1.88);
  }

  calculateJupiter() {
    this.ageJupiter = 0;
  }
}