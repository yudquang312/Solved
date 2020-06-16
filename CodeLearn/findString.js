// SauLV Đơn giản 100 Điểm
// Giới hạn ký tự: 3000
// You are given two arguments mainString and findString.
// Your task it to find the number of occurrences of the findString in the mainString (Case sensitivity)

// Example:

// For mainString=""banana"" and findString="a" the output should be FindString(mainString,findString) = 3.
// Input/Output:

// [execution time limit] 0.5 seconds 

// [input] string mainString

// [input] string findString

// [output] integer

function findString(mainString, findString) {
    let ans = 0;
    for (let i = 0; i < mainString.length; i++) {
        console.log(mainString.slice(i, i + findString.length - 1));
        if (mainString.slice(i, i + findString.length) == findString) {
            ans++;
        }
    }
    return ans;
}