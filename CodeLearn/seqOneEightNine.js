/*
Learning the history of Vietnam, Vinh knows that August 19, 1945, 
was the day of General Uprising when the Vietnamese stood up to the great August Revolution. 
Currently, 198 is the name of many hospitals, parks, streets in Vietnam. 
This number inspires Vinh to examine the sequence SEQ198. 
A sequence of non-negative integers a1, a2, ..., 
an is called a SEQ198 if there exist no i and j (1 ≤ i, j ≤ n) where a[i] - a[j] equals 1, 8 or 9.
Example:
The sequence: 1, 3, 5, 7 is a SEQ198 sequence.

The sequence: 7, 3, 5, 1, 9, 21 is not a SEQ198 as the difference of 9 and 1 is 8: 9 – 1 = 8. 
However, after removing 1, the new sequence is 7, 3, 5, 9, 21, which is a SEQ198 sequence.
Vinh considers the following problem: Given a sequence of non-negative integers, 
find a way to remove as few elements as possible to turn it into a SEQ198.

Input/output:

Execution time limit: 3 seconds

Input:

arr: integer array (arr.length <= 2000, 0<= arr[i] <= 10^9)
Output:

The integer k indicating the minimum number of elements, which should be removed to get a SEQ198. Return 0 if the given sequence is a SEQ198.
*/

function seqOneEightNine(arr) {
    arr.sort((a, b) => a - b);
    let mapObj = arr.reduce((res, num) => {
        if (res[num]) {
            res[num][0] = res[num][0] + 1;
        } else {
            res[num] = [1, true]
        }
        //res[num] ? res[num][0]  = res[num][0] + 1 : res[num] = [1, true];
        return res;
    }, {});
    //console.log(mapObj);
    let count = 0;
    for (let keyNum in mapObj) {
        //console.log(keyNum);
        if (!mapObj[keyNum][1]) {
            continue;
        }
        //console.log(1 + (+keyNum), mapObj[1 + (+keyNum)]);
        if (mapObj[1 + (+keyNum)] && mapObj[1 + (+keyNum)][1]) {
            //console.log(1);
            if (mapObj[keyNum][0] < mapObj[1 + (+keyNum)][0]) {
                count += mapObj[keyNum][0];
                mapObj[keyNum][1] = false;
                continue;
            } else {
                count += mapObj[1 + (+keyNum)][0];
                mapObj[1 + (+keyNum)][1] = false;
            }
        }
        //console.log(8 + (+keyNum), mapObj[8 + (+keyNum)]);
        if (mapObj[8 + (+keyNum)] && mapObj[8 + (+keyNum)][1]) {
            //console.log(8);
            if (mapObj[keyNum][0] < mapObj[8 + (+keyNum)][0]) {
                count += mapObj[keyNum][0];
                mapObj[keyNum][1] = false;
                continue;
            } else {
                count += mapObj[8 + (+keyNum)][0];
                mapObj[8 + (+keyNum)][1] = false;
            }
        }
        //console.log(9 + (+keyNum), mapObj[9 + (+keyNum)]);
        if (mapObj[9 + (+keyNum)] && mapObj[9 + (+keyNum)][1]) {
            //console.log(9);
            if (mapObj[keyNum][0] < mapObj[9 + (+keyNum)][0]) {
                count += mapObj[keyNum][0];
                mapObj[keyNum][1] = false;
                continue;
            } else {
                count += mapObj[9 + (+keyNum)][0];
                mapObj[9 + (+keyNum)][1] = false;
            }
        }
    }
    //console.log(mapObj);
    return count;
}
seqOneEightNine([0, 0, 8, 9, 12, 20]);//3
//seqOneEightNine([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);//6
//seqOneEightNine([20, 18, 16, 14, 12, 10, 9, 8, 7, 6, 5])//7
//seqOneEightNine([11, 23, 3, 18, 101, 29, 13, 22, 34, 32, 11, 98, 34, 102, 103, 13, 0, 4, 5]);//6

//SAI ĐÂU ĐÓ, MAYBE LOGIC WRONG
