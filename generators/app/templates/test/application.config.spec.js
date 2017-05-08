describe('System', function() {
    
    // inject the HTML fixture for the tests
    beforeEach(function() {
    });

    it('is not empty', function() {
        expect(testSystem).not.toBe(undefined);
    });

    it('has lib as /base/lib', function() {
        expect(testSystem.lib).toBe("/base/lib");
    });
    
    it('has src as /base/src', function() {
        expect(testSystem.src).toBe("/base/src");
    });
    
    it('is default', function() {
        expect(testSystem.name).toBe("default");
    });

});