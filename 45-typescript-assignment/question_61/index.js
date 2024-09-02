"use strict";
var Vehicle;
(function (Vehicle) {
    Vehicle[Vehicle["Cars"] = 0] = "Cars";
    Vehicle[Vehicle["Motorcycle"] = 1] = "Motorcycle";
    Vehicle[Vehicle["Truck"] = 2] = "Truck";
})(Vehicle || (Vehicle = {}));
console.log(Vehicle.Motorcycle);
