// Написать функцию, которая создает пустой объект, но без прототипа.

function create_obj(){

    const empty_obj = Object.create(null);
    return empty_obj
}

console.log(create_obj())