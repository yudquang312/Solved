// Shanghaik Đơn giản 100 Điểm
// Giới hạn ký tự: 3000
// Một tòa tháp được các kỹ sư xây dựng bởi các khối cầu xếp chồng lên nhau theo quy tắc:

// Tầng dưới cùng được xây bằng n * n khối cầu với n là số tầng của tòa tháp
// Tầng x được xây bằng (n - x + 1 )*(n - x + 1) khối cầu với x là số thứ tự của tầng đó. Tính từ đáy là tầng 1 và đỉnh là tầng n


// Hình mình họa

// Cho k là số lượng khối cầu mà các kỹ sư có. Hãy xác định xem sau khi xây dựng 1 tòa tháp hòan chỉnh theo quy tắc trên, họ còn thừa bao nhiêu khối cầu.

// Ví dụ:

// Với k = 15 thì đầu ra tower_sphere(k) = 1
// Giải thích: Với 15 khối cầu, có thể xây được 1 tòa tháp 3 tầng bằng 14 khối cầu, dư ra 1 khối. Xem hình minh họa ở trên.
// Với k = 32 thì đầu ra tower_sphere(k) = 2
// Giải thích: Với 32 khối cầu, có thể xây được 1 tòa tháp 4 tầng bằng 30 khối cầu, dư ra 2 khối. Xem hình minh họa ở trên.
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] Integer k
// Số khối cầu mà các anh kỹ sư đang có.
// 0 ≤ k ≤ 107

// [Đầu ra] Integer
// Số khối cầu dư ra khi các kỹ sư dựng được 1 tòa tháp hoàn chỉnh.

function towerSphere(k) {
    let lv = 0;
    while (lv * (lv + 1) * (2 * lv + 1) / 6 <= k) {
        lv++;
    }
    return k - --lv * (lv + 1) * (2 * lv + 1) / 6;
}