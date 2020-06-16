// HaiZuka Trung bình 150 Điểm
// Giới hạn ký tự: 3000
// Hải rất thích những số là bội của số nguyên dương x, Trang lại thích những số là bội của số nguyên dương y. Hải muốn biết rằng có bao nhiêu số yêu thích của Hải hoặc của Trang không vượt quá n.

// Cho mảng a =[n,x,y]. Hãy đưa ra kết quả, lưu ý rằng nếu hai người cùng yêu thích 1 số thì số đó chỉ được tính 1 lần.

// Ví dụ:

// Với a = [7,2,3] thì numberFavourite(a) = 5.
// Giải thích:
// Các số yêu thích của Hải là 0, 2, 4, 6.
// Các số yêu thích của Trang là 0, 3, 6.
// Các số yêu thích của Hải hoặc của Trang là: 0, 2, 3, 4, 6.
// Với a = [1,2,3]  thì numberFavourite(a) = 1.
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] Array: integer: a
// a.size() = 3.
// 1 ≤ a[i] ≤ 10^9.
// [Đầu ra] Integer
// Số lượng số yêu thích của Hải hoặc của Trang.

function numberFavourite([n, x, y]) {
    return Math.floor(n / x) + Math.floor(n / y) - Math.floor(n / lcm(x, y)) + 1;
}
function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}
function lcm(a, b) {
    return a * b / gcd(a, b);
}