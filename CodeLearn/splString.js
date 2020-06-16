// CWJ_D.A.N_3002 Trung bình 200 Điểm
// Giới hạn ký tự: 3000
// DAN được thầy cho một chuỗi str chỉ chứa các ký tự số,
// nhiệm vụ của DAN là đặt các dấu '-' vào giữa các chữ số để chia chuỗi thành một dãy với các số tăng dần.
// Hãy giúp DAN đếm xem có bao nhiêu cách đặt dấu '-' như vậy.

// Ví dụ:

// Với str = "21023" thì splString(str) = 3.

// Sẽ có 3 cách đặt dấu là:

// 2-10-23
// 2-1023
// 21023
// Đầu vào/Đầu ra:

// [Thời gian chạy] 1s với C++, 6s với Java và C#, 8s với Python, Go và JavaScript.

// [Đầu vào] String str
// 1 <= n.length <= 100
// n[i] chỉ gồm "0123456789"

// [Đầu ra] Integer
/// WTF ăn may lol
let count = 0;

function splString(str) {
    backtracking("", "", str);
    return count;
}

function backtracking(before, curr, str) {
    curr += str[0];
    if (curr != "0") {
        if (str.length == 1) {
            if (compare(curr, before)) {
                count++;
            }
        } else {
            if (compare(curr, before)) {
                backtracking(curr, "", str.slice(1));
            }
            backtracking(before, curr, str.slice(1));
        }
    }
}

// function splString(str) {
//     backtracking("", "", str.split(""), "");
//     return count;
// }

// function backtracking(before, curr, array, str) {

//     let temp = array.shift();
//     str += temp;
//     curr += temp;
//     if (curr != "0") {
//         if (array.length == 0) {
//             if (compare(curr, before)) {
//                 count++;
//                 console.log(str);
//             }
//         } else {
//             if (compare(curr, before)) {
//                 let tempArr = [...array];
//                 str += "-";
//                 backtracking(curr, "", tempArr, str);
//             }
//             let tempArr = [...array];
//             backtracking(before, curr, tempArr, str);
//         }
//     }

// }

function compare(num1, num2) {
    if (num1.length != num2.length) {
        return num1.length > num2.length;
    }
    for (let i = 0; i < num1.length; i++) {
        if (num1.charAt(i) != num2.charAt(i)) {
            if (num1.charAt(i) > num2.charAt(i)) {
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
}

