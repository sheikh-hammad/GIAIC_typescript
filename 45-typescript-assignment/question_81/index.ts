// let accesories = {
//     make: 'Honda',
//     model: 'Civic',
//     color: 'Grey',
//     year: 2017
// }
// for(let accesory in accesories){
//     console.log(accesory, accesories);
// }

function accesories(key: object) {
    for (let accesory in key) {
        console.log(`${accesory}: ${key[accesory]}`);
    }
}

accesories({
    make: 'Honda',
    model: 'Civic',
    color: 'Grey',
    year: 2017
})