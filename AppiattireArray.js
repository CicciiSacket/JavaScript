
//APPIATTIRE UN ARRAY DI ARRAY CON REDUCE E CONCAT

const array2 = ['mario','bros']
const array3 = ['è']
const array4 = ['come']
const array5 = ['un','dio']


var Array1 = [array2, array3,array4,array5]
console.log(Array1)
console.log(Array1.reduce((Accumulator => ''.concat(Accumulator)),Array1))  



