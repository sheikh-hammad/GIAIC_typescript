function currentBirthday(day, month) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today)
        year + 1;
    return birthday;
}
console.log(currentBirthday(19, 12).toLocaleDateString());
