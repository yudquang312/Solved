// 63. Unique Paths II
// Medium

// 1570

// 234

// Add to List

// Share
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. 
// The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?



// An obstacle and empty space is marked as 1 and 0 respectively in the grid.

// Note: m and n will be at most 100.

// Example 1:

// Input:
// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// Output: 2
// Explanation:
// There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right

var uniquePathsWithObstacles = function (arr) {
    let ans = new Array(arr.length);
    for (let i = 0; i < ans.length; i++) {
        ans[i] = [];
    }
    if (arr[0][0] == 1) {
        return 0;
    } else {
        ans[0][0] = 1;
    }
    for (let i = 1; i < arr[0].length; i++) {
        if (arr[0][i] == 1) {
            ans[0][i] = 0;
        } else {
            ans[0][i] = ans[0][i - 1];
        }
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i][0] == 1) {
            ans[i][0] = 0;
        } else {
            ans[i][0] = ans[i - 1][0];
        }
    }
    for (let i = 1; i < arr.length; i++) {
        for (let j = 1; j < arr[0].length; j++) {
            if (arr[i][j] == 1) {
                ans[i][j] = 0;
            } else {
                ans[i][j] = ans[i - 1][j] + ans[i][j - 1];
            }
        }
    }
    return ans[ans.length - 1][ans[0].length - 1];
};

var uniquePathsWithObstacles = function (arr) {
    if (arr[0][0] == 1) {
        return 0;
    } else {
        arr[0][0] = 1;
    }
    for (let i = 1; i < arr[0].length; i++) {
        if (arr[0][i] == 1) {
            arr[0][i] = 0;
        } else {
            arr[0][i] = arr[0][i - 1];
        }
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i][0] == 1) {
            arr[i][0] = 0;
        } else {
            arr[i][0] = arr[i - 1][0];
        }
    }
    for (let i = 1; i < arr.length; i++) {
        for (let j = 1; j < arr[0].length; j++) {
            if (arr[i][j] == 1) {
                arr[i][j] = 0;
            } else {
                arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
            }
        }
    }
    return arr[arr.length - 1][arr[0].length - 1];
};