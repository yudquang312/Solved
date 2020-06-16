// HaiZuka Trung bình 150 Điểm
// Giới hạn ký tự: 3000
// Trong một trò chơi, Hải đã sắp xếp m*n món quá vào m hàng và n cột, giá trị của món quà ở vị trí (i,j) là a[i][j].

// Người chơi tại mỗi ô (i,j) chỉ có thể di chuyển đến ô(i-1,j+1) hoăc ô(i+1,j+1), người chơi có thể xuất phát từ một ô bất kỳ ở cột 0 và kết thúc ở cột n-1. Hãy đưa ra tổng giá trị lớn mà người chơi có thể nhận được trong trò chơi đó.

// Ví dụ:

// Với a = [[10,1,2,5],[4,5,1,3],[2,8,4,9]]
// thì maxSumMoney(a)=22.
// Giải thích: cách di chuyển để có tổng lớn nhất là:

// Với a = [[2,4,10],[7,3,2],[3,5,10]] thì maxSumMoney(a)=16.
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] Matrix: Integer: a.
// 2 ≤ a.size() ≤ 200.
// 1 ≤ a[i].size() ≤ 200.
// 1 ≤ a[i][j] ≤ 105.

// [Đầu ra] Integer.
// Tổng lớn nhất người chơi có thể nhận được.

function maxSumMoney(arr) {
    let ans = 0;
    // console.log(arr);
    for (let j = 1; j < arr[0].length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (i == 0) {
                arr[i][j] += arr[i + 1][j - 1];
            } else if (i == arr.length - 1) {
                arr[i][j] += arr[i - 1][j - 1];
            } else {
                arr[i][j] += Math.max(arr[i + 1][j - 1], arr[i - 1][j - 1]);
            }
        }
    }
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        ans = Math.max(ans, arr[i][arr[0].length - 1]);
    }
    return ans;
}