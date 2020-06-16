/*
Giới hạn ký tự: 3000
1 số được coi là đặc biệt nếu như số đó có thể phần tích thành tổng các các lũy thừa cơ số n riêng biệt,

Ví dụ: 10 là số đặc biệt cơ số 3 vì 10 = 3^2 + 3^0.

DAN đang muốn tính tổng các số đặc biệt cơ số n mà bé hơn n^(k-1). Hãy giúp DAN, do tổng có thể rất lớn nên bạn hãy trả về phần dư của 10^9 + 7.

Ví dụ:

Với n = 2, k = 4 thì sumSpecialNumber = 28.

Ta có các số đặc biệt đó là: 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. 

Đầu vào/Đầu ra:

[Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

[Đầu vào] Integer n, k
2 <= n, k <= 10^5

[Đầu ra] Integer
*/

const modValue = 1000000007;

function sumSpecialNumber(n, k) {
    return sumOfGeometricProgression(k - 1, n) * countWay(k - 1);
}
function countWay(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        count = (count % modValue + (factorial(n - 1) / factorial(i - 1) / factorial(n - i)) % modValue) % modValue;
    }
    return count;
}

function sumOfGeometricProgression(n, q) {
    //num start = 1
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum = (sum % modValue + pow(q, i) % modValue) % modValue;
    }
    return sum;
}

function pow(n, k) {
    let result = 1;
    for (let i = 1; i <= k; i++) {
        result = (result % modValue * n % modValue) % modValue;
    }
    return result;
}
function factorial(n) {
    if (n < 2)
        return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = (result % modValue * i % modValue) % modValue;
    }
    return result;
}
