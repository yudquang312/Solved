// minhtri5302 Đơn giản 100 Điểm
// Giới hạn ký tự: 3000
// Tháng 6 năm 1973 Neil J.A. công bố công trình nghiên cứu về độ lặp bội của các số. Với số nguyên N cho trước, nếu nó có nhiều hơn 1 chữ số, thì người ta thay nó bằng tích các chữ số (trong dạng biểu diễn thập phân). Quả trình thay thế trên được lặp lại cho đến khi nhận được số có một chữ số.

// Ví dụ:

//  Với N = 679 ta có: 679 -> 378 -> 168 -> 48 -> 32 -> 6. Số 679 có gốc bội là 5, vì sau 5 lần biến đổi ta được số có 1 chữ số. Vậy rootmultiple(679) = 5.
// Viết chương trình xác định xem với số nguyên N cho trước. Hỏi xem nó có gốc bội là bao nhiêu?

// Đầu vào/đầu ra:

// [Giới hạn thời gian chạy] 0.5 giây với C++, 3 giây với Java và C#, 4 giây với Python, GO và Js.
// [Đầu vào] Integer N
// Số nguyên dương  N (1 ≤ N ≤ 109)
// [Đầu ra] Integer
// Số gốc bội tìm được

function rootmultiple(n) {
    if (n < 10) return 0;
    let count = 0;
    while (n > 9) {
        count++;
        let temp = 1;
        while (n > 0) {
            temp = temp * (n % 10);
            n = Math.floor(n / 10);
        }
        n = temp;
    }
    return count;
}