function isPalindrome(number: number): boolean {
  const palindromeNumber = number.toString();
  return palindromeNumber === palindromeNumber.split("").reverse().join("");
}

function findPalindromes(startNumber: string, endNumber: string) {
  const initialNumber = parseFloat(startNumber);
  const finalNumber = parseFloat(endNumber);

  if (isNaN(initialNumber) || isNaN(finalNumber) || initialNumber > finalNumber)
    return "Intevalo inválido";

  const palindromes: number[] = [];
  for (let i = initialNumber; i <= finalNumber; i++) {
    if (isPalindrome(i)) {
      palindromes.push(i);
    }
  }

  return palindromes;
}

export { findPalindromes, isPalindrome };
