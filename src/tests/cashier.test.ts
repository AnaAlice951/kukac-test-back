import { calculateChange } from "../controllers/cashier";

describe("Cashier Controller", () => {
  it("should return the correct change when money delivered is greater than the purchase value", () => {
    const resultChange = calculateChange(50, 100);
    expect(resultChange).toEqual({
      moneyHundred: 0,
      moneyTen: 5,
      moneyOne: 0,
      initialChangeValue: 50,
    });
  });

  it("should return 'Valor inválido' when money delivered is less than the purchase value", () => {
    const resultChange = calculateChange(100, 50);
    expect(resultChange).toBe("Valor inválido");
  });

  it("should return the correct change when change contains hundreds, tens, and ones", () => {
    const resultChange = calculateChange(327, 500);
    expect(resultChange).toEqual({
      moneyHundred: 1,
      moneyTen: 7,
      moneyOne: 3,
      initialChangeValue: 173,
    });
  });

  it("should return the correct change when change is only in ones", () => {
    const result = calculateChange(19, 25);
    expect(result).toEqual({
      moneyHundred: 0,
      moneyTen: 0,
      moneyOne: 6,
      initialChangeValue: 6,
    });
  });

  it("should return the correct change when change is only in ten", () => {
    const result = calculateChange(20, 50);
    expect(result).toEqual({
      moneyHundred: 0,
      moneyTen: 3,
      moneyOne: 0,
      initialChangeValue: 30,
    });
  });

  it("should return the correct change when change is only in hundred", () => {
    const result = calculateChange(100, 1200);
    expect(result).toEqual({
      moneyHundred: 11,
      moneyTen: 0,
      moneyOne: 0,
      initialChangeValue: 1100,
    });
  });
});
