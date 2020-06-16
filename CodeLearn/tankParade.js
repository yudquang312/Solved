// https://codelearn.io/training/detail/522628
// Nhân Kỷ niệm ngày Quốc Khánh Việt Nam, sẽ có một cuộc diễu hành xe tank trên đường. 
// Các xe được đánh số không theo một thứ tự nhất định. Việc cần phải làm là sắp xếp các xe theo thứ tự từ bé đến lớn, 
// nhưng đường hẹp, các xe chỉ có thể đi theo 1 hàng. 
// Một cách giải quyết được được ra là sử dụng một con đường phụ. 
// Do xe chỉ có thể đi theo 1 hàng, nên xe vào con đường phụ cuối cùng bắt buộc phải rời đi trước.

// Cho thứ tự của các xe, hỏi có thể sắp xếp lại các xe tank theo thứ tự từ bé tới lớn hay không?

// Ví dụ:

// Với arr = [5,1,2,4,3] thì đầu ra là true.
// Giải thích: 

// Với arr = [1,3,2] thì đầu ra là false
// Đầu vào/đầu ra:

// Giới hạn thời gian chạy: 0.5 giây với C++, 3 giây với Java và C#, 4 giây với Python, GO và Js.
// [Đầu vào] vector<int> arr
// 1 <= arr[i] <= 1000
// [Đầu ra] bool
// true nếu có thể thực hiện
// false nếu không thể thực hiện

function tankParade(arr) {
    arr.reverse();
    let stack = []
    let k = 1;
    while (arr.length) {
        let temp = arr[arr.length - 1];
        if (temp == k) {
            arr.pop();
            k++;
        } else {
            if (stack.length) {
                if (stack[stack.length - 1] == k) {
                    k++;
                    stack.pop();
                } else if (temp > stack[stack.length - 1]) {
                    return false;
                } else {
                    stack.push(temp);
                    arr.pop();
                }
            } else {
                stack.push(temp);
                arr.pop();
            }
        }
    }
    return true;
}