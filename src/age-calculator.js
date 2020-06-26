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
    this.ageMercury = 0;
  }
}