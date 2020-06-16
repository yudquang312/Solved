// HaiZuka Trung bình 140 Điểm
// Giới hạn ký tự: 3000
// Hải có một robot hút rác dùng để thực hiện hút rác trên một đường thẳng, ban đầu robot đặt tại điểm có tọa độ là 0. Robot sẽ được điều khiển theo mỗi chuỗi s, nếu găp ký tự 'L' nó sẽ qua trái 1 đơn vị, còn nếu gặp ký tự 'R' nó sẽ qua phải một đơn vị.

// Cho chuỗi s chỉ gồm các ký tự 'L' và 'R', Hải muốn tìm một cách di chuyển thông minh (di chuyển ít bước nhất) để robot vẫn đi qua được tất cả các tọa độ như cách cũ. Nếu có nhiều cách thì đưa ra cách nhỏ hơn theo thứ tự từ điển.

// Ví dụ:

// Với s = "LRLRLRRR" thì countPosition(s) = "LRRR".
// Giải thích: Robot di chuyển cũ gồm 8 bước đi qua 4 tọa độ là -1, 0, 1, 2.
// Với cách di chuyển mới robot chỉ cần 4 bước mà vẫn đi qua được 4 điểm theo cách cũ.
// Với s = "LRLR" thì countPosition(s) = "L".
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] String s.
// 0 ≤ s.length() ≤ 105.
// s[i] = 'L' or 'R'.

// [Đầu ra] Integer.
// Số tọa độ mà robot đã đi qua.

function smartMove(s) {
    let maxIndex = 0;
    let minIndex = 0;
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'L') {
            minIndex = Math.min(minIndex, --index);
        } else {
            maxIndex = Math.max(maxIndex, ++index);
        }
    }
    if (maxIndex >= -minIndex) return 'L'.repeat(-minIndex) + 'R'.repeat(-minIndex + maxIndex);
    return 'R'.repeat(maxIndex) + 'L'.repeat(-minIndex + maxIndex)
}