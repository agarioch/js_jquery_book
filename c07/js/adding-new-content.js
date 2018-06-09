$(function(){
    $('ul').before('<p class="notice">Just updated</p>');
    $('li.hot').prepend('+ ');
    var $newListItem = $('<li><em>glutten-free</em> soy sauce</li>');
    $('li:last').after($newListItem);
});