var countrie = new Map();
countrie.set('USA', 'Washington');
countrie.set('Pakistan', 'Islanmabad');
countrie.set('Tokyo', 'Japan');
console.log(countrie);
if (countrie.has('USA')) {
    console.log("".concat(countrie.get('USA')));
}
