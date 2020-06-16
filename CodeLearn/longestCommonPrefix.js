// liem_do Đơn giản 100 Điểm
// Giới hạn ký tự: 3000 
// Cho một mảng các xâu ký tự. Nhiệm vụ của bạn là tìm ra "tiền tố" chung dài nhất trong số các xâu đó.

// Nếu không có tiền tố chung, trả về một xâu rỗng "".

// Ví dụ

// Với array = ["fpt", "fpt software", "fpt japan"] , đầu ra là longestCommonPrefix(array) = "fpt"  
// Với array = ["fsoft", "fptsoftware", "codelearn"], đầu ra là longestCommonPrefix(array) = "" vì không có tiền tố chung nào trong các xâu được nhập.
// Input/Output

// [giới hạn thời gian chạy] 1.5 seconds

// [đầu vào] array of strings a
// Điều kiện tiền đề:
// 0 ≤ a.length <= 10000
// 0 ≤ a[i].length <= 30
// [đầu ra] string
// tiền tố chung dài nhất trong các xâu

function longestCommonPrefix(strs) {
    if (!strs.length) return '';
    for (let i = 0; i < strs[0].length; i++) {
        for (let str of strs) {
            if (str[i] != strs[0][i]) {
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0];
}

function longestCommonPrefix(strs) {
    if (strs === undefined || strs.length === 0) { return ''; }
    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
}
