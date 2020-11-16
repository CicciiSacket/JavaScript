//dividere per due finchè il quoziente è zero
//console.log(6 / 2 )quoziente
//console.log(6 % 2 ) resto


function converter(number) {
    var binary = ""
    while(number != 0 ) {
		resto = number % 2
		number = (number-resto) / 2
		binary = resto + binary
    }
    return binary
}
console.log(converter(33)) //!!!! esempio palese, 33%2 = 1; poi diventa 33-1 = 32 --> 32%2 = 0 fino a 1%2 che da resto 1 e qui il quoziente è gia zero 