// HaiZuka Trung bình 150 Điểm
// Giới hạn ký tự: 3000
// Hải đang học một loại hàm số như sau:

// f(n) sẽ có giá trị là:

// f(n) = n, nếu n không phải là số nguyên tố.
// f(n) = ( f(1) + f(2) +...+ f(n-1) ) % n.
// Cho một số nguyên dương n. Hãy tìm và đưa ra giá trị của f(n).

// Ví dụ:

// Với n = 4, thì constan(n) = 4.
// Giải thích:
// 4 không là số nguyên tố nên f(4) = 4.
// Với n = 5, thì constan(n) = 3.
// Giải thích:
// f(5) =( f(1) + f(2) + f(3) + f(4))%5
// f(5) = (1 + 1 + 2 + 4)%5 = 3.
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.1s với C++, 0.6s với Java và C#, 0.8s với Python, Go và JavaScript.

// [Đầu vào] Integer n
// 1 ≤ n ≤ 105.

// [Đầu ra] Integer
// Giá trị của f(n).

function constan(n) {
    if (!isPrime(n)) return n;
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (!isPrime(i)) {
            sum += i;
        } else {
            sum += sum % i;
        }
    }
    return sum % n;
}
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}