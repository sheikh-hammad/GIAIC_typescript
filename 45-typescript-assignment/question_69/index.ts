function divide(divider: number, num: number): {quotient: number; remaider: number} {
    let quotient = Math.floor(divider / num)
    let remaider = divider % num

    return {quotient, remaider}
   

}

console.log(divide(10, 3))