const students = new Map<number, string>()
students.set(3113, 'Ali')
students.set(5413, 'Annum')
students.set(4639, 'Talha')
students.forEach((student , id)=> console.log(student, id))