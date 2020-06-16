// vietcv Trung bình 150 Điểm
// Giới hạn ký tự: 3000
// Việt với con gái chơi trò đố vui

// Việt viết ra một xâu kí tự gồm các chữ cái in thường (độ dài xâu có thể rất dài, nhưng xâu chỉ có tối đa 10 kí tự khác nhau). Con gái Việt có nhiệm vụ thay thế mỗi chữ cái bằng 1 và chỉ 1 chữ số, sao cho sau khi thay thế toàn bộ các chữ cái thì Việt thu đc 1 số dương nhỏ nhất

// Chú ý với số có nhiều hơn 1 chữ số, thì kí tự đầu tiên ko thể là chữ số 0 (ví dụ 09, 0011 là ko hợp lệ)

// Ví dụ:

// Với str="ab", thì kết quả fillNumber(str)="10"
// Với str="abc", thì kết quả fillNumber(str)="102"
// Input/output:

// Thời gian chạy: 0.5s
// Input: string str
// xâu kí tự chứa các chữ cái in thường, tối đa có 10 kí tự khác nhau
// 1 <= str.length() <= 100
// Output: string
// số nhỏ nhất khi đã đc thay thế bởi các chữ số

function fillNumber(str) {
    if (str.length == 1) return '0';
    let arr = [1, 0, 2, 3, 4, 5, 6, 7, 8, 9];
    let obj = {};
    let count = 0;
    let ans = '';
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] == undefined) {
            obj[str[i]] = arr[count++];
        }
        ans += obj[str[i]];
    }
    return ans;
}