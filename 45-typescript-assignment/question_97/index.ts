const now = new Date()
const date = String(now.getDate()).padStart(2, '0')
const month = String(now.getMonth() + 1).padStart(2, '0')
const year = now.getFullYear()

console.log(`${date}-${month}-${year}`);