import {
  saveVehicle,
  getGarageJson,
  removeGarageJson,
} from "../controllers/garage";

describe("Garage Component", () => {
  const testVehicleCar = {
    model: "Test Car",
    fabricationYear: 2022,
    brand: "Test Brand",
    doorsCount: 4,
    vehicleType: "car",
  };

  const testVehicleMotorcycle = {
    tiresCount: 2,
    model: "Test Motorcycle",
    fabricationYear: 2022,
    brand: "Test Brand",
    passengersCount: 2,
    vehicleType: "motorcycle",
  };
  afterEach(() => {
    try {
      removeGarageJson();
    } catch (error) {}
  });

  it("should save a car to the garage JSON", () => {
    saveVehicle(testVehicleCar);

    const garageData = getGarageJson();
    expect(garageData).toHaveLength(1);
    expect(garageData[0]).toEqual(testVehicleCar);
  });

  it("should save a motorcycle to the garage JSON", () => {
    saveVehicle(testVehicleMotorcycle);

    const garageData = getGarageJson();
    expect(garageData).toHaveLength(1);

    expect(garageData[0]).toEqual(testVehicleMotorcycle);
  });

  it("should try to remove the garage JSON file and return the error", () => {
    const errorMessage = getGarageJson();
    expect(errorMessage).toBe("O arquivo não existe.");
  });

  it("should throw an error when attempting to remove a non-existing garage JSON file", () => {
    expect(() => {
      removeGarageJson();
    }).toThrowError("O arquivo não existe.");
  });
});
