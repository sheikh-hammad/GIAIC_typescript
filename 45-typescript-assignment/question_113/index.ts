const countrie = new Map<string, string>()
countrie.set('USA', 'Washington')
countrie.set('Pakistan', 'Islanmabad')
countrie.set('Tokyo', 'Japan')
console.log(countrie);
if (countrie.has('USA')){
    console.log(`${countrie.get('USA')}`)
}
