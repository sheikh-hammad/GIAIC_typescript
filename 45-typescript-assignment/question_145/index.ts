// function sum(x, y){
//     let result = x + y;
//     callback(result)
// }

// function displaySum(result){
//     console.log(result);
// }

// sum(displaySum, 2, 3)

function sum(callback: Function, x: number, y: number): void {
    let result = x + y;
    callback(result)
}

function displaySum(result: number) {
    console.log(result);

}

sum(displaySum, 2, 2)