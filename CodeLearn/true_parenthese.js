// Shanghaik Đơn giản 100 Điểm
// Giới hạn ký tự: 3000
// Một biểu thức ngoặc đơn (dưới dạng chuỗi) được xem là đúng nếu:

// Có thể xóa hết các cặp ngoặc đơn "()" để thu được một chuỗi rỗng.
// Số các cặp "()" là số nguyên dương chẵn.
// Cho một chuỗi str chứa chỉ các dấu '(' và ')'. Trả về true nếu đó là một biểu thức ngoặc đơn đúng, false nếu không. 

// Ví dụ:

// Với str = "(())()()" thì true_parentheses(str) = true
// Giải thích: Ta có thể xóa dần các cặp "()" như sau "(())()()" -> "()()()" -> "()()" -> "()" -> "" và ta đếm được có 4 cặp"()".
// Với str = "(())())(" thì true_parentheses(str) = true
// Giải thích: Không có cách nào xóa các cặp "()" để thu được 1 chuỗi rỗng.
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] String
// Một chuỗi str chứa chỉ các dấu '(' và ')'
// 0 ≤ str.length ≤ 10000
// [Đầu ra] Boolean
// Trả về true nếu str là một biểu thức ngoặc đơn đúng, false nếu không. 

function trueParentheses(str) {
    if (str.length == 0) return false;
    let count = 0;
    while (str.indexOf('()') != -1) {
        str = str.replace('()', '');
        count++;
    }
    return str.length == 0 && count % 2 == 0;
}