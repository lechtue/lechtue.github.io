$(document).ready(function () {
    $("#find").click(function () {
        str = $("#t1").val();
        count = str.length;
        for (i = 0; i < count; i++) {
            if (str.charAt(i) == 'a' || str.charAt(i) == 'e'
                || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u')
                alert("Left most vowel of " + str + " is at location " + (i + 1));
            return;
        }
        //Chạy vòng lặp kiểm tra vị trí nguyên âm xuất hiện đầu tiên trong chuỗi đã nhập
        alert("No vowels found for string " + str);
        return;
    });

    $("#reverse").click(function () {
        num = $('#t2').val();
        rnum = 0;
        temp = num;
        if (isNaN(num)) {
            alert("Invalid number");
            return; //Kiểm tra kiễu dữ liệu đầu vào phải là number
        }
        while (num != 0) {
            rnum *= 10;
            rnum += num % 10;
            num -= num % 10;
            num = Math.floor(num / 10);
        }//Đảo vị trí các chữ số từ chuỗi đã nhập
        alert("Reverse of num " + temp + " is " + rnum);
        return;
    });
});