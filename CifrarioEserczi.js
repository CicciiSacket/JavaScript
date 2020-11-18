const obj = {
    "": 0,
    a : 1,  
    b : 2,
    c : 3,
    d : 4,
    e : 5,
    f : 6,
    g : 7, 
    h : 8,
    i : 9,
    l : 10,
    m : 11,
    n : 12,
    o : 13,
    p : 14,
    q : 15,
    r : 16,
    s : 17,
    t : 18,
    u : 19,
    v : 20,
    z : 21
}


var cipher = ( str ) => {
	var parts = str.split( "" );
	var output = [];
	
	for( var i = 0; i < parts.length; ++i ) {
        var ch = parts[i];
        for (const iterator in obj) {
            if (ch == iterator) {
                key = "0"+obj[ch]
            }
        }
		var chCode = ch.replace(ch,key);
		output.push( chCode )
	}

    return output.join( "" );
}
console.log(cipher('ciao mario ')) 

var decrypt = ( str ) =>{
    var parts = str.split(0);
    var output = [];

    for( var i = 0; i < parts.length; ++i ) {
        var ch = parts[i];
        for (const iterator in obj) {
            if (ch == obj[iterator]) {
                key = iterator
                console.log(key)
            }
        }
        var chCode = ch.replace(ch,key);
		output.push( chCode )
    }
    return output;
}
decrypt(cipher('ciao mario '))
//join





