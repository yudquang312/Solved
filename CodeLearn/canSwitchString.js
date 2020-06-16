// CWJ_D.A.N_3002 Đơn giản 130 Điểm
// Giới hạn ký tự: 3000
// Mỗi một lượt xử lý, bạn có thể chọn 1 trong 2 thao tác sau:

// Chọn 1 vị trí và thay đổi ký tự ở vị trí đó thành 1 ký tự khác.
// Hoán đổi vị trí của hai ký tự cho nhau.
// Bạn hãy tính xem cần ít nhất bao nhiêu thao tác để biến đổi chuỗi s1 thành s2. Nếu không thể biến đổi, trả về -1.

// Ví dụ:

// Với s1 = "abcd" và s2 = "badd" thì canSwitchString(s1, s2) = 2
// Lần một, ta hoán đổi vị trí ký tự 'a' và 'b'.
// Lần 2, ta biến ký tự 'c' thành 'd'.

// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] String s1, s2
// 1 <= s1.length, s2.length <= 10^5

// [Đầu ra] Integer.

function canSwitchString(s1, s2) {
    if (s1.length != s2.length) return -1;
    let a = '';
    let b = '';
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] != s2[i]) {
            a += s1[i];
            b += s2[i];
        }
    }
    if (a.length == 0) return 0;
    // console.log(a,b);
    let check = new Array(a.length).fill(1);
    for (let i = 0; i < a.length; i++) {
        if (check[i] == 1) {
            for (j = i; j < a.length; j++) {
                if (check[j] == 1 && a[i] == b[j] && a[j] == b[i]) {
                    check[i] = 0.5;
                    check[j] = 0.5;
                }
            }
        }
    }
    // console.log(check);
    return check.reduce((a, b) => a + b);
}