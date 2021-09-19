
$(document).ready(function () {
    $("#b15").click(function () {
        $("#res").val("");
        return;
    });//Nếu ấn C thì reset

    $("#b1").click(function () {
        res = $("#res").val();//Lấy giá trị đã nhập
        if (res == 0)
            return;//Trường hợp res=0 và nhập 0 thì không hiện cộng dồn giá trị 0
        else if (!!isNaN($("#res").val()))
            $("#res").val("0");
        else
            $("#res").val(function (i, origText) {
                return origText + "0";
            });
    });

    $("#b2").click(function () {
        if (!!isNaN($("#res").val()))
            $("#res").val("1");
        else
            $("#res").val(function (i, origText) {
                return origText + "1";
            });
        res = $("#res").val();
        //Lấy giá trị đã nhập
    });

    $("#b3").click(function () {
        if (!!isNaN($("#res").val()))
            $("#res").val("2");
        else
            $("#res").val(function (i, origText) {
                return origText + "2";
            });
        res = $("#res").val();
        //Lấy giá trị đã nhập
    });

    $("#b5").click(function () {
        if (!!isNaN($("#res").val()))
            $("#res").val("3");
        else
            $("#res").val(function (i, origText) {
                return origText + "3";
            });
        res = $("#res").val();
        //Lấy giá trị đã nhập
    });

    $("#b6").click(function () {
        if (!!isNaN($("#res").val()))
            $("#res").val("4");
        else
            $("#res").val(function (i, origText) {
                return origText + "4";
            });
        res = $("#res").val();
        //Lấy giá trị đã nhập
    });

    $("#b7").click(function () {
        if (!!isNaN($("#res").val()))
            $("#res").val("5");
        else
            $("#res").val(function (i, origText) {
                return origText + "5";
            });
        res = $("#res").val();
        //Lấy giá trị đã nhập
    });

    $("#b9").click(function () {
        if (!!isNaN($("#res").val()))
            $("#res").val("6");
        else
            $("#res").val(function (i, origText) {
                return origText + "6";
            });
        res = $("#res").val();
        //Lấy giá trị đã nhập
    });

    $("#b10").click(function () {
        if (!!isNaN($("#res").val()))
            $("#res").val("7");
        else
            $("#res").val(function (i, origText) {
                return origText + "7";
            });
        res = $("#res").val();
        //Lấy giá trị đã nhập
    });

    $("#b11").click(function () {
        if (!!isNaN($("#res").val()))
            $("#res").val("8");
        else
            $("#res").val(function (i, origText) {
                return origText + "8";
            });
        res = $("#res").val();
        //Lấy giá trị đã nhập
    });

    $("#b13").click(function () {
        if (!!isNaN($("#res").val()))
            $("#res").val("9");
        else
            $("#res").val(function (i, origText) {
                return origText + "9";
            });
        res = $("#res").val();
        //Lấy giá trị đã nhập
    });

    $("#b4").click(function () {
        opr = "+";
        num = parseFloat(res);
        $("#res").val(opr);
        return;//Khi nhập toán tử, lưu giá trị đã nhập vào num, toan tử lưu vào opr

    });

    $("#b8").click(function () {
        opr = "-";
        num = parseFloat(res);
        $("#res").val(opr);
        return;//Khi nhập toán tử, lưu giá trị đã nhập vào num, toan tử lưu vào opr

    });

    $("#b12").click(function () {
        opr = "*";
        num = parseFloat(res);
        $("#res").val(opr);
        return;//Khi nhập toán tử, lưu giá trị đã nhập vào num, toan tử lưu vào opr

    });

    $("#b16").click(function () {
        opr = "/";
        num = parseFloat(res);
        $("#res").val(opr);
        return;//Khi nhập toán tử, lưu giá trị đã nhập vào num, toan tử lưu vào opr

    });

    $("#b17").click(function () {
        num1 = parseFloat(res);
        switch (opr) {
            case '+': ans = num + num1; break;
            case '-': ans = num - num1; break;
            case '*': ans = num * num1; break;
            case '/': ans = parseInt(num / num1); break;
        }
        $("#res").val(ans);
        return;//Khi nhập =, lưu giá trị đã nhập vào num1, kiểm tra opr, thực hiện tính toán num với num1
    });

    $("#b14").click(function () {
        if (!!isNaN($("#res").val()))
            $("#res").val("-");
        else
        $("#res").val(function (i, origText) {
            return "-" + origText;
        });
        return;//Trường hợp nhập giá trị âm
    });
});