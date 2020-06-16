// CWJ_D.A.N_3002 Đơn giản 120 Điểm
// Giới hạn ký tự: 3000
// Thầy cho DAN một chuỗi s1 và đố DAN tìm được chuỗi con dài nhất ở s1 mà chỉ gồm các ký tự trong chuỗi s2., nếu có nhiều chuỗi thỏa mãn thì hãy trả về chuỗi xuất hiện sớm nhất Hãy giúp DAN.

// Ví dụ:

// Với s1 = "ababcaaabbbcdc" và s2 = "abba" thì maxRepeatString(s1, s2) = "aaabbb"

// Với s1 = "ghghgjkl" và s2 = "cd" thì maxRepeatString(s1, s2) = ""

// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] String s1, s2
// 1 <= s1.length, s2.length <= 10^5

// [Đầu ra] String.

function maxRepeatString(s1, s2) {
    let mySet = new Set(s2.split(''));
    let ans = [];
    for (let i = 0, temp = ''; i <= s1.length; i++) {
        if (mySet.has(s1[i])) {
            temp += s1[i];
        } else {
            ans.push(temp);
            temp = ''
        }
    }
    return ans.sort((a, b) => b.length - a.length)[0];
}

function maxRepeatString(s1, s2) {
    let mySet = new Set(s2.split(''));
    let index = 0;
    let len = 0;
    for (let i = 0, tempIndex = 0, tempLen = 0; i <= s1.length; i++) {
        if (mySet.has(s1[i])) {
            tempLen++;
        } else {
            if (tempLen > len) {
                index = tempIndex;
                len = tempLen;
            }
            tempIndex = i + 1;
            tempLen = 0;
        }
    }
    return s1.slice(index, index + len);
}