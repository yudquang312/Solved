// phailamsaonana@gmail.com Đơn giản 100 Điểm
// Giới hạn ký tự: 3000
// Máy tính điện tử hiện nay sử dụng hệ cơ số nhị phân ( bao gồm số 0, 1 ) làm ngôn ngữ máy. Nhưng do chỉ với 2 số 0 và 1 nên muốn biểu diễn 1 số lớn thì phải viết ra rất nhiều số 0 và 1. Chính vì thế trong máy tính điện tử thường sử dụng thêm 1 số hệ cơ số nữa để biểu diễn, trong đó có hệ cơ số 16 ( bao gồm từ 0, 1, 2, ... , A, B, C, D, E, F ). Cho 1 dãy nhị phân, hãy chuyển chúng sang dạng viết gọn bởi hệ hexa.

// Ví dụ:

// Với s = "1" . Thì radix_Hexa ( s ) = "1".
// Với s = "1101" . Thì radix_Hexa ( s ) = "D". 
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] String s     
// 0 ≤ s.length ≤ 106
// 0 ≤ s[i] ≤ 1

// [Đầu ra] String
// Trả về chuỗi đã chuyển sang hệ 16.

function radixHexa(str) {
    if (str.length % 4 != 0) {
        str = '0'.repeat(4 - str.length % 4) + str;
    }
    let ans = '';
    for (let i = 0; i < str.length; i += 4) {
        ans += biToHex(str.slice(i, i + 4));
    }
    return ans;
}
function biToHex(str) {
    const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let value = +str[0] * 8 + +str[1] * 4 + +str[2] * 2 + +str[3];
    return hex[value];
}