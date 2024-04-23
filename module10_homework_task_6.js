// Задание 6

// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести
// результат true или false в консоль. Речь идёт не о двух рядом стоящих
// одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

//Решение (Ниже можете раскоментировать любую одну строку с массивом):


let sum = 0;
//let arr = [false, false, false, false, false, false, false, false];
//let arr = [true, false, false, false, false, false, false, false];
//let arr = [1, 2234, 234, "ok", 234];
//let arr = ["the same", "the same", "the same", "the same", "the same", "the same"];

for (let i = 1; i < arr.length; i = ++i){
        if (arr[0] === arr[i]){
            sum = ++sum;
            console.log(sum);
        }
}

console.log(sum);
if (sum === arr.length - 1) {
    console.log("Array is the same");
} else {
    console.log("Array is not the same");
}