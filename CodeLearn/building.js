// Black_Panther Trung bình 150 Điểm
// Giới hạn ký tự: 3000
// Việt là học sinh trong một lớp kĩ sư xây dựng nhí. Việt được cô phát cho một tấm bìa hình chữ nhật kích thước HxW dùng để làm mặt bằng cho bài tập thiết kế công trình các toà nhà mà cô giáo sắp giao. Tấm bìa được chia thành HxW ô vuông đơn vị. Trên mỗi ô vuông của tấm bìa có ghi một số tự nhiên. Cô giáo yêu cầu Việt như sau:

// Sử dụng các khối lập phương đơn vị (kích thước 1x1x1) đặt khít vào các ô vuông trên tấm bìa.
// Số lượng khối lập phương đơn vị đặt tại mỗi ô bằng đúng giá trị nguyễn được ghi tại ô đó để tạo ra mô hình xây dựng gồm các toà nhà.
// Tô màu lên bề mặt các toà nhà (cả tường và trần nhà).
// Lưu ý: nếu 2 toà nhà xây ở 2 ô cùng cạnh thì phần tường chung ở giữa không cần tô. Ô ghi số 0 đồng nghĩa không có toà nhà nào tại ô này

// Hãy giúp Việt tính diện tích bề mặt của các toà nhà để Việt có thể chuẩn bị màu trước khi tiến hành làm mô hình, kết quả chia lấy dư cho 109+7.

// Ví dụ:

// Với model = [[1,2],[3,5]] thì building(model) = 34.
// Giải thích:
//   Toà nhà ở ô (0,0) có phần diện tích cần tô là 3 (trần nhà có diện tích 1 và phần tường cần tô có diện tích 2)
//   Toà nhà ở ô (0,1) có phần diện tích cần tô là 6 (trần nhà có diện tích 1 và phần tường cần tô có diện tích 5)
//   Toà nhà ở ô (1,0) có phần diện tích cần tô là 9 (trần nhà có diện tích 1 và phần tường cần tô có diện tích 8)
//   Toà nhà ở ô (1,1) có phần diện tích cần tô là 16 (trần nhà có diện tích 1 và phần tường cần tô có diện tích 15)
// Vậy, tổng diện tích cần tô màu là 34.
// Đầu vào/đầu ra:

// [Thời gian chạy]: 0.5s với C++, 3s với Java/C#, 4s với Python/Go/Java Script
// [Đầu vào] Matrix of Integers points
// 0 ≤ model.size   ≤ 103.
// 0 ≤ model[].size ≤ 103.
// 0 ≤ model[][]    ≤ 109.
// [Đầu ra]: Integer
// Diện tích cần tô màu chia lấy dư cho 109+7.

function building(model) {
    if (model.length == 0 || model[0].length == 0) return 0;
    let ans = 0;
    for (let i = 0; i < model.length; i++) {
        for (let j = 0; j < model[0].length; j++) {
            if (model[i][j] != 0) {
                if (i == 0 && j == 0) {
                    ans += model[i][j] * 4 + 1;
                } else if (i == 0) {
                    ans += model[0][j] * 4 + 1 - 2 * Math.min(model[0][j], model[0][j - 1]);
                } else if (j == 0) {
                    ans += model[i][0] * 4 + 1 - 2 * Math.min(model[i][0], model[i - 1][0]);
                } else {
                    ans += model[i][j] * 4 + 1 - 2 * Math.min(model[i][j], model[i - 1][j]) - 2 * Math.min(model[i][j], model[i][j - 1]);
                }
            }

        }
    }
    return ans % (1e9 + 7);
}
