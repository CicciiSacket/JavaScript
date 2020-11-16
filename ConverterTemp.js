var FTC = (cifra) =>{
    var result = ((cifra - 32) / 1.8)
    return result
}//Fahrenheit to Celsius

var FTK = (cifra) =>{
    var result = ((cifra - 459.67) / 1.8)
    return result
}//Fahrenheit to Kevin

var CTF = (cifra) =>{
    var result = ((cifra * 1.8) + 32)
    return result
}//Celsius to Fahrenheit

var CTK = (cifra) =>{
    var result = (cifra + 273.15)
    return result
}//Celsius to Kelvin

var KTF = (cifra) =>{
    var result = ((cifra * 1.8) - 459.67)
    return result
}//Kelvin to Fahrenheit

var KTC = (cifra) =>{
    var result = (cifra - 273.15)
    return result
}//kelvin to Celsius

function Converter(UnitStart, cifra, UnitResult){
    var result = ""
    if (UnitStart == "F" && UnitResult == "C") {
        result = FTC(cifra)      
    }
    else if(UnitStart == "F" && UnitResult == "K"){
        result = FTK(cifra)
    }
    else if ((UnitStart == "C" && UnitResult == "F")) {
        result = CTF(cifra)
    }
    else if ((UnitStart == "C" && UnitResult == "K")) {
        result = CTK(cifra)
    }
    else if ((UnitStart == "K" && UnitResult == "F")) {
        result = KTF(cifra)
    }
    else if ((UnitStart == "K" && UnitResult == "C")) {
        result = KTC(cifra)
    }
    return "conversione avvenuta da\t" + cifra + UnitStart +"\ta" + "\t" + result + UnitResult
}
console.log(Converter("K",300,"C"))
console.log(Converter("C",98,"F"))
console.log(Converter("F",600,"K"))