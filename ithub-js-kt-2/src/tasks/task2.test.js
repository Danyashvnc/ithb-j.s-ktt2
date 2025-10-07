import { describe, test, expect } from "vitest";
import { getMultiplesOfThree } from "./task2";

describe("getMultiplesOfThree", () => {
  describe("обработка некорректных данных", () => {
    test("выдает ошибку при null", () => {
      expect(() => getMultiplesOfThree(null)).toThrowError("Некорректный ввод");
    });

    test("выдает ошибку при undefined", () => {
      expect(() => getMultiplesOfThree(undefined)).toThrowError(
        "Некорректный ввод"
      );
    });

    test("выдает ошибку при нечисловых строках", () => {
      expect(() => getMultiplesOfThree("abc")).toThrowError(
        "Некорректный ввод"
      );
      expect(() => getMultiplesOfThree("12a3")).toThrowError(
        "Некорректный ввод"
      );
      expect(() => getMultiplesOfThree("1.5")).toThrowError(
        "Некорректный ввод"
      );
    });

    test("выдает ошибку при числах меньше 1", () => {
      expect(() => getMultiplesOfThree("0")).toThrowError("Некорректный ввод");
      expect(() => getMultiplesOfThree("-5")).toThrowError("Некорректный ввод");
    });
  });

  describe("обработка корректных данных", () => {
    test("возвращает кратные 3 для небольших чисел", () => {
      expect(getMultiplesOfThree("5")).toBe("3");
      expect(getMultiplesOfThree("6")).toBe("3, 6");
      expect(getMultiplesOfThree("10")).toBe("3, 6, 9");
    });

    test("возвращает кратные 3 для больших чисел", () => {
      expect(getMultiplesOfThree("15")).toBe("3, 6, 9, 12, 15");
    });

    test("возвращает пустую строку когда нет кратных 3", () => {
      expect(getMultiplesOfThree("2")).toBe("");
      expect(getMultiplesOfThree("1")).toBe("");
    });
  });
});
