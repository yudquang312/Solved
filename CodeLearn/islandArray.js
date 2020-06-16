// tkmodthang@gmail.com Trung bình 150 Điểm
// Giới hạn ký tự: 3000
// Hàm Rev(x) được xác định bằng cách đảo ngược thứ tự các chữ số trong x.

// Ví dụ Rev(12) = 21, Rev(50) = 5.

// Cho dãy số nguyên được xác định như sau:

// a[1] = 1.
// a[n]= Rev(a[n-1]) + 2.
// Cho số nguyên dương n, hãy xác định giá trị của a[n].

// Ví dụ:

// Với n = 3, thì islandArray(n) = 5
// Giải thích:
// a[1] = 1.
// a[2] = Rev(a[1]) + 2 = 1 + 2 = 3.
// a[3] = Rev(a[2]) + 2 = 3 + 2 = 5; 
// với n = 8, thì islandArray(n) = 33
// [Đầu vào/ Đầu ra]

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] integer: n
// 1 ≤ n ≤ 1018
// [Đầu ra] integer:
// In ra số thứ n tìm được

function islandArray(n) {
    if (n == 1) return 1;
    if (n % 81 == 1) return 10;
    if (n % 81 == 0) n = 81;
    else n = n % 81;
    let dp = [];
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = rev(dp[i - 1]) + 2;
    }
    return dp[n];
}
function rev(num) {
    let res = 0;
    while (num > 0) {
        res = res * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return res;
}