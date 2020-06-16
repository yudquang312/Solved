// DAN rất thích chơi trò xếp các con số. Thầy mới đưa cho DAN một mảng arr gồm các số tự nhiên và đố DAN lấy được k số trong mảng để ghép các số này với nhau sẽ được số lớn nhất. Hãy giúp DAN.

// Ví dụ:

// Với arr = [123, 6, 4563, 97], k = 2 thì maxAddString(arr, k) = "4563123"
// Có rất nhiều cách ghép hai số khác nhau:

// 123-6
// 6-123
// 123-4563
// 4563-123
// 123-97
// 97-123
// 6-4563
// 4563-6
// 6-97
// 97-6
// 4563-97
// 97-4563
// ==> Số 4563123 số lớn nhất.

// Đầu vào/Đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.

// [Đầu vào] Array.Integer arr
// 1 <= arr.length <= 10^5
// 0 <= arr[i] <= 10^5
// Integer k
// 1 <= k <= arr.length;

// [Đầu ra] String

function maxAddString(arr, k) {
    if (k == arr.length) return arr.sort((a, b) => +('' + b + a) - +('' + a + b)).join('');
    arr.sort((a, b) => ('' + b).length - ('' + a).length);
    let mapNumLen = {};
    for (let i = 0, len; i < arr.length; i++) {
        len = arr[i].toString().length;
        if (mapNumLen[len]) {
            mapNumLen[len].push(arr[i]);
        } else {
            mapNumLen[len] = [arr[i]];
        }
    }
    console.log(mapNumLen);
    let arrLenSorted = Object.keys(mapNumLen).sort((a, b) => b - a);
    console.log(arrLenSorted);
    let lastNumLen;
    let lastArr = [];
    let count = 0
    for (let i = 0; i < arrLenSorted.length; i++) {
        count += mapNumLen[arrLenSorted[i]].length;
        if (count >= k) {
            lastNumLen = arrLenSorted[i];
            break;
        }
        lastArr = lastArr.concat(mapNumLen[arrLenSorted[i]]);
    }
    lastArr = lastArr.concat(mapNumLen[lastNumLen].sort((a, b) => +('' + b + a) - +('' + a + b)).slice(0, k + mapNumLen[lastNumLen].length - count));
    lastArr.sort((a, b) => +('' + b + a) - +('' + a + b));
    console.log(lastNumLen);
    console.log(lastArr);
    return lastArr.join('');
}