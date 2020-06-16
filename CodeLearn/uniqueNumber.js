// kien_the_sun Đơn giản 100 Điểm
// Giới hạn ký tự: 3000
// Given an array of integers in which every numbers appears twice except for one, your taks is to find that unique element.

// Expected : O(n) time, O(1) space

// Example:

// For arr = [19, 17, 19, 68, 68], the output should be uniqueNumber(arr) = 17.
// Input/Output

// [execution time limit] 1 seconds

// [input] array.integer nums

// Guaranteed constraints:
// 1 ≤ nums.length < 104,
// -109 ≤ nums[i] ≤ 109.

// [output] integer

function uniqueNumber(arr) {
    res = 0;
    for (let num of arr) {
        res ^= num;
    }
    return res;
}
// 1, A XOR 0 = A
// 2, A XOR A = 0
// 3, (A XOR B) XOR C = A XOR (B XOR C)
// 4, (B XOR A) XOR A = B XOR 0 = B