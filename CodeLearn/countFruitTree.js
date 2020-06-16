// kikkdt Trung bình 150 Điểm
// Giới hạn ký tự: 3000
// Nhà người yêu của Kiệt có một cây táo và một cây cam, rất là sai quả nặng trĩu cành. Như hình minh hoạ bên dưới, vùng màu xám là nhà người yêu của Kiệt, với điểm bắt đầu start (s) và điểm kết thúc end (e). Giả sử các cây đang nằm ở một điểm duy nhất, tại đó cây táo nằm bên trái ngôi nhà - điểm a và cây cam nằm bên phải ngôi nhà - điểm b.



// Đến khi chín cây, quả rơi xuống cách một khoảng d theo trục Ox so với vị trí của cây. Giá trị của d âm tức là quả rơi bên trái của cây và ngược lại.

// Cho lần lượt vị trí của các cây là a và b ; mảng số nguyên apples[], oranges[] là các giá trị của d. Hãy giúp Kiệt biết được có bao nhiêu quả táo và quả cam rơi vào nhà người yêu của Kiệt (trong khoảng [s,e]) ?

// Ví dụ:

// Nhà người yêu của Kiệt nằm trong khoảng s = 7 và e = 11. Vị trí của cây táo tại điểm a = 5, cây cam tại điểm b = 15. Với các giá trị của d tương ứng: apples[-2, 2, 1] ; oranges[5, -6] thì countFruitTree = [1, 1]
// Giải thích:

// Quả táo rơi lần lượt ở các vị trí [5 - 2, 5 + 2, 5 + 1] = [3, 7, 6] => chỉ có 1 quả rơi trong [7, 11]

// Quả cam rơi lần lượt ở các vị trí [15 + 5, 15 - 6] = [20, 9] => chỉ có 1 quả rơi trong [7, 11]

// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s (C++), 3s (Java, C#), 4s (Python, JavaScript) 
// [Đầu vào]
// Integer s, e, a, b

// 0 ≤ s, e, a, b ≤ 105

// a < s < e < b

// Array.Integer apples, oranges

// 0 ≤ apples.length, oranges.length ≤ 2.103

// -105 ≤ apples[i], oranges[i] ≤ 105

// [Đầu ra] Array.Integer
//     Lần lượt là số quả táo, cam rơi vào nhà người yêu Kiệt.

function countFruitTree(s, e, a, b, apples, oranges) {
    let ans = [0, 0];
    for (let apple of apples) {
        ans[0] += apple + a >= s && apple + a <= e;
    }
    for (let orange of oranges) {
        ans[1] += orange + b >= s && orange + b <= e;
    }
    return ans;
}