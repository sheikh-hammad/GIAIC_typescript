function currentBirthday(day: number, month: number): Date{
    const today = new Date()
    const year = today.getFullYear()
    const birthday = new Date(year , month - 1, day)
    if (birthday < today)
        year + 1
    return birthday

}
console.log(currentBirthday(19, 12).toLocaleDateString())