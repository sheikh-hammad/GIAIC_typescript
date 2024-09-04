function studentNumbers(num) {
    if (num >= 85) {
        return 'A';
    }
    else if (num > 75) {
        return 'B';
    }
    else {
        return 'C';
    }
}
console.log(studentNumbers(65));
