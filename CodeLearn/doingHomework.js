// satellite1012 Trung bình 180 Điểm
// Giới hạn ký tự: 3000
// Thầy giáo cho n bài tập về nhà lưu trong danh sách a, bài tập thứ i sẽ có điểm tối đa là a[i]. Chọn ra k bài tập trong dãy thỏa mãn điều kiện sau

// k bài tập này liên tiếp nhau trong mảng a.
// Bài tập sau có điểm tối đa lớn hơn bài tập trước.
// Nhiệm vụ của bạn là làm hết k bài tập này, hỏi số điểm tối đa các bạn có thể đạt được là bao nhiêu.

// Ví dụ:

// Với a = [1, 2, 3, 5, 1] thì doingHomework(a) = 11;
// Giải Thích: Dãy gồm k bài tập: 1, 2, 3, 5 => tổng điểm 1 + 2 + 3 + 5 = 11

// Với a = [10, 9, 8, 7, 6] thì  doingHomework(a) = 10;
// Đầu vào/ Đầu ra:

// [Thời gian chạy]  0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.
// [Đầu vào]: Array: Integer: a
// 1 ≤ a.size() ≤ 105
// 0 ≤ a[i] ≤ 105.
// [Đầu ra]: Integer
// Số điểm tối đa bạn có thể đạt được, đầu vào luôn đảm bảo có kết quả.

function doingHomework(arr) {
    let max = arr[0];
    let maxHere = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            maxHere += arr[i];
        } else {
            maxHere = arr[i];
        }
        max = Math.max(max, maxHere);
    }
    return max;
}