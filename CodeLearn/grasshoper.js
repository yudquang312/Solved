// CWJ_D.A.N_3002 Trung bình 150 Điểm
// Giới hạn ký tự: 3000 
// Một con châu chấu muốn nhảy từ điểm A đến điểm B. Biết A và B cách nhau a bước nhảy và mỗi lần nhảy thì châu chấu có thể nhảy 1 bước hoặc b bước. Hãy tính xem có bao nhiêu cách để châu chấu nhảy được từ A đến B. Trả về dạng String

// Ví dụ:

// Với a = 3; b = 2 thì grasshopper(a,b) = 3
// Sẽ có 3 cách nhảy như sau:

// Lần 1 nhảy 2 bước, lần 2 nhảy 1 bước.
// Lần 1 nhảy 1 bước, lần 2 nhảy 2 bước.
// Cả 3 lần đều nhảy 1 bước.
// Đầu vào/Đầu ra:

// [Giới hạn thời gian chạy] 0.5s với (C++), 3s với (Java/C#), 4s với (Python, Js)
// [Đầu vào] integer a, b
// 1 ≤ b, a ≤ 100
// [Đầu ra] String
// Số cách để châu chấu nhảy từ A đến B.

function grasshopper(a, b) {
    if (b == 1) return 1;
    let dp = [];
    dp[0] = 0;
    for (let i = 1; i < b; i++) {
        dp[i] = 1;
    }
    dp[b] = 2;
    for (let i = b + 1; i <= a; i++) {
        dp[i] = dp[i - b] + dp[i - 1];
    }
    return dp[a];
}