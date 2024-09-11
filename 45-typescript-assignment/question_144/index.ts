let promises1 = new Promise((resolve, reject) => {
    resolve('promise 1');
})
let promises2 = new Promise((resolve, reject) => {
    resolve('promise 2');
})
let promises3 = new Promise((resolve, reject) => {
    resolve ('promise 3');
})

Promise.all([promises1, promises2, promises3]).then((values) => {
    console.log(values);
})

