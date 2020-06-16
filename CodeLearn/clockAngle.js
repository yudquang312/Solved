// HaiZuka Đơn giản 140 Điểm
// Giới hạn ký tự: 3000
// Trong lúc rảnh, Hải nhìn kỹ vào một chiếc đồng hồ treo tường, Hải nhận thấy rằng tại một thời điểm nào đó, kim phút và kim phút luôn tạo thành một góc nhất định.

// Cho hai số h và m lần lượt là số giờ và số phút tại một thời điểm. Hãy tìm và đưa góc tạo giữa kim giờ và kim phút lúc đó, (biết rằng góc tạo giữa hai kim nhỏ hơn hoặc bằng 180 độ).

// Ví dụ:

// Với h = 3 và m = 0 thì clockAngle(h, m) = 90.
// Giải thích: Lúc 3 giờ 0 phút, kim giờ và kim phút tạo thành góc 90 độ.

// Với h = 12 và m = 34 thì clockAngle(h, m) = 173.
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] Integer h.
// 0 ≤ h ≤ 23.

// [Đầu vào] Integer m.
// 0 ≤ h ≤ 59.
// [Đầu ra] Double.
// Góc giữa kim giờ và kim phút.

function clockAngle(h, m) {
    if (h > 11) h = h - 12;
    return Math.abs(m * 6 - (h * 30 + m * (0.5))) > 180 ? 360 - Math.abs(m * 6 - (h * 30 + m * (0.5))) : Math.abs(m * 6 - (h * 30 + m * (0.5)));
}