/*
https://codelearn.io/training/detail?id=489145
Hải đang cover-code một game đơn giản là game bingo. Hải đang gặp một vấn đề và cần mọi người giúp đỡ, vấn đề của Hải là:

Hải có:
1 ma trận a kích thước 5x5, với một phần tử trong ma trận sẽ nhận giá trị từ 1->25, và không có 2 phần tử nào cùng giá trị.
1 mảng b có kích thước 25, với một phần tử trong mảng cũng sẽ nhận giá trị từ 1->25, và không có 2 phần tử nào cùng giá trị.
Hoạt động:
Hải sẽ phải đọc từ trái qua phải lần lượt giá trị của các phần tử trong mảng b, mỗi lần như vậy Hải sẽ khoanh tròn vào ô đang chứa giá trị vừa đọc của ma trận a.
Khi một trong các hàng, các cột hoặc các đường chéo của ma trận được khoang tròn thì trò chơi kết thúc.
Hải cần đưa ra:
Chỉ số của giá trị cuối cùng trong mảng b mà Hải phải khoang để trò chơi kết thúc.
Ví dụ:

Với a = [[21,1,2,20,18], [23,7,5,3,14], [13,16,8,25,17], [6,11,4,24,12], [22,19,9,15,10]] và
b = [13, 2, 10, 8, 19, 9, 15, 6, 4, 7, 24, 20, 21, 23, 17, 11, 22, 12, 18, 14, 25, 3, 16, 1, 5] thì bingoGame(a,b) = 12.
Đầu vào/Đầu ra:

[Thời gian] 0.1s với C++, 0.6s với Java và C#, 0.8s với Python, Go và JavaScript.
[Đầu vào] Matrix. integer a.
a.size() = 5.
a[i].size() = 5.
1 ≤ a[i][j] ≤ 25.
[Đầu vào] Array. integer b.
b.size() = 25.
1 ≤ b[i] ≤ 25.
[Đầu ra] integer
Chỉ số của giá trị cuối cùng trong mảng b mà Hải phải khoang để trò chơi kết thúc.

*/
function bingoGame(arrA, arrB) {
    let map = {}; // lưu lại vị trí của giá trị để tiện cho truy xuất sau này :{value: index = [rowIndex, colIndex]}
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            map[arrA[row][col]] = [row, col];
        }
    }
    let rowCheck = new Array(5).fill(0);// check hàng
    let colCheck = new Array(5).fill(0);// check cột
    let diagonalCheck = [0, 0];//[i=j, i+j = 5 - 1], check 2 đường chéo
    for (let i = 0; i < 25; i++) {
        if (++rowCheck[map[arrB[i]][0]] == 5) {// ý tường nếu 5 value cùng hàng đc khoanh thì thắng
            return i;
        }
        if (++colCheck[map[arrB[i]][1]] == 5) {
            return i;
        }
        if (map[arrB[i]][0] == map[arrB[i]][1]) {
            if (++diagonalCheck[0] == 5) {
                return i;
            }
        }
        if (map[arrB[i]][0] + map[arrB[i]][1] == 4) {
            if (++diagonalCheck[1] == 5) {
                return i;
            }
        }
    }
}