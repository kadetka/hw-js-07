/* Создайте функцию которая бы умела делать:
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
*/

function minus (a) {
    if(a === undefined){
        a = 0;
    };

    return function (b) {
        if(b === undefined){
            b = 0;
        }

        return a - b;
    };
};

console.log(minus(10)(6));
console.log(minus(5)(6));
console.log(minus(10)(0));
console.log(minus()(6));
console.log(minus()());