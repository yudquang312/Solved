

function countOccurrence(a, arr) {
    if (a.length > arr.length) return 0;
    let count = 0;
    for (let i = 0; i < arr.length - a.length + 1; i++) {
        if (a[0] == arr[i]) {
            let flag = 1;
            for (let j = i + 1; j < i + a.length; j++) {
                if (arr[j] != a[j - i]) {
                    flag = 0;
                    break;
                }
            }
            count += flag;
        }
    }
    return count;
}

// matrix biểu diễn các tòa nhà đứng sát nhau

// đây là 4 toàn sát nhau xếp thành hình vuông
// [[1,2],
//  [3,5]]

// tòa i,j
// rộng = dài = 1;
// cao = matrix[i][j]

// cần tô tường và trần nhà, phần tường đè lên nhau không cần tô
// ? tổng diện tích cần tô



