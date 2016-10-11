var pow = function(a, x) {
    var check = !isNaN(parseFloat(a)) && !isNaN(parseFloat(x)) && (Math.ceil(a) == a) && (Math.ceil(x) == x);

    if (check) {
        var result = 1;
        if (x < 0) {
            x = -x;
            a = 1 / a;
        }
        for (var i = 0; i < x; i++) {
            result *= a;
        }
        return result;
    }

};

module.exports = pow;
