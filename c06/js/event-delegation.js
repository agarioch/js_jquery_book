function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}

function itemDone(e) {
    // remove li from list
    var target, elParent, elGrandparent;
    target = getTarget(e);
    elParent = target.parentNode;
    elGrandparent = target.parentNode.parentNode;
    elGrandparent.removeChild(elParent);

    // Prevent default action
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        // IE 5-8
        e.returnValue = false;
    }
}

var el = document.getElementById('shoppingList');
if (el.addEventListener) {
    el.addEventListener('click', function(e) {
        itemDone(e);
    }, false);
} else {
    // IE5-8
    el.attachEvent('onclick', function(e) {
        itemDone(e);
    });
}