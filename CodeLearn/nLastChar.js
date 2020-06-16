// CWJ_D.A.N_3002 Đơn giản 120 Điểm
// Giới hạn ký tự: 3000
// Ta định nghĩa hàm sum(a,b) như sau:

// sum(a,b) = a^0 + a^1 + ... + a^b;
// DAN muốn tìm xem n chữ số cuối cùng của hàm sum(a,b) là gì, hãy giúp DAN. Nếu như sum(a,b) không có đủ k chữ số thì hãy điền các ký tự còn thiếu ở đầu = '0'.

// Ví dụ:

// Với a = 2, b = 4, n = 1 thì nLastChar(a,b,n) = "1";
// Ta có sum(a,b) = 2^0 + 2^1 + 2^2 + 2^3 + 2^4 = 1 + 2 + 4 + 8 + 16 = 31.
// ==> 1 chữ số cuối là 1.

// Với a = 3, b = 3, n = 4 thì nLastChar(a,b,n) = "0040";
// Ta có sum(a,b) = 3^0 + 3^1 + 3^2 + 3^3 = 1 + 3 + 9 + 27 = 40;
// ==> Do sum(a,b) không có đủ 4 chữ số nên sẽ thêm 2 ký tự '0' vào đầu để đủ 4 ký tự.

// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] Integer a,b,n
// 1 <= a,b <= 10^5
// 1 <= n <= 10;

// [Đầu ra] String.

function nLastChar(a, b, n) {
    let mod = 10000000000;
    let dp = [];
    dp[0] = 1;
    let res = 1;
    for (let i = 1; i <= b; i++) {
        dp[i] = (dp[i - 1] % mod * a) % mod;
        res = (res % mod + dp[i] % mod) % mod;
    }
    res = res + '';
    if (res.length < n) {
        return '0'.repeat(n - res.length) + res;
    }
    return res.slice(res.length - n);
}
// 15/15