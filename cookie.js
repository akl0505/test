// Hàm để lưu cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); // thời gian hết hạn cookie
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; // tạo cookie
}

// Hàm để đọc cookie
function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie); // lấy cookie đã mã hóa
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length); // trả về giá trị cookie
        }
    }
    return "";
}

// Hàm để lưu tên người dùng vào cookie
function savetest() {
    const test = document.getElementById("test").value;
    if (test != "") {
        setCookie("test", test, 7); // lưu tên vào cookie trong 7 ngày
        alert("Đã lưu tên của bạn: " + test);
    }
}

// Hàm để kiểm tra cookie khi trang được tải
window.onload = function () {
    const savedtest = getCookie("test");
    if (savedtest != "") {
        document.getElementById("test").value = savedtest; // điền giá trị đã lưu vào ô input
        alert("Xin chào, " + savedtest + "! Cookie của bạn đã được lưu.");
    }
};
