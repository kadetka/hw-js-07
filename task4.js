// Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

const calculateModul = function () {
    let number;

    function setNumber (num) {
       
       return number = num;
    };

    function addNumber (num) {
        
        return number += num;

    };

    function multiplyNumber (num) {
        
        return number *= num;
    };

    function subtractNumber (num) {

        return number -= num;
    };

    function divideNumber (num) {

        return number /= num;
    };

    function degreeNumber (num) {
        number = Math.pow(number, num);

        return number;
    };

    function getNumber () {
        number = number.toFixed(2);

        return number;
    }

    return {
        setNumber,
        addNumber,
        multiplyNumber,
        subtractNumber,
        divideNumber,
        degreeNumber,
        getNumber
    };
}();


console.log(calculateModul.setNumber(10));
console.log(calculateModul.addNumber(5));
console.log(calculateModul.multiplyNumber(2));
console.log(calculateModul.subtractNumber(10));
console.log(calculateModul.divideNumber(4));
console.log(calculateModul.degreeNumber(3));
console.log(calculateModul.getNumber());

