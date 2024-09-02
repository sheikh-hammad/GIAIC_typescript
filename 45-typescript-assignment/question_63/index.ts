type Dimensions = {
    kind: 'Circle'| 'Rectangle',
    width?: number,
    height?: number,
    radius?: number
}
let rectangle: Dimensions = {
    kind: "Rectangle",
    width: 10,
    height: 5
}
let circle: Dimensions = {
    kind: "Circle",
    radius: 25
}

console.log(circle);
console.log(rectangle);