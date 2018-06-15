if (window.sessionStorage) {
    var txtUsername = document.getElementById("username");
    var txtAnswer = document.getElementById("answer");
    
    sessionStorage.setItem("answer", "example message");

    txtUsername.value = sessionStorage.getItem("username");
    txtAnswer.value = sessionStorage.getItem("answer");

    txtUsername.addEventListener("input", function() {
        sessionStorage.setItem("username", txtUsername.value);
    }, false);


}