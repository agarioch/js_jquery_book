$('li em').addClass('seasonal');
$('li.hot').addClass('favorite');
$('li').on('click', function (){
    this.remove();
});