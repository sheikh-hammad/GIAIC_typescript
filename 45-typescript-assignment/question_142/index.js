var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise resolve');
    }, 2000);
}).then(function (message) {
    console.log(message);
});
