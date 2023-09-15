import { existsSync, readFileSync, writeFileSync } from "fs";
import { Car } from "../interfaces/car";
import { Motorcycle } from "../interfaces/motorcycle";

export type IncomingVehicle =
  | (Car & { vehicleType: string })
  | (Motorcycle & { vehicleType: string });

const file = "src/database/garage.json";

export function saveVehicle(data: IncomingVehicle) {
  const vehicle =
    data.vehicleType === "car"
      ? new Car(
          data.model,
          data.fabricationYear,
          data.brand,
          (data as Car).doorsCount
        )
      : new Motorcycle(
          data.model,
          data.fabricationYear,
          data.brand,
          (data as Motorcycle).passengersCount
        );

  let savedVehicles = existsSync(file)
    ? JSON.parse(readFileSync(file, "utf-8"))
    : [];

  savedVehicles.push(vehicle);

  writeFileSync(file, JSON.stringify(savedVehicles));
  return savedVehicles;
}

export function getGarageJson() {
  if (!existsSync(file)) {
    return "O arquivo não existe.";
  }

  return JSON.parse(readFileSync(file, "utf-8"));
}

export function removeGarageJson() {
  if (!existsSync(file)) {
    throw new Error("O arquivo não existe.");
  }
  var fs = require("fs");
  fs.unlinkSync(file);
  return;
}
