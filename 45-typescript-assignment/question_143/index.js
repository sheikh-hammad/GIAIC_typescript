var promises = new Promise(function (resolve, reject) {
    var a = 6;
    if (a === 7) {
        resolve("Success");
    }
    else {
        reject(new Error('Failure'));
    }
}).then(function (result) {
    console.log(result);
}).catch(function (error) {
    console.log(error);
});
