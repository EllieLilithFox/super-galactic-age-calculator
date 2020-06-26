import { Age } from "../src/age-calculator";

describe("Age", () => {
  let reusableAge;

  beforeEach(() => {
    reusableAge = new Age(42, 99);
  })

  test("should create an age object with correct values", () => {
    expect(reusableAge.age).toBe(42);
    expect(reusableAge.lifeExpectancy).toBe(99);
    expect(reusableAge.ageMercury).toBe(0);
    expect(reusableAge.ageVenus).toBe(0);
    expect(reusableAge.ageMars).toBe(0);
    expect(reusableAge.ageJupiter).toBe(0);
  })
  
});