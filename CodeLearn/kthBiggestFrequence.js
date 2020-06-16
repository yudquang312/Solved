// CWJ_D.A.N_3002 Đơn giản 120 Điểm
// Giới hạn ký tự: 3000
// Bạn hãy tìm phần tử có số lần suất hiện trong mảng a lớn thứ k. 
//Nếu có nhiều phần tử hợp lệ thì trả về phần tử có lần xuất hiện đầu tiên sớm nhất, 
//còn nếu không tìm được thì hãy trả về -1.

// Ví dụ:

// a = [1,1,1,3,2,3,2,4,4,4,1] và k = 1 thì kthBiggestFrequency = 1;
// Ta có:
// - phần tử 1 xuất hiện 4 lần.
// - phần tử 4 xuất hiện 3 lần.
// - phần tử 2 và 3 cùng xuất hiện 2 lần.
// ==> Phần tử 1 có tần suất xuất hiện lớn thứ 1.
// a = [1,1,1,3,2,3,2,4,4,4,1] và k = 3 thì kthBiggestFrequency = 3;
// Ta thấy cả phần tử 2 và 3 đều hợp lệ, nhưng phần tử 3 xuất hiện sớm hơn nên trả về 3.
// Đầu vào/ Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript
// [Đầu vào]
// Array.Integer a
// 0 <= a.length <= 10^6
// 0 <= a[i] <= 10^5
// Integer k
// 1 <= k <= 1000
// [Đầu ra] Integer

function kthBiggestFrequency(arr, k) {
    if (arr.length == 0) return -1;
    if (k < 1 || k >= arr.length) return -1;
    let objFreq = arr.reduce((freq, num, index) => {
        if (freq[num]) {
            freq[num][0] = freq[num][0] + 1;
        } else {
            freq[num] = [1, index, num];
        }
        return freq;
    }, {});
    //console.log(objFreq);
    let freqArr = Object.values(objFreq).sort((a, b) => b[0] - a[0]);
    //console.log(freqArr);
    let count = 1;
    let tempRes;
    for (let i = 0, tempResIndex; i < freqArr.length; i++) {
        //console.log(count, tempRes);
        if (i == 0) {
            if (count == k) {
                tempRes = freqArr[i][2];
                tempResIndex = freqArr[i][1];
            }
            continue;
        }
        if (freqArr[i][0] < freqArr[i - 1][0]) {
            count++;
            if (count > k) {
                return tempRes;
            }
            if (count == k) {
                tempRes = freqArr[i][2];
                tempResIndex = freqArr[i][1];
            }
        }
        if (freqArr[i][0] == freqArr[i - 1][0]) {
            if (freqArr[i][1] < tempResIndex) {
                tempRes = freqArr[i][2];
                tempResIndex = freqArr[i][1];
            }
        }
    }
    //console.log(count);
    return count == k ? tempRes : -1;
}