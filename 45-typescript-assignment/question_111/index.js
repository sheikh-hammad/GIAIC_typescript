function age(num) {
    if (num < 13) {
        return 'child';
    }
    else if (num >= 13 && num <= 19) {
        return 'teenager';
    }
    else {
        return 'adult';
    }
}
console.log(age(43));
