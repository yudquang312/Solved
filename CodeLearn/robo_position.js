// Shanghaik Đơn giản 100 Điểm
// Giới hạn ký tự: 3000
// Một nhóm học sinh làm được một chú robot và robot này có thể được điều khiển bằng các câu lệnh:

// Go X: đi thẳng lên phía trước X đơn vị tọa độ
// TB: robot quay 180o độ về hướng ngược lại với hướng đang đứng
// TL: robot quay 90o độ ngược chiều kim đồng hồ với hướng đang đứng
// TR: robot quay 90o độ theo chiều kim đồng hồ với hướng đang đứng
// Lúc đầu robot đứng ở vị trí (0,0), mặt robot hướng lên phía trên như hình dưới.



// Cho một dãy các thao tác điều khiển robot thuộc 1 trong 4 lệnh cơ bản trên dưới dạng một chuỗi, mỗi lệnh cách nhau bởi một dấu ',' bạn hãy cho biết sau khi thực hiện hết cách lệnh này thì robot có tọa độ bao nhiêu.

// Ví dụ:

// Với run = "Go 2" thì kết quả là robotPosition(run) = [0, 2]
// Giải thích: robot đi thẳng lên trước 2 mét, do đó kết thúc ở toạ độ (0, 2) như hình dưới:

// Với run ="Go 2,TL,Go 2" thì kết quả robo_position(run) = [-2, 2]
// Giải thích: robot đi thẳng lên trước 2 mét. Sau đó quay mặt về bên trái và đi thẳng 2 mét. Do đó kết thúc ở toạ độ (-2, 2) như hình dưới:

// Đầu vào/đầu ra:

// [Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.
// [Đầu vào] String run
// Chuỗi chứa danh sách các lệnh điều khiển robot, mỗi lệnh cách nhau bởi một dấu phẩy (,) và không có khoảng trắng dư thừa.
// Số lượng câu lệnh không quá 1000.
// Với lệnh Go X, thì X không được vượt quá 107 và tọa độ sau khi thực thi hết các lệnh luôn đảm bảo nhỏ hơn 109
// [Đầu ra] Array Of Integers
// Mảng với 2 phần tử thể hiện toạ độ của robot sau khi thực thi hết các lệnh.

const direct = {
    'U': [0, 1],
    'D': [0, -1],
    'R': [1, 0],
    'L': [-1, 0]
}
function roboPosition(run) {
    let [x, y] = [0, 0];
    let dir = 'U';
    run = run.split(',').map(e => {
        if (e.length > 2) {
            e = e.split(' ');
            e[1] = +e[1];
        }
        return e;
    });
    for (let i = 0; i < run.length; i++) {
        if (run[i][0] == 'Go') {
            x += direct[dir][0] * run[i][1];
            y += direct[dir][1] * run[i][1];
        } else {
            dir = afterDir(dir, run[i]);
        }
        // console.log(x, y);
    }
    return [x, y];
}

function afterDir(current, trans) {
    const obj = { 'U': { 'TB': 'D', 'TL': 'L', 'TR': 'R' }, 'D': { 'TB': 'U', 'TL': 'R', 'TR': 'L' }, 'R': { 'TB': 'L', 'TL': 'U', 'TR': 'D' }, 'L': { 'TB': 'R', 'TL': 'D', 'TR': 'U' } };
    return obj[current][trans];
}