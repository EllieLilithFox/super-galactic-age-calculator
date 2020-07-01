import { Age } from "../src/age-calculator";

describe("Age", () => {
  let reusableAge;
  let overLifeExpect;

  beforeEach(() => {
    reusableAge = new Age(42, 99);
    overLifeExpect = new Age(111, 72);
  })

  test("should create an age object with correct values", () => {
    expect(reusableAge.age).toBe(42);
    expect(reusableAge.lifeExpectancy).toBe(99);
  });

  test("should calculate age on Venus and save it to ageMercury property", () => {
    expect(reusableAge.ageMercury).toBe(175);
  });
  
  test("should calculate age on Venus and save it to ageVenus property", () => {
    expect(reusableAge.ageVenus).toBe(68);
  });

  test("should calculate age on Mars and save it to ageMars property", () => {
    expect(reusableAge.ageMars).toBe(22);
  });

  test("should calculate age on Jupiter and save it to ageJupiter property", () => {
    expect(reusableAge.ageJupiter).toBe(4);
  });

  test("should calculate age on Proxima Centauri b and save it to ageProxima property", () => {
    expect(reusableAge.ageProxima).toBe(1400);
  });

  test("should calculate the life expectancy of each planet and return a string with that information", () => {
    expect(reusableAge.calculateLifeLeft()).toBe("You have 238 Mercury Years, 92 Venus years, 31 Mars years, 4 Jupiter years and 1900 Proxima Centauri b years left to live.");
    expect(overLifeExpect.calculateLifeLeft()).toBe("You have lived 163 Mercury Years, 63 Venus years, 21 Mars years, 3 Jupiter years and 1300 Proxima Centauri b years over your live expectancy.");
  });

  test("should calculate age in local planet years based on what planet is passed in divided by the time dilation of 99% the speed of light, assuming you lived on the planet since you were born", () => {
    expect(reusableAge.calcLightYear("Mercury")).toBe("If an identical Mercury were traveling at %99 the speed of light you would be 175 Mercury years on slow Mercury and only 25 Mercury years on fast Mercury.");
    expect(reusableAge.calcLightYear("Venus")).toBe("If an identical Venus were traveling at %99 the speed of light you would be 68 Venus years on slow Venus and only 10 Venus years on fast Venus.");
    expect(reusableAge.calcLightYear("Mars")).toBe("If an identical Mars were traveling at %99 the speed of light you would be 22 Mars years on slow Mars and only 3 Mars years on fast Mars.");
    expect(reusableAge.calcLightYear("Jupiter")).toBe("If an identical Jupiter were traveling at %99 the speed of light you would be 4 Jupiter years on slow Jupiter and only 1 Jupiter years on fast Jupiter.");
    expect(reusableAge.calcLightYear("Proxima Centauri b")).toBe("If an identical Proxima Centauri b were traveling at %99 the speed of light you would be 1400 Proxima Centauri b years on slow Proxima Centauri b and only 200 Proxima Centauri b years on fast Proxima Centauri b.");
  });
});