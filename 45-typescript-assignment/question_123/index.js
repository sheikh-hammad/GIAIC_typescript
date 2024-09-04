function findVowel(str) {
    var vowels = 'aeoiuAEOIU';
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var element = str_1[_i];
        if (vowels.includes(element)) {
            console.log(element);
            break;
        }
    }
}
findVowel('hammad');
// This function iterates through a string and logs each character until it finds a vowel
// function logUntilVowel(str: string): void {
//     const vowels = "aeiouAEIOU";
//     for (const char of str) {
//       if (vowels.includes(char)) {
//         console.log(`First vowel found: ${char}`);
//         break; // Stops the loop at the first vowel found
//       }
//       console.log(char); // Logs each character until a vowel is encountered
//     }
//   }
//   logUntilVowel("syzygu"); // Logs 's', 'y', 'z', 'y', and then 'First vowel found: y'
