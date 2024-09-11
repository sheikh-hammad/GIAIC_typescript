const promises = new Promise((resolve, reject) => {
    let a = 6
    if (a === 7) {
        resolve("Success")
    } else {
        reject(new Error('Failure'))
    }
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error.message);
})