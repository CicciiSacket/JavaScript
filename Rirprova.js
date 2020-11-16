function primitiveMultiply(x,y){
    try{
        if(x < 0 || y < 0){
            throw new multiplyError('errore di prova')
    }
        return x*y
    }
    catch (multiplyError){
        console.log('insert positive number')
    }
    return '('+ x + ')and('+ y + ')'
}


console.log(primitiveMultiply(-3,4))
