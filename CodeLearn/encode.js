// minhtri5302 Đơn giản 140 Điểm
// Giới hạn ký tự: 3000
// Các phương pháp mã hóa luôn có sức cuốn hút đặc biệt đối với Rôn. Xuất phát từ việc mọi thông tin đều được lưu trữ dưới dạng số, Rôn nghĩ rằng chỉ cần phát triển các phương pháp mã hóa số nguyên. Mới đây Rôn đề xuất một phương pháp mã hóa của riêng mình: mỗi số nguyên x được Rôn mã hóa thành số nguyên y bằng cách cộng vào x các chữ số của nó (ở hệ thập phân). Như vậy, nếu x = 12, ta sẽ có y = 12 + 1 + 2 = 15.

// Mã hóa bao giờ cũng đi đôi với việc giải mã. Biết y = 15, ta phải tìm được số ban đầu x = 12.

// Ví dụ:

// Với y = 15 thì encodefunc(y) = 12
// Đầu vào/đầu ra:

// [Giới hạn thời gian chạy] 1 giây với C++, 6 giây với Java và C#, 8 giây với Python, GO và Js.
// [Đầu vào]
// Một dòng duy nhất chứa số nguyên y (1 ≤ y ≤ 109)
// [Đầu ra] 
// Kết quả tìm được

function encodefunc(y) {
    for (i = y - 9 * (y + '').length < 0 ? 0 : y - 9 * (y + '').length; i < y; i++) {
        if (i + sumDigit(i) == y) return i;
    }
}

function sumDigit(n) {
    if (n < 10) return n;
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}