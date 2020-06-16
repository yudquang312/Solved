// HaiZuka Đơn giản 100 Điểm
// Giới hạn ký tự: 3000
// Cho một dãy số nguyên a, gọi max chính là giá trị lớn nhất trong dãy đó, nhiệm vụ của bạn là tìm ra giá trị lớn nhất chưa xuất hiện trong dãy a và giá trị đó phải nhỏ hơn max.

// Ví dụ:

// Với a = [1, 2, 4] thì maxNumberArray(a) = 3.
// 3 chính là giá trị lớn nhất chưa xuất hiện trong dãy a và nhỏ hơn max = 4.
// Với  a = [1, 2, 2, 4, 6] thì maxNumberArray(a) = 5.
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] Array: Integer a.
// 1 ≤ a.size() ≤ 105.
// |a[i]| ≤ 109.

// [Đầu ra] Integer.
// Số nguyên lớn nhất chưa xuất hiện trong dãy a, và nhỏ hơn giá trị lớn nhất trong dãy.

function maxNumberArray(a) {
    a.sort((a, b) => b - a);
    for (i = 0; i < a.length - 1; i++) {
        if (a[i] - a[i + 1] > 1) return a[i] - 1;
    }
    return a[a.length - 1] - 1;
}