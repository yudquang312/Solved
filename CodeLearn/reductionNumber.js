// HaiZuka Đơn giản 150 Điểm
// Giới hạn ký tự: 3000
// Hải định nghĩa một số n là số suy giảm khi các chữ số trong n giảm dần.

// Ví dụ 4, 93, 321 là các số suy giảm, còn 111, 322,... không là các số suy giảm.

// Cho một trước một số nguyên dương n, hãy tìm và đưa ra số suy giảm nhỏ nhất lớn hơn n. Nếu không có số nào thỏa mãn yêu cầu thì trả về -1.

// Ví dụ:

// Với n = 123 thì reductionNumber(n) = 210.
// Với n = 5 thì reductionNumber(n) = 6.
// Với n = 983 thì reductionNumber(n) = 984.
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] Integer n.
// 1 ≤ n ≤ 1015.

// [Đầu ra] Integer.
// Số suy giảm nhỏ nhất lớn hơn n.

function reductionNumber(n) {
    if (n >= 9876543210) return -1;
    if (n < 10) return n + 1;
    let arr = (n + '').split('').map(e => +e);
    if (arr[0] < arr.length - 1) {
        let ans = '';
        for (let i = arr.length - 1; i >= 0; i--) {
            ans += i;
        }
        return +ans;
    }
    arr[arr.length - 1]++;
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] <= arr[i + 1]) {
            arr[i]++;
            for (let k = arr.length - 1, j = 0; k > i; k--, j++) {
                arr[k] = j;
            }
        }
    }
    if (arr[0] < 10)
        return +arr.join('');
    let ans = '';
    for (let i = 0; i <= arr.length; i++) {
        ans += arr.length - i;
    }
    return +ans;
}