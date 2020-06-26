export class Age {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.ageMercury = Math.round(this.age / .24);
    this.ageVenus = Math.round(this.age / .62);
    this.ageMars = Math.round(this.age / 1.88);
    this.ageJupiter = Math.round(this.age / 11.86);
    this.ageProxima = Math.round(this.age / .03);
  }

  calculateLifeLeft() {
    const mercuryLifeLeft = Math.abs(Math.round(this.lifeExpectancy / .24) - this.ageMercury);
    const venusLifeLeft = Math.abs(Math.round(this.lifeExpectancy / .62) - this.ageVenus);
    const marsLifeLeft = Math.abs(Math.round(this.lifeExpectancy / 1.88) - this.ageMars);
    const jupiterLifeLeft = Math.abs(Math.round(this.lifeExpectancy / 11.86) - this.ageJupiter);
    const proximaLifeLeft = Math.abs(Math.round(this.lifeExpectancy / .03) - this.ageProxima);

    if (this.age < this.lifeExpectancy) {
      return `You have ${mercuryLifeLeft} Mercury Years, ${venusLifeLeft} Venus years, ${marsLifeLeft} Mars years, ${jupiterLifeLeft} Jupiter years and ${proximaLifeLeft} Proxima Centauri b years left to live.`;
    } else {
      return `You have lived ${mercuryLifeLeft} Mercury Years, ${venusLifeLeft} Venus years, ${marsLifeLeft} Mars years, ${jupiterLifeLeft} Jupiter years and ${proximaLifeLeft} Proxima Centauri b years over your live expectancy.`;
    }
  }

  // age / 6.9
  calcLightYear(planet) {
    const lightSpeedAge = Math.round(this.age / 6.9);
    let planetLightSpeedAge = 0;
    switch (planet) {
    case "Mercury":
      planetLightSpeedAge = Math.round(lightSpeedAge / .24);
      break;
    case "Venus":
      planetLightSpeedAge = Math.round(lightSpeedAge / .62);
      break;
    case "Mars":
      planetLightSpeedAge = Math.round(lightSpeedAge / 1.88);
      break;
    case "Jupiter":
      planetLightSpeedAge = Math.round(lightSpeedAge / 11.86);
      break;
    default:
      planetLightSpeedAge = Math.round(lightSpeedAge / .03);
    }

    return ``;
  }
}