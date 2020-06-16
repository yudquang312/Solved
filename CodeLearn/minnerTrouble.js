// Một khu mỏ hoang nọ có n phòng, bắt đầu từ phòng 1 đến n, phòng thứ i sẽ có a[i] là số đá quý chứa trong phòng đó. Để di chuyển giữa các phòng, người thợ mỏ phải thỏa mãn các điều kiện sau

// Mỗi phòng chỉ được đi qua tối đa 1 lần
// Chỉ được phép đi từ phòng có số đá quý ít hơn đến phong có số đá quý cao hơn
// Từ phòng i chỉ có thể di chuyển đến phòng i+1 hoăc i-1
// Hãy giúp người thợ mỏ chọn ra số thứ tự của căn phòng để bắt đầu việc thu thập đá quý sao cho số đá quý thu thập được là lớn nhất. Và trả về số lượng đá quý đó.

// Ví dụ:

// Với a = [0, 2, 3, 5, 1] thì minerTrouble(a) = 10;
// Giải thích:
// Thợ mỏ bắt đầu tại căn phòng thứ 2: a[1]=2
// Thợ mỏ đi đến phòng thứ 3: a[2]=3
// Thợ mỏ kết thúc ở căn phòng thứ 4: a[3]=5, tổng số đá quý là 10
// Với a = [0, 9, 0, 1, 7] thì  minerTrouble(a) = 9; 
// Giải thích:
// Thợ mỏ bắt đầu tại a[1] và thu đươc 9 đá quý.
// Đầu vào/ Đầu ra:

// [Thời gian chạy]  0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.
// [Đầu vào]: Array: a
// 0 ≤ a.size() ≤ 105
// 0 ≤ a[i] ≤ 1018.
// [Đầu ra]: Integer
// Số đá quý tối đa mà thợ mỏ có thể thu thập được, lấy phần dư cho 109+7
//8/10 test case
function minerTrouble(arr) {
    const mod = 1e9 + 7;
    if (arr.length == 0) return 0;
    if (arr.length == 1) return arr[0] % mod;
    let maxTang = '0';
    let maxModTang = 0;
    let maxGiam = '0';
    let maxModGiam = 0;
    for (let i = 1, tang = arr[0] + '', modTang = arr[0], modGiam = arr[0], giam = arr[0] + ''; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            modTang = (modTang % mod + arr[i] % mod) % mod;
            tang = sum(tang, arr[i] + '');
            giam = arr[i] + '';
            modGiam = arr[i];
            if (compare(tang, maxTang)) {
                maxTang = tang;
                maxModTang = modTang;
            }
        } else if (arr[i] < arr[i - 1]) {
            modGiam = (modGiam % mod + arr[i] % mod) % mod;
            giam = sum(giam, arr[i] + '');
            tang = arr[i] + '';
            modTang = arr[i];
            if (compare(giam, maxGiam)) {
                maxGiam = giam;
                maxModGiam = modGiam;
            }
        } else {
            tang = arr[i] + '';
            giam = arr[i] + '';
            modTang = arr[i];
            modGiam = arr[i];
        }

    }
    return Math.max(maxModGiam, maxModTang);
}

function sum(str1, str2) {
    let len = Math.max(str1.length, str2.length);
    str1 = '0'.repeat(len - str1.length) + str1;
    str2 = '0'.repeat(len - str2.length) + str2;
    let sum = '';
    let debt = 0;
    for (let i = len - 1, temp; i >= 0; i--) {
        temp = +str1[i] + +str2[i] + debt;
        debt = temp > 9;
        sum = temp % 10 + sum;
    }
    return debt ? '1' + sum : sum;
}
function compare(num1, num2) {
    if (num1.length != num2.length) {
        return num1.length > num2.length;
    }
    for (let i = 0; i < num1.length; i++) {
        if (num1[i] != num2[i]) {
            if (num1[i] > num2[i]) {
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
}

// function mainerTrouble(arr) {
//     let maxTang = 0;
//     let maxGiam = 0;
//     for (let i = 1, tang = arr[0], giam = arr[0]; i < arr.length; i++) {
//         if (arr[i] > arr[i - 1]) {
//             tang += arr[i];
//             giam = arr[i];
//         } else if (arr[i] < arr[i - 1]) {
//             giam += arr[i];
//             tang = arr[i];
//         } else {
//             tang = arr[i];
//             giam = arr[i];
//         }
//         maxGiam = Math.max(maxGiam, giam);
//         maxTang = Math.max(maxTang, tang);
//     }
//     return Math.max(maxGiam, maxTang) % (1e9 + 7);
// }

// function sum(str1, str2) {
//     let len = Math.max(str1.length, str2.length);
//     str1 = '0'.repeat(len - str1.length) + str1;
//     str2 = '0'.repeat(len - str2.length) + str2;
//     let sum = '';
//     let debt = 0;
//     for (let i = len - 1, temp; i >= 0; i--) {
//         temp = +str1[i] + +str2[i] + debt;
//         debt = temp > 9;
//         sum = temp % 10 + sum;
//     }
//     return debt ? '1' + sum : sum;
// }
// function compare(num1, num2) {
//     if (num1.length != num2.length) {
//         return num1.length > num2.length;
//     }
//     for (let i = 0; i < num1.length; i++) {
//         if (num1[i] != num2[i]) {
//             if (num1[i] > num2[i]) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }
//     return false;
// }