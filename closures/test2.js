var num1 = 1;

function test() {
    num2 = 2;
    var num3 = 3;

    return num1 + num2;
}

console.log('result', test());
console.log('num1', num1);
console.log('num2', num2);
console.log('num3', num3);