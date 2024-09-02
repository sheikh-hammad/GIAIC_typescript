function scores(...score: number[]): number{
    const newScores = score.reduce((a, b) => a + b, 0)/score.length
    return newScores
}

console.log(scores(1, 2, 3, 4))