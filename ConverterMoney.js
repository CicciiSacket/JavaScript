var DTE = (money) =>{
    var result = money * 0.86
    return result

}
var DTY = (money) =>{
    var result = money * 104.87
    return result
}
var DTS = (money) =>{
    var result = money * 0.78
    return result
}

var ETD = (money) =>{
    var result = money * 1.16
    return result
}
var ETY = (money) =>{
    var result = money * 121.92
    return result
}
var ETS = (money) =>{
    var result = money * 0.90
    return result
}

var YTD = (money) =>{
    var result = money * 0.0095
    return result
}
var YTE = (money) =>{
    var result = money * 0.0082
    return result
}
var YTS = (money) =>{
    var result = money * 0.00742
    return result
}

var STD = (money) =>{
    var result = money * 1.29
    return result
}
var STE = (money) =>{
    var result = money * 1.11
    return result
}
var STY = (money) =>{
    var result = money * 135.21
    return result
}

function Converter(ValutaStart, money, ValutaResult) {
    var result = ""
    if (ValutaStart == "USD" && ValutaResult == "EUR") {
        result = DTE(money)
    }
    else if (ValutaStart == "USD" && ValutaResult == "JPY") {
        result = DTY(money)
    }
    else if (ValutaStart == "USD" && ValutaResult == "GBP") {
        result = DTS(money)
    }
    else if (ValutaStart == "EUR" && ValutaResult == "USD") {
        result = ETD(money)
    }
    else if (ValutaStart == "EUR" && ValutaResult == "JPY") {
        result = ETY(money)
    }
    else if (ValutaStart == "EUR" && ValutaResult == "GBP") {
        result = ETS(money)
    }
    else if (ValutaStart == "JPY" && ValutaResult == "USD") {
        result = YTD(money)
    }
    else if (ValutaStart == "JPY" && ValutaResult == "EUR") {
        result = YTE(money)
    }
    else if (ValutaStart == "JPY" && ValutaResult == "GBP") {
        result = YTS(money)
    }
    else if (ValutaStart == "GBP" && ValutaResult == "USD") {
        result = STD(money)
    }
    else if (ValutaStart == "GBP" && ValutaResult == "EUR") {
        result = STE(money)
    }
    else if (ValutaStart == "GBP" && ValutaResult == "JPY") {
        result = STY(money)
    }

    return "la conversione da\t" + money + ValutaStart + "\ta\t" + result + ValutaResult + "\t è avvenuta"
}
//USD = dollaro statunitense; GBP = sterlina britanica; EUR = euro; JPY = yen giapponese
console.log(Converter("USD",1,"EUR"))
console.log(Converter("GBP",1,"EUR"))
console.log(Converter("JPY",1,"EUR"))
