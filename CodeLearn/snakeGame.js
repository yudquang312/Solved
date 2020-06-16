// HaiZuka Trung bình 150 Điểm
// Giới hạn ký tự: 3000
// Hải đang chơi game con rắn, trong game, con rắn chỉ di chuyển được các ô kề cạnh với nó. Hải đã chọn chế độ là không vật cản, nên con răn nếu va vào mép của màn hình thì sẽ xuyên không qua lề đối diện, ví dụ dưới hình.



// Màn hình của Hải có kích thước mxn, các hàng đánh số từ 0 đến m-1, các cột đánh số từ 0 đến n-1. Hiện con rắn con Hải đang ở ví trí (m1,n1), vị trí của thức ăn đang ở (m2,n2). Răn sẽ ăn được thức ăn nếu chúng cùng ví trí, Hải muốn biết con rắn cần di chuyển ít nhất bao nhiều ô vuông để rắn đi đến thức ăn.

// Đầu và là dãy a = [m,n,m1,n1,m2,n2].

// Ví dụ:

// Với a = [6,9,2,6,2,0] thì snakeGame(a) = 3.
// Giải thích:


// Với a = [10,10,0,0,0,1] thì snakeGame(a) = 1.
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào]Arrays: Integer
// a.size() =6.
// 0 ≤ a[i] ≤ 109.
// 1 ≤ a[0],a[1].

// [Đầu ra] Integer
// Số ô vuông ít nhất để con rắn ăn được thức ăn.

function snakeGame([m, n, m1, n1, m2, n2]) {
    let ans = 0;
    if (Math.abs(m1 - m2) <= m - Math.abs(m1 - m2)) {
        ans += Math.abs(m1 - m2);
    } else {
        ans += m - Math.abs(m1 - m2);
    }
    if (Math.abs(n1 - n2) <= n - Math.abs(n1 - n2)) {
        ans += Math.abs(n1 - n2);
    } else {
        ans += n - Math.abs(n1 - n2);
    }
    return ans;
    //return Math.min(Math.abs(m1 - m2), m - Math.abs(m1 - m2)) + Math.min(Math.abs(n1 - n2), n - Math.abs(n1 - n2));
}