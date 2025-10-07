export function getMultiplesOfThree(userInput) {
  if (userInput == null) {
    throw new Error("Некорректный ввод");
  }

  if (!/^-?\d+$/.test(userInput)) {
    throw new Error("Некорректный ввод");
  }

  const number = parseInt(userInput);

  if (isNaN(number) || number < 1) {
    throw new Error("Некорректный ввод");
  }

  let result = "";
  let isFirst = true;

  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      if (!isFirst) {
        result += ", ";
      }
      result += i;
      isFirst = false;
    }
  }
  return result;
}
