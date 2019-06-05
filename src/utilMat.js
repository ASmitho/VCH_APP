
export function subarrayIndex( arr, indices ){
    var new_array = []

    for( var i = 0; i < indices.length; i++){
        new_array.push( arr[indices[i]] );
    }

    return new_array; 
}

export function findZero ( arr ){
    var new_array = []

    for(var i = 0; i < arr.length; i++ ){
        if( arr[i] > 0 ){
            new_array.push(i);
        };
    }

    return new_array; 
}

export function diff( arr ){
    var new_array = []

    for(var i = 0; i < arr.length - 1; i++ ){
        new_array.push( arr[ i + 1 ] - arr[ i ] );
    }

    return new_array; 
}

export function cumsum( arr ){
    var new_array = []; 
    arr.reduce(function(a,b,i) { return new_array[i] = a+b; }, 0);
    return new_array; 
}


export function multiplyVector(a,b){
    return a.map((e,i) => e * b[i]);
}

export function sumVector(v){
    return v.reduce(( a, b ) => a + b, 0);
}

export function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

export function isReal( x ){
    if( !(isFinite( x )) || (isNaN( x )) ){
        return false;
    }
    else{ return true; }
}
