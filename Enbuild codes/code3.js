// Question 3 :-

// Write a program to print the first 100 prime numbers.

function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    console.log(arr); // use arr result on your own
}

display(100);


//Added Functionality

function prime(n,flag) {
    ( typeof flag === "undefined" || flag === false ) ? flag = false : flag = true;

    function isPrime(num) {
        if ( num === 0 || num === 1 ) {
            return false;
        }
        for ( var i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        return true;
    }

    if ( flag ) {
        var arr = [2];
        for ( var i = 3; i <= n; i+=2 ) {
            if ( isPrime(i) ) {
                arr.push(i);
            }
        }
        return arr;
    } else {
        return isPrime(n);
    }
}