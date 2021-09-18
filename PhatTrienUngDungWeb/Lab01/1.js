function sc(input) {
    var input = document.getElementById('chuoi').value;
    res = input.split("-");
    if (res.length != 2) {
        alert("Invalid range!");
        return;
    }//Kiểm tra chuỗi nhập, ngắt chuỗi tại dấu "-"

    first = parseInt(res[0]);
    second = parseInt(res[1]);
    if (first > second) {
        alert("Y must be greater than X!");
        return;
    }//Kiểm tra giá trị của chuỗi đã nhập

    str = "<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";
    //Tạo bảng
    for (i = first; i <= second; i++) {
        str = str + "<tr><td>" + i + "<td>" + (i * i) + "<td>" + (i * i * i);
    }
    //Tính giá trị bình phương và lập phương của từng giá trị trong chuỗi
    document.write(str);
}