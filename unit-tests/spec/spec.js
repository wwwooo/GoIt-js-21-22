var pow = require('../pow.js');

describe('pow()', function() {
    it('should call pow(2, 0)', function() {
        var result = pow(2, 0);
        expect(result).toBe(1);
    });
    it('should call pow(2, 5.5)', function() {
        var result = pow(2, 5.5);
        expect(result).toBeUndefined();
    });
    it('should call pow(2, "2")', function() {
        var result = pow(2, '2');
        expect(result).toBe(4);
    });
    it('should call pow(2, "2cow")', function() {
        var result = pow(2, '2cow');
        expect(result).toBeUndefined();
    });
});
