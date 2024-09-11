const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolve');
    }, 2000)
}).then((message) => {
    console.log(message);
})