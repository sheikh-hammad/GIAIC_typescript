// let accesories = {
//     make: 'Honda',
//     model: 'Civic',
//     color: 'Grey',
//     year: 2017
// }
// for(let accesory in accesories){
//     console.log(accesory, accesories);
// }
function accesories(key) {
    for (var accesory in key) {
        console.log("".concat(accesory, ": ").concat(key[accesory]));
    }
}
accesories({
    make: 'model',
    model: 'Civic',
    color: 'Grey',
    year: 2017
});
