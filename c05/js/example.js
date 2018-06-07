// Add 2 new items to the list

var list = document.getElementsByTagName('ul')[0];

var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

// Add classes and numbers to the list items

var listItems = document.getElementsByTagName('li');

var i;
for (i = 0; i < listItems.length; i++) {
    listItems[i].className = 'cool';
}

var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' +totalItems + '</span>';
heading.innerHTML = newHeading;