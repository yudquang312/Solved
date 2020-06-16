// namdv Đơn giản 150 Điểm
// Giới hạn ký tự: 3000 
// Cho một số nguyên dương n Bạn được quyền đổi chỗ (hoặc không) 2 chữ số bất kỳ của n chỉ 1 lần duy nhất để tạo ra một số khác.
// Nhiệm vụ của bạn là hãy đi tìm số lớn nhất có thể tạo ra được.

// Ví dụ:

// Với n = 3847 thì kết quả sẽ là 8347.
// Ta sẽ đổi chỗ số 3 cho số 8 để tạo ra được số 8347.
// Với n = 98765 thì kết quả sẽ là 98765.
// Ta có số 98765 đã là số lớn nhất rồi nên không cần phép đổi chỗ nào cả.
// Đầu vào/Đầu ra:
// [Thời gian chạy] 0.1s (C++), 0.6s (Java và C#), 0.8s (Python, Go và Javascript).
// [Đầu vào] Integer n
// Số nguyên dương n
// 0 ≤ n ≤ 10^8
// [Đầu ra] Integer
//  Số nguyên lớn nhất có thể tạo được.

function maxNumber(n) {
    if (n < 12) return n;
    let arrN = (n + '').split('').map(char => +char);
    for (let i = 0; i < arrN.length; i++) {
        let max = arrN[i];
        let index = i;
        for (let j = i + 1; j < arrN.length; j++) {
            if (arrN[j] >= max) {
                max = arrN[j];
                index = j;
            }
        }
        if (max > arrN[i]) {
            [arrN[i], arrN[index]] = [arrN[index], arrN[i]]
            break;
        }
    }
    return +arrN.join('');
}