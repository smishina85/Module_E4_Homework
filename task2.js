// E4.3 task2

//Написать функцию, которая принимает в качестве аргументов строку и объект,
//а затем проверяет есть ли у переданного объекта свойство с данным именем.
//Функция должна возвращать true или false.

function func_check_prop(str, obj) {
    const is = false;
    for (let key in obj) {
        if(str === key){
            return true
        }
    }
    return(is)
}

const test_obj = {};
test_obj.k1 = 100;
test_obj.k2 = "just test";
test_obj.k3 = 8;

const test_str = 'test';
console.log(test_obj, test_str)

console.log(func_check_prop("k2", test_obj));
console.log(func_check_prop("prop8", test_obj));