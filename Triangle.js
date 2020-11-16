// esercizio dati tre lati definire se è possibile formare un triangolo 
//dato il triangolo definire se è isoscele scaleno equilatero o rettangolo?


function type(x,y,z){
    if(x == Math.sqrt(y*y + z*z) || y == Math.sqrt(x*x + z*z) || z == Math.sqrt(x*x + y*y)){
        return 'rettangolo'
    }
    else if(x == y && y == z){
        return 'equilatero'
    }
    else if(x == y || x == z){
        return 'isoscele'
    }
    else return 'scaleno'
} 
function triangle(x,y,z){
    if(x > y-z && y > x-z && z > x-y){
        return 'this is a triangle'
    }
    else return 'not a tringle';
}

console.log(triangle(3,4,5))
console.log(type(3,4,5))


