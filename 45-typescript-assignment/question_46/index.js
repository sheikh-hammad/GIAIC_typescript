/*
Enhanced Laptop Object: Construct an object
for a laptop including properties make, model,
year, and a method describe() th9at logs a
sentence about the laptop.
*/
var laptopObject = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2024,
    describe: function () {
        console.log("I purchased ".concat(this.make, " with model ").concat(this.model, " with a model of ").concat(this.year));
    }
};
laptopObject.describe();
