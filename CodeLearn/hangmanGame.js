// CWJ_D.A.N_3002 Đơn giản 120 Điểm
// Giới hạn ký tự: 3000
// Chắc hẳn bạn đã rất quen thuộc với trò chơi hangman, luật chơi như sau:

// Có tất cả 6 mạng, bạn sẽ phải đoán từng chữ cái của đáp án, nếu đoán sai thì sẽ bị trừ mạng còn nếu đúng thì chữ cái đó sẽ hiện ra.

// Nếu số mạng của bạn về 0 thì bạn sẽ thua.
// Nếu bạn đoán đúng được hết các chữ cái của đáp án thì bạn thắng.
// DAN muốn tái hiện tại trò chơi này, đáp án sẽ là chuỗi text và các chữ cái DAN đoán sẽ là mảng answers. Hãy giúp DAN kiểm tra xem có thể thắng trò chơi không.

// Ví dụ:

// Với text = "code" và answers =["c", "d","y", "i", "e", "o", "n"] thì hangmanGame(text, answers) = true.

// Với text = "codelearn" và answers = ["c", "m","y", "i", "b", "q", "w", "o"] thì hangmanGame(text, answers) = false.

// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] String text
// 1 <= text.length <= 10^5
// text chỉ gồm ký tự chữ cái in thường.
// Array.Char answers
// 1 <= answers.length <= 26
// answers chứa các phần tử đôi một khác nhau.
// answers chỉ gồm ký tự chữ cái in thường.

// [Đầu ra] Boolean.
function hangmanGame(text, answers) {
    let mySet = new Set(text.split(''));
    let wrong = 0;
    let right = 0;
    for (let i = 0; i < answers.length; i++) {
        if (mySet.has(answers[i])) {
            if (++right == mySet.size) return true;
        } else {
            if (++wrong == 6) return false;
        }
    }
    return false;
}