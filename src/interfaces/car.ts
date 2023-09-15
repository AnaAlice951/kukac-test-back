import { IVehicle } from "./vehicle";

export class Car implements IVehicle {
  model: string;
  fabricationYear: number;
  brand: string;
  doorsCount: number;
  vehicleType: string;

  constructor(
    _model: string,
    _fabricationYear: number,
    _brand: string,
    _doorsCount: number
  ) {
    this.model = _model;
    this.fabricationYear = _fabricationYear;
    this.brand = _brand;
    this.doorsCount = _doorsCount;
    this.vehicleType = "car";
  }
}
