// Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами

function multiplyMaker (numFirst) {
    let result = numFirst;

    return function (numSecond){
        result *= numSecond;
        
        return result;
    };
};

const multiply = multiplyMaker(2);

console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));