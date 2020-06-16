// Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

// Example

// For product = 12, the output should be digitsProduct(product) = 26;
// For product = 19, the output should be digitsProduct(product) = -1. 

// Input/Output

// [execution time limit] 0.5 seconds (cpp)
// [input] integer product 
// Guaranteed constraints:
// 0 ≤ product ≤ 600.
// [output] integer

function digitsProduct(product) {
    if (product == 0) return 10;
    if (product < 10) return product;
    let arr = [2, 3, 5, 7];
    let arrAns = [];
    for (let num of arr) {
        while (product % num == 0) {
            arrAns.push(num);
            product /= num;
        }
    }
    if (product != 1) return -1;
    let checks = new Array(arrAns.length).fill(true);
    for (let i = arrAns.length - 1; i >= 0; i--) {
        if (arrAns[i] * arrAns[i - 1] < 10) {
            checks[i] = false;
            arrAns[i - 1] = arrAns[i] * arrAns[i - 1];
        }
    }
    return +arrAns.filter((num, index) => checks[index]).sort((a, b) => a - b).join('');
}