// D.A.N_3002 Trung bình 200 Điểm
// Giới hạn ký tự: 3000
// DAN đang đi khám phá một kim tự tháp bí ẩn. Trên tường có một bước vẽ mật mã như sau:

// 1
// 232
// 34543
// 4567654
// 567898765
// 67890109876
// 7890123210987
// 890123454321098
// 90123456765432109
// 0123456789876543210
// Biết rằng đây lần lượt là mật mã của 10 cánh cổng đầu tiên. DAN đang cần phải mở cánh của thứ n, bạn hãy dựa vào 10 mật mã đầu tiên và đoán ra quy luật của chúng, từ đó trả về mật mã của cổng thứ n.

// Ví dụ:

// Với n = 1 thì treeLogic(n) = "1"
// Với n = 3 thì treeLogic(n) = "34543"
// Với n = 11 thì treeLogic(n) = "123456789010987654321"
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] Integer n
// 1 ≤ n ≤ 10^4.

// [Đầu ra] String

function treeLogic(n) {
    let left = '';
    let right = '';
    for (let i = n; i < n * 2 - 1; i++) {
        left += i % 10;
        right = i % 10 + right;
    }
    return left + (n * 2 - 1) % 10 + right;
}

function treeLogic(n) {
    let ans = '';
    for (let i = n; i < n * 2; i++) {
        ans += i % 10;
    }
    return ans + ans.slice(0, ans.length - 1).split('').reverse().join('');
}
