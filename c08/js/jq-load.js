$('nav a').on('click', function(e) {
    e.preventDefault();
    var url = this.href;
    
    // update current highlighted link
    $('nav a.current').removeClass('current');
    $(this).addClass('current');

    // update content
    $('#container').remove();
    $('#content').load(url + ' #content').hide().fadeIn('slow');
})