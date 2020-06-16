// CWJ_D.A.N_3002 Trung bình 150 Điểm
// Giới hạn ký tự: 3000
// Yugi và Kaiba đang tham gia một trò chơi với luật như sau:

// Mỗi người có số lượng máu nhất định. Họ cần điều khiển quái thú để tấn công bên còn lại, người nào hết máu trước hoặc hết quái thú trước sẽ thua.

// Mỗi một quái thú sẽ có điểm tấn công và có 1 lượt tiêu diệt, mỗi quái thú có thể tiêu diệt những quái thú bên đối thủ nếu nó có nhiều điểm tấn công hơn. Sau khi tiêu diệt thì bên địch sẽ mất máu bằng với chênh lệch giữa hai điểm tấn công.

// Yugi luôn đi trước, anh ta muốn kiểm tra xem có thể thắng được Kaiba không, hãy giúp anh ta nhé ! Biết rằng: 

// Điểm tấn công của các quái thú bên Yugi được lưu ở mảng a.
// Điểm tấn công của các quái thú bên Kaiba được lưu ở mảng b.
// Kaiba đang còn k máu.
// Ví dụ :

// a = [200, 350, 100], b = [400, 50, 150], k = 350 thì canYugiWin(a,b,k) = true
// Yugi sẽ thắng nếu tấn công theo các sau:
// - Dùng quái thú 350 tấn công quá thú 50 bên Kaiba ==> máu Kaiba còn 50.
// - Dùng quái thú 200 tấn công quá thú 150 bên Kaiba ==> máu Kaiba còn 0. ==> Kaiba thua.
// Đầu vào/ Đầu ra:

// [Giới hạn thời gian] 0.5s với C++, 3s với Java & C#, 4s Python, GO và Js.
// [Đầu vào]:
// Array.Integer a
// Chỉ số tấn công của các quái thú bên Yugi.
// Array.Integer b
// Chỉ số tấn công của các quái thú bên Kaiba.
// 0 <= a.length, b.length <= 50
// 0 <= a[i], b[1] <= 10^8
// Integer k
// Máu hiện tại của Kaiba.
// 0 < k <= 10^8

// [Đầu ra]: Boolean
// true nếu Yugi có thể thắng, false nếu Yugi không thể thắng.

function canYugiWin(yugi, kaiba, kaibaHp) {
    if (yugi.length && !kaiba.length) return true;
    yugi.sort((cardA, cardB) => cardB - cardA);
    kaiba.sort((cardA, cardB) => cardA - cardB);
    if (yugi[0] < kaiba[0]) return false;
    let len = Math.min(yugi.length, kaiba.length);
    for (let i = 0; i < len; i++) {
        if (yugi[i] > kaiba[i]) {
            kaibaHp -= yugi[i] - kaiba[i];
            if (kaibaHp <= 0) return true;
        }
    }
    return false;
}