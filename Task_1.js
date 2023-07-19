// E4.3 task 1
function func_out_ownprop(obj) {
    for (let prop in obj) {
        if(obj.hasOwnProperty(prop)){
            console.log(prop, obj[prop])
        }
    }
}

const pro_test = {city: "Moscow"};

const test_obj = Object.create(pro_test);

test_obj.k1 = 100;
test_obj.k2 = "just test";
test_obj.k3 = 8;

console.log(test_obj)
func_out_ownprop(test_obj)