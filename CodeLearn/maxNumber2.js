// HaiZuka Trung bình 200 Điểm
// Giới hạn ký tự: 3000
// Hải có hai chuỗi biểu diễn hai số nguyên dương a và b, Hải muốn tạo ra số c bằng cách ghép các chữ số của a và của b. 
// sao cho các chữ số trong a và b xuất hiện trong c theo thứ tự như lúc đầu. 
// Hãy đưa ra số lớn nhất có thể ghép được theo yêu cầu trên.

// Ví dụ:

// Với a = "8642" và b = "531" thì maxNumber2(a, b) = "8654321".
// Giải thích:

// Với a = "534" và b = "644" thì maxNumber2(a, b) = "654434".
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] String: a, b.
// 1 ≤ a.length, b.length ≤ 105.
// [Đầu ra] String.
// Chuỗi biểu diễn số lớn nhất có thể ghép được theo yêu cầu của đề bài.

// 7/8 public test case

function maxNumber2(a, b) {
    let len = a.length + b.length;
    let res = "";
    let i = 0; j = 0;
    while (res.length < len) {
        if (i < a.length && j < b.length) {
            if (a[i] > b[j]) {
                res += a[i++];
            } else if (a[i] < b[j]) {
                res += b[j++];
            } else {
                let k = 1;
                let check = false;
                for (; a[i + k] != undefined && b[j + k] != undefined; k++) {
                    if (a[i + k] > b[j + k]) {
                        res += a[i++];
                        check = true;
                        break;
                    } else if (a[i + k] < b[j + k]) {
                        res += b[j++];
                        check = true;
                        break;
                    }
                }
                if (!check) {
                    if (a[k]) {
                        res += a[i++];
                    } else {
                        res += b[j++];
                    }
                }
            }
        } else {
            if (i < a.length) {
                res += a[i++];
            } else {
                res += b[j++];
            }
        }
    }
    return res;
}