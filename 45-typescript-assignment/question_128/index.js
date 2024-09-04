var arrFunc = function () {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr.reduce(function (total, number) { return total * number; }, 1);
};
console.log(arrFunc(1, 2, 3, 4));
