/*
Make a Smartphone Object: Create a simple 
way to keep track of a smartphone's details. 
Include its brand, model, and other key features 
like how much storage it has, the size of 
its screen, and how long its battery lasts.
*/
type Features = {
    storage: string,
    screenSize: string,
    batteryLife: string
}

const smartPhone: {brand: string, model: string, otherFeatures: Features} = {
    brand: 'Samsung',
    model: 'A51',
    otherFeatures: {
        storage: "128GB",
        screenSize: "6.2 inches",
        batteryLife: "18 hours"
    }

}

console.log(smartPhone.otherFeatures.screenSize);