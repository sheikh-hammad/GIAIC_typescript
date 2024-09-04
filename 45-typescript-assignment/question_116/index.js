function seasons(season) {
    switch (season) {
        case 1:
        case 2:
        case 3:
            console.log('1st quarter');
            break;
        case 4:
        case 5:
        case 6:
            console.log('2nd quarter');
            break;
        case 7:
        case 8:
        case 9:
            console.log('3rd quarter');
            break;
        case 10:
        case 11:
        case 12:
            console.log('4th quarter');
            break;
        default:
            console.log('invalid quarter');
            break;
    }
}
seasons(45);
