// Задание 8

// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

// Используйте шаблонные строки.

//Решение:

let myMap = new Map();
myMap.set(1, "Test");
myMap.set(true, "Test2");
myMap.set("three", 33);
myMap.set("four", "44");
myMap.set(NaN, 5234);

for (let name of myMap.keys()){
    console.log(`Ключ - ${name}, значение - ${myMap.get(name)}`);
}