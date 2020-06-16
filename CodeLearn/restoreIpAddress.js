// CoderToDev Đơn giản 120 Điểm
// Giới hạn ký tự: 3000
// Cho một chuỗi s chỉ chứa các chữ số, hãy khôi phục chuỗi đó thành tất cả các địa chỉ ip hợp lệ

// Một dãy ip được gọi là hợp lệ nếu dãy chứa 4 số nguyên và mỗi số có giá trị trong phạm vi [0-255] vầ phân cách nhau bởi dấu "."

// Ví dụ:

// Với s = "25525511135" thì kết quả restore_ip_address(s) = ["255.255.11.135", "255.255.111.35"]
// Với s = "123456789" thì kết quả restore_ip_address(s) = ["123.45.67.89"]
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] string s
// 0 ≤ s.length ≤ 12
// 0 ≤ words[i] ≤ 9.


// [Đầu ra] Array of string.
// Trả về tất cả các địa chỉ ip hợp lệ

function restoreIpAddress(s) {
    if (s.length < 4) return [];
    let ans = [];
    for (let i = 0, p1 = ''; i < 3; i++) {
        p1 += s[i];
        for (let j = i + 1, p2 = ''; j < s.length && j < i + 4; j++) {
            p2 += s[j];
            for (let k = j + 1, p3 = ''; k < s.length && k < j + 4; k++) {
                p3 += s[k];
                for (let m = k + 1, p4 = ''; m < s.length && m < k + 4; m++) {
                    p4 += s[m];
                    if ((p1 + p2 + p3 + p4).length == s.length && +p1 >= 0 && + p1 < 256 && +p2 >= 0 && + p2 < 256 && +p3 >= 0 && + p3 < 256 && +p4 >= 0 && + p4 < 256 && p1.length == (+p1 + '').length && p2.length == (+p2 + '').length && p3.length == (+p3 + '').length && p4.length == (+p4 + '').length) {
                        ans.push(p1 + '.' + p2 + '.' + p3 + '.' + p4);
                    }
                }
            }
        }
    }
    return ans;
}