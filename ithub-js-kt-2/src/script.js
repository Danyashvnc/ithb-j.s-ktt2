import { processWord } from "./tasks/task1.js";
import { getMultiplesOfThree } from "./tasks/task2.js";
import { renderLadder } from "./tasks/task3.js";
import { isPalindrome } from "./tasks/task4.js";

function task1() {
    /**
     * Запросите у пользователя исходное слово и символ
     * для удаления. Используя цикл while или for,
     * сформируйте новую строку без указанного символа вне
     * зависимости от регистра. Исходное слово должно
     * содержать только буквы, при наличии иных символов
     * необходимо выдавать ошибку. 
     *
     * Пример: Арнольд, а -> рнльд
     * Пример: Арнольд, А -> рнльд
     * Пример: Идиллия, и -> длля
     * Пример: Погода, я -> Погода
     */
    const initialWord = prompt("Исходное слово");
    const ignoredCharacter = prompt("Символ для удаления");

    const result = processWord(
        initialWord,
        ignoredCharacter
    );

    alert(result);
}

function task2() {
    /**
     * Запросите у пользователя число. Используя цикл
     * while или for, сформируйте строку с числами в
     * диапазоне от 1 до этого числа, кратными числу 3,
     * указанными через запятую с пробелом.
     *
     * Пример: 14 -> 3, 6, 9, 12
     * Пример: 15 -> 3, 6, 9, 12, 15
     * Пример: 4 -> 3
     * Пример: 2 -> <пустая строка>
     */

    const userInput = prompt("Число");
    const result = getMultiplesOfThree(userInput);
    alert(result);
}

function task3() {
    /**
     * Запросите у пользователя число ступенек. 
     * Используя цикл while или for, сформируйте 
     * лесенку заданной высоты, согласно примерам 
     * ниже. Выведите лесенку на экран
     *
     * Пример входных данных: 4
     * Пример выходных данных:
     *  1
     *  12
     *  123
     *  1234
     * 
     * Пример входных данных: 2
     * Пример выходных данных:
     *  1
     *  12
    */

    const userInput = prompt("Число");
    const result = renderLadder(userInput);
    alert(result);
}

function task4() {
    /**
     * Запросите у пользователя строку для проверки
     * на палиндром. Создайте два бегунка (левый и 
     * правый), двигайте их навстречу друг другу. 
     * Если символы, на которые указывают бегунки,
     * различаются - слово не является палиндромом.
     * Если бегунки встретились - значит является.
     * Выведите ответ согласно примерам.
     * 
     * Пример: потоп -> "потоп - палиндром"
     * Пример: а -> "а - не палиндром"
     * Пример: слот -> "слот - не палиндром"
    */

    const userInput = prompt("Слово");
    const result = isPalindrome(userInput);
    alert(result);
}

function executeTask(event) {
    if (event.target.tagName !== "BUTTON") {
        return;
    }

    switch (event.target.dataset.id) {
        case "1":
            return task1();
        case "2":
            return task2();
        case "3":
            return task3();
        case "4":
            return task4();
    }
}

document
    .querySelector("#buttons")
    .addEventListener("click", executeTask);
