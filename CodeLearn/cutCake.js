// HaiZuka Đơn giản 120 Điểm
// Giới hạn ký tự: 3000
// Hải có một mẫu bánh mỳ hình hộp chữ nhật có kích thước chiều dài, chiều rộng, chiều cao lần lượt là a, b và c. Hải muốn chia cái bánh mỳ đó thành các mẩu bánh mỳ hình lập phương nhỏ có kích thước bằng nhau, Hải rất thích sự hoàn hảo, anh ấy không muốn để dư phần bánh mì nào. Hãy đưa ra kích thước tối đa của các mẫu bánh mỳ hình lập phương nhỏ.

// Ví dụ:

// Với a = 2, b = 4 và c = 2 thì cutCake(a, b, c) = 2.
// Giải thích: Ta có thể chia mẩu bánh mỳ thành các mẫu bánh mỳ hình lập phương kích thước là 2.


// Với a = 1, b = 2 và c = 3 thì cutCake(a, b, c) = 1.
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] Long a, b, c.
// 1 ≤ a, b, c ≤ 1015.

// [Đầu ra] Long.
// Kích thước của mẫu bánh mỳ hình lập phương.

function cutCake(a, b, c) {
    return ucln(a, ucln(b, c));

}
function ucln(a, b) {
    let tmp;
    while (b != 0) {
        tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}

// 15/15