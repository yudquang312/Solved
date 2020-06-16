
// 9
// CWJ_D.A.N_3002 Trung bình 150 Điểm
// Giới hạn ký tự: 3000
// DAN đi vào một cửa hàng tiện lợi, ở đây có quy định là bạn sẽ phải trả đúng giá tiền (không được trả nhiều hơn hoặc ít hơn). Số tiền DAN có được thể hiện trong mảng arr. Do muốn chơi trội, DAN muốn tính xem món đồ ít tiền nhất mà DAN không thể trả là bao nhiêu, hãy giúp DAN.

// Ví dụ:

// Với arr = [2, 4, 1, 9, 100] thì minNotPay(arr) = 8.

// Ta có 

// 1 = 1.
// 2 = 2.
// 3 = 1 + 2.
// 4 = 4
// 5 = 1 + 4
// 6 = 2 + 4
// 7 = 1 + 2 + 4
// Không có tổng bằng 8.
// ==> DAN không thể trả món đồ có số tiền = 8 đồng.

// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] Array.Integer arr
// 1 <= arr.length <= 1000
// 1 <= arr[i] <= 100

// [Đầu ra] Integer

function minNotPay(arr) {
    arr.sort((a, b) => a - b);
    if (arr[0] > 1) return 1;
    let ans = 0;
    while (arr.length > 0) {
        if (arr[0] - ans > 1) return ans + 1;
        else {
            ans += arr[0];
            arr.shift();
        }
    }
    return ans + 1;
}