// MinhNguyet Đơn giản 200 Điểm

// Cho mảng số nguyên, tìm tổng lớn nhất có thể có của một số k phần tử liên tiếp của nó.

// Ví dụ

// Với inputArray = [2, 3, 5, 1, 6] và k = 2, đầu ra là arrayMaxConsceedSum (inputArray, k) = 8.
// Tất cả các khoản tiền có thể có của 2 phần tử liên tiếp là:
// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Như vậy, câu trả lời là 8.
//  Đầu ra/Đầu vào

// [giới hạn thời gian chạy] 3 giây
// [đầu vào] array.integer inputArray
// Mảng số nguyên dương.
// Điều kiện tiền đề:
// 3 ≤ inputArray.length ≤ 105,
// 1 ≤ inputArray[i] ≤ 1000.
// [đầu vào] integer k
// Một số nguyên (không lớn hơn độ dài của inputArray).
// Điều kiện tiền đề:
// 1 ≤ k ≤ inputArray.length.
// [đầu ra] integer
// Tổng lớn nhất có thể.

function arrayMaxConsecutiveSum(arr, k) {
    let max = 0;
    for (let i = 0; i < k; i++) {
        max += arr[i];
    }
    for (let i = k, maxHere = max; i < arr.length; i++) {
        maxHere += arr[i] - arr[i - k];
        max = Math.max(max, maxHere);
    }
    return max;
}