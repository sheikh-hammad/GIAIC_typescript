/*
Enhanced Laptop Object: Construct an object
for a laptop including properties make, model,
year, and a method describe() th9at logs a 
sentence about the laptop.
*/

let laptopObject: {make: string, model: string, year: number, describe: () => void} = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2024,
    describe: function(): void{
        console.log(`I purchased ${this.make} with model ${this.model} with a model of ${this.year}`);
    }

    
}

laptopObject.describe()
