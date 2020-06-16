// Gerpan Trung bình 150 Điểm
// Giới hạn ký tự: 3000
// Trong một chương trình hẹn hò do Codelearn tổ chức cho các bạn nam nữ tìm bạn đời của mình, mỗi người được bốc 1 số ngẫu nhiên. Đến cuối chương trình, ban tổ chức sẽ tiến hành ghép các cặp số với nhau, cứ hai người cùng số thì sẽ trở thành 1 cặp, và tất nhiên có nhiều bạn mãi FA, và nếu có nhiều hơn 2 người bốc cùng 1 số thì sẽ ngẫu nhiên chọn ra các cặp cùng số đó đến khi không thể tìm bạn cùng số ghép được nữa. Và các số được chứa trong một mảng số nguyên a. Yêu cầu của bạn là tìm ra số cặp được tạo thành.

// Ví dụ:

// a = [1,3,2,1,1,5,2] thì countCouple(a) = 2. 
// Giải thích: Trong mảng số trên thì có 3 số 1 -> tạo thành 1 cặp, có 2 số 2 -> tạo thành 1 cặp. 

// a = [1,2,3,4,5,6,7,9,12,55] thì countCouple(a) = 0. 
// Giải thích: Không có 2 người nào cùng 1 số nên không có cặp đôi tạo thành.

// [Đầu vào/ Đầu ra]

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] Array: integer
// 1 ≤ a ≤ 106.

//            0 ≤ a[] ≤ 107.

// [Đầu ra] Integer
// Số cặp đôi được tạo thành.

function countCouple(a) {
    let freq = a.reduce((obj, e) => {
        if (obj[e]) {
            obj[e]++;
        } else {
            obj[e] = 1;
        }
        return obj;
    }, {});
    let ans = 0;
    for (let e in freq) {
        ans += freq[e] >> 1;
    }
    return ans;
}