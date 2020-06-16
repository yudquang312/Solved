// HaiZuka Trung bình 150 Điểm
// Giới hạn ký tự: 3000
// Cho 3 số nguyên dương x, y, s, hãy tìm và in ra 2 số m,n sao cho.

// m/n = x/y.
// m+n ≤ s.
// m+n lớn nhất.
// Cho mảng a chứa lần lượt ba số x, y, s. In kết quả ra 1 mảng chứa m,n.

// Ví dụ:

// Với a=[1,2,10], thì maxFractions(a) = [3,6].
// Giải thích có vô số phân số = 1/2  như 2/4, 3/6, 4/8,... nhưng 3/6 là phân số thỏa mãn
// 3/6 = 1/2.
// 3+6 thỏa mãn lớn nhất ≤ 10.
// Với a = [1,1,10], thì maxFractions(a) = [5,5].
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript

// [Đầu vào] Arrays: Integer a
// a.size = 3.
// 1 ≤ a[i] ≤ 109.
// [Đầu ra] Arrays: Integer
// Chứa lần lượt 2 số m,n.

function maxFractions([x, y, s]) {
    x = x / gcd(x, y);
    y = y / gcd(x, y);
    if (x + y > s) return [-x, -y];
    let part = Math.floor(s / (x + y));
    return [part * x, part * y];
}
function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}