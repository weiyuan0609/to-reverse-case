let assert = require('assert');
let reverse = require('..');

/**
 * Cases.
 */
var strings = {
    camel: 'thisIsAString'
}

/** 
 * Tests
 */
describe('to-reverse-case', function() {
    for (let key in strings) test(key);
})

/**
 * Create a test for a given case `key`.
 *
 * @param {String} key
 */

function test(key) {
    it('should convert ' + key + ' case', function () {
        assert.equal(reverse(strings[key]), 'gnirtSAsIsiht')
    })
}
