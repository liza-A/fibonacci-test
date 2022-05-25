const assert = require('chai').assert;
const fib = require('../fibonacci');

// test fabonacci.js
describe("fibonacci", function() {
   it('should return 8 when given 5 as an input', () => {
      assert.strictEqual(fib.fibonacci(5), 8)
    });
   it('should return 34 when given 8 as an input', () => {
      assert.strictEqual(fib.fibonacci(8), 34)
   });
   it('should return 89 when given 10 as an input', () => {
      assert.strictEqual(fib.fibonacci(10), 89)
   });
   it('should return 2584 when given 5 as an input', () => {
      assert.strictEqual(fib.fibonacci(17), 2584)
   });
   it('should return 377 when given 13 as an input', () => {
      assert.strictEqual(fib.fibonacci(13), 377)
   });
 });