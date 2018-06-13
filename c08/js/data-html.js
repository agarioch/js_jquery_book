var xhr = new XMLHttpRequest();

xhr.onload = function() {

/*     
    run on server only - will not work locally
    if(xhr.status === 200) {
        document.getElementById('content').innerHTML = xhr.responseText;
    } */
    document.getElementById('content').innerHTML = xhr.responseText;
    
};

xhr.open('GET', 'data/data.html', true);
xhr.send(null);