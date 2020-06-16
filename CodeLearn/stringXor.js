// kien_the_sun Đơn giản 100 Điểm
// Giới hạn ký tự: 3000
// Given two strings consisting of digits 0 and 1 only, find the XOR of the two strings.

// Example

// For s = "101" and t = "001", the output should be stringXor(s,t) = "100".

// Input/Output

// [execution time limit] 1 seconds 
// [input] String s,  t
// 1 ≤ |s| ≤ 10^5.
// [output] string
//      The XOR of the two strings.

function stringXor(s, t) {
    if (s.length < t.length) {
        [s, t] = [t, s];
    }
    let res = "";
    for (let i = 0; i < t.length; i++) {
        res += +s[i] ^ +t[i];
    }
    return res + s.slice(t.length);
}