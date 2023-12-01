function add(n) {
    return function(x) {
        return n + x;
    };
}


console.log(add(10)(20));

