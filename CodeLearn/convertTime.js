// TLG_KIEN Đơn giản 140 Điểm
// Giới hạn ký tự: 3000
// Biết giữa đêm là 12:00:00AM trong dạng 12h và 00:00:00 trong dạng 24h. Giữa trưa là 12:00:00PM trong dạng 12h và 12:00:00 trong dạng 24h.

// Cho chuỗi time đầu vào là giờ ở định dạng 12h. Hỏi đầu ra ở dạng 24h là bao nhiêu? Trả về "false" nếu đầu vào sai định dạng.

// Ví dụ:

// Với time = "07:05:45PM" thì convertTime(time) = "19:05:45"
// Đầu vào/đầu ra:

// Giới hạn thời gian chạy: 0.5 giây với C++, 3 giây với Java và C#, 4 giây với Python, GO và Js.
// [Đầu vào] String time
// Thời gian ở dạng 12h. Có định dạng như sau: hh:mm:ssAM hoặc hh:mm:ssPM. Nếu hh, mm, ss < 10 thì phải thêm 0 ở trước.
// [Đầu ra] String time2
// Thời gian ở dạng 24h. Có định dạng hh:mm:ss. Nếu hh, mm, ss < 10 thì phải thêm 0 ở trước

function convertTime(time) {
    if (time.length != 10) return 'false';
    if (time.slice(-2) != 'AM' && time.slice(-2) != 'PM') return 'false';
    let arr = time.split(':');
    if (arr.length != 3) return 'false';
    if (arr[0].length != 2 && arr[1].length != 2 && arr[2].length != 4) return 'false';
    if (+arr[0] == 0 || +arr[0]) {
        if (+arr[0] > 12) return 'false';
    } else {
        return 'false';
    }
    if (+arr[1] == 0 || +arr[1]) {
        if (+arr[0] > 60) return 'false';
    } else {
        return 'false';
    }
    if (+arr[2].slice(0, 2) == 0 || +arr[2].slice(0, 2)) {
        if (+arr[2].slice(0, 2) > 60) return 'false'
    } else {
        return 'false';
    }
    if (time.slice(-2) == 'AM') {
        if (time == '12:00:00AM') {
            return '00:00:00'
        } else {
            return time.slice(0, 8);
        }
    } else {
        if (time == '12:00:00PM') {
            return '12:00:00'
        } else {
            return +time.slice(0, 2) + 12 + time.slice(2, 8);
        }
    }
}