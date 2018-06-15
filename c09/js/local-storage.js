if (window.localStorage) {
    var txtUsername = document.getElementById("username");
    var txtAnswer = document.getElementById("answer");

    txtUsername.value = localStorage.getItem("username");
    txtAnswer.value = localStorage.getItem("answer");

    txtUsername.addEventListener("input", function() {
        localStorage.setItem("username", txtUsername.value);
    }, false);

    localStorage.setItem("answer", "example message");

}