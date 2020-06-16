// HaiZuka Đơn giản 120 Điểm
// Giới hạn ký tự: 3000
// Hải đang có một số tự nhiên n, Hải nhận thấy rằng nếu mình biến đổi một chữ số trong n thành một chữ số khác (cũng là một chữ số của n) thì có thể Hải sẽ có được số lớn hơn. Biết rằng chỉ được biến đổi một lần duy nhất, hãy đưa ra số lớn nhất mà Hải có được từ cách biến đổi đó.

// Ví dụ:

// Với n = 1234 thì convertNumberMax(n) = 4124.
// Giải thích: Ta số biến đổi chữ số 1 thành chữ số 4 ở trong n.
// Với n = 5321 thì convertNumberMax(n) = 5521.
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] Long long: n.
// 0 ≤ n ≤ 1015.
// [Đầu ra] Long long.
// Số lớn nhất mà Hải có thể biến đổi được sau một lần biến đổi theo như đề bài.

function convertNumberMax(n) {
    let max = 0;
    let arr = [];
    while (n > 0) {
        arr.push(n % 10);
        max = Math.max(max, n % 10);
        n = Math.floor(n / 10);
    }
    let newNum = 0;
    arr.reverse();
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < max && flag) {
            arr[i] = max;
            flag = false;
        }
        newNum = newNum * 10 + arr[i];
    }
    return newNum;
}

// 15/15