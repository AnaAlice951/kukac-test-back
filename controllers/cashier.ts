function calculateChange(purchaseValue: number, moneyDelivered: number) {
  const initialChangeValue = moneyDelivered - purchaseValue;
  let changeValue = moneyDelivered - purchaseValue;

  if (changeValue >= 0) {
    let moneyHundred = 0;
    let moneyTen = 0;
    let moneyOne = 0;

    if (changeValue >= 100) {
      moneyHundred = Math.floor(changeValue / 100);
      changeValue -= moneyHundred * 100;
    }
    if (changeValue >= 10) {
      moneyTen = Math.floor(changeValue / 10);
      changeValue -= moneyTen * 10;
    }
    if (changeValue >= 1) {
      moneyOne = Math.floor(changeValue / 1);
      changeValue -= moneyOne * 1;
    }
    return {
      moneyHundred,
      moneyTen,
      moneyOne,
      initialChangeValue,
    };
  } else {
    return "Valor inválido";
  }
}

export { calculateChange };
