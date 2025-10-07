 /**
 * @param {string} word - Исходное слово
 * @param {string} ignoredCharacter - Игнорируемый символ
 * @returns {string} Новая строка без указанного символа
 * @description Формирование новой строки без указанного символа
 */
export function processWord(word, ignoredCharacter) {
  if (word === null) {
    throw new Error("Некорректное слово");
  }

  if (ignoredCharacter === null) {
    throw new Error("Не указан игнорируемый символ");
  }

  if (!/^[а-яА-Яa-zA-Z]*$/.test(word)) {
    throw new Error("Слово содержит небуквенные символы");
  }

  let result = "";
  for (let i = 0; i < word.length; i++) {
    const currentChar = word[i];

    if (currentChar.toLowerCase() !== ignoredCharacter.toLowerCase()) {
      result += currentChar;
    }
  }

  return result;
}
