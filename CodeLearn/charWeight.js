// SauLV Trung bình 150 Điểm
// Giới hạn ký tự: 3000
// Given a string s, your task is to calculate the weight of each character in it, where weight is the number of times a character appears in the string (case insensitive).

// The answer should be returned as a string in the format char1{weight1}char2{weight2}..., with the characters sorted as follows:

// The characters with larger weights should come first;
// In the case of a tie, the characters should be sorted by their char code values in ascending order.
// Example:

// For s = "code", the output should be charWeight(s)= "c{1}d{1}e{1}o{1}"

// Each character appears in s exactly once, so the characters are sorted by their char codes.

// For s = "Google", the output should be charWeight(s)= "g{2}o{2}e{1}l{1}"

// The letters 'g' and 'o' both appear twice, so they come first, followed by the other letters.

// Input/Output:

// [execution time limit] 0.5 seconds 

// [input] string s

// A string of English letters and digits.
// 0 ≤ s.length ≤ 106.

// [output] string

// The weight of each character in the given string, formatted as described above.

function charWeight(s) {
    s = s.toLowerCase();
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]][1]++;
        } else {
            obj[s[i]] = [s[i], 1];
        }
    }
    let arr = Array.from(Object.values(obj)).sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt()).sort((a, b) => b[1] - a[1]);
    let ans = '';
    for (let i = 0; i < arr.length; i++) {
        ans += arr[i][0] + '{' + arr[i][1] + '}';
    }
    return ans;
}