// Naco151934 Trung bình 150 Điểm
// Giới hạn ký tự: 80
// Đếm ngược chính là sở thích của Khanh. Mới vừa đây, Khanh cảm thấy rất nuối tiếc vì phải đợi đến năm sau mới lại được đếm ngược khoảnh khắc giao thừa, cũng chính là khoảnh khắc cả nước cùng nhau đếm ngược.

// Vì thế, để cảm thấy phấn chấn hơn, Khanh đã quyết định đến "Cửa Hàng Của Những Bộ Đếm" và tìm cho mình một bộ đếm thú vị.

// Như mong muốn, bộ đếm mà Khanh tìm thấy thật sự rất "bất thường". Ở giây đầu tiên, nó hiển thị số 3. Mỗi giây, số được hiển thị trên bộ đếm giảm đi 1 cho đến khi nó đạt 1. Không chỉ dừng ở đó, bộ đếm này sẽ đếm ngược theo chu kỳ. Trong giây tiếp theo, bộ đếm sẽ reset hiển thị về giá trị 2 × số bắt đầu đếm ngược của chu kỳ trước và sau đó tiếp tục đếm ngược theo quy tắc trên.

// Để dễ hình dung, Khanh có hình minh họa dưới đây:



// Hãy giúp Khanh xác định số hiển thị trên màn hình bộ đếm ở giây t.

// Ví dụ: 

// Với t = 3 thì output UnusualCounter(t) = 1.
// Với t = 17 thì output UnusualCounter(t) = 5.
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.1s (C++), 0.6s (Java, C#), 0.8s (Python, JavaScript, Go)
// [Đầu vào] long t
//    1 ≤ t ≤ 1012

// [Đầu ra] long
//     Số hiển thị trên bộ đếm ở giây t.

function unusualCounter(t) {
    let k = 0;
    for (; 3 * Math.pow(2, k++) - 3 < t;);
    return 3 * Math.pow(2, k - 1) - 2 - t;
}
// function unusualCounter(t,k=0){for(;3*Math.pow(2,k++)-3<t;);return 3*Math.pow(2,k-1)-2-t}
let unusualCounter = (t) => { return 3 * Math.pow(2, Math.floor(Math.log(t / 3) / Math.log(2))) - 2 - t }
