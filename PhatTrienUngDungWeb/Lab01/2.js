function findLMV() {
    var str = document.getElementById('t1').value
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'a' || str.charAt(i) == 'e'
            || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u')
            return ("Left most vowel of " + str + " is at location " + (i + 1));
    }
    //Chạy vòng lặp kiểm tra vị trí nguyên âm xuất hiện đầu tiên trong chuỗi đã nhập
    return ("No vowels found for string " + str);
}

function reverse(num) {
    rnum = 0;
    temp = num;
    if (isNaN(num)) {
        return "Invalid number";
        //Kiểm tra kiễu dữ liệu đầu vào phải là number
    }
    while (num != 0) {
        rnum *= 10;
        rnum += num % 10;
        num -= num % 10;
        num = Math.floor(num / 10);
    }//Đảo vị trí các chữ số từ chuỗi đã nhập
    return "Reverse of num " + temp + " is " + rnum;
}