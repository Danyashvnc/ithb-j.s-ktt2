export function renderLadder(height) {
  if (height === null) {
    throw new Error("Пользователь отменяет ввод");
  }

  const h = Number(height);

  if (isNaN(h)) {
    throw new Error("Некорректные входные данные");
  }

  if (h < 0) {
    throw new Error("Некорректные входные данные");
  }

  if (!Number.isInteger(h)) {
    throw new Error("Некорректные входные данные");
  }

  if (h === 0) {
    return "";
  }

  let result = "";
  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= i; j++) {
      result += j;
    }

    if (i < h) {
      result += "\n";
    }
  }
  return result;
}
