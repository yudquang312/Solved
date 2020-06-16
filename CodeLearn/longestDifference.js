// Gerpan Trung bình 150 Điểm
// Giới hạn ký tự: 3000
// Số nhị phân là những số chỉ gồm 2 loại ký tự là 0 và 1. Với mỗi số ở hệ thập phân n đều có thể chuyển sang số ở hệ nhị phân tương ứng. 

// Nhật và Hải đang tranh luận về số nhị phân, Nhật thích số 1, còn Hải thì số 0. Hai bạn cần một trọng tài để tính ra hiệu số giữa chuỗi số 1 dài nhất và chuỗi số 0 dài nhất. Trọng tài sẽ đưa ra 1 số nguyên n bất kì, và bạn hãy giúp trọng tài tính hiệu số đó!

// Ví dụ: 

// Với n = 4 thì longestDifference(n) = 1.
// Giải thích: Do 4 khi chuyển sang hệ nhị phân là 100. Chuỗi 1 dài nhất là 1, chuỗi 0 dài nhất là 2. Giá trị sẽ là |1 - 2| = 1.
// Với n = 3 thì longestDifference(n) = 7.
// Đầu vào/ Đầu ra

// [Thời gian chạy] 0.1s với C++, 0.6s với Java và C#, 0.8s với Python, Go và JavaScript.
// [Đầu vào] Integer n
// 0 ≤ n ≤ 109.
// [Đầu ra]   Integer.

// Hiệu số của chuỗi 1 dài nhất và 0 dài nhất.

function longestDifference(n) {
    if (n < 2) return 1;
    let max0 = 0;
    let max1 = 0;
    let count0 = 0;
    let count1 = 0;
    while (n > 0) {
        if (n & 1) {
            count0 = 0;
            max1 = Math.max(max1, ++count1);
        } else {
            count1 = 0;
            max0 = Math.max(max0, ++count0);
        }
        n >>= 1;
    }
    return Math.abs(max0 - max1);
}

function longestDifference(n) {
    let s = n.toString(2);
    let max0 = 0;
    let max1 = 0;
    for (let i = 0, count0 = 0, count1 = 0; i < s.length; i++) {
        if (s[i] == '0') {
            count0++;
            count1 = 0;
            max0 = Math.max(max0, count0);
        } else {
            count1++;
            count0 = 0;
            max1 = Math.max(max1, count1);
        }
    }
    return Math.abs(max0 - max1);
}