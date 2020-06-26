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
    this.ageJupiter = Math.round(this.age / 11.86);
  }

  calculateLifeLeft() {
    this.calculateMercury();
    this.calculateVenus();
    this.calculateMars();
    this.calculateJupiter();

    let mercuryLifeLeft = Math.round(this.lifeExpectancy / .24) - this.ageMercury;
    let venusLifeLeft = Math.round(this.lifeExpectancy / .62) - this.ageVenus;
    let marsLifeLeft = Math.round(this.lifeExpectancy / 1.88) - this.ageMars;
    let jupiterLifeLeft = Math.round(this.lifeExpectancy / 11.86) - this.ageJupiter;

    if (this.age < this.lifeExpectancy) {
      return ``;
    } else {
      return ``;
    }
  }
}