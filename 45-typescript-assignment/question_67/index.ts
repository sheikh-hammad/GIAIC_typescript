function sum(str: string, num: number):number{
    return Number(str) + num
}

const newNum = sum('e.g.,', 5);
console.log(typeof newNum);