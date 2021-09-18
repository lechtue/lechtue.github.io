function f(d) {
    if (d == 'c') {
        document.getElementById('res').value = "";
        return;
    }//Nếu ấn C thì reset
    res = document.getElementById('res').value;//Lấy giá trị đã nhập
    if (res == 0 && d == 0)
        return;//Trường hợp res=0 và nhập 0 thì không hiện cộng dồn giá trị 0
    if (d == '+' || d == '-' || d == '*' || d == '/') {
        opr = d;
        num = parseFloat(res);
        document.getElementById('res').value = d;
        return;//Khi nhập toán tử, lưu giá trị đã nhập vào num, toan tử lưu vào opr
    }
    if (d == '=') {
        num1 = parseFloat(res);
        switch (opr) {
            case '+': ans = num + num1; break;
            case '-': ans = num - num1; break;
            case '*': ans = num * num1; break;
            case '/': ans = parseInt(num / num1); break;
        }
        document.getElementById('res').value = ans;
        return;//Khi nhập =, lưu giá trị đã nhập vào num1, kiểm tra opr, thực hiện tính toán num với num1
    }
    if (d == '--') {
        document.getElementById('res').value *= -1;
        return;//Trường hợp nhập giá trị âm
    }
    //Hàm nhập dữ liệu
    if (!isNaN(document.getElementById('res').value))//Kiểm tra giá trị đầu vào phải là number không
        document.getElementById('res').value += d;//Nếu phải, ghi giá trị vừa nhập vào sau giá trị cũ
    else
        document.getElementById('res').value = d;//Nếu không, xoá toàn bộ giá trị đã nhập, ghi giá trị mới 
}