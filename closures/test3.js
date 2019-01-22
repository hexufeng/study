a = 1;
var b = 2;

function outer(z) {
    b = 3;
    c = 4;
    var d = 5;
    e = 6;
    f;      // ReferenceError: f is not defined

    function inner() {
        var e = 0;
        d = 2 * d;
        return d;
    }
    return inner();
    var e;
}
console.log('result', outer(1));