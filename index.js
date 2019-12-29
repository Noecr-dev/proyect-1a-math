module.exports = {
    /**
     * @description Add two numbers
     * @example
     * n1 = 6, n2 = 4 => 10
     * @param {number} n1 Number 1 of the sum
     * @param {number} n2 Number 2 of the sum
     */
    sum: function(n1, n2) {
        return (this.isNumber([n1, n2]) ? n1 + n2 : this.errorMessage());
    },
    /**
     * @description Subtract two numbers
     * @example
     * n1 = 8, n2 = 6 => 2
     * @param {number} n1 Number 1 of the subtraction
     * @param {number} n2 Number 1 of the subtraction
     */
    sub: function(n1, n2) {
        return (this.isNumber([n1, n2]) ? n1 - n2 : this.errorMessage());
    },
    /**
     * @description Multiply two numbers
     * @example
     * n1 = 4, n2 = 2 => 8
     * @param {number} n1 Number 1 of the multiplication
     * @param {number} n2 Number 1 of the multiplication
     */
    mul: function(n1, n2) {
        return (this.isNumber([n1, n2]) ? n1 * n2 : this.errorMessage());
    },
    /**
     * @description Divide two numbers
     * @example
     * n1 = 14, n2 = 3 => 4
     * @param {number} n1 Number 1 of the division
     * @param {number} n2 Number 1 of the division
     */
    div: function(n1, n2) {
        return (this.isNumber([n1, n2]) ? n1 / n2 : this.errorMessage());
    },
    /**
     * @description Get the module of the division of two numbers
     * @example
     * n1 = 14, n2 = 3 => 2
     * @param {number} n1 Number 1 of the module
     * @param {number} n2 Number 1 of the module
     */
    mod: function(n1, n2) {
        return (this.isNumber([n1, n2]) ? n1 % n2 : this.errorMessage());
    },
    /**
     * @description This method shows in error message
     */
    errorMessage: function() {
        console.log('Values must be numberic')
    },
    /**
     * @description This method verifies that the values ​​entered will be numerical
     * @param {Array} nArr Array of values ​​to check
     */
    isNumber: function(nArr) {
        if (nArr.filter(n => typeof n !== 'number').length) {
            return false;
        }
        return true;
    }
}