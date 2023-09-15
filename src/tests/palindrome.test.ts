import { isPalindrome, findPalindromes } from "../controllers/palindrome";

describe("Palindrome Controller", () => {
  it("should return true if a number is a palindrome", () => {
    const numberIsPalindrome: boolean = isPalindrome(5445);
    expect(numberIsPalindrome).toBe(true);
  });

  it("should return false if a number is not a palindrome", () => {
    const numberIsPalindrome: boolean = isPalindrome(10011);
    expect(numberIsPalindrome).toBe(false);
  });

  it("should return all palindromic numbers in a interval of numbers", () => {
    const palindromicNumbers = findPalindromes("0", "110");
    expect(palindromicNumbers).toStrictEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101,
    ]);
  });

  it("should return 'Intevalo inválido' when first number is greater than the second value", () => {
    const palindromicNumbers = findPalindromes("120", "110");
    expect(palindromicNumbers).toBe("Intevalo inválido");
  });
});
