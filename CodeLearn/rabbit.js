// HaiZuka Đơn giản 120 Điểm
// Giới hạn ký tự: 3000
// Một cánh đồng cả rốt được thể hiện dưới dạng một matrix kích thước m x n. Tại ô (i,j) có chứa a[i][j] củ cà rốt.

// Có một chú thỏ đang ở vị trí (0,0) muốn đi đến vị trí (m-1,n-1).

// Một lần chú thỏ này chỉ có thể di chuyển xuống dưới hoặc sang phải.

// Hãy đưa ra tổng số lượng cà rốt lớn nhất mà chú thỏ có thể lấy được theo cách di chuyển trên.

// Ví dụ: 

// a = [[1,2,3,4],[0,9,7,2],[5,0,10,6]] thì rabbit(a) = 35;

// Chú thỏ có rất nhiều các di chuyển từ ô (0,0) -> (m-1,n-1) nhưng theo cách đi được tô màu đỏ màu đỏ ( như hình trên ) sẽ giúp chú thỏ nhận về nhiều cà rốt nhất.
// Số cà rốt nhiều nhất mà chú thỏ sẽ nhận được nếu đi theo đường màu đỏ là: 1 + 2 + 9 + 7 + 10 + 6 = 35.
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript

// [Đầu vào] Matrix a
// 1 ≤ a.size ≤ 100.
// 1 ≤ a[i].size ≤ 100.
// 0 ≤ a[i][j] ≤ 100.
// [Đầu ra] Integer
// Số cà rốt lớn nhất mà chú thỏ nhận được.

function rabbit(a) {
    let n = a.length, m = a[0].length;
    for (let i = 1; i < n; i++) {
        a[i][0] += a[i - 1][0];
    }
    for (let i = 1; i < m; i++) {
        a[0][i] += a[0][i - 1];
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            a[i][j] += Math.max(a[i - 1][j], a[i][j - 1]);
        }
    }
    return a[n - 1][m - 1];
}