// minhtri5302 Đơn giản 100 Điểm
// Giới hạn ký tự: 3000
// Số đối xứng là số có thể viết từ trái sang phải các chữ số của nó ta vẫn được chính nó. Từ một số có hai chữ số ta có thể nhận được một số đối xứng theo cách sau: lấy số ban đầu cộng với số ánh xạ gương của nó(tức là số nhận được bằng cách đọc các chữ số từ phải sang trái). Nếu chưa phải là số đối xứng, số đó lại được cộng với ánh xạ gương của nó và tiếp tục như vậy cho đến khi nhận được số đối xứng.

// Ví dụ

//  Từ số 48 ta có 48 + 84 = 132, 132 + 231 = 363. Như vậy  symmetricnumber(48) = 363
// Viết chương trình nhập vào số nguyên dương n (11 ≤ n ≤ 99) và in ra số đối xứng nhận được theo qui tắc trên.

// Đầu vào/đầu ra:

// [Giới hạn thời gian chạy] 0.5 giây với C++, 3 giây với Java và C#, 4 giây với Python, GO và Js.
// [Đầu vào] Integer n
// Một dòng duy nhất chứa số nguyên dương  n (11≤n≤99)
// [Đầu ra] Integer
// Kết quả tìm được

function symmetricNumber(n) {
    do {
        n += reverse(n);
    } while (!isPalindrome(n));
    return n;
}

function isPalindrome(n) {
    if (n < 10) return true;
    let rev = 0;
    let temp = n;
    while (temp > 0) {
        rev = rev * 10 + temp % 10;
        temp = Math.floor(temp / 10);
    }
    return rev == n;
}
function reverse(n) {
    if (n < 10) return n;
    let rev = 0;
    while (n > 0) {
        rev = rev * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return rev;
}