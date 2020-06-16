//input [0,1,0,3,12] --> output [1,3,12,0,0]
function moveZeros(nums) {// step2
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    let p = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            swap(i, p++);
            //console.log(nums);
        }
    }
    return nums;
}
// function moveZeros(nums) {// step1
//     for (let i = 0; i < nums.length; i++) {
//         if (!nums[i]) {
//             for (let j = i + 1; j < nums.length; j++) {
//                 if (!!nums[j]) {
//                     [nums[i], nums[j]] = [nums[j], nums[i]];
//                     break;
//                 }
//             }
//         }
//     }
// }

moveZeros([0, 1, 0, 3, 12]);