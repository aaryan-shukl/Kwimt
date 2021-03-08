function login() {
    var username = document.getElementById("username").value;
    localStorage.setItem("U",username);
    window.location = "mainpage.html";
}