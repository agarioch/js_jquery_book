function checkLength(e, minLength) {
    var e, elMsg;
    if (!e) {
        e = window.event;
    }
    el = e.target || e.srcElement;
    elMsg = el.nextSibling;

    if (el.value.length < minLength) {
        elMsg.innerHTML = 'Username must be ' + minLength + 'characters or more.'
    } else {
        elMsg.innerHTML = '';
    }
}

var elUsername = document.getElementById('username');
if (elUsername.addEventListener) {
    elUsername.addEventListener('blur', function(e) {
        checkLength(e, 5);
    }, false);
} else {
    //IE 5-8 fallback
    elUsername.attachEvent('onblur', function(e) {
        checkLength(e, 5);
    });
}