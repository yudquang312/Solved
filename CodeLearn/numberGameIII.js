// SauLV Đơn giản 100 Điểm
// Giới hạn ký tự: 3000
// You're given an array S of positive integers.

// Return number x from S, such that each number of S is a multiple of x, or -1 if such x doesn't exist.

// Examples:

// For s=[3,6,3,15,9] the output should be NumberGameIII(s)=3.
// Each number of S is a multiple of 3, and 3 belongs to S, so the answer is 3.

// For s=[4,7] the output should be NumberGameIII(s)=-1. 
// 7 is not a multiple of 4. 4 is not a multiple of 7. So the answer is -1.

// Input/Output:

// [execution time limit] 0.5 seconds 

// [input] array.integer S

// An array of positive integers.

// [output] integer

// x if such x exists, -1 otherwise.

function numberGameIII(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % arr[0] != 0) {
            return -1;
        }
    }
    return arr[0];
}