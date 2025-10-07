export function isPalindrome(word) {
  if (word === null) {
    throw new Error("Пользователь отменил ввод");
  }
  if (typeof word !== "string") {
    throw new Error("Некорректные входные данные");
  }

  const trimWord = word.trim();
  if (trimWord.length === 0) {
    throw new Error("Некорректные входные данные");
  }
  if (trimWord.includes(" ")) {
    throw new Error("Введено несколько слов");
  }
  if (!/^[a-zA-Zа-яА-Я]+$/.test(trimWord)) {
    throw new Error("Некорректные входные данные");
  }
  if (trimWord.length === 1) {
    return trimWord + " - не палиндром";
  }
  const lowered = trimWord.toLowerCase();
  const length = lowered.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (lowered[i] !== lowered[length - i - 1]) {
      return trimWord + " - не палиндром";
    }
  }

  return trimWord + " - палиндром";
}
