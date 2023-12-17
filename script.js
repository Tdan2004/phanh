// Hàm để tạo một cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Hàm để đọc một cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Hàm để xóa một cookie
function eraseCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// Hàm để lấy nội dung yêu cầu từ form đăng ký
function getRequest() {
  var request = document.getElementById("request").value;
  return request;
}

// Hàm để lưu nội dung yêu cầu vào một cookie
function saveRequest() {
  var request = getRequest();
  setCookie("request", request, 7); // Lưu cookie trong 7 ngày
}

// Hàm để hiển thị nội dung yêu cầu từ cookie ở trang chủ
function showRequest() {
  var request = getCookie("request");
  if (request) {
    // Tạo một thẻ p để chứa nội dung yêu cầu
    var p = document.createElement("p");
    p.innerHTML = request;
    // Thêm thẻ p vào phần tử có id là "home"
    var home = document.getElementById("home");
    home.appendChild(p);
  }
}
