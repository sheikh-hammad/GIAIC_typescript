function findVowel(str: string) {
    const vowels = 'aeoiuAEOIU'
    for (let element of str) {
        if (vowels.includes(element)) {
            console.log(element);
            break;
        }
    }
}
findVowel('hammad')


