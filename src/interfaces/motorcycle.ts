import { IVehicle } from "./vehicle";

export class Motorcycle implements IVehicle {
  model: string;
  fabricationYear: number;
  brand: string;
  tiresCount: number;
  passengersCount: number;
  vehicleType: string;

  constructor(
    _model: string,
    _fabricationYear: number,
    _brand: string,
    _passengersCount: number
  ) {
    this.tiresCount = 2;
    this.model = _model;
    this.fabricationYear = _fabricationYear;
    this.brand = _brand;
    this.passengersCount = _passengersCount;
    this.vehicleType = "motorcycle";
  }
}
