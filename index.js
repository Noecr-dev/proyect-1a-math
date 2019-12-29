module.exports = {
    /**
     * Add two numbers
     * @example
     * n1 = 6, n2 = 4 => 10
     * @param {number} n1 Number 1 of the sum
     * @param {number} n2 Number 2 of the sum
     */
    sum: function(n1, n2) {
        return n1 + n2;
    },
    /**
     * Subtract two numbers
     * @example
     * n1 = 8, n2 = 6 => 2
     * @param {number} n1 Number 1 of the subtraction
     * @param {number} n2 Number 1 of the subtraction
     */
    sub: function(n1, n2) {
        return n1 - n2;
    },
    /**
     * Multiply two numbers
     * @example
     * n1 = 4, n2 = 2 => 8
     * @param {number} n1 Number 1 of the multiplication
     * @param {number} n2 Number 1 of the multiplication
     */
    mul: function(n1, n2) {
        return n1 * n2;
    },
    /**
     * Divide two numbers
     * @example
     * n1 = 14, n2 = 3 => 4
     * @param {number} n1 Number 1 of the division
     * @param {number} n2 Number 1 of the division
     */
    div: function(n1, n2) {
        return n1 / n2;
    },
    /**
     * Get the module of the division of two numbers
     * @example
     * n1 = 14, n2 = 3 => 2
     * @param {number} n1 Number 1 of the module
     * @param {number} n2 Number 1 of the module
     */
    mod: function(n1, n2) {
        return n1 % n2;
    }
}