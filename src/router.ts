import { Router } from "express";
import { findPalindromes } from "./controllers/palindrome";
import { calculateChange } from "./controllers/cashier";
import {
  getGarageJson,
  removeGarageJson,
  saveVehicle,
} from "./controllers/garage";

const router = Router();

router.get("/", (req, res) => {});

router.post("/palindrome", (req, res) => {
  const { startNumber, endNumber } = req.body;
  const response = findPalindromes(startNumber, endNumber);

  if (typeof response === "string") return res.json({ error: response });
  return res.json({ palindromes: response });
});

router.post("/cashier", (req, res) => {
  const { purchaseValue, moneyDelivered } = req.body;
  const response = calculateChange(purchaseValue, moneyDelivered);

  if (typeof response === "string") return res.json({ error: response });
  return res.json({ change: response });
});

router.post("/save-garage", (req, res) => {
  const vehicle = req.body.vehicle;
  const response = saveVehicle(vehicle);

  if (typeof response === "string") return res.json({ error: response });
  return res.json({ change: response });
});

router.get("/get-garage", (req, res) => {
  const response = getGarageJson();

  if (typeof response === "string") return res.json({ error: response });
  return res.json({ change: response });
});

router.delete("/delete-garage", (req, res) => {
  const response = removeGarageJson();

  if (typeof response === "string") return res.json({ error: response });
  return res.sendStatus(200);
});

export default router;
