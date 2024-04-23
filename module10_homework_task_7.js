// Задание 7

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент (0), то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа,
// но и, например, знаки, null и так далее.

//Решение:

let arr = [1, 2234, 0, "ok", 231, 0, false, null, NaN, -2, -4, 333];

let zero = 0;
let evenNumbers = 0;
let oddNumbers = 0;

for (let i = 0; i < arr.length; i = ++i){
        if (typeof arr[i] === "number"){
            if (arr[i] === 0) {
              zero = ++zero
            } else if (arr[i] % 2 === 0) {
              evenNumbers = ++evenNumbers
            } else {
              oddNumbers = ++oddNumbers
            }
        }
}

console.log("Количество нулей (0) в массиве: " + zero);
console.log("Количество четных чисел в массиве: " + evenNumbers);
console.log("Количество нечетных чисел в массиве: " + oddNumbers);