// HaiZuka Đơn giản 120 Điểm
// Giới hạn ký tự: 3000
// [Problem D - Sasuke CodeWar #29]

// Hải và Nam đang làm bốc vác gạo ở một công ty, biết rằng một người có sức nâng là k thì có thể nâng được những bạo gạo có cân nặng không vượt quá k. Sức nâng của Nam và Hải lần lượt là m và n.

// Hải và Nam rất thân nhau nên hai bạn quyết định tất cả lượt di chuyển phải đi cùng nhau, mỗi lượt di chuyển được tính khi hai bạn thực hiện theo một trong hai cách sau:

// Hải và Nam mỗi người chọn 1 bao gạo mà mình có thể nâng được rồi đi cùng nhau.
// Hải và Nam cùng nâng một bao gạo, lúc đó sức nâng của hai bạn là m+n.
// Cho dãy a là cân nặng của n bao gạo, dãy b gồm 2 số m và n. Hãy tính sẽ lần di chuyển ít nhất để hai bạn nâng hết số gạo, biết rằng đầu và đảm bảo rằng a[i] ≤ m+n.

// Ví dụ:

// Với a = [1,6,3,5], b = [2,4], thì bestFriend(a,b)=3.
// Giải thích: Hải và Nam sẽ di chuyển 3 lần như sau:
// Lượt 1: Nam chọn bao gạo a[0]=1, Hải chọn bao gạo a[2]=3, rồi cùng đi.
// Lượt 2: Hải và Nam cùng nâng bao gạo a[1]=6.
// Lượt 3: Hải và Nam cùng nâng bao gạo a[3]=5.
// Với a = [3,3,4,5,5], b = [1,4], thì bestFriend(a,b)=5.
// Giải thích: Cả 5 lượt Hải và Nam đều phải đi cùng nhau và nâng 1 bao gạo.
// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] Array: integer: b
// 1 ≤ b[0] ≤ b[1] ≤ 103.

// [Đầu vào] Array: integer: a
// 1 ≤ a.size() ≤ 106.
// 1 ≤ a[i] ≤ b[0]+b[1].
// [Đầu ra] Integer
// Số lượt di chuyển ít nhất để Hải và Nam nâng được hết số gạo.
//https://codelearn.io/training/detail?id=564519

function bestFriend(arr, b) {
    let res = arr.reduce((rs, num) => {
        if (num > b[1]) {
            rs[2]++;
        } else if (num > b[0] && num <= b[1]) {
            rs[1]++;
        } else {
            rs[0]++;
        }
        return rs;
    }, [0, 0, 0]);
    //console.log(res);
    if (b[0] == b[1]) {
        return res[2] + Math.floor(res[0] / 2) + res[0] % 2;
    }
    if (res[1] >= res[0]) {
        return res[1] + res[2];
    } else {
        return res[2] + Math.floor((res[1] + res[0]) / 2) + (res[1] + res[0]) % 2;
    }

}