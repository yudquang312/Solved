// kien_the_sun Đơn giản 100 Điểm
// Giới hạn ký tự: 3000 
// Cho hai số a và b, tìm chữ số cuối cùng của kết quả luỹ thừa bậc b của a.

// Ví dụ

// Với a = 2, b = 3 ta có luỹ thừa bậc 3 của 2 là 8 nên đầu ra là 8.
// Với a = 3, b = 3 ta có luỹ thừa bậc 3 của 3 là 27 nên đầu ra là 7.
// Đầu vào/Đầu ra

// [giới hạn thời gian chạy] 1 giây

// [đầu vào] two integers a and b
// Điều kiện tiền đề:
// 0 ≤ a, b ≤ 100000 
// [đầu ra] integer
// chữ số cuối cùng của a mũ b.

function lastDigit(a, b) {
    let arr = [1, 1, 4, 4, 2, 1, 1, 4, 4, 2];// chu ky lap lai cua i (0 -> 9)
    a = a % 10;
    return b % arr[a] ? Math.pow(a, b % arr[a]) % 10 : Math.pow(a, arr[a]) % 10;
}


// function lastDigit(a,b){
//     if(b==0) return 1;
//     a = a%10;
//     if(b == 1) return a;
//     if(a < 2) return a;
//     res = a;
//     for(let i = 2; i <= b; i++){
//         res = (res*a)%10;
//     }
//     return res;
// }