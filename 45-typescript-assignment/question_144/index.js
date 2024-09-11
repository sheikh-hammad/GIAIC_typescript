var promises1 = new Promise(function (resolve, reject) {
    resolve('promise 1');
});
var promises2 = new Promise(function (resolve, reject) {
    resolve('promise 2');
});
var promises3 = new Promise(function (resolve, reject) {
    reject(new Error('promise 3'));
});
Promise.all([promises1, promises2, promises3]).then(function (values) {
    console.log(values);
});
